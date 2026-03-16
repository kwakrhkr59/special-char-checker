import { ALLOWED_BASE_RE } from '../constants/config';

export const toUnicode = (ch) =>
  ch.codePointAt(0).toString(16).toUpperCase().padStart(4, "0");

export const isAllowed = (ch, allowedChars) =>
  ALLOWED_BASE_RE.test(ch) || allowedChars.includes(ch);

export function analyzeText(text, allowedChars) {
  const segments = [];
  const badMap = {};

  for (const ch of text) {
    if (isAllowed(ch, allowedChars)) {
      if (segments.length && !segments[segments.length - 1].isBad) {
        segments[segments.length - 1].text += ch;
      } else {
        segments.push({ text: ch, isBad: false });
      }
    } else {
      segments.push({ text: ch, isBad: true, char: ch, code: toUnicode(ch) });
      badMap[ch] = (badMap[ch] || 0) + 1;
    }
  }
  return { segments, badMap };
}
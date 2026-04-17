import { useState, useCallback, useRef, useEffect } from "react";
import { DEFAULT_ALLOWED, ALLOWED_BASE_RE } from "../constants/config";
import { analyzeText } from "../utils/checkerUtils";

const STORAGE_KEY = "allowedChars";

export function useChecker() {
  const [allowedChars, setAllowedChars] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_ALLOWED;
    } catch {
      return DEFAULT_ALLOWED;
    }
  });
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);
  const [selectedChar, setSelectedChar] = useState(null);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  // allowedChars가 변경될 때 localStorage에 저장
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allowedChars));
  }, [allowedChars]);

  const showToast = useCallback((msg) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2200);
  }, []);

  const runCheck = useCallback((text = inputText) => {
    if (!text) { setResult(null); return; }
    setResult(analyzeText(text, allowedChars));
    setSelectedChar(null);
  }, [inputText, allowedChars]);

  const clearAll = useCallback(() => {
    setInputText("");
    setResult(null);
    setSelectedChar(null);
  }, []);

  const addAllowedChar = useCallback((val) => {
    val = val.trim();
    if (!val) { showToast("추가할 특수문자를 입력해주세요."); return false; }
    if (ALLOWED_BASE_RE.test(val)) { showToast("기본 허용 문자입니다."); return true; }
    if (allowedChars.includes(val)) { showToast("이미 목록에 있습니다."); return true; }
    setAllowedChars((prev) => [...prev, val]);
    return true;
  }, [allowedChars, showToast]);

  const removeAllowedChar = useCallback((index) => {
    setAllowedChars((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const resetAllowedChars = useCallback(() => {
    setAllowedChars(DEFAULT_ALLOWED);
    showToast("허용 문자 목록이 초기화되었습니다.");
  }, [showToast]);

  const replaceChar = useCallback((fromChar, toChar) => {
    if (!toChar) { showToast("바꿀 문자를 입력해주세요."); return; }
    const next = inputText.split(fromChar).join(toChar);
    setInputText(next);
    setResult(analyzeText(next, allowedChars));
    showToast("문자를 교체했습니다.");
  }, [inputText, allowedChars, showToast]);

  return {
    allowedChars, inputText, setInputText, result, selectedChar, toast,
    runCheck, clearAll, addAllowedChar, removeAllowedChar, resetAllowedChars, replaceChar,
    toggleSelect: (ch) => setSelectedChar(prev => prev === ch ? null : ch),
    addBadToAllow: (ch) => {
      setAllowedChars(prev => [...prev, ch]);
      if (inputText) setResult(analyzeText(inputText, [...allowedChars, ch]));
    }
  };
}
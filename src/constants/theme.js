export const COLORS = {
  bg: "#f5f6fa",
  surface: "#ffffff",
  surface2: "#f0f1f7",
  border: "#e2e4ef",
  borderFocus: "#7b8cde",
  accent: "#4f63d2",
  accentLight: "#eef0fc",
  accentMid: "#c5caf5",
  accentHover: "#3a4fc0",
  red: "#c0152e",
  redDim: "#f4a0aa",
  redLight: "#fff0f3",
  redMid: "#ffc0cb",
  green: "#22a861",
  greenLight: "#edfaf4",
  greenMid: "#a7e8c5",
  textPrimary: "#1a1d2e",
  textSecondary: "#6b7080",
  textMuted: "#a8abbe",
};

export const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Pretendard:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

  :root {
    --bg: ${COLORS.bg};
    --surface: ${COLORS.surface};
    --surface2: ${COLORS.surface2};
    --border: ${COLORS.border};
    --border-focus: ${COLORS.borderFocus};
    --accent: ${COLORS.accent};
    --accent-light: ${COLORS.accentLight};
    --accent-mid: ${COLORS.accentMid};
    --accent-hover: ${COLORS.accentHover};
    --red: ${COLORS.red};
    --red-dim: ${COLORS.redDim};
    --red-light: ${COLORS.redLight};
    --red-mid: ${COLORS.redMid};
    --green: ${COLORS.green};
    --green-light: ${COLORS.greenLight};
    --green-mid: ${COLORS.greenMid};
    --text-primary: ${COLORS.textPrimary};
    --text-secondary: ${COLORS.textSecondary};
    --text-muted: ${COLORS.textMuted};
    
    --shadow: 0 4px 16px rgba(79,99,210,.10), 0 2px 6px rgba(0,0,0,.05);
    --shadow-sm: 0 2px 8px rgba(0,0,0,.08);
    --r-sm: 8px;
    --r-md: 12px;
    --r-lg: 16px;
    --r-full: 999px;
    
    /* Spacing */
    --gap-xs: 4px;
    --gap-sm: 6px;
    --gap: 8px;
    --gap-md: 12px;
    --gap-lg: 16px;
    --padding-xs: 1px;
    --padding-sm: 5px;
    --padding-md: 8px;
    
    /* Border */
    --border-width: 1.5px;
    --border-width-sm: 1px;
    
    /* Typography */
    --font-size-xs: 10px;
    --font-size-sm: 11px;
    --font-size-base: 12px;
    --font-size-md: 13px;
    --font-size-lg: 14px;
    --font-size-xl: 15px;
    
    /* Animation */
    --transition: 0.15s;
    --transition-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--bg);
    color: var(--text-primary);
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  @keyframes pop-in { from { transform: scale(.75); opacity: 0; } to { transform: scale(1); opacity: 1; } }
  @keyframes slide-down { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes toast-in { from { opacity: 0; transform: translateX(-50%) translateY(16px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }
`;
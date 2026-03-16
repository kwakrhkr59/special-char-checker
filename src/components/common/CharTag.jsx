import React from "react";

export function CharTag({ ch, onRemove }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      background: "var(--accent-light)", border: "1.5px solid var(--accent-mid)",
      borderRadius: "var(--r-full)", padding: "5px 8px 5px 12px",
      fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 500,
      color: "var(--accent)", animation: "pop-in .15s ease",
    }}>
      {ch}
      <button
        aria-label={`${ch} 삭제`}
        onClick={onRemove}
        style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          background: "none", border: "none", cursor: "pointer",
          color: "var(--accent)", opacity: 0.45, width: 18, height: 18,
          borderRadius: "50%", fontSize: 15, fontWeight: 600,
          transition: "all 0.15s",
        }}
        onMouseEnter={e => { e.target.style.opacity = 1; e.target.style.background = "rgba(79,99,210,0.13)"; }}
        onMouseLeave={e => { e.target.style.opacity = 0.45; e.target.style.background = "none"; }}
      >×</button>
    </span>
  );
}
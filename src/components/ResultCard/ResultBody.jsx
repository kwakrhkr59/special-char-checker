import React, { useState } from "react";

export function HighlightMark({ ch, code, active, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <mark
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: active ? "var(--red)" : "var(--red-dim)",
        color: "#fff",
        borderRadius: 4, padding: "1px 4px",
        fontWeight: 700, cursor: "pointer",
        transition: "background .15s",
      }}
    >
      {ch}
      {hovered && (
        <span style={{
          position: "absolute", 
          bottom: "calc(100% + 6px)",
          left: "50%",
          transform: "translateX(-50%)",
          background: "var(--text-primary)", 
          color: "#fff",
          fontFamily: "'DM Mono', monospace", 
          fontSize: 10,
          padding: "4px 8px",
          borderRadius: 5, 
          zIndex: 10,
          whiteSpace: "nowrap",      // 줄바꿈 방지
          display: "inline-block",
          textAlign: "center",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        }}>U+{code}</span>
      )}
    </mark>
  );
}

export function ResultBody({ segments, selectedChar, onClickChar }) {
  return (
    <div style={{ padding: 20, fontSize: 15, lineHeight: 2, whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
      {segments.map((seg, i) =>
        seg.isBad ? (
          <HighlightMark key={i} ch={seg.char} code={seg.code} active={seg.char === selectedChar} onClick={() => onClickChar(seg.char)} />
        ) : ( <span key={i}>{seg.text}</span> )
      )}
    </div>
  );
}
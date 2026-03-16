import React, { useState } from "react";
import { toUnicode } from "../../utils/checkerUtils";
import { IconPlus, IconReplace } from "../common/Icons";

function ChipActionBtn({ children, onClick, hoverGreen, title }) {
  const [hovered, setHovered] = useState(false);
  const base = {
    display: "inline-flex", alignItems: "center", gap: 4,
    background: hovered ? (hoverGreen ? "var(--green-light)" : "rgba(192,21,46,.1)") : "none",
    border: "none", borderLeft: "1px solid var(--red-mid)",
    cursor: "pointer",
    color: hovered && hoverGreen ? "var(--green)" : "var(--red)",
    opacity: hovered ? 1 : .55,
    padding: "0 9px", fontSize: 12,
    fontFamily: "'Pretendard', sans-serif", fontWeight: 600,
    whiteSpace: "nowrap", height: "100%",
    transition: "opacity .15s, background .15s, color .15s",
  };
  return (
    <button style={base} title={title} onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >{children}</button>
  );
}

export function FoundChip({ ch, cnt, isSelected, onSelect, onAddToAllow, onReplace }) {
  const [replaceOpen, setReplaceOpen] = useState(false);
  const [replaceVal, setReplaceVal] = useState("");

  const handleReplace = () => {
    onReplace(ch, replaceVal);
    setReplaceOpen(false);
    setReplaceVal("");
  };

  return (
    <div style={{
      display: "inline-flex", flexDirection: "column",
      border: `1.5px solid ${isSelected ? "var(--red)" : "var(--red-mid)"}`,
      borderRadius: replaceOpen ? "var(--r-sm)" : "var(--r-full)",
      overflow: "hidden", background: "var(--red-light)",
      transition: "all 0.15s",
      boxShadow: isSelected ? "0 0 0 2px rgba(192,21,46,.18)" : "none",
    }}>
      <div style={{ display: "flex", alignItems: "stretch" }}>
        {/* 메인 칩 영역 */}
        <div
          onClick={() => onSelect(ch)}
          style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 10px 5px 12px", cursor: "pointer" }}
        >
          <span style={{ color: "var(--red)", fontWeight: 500, fontFamily: "'DM Mono', monospace" }}>{ch}</span>
          <span style={{ fontSize: 10, color: "#f08090", fontFamily: "'DM Mono', monospace" }}>U+{toUnicode(ch)}</span>
          <span style={{ background: "rgba(192,21,46,.13)", borderRadius: "var(--r-full)", padding: "1px 7px", fontSize: 11, fontWeight: 700, color: "var(--red)" }}>
            {cnt}회
          </span>
        </div>

        <div style={{ display: "flex", borderLeft: "1.5px solid var(--red-mid)" }}>
          <ChipActionBtn
            title="허용 목록에 추가"
            onClick={(e) => { e.stopPropagation(); onAddToAllow(ch); }}
            hoverGreen
          >
            <IconPlus /> 허용
          </ChipActionBtn>
          <ChipActionBtn
            title="전체 바꾸기"
            onClick={(e) => { e.stopPropagation(); setReplaceOpen(v => !v); }}
          >
            <IconReplace /> 바꾸기
          </ChipActionBtn>
        </div>
      </div>

      {/* 바꾸기 입력창 영역 */}
      {replaceOpen && (
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderTop: "1px solid var(--border)", background: "#fafafa" }}>
          <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>바꿀 문자:</span>
          <input
            autoFocus
            style={{ width: 52, height: 30, border: "1.5px solid var(--border)", borderRadius: "var(--r-sm)", textAlign: "center", outline: "none" }}
            value={replaceVal}
            onChange={e => setReplaceVal(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleReplace()}
            placeholder="입력"
          />
          <button 
            onClick={handleReplace}
            style={{ height: 30, padding: "0 10px", background: "var(--accent)", color: "#fff", border: "none", borderRadius: "var(--r-sm)", fontSize: 12, fontWeight: 600, cursor: "pointer" }}
          >
            변경
          </button>
        </div>
      )}
    </div>
  );
}
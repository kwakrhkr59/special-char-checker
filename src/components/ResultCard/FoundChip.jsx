import React, { useState, useRef } from "react";
import { toUnicode } from "../../utils/checkerUtils";
import { IconPlus, IconReplace } from "../common/Icons";

function ChipActionBtn({ children, onClick, hoverGreen, active, title }) {
  const [hovered, setHovered] = useState(false);
  const on = hovered || active;
  const base = {
    display: "inline-flex", alignItems: "center", gap: "var(--gap-xs)",
    background: on ? (hoverGreen ? "var(--green-light)" : "rgba(192,21,46,.08)") : "none",
    border: "none", borderLeft: "var(--border-width) solid var(--red-mid)",
    cursor: "pointer",
    color: on && hoverGreen ? "var(--green)" : "var(--red)",
    opacity: on ? 1 : 0.55,
    padding: "0 9px", fontSize: "var(--font-size-base)",
    fontFamily: "'Pretendard', sans-serif", fontWeight: 600,
    whiteSpace: "nowrap", height: "100%",
    transition: `opacity var(--transition), background var(--transition), color var(--transition)`,
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
  const chipRef = useRef(null);

  const handleReplace = () => {
    if (!replaceVal) return;
    onReplace(ch, replaceVal);
    setReplaceOpen(false);
    setReplaceVal("");
  };

  // 팝오버 위치 계산
  let popoverStyle = {
    position: "fixed",
    display: "flex", alignItems: "center", gap: "var(--gap-sm)",
    padding: "var(--gap-md) var(--gap-md)",
    background: "var(--surface)",
    border: `var(--border-width) solid var(--red-mid)`,
    borderRadius: "var(--r-md)",
    boxShadow: "var(--shadow)",
    zIndex: 1000,
    whiteSpace: "nowrap",
    animation: `pop-in var(--transition) var(--transition-easing)`,
    top: 0, left: 0,
  };

  if (replaceOpen && chipRef.current) {
    const rect = chipRef.current.getBoundingClientRect();
    popoverStyle.top = `${rect.bottom + 8}px`;
    popoverStyle.left = `${rect.left}px`;
  }

  return (
    <div style={{ position: "relative", display: "inline-block" }} ref={chipRef}>

      {/* 칩 본체 — pill 형태 항상 유지 */}
      <div style={{
        display: "inline-flex", alignItems: "stretch",
        border: `var(--border-width) solid ${isSelected ? "var(--red)" : "var(--red-mid)"}`,
        borderRadius: "var(--r-full)",
        background: "var(--red-light)",
        boxShadow: isSelected ? "0 0 0 2px rgba(192,21,46,.15)" : "none",
        overflow: "hidden",
        transition: `box-shadow var(--transition)`,
      }}>
        {/* 메인 칩 영역 */}
        <div onClick={() => onSelect(ch)} style={{
          display: "flex", alignItems: "center", gap: "var(--gap-sm)",
          padding: "var(--padding-sm) var(--gap-md) var(--padding-sm) 12px", cursor: "pointer",
        }}>
          <span style={{ color: "var(--red)", fontWeight: 500, fontFamily: "'DM Mono', monospace" }}>{ch}</span>
          <span style={{ fontSize: "var(--font-size-xs)", color: "var(--red-dim)", fontFamily: "'DM Mono', monospace" }}>U+{toUnicode(ch)}</span>
          <span style={{
            background: "rgba(192,21,46,.1)", borderRadius: "var(--r-full)",
            padding: "var(--padding-xs) 7px", fontSize: "var(--font-size-sm)", fontWeight: 700, color: "var(--red)",
          }}>{cnt}회</span>
        </div>

        {/* 액션 버튼 */}
        <div style={{ display: "flex", borderLeft: `var(--border-width) solid var(--red-mid)` }}>
          <ChipActionBtn title="허용 목록에 추가" onClick={(e) => { e.stopPropagation(); onAddToAllow(ch); }} hoverGreen>
            <IconPlus /> 허용
          </ChipActionBtn>
          <ChipActionBtn
            title="전체 바꾸기"
            active={replaceOpen}
            onClick={(e) => { e.stopPropagation(); setReplaceOpen(v => !v); }}
          >
            <IconReplace /> 바꾸기
          </ChipActionBtn>
        </div>
      </div>

      {/* 팝오버 */}
      {replaceOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={popoverStyle}
        >
          <span style={{ fontSize: "var(--font-size-sm)", color: "var(--text-muted)", fontFamily: "'DM Mono', monospace" }}>
            {ch} →
          </span>
          <input
            autoFocus
            value={replaceVal}
            onChange={e => setReplaceVal(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter") handleReplace();
              if (e.key === "Escape") { setReplaceOpen(false); setReplaceVal(""); }
            }}
            placeholder="문자 입력"
            style={{
              width: 120, height: 28,
              border: `var(--border-width) solid var(--border)`,
              borderRadius: "var(--r-sm)",
              textAlign: "center", outline: "none",
              fontSize: "var(--font-size-md)", fontFamily: "'DM Mono', monospace",
              background: "var(--red-light)",
              color: "var(--red)",
              transition: `border-color var(--transition)`,
            }}
            onFocus={e => e.target.style.borderColor = "var(--red)"}
            onBlur={e => e.target.style.borderColor = "var(--border)"}
          />
          <button
            onClick={handleReplace}
            style={{
              height: 28, padding: "0 10px",
              background: "var(--red)", color: "#fff",
              border: "none", borderRadius: "var(--r-sm)",
              fontSize: "var(--font-size-sm)", fontWeight: 600, cursor: "pointer",
              opacity: replaceVal ? 1 : 0.45,
              transition: `opacity var(--transition)`,
            }}
          >
            변경
          </button>
          <button
            onClick={() => { setReplaceOpen(false); setReplaceVal(""); }}
            style={{
              height: 28, width: 28,
              background: "none",
              border: `var(--border-width-sm) solid var(--border)`,
              borderRadius: "var(--r-sm)",
              color: "var(--text-muted)",
              fontSize: "var(--font-size-lg)", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: `border-color var(--transition), color var(--transition)`,
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--red)"; e.currentTarget.style.color = "var(--red)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
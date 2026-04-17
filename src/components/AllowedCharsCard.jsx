import React, { useState } from "react";
import { CharTag } from "./common/CharTag";

export function AllowedCharsCard({ allowedChars, onAdd, onRemove, onReset }) {
  const [val, setVal] = useState("");

  const handleAdd = () => {
    if (onAdd(val)) setVal("");
  };

  return (
    <section style={cardStyle}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <h2 style={cardTitleStyle}>허용 특수문자 목록</h2>
        {onReset && <button style={resetBtnStyle} onClick={onReset}>초기화</button>}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, minHeight: 36 }}>
        {allowedChars.length === 0 ? (
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>허용된 문자가 없습니다.</span>
        ) : (
          allowedChars.map((ch, i) => <CharTag key={i} ch={ch} onRemove={() => onRemove(i)} />)
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12 }}>
        <input
          style={addInputStyle}
          value={val}
          onChange={e => setVal(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleAdd()}
          maxLength={2}
          placeholder="+"
        />
        <button style={btnSmStyle} onClick={handleAdd}>추가</button>
        <span style={{ fontSize: 11, color: "var(--text-muted)" }}>특수문자 입력 후 추가</span>
      </div>
    </section>
  );
}

const cardStyle = { width: "100%", background: "var(--surface)", borderRadius: "var(--r-lg)", boxShadow: "var(--shadow)", border: "1px solid var(--border)", padding: "24px 28px", marginBottom: 16 };
const cardTitleStyle = { fontSize: 15, fontWeight: 600, textTransform: "uppercase", color: "var(--text-muted)", fontFamily: "'Pretendard', sans-serif", margin: 0 };
const resetBtnStyle = { height: 28, padding: "0 12px", fontSize: 11, fontWeight: 600, background: "transparent", color: "var(--text-muted)", border: "1px solid var(--border)", borderRadius: "var(--r-sm)", cursor: "pointer", transition: "all 0.2s" };
const addInputStyle = { width: 46, height: 36, border: "1.5px solid var(--border)", borderRadius: "var(--r-sm)", background: "var(--surface2)", textAlign: "center", fontFamily: "'DM Mono', monospace", outline: "none" };
const btnSmStyle = { height: 36, padding: "0 16px", fontSize: 13, fontWeight: 600, background: "var(--accent)", color: "#fff", border: "none", borderRadius: "var(--r-sm)", cursor: "pointer" };
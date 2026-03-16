import React from "react";
import { FoundChip } from "./FoundChip";

export function FoundList({ badMap, selectedChar, onSelect, onAddToAllow, onReplace }) {
  const entries = Object.entries(badMap).sort(([, a], [, b]) => b - a);

  return (
    <div style={{ borderTop: "1px solid var(--border)", padding: "16px 20px 20px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <span style={{ fontSize: 15, fontWeight: 600, textTransform: "uppercase", color: "var(--text-muted)", fontFamily: "'Pretendard', sans-serif"}}>
          발견된 문자
        </span>
        <span style={{ fontSize: 11, color: "var(--text-muted)" }}>클릭하면 해당 문자만 강조됩니다</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {entries.map(([ch, cnt]) => (
          <FoundChip
            key={ch}
            ch={ch}
            cnt={cnt}
            isSelected={selectedChar === ch}
            onSelect={() => onSelect(ch)}
            onAddToAllow={onAddToAllow}
            onReplace={onReplace}
          />
        ))}
      </div>
    </div>
  );
}
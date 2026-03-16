import React, { forwardRef } from "react";
import { IconWarn, IconCheck } from "../common/Icons";
import { ResultBody } from "./ResultBody";
import { FoundList } from "./FoundList";

export const ResultCard = forwardRef(({ result, selectedChar, onClickChar, onAddToAllow, onReplace }, ref) => {
  if (!result) return null;

  const totalBad = Object.values(result.badMap).reduce((s, n) => s + n, 0);

  return (
    <section ref={ref} style={resultCardStyle}>
      <div style={topbarStyle}>
        <span style={labelStyle}>검사 결과</span>
        {totalBad > 0 ? (
          <span style={badgeErrorStyle}><IconWarn /> 비허용 문자 {totalBad}개 발견</span>
        ) : (
          <span style={badgeOkStyle}><IconCheck /> 이상 없음</span>
        )}
      </div>

      <ResultBody segments={result.segments} selectedChar={selectedChar} onClickChar={onClickChar} />

      {totalBad > 0 && (
        <FoundList 
          badMap={result.badMap} 
          selectedChar={selectedChar} 
          onSelect={onClickChar} 
          onAddToAllow={onAddToAllow} 
          onReplace={onReplace} 
        />
      )}
    </section>
  );
});

const resultCardStyle = { width: "100%", background: "var(--surface)", borderRadius: "var(--r-lg)", boxShadow: "var(--shadow)", border: "1px solid var(--border)", overflow: "hidden", animation: "slide-down 0.25s ease" };
const topbarStyle = { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 20px", borderBottom: "1px solid var(--border)", background: "var(--surface2)" };
const labelStyle = { fontSize: 15, fontWeight: 600, color: "var(--text-muted)", fontFamily: "'Pretendard', sans-serif"};
const badgeErrorStyle = { display: "inline-flex", alignItems: "center", gap: 5, background: "var(--red-light)", color: "var(--red)", border: "1px solid var(--red-mid)", padding: "4px 11px", borderRadius: "var(--r-full)", fontSize: 12, fontWeight: 600 };
const badgeOkStyle = { ...badgeErrorStyle, background: "var(--green-light)", color: "var(--green)", border: "1px solid var(--green-mid)" };
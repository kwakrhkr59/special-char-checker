import React from "react";
import { IconSearch } from "./common/Icons";

export function InputCard({ inputText, onChange, onCheck, onClear }) {
  // 글자 수 포맷팅 (예: 1,234)
  const charCount = inputText.length.toLocaleString();

  return (
    <section style={cardStyle}>
      <h2 style={cardTitleStyle}>검사할 문단</h2>
      <textarea
        style={textareaStyle}
        value={inputText}
        onChange={(e) => onChange(e.target.value)}
        placeholder="여기에 검사할 문단을 입력하세요..."
        // Ctrl + Enter 단축키 지원
        onKeyDown={(e) => {
          if ((e.ctrlKey || e.metaKey) && e.key === "Enter") onCheck();
        }}
      />
      
      {/* ── 다시 추가된 글자 수 표시 영역 ── */}
      <p style={charCountStyle}>
        {charCount}자
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 14 }}>
        <button style={btnPrimaryStyle} onClick={() => onCheck()}>
          <IconSearch /> 검사하기
        </button>
        <button style={btnGhostStyle} onClick={onClear}>
          초기화
        </button>
        <span style={shortcutHintStyle}>Ctrl + Enter</span>
      </div>
    </section>
  );
}

// 스타일 정의
const cardStyle = { 
  width: "100%", 
  background: "var(--surface)", 
  borderRadius: "var(--r-lg)", 
  boxShadow: "var(--shadow)", 
  border: "1px solid var(--border)", 
  padding: "24px 28px", 
  marginBottom: 16 
};

const cardTitleStyle = { 
  fontSize: 15, 
  fontWeight: 600, 
  textTransform: "uppercase", 
  color: "var(--text-muted)", 
  marginBottom: 14, 
  fontFamily: "'Pretendard', sans-serif"
};

const textareaStyle = { 
  width: "100%", 
  minHeight: 160, 
  background: "var(--surface2)", 
  border: "1.5px solid var(--border)", 
  borderRadius: "var(--r-md)", 
  padding: "14px 16px", 
  fontSize: 15, 
  lineHeight: 1.85, 
  resize: "vertical", 
  outline: "none",
  fontFamily: "inherit",
  transition: "all 0.2s"
};

// 글자 수 전용 스타일
const charCountStyle = {
  textAlign: "right",
  marginTop: 6,
  fontSize: 12,
  color: "var(--text-muted)",
  fontFamily: "'Pretendard', sans-serif"
};

const btnPrimaryStyle = { 
  display: "inline-flex", 
  alignItems: "center", 
  gap: 7, 
  background: "var(--accent)", 
  color: "#fff", 
  padding: "10px 22px", 
  borderRadius: "var(--r-sm)", 
  border: "none", 
  fontWeight: 600, 
  cursor: "pointer",
  transition: "background 0.2s"
};

const btnGhostStyle = { 
  background: "transparent", 
  color: "var(--text-secondary)", 
  border: "1.5px solid var(--border)", 
  padding: "10px 16px", 
  borderRadius: "var(--r-sm)", 
  cursor: "pointer",
  transition: "all 0.2s"
};

const shortcutHintStyle = { 
  marginLeft: "auto", 
  fontSize: 11, 
  color: "var(--text-muted)", 
  background: "var(--surface2)", 
  padding: "3px 9px", 
  borderRadius: 5, 
  border: "1px solid var(--border)",
  fontFamily: "'Pretendard', sans-serif"
};
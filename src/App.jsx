import React, { useEffect, useRef } from "react";
import { GLOBAL_STYLES } from "./constants/theme";
import { useChecker } from "./hooks/useChecker";
import { AllowedCharsCard } from "./components/AllowedCharsCard";
import { InputCard } from "./components/InputCard";
import { ResultCard } from "./components/ResultCard";
import { Toast } from "./components/common/Toast";
import Footer from "./components/common/Footer";

export default function App() {
  const {
    allowedChars, inputText, setInputText, result, selectedChar, toast,
    runCheck, clearAll, addAllowedChar, removeAllowedChar, addBadToAllow,
    replaceChar, toggleSelect
  } = useChecker();

  const resultCardRef = useRef(null);

  useEffect(() => {
    if (result && resultCardRef.current) {
      resultCardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [result]);

  return (
    <>
      <style>{GLOBAL_STYLES}</style>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "56px 20px" }}>
        <header style={{ textAlign: "center", marginBottom: 36 }}>
          <h1>비허용 특수문자 검사기</h1>
        </header>

        <AllowedCharsCard allowedChars={allowedChars} onAdd={addAllowedChar} onRemove={removeAllowedChar} />
        
        <InputCard inputText={inputText} onChange={setInputText} onCheck={runCheck} onClear={clearAll} />

        <ResultCard 
          ref={resultCardRef}
          result={result} 
          selectedChar={selectedChar} 
          onClickChar={toggleSelect}
          onAddToAllow={addBadToAllow}
          onReplace={replaceChar}
        />

        <Footer />
      </div>
      <Toast message={toast} />
    </>
  );
}
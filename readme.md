# 특수문자 검사기 (Special Character Checker)

문단 내에 포함된 **비허용 특수문자**를 실시간으로 탐지하고 관리할 수 있는 웹 도구입니다. 데이터 전처리나 보안 검사 시 눈에 보이지 않거나 허용되지 않은 문자가 포함되는 것을 방지하기 위해 설계되었습니다.

## 🚀 주요 기능

* **실시간 특수문자 분석**: 입력된 텍스트를 즉시 스캔하여 허용 목록(Whitelist)에 없는 문자를 하이라이트합니다.
* **다중 선택 및 강조**: 발견된 문자를 개별 또는 다중 선택하여 본문 내 위치를 동시에 확인할 수 있습니다.
* **유니코드 코드 포인트 노출**: 각 특수문자의 정확한 유니코드(U+XXXX) 정보를 제공하여 혼동하기 쉬운 유사 기호(예: `"`, `“`)를 명확히 구분합니다.
* **일괄 교체 및 허용**: 탐지된 문자를 원하는 다른 문자로 한꺼번에 바꾸거나, 즉시 허용 목록에 추가할 수 있습니다.
* **글자 수 카운터**: 천 단위 구분 기호가 포함된 실시간 글자 수 측정 기능을 제공합니다.

## 🛠 기술 스택

* **Framework**: React 18
* **State Management**: React Hooks (Custom Hook: `useChecker`)
* **Styling**: Inline CSS with Design Tokens (Systemic UI/UX)
* **Font**: Pretendard (KR), DM Mono (Code/Mono)

## 📂 프로젝트 구조

```text
src/
├── components/          # UI Components (Atom & Molecule)
│   ├── common/          # 공용 컴포넌트 (Icons, Buttons, Toast)
│   ├── ResultCard/      # 결과 분석 섹션 (Body, List, Chip)
│   └── ...
├── hooks/               # 비즈니스 로직 (useChecker)
├── utils/               # 순수 자바스크립트 유틸 (Regex, Unicode 처리)
├── constants/           # 테마 스타일 및 전역 설정
└── App.jsx              # 메인 애플리케이션 엔트리

```

## 💻 실행 방법

1. **의존성 설치**
```bash
npm install

```


2. **개발 서버 실행**
```bash
npm start

```


3. **빌드**
```bash
npm run build

```
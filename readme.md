# 🔍 Special Character Checker

문단 내 **비허용 특수문자**를 실시간으로 탐지하고 정제할 수 있는 웹 기반 텍스트 분석 도구입니다.
데이터 전처리나 입력 검증 과정에서 의도치 않은 특수문자가 포함되는 것을 빠르게 확인할 수 있습니다.

## 🌐 Demo

**Live Demo**
[https://special-char-checker.vercel.app](https://special-char-checker.vercel.app)

<img width="900" alt="preview" src="./preview.png" />

---

## ✨ Features

* **실시간 특수문자 탐지**
  정규식 기반 화이트리스트 방식으로 비허용 문자를 즉시 탐지

* **다중 강조 표시**
  발견된 특수문자를 선택하여 본문에서 위치를 시각적으로 확인

* **유니코드 코드포인트 확인**
  각 문자에 대한 Unicode (`U+XXXX`) 정보를 툴팁으로 제공

* **텍스트 정제 기능**
  탐지된 문자를 일괄 교체하거나 허용 목록에 추가 가능

---

## 🛠 Tech Stack

* **React 18**
* **React Hooks (Custom Hook: `useChecker`)**
* **CSS-in-JS**
* **Vercel Deployment**

---

## 📂 Project Structure

관심사의 분리(SoC) 원칙에 따라 로직과 UI를 엄격히 분리하여 유지보수성을 극대화했습니다.

```text
src/
├── components/          # 재사용 가능한 UI 컴포넌트 단위
│   ├── common/          # 공용 원자 컴포넌트 (Icons, Buttons, Toast)
│   ├── ResultCard/      # 결과 분석 및 인터랙션 섹션 (Body, List, Chip)
│   └── ...
├── hooks/               # 비즈니스 로직 및 상태 관리 (useChecker)
├── utils/               # 순수 자바스크립트 유틸리티 (Regex 분석, Unicode 처리)
├── constants/           # 디자인 토큰(Theme) 및 전역 설정(Config)
└── App.jsx              # 컴포넌트 조립 및 애플리케이션 엔트리 포인트

```

---

## 💻 로컬 개발 환경 구축 (Getting Started)

1. **Repository 클론**
```bash
git clone https://github.com/your-username/special-char-checker.git

```


2. **의존성 설치**
```bash
npm install

```


3. **개발 서버 실행**
```bash
npm start

```


4. **프로덕션 빌드**
```bash
npm run build

```



---

## 📄 License

This project is licensed under the MIT License.

---

**다음에 무엇을 도와드릴까요?**

* Vercel 배포 시 `npm run build`에서 발생할 수 있는 오류를 미리 체크해 드릴까요?
* 이미지 링크를 깃허브에 올리는 구체적인 방법을 알려드릴까요?
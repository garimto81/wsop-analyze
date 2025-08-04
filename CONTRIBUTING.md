# Contributing to WSOP 카메라 프로덕션 분석

WSOP 카메라 프로덕션 분석 프로젝트에 기여해주셔서 감사합니다! 🎉

## 📋 목차

- [행동 강령](#행동-강령)
- [기여 방법](#기여-방법)
- [개발 환경 설정](#개발-환경-설정)
- [코딩 가이드라인](#코딩-가이드라인)
- [커밋 메시지 규칙](#커밋-메시지-규칙)
- [Pull Request 가이드](#pull-request-가이드)
- [이슈 리포팅](#이슈-리포팅)
- [라이선스](#라이선스)

## 🤝 행동 강령

이 프로젝트에 참여하는 모든 분들은 서로를 존중하고 건설적인 피드백을 제공해주시기 바랍니다.

### 기대하는 행동
- 다양한 관점과 경험을 존중
- 건설적인 피드백 제공 및 수용
- 커뮤니티의 최선의 이익을 고려
- 다른 커뮤니티 구성원에 대한 공감 표현

### 용납할 수 없는 행동
- 성적, 인종적, 종교적 비하 발언
- 개인 공격이나 모욕적 댓글
- 공개적 또는 사적 괴롭힘
- 다른 사람의 개인 정보 무단 공유

## 🛠️ 기여 방법

### 1. 이슈 제보
버그를 발견했거나 새로운 기능을 제안하고 싶다면:

1. [Issues](https://github.com/garimto81/wsop-analyze/issues)에서 기존 이슈 확인
2. 중복되지 않는다면 새 이슈 생성
3. 명확한 제목과 상세한 설명 작성

### 2. 코드 기여

#### 작은 수정사항
- 오타 수정, 문서 개선 등은 직접 Pull Request 생성

#### 큰 변경사항
1. 먼저 이슈를 생성하여 논의
2. 기능 구현 전 설계에 대한 피드백 받기
3. 구현 후 Pull Request 생성

### 3. 문서 개선
- README.md 개선
- 코드 주석 추가
- 사용법 가이드 작성
- 번역 기여

## 💻 개발 환경 설정

### 필수 도구
- Git
- 최신 브라우저 (Chrome, Firefox, Safari, Edge)
- 텍스트 에디터 (VS Code 권장)

### 로컬 설정
```bash
# 1. 저장소 포크 및 클론
git clone https://github.com/YOUR_USERNAME/wsop-analyze.git
cd wsop-analyze

# 2. 원본 저장소를 upstream으로 추가
git remote add upstream https://github.com/garimto81/wsop-analyze.git

# 3. 브라우저에서 확인
open index.html  # macOS
start index.html # Windows
```

### 권장 VS Code 확장
- Live Server
- Prettier - Code Formatter
- ESLint
- HTML CSS Support

## 📝 코딩 가이드라인

### HTML
- 시맨틱 HTML5 태그 사용
- 접근성(a11y) 고려
- 유효한 HTML 작성 (W3C 검증)

```html
<!-- Good -->
<section aria-labelledby="camera-strategy">
  <h2 id="camera-strategy">카메라 배치 전략</h2>
  <p>Phase별 운영 방식...</p>
</section>

<!-- Bad -->
<div>
  <div class="title">카메라 배치 전략</div>
  <div>Phase별 운영 방식...</div>
</div>
```

### CSS
- CSS3 표준 준수
- 모바일 우선 반응형 디자인
- CSS 변수 활용
- BEM 방법론 고려

```css
/* Good */
:root {
  --primary-color: #2c3e50;
  --secondary-color: #e74c3c;
}

.card {
  background: var(--primary-color);
}

.card--highlight {
  border: 2px solid var(--secondary-color);
}

/* Bad */
.card {
  background: #2c3e50;
}

.highlighted-card {
  border: 2px solid #e74c3c;
}
```

### JavaScript
- ES6+ 문법 사용
- 함수형 프로그래밍 선호
- 명확한 변수명 사용
- 에러 처리 포함

```javascript
// Good
const createChart = (ctx, data) => {
  if (!ctx || !data) {
    console.error('Chart creation requires canvas context and data');
    return null;
  }
  
  return new Chart(ctx, {
    type: 'line',
    data,
    options: getChartOptions()
  });
};

// Bad
function makeChart(c, d) {
  var chart = new Chart(c, {
    type: 'line',
    data: d
  });
  return chart;
}
```

## 📋 커밋 메시지 규칙

[Conventional Commits](https://www.conventionalcommits.org/) 형식을 따릅니다:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### 타입
- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 관련
- `style`: 코드 스타일 (포맷팅, 세미콜론 등)
- `refactor`: 코드 리팩토링
- `perf`: 성능 개선
- `test`: 테스트 추가/수정
- `chore`: 빌드, 설정 파일 수정

### 예시
```bash
# Good
git commit -m "feat: Day 5 전환 타임라인 테이블 추가"
git commit -m "fix: Chart.js 로딩 에러 해결"
git commit -m "docs: README에 사용법 섹션 추가"
git commit -m "style: CSS 변수명 일관성 개선"

# Bad
git commit -m "update"
git commit -m "fix bug"
git commit -m "add stuff"
```

## 🔄 Pull Request 가이드

### PR 생성 전
1. upstream에서 최신 변경사항 동기화
```bash
git fetch upstream
git checkout main
git merge upstream/main
```

2. 기능 브랜치 생성
```bash
git checkout -b feature/your-feature-name
```

3. 변경사항 커밋
```bash
git add .
git commit -m "feat: your feature description"
```

4. 브랜치 푸시
```bash
git push origin feature/your-feature-name
```

### PR 템플릿
```markdown
## 📝 Description
변경사항에 대한 명확한 설명

## 🎯 Motivation and Context
왜 이 변경이 필요한가?

## 📋 Changes
- [ ] 새로운 기능 추가
- [ ] 버그 수정
- [ ] 문서 업데이트
- [ ] 리팩토링

## 🧪 Testing
테스트 방법 및 확인 사항

## 📱 Screenshots
UI 변경사항이 있다면 스크린샷 추가

## ✅ Checklist
- [ ] 코드가 프로젝트 스타일 가이드를 따름
- [ ] 자체 리뷰 완료
- [ ] 주석이 필요한 코드에 주석 추가
- [ ] 문서 업데이트 (필요한 경우)
```

### 리뷰 과정
1. 자동 검사 통과 확인
2. 최소 1명의 리뷰어 승인 필요
3. 모든 댓글 해결
4. 충돌 해결 후 머지

## 🐛 이슈 리포팅

### 버그 리포트 템플릿
```markdown
## 🐛 Bug Description
버그에 대한 명확하고 간결한 설명

## 🔄 Steps to Reproduce
1. '...'로 이동
2. '....' 클릭
3. '....'까지 스크롤
4. 에러 발생

## 🎯 Expected Behavior
예상했던 동작

## 📱 Screenshots
가능하다면 스크린샷 추가

## 💻 Environment
- OS: [e.g. iOS]
- Browser: [e.g. chrome, safari]
- Version: [e.g. 22]

## 📝 Additional Context
기타 맥락 정보
```

### 기능 요청 템플릿
```markdown
## ✨ Feature Request
기능에 대한 명확하고 간결한 설명

## 🎯 Problem
해결하고자 하는 문제

## 💡 Proposed Solution
원하는 해결 방법

## 🔄 Alternatives
고려한 대안들

## 📝 Additional Context
기타 맥락 정보
```

## 📄 라이선스

이 프로젝트에 기여함으로써, 귀하의 기여가 동일한 [MIT License](LICENSE) 하에 라이선스될 것에 동의합니다.

## 🙋‍♀️ 질문이 있나요?

- [GitHub Issues](https://github.com/garimto81/wsop-analyze/issues)에 질문 등록
- [GitHub Discussions](https://github.com/garimto81/wsop-analyze/discussions) 참여

## 🎉 감사합니다!

여러분의 기여가 이 프로젝트를 더욱 훌륭하게 만듭니다. 작은 기여든 큰 기여든 모두 소중하고 감사합니다!

---

Happy Contributing! 🚀
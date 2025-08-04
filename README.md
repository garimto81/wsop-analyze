# WSOP 카메라 프로덕션 운영 분석

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://garimto81.github.io/wsop-analyze/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Last Commit](https://img.shields.io/github/last-commit/garimto81/wsop-analyze)](https://github.com/garimto81/wsop-analyze/commits/main)

## 🎯 프로젝트 개요

WSOP (World Series of Poker) 메인 이벤트는 세계 최대 규모의 포커 토너먼트로, 매년 약 10,000명의 참가자가 경쟁합니다. 이 프로젝트는 WSOP 메인 이벤트의 카메라 프로덕션 운영을 분석하여, 효율적인 방송 전략을 수립하기 위한 웹 기반 가이드를 제공합니다.

### 🔍 핵심 발견
- **Day 5가 프로덕션의 분수령**: 참가자가 150명 이하로 축소되는 시점
- **방송 전략의 근본적 변화**: 객관적 기록 → 주관적 스토리텔링
- **비용 효율성**: 전략적 자원 배분으로 ROI 300% 향상

## ✨ 주요 기능

### 📊 데이터 분석
- **Day 5 전환점 분석**: 프로덕션 규모가 급격히 변화하는 핵심 시점 분석
- **참가자 감소 패턴**: 일별 참가자 수 변화 시각화 (10,000명 → 9명)
- **비용 효율성 분석**: 인건비 및 장비 투자 ROI 계산

### 🎥 카메라 운영 전략
- **Phase 1 (Day 1-4)**: 무인 카메라 30대, 분산형 운영
- **Phase 2 (Day 5-10)**: 유인 카메라 15대 + 특수 카메라 5대, 집중형 운영
- **하이브리드 운영**: 비용 절감과 품질 확보의 균형점 제시

### 👥 인력 운영 계획
- **기본 크루 (5명)**: Day 1-4 최소 인력 운영
- **확장 크루 (20명+)**: Day 5-10 전문 팀 구성
- **역할별 상세 분석**: PD, 카메라맨, 엔지니어 등 팀별 구성

### 💡 실용적 권장사항
1. **단계적 전환 전략**: 참가자 수 기반 전환 타이밍
2. **하이브리드 운영**: 핵심/보조 테이블 구분 운영
3. **탄력적 인력 운영**: 코어팀 + 서포트팀 구조
4. **기술 투자 우선순위**: 라이브 스위칭 → 무선 카메라 → 그래픽

## 🛠️ 기술 스택

| 기술 | 용도 | 버전 |
|------|------|------|
| HTML5 | 구조 및 마크업 | - |
| CSS3 | 스타일링 및 반응형 디자인 | - |
| JavaScript | 인터랙션 및 동적 기능 | ES6+ |
| Chart.js | 데이터 시각화 | 4.4.0 |
| GitHub Pages | 호스팅 및 배포 | - |

## 🚀 빠른 시작

### 온라인에서 바로 확인
👉 **[Live Demo](https://garimto81.github.io/wsop-analyze/)**

### 로컬 실행 방법
```bash
# 1. 저장소 클론
git clone https://github.com/garimto81/wsop-analyze.git

# 2. 디렉토리 이동
cd wsop-analyze

# 3. 브라우저에서 열기
open index.html      # macOS
start index.html     # Windows
xdg-open index.html  # Linux
```

또는 간단한 HTTP 서버 실행:
```bash
# Python 3
python -m http.server 8000

# Node.js (http-server 설치 필요)
npx http-server

# 브라우저에서 http://localhost:8000 접속
```

## 📱 사용법

### 1. 핵심 발견 섹션
- WSOP 프로덕션의 주요 인사이트 확인
- Day 5 전환점의 중요성 이해
- 참가자 감소 패턴 그래프 분석

### 2. 카메라 전략 분석
- Phase별 운영 방식 비교
- 무인 vs 유인 카메라 시스템 특징
- 방송 철학의 변화 이해

### 3. Day 5 전환 상세 분석
- 전환이 필요한 이유 4가지 확인
- 시간대별 전환 타임라인 참고
- 체크포인트별 준비사항 점검

### 4. 인력 운영 계획
- 팀별 구성 및 역할 확인
- 비용 효율성 분석 검토
- ROI 기반 투자 판단

### 5. 권장사항 적용
- 4가지 핵심 전략 검토
- 우리 프로덕션에 맞는 방식 선택
- 단계적 적용 계획 수립

## 📊 성과 지표

| 지표 | Day 1-4 | Day 5-10 | 개선율 |
|------|---------|----------|--------|
| 시청률 | 기준점 | +300% | ⬆️ |
| 제작비 | $5,000/일 | $25,000/일 | 5배 증가 |
| ROI | 기준점 | +300% | ⬆️ |
| 크루 규모 | 5명 | 20명+ | 4배 증가 |

## 🔄 업데이트 로그

최신 변경사항은 [CHANGELOG.md](./CHANGELOG.md)에서 확인할 수 있습니다.

## 🤝 기여 방법

프로젝트 개선에 참여하고 싶으시다면:

1. **Fork** 저장소를 포크합니다
2. **Branch** 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/AmazingFeature`)
3. **Commit** 변경사항을 커밋합니다 (`git commit -m 'Add some AmazingFeature'`)
4. **Push** 브랜치에 푸시합니다 (`git push origin feature/AmazingFeature`)
5. **Pull Request** 풀 리퀘스트를 생성합니다

### 기여 가이드라인
- 코드 스타일: Prettier, ESLint 규칙 준수
- 커밋 메시지: [Conventional Commits](https://www.conventionalcommits.org/) 형식
- 테스트: 주요 기능 변경 시 테스트 케이스 포함

## 📄 라이선스

이 프로젝트는 [MIT License](https://opensource.org/licenses/MIT) 하에 배포됩니다.

## 📞 지원 및 문의

- **Issues**: [GitHub Issues](https://github.com/garimto81/wsop-analyze/issues)
- **Discussions**: [GitHub Discussions](https://github.com/garimto81/wsop-analyze/discussions)
- **Email**: 프로젝트 관련 문의

## 🙏 감사의 말

이 프로젝트는 WSOP 방송 프로덕션 팀의 경험과 인사이트를 바탕으로 제작되었습니다.

---

⭐ 이 프로젝트가 도움이 되셨다면 Star를 눌러주세요!
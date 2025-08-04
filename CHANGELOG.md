# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- 상세한 README.md 문서
- 기여 가이드라인
- 성과 지표 테이블
- 사용법 가이드

## [1.1.0] - 2025-01-04

### 🎯 Major Refactoring - Production Insights Focus

#### Changed
- **전체 웹페이지 재설계**: WSOP 카메라 프로덕션 분석 중심으로 완전 재구성
- **분석 접근법 변경**: 참고 페이지의 단순 복사 → 실제 프로덕션 인사이트 제공
- **콘텐츠 구조 개편**: 카메라팀 관점의 실용적 운영 가이드로 전환
- **차트 데이터 변경**: 연도별 참가자 → 일별 참가자 감소 패턴

#### Added
- **🔍 핵심 발견 섹션**: Day 5 전환점의 중요성과 프로덕션 분수령 분석
- **🎥 카메라 배치 전략**: Phase별 운영 방식 상세 비교
  - Phase 1 (Day 1-4): 무인 카메라 30대, 분산형 운영
  - Phase 2 (Day 5-10): 유인 카메라 15대 + 특수 카메라 5대
- **📅 Day 5 전환 타임라인**: 시간대별 작업 계획 및 체크포인트
  - Day 4 20:00 ~ Day 5 09:00 상세 일정
  - 담당자별 역할 및 책임 명시
- **👥 인력 운영 분석**: 
  - 기본 크루 (5명) vs 확장 크루 (20명+) 비교
  - 팀별 구성 및 역할 상세 분석
  - 방송팀, 카메라팀, 기술팀 세분화
- **💰 비용 효율성 분석**: 
  - 일일 운영비 비교 ($5,000 vs $25,000)
  - ROI 기반 투자 타이밍 분석
  - 시청률 300% 상승 근거 제시
- **💡 4가지 핵심 권장사항**:
  1. 단계적 전환 전략
  2. 하이브리드 운영
  3. 탄력적 인력 운영
  4. 기술 투자 우선순위
- **📊 데이터 시각화 개선**: Day 5 전환점 강조, 로그 스케일 적용
- **📚 프로젝트 문서화**: README.md, CHANGELOG.md 추가

#### Fixed
- **🐛 Chart.js 로딩 문제**: 
  - CDN 버전 고정 (4.4.0)
  - DOMContentLoaded 이벤트 활용
  - Canvas 컨테이너 높이 설정
- **⚡ 페이지 성능 최적화**:
  - JavaScript 초기화 순서 개선
  - IntersectionObserver 최적화
  - 불필요한 DOM 조작 제거
- **📱 반응형 디자인 개선**: 
  - 모바일 환경 최적화
  - 그리드 레이아웃 개선
  - 테이블 스크롤 처리

#### Removed
- **🗑️ 불필요한 섹션 정리**:
  - 상세 일별 분석 (중복성)
  - 실시간 대시보드 (실용성 부족)
  - 중복되는 장비 관리 섹션
  - 불필요한 체크리스트 기능

#### Security
- **🔒 CDN 보안**: Chart.js 버전 고정으로 의존성 취약점 방지

## [1.0.0] - 2025-01-04

### 🚀 Initial Release

#### Added
- **기본 웹페이지 구조**: HTML5, CSS3, JavaScript 기반
- **WSOP 메인 이벤트 가이드**: 초기 방송 가이드 형태
- **일별 참가자 분석**: 기본적인 참가자 수 변화 추적
- **프로덕션 운영 계획**: 기초적인 운영 가이드라인
- **체크리스트 기능**: localStorage 기반 상태 저장
- **GitHub Pages 배포**: 자동 배포 환경 구축

#### Technical
- Chart.js 라이브러리 통합
- 반응형 디자인 기본 구현
- Git 버전 관리 시작

---

## 범례

- 🎯 Major: 주요 기능 추가 또는 대규모 변경
- ✨ Feature: 새로운 기능 추가
- 🐛 Bug Fix: 버그 수정
- ⚡ Performance: 성능 개선
- 📱 UI/UX: 사용자 인터페이스 개선
- 📚 Documentation: 문서 추가/수정
- 🔒 Security: 보안 관련 수정
- 🗑️ Removal: 기능 제거
- 🔧 Maintenance: 유지보수 및 리팩토링
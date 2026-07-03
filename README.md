# Gachon Korean-English Campus App · 가천 한국어-영어 캠퍼스 앱

한국 대학에 입학하거나 재학 중인 외국인 유학생을 위한 **대학생활 특화 한국어-영어 병기 학습 앱**입니다.
A Korean–English bilingual learning app that helps international students master the Korean they actually
need for university life in Korea (course registration, attendance, assignments, presentations, emailing
professors, group projects, the library/admin office, and more).

This repository contains the **MVP** described in the planning document — built as a single-file web app
(the fastest form for classroom testing and student feedback, per the spec).

## 실행 방법 · How to run

No build step or server required. Just open the file in a browser:

```
open index.html        # macOS
# or simply double-click index.html
```

To serve it (e.g. for sharing on a phone / QR code):

```
npx http-server . -p 8080
# then visit http://<your-ip>:8080
```

It is mobile-first and works in any modern mobile or desktop browser.

## 주요 기능 · Features (MVP)

- **메인 화면** — 앱 소개, 오늘의 문장, 학습 진도, 모듈 바로가기
- **10개 학습 모듈** — 인사·수강신청·출석·과제·이메일·발표·조별과제·도서관/행정실·가천대 이해·AI Vision
- **문장 카드** — 한국어 + 영어 번역 + 쉬운 영어 설명 + 발음(로마자)
- **듣기 (Listen)** — 브라우저 기본 음성합성(Web Speech API)으로 한국어 문장 듣고 따라 말하기
- **퀴즈** — 모듈별 객관식 퀴즈, 정답 확인 + 해설
- **역할극 (Role-play)** — 상황별 대화 예시 + 사용할 표현 (AI 튜터 확장 안내 포함)
- **즐겨찾기 / 복습** — 문장 저장 및 복습 추천
- **학습 완료 화면** — 학습 문장 수, 퀴즈 점수, 전체 진도, 문화 팁, 다음 모듈 안내, 결과 공유
- **무료 / 유료 구분** — `is_free` 기반 콘텐츠 잠금 + 구독 플랜 안내 모달 (데모에서는 미리보기로 해제)
- **진도 저장** — 회원가입 없이 브라우저 `localStorage`에만 저장
- **개인정보 안내** — 민감정보 입력 금지 안내 문구

## 파일 구성 · Structure

| File | Description |
|------|-------------|
| `index.html` | 앱 전체 (UI + 스타일 + 로직). 모바일 최적화 단일 페이지 앱 |
| `content.js` | 학습 콘텐츠 데이터 (10개 모듈 / 50개 문장 / 50개 퀴즈 / 역할극 / 문화 팁) |

### 콘텐츠 데이터 구조 · Content schema

`content.js` follows the data columns from the planning document (section 10):
`module_id`, `module_title_ko/en`, `sentence_id`, `sentence_ko/en`, `explanation_en`,
`pronunciation`, `level`, `situation`, `quiz_question`, `quiz_options`, `quiz_answer`,
`roleplay`, `culture_tip`, `is_free`. 향후 Supabase 등 DB로 확장 가능한 구조입니다.

## 향후 로드맵 · Roadmap

- **2차** — React/Next.js 전환, Supabase DB + Auth, 관리자 페이지
- **3차** — 결제 연동, AI 대화 튜터, 발음 피드백, 학습 통계, 기관 관리자 페이지
- **확장** — 베트남어·몽골어·중국어 등 다국어 병기, 대학별 맞춤 콘텐츠

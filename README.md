# SC 포털

여러 서비스로 이동할 수 있는 포털 랜딩 페이지입니다. Next.js (App Router) + TypeScript + Tailwind CSS로 만들었습니다.

## 개발 서버 실행

```bash
npm install
npm run dev
```

기본적으로 [http://localhost:3100](http://localhost:3100) 에서 확인할 수 있습니다 (포트는 `package.json`의 `dev` 스크립트에서 변경 가능합니다).

## 새 서비스 카드 추가하기

`src/data/services.ts` 배열에 아래 형태의 객체를 하나 추가하면, 별도 코드 수정 없이 그리드에 카드가 자동으로 추가됩니다.

```ts
{
  name: '서비스 이름',
  icon: '🚗', // 이모지 아이콘
  description: '한두 줄짜리 짧은 설명',
  url: 'https://example.com'
}
```

카드는 1행 3열 그리드로 배치되며, 화면이 좁아지면 자동으로 줄바꿈됩니다. 카드를 클릭하면 `url`이 새 탭으로 열립니다 (`target="_blank"` + `rel="noopener noreferrer"`).

## 다크 모드

우측 상단의 토글 버튼으로 라이트/다크 모드를 전환할 수 있고, 선택한 테마는 `localStorage`에 저장되어 새로고침 후에도 유지됩니다.

## 배포

Vercel에 새 프로젝트로 연결해 배포합니다. 이 프로젝트는 별도의 환경 변수 없이 정적으로 동작합니다.

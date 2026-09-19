'use client'

import { useEffect, useState } from 'react'

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']

function formatToday(d: Date): string {
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 ${WEEKDAYS[d.getDay()]}요일`
}

// 헤더 설명 문구 뒤에 " · 2026년 9월 19일 토요일"을 이어 붙인다.
export default function TodayLabel() {
  // 이 페이지는 정적으로 미리 렌더링되므로, 서버 렌더 시점의 날짜가
  // 그대로 굳어 보이지 않도록 마운트된 뒤(방문자의 실제 시각 기준으로)
  // 클라이언트에서 계산한다. ThemeToggle과 같은 이유로 마운트 전에는
  // 아무것도 그리지 않는다.
  const [label, setLabel] = useState<string | null>(null)

  useEffect(() => {
    // setState를 콜백 안에서 호출해 effect 본문에서 곧바로 부르지 않게
    // 한다(react-hooks/set-state-in-effect).
    queueMicrotask(() => {
      setLabel(formatToday(new Date()))
    })
  }, [])

  return <>{label ? ` · ${label}` : ''}</>
}

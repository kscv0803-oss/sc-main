'use client'

import { useEffect, useState } from 'react'

const THEME_STORAGE_KEY = 'theme'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

  useEffect(() => {
    // theme-init.js가 hydration 전에 이미 .dark 클래스를 붙여두므로 여기서는
    // 그 값을 그대로 읽어오기만 하면 된다. setState를 콜백 안에서 호출해
    // effect 본문에서 곧바로 부르지 않게 한다(react-hooks/set-state-in-effect).
    queueMicrotask(() => {
      const isDark = document.documentElement.classList.contains('dark')
      setTheme(isDark ? 'dark' : 'light')
    })
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      // localStorage를 사용할 수 없는 환경에서는 조용히 무시합니다.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
      className="shrink-0 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
    >
      {theme === null ? ' ' : theme === 'dark' ? '☀️ 라이트' : '🌙 다크'}
    </button>
  )
}

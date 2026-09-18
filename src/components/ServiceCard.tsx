import type { CSSProperties } from 'react'
import type { Service } from '@/data/services'

// 노트 앱(my-notes) 테마와 맞춘 파스텔 4색을 카드마다 돌아가며 써서
// 서로 다른 색으로 구분되게 한다. 서비스가 늘어나도 배열에 하나만
// 추가하면 되도록, 색은 순서(index)로 자동 배정한다.
const PALETTE = ['cream', 'mint', 'lavender', 'peach'] as const

export default function ServiceCard({
  service,
  index,
}: {
  service: Service
  index: number
}) {
  const accent = PALETTE[index % PALETTE.length]
  const style = {
    backgroundColor: `var(--card-${accent}-bg)`,
    borderColor: `var(--card-${accent}-border)`,
  } satisfies CSSProperties

  return (
    <a
      href={service.url}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      className="flex flex-col items-center gap-3 rounded-2xl border p-10 text-center shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg"
    >
      <span className="text-6xl" aria-hidden="true">
        {service.icon}
      </span>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{service.name}</h2>
      <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">{service.description}</p>
    </a>
  )
}

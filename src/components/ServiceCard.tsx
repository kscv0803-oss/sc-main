import type { Service } from '@/data/services'

// 카드 배경은 모두 같고, 앱별 색은 아이콘 뒤 둥근 사각형에만 쓴다.
// 서비스가 늘어나도 배열에 하나만 추가하면 되도록 색은 순서(index)로
// 자동 배정한다(1번째=베이지, 2번째=민트, ...).
const PALETTE = ['cream', 'mint', 'lavender', 'peach'] as const

export default function ServiceCard({
  service,
  index,
}: {
  service: Service
  index: number
}) {
  const accent = PALETTE[index % PALETTE.length]

  return (
    <a
      href={service.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full flex-col items-start gap-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 text-left transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--card-border-hover)] hover:shadow-md"
    >
      <span
        className="flex h-14 w-14 items-center justify-center rounded-xl text-3xl"
        style={{ backgroundColor: `var(--tile-${accent})` }}
        aria-hidden="true"
      >
        {service.icon}
      </span>

      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {service.name}
        </h2>
        <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          {service.description}
        </p>
      </div>

      <span
        className="absolute right-5 top-5 text-lg text-gray-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-gray-700 dark:text-gray-500 dark:group-hover:text-gray-200"
        aria-hidden="true"
      >
        →
      </span>
    </a>
  )
}

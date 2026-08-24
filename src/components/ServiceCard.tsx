import type { Service } from '@/data/services'

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <a
      href={service.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
    >
      <span className="text-5xl" aria-hidden="true">
        {service.icon}
      </span>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{service.name}</h2>
      <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">{service.description}</p>
    </a>
  )
}

import ServiceCard from "@/components/ServiceCard";
import ThemeToggle from "@/components/ThemeToggle";
import TodayLabel from "@/components/TodayLabel";
import { services } from "@/data/services";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center px-6 py-16 sm:py-24">
      <div className="mb-14 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            SC
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            개인 도구 모음
          </p>
          <div className="mt-1">
            <TodayLabel />
          </div>
        </div>
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.name} service={service} index={index} />
        ))}
      </div>
    </main>
  );
}

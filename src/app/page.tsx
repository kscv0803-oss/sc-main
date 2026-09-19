import ServiceCard from "@/components/ServiceCard";
import ThemeToggle from "@/components/ThemeToggle";
import TodayLabel from "@/components/TodayLabel";
import { services } from "@/data/services";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 pb-16 pt-12 sm:pt-24">
      <header className="mb-10 sm:mb-14">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            SC
          </h1>
          <ThemeToggle />
        </div>
        <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
          개인 도구 모음
          <TodayLabel />
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.name} service={service} index={index} />
        ))}
      </div>
    </main>
  );
}

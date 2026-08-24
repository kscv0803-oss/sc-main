import ServiceCard from "@/components/ServiceCard";
import ThemeToggle from "@/components/ThemeToggle";
import { services } from "@/data/services";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-16 sm:py-24">
      <div className="mb-12 flex items-center justify-between gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          SC
        </h1>
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </div>
    </main>
  );
}

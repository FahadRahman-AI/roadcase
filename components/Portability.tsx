import Image from "next/image";
import { FadeInView } from "./FadeInView";

const STATS = [
  { value: "4", label: "Precision drawers" },
  { value: "< 10s", label: "Deploy time" },
] as const;

export function Portability() {
  return (
    <section className="bg-surface px-8 py-20 md:px-20 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-2 md:gap-16">
        <FadeInView className="relative min-h-[280px] md:min-h-[480px]">
          <Image
            src="/images/boot.jpg"
            alt="RoadCase in a car boot"
            fill
            className="rounded-2xl object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </FadeInView>

        <div className="flex flex-col justify-center">
          <FadeInView>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              PORTABILITY
            </p>
            <h2 className="mt-4 font-heading text-4xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-white md:text-5xl lg:text-6xl">
              BUILT TO GO
              <br />
              WHERE YOU GO.
            </h2>
            <p className="mt-6 max-w-lg text-base text-body">
              From your daily commute to a cross-country road trip. RoadCase sits
              in your boot until you need it — then opens like a workshop in
              under 10 seconds.
            </p>
          </FadeInView>

          <FadeInView className="mt-10 flex flex-wrap gap-10 md:gap-16">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-5xl font-bold text-accent">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </FadeInView>
        </div>
      </div>
    </section>
  );
}

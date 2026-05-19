import Image from "next/image";
import { FadeInView } from "./FadeInView";

const FEATURES = [
  {
    label: "FOUR DRAWERS",
    description: "Precision foam cutouts. Every tool in its place.",
  },
  {
    label: "LED WORK LIGHT",
    description: "Built into the lid. Work in total darkness.",
  },
  {
    label: "WORK MAT INCLUDED",
    description: "Unfolds instantly. Protects you from cold wet ground.",
  },
  {
    label: "FITS ANY BOOT",
    description: "Saloon. Hatchback. Estate. SUV.",
  },
] as const;

export function ProductReveal() {
  return (
    <section className="bg-bg px-8 py-16 md:px-20 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <FadeInView className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            THE SOLUTION
          </p>
          <h2 className="mt-4 font-heading text-5xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-white md:text-7xl lg:text-8xl">
            MEET ROADCASE
          </h2>
        </FadeInView>

        <FadeInView className="mt-10 md:mt-12">
          <div
            className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl"
            style={{ boxShadow: "0 0 80px rgba(204, 0, 0, 0.15)" }}
          >
            <Image
              src="/images/open.jpg"
              alt="RoadCase open with tools and LED work light"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1400px"
            />
          </div>
        </FadeInView>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <FadeInView
              key={feature.label}
              className="border-t-2 border-accent pt-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {feature.label}
              </p>
              <p className="mt-3 text-sm text-body">{feature.description}</p>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}

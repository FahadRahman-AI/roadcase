import { FadeInView } from "./FadeInView";

const PROBLEMS = [
  "The nearest garage is closed and you're 60 miles from home.",
  "Your tools are back in the garage, not with you where you need them.",
  "A basic emergency kit doesn't cut it when the problem is real.",
] as const;

export function Problem() {
  return (
    <section className="bg-bg px-8 py-16 md:px-20 md:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-[40%_60%] md:gap-12">
        <FadeInView>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            THE PROBLEM
          </p>
          <h2 className="mt-4 font-heading text-4xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-white md:text-6xl lg:text-7xl">
            STRANDED.
            <br />
            MILES FROM NOWHERE.
          </h2>
        </FadeInView>

        <div className="divide-y divide-border border-y border-border">
          {PROBLEMS.map((text, index) => (
            <FadeInView key={index} className="py-8 md:py-10">
              <span className="font-heading text-4xl font-bold text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 max-w-xl text-base text-body">{text}</p>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}

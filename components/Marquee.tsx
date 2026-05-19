const TICKER_TEXT =
  "PORTABLE MECHANIC CHEST * BUILT FOR THE ROAD * FOUR PRECISION DRAWERS * LED WORK LIGHT INCLUDED * FITS ANY CAR BOOT * COMING 2026 * ";

export function Marquee() {
  return (
    <section className="overflow-hidden bg-accent py-4" aria-hidden>
      <div className="flex w-max animate-marquee">
        {Array.from({ length: 3 }).map((_, i) => (
          <span
            key={i}
            className="shrink-0 whitespace-nowrap px-8 font-heading text-lg font-bold uppercase tracking-[0.12em] text-white"
          >
            {TICKER_TEXT}
          </span>
        ))}
      </div>
    </section>
  );
}

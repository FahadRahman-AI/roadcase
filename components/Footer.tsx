export function Footer() {
  return (
    <footer className="border-t border-border bg-bg px-8 py-10 md:px-20">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <p className="font-heading text-lg font-bold tracking-wide text-white">
          ROADCASE
        </p>
        <p className="text-sm text-muted">The portable mechanic chest.</p>
        <p className="text-sm text-muted">
          © 2026 RoadCase. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

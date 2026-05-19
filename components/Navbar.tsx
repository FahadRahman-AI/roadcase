export function Navbar() {
  return (
    <header className="animate-nav-fade-in fixed top-0 z-50 h-16 w-full backdrop-blur-[2px]">
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-8 md:px-20">
        <a
          href="#"
          className="font-heading text-lg font-bold tracking-[0.2em] text-white"
        >
          ROADCASE
        </a>
        <a
          href="#waitlist"
          className="inline-flex min-h-12 items-center rounded-full border border-[#444444] px-4 py-2 text-sm font-medium text-white transition-[border-color] duration-200 ease-out hover:border-accent"
        >
          Register Interest
        </a>
      </div>
    </header>
  );
}

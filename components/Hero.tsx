"use client";

import { EmailSignup } from "./EmailSignup";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/hero.jpg)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.85)] to-[rgba(8,8,8,0.3)]"
        aria-hidden
      />

      <div className="relative z-10 flex flex-1 flex-col justify-end p-8 pt-24 md:p-20 md:pt-32">
        <h1 className="animate-fade-up max-w-4xl font-heading text-5xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-white md:text-8xl lg:text-9xl">
          YOUR WORKSHOP. EVERYWHERE YOU GO.
        </h1>

        <p className="animate-fade-up animate-fade-up-delay-1 mt-6 max-w-xl text-base text-body md:text-lg">
          The world&apos;s first portable mechanic chest.
        </p>

        <div className="animate-fade-up animate-fade-up-delay-2 mt-8">
          <EmailSignup />
        </div>
      </div>
    </section>
  );
}

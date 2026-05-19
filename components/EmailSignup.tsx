"use client";

import { useState, type FormEvent } from "react";

type EmailSignupProps = {
  className?: string;
  centered?: boolean;
};

export function EmailSignup({ className = "", centered = false }: EmailSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p
        className={`text-base text-white ${centered ? "text-center" : ""} ${className}`}
      >
        ✓ You&apos;re on the list.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:items-center ${centered ? "mx-auto justify-center" : ""} ${className}`}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="h-[52px] min-h-12 w-full flex-1 rounded-full border border-border bg-surface px-6 text-base text-white placeholder:text-[#444444] transition-[border-color] duration-200 ease-out outline-none focus:border-accent sm:min-w-0"
      />
      <button
        type="submit"
        className="btn-accent-glow h-[52px] min-h-12 shrink-0 cursor-pointer rounded-full bg-accent px-8 text-sm font-semibold tracking-wide text-white transition-[background-color,box-shadow] duration-200 ease-out hover:bg-accent-hover"
      >
        REGISTER INTEREST
      </button>
    </form>
  );
}

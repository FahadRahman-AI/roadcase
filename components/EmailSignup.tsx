"use client";

import { useState, type FormEvent } from "react";

type EmailSignupProps = {
  className?: string;
  centered?: boolean;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function EmailSignup({ className = "", centered = false }: EmailSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.includes("@")) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (response.ok) {
        setStatus("success");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p
        className={`text-base text-white ${centered ? "text-center" : ""} ${className}`}
      >
        ✓ You&apos;re on the list.
      </p>
    );
  }

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className={`flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:items-center ${centered ? "mx-auto justify-center" : ""}`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="Enter your email"
          required
          disabled={status === "loading"}
          className="h-[52px] min-h-12 w-full flex-1 rounded-full border border-border bg-surface px-6 text-base text-white placeholder:text-[#444444] transition-[border-color] duration-200 ease-out outline-none focus:border-accent disabled:opacity-60 sm:min-w-0"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-accent-glow h-[52px] min-h-12 shrink-0 cursor-pointer rounded-full bg-accent px-8 text-sm font-semibold tracking-wide text-white transition-[background-color,box-shadow] duration-200 ease-out hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "SUBMITTING..." : "REGISTER INTEREST"}
        </button>
      </form>
      {status === "error" && (
        <p
          className={`mt-3 text-sm text-accent ${centered ? "text-center" : ""}`}
          role="alert"
        >
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}

import { EmailSignup } from "./EmailSignup";
import { FadeInView } from "./FadeInView";

export function FinalCta() {
  return (
    <section
      id="waitlist"
      className="bg-bg px-8 py-[100px] md:px-20 md:py-[200px]"
    >
      <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
        <FadeInView>
          <span className="inline-flex rounded-full border border-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            BE FIRST IN LINE
          </span>
        </FadeInView>

        <FadeInView className="mt-8">
          <h2 className="font-heading text-5xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-white md:text-8xl lg:text-9xl">
            ROADCASE IS COMING.
          </h2>
        </FadeInView>

        <FadeInView className="mt-6">
          <p className="max-w-[400px] text-base text-body">
            Join the waitlist. Get first access, early pricing, and launch
            updates.
          </p>
        </FadeInView>

        <FadeInView className="mt-10 w-full">
          <EmailSignup centered />
        </FadeInView>

        <p className="mt-6 text-sm text-muted">
          No spam. No commitment. Cancel anytime.
        </p>
      </div>
    </section>
  );
}

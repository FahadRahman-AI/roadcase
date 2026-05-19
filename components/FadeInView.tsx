"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type FadeInViewProps = {
  children: ReactNode;
  className?: string;
};

export function FadeInView({ children, className = "" }: FadeInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in-view ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale" | "fade";

const variants: Record<Direction, string> = {
  up: "translate-y-10",
  left: "translate-x-10",
  right: "-translate-x-10",
  scale: "scale-95",
  fade: "",
};

export default function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  as?: "div" | "li" | "span" | "figure";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${className} ${
        shown
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : `opacity-0 ${variants[direction]}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

type Pair = {
  title: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

function Slider({ pair }: { pair: Pair }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(92, Math.max(8, pct)));
  }, []);

  return (
    <div className="group">
      <p className="mb-4 text-center font-display text-lg uppercase tracking-[0.2em] text-brand-950">
        {pair.title}
      </p>
      <div
        ref={ref}
        className="relative aspect-[4/3] cursor-ew-resize touch-none select-none overflow-hidden border border-brand-200/70"
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          update(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && update(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerLeave={() => (dragging.current = false)}
      >
        <Image
          src={pair.after}
          alt={pair.afterAlt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
          draggable={false}
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={pair.before}
            alt={pair.beforeAlt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
            draggable={false}
          />
        </div>
        <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
          <div className="absolute inset-y-0 -translate-x-1/2 w-px bg-white" />
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-brand-950/90 text-cream">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>
          </div>
        </div>
        <span className="pointer-events-none absolute left-4 top-4 border border-cream/50 bg-brand-950/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest3 text-cream backdrop-blur-sm">
          Before
        </span>
        <span className="pointer-events-none absolute right-4 top-4 border border-cream/50 bg-brand-950/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest3 text-cream backdrop-blur-sm">
          After
        </span>
      </div>
    </div>
  );
}

export default function BeforeAfterSection({ pairs }: { pairs: Pair[] }) {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-site text-center">
        <Reveal>
          <span className="eyebrow">Transformations</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="h-section mt-5 text-brand-950">Slide to see the change</h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-5 max-w-xl text-[15px] font-light leading-relaxed text-ink-mute">
            Drag each handle to reveal the difference our experts deliver — every single appointment.
          </p>
        </Reveal>
      </div>
      <div className="container-site mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {pairs.map((pair, i) => (
          <Reveal key={pair.title} delay={i * 120}>
            <Slider pair={pair} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
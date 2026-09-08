"use client";

import { useState } from "react";
import type { Faq } from "@/lib/services";

export default function FaqList({
  faqs,
  title = "Frequently asked questions",
}: {
  faqs: Faq[];
  title?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32">
      <div className="container-site max-w-3xl">
        <div className="text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="h-section mt-5 text-brand-950">{title}</h2>
        </div>

        <div className="mt-16 space-y-px">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className={`border border-brand-200/60 transition-colors duration-300 ${
                  isOpen ? "bg-white" : "bg-cream hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-5 px-8 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-display text-[1.15rem] leading-snug ${
                      isOpen ? "text-brand-950" : "text-brand-800"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`relative flex h-7 w-7 flex-none items-center justify-center border transition-all duration-500 ${
                      isOpen
                        ? "border-brand-950 text-brand-950"
                        : "border-brand-300 text-brand-400"
                    }`}
                  >
                    <span
                      className={`absolute h-px w-3.5 bg-current transition-transform duration-500 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                    <span
                      className={`absolute h-px w-3.5 bg-current transition-transform duration-500 ${
                        isOpen ? "-rotate-45" : "rotate-90"
                      }`}
                    />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-7 text-[14px] font-light leading-[1.8] text-ink-mute">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
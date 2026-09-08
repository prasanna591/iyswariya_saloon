import { testimonials } from "@/lib/site";
import { IconStar } from "@/components/Icons";
import Reveal from "@/components/Reveal";

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-site text-center">
        <Reveal>
          <span className="eyebrow">Kind Words</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="h-section mt-5 text-brand-950">
            Loved by clients across Chennai
          </h2>
        </Reveal>
      </div>

      <div className="container-site mt-16 grid gap-px border border-brand-200/60 bg-brand-200/30 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal
            key={t.name}
            delay={i * 120}
            as="figure"
            className="group flex flex-col bg-cream p-10 transition-colors duration-500 hover:bg-white"
          >
            <span className="font-display text-[4rem] leading-none text-gold-500/40 select-none">
              &ldquo;
            </span>
            <blockquote className="mt-6 flex-1">
              <p className="font-display text-lg italic leading-[1.7] text-brand-950">
                {t.quote}
              </p>
              <p className="mt-4 text-[13px] font-light leading-[1.8] text-ink-mute">
                {t.body}
              </p>
            </blockquote>
            <figcaption className="mt-8 flex items-center justify-between border-t border-brand-200/60 pt-6">
              <div>
                <span className="font-display text-base text-brand-950">{t.name}</span>
                <span className="ml-2 text-[10px] font-medium uppercase tracking-widest3 text-gold-600">
                  — Verified Client
                </span>
              </div>
              <span className="flex gap-px text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-3.5 w-3.5" />
                ))}
              </span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
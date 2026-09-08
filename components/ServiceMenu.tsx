import type { MenuItem } from "@/lib/services";
import Reveal from "@/components/Reveal";

export default function ServiceMenu({
  headline,
  intro,
  startingPrice,
  items,
}: {
  headline: string;
  intro: string;
  startingPrice: string;
  items: MenuItem[];
}) {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <Reveal direction="left">
            <span className="eyebrow">What We Offer</span>
          </Reveal>
          <Reveal delay={80} direction="left">
            <h2 className="h-section mt-5 text-brand-950">{headline}</h2>
          </Reveal>
          <Reveal delay={140} direction="left">
            <p className="mt-6 font-sans text-[15px] font-light leading-[1.75] text-ink-mute">
              {intro}
            </p>
          </Reveal>
          <Reveal delay={200} direction="left">
            <div className="mt-8 inline-flex items-center gap-3 border border-gold-500/50 px-5 py-3">
              <span className="h-1.5 w-1.5 rotate-45 bg-gold-600" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-widest3 text-brand-900">
                From {startingPrice}
              </span>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <div className="space-y-px border border-brand-200/60">
            {items.map((item, i) => (
              <Reveal key={item.name} delay={i * 90}>
                <div
                  className="group bg-white p-7 transition-colors duration-300 hover:bg-brand-50"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-light text-brand-950">
                      {item.name}
                    </h3>
                    {item.tag && (
                      <span className="text-[10px] font-semibold uppercase tracking-widest3 text-gold-600">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-[13px] font-light leading-relaxed text-ink-mute">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
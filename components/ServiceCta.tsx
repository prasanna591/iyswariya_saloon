import Link from "next/link";
import { siteConfig, waLink } from "@/lib/site";
import { services } from "@/lib/services";
import { IconArrowRight, IconPhone } from "@/components/Icons";
import Reveal from "@/components/Reveal";

export default function ServiceCta({
  current,
  waMessage,
}: {
  current: string;
  waMessage: string;
}) {
  const others = services.filter((s) => s.slug !== current);
  return (
    <section className="py-24 lg:py-32">
      <div className="container-site grid gap-px border border-brand-200/60 bg-brand-200/30 lg:grid-cols-2">
        <div className="relative bg-brand-950 p-10 lg:p-14">
          <Reveal>
            <span className="eyebrow text-gold-500 before:bg-gold-500/60">Begin Today</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-3xl font-light text-cream lg:text-4xl">
              Not sure what
              <br />
              <em className="text-gold-400">suits you?</em>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-md text-[14px] font-light leading-[1.8] text-brand-200">
              Whether it&rsquo;s your hair or skin that needs attention, we&rsquo;ve got
              you covered — begin with a considered consultation.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a
              href={waLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-9 inline-flex bg-gold-500 text-brand-950 hover:bg-gold-400"
            >
              Book Consultation
              <IconArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="bg-white p-10 lg:p-14">
          <Reveal direction="left">
            <span className="eyebrow">Explore More</span>
          </Reveal>
          <Reveal delay={80} direction="left">
            <h2 className="mt-6 font-display text-3xl font-light text-brand-950 lg:text-4xl">
              Continue through
              <br />
              <em className="text-gold-600">the collection</em>
            </h2>
          </Reveal>
          <ul className="mt-8 divide-y divide-brand-200/60 border-y border-brand-200/60">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80} as="li">
                <Link
                  href={`/${s.slug}`}
                  className="group flex items-center justify-between py-4"
                >
                  <span className="font-display text-[15px] text-brand-900 group-hover:text-brand-950">
                    {s.navLabel}
                  </span>
                  <IconArrowRight className="h-4 w-4 text-gold-600 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </ul>
          <div className="mt-6">
            <a href={`tel:${siteConfig.phone}`} className="text-[11px] font-semibold uppercase tracking-widest3 text-ink-mute hover:text-brand-950">
              <IconPhone className="mr-2 inline h-3.5 w-3.5" />
              Or call {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
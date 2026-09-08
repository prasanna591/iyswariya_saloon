import Link from "next/link";
import { serviceMenuData, homepageFaqs } from "@/lib/services";
import { siteConfig, waLink } from "@/lib/site";
import FaqList from "@/components/FaqList";
import { IconArrowRight, IconPhone } from "@/components/Icons";
import Reveal from "@/components/Reveal";

export default function PriceList() {
  return (
    <>
      <section className="bg-brand-950 py-24 lg:py-32">
        <div className="container-site">
          <div className="max-w-xl text-center mx-auto">
            <span className="eyebrow text-gold-500 before:bg-gold-500/60 animate-fade-in">
              Transparent Pricing
            </span>
            <h1 className="h-display mt-6 text-cream animate-fade-in" style={{ animationDelay: "120ms" }}>
              Our Price List
            </h1>
            <p
              className="mx-auto mt-6 max-w-lg text-[14px] font-light leading-[1.8] text-brand-200 animate-fade-in"
              style={{ animationDelay: "220ms" }}
            >
              Every ritual is personalised after a consultation. Prices below are
              our opening points — your exact quote depends on the look you choose.
              <span className="ml-1 text-gold-400">{siteConfig.promo}</span>
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "320ms" }}>
              <a
                href={waLink("Hello Iyswariya, please share the full price list.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Get Full Rate Card
                <IconArrowRight className="h-4 w-4" />
              </a>
              <a href={`tel:${siteConfig.phone}`} className="btn-outline !border-white/30 !text-cream hover:!border-gold-500 hover:!text-cream">
                <IconPhone className="h-4 w-4" />
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container-site max-w-6xl">
          <div className="grid gap-10 md:grid-cols-2">
            {serviceMenuData.map((group, gi) => (
              <Reveal key={group.slug} delay={(gi % 2) * 100}>
                <div className="border border-brand-200/70 bg-white">
                  <div className="flex items-center justify-between border-b border-brand-200/60 px-8 py-6">
                    <h2 className="font-display text-2xl font-light text-brand-950">
                      {group.group}
                    </h2>
                    <Link
                      href={group.slug}
                      className="text-[10px] font-semibold uppercase tracking-widest3 text-gold-600 hover:text-brand-900"
                    >
                      Explore →
                    </Link>
                  </div>
                  <ul className="divide-y divide-brand-200/40">
                    {group.items.map((item) => (
                      <li key={item.name} className="group flex items-start justify-between gap-6 px-8 py-5 transition-colors duration-300 hover:bg-brand-50">
                        <div>
                          <p className="font-display text-[15px] text-brand-900">{item.name}</p>
                          {item.note && (
                            <p className="mt-0.5 text-xs font-light text-ink-mute">{item.note}</p>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="whitespace-nowrap text-[13px] font-semibold tracking-wide text-brand-950">
                            {item.price}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mx-auto mt-14 max-w-2xl text-center text-[13px] font-light leading-relaxed text-ink-mute">
              Prices depend on hair length, texture and product selection. Exact
              quotes are confirmed during your complimentary consultation.
            </p>
          </Reveal>
        </div>
      </section>

      <FaqList faqs={homepageFaqs.slice(0, 4)} title="Pricing & booking questions" />
    </>
  );
}
import Image from "next/image";
import { siteConfig, waLink, images, serviceChips } from "@/lib/site";
import { IconWhatsApp, IconStar, IconArrowRight } from "@/components/Icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-site grid min-h-[92vh] items-center gap-10 py-16 lg:grid-cols-12 lg:gap-6 lg:py-24">
        {/* Left copy */}
        <div className="order-2 lg:order-1 lg:col-span-6">
          <div className="max-w-xl">
            <span className="eyebrow">{siteConfig.positioning}</span>

            <h1 className="h-display mt-6 text-brand-950">
              Beauty, composed as a{" "}
              <em className="font-light text-gold-600">ceremony.</em>
            </h1>

            <p className="mt-7 max-w-md font-sans text-[15px] font-light leading-relaxed text-ink-soft">
              {siteConfig.tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={waLink("Hello Iyswariya, I'd love to book an appointment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book an Appointment
                <IconArrowRight className="h-4 w-4" />
              </a>
              <a href={`tel:${siteConfig.phone}`} className="btn-outline">
                Call {siteConfig.phoneDisplay}
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="font-display text-3xl font-light text-brand-950">
                  {siteConfig.rating}
                  <span className="text-gold-600">★</span>
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-widest3 text-ink-mute">
                  Google Rating
                </div>
              </div>
              <span className="h-10 w-px bg-gold-500/40" aria-hidden="true" />
              <div>
                <div className="font-display text-3xl font-light text-brand-950">
                  15k<span className="text-gold-600">+</span>
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-widest3 text-ink-mute">
                  Beautiful Clients
                </div>
              </div>
              <span className="h-10 w-px bg-gold-500/40" aria-hidden="true" />
              <div>
                <div className="font-display text-3xl font-light text-brand-950">
                  2019
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-widest3 text-ink-mute">
                  Est. Alwarpet
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right portrait */}
        <div className="order-1 lg:order-2 lg:col-span-6">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={images.hero.portrait}
                alt="Inside the Iyswariya Luxury Salon, Alwarpet Chennai"
                fill
                priority
                sizes="(min-width:1024px) 44vw, 100vw"
                className="img-kenburns object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/35 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 hidden animate-fade-in bg-brand-950 px-7 py-6 shadow-lift sm:block" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-3">
                <IconWhatsApp className="h-6 w-6 text-gold-500" />
                <div>
                  <div className="font-display text-lg text-cream">Book a Ritual</div>
                  <div className="text-[10px] font-medium uppercase tracking-widest3 text-gold-300">
                    {siteConfig.promo}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee chip strip */}
      <div className="relative border-t border-gold-500/20 bg-brand-950">
        <div className="flex overflow-hidden py-5">
          <div className="flex min-w-full shrink-0 animate-marquee items-center">
            {[...serviceChips, ...serviceChips, ...serviceChips].map((chip, i) => (
              <span
                key={i}
                className="flex items-center whitespace-nowrap font-display text-2xl font-light tracking-[0.18em] text-cream/80"
              >
                <span className="px-8">{chip}</span>
                <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
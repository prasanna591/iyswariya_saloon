import Image from "next/image";
import { siteConfig, waLink, images } from "@/lib/site";
import { IconArrowRight, IconPhone } from "@/components/Icons";
import Reveal from "@/components/Reveal";

export default function ConsultationCta() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-site">
        <div className="relative overflow-hidden bg-brand-950">
          <div className="pointer-events-none absolute inset-0 opacity-15">
            <Image src={images.footer} alt="" fill className="object-cover" sizes="100vw" />
          </div>

          <div className="relative grid items-center gap-10 px-8 py-20 sm:px-16 lg:grid-cols-2 lg:gap-20 lg:px-24">
            <div>
              <Reveal>
                <span className="eyebrow text-gold-500 before:bg-gold-500/60">
                  Begin Your Ritual
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="h-section mt-6 text-cream">
                  Not sure what
                  <br />
                  <em className="font-light text-gold-400">suits you?</em>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 max-w-md text-[15px] font-light leading-[1.75] text-brand-200">
                  Whether it&rsquo;s your hair or skin that needs attention, we&rsquo;ve
                  got you covered. Reach out for a considered consultation with our experts.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={waLink("Hello Iyswariya, I'd love a consultation.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold"
                  >
                    Begin on WhatsApp
                    <IconArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="btn border border-white/25 bg-transparent text-cream hover:border-gold-500 hover:text-cream"
                  >
                    <IconPhone className="h-4 w-4" />
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-8 text-center">
                {[
                  { value: "2019", label: "Established" },
                  { value: "15k+", label: "Clients Served" },
                  { value: "4.8★", label: "Google Rating" },
                  { value: "7", label: "Specialist Rituals" },
                ].map((s, i) => (
                  <Reveal key={s.label} delay={i * 100} direction="scale">
                    <div>
                      <div className="font-display text-4xl font-light text-cream">
                        {s.value === "4.8★" ? (
                          <>
                            4.8<span className="text-gold-500">★</span>
                          </>
                        ) : s.value === "15k+" ? (
                          <>
                            15k<span className="text-gold-500">+</span>
                          </>
                        ) : (
                          s.value
                        )}
                      </div>
                      <div className="mt-2 text-[10px] font-medium uppercase tracking-widest3 text-gold-400">
                        {s.label}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
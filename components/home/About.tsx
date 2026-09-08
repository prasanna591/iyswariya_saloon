import Image from "next/image";
import { siteConfig, images } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Image */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm lg:mx-0 lg:max-w-none">
            <Reveal direction="left">
              <div className="aspect-[4/5] overflow-hidden bg-brand-100">
                <Image
                  src={images.about}
                  alt="Inside Iyswariya Luxury Salon Chennai"
                  width={720}
                  height={900}
                  className="img-kenburns h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={200} className="absolute -bottom-6 -right-6">
              <div className="border border-gold-500/50 bg-brand-950 px-6 py-5">
                <div className="font-display text-3xl font-light text-gold-400">Since 2019</div>
                <div className="mt-1 text-[10px] font-medium uppercase tracking-widest3 text-brand-200">
                  {siteConfig.clients}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-7 lg:pl-8">
          <Reveal direction="right">
            <span className="eyebrow">About Iyswariya</span>
          </Reveal>
          <Reveal direction="up" delay={80}>
            <h2 className="h-section mt-5 text-brand-950">
              {siteConfig.positioning}
            </h2>
          </Reveal>
          <Reveal direction="up" delay={140}>
            <p className="mt-6 max-w-xl font-sans text-[15px] font-light leading-[1.75] text-ink-mute">
              Known for refined results, thoughtful consultations and
              unwavering standards, Iyswariya has quietly become one of
              Chennai&rsquo;s most trusted destinations for considered beauty — where
              every visit is orchestrated around you.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-8">
            {[
              { title: "Science-backed", body: "Techniques validated for real, lasting results" },
              { title: "Premium products", body: "World-class brands chosen with care" },
              { title: "Master craftspeople", body: "Skilled stylists and senior therapists" },
              { title: "Considered rituals", body: "No two clients are treated the same" },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100} as="div">
                <div className="border-t border-gold-500/40 pt-6">
                  <div className="text-[10px] font-semibold uppercase tracking-widest3 text-gold-600">
                    0{i + 1}
                  </div>
                  <p className="mt-3 font-display text-lg text-brand-950">{item.title}</p>
                  <p className="mt-1 text-[13px] font-light leading-relaxed text-ink-mute">
                    {item.body}
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
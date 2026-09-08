import Image from "next/image";
import { brands } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function Brands() {
  return (
    <section className="border-y border-brand-200/60 py-20 lg:py-24">
      <div className="container-site text-center">
        <Reveal>
          <span className="eyebrow">Trusted Professional Brands</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 font-display text-2xl font-light text-brand-900">
            The science inside every appointment
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 overflow-hidden">
        <div
          className="flex min-w-full shrink-0 animate-marquee items-center gap-16 pr-16"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex flex-none items-center justify-center" style={{ width: 140, height: 48 }}>
              <Image
                src={brand.img}
                alt={brand.name}
                width={140}
                height={48}
                className="h-11 w-auto max-w-[140px] object-contain opacity-45 grayscale transition-all duration-500 hover:opacity-80 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
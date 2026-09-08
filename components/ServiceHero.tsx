import Image from "next/image";
import { siteConfig, waLink } from "@/lib/site";
import { IconArrowRight, IconPhone } from "@/components/Icons";

type Props = {
  title: string;
  image: string;
  alt: string;
  intro: string;
  waMessage: string;
};

export default function ServiceHero({ title, image, alt, intro, waMessage }: Props) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-site grid min-h-[70vh] items-stretch gap-0 py-16 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col justify-center pb-14 pr-0 lg:pr-16 lg:pb-0">
          <span className="eyebrow animate-fade-in-left">{siteConfig.positioning}</span>
          <h1 className="h-display mt-6 text-brand-950 animate-fade-in-left" style={{ animationDelay: "100ms" }}>
            {title}
          </h1>
          <p
            className="mt-6 max-w-md font-sans text-[15px] font-light leading-[1.75] text-ink-soft animate-fade-in-left"
            style={{ animationDelay: "200ms" }}
          >
            {intro}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-left" style={{ animationDelay: "300ms" }}>
            <a
              href={waLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book This Ritual
              <IconArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn-outline"
            >
              <IconPhone className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:min-h-[70vh]">
          <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="(min-width:1024px) 50vw, 100vw"
            className="img-kenburns object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/25 to-transparent" />
        </div>
      </div>
    </section>
  );
}
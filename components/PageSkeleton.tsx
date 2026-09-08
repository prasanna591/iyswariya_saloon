import Link from "next/link";
import { siteConfig, waLink } from "@/lib/site";
import { IconWhatsApp } from "@/components/Icons";

export function prettifySlug(slug: string) {
  const map: Record<string, string> = {
    about: "About Us",
    haircuts: "Cuts & Color",
    hairspa: "Hair Spa & Treatments",
    skinbeauty: "Skin & Beauty",
    luxuryfacials: "Facials & Treatments",
    nailservices: "Nail Art & Extensions",
    lashservices: "Brows & Lashes",
    bridals: "Bridals & Makeup",
    menucard: "Price List",
    "expert-guides": "Expert Guides",
    contact: "Contact",
    "terms-and-conditions": "Terms & Conditions",
  };
  return (
    map[slug] ??
    slug
      .split("-")
      .map((w) => w[0]?.toUpperCase() + w.slice(1))
      .join(" ")
  );
}

export default function PageSkeleton({ name }: { name: string }) {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-cream py-24">
      <div className="container-site max-w-xl text-center">
        <span className="eyebrow">Coming soon</span>
        <h1 className="h-display mt-3 text-brand-950">{name}</h1>
        <p className="mt-5 leading-relaxed text-ink-mute">
          We&rsquo;re crafting a premium experience for this page. Meanwhile,
          you can explore our services or book directly with us.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-outline">
            Back to Home
          </Link>
          <a
            href={waLink(`Hi! I'd like to know more about your ${name} services.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <IconWhatsApp className="h-4 w-4" />
            Ask Us
          </a>
        </div>
        <p className="mt-8 text-sm text-ink-mute">
          {siteConfig.hours} · {siteConfig.addressShort}
        </p>
      </div>
    </section>
  );
}
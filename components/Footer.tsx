import Link from "next/link";
import Image from "next/image";
import { siteConfig, links, images, waLink } from "@/lib/site";
import Wordmark from "@/components/Wordmark";
import { IconWhatsApp, IconPhone, IconMapPin, IconClock } from "@/components/Icons";

const navCol = [
  { label: "Home", href: links.home },
  { label: "About", href: links.about },
  { label: "Privacy Policy", href: links.terms },
  { label: "Service Terms & Usage", href: links.terms },
  { label: "Memberships", href: "#", disabled: true },
];

const servicesCol = [
  { label: "Haircuts & Hair Color", href: links.cutsColor },
  { label: "Hair Spas & Hair Repair", href: links.hairSpa },
  { label: "Professional Facials", href: links.facials },
  { label: "Manicures, Pedicures & Waxing", href: links.skinBeauty },
  { label: "Nail Art & Extensions", href: links.nails },
  { label: "Eyelashes & Brows", href: links.lashes },
  { label: "Bridals & Makeup", href: links.makeup },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <Image src={images.footer} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/80 to-brand-950/60" />
      </div>

      <div className="container-site relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Wordmark light />
            <p className="mt-6 max-w-sm font-light leading-relaxed text-brand-200">
              {siteConfig.tagline}
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <IconClock className="mt-0.5 h-5 w-5 flex-none text-gold-400" />
                <span>Salon hours: {siteConfig.hours}</span>
              </li>
              <li className="flex items-start gap-3">
                <IconPhone className="mt-0.5 h-5 w-5 flex-none text-gold-400" />
                <span>
                  WhatsApp &amp; Calls:{" "}
                  <a href={`tel:${siteConfig.phone}`} className="underline-offset-2 hover:underline">
                    {siteConfig.phoneDisplay}
                  </a>
                  , +91 72000 30480
                </span>
              </li>
              <li className="flex items-start gap-3">
                <IconMapPin className="mt-0.5 h-5 w-5 flex-none text-gold-400" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-5 font-sans text-xs font-bold uppercase tracking-widest2 text-gold-400">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navCol.map((item) => (
                <li key={item.label}>
                  {item.disabled ? (
                    <span className="cursor-not-allowed text-brand-300">{item.label}</span>
                  ) : (
                    <Link href={item.href} className="text-brand-200 transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-5 font-sans text-xs font-bold uppercase tracking-widest2 text-gold-400">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesCol.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-brand-200 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 font-sans text-xs font-bold uppercase tracking-widest2 text-gold-400">
              Visit Us
            </h3>
            <a
              href={waLink("Hi! I'd like to book your salon services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full"
            >
              <IconWhatsApp className="h-4 w-4" />
              Book Now
            </a>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Iyswariya location map"
                src="https://www.google.com/maps?q=282/6%20TTK%20Road%20Alwarpet%20Chennai%20600018&output=embed"
                className="h-40 w-full grayscale invert-[0.9]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-brand-300">
            © 2026 {siteConfig.legalName}. All rights reserved.
          </p>
          <a
            href={waLink("Hi! I have a question about your services. Can you help me?")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-brand-300 underline-offset-2 hover:text-white hover:underline"
          >
            * Terms &amp; conditions apply
          </a>
        </div>
      </div>
    </footer>
  );
}
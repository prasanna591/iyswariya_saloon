"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { siteConfig, links, waLink } from "@/lib/site";
import { services } from "@/lib/services";
import Wordmark from "@/components/Wordmark";
import { IconMenu, IconClose, IconWhatsApp, IconPhone, IconArrowRight } from "@/components/Icons";

const items = [
  { label: "Home", href: links.home },
  { label: "Price List", href: links.menu },
  { label: "About", href: links.about },
  { label: "Contact", href: links.contact },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLink = "link-under text-[11px] font-medium uppercase tracking-widest3 text-ink-soft transition-colors hover:text-brand-950";

  return (
    <>
      {/* Promo bar */}
      <div className="relative z-50 bg-brand-950 px-4 py-2.5 text-center">
        <p className="text-[11px] font-medium uppercase tracking-widest3 text-gold-400">
          {siteConfig.promo}
        </p>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-brand-200/70 bg-cream/95 shadow-soft backdrop-blur-xl"
            : "border-b border-transparent bg-cream"
        }`}
      >
        <div className="container-site flex h-24 items-center justify-between">
          <Wordmark />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            <Link href={links.home} className={navLink}>
              Home
            </Link>

            {/* Services dropdown */}
            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest3 text-ink-soft transition-colors group-hover:text-brand-950"
                aria-haspopup="true"
              >
                Services
                <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 4l4 4 4-4" />
                </svg>
              </button>

              <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-6 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="w-[26rem] border border-gold-500/30 bg-white p-3 shadow-lift">
                  <p className="border-b border-brand-200/60 px-4 py-3 text-[10px] font-semibold uppercase tracking-widest3 text-gold-600">
                    Our Rituals
                  </p>
                  <div className="py-2">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/${s.slug}`}
                        className="group/item flex items-center justify-between gap-4 px-4 py-3 transition-colors hover:bg-brand-50"
                      >
                        <span>
                          <span className="block font-display text-[15px] text-brand-950 group-hover/item:text-brand-900">
                            {s.navLabel}
                          </span>
                          {s.startingPrice && (
                            <span className="block text-[11px] font-light tracking-wide text-ink-mute">
                              {s.startingPrice}
                            </span>
                          )}
                        </span>
                        <IconArrowRight className="h-4 w-4 flex-none text-gold-600 opacity-0 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {items.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className={navLink}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden h-11 w-11 items-center justify-center border border-brand-300/70 text-brand-800 transition-colors hover:border-brand-950 hover:text-brand-950 xl:flex"
              aria-label="Call Iyswariya"
            >
              <IconPhone className="h-5 w-5" />
            </a>
            <a
              href={waLink("Hello Iyswariya, I'd love to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden !px-6 !py-3 sm:inline-flex"
            >
              Book Now
            </a>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center border border-brand-300/70 text-brand-900 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-brand-950/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 flex h-full w-full max-w-sm flex-col overflow-y-auto bg-cream shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-brand-200/60 p-6">
            <Wordmark />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center border border-brand-300/70 text-brand-900"
              aria-label="Close menu"
            >
              <IconClose className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
            <Link
              href={links.home}
              onClick={() => setOpen(false)}
              className="border-b border-brand-200/50 py-4 font-display text-xl font-light text-brand-950"
            >
              Home
            </Link>

            {/* Services accordion */}
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between border-b border-brand-200/50 py-4 font-display text-xl font-light text-brand-950"
              aria-expanded={servicesOpen}
            >
              Services
              <svg
                viewBox="0 0 12 12"
                className={`h-4 w-4 text-gold-600 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 4l4 4 4-4" />
              </svg>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                servicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <ul className="py-2">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/${s.slug}`}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between border-b border-brand-200/40 px-1 py-3.5"
                      >
                        <span className="font-display text-[15px] font-light text-ink">
                          {s.navLabel}
                        </span>
                        <IconArrowRight className="h-4 w-4 text-gold-600" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {items.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-brand-200/50 py-4 font-display text-xl font-light text-brand-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3 p-6">
            <a href={waLink("Hello Iyswariya, I'd love to book an appointment.")} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
              <IconWhatsApp className="h-4 w-4" />
              Book on WhatsApp
            </a>
            <a href={`tel:${siteConfig.phone}`} className="btn-outline w-full">
              <IconPhone className="h-4 w-4" />
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
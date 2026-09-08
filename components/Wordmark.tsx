import Link from "next/link";
import { links } from "@/lib/site";
import { siteConfig } from "@/lib/site";

export default function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link
      href={links.home}
      className="group flex items-center gap-4"
      aria-label={`${siteConfig.shortName} — Home`}
    >
      <span
        className={`relative flex h-11 w-11 flex-none items-center justify-center border ${
          light ? "border-gold-500/50" : "border-gold-600/50"
        }`}
        aria-hidden="true"
      >
        <span
          className={`font-display text-lg font-medium leading-none ${
            light ? "text-gold-300" : "text-gold-600"
          }`}
        >
          I
        </span>
        <span
          className={`absolute -bottom-px -right-px h-1.5 w-1.5 ${
            light ? "bg-gold-400" : "bg-gold-500"
          }`}
        />
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-[1.7rem] font-light tracking-[0.18em] ${
            light ? "text-cream" : "text-brand-950"
          }`}
        >
          Iyswariya
        </span>
        <span
          className={`mt-1.5 block text-[8.5px] font-medium uppercase tracking-[0.42em] ${
            light ? "text-gold-300" : "text-gold-600"
          }`}
        >
          Luxury Salon
        </span>
      </span>
    </Link>
  );
}
import Link from "next/link";
import Image from "next/image";
import { IconArrowRight } from "@/components/Icons";

type Service = {
  title: string;
  slug: string;
  desc: string;
  img: string;
  price: string;
  tag: string;
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.slug}
      className="group relative flex flex-col border border-brand-200/80 bg-white transition-all duration-500 hover:border-gold-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.img}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-brand-950/10 transition-colors duration-500 group-hover:bg-brand-950/30" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="border border-cream/60 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-widest3 text-cream backdrop-blur-sm">
            View Service
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-[10px] font-semibold uppercase tracking-widest3 text-gold-600">
          {service.tag}
        </span>
        <h3 className="mt-2 font-display text-xl font-light text-brand-950">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-[13px] font-light leading-relaxed text-ink-mute">
          {service.desc}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-brand-200/60 pt-5">
          <span className="text-[11px] font-semibold uppercase tracking-widest3 text-brand-800">
            From {service.price}
          </span>
          <IconArrowRight className="h-4 w-4 text-gold-600 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
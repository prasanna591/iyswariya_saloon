import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function GalleryGrid({
  gallery,
  title = "The Iyswariya Lookbook",
}: {
  gallery: { src: string; alt: string }[];
  title?: string;
}) {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-site text-center">
        <Reveal>
          <span className="eyebrow">Lookbook</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="h-section mt-5 text-brand-950">{title}</h2>
        </Reveal>
      </div>
      <div className="container-site mt-16 grid grid-cols-2 gap-2 lg:grid-cols-3">
        {gallery.map((img, i) => (
          <Reveal
            key={img.src}
            delay={(i % 3) * 90}
            direction="scale"
            className={`group relative overflow-hidden ${
              i % 4 === 0 ? "aspect-square sm:aspect-[4/5]" : "aspect-square"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="object-cover transition-transform duration-[1.4s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand-950/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
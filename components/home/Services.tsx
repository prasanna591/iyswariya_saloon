import { services } from "@/lib/site";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";

export default function Services() {
  return (
    <section className="py-24 lg:py-32" id="services">
      <div className="container-site">
        <div className="text-center">
          <Reveal>
            <span className="eyebrow">Our Services</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-section mt-5 text-brand-950">
              A considered edit of rituals
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-5 max-w-xl text-[15px] font-light leading-relaxed text-ink-mute">
              From precision cuts and dimensional colour to ceremonial bridal artistry — each ritual is orchestrated around you.
            </p>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 90}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
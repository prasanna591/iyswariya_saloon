import { experience } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section className="bg-brand-950 py-24 lg:py-32">
      <div className="container-site">
        <div className="text-center">
          <Reveal>
            <span className="eyebrow text-gold-500 before:bg-gold-500/60">
              The Experience
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-section mt-5 text-cream">
              No two clients are ever treated the same
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border border-white/10 md:grid-cols-3">
          {experience.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 120}
              className="group bg-brand-900/60 p-10 transition-colors duration-500 hover:bg-brand-800/70"
            >
              <span className="font-display text-6xl font-light text-white/10">
                0{i + 1}
              </span>
              <h3 className="mt-6 font-display text-xl font-light text-cream">
                {item.title}
              </h3>
              <p className="mt-4 text-[13px] font-light leading-[1.8] text-brand-200">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
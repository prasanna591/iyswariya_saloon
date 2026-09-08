import { IconCheck } from "@/components/Icons";
import Reveal from "@/components/Reveal";

export default function FeatureStrip({ features }: { features: string[] }) {
  return (
    <section className="border-y border-brand-200/60 bg-white py-12">
      <div className="container-site">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal key={feature} delay={i * 100}>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center border border-gold-500/60 text-gold-600">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <span className="font-display text-[15px] text-brand-900">{feature}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
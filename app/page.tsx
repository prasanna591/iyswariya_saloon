import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Experience from "@/components/home/Experience";
import Brands from "@/components/home/Brands";
import Testimonials from "@/components/home/Testimonials";
import ConsultationCta from "@/components/home/ConsultationCta";
import HomeFaq from "@/components/home/HomeFaq";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import { asset } from "@/lib/services";

const beforeAfterPairs = [
  {
    title: "Hair Color",
    before: asset("57-stunning-black-hair-with-highlights-ideasa-8WwUKWyJrxH1PMDl.jpg"),
    after: asset("26-low-maintenance-brunette-balayage-ideas-lSI87AfSknZ3OUDt.jpg"),
    beforeAlt: "Before hair color",
    afterAlt: "After dimensional balayage",
  },
  {
    title: "Nails",
    before: asset("light-pink-manicure_edited-NFXwBDYEOmqc7KRx.jpg"),
    after: asset("45-3nglQbRQa8Ir2alR.jpg"),
    beforeAlt: "Classic manicure before",
    afterAlt: "Glossy gel polish after",
  },
  {
    title: "Bridal Makeup",
    before: asset("download-7-9vp1EjU7GvbFHwbE.jpg"),
    after: asset("bridal-makeup-look-o4mbw0lNZYxauw0j.jpg"),
    beforeAlt: "Bridal styling before",
    afterAlt: "Complete bridal makeup after",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <BeforeAfterSection pairs={beforeAfterPairs} />
      <Experience />
      <Brands />
      <Testimonials />
      <HomeFaq />
      <ConsultationCta />
    </>
  );
}
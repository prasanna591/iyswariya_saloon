import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, findService } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { prettifySlug } from "@/components/PageSkeleton";

import ServiceHero from "@/components/ServiceHero";
import FeatureStrip from "@/components/FeatureStrip";
import ServiceMenu from "@/components/ServiceMenu";
import GalleryGrid from "@/components/GalleryGrid";
import FaqList from "@/components/FaqList";
import ServiceCta from "@/components/ServiceCta";
import PriceList from "@/components/PriceList";
import PageSkeleton from "@/components/PageSkeleton";

const skeletonSlugs = ["about", "contact", "expert-guides", "terms-and-conditions"];

export function generateStaticParams() {
  const slugs = ["menucard", ...services.map((s) => s.slug), ...skeletonSlugs];
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = findService(params.slug);
  if (!params.slug) return {};

  if (params.slug === "menucard") {
    return {
      title: "Salon Price List Chennai | Hair, Skin, Nails & Beauty",
      description: "Iyswariya price list — haircuts, color, spa, facials, nails, lashes and bridal pricing in Chennai. Get the full rate card on WhatsApp.",
    };
  }

  if (service) {
    return {
      title: service.pageTitle,
      description: service.pageDescription,
      openGraph: {
        title: service.pageTitle,
        description: service.pageDescription,
        images: [{ url: service.heroImage }],
      },
    };
  }

  if (skeletonSlugs.includes(params.slug)) {
    return {
      title: `${prettifySlug(params.slug)} | ${siteConfig.legalName}`,
      description: siteConfig.description,
    };
  }

  return {};
}

export default function SlugPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  if (slug === "menucard") {
    return <PriceList />;
  }

  const service = findService(slug);
  if (service) {
    return (
      <>
        <ServiceHero
          title={service.heroTitle}
          image={service.heroImage}
          alt={service.heroAlt}
          intro={service.intro}
          waMessage={service.waMessage}
        />
        <FeatureStrip features={service.features} />
        <ServiceMenu
          headline={service.headline}
          intro={service.intro}
          startingPrice={service.startingPrice}
          items={service.menuItems}
        />
        <GalleryGrid gallery={service.gallery} />
        <FaqList faqs={service.faqs} />
        <ServiceCta current={service.slug} waMessage={service.waMessage} />
      </>
    );
  }

  if (skeletonSlugs.includes(slug)) {
    return <PageSkeleton name={prettifySlug(slug)} />;
  }

  notFound();
}
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://glamsquad.in"),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Luxury Salon Chennai",
    "Hair salon Alwarpet",
    "Nail art Chennai",
    "Bridal makeup Chennai",
    "Hair spa Chennai",
    "Dermalogica facials Chennai",
    "Salon TTK Road",
  ],
  openGraph: {
    type: "website",
    url: "https://glamsquad.in/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1440, height: 756, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#191510",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "HairSalon",
  name: siteConfig.legalName,
  image: siteConfig.ogImage,
  url: "https://glamsquad.in",
  telephone: siteConfig.phone,
  priceRange: "₹799 - ₹4,999",
  address: {
    "@type": "PostalAddress",
    streetAddress: "282/6 TTK Road, Alwarpet",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600018",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.0359,
    longitude: 80.253,
  },
  openingHours: "Mo-Su 09:00-21:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1500",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppBubble />
      </body>
    </html>
  );
}
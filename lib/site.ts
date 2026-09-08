const assets = "https://assets.zyrosite.com/gyeAoRYVEEcPKFX2";

export const siteConfig = {
  name: "Iyswariya",
  legalName: "Iyswariya Luxury Salon Chennai",
  shortName: "Iyswariya",
  tagline:
    "An atelier of quiet luxury — where artistry, ritual and considered craft meet to create beauty that lingers.",
  heroHeadline: "Beauty, composed as a ceremony.",
  positioning: "Chennai's Atelier of Refined Beauty",
  hours: "9am to 9pm, Monday to Sunday",
  phone: "+916379522874",
  phoneDisplay: "+91 63795 22874",
  whatsapp: "917200030480",
  address: "282/6 TTK Road, Alwarpet, Chennai 600018",
  addressShort: "282/6 TTK Road, Alwarpet, Chennai",
  rating: "4.8",
  since: "Since 2019",
  clients: "15,000+ happy clients",
  promo: "₹500 OFF First Service*",
  email: "hello@iyswariya.in",
  title:
    "Luxury Salon in Alwarpet, Chennai | Hair, Skin & Nails | Iyswariya Luxury Salon Chennai",
  description:
    "Iyswariya Luxury Salon Chennai — a destination for expert hair, skin, nail and bridal artistry. Premium products, master craftspeople and considered care. Book your ritual today.",
  ogImage: `${assets}/site-images-landscape-yNBxBXvo38CAsutW.jpg`,
};

export const waLink = (message: string) =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

export const links = {
  home: "/",
  about: "/about",
  hairSpa: "/hairspa",
  cutsColor: "/haircuts",
  skinBeauty: "/skinbeauty",
  facials: "/luxuryfacials",
  nails: "/nailservices",
  lashes: "/lashservices",
  makeup: "/bridals",
  menu: "/menucard",
  guides: "/expert-guides",
  contact: "/contact",
  terms: "/terms-and-conditions",
};

export const images = {
  hero: {
    bg: `${assets}/site-images-landscape-yNBxBXvo38CAsutW.jpg`,
    portrait: `${assets}/whatsapp-image-2025-10-14-at-14.17.21-JATakgY3BapustnO.jpeg`,
  },
  about:
    "https://assets.zyrosite.com/gyeAoRYVEEcPKFX2/whatsapp-image-2025-10-14-at-14.17.21-JATakgY3BapustnO.jpeg",
  footer: `${assets}/footer-2-G7iN7LeDvfQww8yV.jpg`,
};

export const services = [
  {
    title: "Cuts & Color",
    slug: "/haircuts",
    desc: "Sharp Color & Customized Color Palettes",
    img: `${assets}/wixcoverpage-2-v8U9JlSISiOg4BXo.jpg`,
    price: "Haircuts from ₹799 • Color from ₹4,999",
    tag: "Signature",
  },
  {
    title: "Hair Spas & Treatments",
    slug: "/hairspa",
    desc: "Get silky hair with ZERO Formaldehyde",
    img: `${assets}/wixcoverpage-3-MhS6943xHKVLaebx.jpg`,
    price: "Personalized to your hair",
    tag: "Bestseller",
  },
  {
    title: "Facials & Treatments",
    slug: "/luxuryfacials",
    desc: "Science backed professional face treatments",
    img: `${assets}/wixcoverpage-4-3PYQO1jOMjlklQpi.jpg`,
    price: "Dermalogica powered",
    tag: "Luxury",
  },
  {
    title: "Skin & Beauty",
    slug: "/skinbeauty",
    desc: "Luxury reflexology, manicures and pedicures",
    img: `${assets}/wixcoverpage-7-3KfGBZCIyObrilHe.jpg`,
    price: "Indulge & unwind",
    tag: "Classic",
  },
  {
    title: "Nail Art & Extensions",
    slug: "/nailservices",
    desc: "200+ Nail art with luxury gel extensions",
    img: `${assets}/wixcoverpage-5-Hm0eitKXXUxdnEAU.jpg`,
    price: "Extensions from ₹999",
    tag: "Trending",
  },
  {
    title: "Brows & Lashes",
    slug: "/lashservices",
    desc: "Lifting, lamination & luxury extensions",
    img: `${assets}/wixcoverpage-6-HTOJcjtd1guXbsfk.jpg`,
    price: "Effortless & natural",
    tag: "Finish",
  },
  {
    title: "Bridals & Makeup",
    slug: "/bridals",
    desc: "Ceremonial & occasion artistry with premium artistry",
    img: `${assets}/bridal-makeup-look-o4mbw0lNZYxauw0j.jpg`,
    price: "Bridal from ₹9,999",
    tag: "Bespoke",
  },
];

export const experience = [
  {
    title: "Expert Consultation",
    body: "Thoughtful consultations tailored to your style, features, and goals. Because no two clients should be treated the same.",
  },
  {
    title: "Service as Art",
    body: "Refined techniques delivered with precision and premium products. Crafted for results that feel elevated and effortless.",
  },
  {
    title: "Relaxation & Results",
    body: "Polished results that feel refined, modern, and uniquely you. Beauty designed to last beyond the appointment.",
  },
];

export const brands = [
  { name: "Schwarzkopf Professional", img: `${assets}/olpx_big.d-4c95ed91-xFSomt9KJwn3bwPO.png` },
  { name: "Aveda", img: `${assets}/aveda-UkgJ8b5pinr97v0H.png` },
  { name: "Dermalogica", img: `${assets}/dermalogica_logo-hJAUsjrD7srGMKSH.png` },
  { name: "Nashi", img: `${assets}/nashi2-TEktzQqnZZrW7aBn.png` },
  { name: "Blue Sky", img: `${assets}/blue-sky-Df5FYSCNBr1lkzUj.png` },
  { name: "Schwarzkopf", img: `${assets}/schwarkppf-gsUYBdPpeTrX0f39.png` },
  { name: "Mintree", img: `${assets}/mintree-Z7O8QsZ8QKOKr8mm.jpg` },
  { name: "Cuccio", img: `${assets}/cuccio2-Tom9bQ4whio76eWl.png` },
  { name: "QOD", img: `${assets}/qod2-QKwvPH7Pe0o2lp7L.jpg` },
  { name: "Wella", img: `${assets}/be197744-5b45-4e50-ac84-ee08602937dd-t-33J12WNOQ0PFNUyq.jpeg` },
  { name: "Redken", img: `${assets}/logo-redken-SNT1zZqHg3iqyWGD.jpg` },
];

export const testimonials = [
  {
    quote: "Love the attention to detail here.",
    body: "The attention to detail, consultation, and final result exceeded anything I expected. My hair has never felt this healthy, soft, and effortlessly beautiful.",
    name: "Meera A",
  },
  {
    quote: "Most confident I've felt in years.",
    body: "From the atmosphere to the care they put into every step, the entire experience felt luxurious, calming, and completely personalized to me.",
    name: "Jasmine R",
  },
  {
    quote: "Woke up feeling like myself again.",
    body: "My lashes & brows look soft, natural, and beautifully done – exactly what I wanted. I've never received this many compliments before.",
    name: "Beena L",
  },
];

export const serviceChips = [
  "Hair Cuts",
  "Hair Color",
  "Hair Spa",
  "Facials",
  "Hair Repair",
  "Waxing",
  "Nail Art",
  "Mani-Pedi",
  "Brows",
  "Lashes",
  "Makeup",
  "Bridal",
];

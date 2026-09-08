export const asset = (name: string) =>
  `https://assets.zyrosite.com/gyeAoRYVEEcPKFX2/${name}`;

export type Faq = { q: string; a: string };
export type MenuItem = { name: string; tag?: string; desc: string };

export type Service = {
  slug: string;
  navLabel: string;
  heroTitle: string;
  heroImage: string;
  heroAlt: string;
  headline: string;
  intro: string;
  startingPrice: string;
  features: string[];
  menuItems: MenuItem[];
  gallery: { src: string; alt: string }[];
  faqs: Faq[];
  waMessage: string;
  pageTitle: string;
  pageDescription: string;
};

export const services: Service[] = [
  {
    slug: "haircuts",
    navLabel: "Cuts & Color",
    heroTitle: "Sharp Haircuts & Hair Color in Chennai",
    heroImage: asset("this-stunning-photo-highlights-a-luxuriousa-LwX2BDCY27CeK1bE.jpg"),
    heroAlt: "Premium haircuts and hair color at Iyswariya Chennai",
    headline: "Dimensional Hair Color & Precision Cuts",
    intro:
      "Precision cuts, dimensional color, and personalized styling crafted around your features, lifestyle, and hair goals. Designed for Indian hair textures and Chennai climate.",
    startingPrice: "₹799 onwards",
    features: [
      "Premium professional colors",
      "Corrective hair color specialists",
      "Hair-health-first approach",
      "Personalized consultations",
    ],
    menuItems: [
      {
        name: "Haircuts",
        desc: "Haircuts for women, men & kids tailored to your face shape, texture, styling habits and maintenance. Starting just ₹799 only.",
      },
      {
        name: "Dimensional Hair Color",
        desc: "From soft balayage to bold transformations, crafted for depth, longevity and healthy-looking shine. Starting just ₹4999 only.",
      },
      {
        name: "Color Trends We Love",
        desc: "Soft Ash Brunette · Reverse Balayage · Dimensional Blonde · Korean Layer Cut · Butterfly Layers · Glossy Espresso Brown · Lived-In Balayage.",
      },
    ],
    gallery: [
      { src: asset("ed3b2758-8a0e-45c0-af1c-60863bce4b7a_edited-x7TYiT7sx97wbydZ.jpg"), alt: "Precision haircut result" },
      { src: asset("e987002b-d941-46f3-951a-be5c68307850_edited-oR3UpFRn80wdo49l.jpg"), alt: "Layered haircut styling" },
      { src: asset("57-stunning-black-hair-with-highlights-ideasa-8WwUKWyJrxH1PMDl.jpg"), alt: "Black hair with highlights" },
      { src: asset("ac831302-cd84-4ecc-8b0a-4d3a8d2607a5-ZMqy5dkhTj5U0Erb.jpg"), alt: "Blowout finish" },
      { src: asset("26-low-maintenance-brunette-balayage-ideas-lSI87AfSknZ3OUDt.jpg"), alt: "Brunette balayage" },
      { src: asset("7-trending-blowout-hairstyles-taking-over-thea-_edited-AGKyrA2FC4sO4fSI.jpg"), alt: "Trending blowout styles" },
    ],
    faqs: [
      { q: "What haircut would suit my face shape?", a: "Our experts recommend styles based on your face shape, hair texture, and styling preferences." },
      { q: "How do I know which hair color will suit me?", a: "We customize shades based on your skin tone, features, lifestyle, and maintenance comfort." },
      { q: "What's the difference between balayage and highlights?", a: "Balayage creates a softer, blended look, while highlights give more defined brightness from root to tip." },
      { q: "Will hair coloring damage my hair?", a: "We use professional techniques and premium products designed to maintain hair health and shine." },
      { q: "How long does a balayage appointment take?", a: "Most balayage services take between 3–6 hours depending on the hair length and desired result." },
      { q: "How often should I refresh my hair color?", a: "Most clients refresh their color every 6–12 weeks depending on the technique and maintenance routine." },
    ],
    waMessage: "Hi! I would like to book your cuts and color services.",
    pageTitle: "Haircut Chennai | Women's Haircuts & Styling Experts",
    pageDescription:
      "Precision haircuts, dimensional color and expert styling in Chennai. Haircuts for women, men & kids from ₹799. Book at Iyswariya, Alwarpet.",
  },
  {
    slug: "hairspa",
    navLabel: "Hair Spa & Treatments",
    heroTitle: "Hair Spa & Treatments in Chennai",
    heroImage: asset("site-images-landscape-11-dyrL9ud3f8EJy3WY.jpg"),
    heroAlt: "Luxury hair spa and repair treatments at Iyswariya Chennai",
    headline: "Healthy Hair Starts with the Right Treatment",
    intro:
      "From deep nourishment and scalp care to advanced smoothing and repair treatments, discover personalized solutions designed to restore healthier, stronger, and more beautiful hair.",
    startingPrice: "Personalized after consultation",
    features: [
      "Personalized analysis",
      "Premium professional products",
      "Hair health first",
      "Experienced hair experts",
    ],
    menuItems: [
      {
        name: "Express Nanoplastia",
        desc: "Smoothens frizz & restores softness. Lasts 4–5 months. No formaldehyde.",
      },
      {
        name: "Pro Nanoplastia",
        desc: "Intense shine & softness, restores hair health. Lasts 6–9 months.",
      },
      {
        name: "Pro Keratin",
        desc: "Quick frizz control, maintains volume. Lasts 2–3 months.",
      },
      {
        name: "KeraSmooth",
        desc: "Permanent straightening & frizz control. Lasts 12 months +.",
      },
      {
        name: "Repair Rituals",
        desc: "Olaplex Pro, Boto Plex, Aveda Organic Damage Repair & Intense Hydration Hair Spa for damaged and chemically treated hair.",
      },
      {
        name: "Scalp Renewal Therapy",
        desc: "Targets itchiness, dryness, oiliness and scalp congestion for a balanced, healthier-feeling scalp.",
      },
    ],
    gallery: [
      { src: asset("site-images-landscape-12-rgBWFdDztuqMVLnc.jpg"), alt: "Smoothing treatment for frizz" },
      { src: asset("site-images-landscape-15-uKlUs8purAdP74PH.jpg"), alt: "Repair treatment for damaged hair" },
      { src: asset("site-images-landscape-13-LSinMiwT4FDkLjTS.jpg"), alt: "Hydration hair spa" },
      { src: asset("wixcoverpage-3-MhS6943xHKVLaebx.jpg"), alt: "Iyswariya hair treatment experience" },
    ],
    faqs: [
      { q: "Which treatment is best for damaged hair?", a: "Our experts assess your hair condition and recommend repair-focused treatments based on the level of damage — from treatment hair spas to long-term repair services." },
      { q: "How long do Keratin and Nanoplastia results last?", a: "Typically keratin lasts 2–3 months, while Nanoplastia/Boto Plex lasts 6–9 months depending on hair type and aftercare." },
      { q: "What's the difference between Keratin and Nanoplastia?", a: "Keratin focuses on smoothing and frizz reduction, while Nanoplastia prioritizes nourishment, softness, and hair rejuvenation." },
      { q: "Are your smoothing treatments formaldehyde-free?", a: "Yes — our popular express treatments deliver silky results with ZERO formaldehyde." },
      { q: "Can hair treatments help with frizz?", a: "Yes, smoothing and repair treatments can significantly improve manageability and reduce frizz." },
    ],
    waMessage: "Hi! I would like to book your hair treatment services.",
    pageTitle: "Hair Spa Chennai | Repair, Strengthen & Restore Hair",
    pageDescription:
      "Hair spa, keratin, nanoplastia, smoothening and repair treatments in Chennai. Formaldehyde-free options. Book at Iyswariya, Alwarpet.",
  },
  {
    slug: "luxuryfacials",
    navLabel: "Facials",
    heroTitle: "Professional Dermalogica Skin Treatments in Chennai",
    heroImage: asset("site-images-landscape-1-1GlVONlIZLOpfW5M.jpg"),
    heroAlt: "Luxury Dermalogica facials at Iyswariya Chennai",
    headline: "Professional Skin Care Backed by Science",
    intro:
      "Personalized unisex skin treatments powered by professional-grade Dermalogica formulas, expert analysis, and results tailored to your skin goals — for both men & women.",
    startingPrice: "₹2,499 onwards",
    features: [
      "Professional-grade formulas",
      "Personalized skin analysis",
      "Targeted treatment plans",
      "Luxury skin experience",
    ],
    menuItems: [
      {
        name: "Quick Cleanup",
        desc: "A professional skin refresh — deep cleansing, exfoliation and hydration. 20–30 min.",
      },
      {
        name: "Express Facial",
        desc: "Targeted Dermalogica treatments that deliver visible freshness in under an hour. 30–45 min.",
      },
      {
        name: "Pro Facials",
        desc: "Active-ingredient facials customized around sensitivity, pigmentation, firmness, dark circles and renewal. 60 & 90 min.",
      },
      {
        name: "Pro Power Peels",
        desc: "Customizable chemical peel with Salicylic, Lactic & Glycolic acids — reveals smoother, brighter skin. Best in a series of 3–5 sessions.",
      },
      {
        name: "Pro Bright Treatment",
        desc: "Vitamin C, Niacinamide-powered brightening for dull and pigmented skin.",
      },
      {
        name: "Pro Firm / Clear / Calm / Dark Circle Clear",
        desc: "Retinol-peptide firming, salicylic-tea tree clearing, oat-bisabolol calming, and caffeine-lactic dark circle treatments.",
      },
    ],
    gallery: [
      { src: asset("site-images-landscape-2-Q6N8oq9RCYfuhw11.jpg"), alt: "Professional skin cleanup" },
      { src: asset("site-images-landscape-6-5wFY4cmrVSnRZ7bT.jpg"), alt: "Express facial glow" },
      { src: asset("site-images-landscape-4-he7bnd9oNYS6hpvj.jpg"), alt: "Advanced Dermalogica facial" },
      { src: asset("site-images-landscape-7-32EUlpA1Soow4K3X.jpg"), alt: "Skin treatment results" },
    ],
    faqs: [
      { q: "How do I know which facial is right for me?", a: "Our experts recommend treatments based on your skin concerns, goals, and current skin condition." },
      { q: "How often should I get a facial?", a: "Most clients benefit from professional treatments every 4–6 weeks, depending on their skin goals." },
      { q: "Are Dermalogica treatments suitable for sensitive skin?", a: "Yes. Treatments are customized to your skin condition, including sensitive and reactive skin types." },
      { q: "Which treatment is best for pigmentation or dull skin?", a: "Pro Bright and Pro Power Peel are popular options, though recommendations vary based on your skin assessment." },
      { q: "Is there any downtime after a Pro Power Peel?", a: "Most clients experience minimal downtime. Post-treatment care recommendations are provided during consultation." },
    ],
    waMessage: "Hi! I would like to help in choosing your facial services.",
    pageTitle: "Luxury Facials Chennai | Personalized Skin Care",
    pageDescription:
      "Professional Dermalogica facials and skin treatments in Chennai for men & women from ₹2,499. Book at Iyswariya, Alwarpet.",
  },
  {
    slug: "skinbeauty",
    navLabel: "Skin & Beauty",
    heroTitle: "Beauty & Skin Services in Chennai",
    heroImage: asset("whatsapp-image-2025-07-21-at-13.37.28-87xT5Ai2vMgBm1e2.jpeg"),
    heroAlt: "Beauty, waxing and skin services at Iyswariya Chennai",
    headline: "Beauty, Crafted with Care",
    intro:
      "From professional facials and waxing to threading, bleaching, and skin maintenance treatments, discover personalized beauty services designed around you.",
    startingPrice: "₹999 onwards",
    features: [
      "Personalized recommendations",
      "Premium professional products",
      "Experienced beauty experts",
      "Hygiene & comfort standards",
    ],
    menuItems: [
      {
        name: "Brows Shaping",
        desc: "Smooth, long-lasting brow shaping services including tinting and lifting.",
      },
      {
        name: "Bleach & De-Tan",
        desc: "Brightening services designed to refresh and even out the appearance of the skin.",
      },
      {
        name: "Cleanup & Facials",
        desc: "Professional treatments for hydration, glow, skin health, and targeted concerns.",
      },
      {
        name: "Premium Waxing",
        desc: "Smooth, long-lasting hair removal for face and body using RICA cartridge waxes.",
      },
      {
        name: "Manicures & Pedicures",
        desc: "From quick treatments to our most luxurious Signature services in a private VIP room.",
      },
      {
        name: "Specialized Sessions",
        desc: "Intimate waxing, body polish, and combined beauty packages for routine maintenance and occasions.",
      },
    ],
    gallery: [
      { src: asset("icons-4-dqZIOa3mUXkHS7O5.jpg"), alt: "Professional brow shaping" },
      { src: asset("icons-5-njdoXQi2Ys1EIPHH.jpg"), alt: "Bleach and de-tan treatment" },
      { src: asset("icons-6-eY5KgRUnRCN7bp5T.jpg"), alt: "Skin cleanup and facial" },
      { src: asset("icons-3-UyrN3I5kj2YOYJ4j.jpg"), alt: "Manicure and pedicure service" },
    ],
    faqs: [
      { q: "Is intimate waxing available for both men and women?", a: "Yes, we offer professional intimate waxing services for both men and women in a private, hygienic, and comfortable environment." },
      { q: "How often should I get waxing done?", a: "Most clients return every 3–6 weeks depending on hair growth." },
      { q: "Do you offer sensitive skin treatments?", a: "Yes, services can be customized for different skin types and sensitivities." },
      { q: "Can I combine multiple services in one appointment?", a: "Absolutely. Many clients combine facials, waxing, threading, and other beauty services in a single visit." },
    ],
    waMessage: "Hi! I would like to help in choosing your facial services.",
    pageTitle: "Beauty Salon Chennai | Manicure, Pedicure & Beauty Care",
    pageDescription:
      "Waxing, threading, bleaching, manicures, pedicures and beauty services in Chennai from ₹999. Book at Iyswariya, Alwarpet.",
  },
  {
    slug: "nailservices",
    navLabel: "Nail Art",
    heroTitle: "Luxury Nails in Chennai",
    heroImage: asset("whatsapp-image-2025-10-14-at-14.17.22-himEt9DIgv2F9Ppp.jpeg"),
    heroAlt: "Luxury nail art and gel extensions at Iyswariya Chennai",
    headline: "Beautiful Nails Begin with Attention to Detail",
    intro:
      "From elegant everyday manicures to statement nail extensions and intricate nail art, discover nail services crafted with precision, creativity, and care.",
    startingPrice: "₹999 onwards",
    features: [
      "Personalized recommendations",
      "Premium professional products",
      "200+ designs completely customized",
      "High hygiene & comfort standards",
    ],
    menuItems: [
      {
        name: "Manicures & Pedicures",
        desc: "From minimalist details to statement designs — nails that feel uniquely yours.",
      },
      {
        name: "Gel Polish",
        desc: "Long-lasting shine and chip-resistant color for effortlessly polished nails.",
      },
      {
        name: "Nail Extensions",
        desc: "6 types of premium acrylic & gel extensions from ₹999 — length and shape fully customized.",
      },
      {
        name: "Luxe Nail Art",
        desc: "200+ fully customized designs created for weddings, celebrations and special events.",
      },
      {
        name: "Nail Repair & Refills",
        desc: "Refills, repairs, removals, and maintenance to keep your nails looking their best.",
      },
      {
        name: "Bridals & Party Nails",
        desc: "Signature manicures & pedicures in a private VIP room for your big day.",
      },
    ],
    gallery: [
      { src: asset("light-pink-manicure_edited-NFXwBDYEOmqc7KRx.jpg"), alt: "Soft pink manicure" },
      { src: asset("37-442dQ8F6gkQnd8Th.jpg"), alt: "Nail art design" },
      { src: asset("34-uSBqT9Zbkn88j66u.jpg"), alt: "Elegant nail design" },
      { src: asset("45-3nglQbRQa8Ir2alR.jpg"), alt: "Glossy gel polish finish" },
      { src: asset("49-JoM12hkPLF9Ed20n.jpg"), alt: "Customized nail art" },
      { src: asset("55-wAICb55aVBGFe4tC.jpg"), alt: "Bridal party nails" },
    ],
    faqs: [
      { q: "Which nail extension type lasts the longest?", a: "Usually Hard Gel or Form Gel extensions last the longest. Our experts recommend the best system for your lifestyle." },
      { q: "How long do gel polish nails last?", a: "Most clients enjoy beautiful, chip-resistant results for up to 2–3 weeks." },
      { q: "Will nail extensions damage my natural nails?", a: "When applied, maintained, and removed professionally, extensions can be worn safely with proper nail care." },
      { q: "Can I bring a nail design reference photo?", a: "Absolutely. Our artists can recreate or customize designs based on your inspiration." },
      { q: "Which shapes are available?", a: "All our nail art & extensions are fully customizable — almond, coffin, square, French tips, chrome, and cat-eye art." },
      { q: "How often should I get a refill?", a: "Most clients schedule refills every 2–4 weeks depending on nail growth and the chosen service." },
    ],
    waMessage: "Hi! I would like to book your nail services.",
    pageTitle: "Nail Salon Chennai | Manicure, Pedicure & Nail Extensions",
    pageDescription:
      "Luxury nail art, gel extensions, manicures and pedicures in Chennai from ₹999. 200+ custom designs. Book at Iyswariya, Alwarpet.",
  },
  {
    slug: "lashservices",
    navLabel: "Lashes & Brows",
    heroTitle: "Luxe Lashes & Brows Services in Chennai",
    heroImage: asset("site-images-landscape-10-5THIeNgBHu7CUiDW.jpg"),
    heroAlt: "Lash extensions and brow shaping at Iyswariya Chennai",
    headline: "Beautifully Defined, Uniquely Yours",
    intro:
      "Enhance your natural features with expertly crafted lash and brow services designed to add definition, balance, and effortless beauty.",
    startingPrice: "₹2,499 onwards",
    features: [
      "Premium products",
      "Experienced artists",
      "Personalized styling",
      "Comfortable, safe & hygienic",
    ],
    menuItems: [
      {
        name: "Lash Extensions",
        desc: "6 types available — Classic, Bold Classic, Mascara, Hybrid, Volume, and Mega Volume (Russian).",
      },
      {
        name: "Lash Lift & Tint",
        desc: "Lift and darken your natural lashes for a brighter, more open-eyed appearance.",
      },
      {
        name: "Brow Shaping",
        desc: "Create balanced, well-defined brows tailored to your facial features and style.",
      },
      {
        name: "Brow Tinting",
        desc: "Enhance your brows with customized tinting for fuller-looking, more defined results.",
      },
      {
        name: "Lash & Brows Packages",
        desc: "Combine your favorite services for a complete eye-enhancing transformation.",
      },
      {
        name: "Micro Blading",
        desc: "Launching soon — semi-permanent brows for effortless definition.",
      },
    ],
    gallery: [
      { src: asset("google-ads-landscape-9QisHAVNdwVkCwbQ.jpg"), alt: "Lash extension result" },
      { src: asset("07ec9f81-621c-45eb-9e28-993c65859bf5-oHsMcys9tHQPGyqG.jpg"), alt: "Lash lift and tint" },
      { src: asset("wixcoverpage-14-FL5Hd55U1rOh4GJT.jpg"), alt: "Professional brow shaping" },
      { src: asset("wixcoverpage-16-adKTew3DnA1mTdY5.jpg"), alt: "Iyswariya lash artistry" },
      { src: asset("wixcoverpage-17-4z470BYoe1yeEsl0.jpg"), alt: "Brow tinting" },
      { src: asset("wixcoverpage-19-a02NQpHex8pKo3LY.jpg"), alt: "Lash and brow package" },
    ],
    faqs: [
      { q: "What is the difference between a lash lift and lash extensions?", a: "A lash lift enhances your natural lashes, while extensions add additional length and volume." },
      { q: "How long do lash extensions last?", a: "Most clients enjoy beautiful results for 2–4 weeks before requiring maintenance." },
      { q: "Will lash extensions damage my natural lashes?", a: "When applied and maintained correctly, lash extensions can be worn safely without harming natural lashes." },
      { q: "Can you create a natural-looking lash set?", a: "Absolutely. Every lash set is customized to your preferred style, from soft and natural to full and dramatic." },
      { q: "What kinds of lash extensions do you provide?", a: "We have 6 types — Classic standard & bold, mascara lashes, hybrid lashes, volume lashes, and mega volume or Russian volume lashes." },
      { q: "How often should I shape my brows?", a: "Most clients return every 3–6 weeks depending on hair growth and desired brow shape." },
    ],
    waMessage: "Hi! I would like to book your lashes & brows services.",
    pageTitle: "Eyelash Extensions Chennai | Lashes & Brow Services",
    pageDescription:
      "Lash extensions, lash lift, brow shaping, tinting and packages in Chennai from ₹2,499. Book at Iyswariya, Alwarpet.",
  },
  {
    slug: "bridals",
    navLabel: "Makeup",
    heroTitle: "Professional Makeup & Styling in Chennai",
    heroImage: asset("cocktail-makeup-artist-in-delhi-__-meenakshi-dutt-makeovers-qZwNmXRUPUdSWkms.jpg"),
    heroAlt: "Bridal and party makeup artist in Chennai at Iyswariya",
    headline: "Makeup for Parties, Weddings & Everything Worth Dressing Up For",
    intro:
      "Looking for a professional makeup artist in Chennai? Iyswariya offers personalized makeup and styling for parties, celebrations, weddings, bridal events and special occasions.",
    startingPrice: "₹3,499 onwards",
    features: [
      "Premium products",
      "Salon or your location",
      "Experienced artists",
      "Personalized looks",
    ],
    menuItems: [
      {
        name: "Bridal Makeup",
        desc: "Classic, High Definition & Airbrush bridal makeup — starting ₹9999 onwards. Custom packages available.",
      },
      {
        name: "Bridal Hair & Draping",
        desc: "Bridal hair styling, saree & lehenga draping to complete your wedding look.",
      },
      {
        name: "Party, Event & Reception Look",
        desc: "Engagement, reception, photoshoot and celebration makeup — from soft natural to full glamour.",
      },
      {
        name: "Wedding Guests & Family",
        desc: "Bridesmaids, mothers, sisters and guests — booked individually or as a coordinated group. Starting ₹3499.",
      },
      {
        name: "Groom Makeup & Styling",
        desc: "Groom makeup and styling for weddings, receptions and photoshoots.",
      },
      {
        name: "Makeup at Your Location",
        desc: "For selected bridal bookings our team travels to your home, hotel or venue. Subject to consultation.",
      },
    ],
    gallery: [
      { src: asset("bridal-makeup-look-o4mbw0lNZYxauw0j.jpg"), alt: "Bridal makeup look" },
      { src: asset("download-7-9vp1EjU7GvbFHwbE.jpg"), alt: "Elegant bridal styling" },
      { src: asset("download-5-E5mn7tS35av2QFX4.jpg"), alt: "Bridal beauty detail" },
      { src: asset("whatsapp-image-2026-06-11-at-15.23.48-wK2OMcqh3rSBkQBa.jpeg"), alt: "Iyswariya makeup artistry" },
      { src: asset("whatsapp-image-2026-06-11-at-15.23.47-WYRAVZ2pLUqrKHqv.jpeg"), alt: "Event makeup result" },
    ],
    faqs: [
      { q: "What type of bridal makeup do you offer?", a: "Iyswariya offers Classic, High Definition and Airbrush bridal makeup, with hair styling and draping options available." },
      { q: "Do you provide makeup for groom, bridesmaids and wedding guests?", a: "Yes. Bridesmaids, mothers, sisters, family members and wedding guests can book makeup and styling individually or as a group." },
      { q: "Can I book makeup and hairstyling together?", a: "Yes. Makeup and hair styling can be booked together, with draping also available for suitable bookings." },
      { q: "Do you offer bridal makeup at home in Chennai?", a: "Yes. For selected bridal bookings, makeup and styling can be arranged at your preferred location, subject to availability and consultation." },
      { q: "Do you offer party & event makeup?", a: "Yes. Party, engagement, reception, photoshoot and other special-event makeup services are available." },
      { q: "Can I book makeup for multiple people?", a: "Yes, we accommodate group bookings for bridesmaids, family members and wedding guests, subject to scheduling." },
    ],
    waMessage: "Hi! I would like to check your makeup date availability",
    pageTitle: "Makeup Artist Chennai | Bridal & Party Makeup",
    pageDescription:
      "Bridal, party, engagement and groom makeup in Chennai — from ₹3499. Premium artists, salon or your location. Book Iyswariya.",
  },
];

export const findService = (slug: string) => services.find((s) => s.slug === slug);

export const serviceMenuData = [
  {
    group: "Cuts & Color",
    slug: "/haircuts",
    items: [
      { name: "Haircut", price: "₹799", note: "Women, Men & Kids" },
      { name: "Dimensional Color", price: "₹4,999", note: "Balayage & more" },
      { name: "Global Color", price: "On consultation", note: "" },
      { name: "Corrective Color", price: "On consultation", note: "" },
    ],
  },
  {
    group: "Hair Spas & Treatments",
    slug: "/hairspa",
    items: [
      { name: "Express Nanoplastia", price: "On consultation", note: "Lasts 4–5 months" },
      { name: "Pro Nanoplastia", price: "On consultation", note: "Lasts 6–9 months" },
      { name: "Pro Keratin", price: "On consultation", note: "Lasts 2–3 months" },
      { name: "KeraSmooth", price: "On consultation", note: "Lasts 12+ months" },
      { name: "Intense Hydration Ritual", price: "On consultation", note: "30 min" },
    ],
  },
  {
    group: "Facials & Skin",
    slug: "/luxuryfacials",
    items: [
      { name: "Quick Cleanup", price: "On consultation", note: "20–30 min" },
      { name: "Express Facial", price: "On consultation", note: "30–45 min" },
      { name: "Pro Facials", price: "On consultation", note: "60 & 90 min" },
      { name: "Pro Power Peels", price: "On consultation", note: "Series of 3–5" },
    ],
  },
  {
    group: "Skin & Beauty",
    slug: "/skinbeauty",
    items: [
      { name: "Brows Shaping", price: "On consultation", note: "" },
      { name: "Bleach & De-Tan", price: "On consultation", note: "" },
      { name: "Premium Waxing", price: "On consultation", note: "RICA wax" },
      { name: "Body Polish", price: "On consultation", note: "" },
      { name: "Beauty Packages", price: "On consultation", note: "" },
    ],
  },
  {
    group: "Nail Art & Extensions",
    slug: "/nailservices",
    items: [
      { name: "Manicure", price: "₹999", note: "Onwards" },
      { name: "Pedicure", price: "₹999", note: "Onwards" },
      { name: "Gel Polish", price: "On consultation", note: "2–3 weeks wear" },
      { name: "Nail Extensions", price: "₹999", note: "6 types, acrylic & gel" },
      { name: "Luxe Nail Art", price: "On consultation", note: "200+ designs" },
    ],
  },
  {
    group: "Lashes & Brows",
    slug: "/lashservices",
    items: [
      { name: "Lash Extensions", price: "₹2,499", note: "Onwards" },
      { name: "Lash Lift & Tint", price: "On consultation", note: "" },
      { name: "Brow Shaping", price: "On consultation", note: "" },
      { name: "Brow Tinting", price: "On consultation", note: "" },
    ],
  },
  {
    group: "Bridals & Makeup",
    slug: "/bridals",
    items: [
      { name: "Party / Event Makeup", price: "₹3,499", note: "Onwards" },
      { name: "Wedding Guest Makeup", price: "₹3,499", note: "Onwards" },
      { name: "Bridal Makeup", price: "₹9,999", note: "Onwards" },
      { name: "Bridal Hair & Draping", price: "On consultation", note: "" },
    ],
  },
];

export const homepageFaqs: Faq[] = [
  {
    q: "Do I need an appointment to visit Iyswariya?",
    a: "We strongly recommend booking ahead so we can pair you with the right stylist and avoid wait times. Walk-ins are welcome subject to availability.",
  },
  {
    q: "Where is Iyswariya located?",
    a: "We're at 282/6 TTK Road, Alwarpet, Chennai 600018. Salon hours are 9am to 9pm, Monday to Sunday.",
  },
  {
    q: "Are your hair treatments formaldehyde-free?",
    a: "Yes. Our popular smoothing services deliver silky results with ZERO formaldehyde, prioritizing your hair and scalp health.",
  },
  {
    q: "How long does a typical hair color service take?",
    a: "Global color usually takes 1.5–2 hours. Highlights, balayage and corrective work can run 3–6 hours depending on length and starting tone.",
  },
  {
    q: "How long do keratin and smoothening treatments last?",
    a: "Keratin typically lasts 2–3 months, while Nanoplastia and smoothening can last 6–9 months depending on your hair type and care routine.",
  },
  {
    q: "Do you have a cancellation policy?",
    a: "We request at least 24 hours notice for cancellations or rescheduling so we can offer the slot to other clients.",
  },
];
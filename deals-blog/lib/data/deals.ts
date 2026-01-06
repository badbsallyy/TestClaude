import type { Deal } from "@/types";

export const deals: Deal[] = [
  {
    id: "1",
    slug: "sony-wh-1000xm5-kopfhoerer",
    title: "Sony WH-1000XM5 Kopfhörer mit ANC",
    description:
      "Die besten Noise-Cancelling Kopfhörer 2024. Mit bis zu 30 Stunden Akkulaufzeit, Multipoint-Verbindung und erstklassigem Sound. Perfekt für Reisen, Homeoffice und Musikgenuss. Inklusive Transportcase und Ladekabel.",
    originalPrice: 419,
    salePrice: 279,
    discount: 33,
    imageUrl:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800",
    category: "Elektronik",
    shopName: "MediaMarkt",
    affiliateLink: "https://mediamarkt.de?affiliate=xyz",
    expiryDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
    isFeatured: true,
    rating: 4.8,
  },
  {
    id: "2",
    slug: "apple-ipad-air-m2",
    title: "Apple iPad Air M2 11 Zoll 256GB",
    description:
      "Das neue iPad Air mit M2 Chip. Brillantes Liquid Retina Display, ganztägige Batterielaufzeit und Unterstützung für Apple Pencil Pro. Ideal für Kreative und Produktivität unterwegs.",
    originalPrice: 799,
    salePrice: 699,
    discount: 12,
    imageUrl:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800",
    category: "Elektronik",
    shopName: "Amazon",
    affiliateLink: "https://amazon.de?affiliate=xyz",
    expiryDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    isFeatured: true,
    rating: 4.9,
  },
  {
    id: "3",
    slug: "samsung-odyssey-g9-monitor",
    title: "Samsung Odyssey G9 49 Zoll Gaming Monitor",
    description:
      "Ultrabreiter Curved Gaming Monitor mit 240Hz, 1ms Reaktionszeit und QLED-Technologie. Perfekt für immersives Gaming und produktives Multitasking.",
    originalPrice: 1449,
    salePrice: 999,
    discount: 31,
    imageUrl:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800",
    category: "Gaming",
    shopName: "Saturn",
    affiliateLink: "https://saturn.de?affiliate=xyz",
    expiryDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    isFeatured: true,
    rating: 4.7,
  },
  {
    id: "4",
    slug: "nike-air-max-90-sneaker",
    title: "Nike Air Max 90 Premium Sneaker",
    description:
      "Klassische Silhouette trifft auf moderne Technologie. Der Air Max 90 Premium bietet hervorragenden Komfort und zeitlosen Style für jeden Tag.",
    originalPrice: 159,
    salePrice: 99,
    discount: 38,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    category: "Mode",
    shopName: "Nike Store",
    affiliateLink: "https://nike.com?affiliate=xyz",
    expiryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    isFeatured: false,
    rating: 4.6,
  },
  {
    id: "5",
    slug: "philips-hue-starter-set",
    title: "Philips Hue Starter Set mit 4 Lampen und Bridge",
    description:
      "Intelligente LED-Beleuchtung für dein Zuhause. Steuerung per App oder Sprachassistent, Millionen von Farben und automatisierte Lichtszenen.",
    originalPrice: 199,
    salePrice: 139,
    discount: 30,
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    category: "Smart Home",
    shopName: "MediaMarkt",
    affiliateLink: "https://mediamarkt.de?affiliate=xyz",
    expiryDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(),
    isFeatured: false,
    rating: 4.5,
  },
  {
    id: "6",
    slug: "dyson-v15-detect-staubsauger",
    title: "Dyson V15 Detect Kabelloser Staubsauger",
    description:
      "Der intelligenteste Dyson Staubsauger mit Laser-Erkennung für versteckten Staub. Bis zu 60 Minuten Laufzeit und LCD-Display für Echtzeit-Reinigungsberichte.",
    originalPrice: 749,
    salePrice: 549,
    discount: 27,
    imageUrl:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800",
    category: "Haushalt",
    shopName: "Amazon",
    affiliateLink: "https://amazon.de?affiliate=xyz",
    expiryDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString(),
    isFeatured: true,
    rating: 4.8,
  },
  {
    id: "7",
    slug: "playstation-5-slim-konsole",
    title: "PlayStation 5 Slim Digital Edition",
    description:
      "Die kompaktere PS5 mit allen Features der Originalversion. 1TB SSD, 4K Gaming, Ray Tracing und Zugang zu PlayStation Plus Essential.",
    originalPrice: 449,
    salePrice: 399,
    discount: 11,
    imageUrl:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800",
    category: "Gaming",
    shopName: "GameStop",
    affiliateLink: "https://gamestop.de?affiliate=xyz",
    expiryDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
    isFeatured: false,
    rating: 4.9,
  },
  {
    id: "8",
    slug: "bose-soundlink-flex-lautsprecher",
    title: "Bose SoundLink Flex Bluetooth Lautsprecher",
    description:
      "Wasserdichter tragbarer Lautsprecher mit kraftvollem Sound. PositionIQ-Technologie passt den Klang automatisch an die Ausrichtung an.",
    originalPrice: 169,
    salePrice: 119,
    discount: 30,
    imageUrl:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800",
    category: "Elektronik",
    shopName: "Saturn",
    affiliateLink: "https://saturn.de?affiliate=xyz",
    expiryDate: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString(),
    isFeatured: false,
    rating: 4.6,
  },
  {
    id: "9",
    slug: "northface-winterjacke-thermoball",
    title: "The North Face Thermoball ECO Jacke",
    description:
      "Nachhaltige Winterjacke mit synthetischer Isolierung aus recycelten Materialien. Leicht, packbar und wärmt auch bei Feuchtigkeit.",
    originalPrice: 249,
    salePrice: 149,
    discount: 40,
    imageUrl:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800",
    category: "Mode",
    shopName: "Zalando",
    affiliateLink: "https://zalando.de?affiliate=xyz",
    expiryDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
    isFeatured: false,
    rating: 4.7,
  },
  {
    id: "10",
    slug: "lg-oled-c3-55-zoll-fernseher",
    title: "LG OLED55C3 55 Zoll 4K Smart TV",
    description:
      "OLED evo mit α9 AI Prozessor Gen6. Perfekte Schwarzwerte, Dolby Vision IQ, 4 HDMI 2.1 Ports für Gaming und webOS 23 Smart TV Plattform.",
    originalPrice: 1799,
    salePrice: 1199,
    discount: 33,
    imageUrl:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800",
    category: "Elektronik",
    shopName: "MediaMarkt",
    affiliateLink: "https://mediamarkt.de?affiliate=xyz",
    expiryDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    isFeatured: true,
    rating: 4.8,
  },
  {
    id: "11",
    slug: "amazon-echo-show-10",
    title: "Amazon Echo Show 10 Smart Display",
    description:
      "10,1 Zoll HD-Display mit Bewegungsfunktion. Alexa-Sprachsteuerung, Videotelefonate und Smart Home Hub in einem Gerät.",
    originalPrice: 249,
    salePrice: 179,
    discount: 28,
    imageUrl:
      "https://images.unsplash.com/photo-1543512214-318c7553f230?w=800",
    category: "Smart Home",
    shopName: "Amazon",
    affiliateLink: "https://amazon.de?affiliate=xyz",
    expiryDate: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000).toISOString(),
    isFeatured: false,
    rating: 4.4,
  },
  {
    id: "12",
    slug: "logitech-mx-master-3s-maus",
    title: "Logitech MX Master 3S Wireless Maus",
    description:
      "Premium-Maus für produktives Arbeiten. MagSpeed-Scrollrad, 8000 DPI, leise Klicks und Verbindung mit bis zu 3 Geräten gleichzeitig.",
    originalPrice: 129,
    salePrice: 89,
    discount: 31,
    imageUrl:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800",
    category: "Elektronik",
    shopName: "Amazon",
    affiliateLink: "https://amazon.de?affiliate=xyz",
    expiryDate: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000).toISOString(),
    isFeatured: false,
    rating: 4.9,
  },
];

export function getFeaturedDeals(): Deal[] {
  return deals.filter((deal) => deal.isFeatured);
}

export function getDealsByCategory(category: string): Deal[] {
  return deals.filter(
    (deal) => deal.category.toLowerCase() === category.toLowerCase()
  );
}

export function getDealBySlug(slug: string): Deal | undefined {
  return deals.find((deal) => deal.slug === slug);
}

export function getSimilarDeals(currentDeal: Deal, limit: number = 3): Deal[] {
  return deals
    .filter(
      (deal) =>
        deal.id !== currentDeal.id && deal.category === currentDeal.category
    )
    .slice(0, limit);
}

import type { Category } from "@/types";

export const categories: Category[] = [
  {
    slug: "elektronik",
    name: "Elektronik",
    description: "Smartphones, Tablets, Laptops, Kopfhörer und mehr",
    icon: "Smartphone",
  },
  {
    slug: "gaming",
    name: "Gaming",
    description: "Konsolen, Gaming PCs, Zubehör und Spiele",
    icon: "Gamepad2",
  },
  {
    slug: "mode",
    name: "Mode",
    description: "Kleidung, Schuhe und Accessoires",
    icon: "Shirt",
  },
  {
    slug: "smart-home",
    name: "Smart Home",
    description: "Beleuchtung, Sprachassistenten und Automatisierung",
    icon: "Home",
  },
  {
    slug: "haushalt",
    name: "Haushalt",
    description: "Haushaltsgeräte, Reinigung und Küche",
    icon: "Lightbulb",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

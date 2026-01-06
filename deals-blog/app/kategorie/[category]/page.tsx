import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DealGrid } from "@/components/deals/DealGrid";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { getDealsByCategory } from "@/lib/wordpress/api";
import { getCategoryBySlug, categories } from "@/lib/data/categories";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);

  if (!cat) {
    return {
      title: "Kategorie nicht gefunden",
    };
  }

  return {
    title: `${cat.name} Deals`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);

  if (!cat) {
    notFound();
  }

  const deals = await getDealsByCategory(cat.name);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs
          items={[
            { name: "Kategorien", href: "/deals" },
            { name: cat.name },
          ]}
        />

        <Link
          href="/deals"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Alle Deals
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {cat.name} Deals
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            {cat.description}
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/kategorie/${c.slug}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                c.slug === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700"
              }`}
            >
              {c.name}
            </Link>
          ))}
        </div>

        <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          {deals.length} Deals gefunden
        </div>

        <DealGrid deals={deals} />
      </div>
    </div>
  );
}

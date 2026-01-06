import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Star, ArrowLeft, Tag } from "lucide-react";
import { getDealBySlug, getSimilarDeals, getDeals } from "@/lib/wordpress/api";
import { DealCountdown } from "@/components/deals/DealCountdown";
import { SimilarDeals } from "@/components/deals/SimilarDeals";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { formatPrice } from "@/lib/utils/formatters";

interface DealPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const deals = await getDeals();
  return deals.map((deal) => ({
    slug: deal.slug,
  }));
}

export async function generateMetadata({
  params,
}: DealPageProps): Promise<Metadata> {
  const { slug } = await params;
  const deal = await getDealBySlug(slug);

  if (!deal) {
    return {
      title: "Deal nicht gefunden",
    };
  }

  return {
    title: deal.title,
    description: deal.description,
    openGraph: {
      title: deal.title,
      description: `${formatPrice(deal.salePrice)} statt ${formatPrice(
        deal.originalPrice
      )} - Spare ${deal.discount}%`,
      images: [deal.imageUrl],
    },
  };
}

export default async function DealPage({ params }: DealPageProps) {
  const { slug } = await params;
  const deal = await getDealBySlug(slug);

  if (!deal) {
    notFound();
  }

  const similarDeals = await getSimilarDeals(deal, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { name: "Deals", href: "/deals" },
            { name: deal.title },
          ]}
        />

        <Link
          href="/deals"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zu allen Deals
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-900">
            <Image
              src={deal.imageUrl}
              alt={deal.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Discount Badge */}
            <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
              -{deal.discount}%
            </div>

            {/* Featured Badge */}
            {deal.isFeatured && (
              <div className="absolute top-4 left-4 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                <Star className="w-4 h-4" fill="white" />
                Featured
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            {/* Category */}
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <Tag className="w-4 h-4" />
                {deal.category}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {deal.shopName}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {deal.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(deal.rating)
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                ({deal.rating}/5)
              </span>
            </div>

            {/* Price */}
            <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-6 mb-6">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  {formatPrice(deal.salePrice)}
                </span>
                <span className="text-xl text-gray-400 line-through">
                  {formatPrice(deal.originalPrice)}
                </span>
              </div>
              <p className="text-green-600 dark:text-green-400 font-semibold">
                Du sparst {formatPrice(deal.originalPrice - deal.salePrice)} (
                {deal.discount}%)
              </p>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Beschreibung
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {deal.description}
              </p>
            </div>

            {/* Countdown */}
            <div className="mb-6">
              <DealCountdown expiryDate={deal.expiryDate} />
            </div>

            {/* CTA */}
            <a
              href={deal.affiliateLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors text-lg"
            >
              Zum Deal bei {deal.shopName}
              <ExternalLink className="w-5 h-5" />
            </a>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
              * Affiliate-Link: Wir erhalten eine Provision bei Kauf über diesen
              Link.
            </p>
          </div>
        </div>

        {/* Similar Deals */}
        {similarDeals.length > 0 && <SimilarDeals deals={similarDeals} />}
      </div>
    </div>
  );
}

import Link from "next/link";
import { DealHero } from "@/components/deals/DealHero";
import { DealGrid } from "@/components/deals/DealGrid";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { Newsletter } from "@/components/shared/Newsletter";
import { getFeaturedDeals, getDeals } from "@/lib/wordpress/api";
import { getRecentBlogPosts } from "@/lib/wordpress/api";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

export default async function Home() {
  const featuredDeals = await getFeaturedDeals();
  const allDeals = await getDeals();
  const recentPosts = await getRecentBlogPosts(3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <DealHero />

      {/* Featured Deals Section */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-8 h-8 text-amber-500" />
                Featured Deals
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Handverlesene Top-Angebote mit den besten Rabatten
              </p>
            </div>
            <Link
              href="/deals"
              className="hidden sm:flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              Alle Deals <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <DealGrid deals={featuredDeals.slice(0, 6)} priorityCount={3} />

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/deals"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              Alle Deals anzeigen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Warum DealsHub?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Dein Vorteil beim Smart Shopping
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Täglich neue Deals
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Wir durchsuchen hunderte Shops und finden die besten Angebote
                für dich.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Geprüfte Rabatte
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Wir prüfen jeden Deal auf Echtheit – keine Fake-Rabatte bei uns.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Top Kategorien
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Von Elektronik bis Mode – bei uns findest du Deals aus allen
                Bereichen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Deals Section */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Neueste Deals
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Die aktuellsten Schnäppchen auf einen Blick
              </p>
            </div>
            <Link
              href="/deals"
              className="hidden sm:flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              Alle Deals <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <DealGrid deals={allDeals.slice(0, 6)} />
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Blog Section */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Aus dem Blog
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Tipps & Tricks für smartes Shopping
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              Alle Artikel <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <BlogGrid posts={recentPosts} />
        </div>
      </section>
    </div>
  );
}

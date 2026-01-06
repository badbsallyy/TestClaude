import { Metadata } from "next";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { getBlogPosts } from "@/lib/wordpress/api";

export const metadata: Metadata = {
  title: "Blog - Shopping Tipps & Tricks",
  description:
    "Entdecke unsere besten Shopping Tipps, Deal-Strategien und Ratgeber für smartes Einkaufen.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Tipps & Tricks für smartes Shopping. Erfahre, wie du die besten
            Deals findest und beim Einkaufen sparst.
          </p>
        </div>

        <BlogGrid posts={posts} />
      </div>
    </div>
  );
}

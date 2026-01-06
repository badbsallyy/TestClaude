import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/wordpress/api";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BlogShare } from "@/components/blog/BlogShare";
import { formatDate, formatReadTime } from "@/lib/utils/formatters";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Artikel nicht gefunden",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://dealshub.de/blog/${slug}`;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { name: "Blog", href: "/blog" },
            { name: post.title },
          ]}
        />

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zum Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          {post.category && (
            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{formatReadTime(post.readTime)}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        {/* Share Buttons */}
        <div className="mb-8 pb-8 border-b border-gray-200 dark:border-zinc-800">
          <BlogShare title={post.title} url={postUrl} />
        </div>

        {/* Content */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Bottom Share */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-zinc-800">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Hat dir dieser Artikel gefallen? Teile ihn mit deinen Freunden!
          </p>
          <BlogShare title={post.title} url={postUrl} />
        </div>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-gray-50 dark:bg-zinc-900 rounded-2xl">
          <div className="flex items-start gap-4">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={64}
              height={64}
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {post.author.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                DealsHub Redakteur. Experte für Schnäppchen und smartes
                Shopping.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

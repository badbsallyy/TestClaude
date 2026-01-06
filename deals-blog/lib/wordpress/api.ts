// WordPress REST API Client
// Prepared for future WordPress Headless CMS integration
// Currently using static data from lib/data/*

import {
  deals,
  getDealBySlug as getStaticDealBySlug,
  getFeaturedDeals as getStaticFeaturedDeals,
  getDealsByCategory as getStaticDealsByCategory,
  getSimilarDeals as getStaticSimilarDeals,
} from "@/lib/data/deals";
import {
  blogPosts,
  getBlogPostBySlug as getStaticBlogPostBySlug,
  getRecentBlogPosts as getStaticRecentBlogPosts,
} from "@/lib/data/blog";
import type { Deal, BlogPost } from "@/types";

// Environment variables for WordPress integration
// const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;
// const WORDPRESS_API_TOKEN = process.env.WORDPRESS_API_TOKEN;

export async function getDeals(): Promise<Deal[]> {
  // TODO: Replace with WordPress API call when ready
  // const res = await fetch(`${WORDPRESS_API_URL}/wp/v2/deals`, {
  //   headers: {
  //     Authorization: `Bearer ${WORDPRESS_API_TOKEN}`,
  //   },
  //   next: { revalidate: 60 },
  // });
  // return res.json();

  return deals;
}

export async function getDealBySlug(slug: string): Promise<Deal | undefined> {
  // TODO: WordPress API
  return getStaticDealBySlug(slug);
}

export async function getFeaturedDeals(): Promise<Deal[]> {
  // TODO: WordPress API
  return getStaticFeaturedDeals();
}

export async function getDealsByCategory(category: string): Promise<Deal[]> {
  // TODO: WordPress API
  return getStaticDealsByCategory(category);
}

export async function getSimilarDeals(
  currentDeal: Deal,
  limit: number = 3
): Promise<Deal[]> {
  // TODO: WordPress API
  return getStaticSimilarDeals(currentDeal, limit);
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  // TODO: WordPress API
  return blogPosts;
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  // TODO: WordPress API
  return getStaticBlogPostBySlug(slug);
}

export async function getRecentBlogPosts(
  limit: number = 3
): Promise<BlogPost[]> {
  // TODO: WordPress API
  return getStaticRecentBlogPosts(limit);
}

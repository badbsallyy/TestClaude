// WordPress REST API Response Types
// For future WordPress Headless CMS integration

export interface WPDeal {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  acf: {
    original_price: number;
    sale_price: number;
    discount: number;
    shop_name: string;
    affiliate_link: string;
    expiry_date: string;
    is_featured: boolean;
    rating: number;
    category: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

export interface WPBlogPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  acf: {
    read_time: number;
    author_name: string;
    author_avatar: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
}

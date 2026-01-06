export interface Deal {
  id: string;
  slug: string;
  title: string;
  description: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  imageUrl: string;
  category: string;
  shopName: string;
  affiliateLink: string;
  expiryDate: string;
  isFeatured: boolean;
  rating: number;
}

export interface Author {
  name: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
  readTime: number;
  author: Author;
  category?: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export interface NavItem {
  name: string;
  link: string;
}

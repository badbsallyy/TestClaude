"use client";

import { BlogCard } from "./BlogCard";
import type { BlogPost } from "@/types";

interface BlogGridProps {
  posts: BlogPost[];
  priorityCount?: number;
}

export function BlogGrid({ posts, priorityCount = 2 }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          Keine Artikel gefunden.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <BlogCard
          key={post.id}
          post={post}
          index={index}
          priority={index < priorityCount}
        />
      ))}
    </div>
  );
}

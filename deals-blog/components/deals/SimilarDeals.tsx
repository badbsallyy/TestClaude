"use client";

import { DealCard } from "./DealCard";
import type { Deal } from "@/types";

interface SimilarDealsProps {
  deals: Deal[];
  title?: string;
}

export function SimilarDeals({
  deals,
  title = "Ähnliche Deals",
}: SimilarDealsProps) {
  if (deals.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal, index) => (
          <DealCard key={deal.id} deal={deal} index={index} />
        ))}
      </div>
    </section>
  );
}

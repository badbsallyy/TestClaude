"use client";

import { DealCard } from "./DealCard";
import type { Deal } from "@/types";

interface DealGridProps {
  deals: Deal[];
  priorityCount?: number;
}

export function DealGrid({ deals, priorityCount = 3 }: DealGridProps) {
  if (deals.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          Keine Deals gefunden.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {deals.map((deal, index) => (
        <DealCard
          key={deal.id}
          deal={deal}
          index={index}
          priority={index < priorityCount}
        />
      ))}
    </div>
  );
}

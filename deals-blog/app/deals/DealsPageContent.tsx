"use client";

import { useState, useMemo } from "react";
import { DealGrid } from "@/components/deals/DealGrid";
import { DealFilters } from "@/components/deals/DealFilters";
import type { Deal } from "@/types";

interface DealsPageContentProps {
  initialDeals: Deal[];
}

export function DealsPageContent({ initialDeals }: DealsPageContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] = useState<string>("newest");

  const filteredAndSortedDeals = useMemo(() => {
    let result = [...initialDeals];

    // Filter by category
    if (selectedCategory) {
      result = result.filter((deal) => deal.category === selectedCategory);
    }

    // Sort deals
    switch (selectedSort) {
      case "discount":
        result.sort((a, b) => b.discount - a.discount);
        break;
      case "price-low":
        result.sort((a, b) => a.salePrice - b.salePrice);
        break;
      case "price-high":
        result.sort((a, b) => b.salePrice - a.salePrice);
        break;
      case "expiring":
        result.sort(
          (a, b) =>
            new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime()
        );
        break;
      case "newest":
      default:
        // Keep original order (newest first)
        break;
    }

    return result;
  }, [initialDeals, selectedCategory, selectedSort]);

  return (
    <>
      <DealFilters
        onCategoryChange={setSelectedCategory}
        onSortChange={setSelectedSort}
        selectedCategory={selectedCategory}
        selectedSort={selectedSort}
      />

      <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
        {filteredAndSortedDeals.length} Deals gefunden
      </div>

      <DealGrid deals={filteredAndSortedDeals} />
    </>
  );
}

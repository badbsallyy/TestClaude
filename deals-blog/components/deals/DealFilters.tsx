"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Filter, SortAsc } from "lucide-react";
import { categories } from "@/lib/data/categories";

interface DealFiltersProps {
  onCategoryChange: (category: string | null) => void;
  onSortChange: (sort: string) => void;
  selectedCategory: string | null;
  selectedSort: string;
}

const sortOptions = [
  { value: "newest", label: "Neueste zuerst" },
  { value: "discount", label: "Höchster Rabatt" },
  { value: "price-low", label: "Preis: Niedrig bis Hoch" },
  { value: "price-high", label: "Preis: Hoch bis Niedrig" },
  { value: "expiring", label: "Bald ablaufend" },
];

export function DealFilters({
  onCategoryChange,
  onSortChange,
  selectedCategory,
  selectedSort,
}: DealFiltersProps) {
  const [showCategories, setShowCategories] = useState(false);
  const [showSort, setShowSort] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {/* Category Filter */}
      <div className="relative">
        <button
          onClick={() => setShowCategories(!showCategories)}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg hover:border-gray-300 dark:hover:border-zinc-600 transition-colors"
        >
          <Filter className="w-4 h-4" />
          <span>{selectedCategory || "Alle Kategorien"}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              showCategories ? "rotate-180" : ""
            }`}
          />
        </button>

        {showCategories && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-lg z-50"
          >
            <button
              onClick={() => {
                onCategoryChange(null);
                setShowCategories(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-t-lg"
            >
              Alle Kategorien
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => {
                  onCategoryChange(cat.name);
                  setShowCategories(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700 last:rounded-b-lg"
              >
                {cat.name}
              </button>
            ))}
          </motion.div>
        )}
      </div>

      {/* Sort Filter */}
      <div className="relative">
        <button
          onClick={() => setShowSort(!showSort)}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg hover:border-gray-300 dark:hover:border-zinc-600 transition-colors"
        >
          <SortAsc className="w-4 h-4" />
          <span>
            {sortOptions.find((s) => s.value === selectedSort)?.label ||
              "Sortieren"}
          </span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              showSort ? "rotate-180" : ""
            }`}
          />
        </button>

        {showSort && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-lg z-50"
          >
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onSortChange(option.value);
                  setShowSort(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700 first:rounded-t-lg last:rounded-b-lg"
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

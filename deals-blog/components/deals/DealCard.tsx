"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, TrendingDown, Star } from "lucide-react";
import { formatPrice, getDaysUntilExpiry } from "@/lib/utils/formatters";
import type { Deal } from "@/types";

interface DealCardProps {
  deal: Deal;
  index?: number;
  priority?: boolean;
}

export function DealCard({ deal, index = 0, priority = false }: DealCardProps) {
  const daysLeft = getDaysUntilExpiry(deal.expiryDate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/deals/${deal.slug}`} className="block h-full group">
        <div className="relative h-full bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 transition-all hover:shadow-lg">
          {/* Image */}
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={deal.imageUrl}
              alt={deal.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={priority}
            />

            {/* Discount Badge */}
            <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
              -{deal.discount}%
            </div>

            {/* Category Tag */}
            <div className="absolute top-3 left-3 bg-black/70 dark:bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
              {deal.category}
            </div>

            {/* Featured Badge */}
            {deal.isFeatured && (
              <div className="absolute bottom-3 left-3 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <Star className="w-3 h-3" fill="white" />
                Featured
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {deal.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
              {deal.description}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatPrice(deal.salePrice)}
              </span>
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(deal.originalPrice)}
              </span>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>
                  {daysLeft > 0 ? `Noch ${daysLeft} Tage` : "Läuft heute ab!"}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingDown className="w-4 h-4" />
                <span>{deal.shopName}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

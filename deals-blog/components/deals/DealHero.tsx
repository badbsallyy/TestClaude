"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";

export function DealHero() {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="dealHeroSparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          Die besten{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Deals
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Entdecke täglich neue Top-Angebote aus Elektronik, Gaming, Mode und
          mehr. Spare bis zu 70% bei den besten Online-Shops.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            href="/deals"
            className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            Alle Deals
          </Link>
          <Link
            href="/kategorie/elektronik"
            className="px-8 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Kategorien
          </Link>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent" />
    </div>
  );
}

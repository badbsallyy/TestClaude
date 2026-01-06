"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Tag, BookOpen, LayoutGrid } from "lucide-react";

const menuItems = [
  { name: "Home", link: "/", icon: <Home className="w-5 h-5" /> },
  { name: "Deals", link: "/deals", icon: <Tag className="w-5 h-5" /> },
  { name: "Blog", link: "/blog", icon: <BookOpen className="w-5 h-5" /> },
  { name: "Kategorien", link: "/kategorie/elektronik", icon: <LayoutGrid className="w-5 h-5" /> },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-zinc-900 shadow-lg border-b border-gray-200 dark:border-zinc-800"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-700 dark:text-gray-200"
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

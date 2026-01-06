"use client";

import { Moon, Sun, Home, Tag, BookOpen, LayoutGrid } from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { useTheme } from "@/components/providers/ThemeProvider";

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "Deals", link: "/deals", icon: <Tag className="h-4 w-4" /> },
  { name: "Blog", link: "/blog", icon: <BookOpen className="h-4 w-4" /> },
  { name: "Kategorien", link: "/kategorie/elektronik", icon: <LayoutGrid className="h-4 w-4" /> },
];

export function Navbar() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return null;
  }

  return (
    <FloatingNav navItems={navItems}>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Toggle Dark Mode"
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-gray-600" />
        )}
      </button>
    </FloatingNav>
  );
}

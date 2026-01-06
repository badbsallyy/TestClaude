import Link from "next/link";
import { Heart, Mail, Github, Twitter } from "lucide-react";

const footerLinks = {
  deals: [
    { name: "Alle Deals", href: "/deals" },
    { name: "Elektronik", href: "/kategorie/elektronik" },
    { name: "Gaming", href: "/kategorie/gaming" },
    { name: "Mode", href: "/kategorie/mode" },
    { name: "Smart Home", href: "/kategorie/smart-home" },
  ],
  info: [
    { name: "Über uns", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              DealsHub
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              Entdecke täglich neue Top-Deals aus Elektronik, Mode, Gaming und mehr. 
              Spare bis zu 70% bei Amazon, MediaMarkt & Co.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:kontakt@dealshub.de"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Deals Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Deals
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.deals.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Information
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-zinc-800">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} DealsHub. Alle Rechte vorbehalten. Made with{" "}
            <Heart className="w-4 h-4 inline text-red-500" /> in Germany.
          </p>
        </div>
      </div>
    </footer>
  );
}

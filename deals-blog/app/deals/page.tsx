import { Metadata } from "next";
import { DealsPageContent } from "./DealsPageContent";
import { getDeals } from "@/lib/wordpress/api";

export const metadata: Metadata = {
  title: "Alle Deals",
  description:
    "Entdecke alle aktuellen Deals und Schnäppchen. Spare bis zu 70% bei Top-Marken.",
};

export default async function DealsPage() {
  const deals = await getDeals();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Alle Deals
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Entdecke alle aktuellen Angebote und spare bei deinen
            Lieblingsmarken. Täglich neue Deals aus Elektronik, Mode, Gaming und
            mehr.
          </p>
        </div>

        <DealsPageContent initialDeals={deals} />
      </div>
    </div>
  );
}

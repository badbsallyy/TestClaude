import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/shared/BackToTop";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dealshub.de"),
  title: {
    default: "DealsHub - Die besten Deals & Schnäppchen",
    template: "%s | DealsHub",
  },
  description:
    "Entdecke täglich neue Top-Deals aus Elektronik, Mode, Gaming und mehr. Spare bis zu 70% bei Amazon, MediaMarkt & Co.",
  keywords: ["Deals", "Schnäppchen", "Rabatte", "Angebote", "Shopping", "Sparen"],
  authors: [{ name: "DealsHub Team" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://dealshub.de",
    siteName: "DealsHub",
    title: "DealsHub - Die besten Deals & Schnäppchen",
    description: "Entdecke täglich neue Top-Deals",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DealsHub OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DealsHub - Die besten Deals",
    description: "Entdecke täglich neue Top-Deals",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

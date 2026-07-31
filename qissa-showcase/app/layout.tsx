import type { Metadata } from "next";
import { Noto_Kufi_Arabic, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { productContent } from "@/content/product";

const kufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-kufi",
  display: "swap",
});

const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${productContent.brandName} — ${productContent.productName}`,
  description: productContent.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${kufi.variable} ${plex.variable}`}>
      <body className="bg-cream-50 text-ink-900 antialiased">{children}</body>
    </html>
  );
}

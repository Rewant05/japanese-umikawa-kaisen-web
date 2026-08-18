import type { Metadata } from "next";
import { Inter, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  weight: ["200", "400", "600"],
  subsets: ["latin"], 
  variable: "--font-noto-serif",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "海川 (UMIKAWA) | 最高級日本の海鮮",
  description: "日本の美しい海岸線から最高級の旬の海鮮を調達し、世界中の高級レストランや個人のお客様にお届けします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSerifJP.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans antialiased text-charcoal bg-ivory selection:bg-vermilion selection:text-white">
        <Header />
        <main className="flex-grow pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

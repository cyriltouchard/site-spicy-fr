import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { streamerConfig } from "@/config/streamer.config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: streamerConfig.seo.title,
  description: streamerConfig.seo.description,
  keywords: streamerConfig.seo.keywords,
  authors: streamerConfig.seo.author ? [{ name: streamerConfig.seo.author }] : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

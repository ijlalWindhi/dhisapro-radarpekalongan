import { Inter } from "next/font/google";
import Head from "next/head";
import { Suspense } from "react";
import "../globals.css";
import { METADATA } from "@/constants/metadata";
import Navbar from "./Navbar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: METADATA.title,
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  openGraph: {
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" href="/BANNER_BATANG.webp" as="image" />
        <link rel="preload" href="/BANNER_DPRD_KOTA.webp" as="image" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <Suspense>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}

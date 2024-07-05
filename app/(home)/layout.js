import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "./Navbar";
import Category from "./Category";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RADAR PEKALONGAN",
  description: "Media online terpercaya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Category />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// app/layout.tsx or app/layout.js (depending on your setup)
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShopNow",
  description:
    "ShopNow offers a wide range of products with unbeatable prices and fast delivery. Discover the best deals and shop your favorites today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

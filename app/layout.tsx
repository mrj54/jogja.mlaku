// app/layout.tsx (Server Component)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jogja.Melaku | Explore Yogyakarta",
  description: "Discover the beauty and culture of Yogyakarta through local experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
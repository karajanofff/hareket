import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Road Rules Video Platform",
  description: "Kompyuter grafikası járdeminde jol háreketi qaǵıydaların úyretiw platforması"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kaa">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

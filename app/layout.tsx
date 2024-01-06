import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Foodie Community",
  description: "Best place to find best meals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Hero />
        <main className="max-w-[80%]  m-auto">{children}</main>
      </body>
    </html>
  );
}

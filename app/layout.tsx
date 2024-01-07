import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";

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
        {children}
      </body>
    </html>
  );
}

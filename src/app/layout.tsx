import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Main page",
  description: "Dashboard created using tailwindcss",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { NextThemeProvider } from "./providers";

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
    <html lang="en" suppressHydrationWarning className={urbanist.className}>
      <body className="tw-bg-stone-100 dark:tw-bg-slate-900">
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
}

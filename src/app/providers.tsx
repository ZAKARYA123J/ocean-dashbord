"use client";

import { ThemeProvider } from "next-themes";

export function NextThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" value={{ dark: "tw-dark" }}>
      {children}
    </ThemeProvider>
  );
}

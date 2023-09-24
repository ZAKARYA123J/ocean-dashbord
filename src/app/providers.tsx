"use client";

import { ThemeProvider } from "next-themes";

export function NextThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      storageKey="urbaneTheme"
      attribute="class"
      value={{ dark: "tw-dark" }}
    >
      {children}
    </ThemeProvider>
  );
}

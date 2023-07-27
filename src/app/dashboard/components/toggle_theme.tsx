"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <select
        id="toggle"
        value={theme}
        className="tw-p-1 tw-rounded-md tw-bg-slate-200 dark:tw-bg-slate-800 tw-border dark:tw-border-slate-600"
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
}

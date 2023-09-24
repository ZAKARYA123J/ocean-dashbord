"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <select
        id="toggle"
        value={theme}
        className="tw-rounded-md tw-border tw-bg-slate-200 tw-p-1 dark:tw-border-slate-600 dark:tw-bg-slate-800"
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
}

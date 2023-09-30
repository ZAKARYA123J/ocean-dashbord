"use client";

import { useTheme } from "next-themes";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcn/components/ui/select";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="tw-hidden lg:tw-block">
      <Select onValueChange={(newTheme) => setTheme(newTheme)}>
        <SelectTrigger className="w-[180px] tw-capitalize">
          <SelectValue placeholder={theme} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

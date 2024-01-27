"use client";

import { useTheme } from "next-themes";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcn/components/ui/select";
import { useEffect, useState } from "react";
import { cn } from "@/shadcn/utils";

export default function ToggleTheme({className}: {className?: string}) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className="tw-w-[71px]"></span>
  }

  return (
    <div className={cn(className, "lg:tw-block")}>
      <Select defaultValue={theme} onValueChange={(newTheme) => setTheme(newTheme)}>
        <SelectTrigger>
          <SelectValue/>
        </SelectTrigger>
        <SelectContent >
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">
            Dark
          </SelectItem>
          <SelectItem value="system">
            System
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

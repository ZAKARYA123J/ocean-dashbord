"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shadcn/components/ui/command";
import { useEffect, useState } from "react";
import { BiCommand } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { routes } from "../consts";
import { useRouter } from "next/navigation";

export default function CommandInputBox() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <CommandMenu open={open} setOpen={setOpen} router={router} />
      <span
        onClick={(event) => {
          if (!open) setOpen(true);
        }}
        className="tw-flex tw-h-full tw-rounded-lg tw-border tw-bg-slate-200 tw-p-1 tw-text-slate-600 tw-delay-75 hover:tw-bg-slate-300 dark:tw-border-slate-600 dark:tw-bg-slate-800 dark:tw-text-slate-400 hover:dark:tw-bg-slate-700"
      >
        <span className="tw-my-auto tw-ml-2">
          <FaSearch />
        </span>
        <input
          readOnly
          type="search"
          className="tw-w-44 tw-bg-inherit tw-p-2 tw-text-sm tw-outline-none"
          placeholder="Search"
        />
        <kbd className="tw-flex tw-select-none tw-items-center tw-gap-1 tw-p-2 tw-text-sm">
          <BiCommand /> K
        </kbd>
      </span>
    </>
  );
}

export function CommandMenu({
  open,
  setOpen,
  router,
}: {
  open: any;
  setOpen: any;
  router: any;
}) {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          {routes.map((route) => {
            return (
              <CommandItem
                key={route.routeName}
                onSelect={() => {
                  setOpen(false);
                  router.push(route.path);
                }}
              >
                <span className="tw-mr-4 tw-h-4 tw-w-4">{route.icon}</span>
                {route.routeName}
              </CommandItem>
            );
          })}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

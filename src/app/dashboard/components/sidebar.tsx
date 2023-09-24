"use client";


import { usePathname } from "next/navigation";
import Link from "next/link";
import { routes } from "../consts";

export function DashboardSidebar() {
  const currentPath = usePathname();

  
  return (
    <aside className="tw-fixed tw-hidden tw-h-full tw-w-52 tw-border-r tw-bg-slate-100 tw-text-lg tw-font-semibold tw-text-slate-500 dark:tw-border-r-slate-600 dark:tw-bg-slate-950 sm:tw-block">
      <div className="tw-my-4 tw-flex tw-flex-col tw-gap-6">
        {routes.map((val) => {
          return (
            <Link href={val.path} key={val.routeName}>
              <span
                data-state={
                  val.path === currentPath ? "active" : ""
                }
                className="tw-mx-4 tw-flex tw-items-center tw-gap-6 tw-px-4 data-[state=active]:tw-rounded-lg data-[state=active]:tw-bg-slate-300 data-[state=active]:tw-py-2 data-[state=active]:tw-text-slate-800 data-[state=active]:dark:tw-bg-slate-700 data-[state=active]:dark:tw-text-slate-200"
              >
                {val.icon}
                {val.routeName}
              </span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

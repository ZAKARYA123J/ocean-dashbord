// "use client";

// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { routes } from "../consts";
// import { cn } from "@/shadcn/utils";

// export function DashboardSidebar({ className }: { className?: string }) {
//   const currentPath = usePathname();

//   return (
//     <aside
//       className={cn(
//         "tw-fixed tw-h-full tw-w-52 tw-bg-slate-100 tw-p-1 tw-text-lg tw-font-semibold tw-text-slate-500 dark:tw-border-r-slate-600 dark:tw-bg-slate-950 lg:tw-block lg:tw-border-r lg:tw-border-r-slate-300",
//         className,
//       )}
//     >
//       <div className="tw-my-4 tw-flex tw-flex-col tw-gap-2">
//         {routes.map((val) => {
//           return (
//             <Link href={val.path} key={val.routeName}>
//               <span
//                 data-state={val.path === currentPath ? "active" : ""}
//                 className="tw-mx-2 tw-flex tw-items-center tw-gap-6 tw-p-2 data-[state=active]:tw-rounded-lg data-[state=active]:tw-bg-slate-300  data-[state=active]:tw-text-slate-800 data-[state=active]:dark:tw-bg-slate-700 data-[state=active]:dark:tw-text-slate-200"
//               >
//                 {val.icon}
//                 {val.routeName}
//               </span>
//             </Link>
//           );
//         })}
//       </div>
//     </aside>
//   );
// }
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { routes } from "../consts";
import { cn } from "@/shadcn/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shadcn/components/ui/tooltip";

export function DashboardSidebar({ className }: { className?: string }) {
  const currentPath = usePathname();

  return (
    <aside
      className={cn(
        "tw-fixed tw-h-full tw-bg-slate-100 tw-p-1 tw-text-lg tw-font-semibold tw-text-slate-500 dark:tw-border-r-slate-600 dark:tw-bg-slate-950 lg:tw-block lg:tw-border-r lg:tw-border-r-slate-300",
        className,
      )}
    >
      <div className="tw-my-4 tw-flex tw-flex-col tw-gap-2">
        {routes.map((val) => {
          return (
            <TooltipProvider key={val.routeName} delayDuration={200}>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={val.path} key={val.routeName}>
                    <span
                      data-state={val.path === currentPath ? "active" : ""}
                      className="tw-mx-2 tw-flex tw-items-center tw-gap-6 tw-p-2 data-[state=active]:tw-rounded-lg data-[state=active]:tw-bg-slate-300  data-[state=active]:tw-text-slate-800 data-[state=active]:dark:tw-bg-slate-700 data-[state=active]:dark:tw-text-slate-200"
                    >
                      {val.icon}
              
                    </span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  {val.routeName}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </aside>
  );
}

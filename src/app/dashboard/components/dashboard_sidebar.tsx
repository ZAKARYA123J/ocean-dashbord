"use client";

import { ImStatsDots } from "react-icons/im";
import { CgDatabase } from "react-icons/cg";
import { GoLog } from "react-icons/go";
import { BsPlugin } from "react-icons/bs";
import { IoCloud, IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function DashboardSidebar() {
  const currentPath = usePathname();
  const pathPrefix = "/dashboard";

  const routes = [
    { routeName: "Analytics", path: "", icon: <ImStatsDots /> },
    { routeName: "Users", path: "/users", icon: <FaRegUser /> },
    { routeName: "Database", path: "/database", icon: <CgDatabase /> },
    { routeName: "Storage", path: "/storage", icon: <IoCloud /> },
    { routeName: "Integrations", path: "/integrations", icon: <BsPlugin /> },
    { routeName: "Settings", path: "/settings", icon: <IoSettingsOutline /> },
    { routeName: "Logs", path: "/logs", icon: <GoLog /> },
  ];
  return (
    <aside className="tw-fixed tw-bg-slate-100 tw-border-r tw-font-semibold tw-w-52 tw-h-full tw-hidden md:tw-block tw-text-lg tw-text-slate-500">
      <div className="tw-flex tw-flex-col tw-gap-6 tw-my-4">
        {routes.map((val) => {
          return (
            <Link href={pathPrefix + val.path} key={val.routeName}>
              <span
                data-state={
                  pathPrefix + val.path === currentPath ? "active" : ""
                }
                className="tw-flex tw-gap-6 tw-items-center tw-px-4 tw-mx-4 data-[state=active]:tw-bg-slate-300 data-[state=active]:tw-text-slate-800 data-[state=active]:tw-rounded-lg data-[state=active]:tw-py-2"
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

import Image from "next/image";
import { BiCommand, BiTerminal } from "react-icons/bi";
import { FaBell, FaSearch } from "react-icons/fa";
import avatar from "public/avatar.webp";
import { ToggleTheme } from "./toggle_theme";
export function DashboardNav() {
  return (
    <nav className="tw-sticky tw-top-0 tw-z-30 tw-flex tw-max-h-14 tw-justify-between tw-border-b tw-bg-slate-100 tw-p-3 tw-shadow-sm dark:tw-border-b-slate-600 dark:tw-bg-slate-950">
      <span className="tw-inline-flex tw-select-none tw-items-center tw-gap-1 tw-text-2xl tw-text-slate-700 dark:tw-text-slate-300">
        Urbane <BiTerminal />
      </span>
      {/*  Navitems */}
      <div className="tw-flex tw-items-center tw-gap-3">
        <span className="tw-flex tw-h-full tw-rounded-lg tw-border tw-bg-slate-200 tw-p-1 tw-text-slate-600 tw-delay-75 hover:tw-bg-slate-300 dark:tw-border-slate-600 dark:tw-bg-slate-800 dark:tw-text-slate-400 hover:dark:tw-bg-slate-700">
          <span className="tw-my-auto tw-ml-2">
            <FaSearch />
          </span>
          <input
            type="search"
            className="tw-w-44 tw-bg-inherit tw-p-2 tw-text-sm tw-outline-none"
            placeholder="Search"
          />
          <span className="tw-flex tw-select-none tw-items-center tw-gap-1 tw-p-2 tw-text-sm">
            <BiCommand /> K
          </span>
        </span>
        <ToggleTheme />
        <span className="tw-text-xl tw-text-slate-700 tw-transition-colors hover:tw-text-slate-800 dark:tw-text-slate-300 hover:dark:tw-text-slate-200 ">
          <FaBell />
        </span>
        <Image className="tw-rounded-full" src={avatar} alt="" />
      </div>
    </nav>
  );
}

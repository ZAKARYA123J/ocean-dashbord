import Image from "next/image";
import {  BiMenu, BiTerminal } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import avatar from "public/avatar.webp";
import { ToggleTheme } from "./toggle_theme";
import CommandInputBox from "./command";

export function DashboardNav() {
  return (
    <nav className="tw-sticky tw-top-0 tw-z-30 tw-flex tw-max-h-14 sm:tw-justify-between tw-border-b tw-border-b-slate-300 tw-bg-slate-100 tw-p-3 tw-shadow-sm dark:tw-border-b-slate-600 dark:tw-bg-slate-950">
      <span className="tw-text-2xl tw-text-slate-700 dark:tw-text-slate-400 tw-self-center tw-mr-3 sm:tw-hidden tw-block">
        <BiMenu />
      </span>
      <span className="tw-inline-flex tw-select-none tw-items-center tw-gap-1 tw-text-2xl tw-text-slate-700 dark:tw-text-slate-300">
        Urbane <BiTerminal /> <span className="tw-p-1 tw-text-[10px] tw-leading-[10px] tw-bg-red-600   tw-text-red-300 tw-font-extrabold tw-rounded">DEV</span>
      </span>
      {/*  Navitems */}

      <div className="sm:tw-flex tw-items-center tw-gap-3 tw-hidden">
         <CommandInputBox />
        <ToggleTheme />
        <span className="tw-text-xl tw-text-slate-700 tw-transition-colors hover:tw-text-slate-800 dark:tw-text-slate-300 hover:dark:tw-text-slate-200 ">
          <FaBell />
        </span>
        <Image className="tw-rounded-full" src={avatar} alt="" />
      </div>
    </nav>
  );
}

import Image from "next/image";
import { BiMenu, BiTerminal } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import avatar from "public/avatar.webp";

import dynamic from "next/dynamic";
import CommandInputBox from "./command_input_box";

// ! TODO: Add some kind of skeleton here
const ToggleTheme = dynamic(() => import("./toggle_theme"), { ssr: false });

export function DashboardNav() {
  return (
    <nav className="tw-sticky tw-top-0 tw-z-30 tw-flex tw-max-h-14 tw-border-b tw-border-b-slate-300 tw-bg-slate-100 tw-p-3 tw-shadow-sm dark:tw-border-b-slate-600 dark:tw-bg-slate-950 lg:tw-justify-between">
      <span className="tw-mr-3 tw-block tw-self-center tw-text-2xl tw-text-slate-700 dark:tw-text-slate-400 lg:tw-hidden">
        <BiMenu />
      </span>
      <span className="tw-inline-flex tw-grow tw-select-none tw-items-center tw-gap-1 tw-text-2xl tw-text-slate-700 dark:tw-text-slate-300">
        Urbane <BiTerminal />{" "}
        <span className="tw-rounded tw-bg-red-600 tw-p-1 tw-text-[10px]   tw-font-extrabold tw-leading-[10px] tw-text-red-300">
          DEV
        </span>
      </span>
      {/*  Navitems */}

      <div className="tw-flex tw-items-center tw-gap-3">
        <CommandInputBox />
        <ToggleTheme />
        <span className="tw-hidden tw-text-xl tw-text-slate-700 tw-transition-colors hover:tw-text-slate-800 dark:tw-text-slate-300 hover:dark:tw-text-slate-200 lg:tw-block ">
          <FaBell />
        </span>
        <Image className="tw-rounded-full" src={avatar} alt="" />
        <span></span>
      </div>
    </nav>
  );
}

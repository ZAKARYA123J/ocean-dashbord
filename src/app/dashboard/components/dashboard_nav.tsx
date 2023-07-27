import Image from "next/image";
import { BiCommand, BiTerminal } from "react-icons/bi";
import { FaBell, FaSearch } from "react-icons/fa";
import avatar from "public/avatar.webp";
export function DashboardNav() {
  return (
    <nav className="tw-flex tw-justify-between tw-p-3 tw-border-b tw-shadow-sm tw-max-h-14 tw-z-30 tw-sticky tw-top-0 tw-bg-slate-100">
      <span className="tw-text-2xl tw-text-slate-700 tw-select-none tw-inline-flex tw-items-center tw-gap-1">
        Urbane <BiTerminal />
      </span>
      {/*  Navitems */}
      <div className="tw-flex tw-items-center tw-gap-3">
        <span className="tw-flex tw-delay-75 tw-text-slate-600 tw-bg-slate-200 tw-h-full tw-border tw-rounded-lg tw-p-1 hover:tw-bg-slate-300">
          <span className="tw-my-auto tw-ml-2">
            <FaSearch />
          </span>
          <input
            type="search"
            className="tw-w-44 tw-p-2 tw-text-sm tw-outline-none tw-bg-inherit"
            placeholder="Search"
          />
          <span className="tw-flex tw-items-center tw-gap-1 tw-p-2 tw-text-sm tw-select-none">
            <BiCommand /> K
          </span>
        </span>
        <span className="tw-text-xl tw-text-slate-700 hover:tw-text-slate-800 tw-transition-colors ">
          <FaBell />
        </span>
        <Image className="tw-rounded-full" src={avatar} alt="" />
      </div>
    </nav>
  );
}

import { BiMenu, BiTerminal } from "react-icons/bi";
import { FaBell, FaExclamation } from "react-icons/fa";

import CommandInputBox from "./command_input_box";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shadcn/components/ui/popover";
import ToggleTheme from "./toggle_theme";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shadcn/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/shadcn/components/ui/sheet";
import { DashboardSidebar } from "./sidebar";

export function DashboardNav() {
  return (
    <nav className="tw-sticky tw-top-0 tw-z-30 tw-flex tw-max-h-14 tw-border-b tw-border-b-slate-300 tw-bg-slate-100 tw-p-3 tw-shadow-sm dark:tw-border-b-slate-600 dark:tw-bg-slate-950 lg:tw-justify-between">
      <span className="tw-mr-3 tw-block tw-self-center tw-text-2xl tw-text-slate-700 dark:tw-text-slate-400 lg:tw-hidden">
        <Sheet>
          <SheetTrigger asChild>
            <BiMenu />
          </SheetTrigger>
          <SheetContent side={"left"} className="tw-w-[240px]">
            <SheetHeader>
              <Logo />
            </SheetHeader>
            <DashboardSidebar className="!tw-static tw-h-min tw-rounded tw-my-4 !tw-bg-inherit" />
            <ToggleTheme className="" />
          </SheetContent>
        </Sheet>
      </span>
      <Logo />
      {/*  Navitems */}

      <div className="tw-flex tw-items-center tw-gap-3">
        <CommandInputBox />
        <ToggleTheme className="tw-hidden" />

        <span className="tw-hidden tw-text-xl tw-text-slate-700 tw-transition-colors hover:tw-text-slate-800 dark:tw-text-slate-300 hover:dark:tw-text-slate-200 lg:tw-block ">
          <NotificationPopover />
        </span>
        <ProfilePopover />

        <span></span>
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <span className="tw-inline-flex tw-grow tw-select-none tw-items-center tw-gap-1 tw-text-2xl tw-text-slate-700 dark:tw-text-slate-300">
      Urbane <BiTerminal />{" "}
      <span className="tw-rounded tw-bg-red-600 tw-p-1 tw-text-[10px]   tw-font-extrabold tw-leading-[10px] tw-text-red-300">
        DEV
      </span>
    </span>
  );
}

function NotificationPopover() {
  return (
    <Popover>
      <PopoverTrigger className="tw-block">
        <span>
          <div>
            <strong className="tw-relative tw-flex">
              <span className="tw-items tw-absolute -tw-right-0.5 -tw-top-0.5 tw-flex tw-h-2.5 tw-w-2.5 tw-items-center tw-justify-center tw-rounded-full tw-bg-blue-600" />
              <span className="tw-items tw-absolute -tw-right-0.5 -tw-top-0.5 tw-flex tw-h-2.5 tw-w-2.5 tw-animate-ping tw-items-center tw-justify-center tw-rounded-full tw-bg-blue-600" />
              <span>
                <FaBell />
              </span>
            </strong>
          </div>
        </span>
      </PopoverTrigger>
      <PopoverContent sideOffset={18} className="tw-mr-1">
        <div className="tw-border-b tw-border-b-slate-400 tw-p-3 tw-font-bold tw-text-slate-800 dark:tw-border-b-slate-600 dark:tw-text-slate-200">
          NOTIFICATIONS (2)
        </div>
        <div className="tw-grid tw-divide-y tw-divide-slate-400 dark:tw-divide-slate-600">
          <NotificationItem
            title="Subscription Renewal"
            summary="Your subscription has been renewed till 24/03/2028."
          />
          <NotificationItem
            title="New Update"
            summary="Urbane has been updated to v0.2"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}

function NotificationItem({
  title,
  summary,
}: {
  title: string;
  summary: string;
}) {
  return (
    <div className="tw-grid tw-min-h-min tw-cursor-pointer tw-grid-flow-col tw-auto-rows-min tw-items-center tw-justify-around tw-gap-x-2 tw-bg-slate-100 tw-p-4 tw-text-sm hover:tw-bg-slate-200 dark:tw-bg-slate-900 dark:hover:tw-bg-slate-800">
      <span className="tw-row-span-2 tw-h-9 tw-w-9 tw-rounded-full tw-border tw-border-slate-300 tw-bg-slate-50 tw-p-2 tw-text-lg tw-text-slate-500 dark:tw-border-slate-600 dark:tw-bg-slate-950 dark:tw-text-slate-400">
        <FaExclamation />
      </span>
      <span className="tw-font-bold">{title}</span>
      <span className="tw-text-slate-600 dark:tw-text-slate-400">
        {summary}
      </span>
    </div>
  );
}

function ProfilePopover() {
  return (
    <Popover>
      <PopoverTrigger className="">
        <Avatar className="!tw-h-8 !tw-w-8">
          <AvatarFallback>SD</AvatarFallback>
          <AvatarImage src="/avatar.png" alt="" />
        </Avatar>
      </PopoverTrigger>
      <PopoverContent sideOffset={12} className="tw-mr-1">
        <div>
          <div className="tw-flex tw-flex-col tw-items-center tw-p-4">
            <Avatar className="!tw-h-8 !tw-w-8">
              <AvatarFallback>SD</AvatarFallback>
              <AvatarImage src="/avatar.png" alt="" />
            </Avatar>
            <span className="tw-font-bold">SupremeDeity</span>
            <span className="tw-text-xs tw-text-slate-800 dark:tw-text-slate-400">
              Member Since: 03/03/2023
            </span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

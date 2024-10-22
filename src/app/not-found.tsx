import Link from "next/link";
import { BiTerminal } from "react-icons/bi";

export default function NotFound() {
  return (
    <div className="tw-grid tw-h-screen tw-place-items-center tw-bg-radial-gradient tw-from-slate-100  tw-to-slate-300 dark:tw-from-slate-700 dark:tw-to-slate-900">
      <div className="tw-slate-300 tw-inline-flex tw-items-center tw-text-4xl dark:tw-text-slate-300">
        Ocean Connecting <BiTerminal />
        <span className="tw-rounded tw-bg-red-600 tw-p-1 tw-text-[10px] tw-font-extrabold tw-leading-[10px] tw-text-red-300">
          DEV
        </span>
      </div>
      <div className="tw-inline-flex tw-items-center tw-gap-3 tw-text-3xl ">
        <span className="tw-animate-pulse tw-bg-red-400 tw-bg-clip-text tw-text-8xl tw-font-bold tw-text-transparent sm:tw-text-9xl">
          404
        </span>

        <span>|</span>
        <span>Not Found</span>
      </div>
      <Link href="/dashboard">
        <div className="tw-rounded tw-bg-slate-800 tw-p-3 tw-font-bold tw-text-slate-100 tw-transition tw-ease-in hover:tw-bg-slate-700 dark:tw-bg-slate-600 hover:dark:tw-bg-slate-500">
          Return to Dashboard
        </div>
      </Link>
    </div>
  );
}

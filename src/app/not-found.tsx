import Link from "next/link";
import { BiTerminal } from "react-icons/bi";
import { IoReturnUpBack } from "react-icons/io5";

export default function NotFound() {
  return (
    <div className="tw-grid tw-h-screen tw-place-items-center tw-bg-radial-gradient tw-from-slate-700  tw-to-slate-900">
      <div className="tw-slate-300 tw-inline-flex tw-text-4xl tw-text-slate-300 tw-items-center">
        Urbane <BiTerminal /> <span className="tw-p-1 tw-text-[10px] tw-leading-[10px]  tw-bg-red-300/80 tw-text-red-900 tw-font-bold tw-rounded">DEV</span>
      </div>
      <div className="tw-inline-flex tw-items-center tw-gap-3 tw-text-3xl">
        <span className="tw-text-8xl sm:tw-text-9xl tw-text-red-400 tw-font-bold tw-animate-pulse">404</span> <span>|</span>
        <span>Not Found</span>
      </div>
      <Link href="/dashboard"><div className="tw-transition tw-ease-in tw-bg-slate-600 tw-p-3 tw-rounded tw-font-bold">Return to Dashboard</div></Link>
    </div>
  );
}

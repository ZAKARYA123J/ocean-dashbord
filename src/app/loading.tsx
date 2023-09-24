import { BiTerminal } from "react-icons/bi";

export default function Loading() {
  return (
    <div className="tw-flex tw-h-screen tw-items-center tw-justify-center tw-bg-slate-200 dark:tw-bg-slate-800">
      <span className="tw-inline-flex tw-animate-pulse tw-items-center tw-gap-1 tw-text-6xl tw-text-slate-700 dark:tw-text-slate-300">
        Urbane <BiTerminal />
      </span>
    </div>
  );
}

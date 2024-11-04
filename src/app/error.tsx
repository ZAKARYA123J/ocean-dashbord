"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";
import { BiRefresh, BiTerminal } from "react-icons/bi";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="tw-grid tw-h-screen tw-place-items-center tw-bg-radial-gradient  tw-from-slate-100  tw-to-slate-300 dark:tw-from-slate-700 dark:tw-to-slate-900">
      <div className="tw-inline-flex tw-items-center tw-text-4xl dark:tw-text-slate-300">
      Ocean Connecting  <BiTerminal />{" "}
        <span className="tw-rounded tw-bg-red-300/80 tw-p-1  tw-text-[10px] tw-font-bold tw-leading-[10px] tw-text-red-900">
          DEV
        </span>
      </div>
      <div className="tw-inline-flex tw-items-center tw-gap-3 tw-text-3xl">
        <span className="tw-animate-pulse tw-text-6xl tw-font-bold tw-text-red-400">
          ERROR
        </span>{" "}
        <span>|</span>
        <span>Something went wrong!</span>
      </div>
      <button
        onClick={() => reset()}
        className="tw-rounded tw-bg-slate-800 tw-px-10 tw-py-3 tw-font-bold tw-text-slate-100 tw-transition tw-ease-in hover:tw-bg-slate-700 dark:tw-bg-slate-600 hover:dark:tw-bg-slate-500"
      >
        Retry
      </button>
    </div>
  );
}

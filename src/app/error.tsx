'use client' // Error components must be Client Components
 
import Link from 'next/link'
import { useEffect } from 'react'
import { BiRefresh, BiTerminal } from 'react-icons/bi'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="tw-grid tw-h-screen tw-place-items-center tw-bg-radial-gradient tw-from-slate-700  tw-to-slate-900">
      <div className="tw-slate-300 tw-inline-flex tw-text-4xl tw-text-slate-300 tw-items-center">
        Urbane <BiTerminal /> <span className="tw-p-1 tw-text-[10px] tw-leading-[10px]  tw-bg-red-300/80 tw-text-red-900 tw-font-bold tw-rounded">DEV</span>
      </div>
      <div className="tw-inline-flex tw-items-center tw-gap-3 tw-text-3xl">
        <span className="tw-text-6xl tw-text-red-400 tw-font-bold tw-animate-pulse">ERROR</span> <span>|</span>
        <span>Something went wrong!</span>
      </div>
      <button onClick={() => reset()} className="tw-transition tw-ease-in tw-bg-slate-700 hover:tw-bg-slate-600 tw-p-3 tw-rounded tw-font-bold">Retry</button>
    </div>
  )
}
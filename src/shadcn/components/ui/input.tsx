import * as React from "react"

import { cn } from "@/shadcn/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "tw-flex tw-h-10 tw-w-full tw-rounded-md tw-border tw-border-slate-400 tw-bg-white tw-px-3 tw-py-2 tw-text-sm tw-ring-offset-white file:tw-border-0 file:tw-bg-transparent file:tw-text-sm file:tw-font-medium placeholder:tw-text-slate-500 focus-visible:tw-outline-none  disabled:tw-cursor-not-allowed disabled:tw-opacity-50 dark:tw-border-slate-600 dark:tw-bg-slate-950  dark:placeholder:tw-text-slate-400 ",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

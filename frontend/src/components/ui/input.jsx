import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    (<input
      type={type}
      data-slot="input"
      className={cn(
        "placeholder:text-gray-400 flex h-10 w-full min-w-0 rounded-xl border-2 border-black bg-white px-4 py-2 text-base font-medium shadow-[3px_3px_0px_0px_#000] transition-all outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus:shadow-[4px_4px_0px_0px_#000] focus:ring-0 focus:-translate-y-0.5",
        className
      )}
      {...props} />)
  );
}

export { Input }

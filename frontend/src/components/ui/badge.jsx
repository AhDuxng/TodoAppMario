import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-lg border-2 border-black px-3 py-1 text-xs font-bold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-all shadow-[2px_2px_0px_0px_#000] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-red-500 text-white",
        secondary:
          "bg-yellow-400 text-gray-800",
        destructive:
          "bg-red-600 text-white",
        outline:
          "bg-white text-gray-800",
        success:
          "bg-green-500 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span"

  return (
    (<Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props} />)
  );
}

export { Badge, badgeVariants }

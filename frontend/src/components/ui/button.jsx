import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none active:translate-y-1 active:shadow-none",
  {
    variants: {
      variant: {
        default: "bg-white text-gray-800 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] hover:-translate-y-0.5",
        destructive:
          "bg-red-500 text-white border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-red-600 active:bg-red-700",
        outline:
          "bg-white text-gray-800 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-gray-50",
        secondary:
          "bg-yellow-400 text-gray-800 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-yellow-300",
        ghost:
          "bg-transparent text-gray-700 hover:bg-white/50 border-2 border-transparent hover:border-black hover:shadow-[2px_2px_0px_0px_#000]",
        link: "text-red-600 underline-offset-4 hover:underline font-bold",
        gradient:
          "bg-gradient-to-r from-orange-400 to-red-500 text-white border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-y-0.5 hover:from-orange-500 hover:to-red-600",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-4",
        sm: "h-9 rounded-lg gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-11 rounded-xl px-7 has-[>svg]:px-5",
        xl: "h-12 rounded-xl px-8 text-base",
        icon: "size-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

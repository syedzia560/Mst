import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-normal sm:whitespace-nowrap text-center max-w-full min-w-0 rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl text-base px-5 sm:px-8 py-4 sm:py-6 tracking-wide",
        heroOutline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base px-5 sm:px-8 py-4 sm:py-6 tracking-wide",
        gold: "bg-gold text-black hover:bg-gold/90 font-semibold uppercase tracking-[0.16em] text-xs rounded-sm shadow-md hover:shadow-xl hover:shadow-gold/20 transition-all duration-300",
        mstGold: "bg-gold text-black hover:bg-gold/90 font-semibold uppercase tracking-[0.16em] text-xs rounded-sm shadow-md hover:shadow-xl hover:shadow-gold/20 transition-all duration-300",
        mstOutline: "border border-gold/70 text-gold bg-transparent hover:bg-gold hover:text-black font-semibold uppercase tracking-[0.16em] text-xs rounded-sm transition-all duration-300 hover:shadow-md hover:shadow-gold/20",
        mstWhiteOutline: "border border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-white font-semibold uppercase tracking-[0.16em] text-xs rounded-sm transition-all duration-300",
      },
      size: {
        default: "h-auto min-h-10 px-4 py-2",
        sm: "h-auto min-h-9 rounded-md px-3 py-1.5",
        lg: "h-auto min-h-11 rounded-md px-5 sm:px-8 py-3",
        xl: "h-auto min-h-14 rounded-md px-6 sm:px-10 py-4 text-base sm:text-lg",
        icon: "h-10 w-10 shrink-0",
        luxury: "h-auto py-4 sm:py-5 px-5 sm:px-8 text-xs",
        luxuryLg: "h-auto py-4 sm:py-6 px-6 sm:px-10 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

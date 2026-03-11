import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-green-700 shadow-md hover:shadow-lg",
        secondary: "bg-transparent border-2 border-primary text-primary hover:bg-green-50",
        ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
        danger: "bg-red-600 text-white hover:bg-red-700 animate-pulse",
        outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900",
      },
      size: {
        sm: "h-9 px-4 rounded-md",
        md: "h-11 px-8 rounded-lg",
        lg: "h-14 px-10 text-lg rounded-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95";
    
    const variants = {
      primary: "bg-[#16a34a] text-white hover:bg-green-700 hover:shadow-lg shadow-md focus:ring-[#16a34a]",
      secondary: "bg-transparent border-2 border-[#16a34a] text-[#16a34a] hover:bg-[#f0fdf4] focus:ring-[#16a34a]",
      ghost: "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:ring-slate-400",
      danger: "bg-red-600 text-white hover:bg-red-700 hover:shadow-lg animate-pulse focus:ring-red-600"
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-2.5 text-sm",
      lg: "px-8 py-3 text-base"
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return <a href={href} className={classes}>{props.children}</a>;
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
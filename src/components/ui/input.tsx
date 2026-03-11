import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    
    return (
      <div className="relative mt-6">
        <input
          type={type}
          id={inputId}
          className={cn(
            "peer w-full h-14 bg-slate-50 border-2 border-slate-100 rounded-xl px-4 pt-4 text-slate-900 placeholder-transparent focus:outline-none focus:border-[#16a34a] focus:bg-white transition-all",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          placeholder={label}
          ref={ref}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={cn(
            "absolute left-4 top-4 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#16a34a] cursor-text pointer-events-none",
            error && "peer-focus:text-red-500"
          )}
        >
          {label}
        </label>
        {error && (
          <p id={`${inputId}-error`} className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
import * as React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertCircle } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, &quot;-");
    const isValid = !error && props.value && props.value.toString().length > 0;

    return (
      <div className="relative mt-6">
        <input
          type={type}
          id={inputId}
          className={cn(
            "peer w-full h-14 bg-slate-50 border-2 border-slate-100 rounded-xl px-4 pt-4 text-slate-900 placeholder-transparent focus:outline-none focus:border-primary focus:bg-white transition-all",
            error && "border-danger focus:border-danger",
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
            "absolute left-4 top-4 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary",
            error && "peer-focus:text-danger peer-focus:text-xs peer-focus:top-1"
          )}
        >
          {label}
        </label>
        <div className="absolute right-4 top-4">
          {error ? (
            <AlertCircle className="h-5 w-5 text-danger" />
          ) : isValid ? (
            <CheckCircle2 className="h-5 w-5 text-primary opacity-100 transition-opacity" />
          ) : null}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="text-danger text-xs mt-1 ml-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
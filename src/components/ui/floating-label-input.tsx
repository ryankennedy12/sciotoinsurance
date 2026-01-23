import * as React from "react";
import { cn } from "@/lib/utils";

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
  success?: boolean;
}

const FloatingLabelInput = React.forwardRef<HTMLInputElement, FloatingLabelInputProps>(
  ({ className, label, error, success, id, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);
    const inputId = id || React.useId();

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(!!e.target.value);
      props.onChange?.(e);
    };

    const isFloating = isFocused || hasValue || !!props.value || !!props.defaultValue;

    return (
      <div className="relative">
        <input
          id={inputId}
          ref={ref}
          className={cn(
            "peer w-full h-14 px-4 pt-5 pb-2 rounded-md border bg-background text-base",
            "transition-all duration-200",
            "placeholder-transparent",
            "focus:outline-none focus:ring-2 focus:ring-offset-0",
            // Default state
            "border-input focus:border-primary focus:ring-primary/20",
            // Error state
            error && "border-destructive focus:border-destructive focus:ring-destructive/20 animate-shake",
            // Success state
            success && "border-green-500 focus:border-green-500 focus:ring-green-500/20",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          placeholder={label}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={cn(
            "absolute left-4 transition-all duration-200 pointer-events-none",
            "text-muted-foreground",
            isFloating
              ? "top-2 text-xs font-medium text-primary"
              : "top-1/2 -translate-y-1/2 text-base",
            error && isFloating && "text-destructive",
            success && isFloating && "text-green-600"
          )}
        >
          {label}
        </label>
        {success && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 animate-scale-in">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>
    );
  }
);

FloatingLabelInput.displayName = "FloatingLabelInput";

export { FloatingLabelInput };

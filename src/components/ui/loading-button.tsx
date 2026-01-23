import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const loadingButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-sm",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-sm",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof loadingButtonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  isSuccess?: boolean;
  loadingText?: string;
  successText?: string;
}

const LoadingButton = React.forwardRef<HTMLButtonElement, LoadingButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      isSuccess = false,
      loadingText,
      successText,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const renderContent = () => {
      if (isLoading) {
        return (
          <>
            <Loader2 className="animate-spin" />
            {loadingText || "Loading..."}
          </>
        );
      }

      if (isSuccess) {
        return (
          <>
            <Check className="animate-scale-in" />
            {successText || "Success!"}
          </>
        );
      }

      return children;
    };

    return (
      <Comp
        className={cn(
          loadingButtonVariants({ variant, size, className }),
          isSuccess && "bg-green-600 hover:bg-green-600"
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {renderContent()}
      </Comp>
    );
  }
);

LoadingButton.displayName = "LoadingButton";

export { LoadingButton, loadingButtonVariants };

import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variantClasses = {
      default: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
      destructive: "bg-red-800 text-white hover:bg-red-900 focus-visible:ring-red-500",
      outline: "border border-red-300 bg-black text-red-300 hover:bg-red-900 focus-visible:ring-red-500",
      secondary: "bg-gray-800 text-red-300 hover:bg-gray-700 focus-visible:ring-red-500",
      ghost: "text-red-300 hover:bg-red-900/20 focus-visible:ring-red-500",
      link: "text-red-400 underline-offset-4 hover:underline focus-visible:ring-red-500",
    };
    
    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3 text-xs",
      lg: "h-11 rounded-md px-8 text-base",
      icon: "h-10 w-10",
    };

    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
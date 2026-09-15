import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "accent" | "success";
  size?: "sm" | "md";
}

export function Badge({
  children,
  className,
  variant = "default",
  size = "md",
  ...props
}: BadgeProps) {
  const baseStyles = "inline-flex items-center font-medium rounded-full transition-colors";
  
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-xs sm:text-sm",
  };

  const variantStyles = {
    default: "bg-zinc-100 text-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/60",
    secondary: "bg-zinc-200/70 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
    outline: "border border-zinc-300 dark:border-zinc-700/80 text-zinc-700 dark:text-zinc-300 bg-transparent",
    accent: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20",
    success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
  };

  return (
    <span
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}

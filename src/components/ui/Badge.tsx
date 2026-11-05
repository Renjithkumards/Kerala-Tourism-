import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "outline" | "gold" | "terracotta" | "dark";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}) => {
  const variantStyles = {
    primary: "bg-kerala-100 text-kerala-800 border-kerala-200",
    secondary: "bg-gray-100 text-gray-700 border-gray-200",
    success: "bg-emerald-100 text-emerald-800 border-emerald-200",
    outline: "bg-white/80 backdrop-blur-sm text-gray-800 border-gray-300",
    gold: "bg-amber-100 text-amber-900 border-amber-300",
    terracotta: "bg-orange-100 text-orange-900 border-orange-200",
    dark: "bg-gray-900/80 backdrop-blur-sm text-white border-white/20",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5 font-medium rounded-full border",
    md: "text-xs md:text-sm px-3 py-1 font-medium rounded-full border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

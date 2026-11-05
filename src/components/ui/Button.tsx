import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold" | "whatsapp" | "white";
  size?: "sm" | "md" | "lg";
  target?: string;
  rel?: string;
  className?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  target,
  rel,
  icon,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-kerala-700 hover:bg-kerala-800 text-white shadow-sm hover:shadow focus:ring-kerala-500",
    secondary:
      "bg-kerala-100 hover:bg-kerala-200 text-kerala-900 focus:ring-kerala-400",
    outline:
      "border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-800 focus:ring-gray-300",
    ghost:
      "text-gray-700 hover:text-kerala-800 hover:bg-kerala-50 focus:ring-kerala-200",
    gold:
      "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-sm hover:shadow focus:ring-amber-400",
    whatsapp:
      "bg-[#25D366] hover:bg-[#20ba59] text-white shadow-sm hover:shadow focus:ring-[#25D366]",
    white:
      "bg-white hover:bg-gray-100 text-kerala-900 shadow-sm hover:shadow focus:ring-white",
  };

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
  };

  const combinedClass = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClass} target={target} rel={rel}>
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

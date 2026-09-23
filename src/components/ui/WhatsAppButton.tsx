import React from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "@/config/contact";
import { cn } from "@/lib/utils";

export interface WhatsAppButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  message?: string;
  phone?: string;
  variant?: "primary" | "outline" | "dark" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  iconOnly?: boolean;
  children?: React.ReactNode;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  phone,
  variant = "primary",
  size = "md",
  fullWidth = false,
  iconOnly = false,
  className,
  children = "Chat on WhatsApp",
  "aria-label": ariaLabel,
  ...props
}) => {
  const url = getWhatsAppUrl(message, phone);

  // Variant styling
  const variantStyles = {
    // Official WhatsApp Green (#25D366)
    primary:
      "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-sm hover:shadow-md border border-emerald-500/20",
    outline:
      "bg-white hover:bg-emerald-50 text-[#128C7E] border border-emerald-600/30 hover:border-emerald-600 shadow-sm",
    dark:
      "bg-kerala-900 hover:bg-kerala-800 text-white shadow-sm border border-kerala-700/50",
    ghost:
      "text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800",
    gold:
      "bg-gold-500 hover:bg-gold-400 text-kerala-950 font-bold shadow-sm",
  };

  // Size styling
  const sizeStyles = {
    sm: iconOnly ? "p-2 min-w-[38px] min-h-[38px]" : "px-3.5 py-2 text-xs gap-1.5",
    md: iconOnly ? "p-2.5 min-w-[44px] min-h-[44px]" : "px-5 py-2.5 text-sm gap-2",
    lg: iconOnly ? "p-3.5 min-w-[52px] min-h-[52px]" : "px-7 py-3.5 text-base gap-2.5",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-4 h-4 sm:w-5 sm:h-5",
    lg: "w-5 h-5 sm:w-6 sm:h-6",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        ariaLabel || (typeof children === "string" ? children : "Chat with us on WhatsApp")
      }
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-200 active:scale-[0.98] group cursor-pointer",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      <WhatsAppIcon
        className={cn(
          iconSizes[size],
          variant === "primary" ? "text-white" : variant === "outline" ? "text-[#25D366]" : "text-emerald-400",
          "shrink-0 transition-transform duration-200 group-hover:scale-110"
        )}
      />
      {!iconOnly && <span>{children}</span>}
    </a>
  );
};

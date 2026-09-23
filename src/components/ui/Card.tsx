import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-gray-100/80 overflow-hidden shadow-sm transition-all duration-300",
        hover && "hover:shadow-xl hover:-translate-y-1 hover:border-gray-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("p-5 md:p-6", className)} {...props}>
      {children}
    </div>
  );
};

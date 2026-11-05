import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  actionHref?: string;
  actionText?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = "left",
  actionHref,
  actionText,
  className,
}) => {
  return (
    <div
      className={cn(
        "mb-10 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4",
        align === "center" && "md:flex-col md:items-center text-center",
        className
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {badge && (
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-kerala-700 bg-kerala-50 border border-kerala-200 px-3 py-1 rounded-full mb-3">
            {badge}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {actionHref && actionText && align !== "center" && (
        <div className="shrink-0 pt-2 md:pt-0">
          <Link
            href={actionHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-kerala-700 hover:text-kerala-800 group transition-colors"
          >
            <span>{actionText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
};

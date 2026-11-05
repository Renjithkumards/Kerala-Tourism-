import React from "react";
import { quickStats } from "@/data/siteConfig";

export const QuickHighlights: React.FC = () => {
  return (
    <section className="bg-white border-b border-gray-100 relative z-20 -mt-8 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
        {quickStats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex flex-col ${idx !== 0 ? "pt-4 lg:pt-0 lg:pl-6" : ""}`}
          >
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-kerala-700 tracking-tight">
              {stat.value}
            </span>
            <span className="text-sm sm:text-base font-bold text-gray-900 mt-1">
              {stat.label}
            </span>
            <span className="text-xs text-gray-500 mt-0.5 leading-relaxed">
              {stat.sub}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

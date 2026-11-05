import React from "react";
import Link from "next/link";
import { Ship, Mountain, Sun, TreePine, Drama, Utensils, ArrowRight } from "lucide-react";
import { experiences } from "@/data/experiences";

export const ExperiencesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Ship":
        return <Ship className="w-5 h-5 text-emerald-300" />;
      case "Mountain":
        return <Mountain className="w-5 h-5 text-teal-300" />;
      case "Sun":
        return <Sun className="w-5 h-5 text-gold-300" />;
      case "TreePine":
        return <TreePine className="w-5 h-5 text-emerald-400" />;
      case "Drama":
        return <Drama className="w-5 h-5 text-rose-300" />;
      case "Utensils":
        return <Utensils className="w-5 h-5 text-amber-300" />;
      default:
        return <Ship className="w-5 h-5 text-emerald-300" />;
    }
  };

  return (
    <section id="experiences" className="py-20 sm:py-24 bg-kerala-50/50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-kerala-700 bg-kerala-100/70 border border-kerala-200 px-3.5 py-1 rounded-full mb-3 inline-block">
            AUTHENTIC EXPERIENCES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-kerala-900 tracking-tight font-serif">
            Kerala Experiences
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-light">
            Immerse yourself in signature journeys across water, highlands, coastlines, wildlife sanctuaries, and rich cultural traditions.
          </p>
        </div>

        {/* 6 Experiences Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative rounded-3xl overflow-hidden bg-kerala-900 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col h-[340px]"
            >
              {/* Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-60"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kerala-950 via-kerala-950/60 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 p-6 flex-1 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    {getIcon(exp.icon)}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-200 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                    {exp.tag}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-semibold text-gold-400 tracking-wider uppercase block mb-1">
                    {exp.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white font-serif mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed line-clamp-2">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

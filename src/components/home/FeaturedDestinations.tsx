"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles, MapPin } from "lucide-react";
import { destinations } from "@/data/destinations";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/config/contact";

const categories = [
  "All",
  "Backwaters",
  "Hill Stations",
  "Beaches",
  "Wildlife & Nature",
  "Heritage & Culture",
];

export const FeaturedDestinations: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredDestinations =
    activeCategory === "All"
      ? destinations.slice(0, 6)
      : destinations.filter((dest) => dest.category === activeCategory);

  return (
    <section id="destinations" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-bold text-kerala-700 bg-kerala-50 border border-kerala-200/80 px-3.5 py-1 rounded-full mb-3 inline-block">
              TOP PLACES TO VISIT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-kerala-900 tracking-tight font-serif">
              Popular Destinations
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Explore Kerala&apos;s most iconic travel locations, from tranquil backwater lagoons and misty hill stations to vibrant coastal quarters.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-kerala-800 hover:text-kerala-600 group transition-colors"
            >
              <span>View all 12 destinations</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? "bg-kerala-800 text-white shadow-sm font-semibold"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badges on image */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-md text-kerala-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {dest.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="flex items-center gap-1 text-xs text-emerald-200">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{dest.district} District</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Name */}
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight font-serif group-hover:text-kerala-800 transition-colors">
                    {dest.name}
                  </h3>

                  {/* Short description */}
                  <p className="mt-2.5 text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {dest.description}
                  </p>

                  {/* Best experience callout */}
                  <div className="mt-4 p-3.5 rounded-2xl bg-gold-50/80 border border-gold-200/60">
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-gold-800 block">
                          Best Experience
                        </span>
                        <p className="text-xs text-gray-700 mt-0.5 leading-snug">
                          {dest.bestExperience || dest.highlights[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs text-gray-500 font-medium">
                    Ideal: <strong className="text-gray-800">{dest.idealDuration}</strong>
                  </span>
                  <div className="flex items-center gap-2">
                    <WhatsAppButton
                      message={WHATSAPP_MESSAGES.destination(dest.name)}
                      variant="primary"
                      size="sm"
                      className="px-3 py-1.5 text-xs rounded-xl"
                    >
                      Enquire
                    </WhatsAppButton>
                    <Link
                      href={`/destinations#${dest.slug}`}
                      className="inline-flex items-center gap-1 bg-gray-50 hover:bg-kerala-800 hover:text-white text-kerala-900 font-semibold px-3 py-1.5 rounded-xl text-xs transition-colors border border-gray-200/80"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 text-center">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 bg-kerala-800 hover:bg-kerala-700 text-white font-semibold px-7 py-3 rounded-xl text-sm shadow-soft transition-colors"
          >
            <Compass className="w-4 h-4 text-gold-300" />
            <span>View All Kerala Destinations</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

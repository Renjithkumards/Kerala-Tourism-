"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, MapPin, Sparkles, Clock, ArrowRight } from "lucide-react";
import { destinations } from "@/data/destinations";
import { DestinationCategory } from "@/types";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/config/contact";

const categories = [
  "All",
  "Backwaters",
  "Hill Stations",
  "Beaches",
  "Wildlife & Nature",
  "Heritage & Culture",
  "Waterfalls",
];

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = useMemo(() => {
    return destinations.filter((dest) => {
      const matchesCategory =
        selectedCategory === "All" || dest.category === selectedCategory;
      const matchesSearch =
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-kerala-700 bg-kerala-50 border border-kerala-200 px-3.5 py-1 rounded-full mb-3 inline-block">
            DISCOVER GOD&apos;S OWN COUNTRY
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-kerala-900 font-serif tracking-tight">
            Kerala Destinations
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-light">
            Discover all 12 iconic districts and natural wonders of Kerala — from misty high-altitude tea hills to serene palm-fringed backwaters and cliff beaches.
          </p>
        </div>

        {/* Search and Category Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-kerala-50/50 p-4 rounded-3xl border border-gray-100">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by destination or district..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-kerala-600 transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? "bg-kerala-800 text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dest) => (
            <div
              key={dest.id}
              id={dest.slug}
              className="bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden group scroll-mt-28"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-md text-kerala-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
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

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 font-serif group-hover:text-kerala-800 transition-colors">
                    {dest.name}
                  </h2>

                  <p className="mt-2.5 text-sm text-gray-600 leading-relaxed">
                    {dest.description}
                  </p>

                  {/* Best Experience */}
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

                  {/* Highlights */}
                  <div className="mt-4 space-y-1.5">
                    <span className="text-xs uppercase font-bold text-gray-400 tracking-wider block">
                      Key Highlights:
                    </span>
                    {dest.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="text-xs text-gray-600 flex items-center gap-1.5">
                        <span className="text-kerala-600 font-bold">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500">
                  <div className="flex flex-col gap-0.5">
                    <span>
                      Best time: <strong className="text-gray-800">{dest.bestTime}</strong>
                    </span>
                    <span>
                      Duration: <strong className="text-gray-800">{dest.idealDuration}</strong>
                    </span>
                  </div>

                  <WhatsAppButton
                    message={WHATSAPP_MESSAGES.destination(dest.name)}
                    variant="primary"
                    size="sm"
                    className="py-2 px-3.5 rounded-xl text-xs font-semibold"
                  >
                    Enquire on WhatsApp
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useMemo } from "react";
import { Search, MapPin, Star } from "lucide-react";
import { stays } from "@/data/stays";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/config/contact";

const stayCategories = [
  "All",
  "Hotels",
  "Resorts",
  "Homestays",
  "Houseboats",
  "Beach stays",
  "Hill stays",
  "Budget stays",
];

export default function StaysPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return stays.filter((stay) => {
      const matchesCategory =
        selectedCategory === "All" || stay.category === selectedCategory;
      const matchesSearch =
        stay.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stay.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stay.district.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-kerala-700 bg-kerala-50 border border-kerala-200 px-3.5 py-1 rounded-full mb-3 inline-block">
            ACCOMMODATIONS
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-kerala-900 font-serif tracking-tight">
            Places to Stay in Kerala
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-light">
            From drifting backwater houseboats to eco-resorts, heritage homestays, and clifftop beach villas, find the perfect retreat for your vacation.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-kerala-50/50 p-4 rounded-3xl border border-gray-100">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, city, or district..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-kerala-600"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 no-scrollbar">
            {stayCategories.map((cat) => (
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

        {/* Stays Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((stay) => {
            const whatsappText = `Hello, I would like to inquire about booking/availability for: ${stay.name} (${stay.location}).`;
            const whatsappUrl = getWhatsAppLink(siteConfig.whatsappNumber, whatsappText);

            return (
              <div
                key={stay.id}
                className="bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden group"
              >
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <img
                    src={stay.image}
                    alt={stay.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-md text-kerala-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {stay.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-md font-medium">
                      <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                      {stay.rating} ({stay.reviewsCount})
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 font-serif group-hover:text-kerala-800 transition-colors">
                      {stay.name}
                    </h2>

                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-kerala-600 shrink-0" />
                      <span>{stay.location}</span>
                    </p>

                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                      {stay.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {stay.amenities.map((a, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-kerala-50 text-kerala-800 border border-kerala-100 px-2.5 py-0.5 rounded-lg font-medium"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-3">
                      <span className="text-xs uppercase text-gray-400 font-semibold tracking-wider">
                        Price Range
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        {stay.priceRange}
                      </span>
                    </div>

                    <WhatsAppButton
                      href={whatsappUrl}
                      variant="primary"
                      size="sm"
                      fullWidth
                      className="py-2.5 px-4 rounded-xl text-xs font-semibold"
                    >
                      Enquire on WhatsApp
                    </WhatsAppButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useMemo } from "react";
import { Search, Flame } from "lucide-react";
import { foods } from "@/data/foods";
import { DietaryType } from "@/types";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/config/contact";

const dietaryFilters = ["All", "Vegetarian", "Non-Vegetarian", "Vegan"];

export default function FoodPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDietary, setSelectedDietary] = useState("All");

  const filtered = useMemo(() => {
    return foods.filter((dish) => {
      const matchesDietary =
        selectedDietary === "All" || dish.dietary === selectedDietary;
      const matchesSearch =
        dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.malayalamName.includes(searchQuery) ||
        dish.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDietary && matchesSearch;
    });
  }, [searchQuery, selectedDietary]);

  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-kerala-700 bg-kerala-50 border border-kerala-200 px-3.5 py-1 rounded-full mb-3 inline-block">
            AUTHENTIC TASTES
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-kerala-900 font-serif tracking-tight">
            Kerala Food &amp; Cuisine
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-light">
            Discover the rich culinary traditions of Kerala — slow-cooked in earthenware pots, infused with cold-pressed coconut oil, fresh curry leaves, and world-famous spices.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-kerala-50/50 p-4 rounded-3xl border border-gray-100">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-kerala-600"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar">
            {dietaryFilters.map((diet) => (
              <button
                key={diet}
                onClick={() => setSelectedDietary(diet)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedDietary === diet
                    ? "bg-kerala-800 text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/80"
                }`}
              >
                {diet}
              </button>
            ))}
          </div>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dish) => (
            <div
              key={dish.id}
              id={dish.slug}
              className="bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden group scroll-mt-28"
            >
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                      dish.dietary === "Vegetarian"
                        ? "bg-white/95 text-emerald-800"
                        : dish.dietary === "Vegan"
                        ? "bg-white/95 text-teal-800"
                        : "bg-white/95 text-orange-900"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        dish.dietary === "Vegetarian"
                          ? "bg-emerald-600"
                          : dish.dietary === "Vegan"
                          ? "bg-teal-600"
                          : "bg-orange-600"
                      }`}
                    />
                    <span>{dish.dietary}</span>
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs font-semibold text-gold-300 tracking-wider">
                    {dish.malayalamName}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-bold text-gray-900 font-serif group-hover:text-kerala-800 transition-colors">
                      {dish.name}
                    </h2>
                    <span className="flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                      <Flame className="w-3 h-3" />
                      {dish.spiceLevel}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {dish.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                      Key Ingredients
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {dish.keyIngredients.map((ing, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-gray-50 text-gray-600 border border-gray-200/80 px-2.5 py-0.5 rounded-lg"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500">
                  <span className="truncate max-w-[170px]">
                    Must Try At: <strong className="text-gray-800">{dish.mustTryPlace}</strong>
                  </span>

                  <WhatsAppButton
                    message={WHATSAPP_MESSAGES.food(dish.name)}
                    variant="primary"
                    size="sm"
                    className="py-1.5 px-3 text-xs rounded-xl"
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

import React from "react";
import Link from "next/link";
import { ArrowRight, Utensils } from "lucide-react";
import { foods } from "@/data/foods";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/config/contact";

export const PopularFoodSection: React.FC = () => {
  // Showcase top signature dishes
  const popularDishes = foods.slice(0, 6);

  return (
    <section id="food" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-bold text-kerala-700 bg-kerala-50 border border-kerala-200/80 px-3.5 py-1 rounded-full mb-3 inline-block">
              CULINARY HERITAGE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-kerala-900 tracking-tight font-serif">
              Kerala Food
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Experience the distinctive flavours of God&apos;s Own Country — freshly ground spices, slow-extracted coconut milk, fragrant curry leaves, and coastal recipes passed down for generations.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/food"
              className="inline-flex items-center gap-2 text-sm font-semibold text-kerala-800 hover:text-kerala-600 group transition-colors"
            >
              <span>View all 10 Kerala dishes</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Dietary badge */}
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

                {/* Malayalam Name overlay */}
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs font-semibold text-gold-300 tracking-wider">
                    {dish.malayalamName}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 font-serif group-hover:text-kerala-800 transition-colors">
                    {dish.name}
                  </h3>

                  <p className="mt-2.5 text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {dish.description}
                  </p>

                  {/* Key ingredients */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
                    {dish.keyIngredients.slice(0, 3).map((ing, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-gray-50 text-gray-600 border border-gray-200/80 px-2.5 py-0.5 rounded-lg"
                      >
                        {ing.split("(")[0].trim()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="text-gray-500 truncate max-w-[140px] sm:max-w-[180px]">
                    Best at: <strong className="text-gray-700">{dish.mustTryPlace.split(" ")[0]}</strong>
                  </span>
                  <div className="flex items-center gap-2">
                    <WhatsAppButton
                      message={WHATSAPP_MESSAGES.food(dish.name)}
                      variant="primary"
                      size="sm"
                      className="px-2.5 py-1 text-[11px] rounded-lg"
                    >
                      Enquire
                    </WhatsAppButton>
                    <Link
                      href={`/food#${dish.slug}`}
                      className="font-bold text-kerala-800 hover:text-kerala-600 inline-flex items-center gap-1"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/food"
            className="inline-flex items-center gap-2 bg-kerala-800 hover:bg-kerala-700 text-white font-semibold px-7 py-3 rounded-xl text-sm shadow-soft transition-colors"
          >
            <Utensils className="w-4 h-4 text-gold-300" />
            <span>Discover All Authentic Kerala Dishes</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

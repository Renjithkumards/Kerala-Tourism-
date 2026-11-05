import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight, Star } from "lucide-react";
import { stays } from "@/data/stays";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/config/contact";

// Four specific stay categories requested: Resort, Homestay, Houseboat, Beach stay
const featuredStayCategories = ["Resorts", "Homestays", "Houseboats", "Beach stays"] as const;

export const RecommendedStays: React.FC = () => {
  // Select one premier stay for each requested category
  const selectedStays = featuredStayCategories
    .map((cat) => stays.find((s) => s.category === cat))
    .filter(Boolean);

  return (
    <section id="stays" className="py-20 sm:py-24 bg-kerala-50/50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-bold text-kerala-700 bg-kerala-100/70 border border-kerala-200 px-3.5 py-1 rounded-full mb-3 inline-block">
              WHERE TO STAY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-kerala-900 tracking-tight font-serif">
              Recommended Stays
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Carefully chosen retreats offering authentic hospitality — from tranquil backwater houseboats to eco-resorts, heritage homestays, and clifftop beach villas.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/stays"
              className="inline-flex items-center gap-2 text-sm font-semibold text-kerala-800 hover:text-kerala-600 group transition-colors"
            >
              <span>Explore all places to stay</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 4 Stays Grid: Resort, Homestay, Houseboat, Beach Stay */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {selectedStays.map((stay) => {
            if (!stay) return null;

            return (
              <div
                key={stay.id}
                className="bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                  <img
                    src={stay.image}
                    alt={stay.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-md text-kerala-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {stay.category.replace(/s$/, "")} {/* Resort, Homestay, Houseboat, Beach stay */}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-md font-medium">
                      <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                      {stay.rating} ({stay.reviewsCount})
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 font-serif line-clamp-1 group-hover:text-kerala-800 transition-colors">
                      {stay.name}
                    </h3>

                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-kerala-600 shrink-0" />
                      <span className="truncate">{stay.location}</span>
                    </p>

                    <p className="text-xs text-gray-600 mt-2.5 line-clamp-2 leading-relaxed">
                      {stay.description}
                    </p>

                    {/* Amenities pills */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {stay.amenities.slice(0, 3).map((a, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-kerala-50 text-kerala-800 border border-kerala-100 px-2 py-0.5 rounded font-medium"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & Contact Button */}
                  <div className="mt-5 pt-3 border-t border-gray-100">
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-3">
                      <span className="text-[10px] uppercase text-gray-400 font-semibold tracking-wider">
                        Price Starting From
                      </span>
                      <span className="text-xs font-bold text-gray-900">
                        {stay.priceRange.split("-")[0].trim()} / night
                      </span>
                    </div>

                    <WhatsAppButton
                      message={WHATSAPP_MESSAGES.stay(stay.name)}
                      variant="primary"
                      size="sm"
                      fullWidth
                      className="py-2.5 rounded-xl text-xs font-semibold"
                    >
                      Enquire on WhatsApp
                    </WhatsAppButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Stays Link */}
        <div className="mt-14 text-center">
          <Link
            href="/stays"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-kerala-700 text-gray-800 hover:text-kerala-800 font-semibold px-7 py-3 rounded-xl text-sm shadow-soft transition-colors"
          >
            <span>View All Kerala Stay Categories</span>
            <ArrowRight className="w-4 h-4 text-kerala-700" />
          </Link>
        </div>
      </div>
    </section>
  );
};

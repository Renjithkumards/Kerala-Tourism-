import React from "react";
import Link from "next/link";
import { Clock, MapPin, ArrowRight, Check } from "lucide-react";
import { packages } from "@/data/packages";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/config/contact";

export const TourPackagesSection: React.FC = () => {
  return (
    <section id="packages" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-bold text-kerala-700 bg-kerala-50 border border-kerala-200/80 px-3.5 py-1 rounded-full mb-3 inline-block">
              CURATED ITINERARIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-kerala-900 tracking-tight font-serif">
              Popular Tour Packages
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Complete, hassle-free Kerala holiday packages with private chauffeured cars, certified local guides, handpicked stays, and backwater cruises.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-sm font-semibold text-kerala-800 hover:text-kerala-600 group transition-colors"
            >
              <span>View all 6 holiday packages</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const whatsappText = `Hello, I want to inquire about booking the "${pkg.title}" (${pkg.duration}, starting at ${pkg.priceStartingFrom}).`;
            const whatsappUrl = getWhatsAppLink(siteConfig.whatsappNumber, whatsappText);

            return (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="bg-white/95 backdrop-blur-md text-kerala-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {pkg.theme}
                    </span>
                    {/* Duration */}
                    <span className="bg-kerala-950/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      {pkg.duration}
                    </span>
                  </div>

                  {/* Starting Price Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase font-semibold text-emerald-300 block tracking-wider">
                      Starting Price
                    </span>
                    <span className="text-2xl font-extrabold text-white">
                      {pkg.priceStartingFrom}
                      <span className="text-xs font-normal text-emerald-100 ml-1">/ person</span>
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 font-serif group-hover:text-kerala-800 transition-colors">
                      {pkg.title}
                    </h3>

                    {/* Locations */}
                    <div className="mt-2.5 flex items-center gap-1.5 text-xs font-medium text-kerala-800 bg-kerala-50/90 px-3 py-1.5 rounded-xl">
                      <MapPin className="w-3.5 h-3.5 text-kerala-700 shrink-0" />
                      <span className="truncate">
                        <strong>Locations:</strong> {pkg.route}
                      </span>
                    </div>

                    {/* Short Description */}
                    <p className="mt-3.5 text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {pkg.shortDescription}
                    </p>

                    {/* Key Highlights preview */}
                    <div className="mt-4 space-y-1.5 pt-3 border-t border-gray-100">
                      {pkg.highlights.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-600">
                          <Check className="w-3.5 h-3.5 text-kerala-600 shrink-0 mt-0.5" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Buttons: Enquire on WhatsApp & View Details */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-2">
                    <WhatsAppButton
                      href={whatsappUrl}
                      variant="primary"
                      size="sm"
                      className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold"
                    >
                      Enquire on WhatsApp
                    </WhatsAppButton>

                    <Link
                      href={`/packages#${pkg.slug}`}
                      className="inline-flex items-center justify-center gap-1 bg-gray-50 hover:bg-kerala-800 hover:text-white text-kerala-900 py-2.5 px-3 rounded-xl text-xs font-semibold border border-gray-200/80 transition-colors"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Itinerary Box */}
        <div className="mt-14 rounded-3xl bg-kerala-50 border border-kerala-200/80 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div>
            <h4 className="text-lg font-bold text-kerala-900 font-serif">
              Looking for a custom duration or customized route?
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Connect with our Kerala travel coordinators to build a customized family, honeymoon, or group itinerary.
            </p>
          </div>
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.customTrip}
            variant="primary"
            size="md"
            className="w-full sm:w-auto shrink-0 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold"
          >
            Customize on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

import { Clock, MapPin, Check } from "lucide-react";
import { packages } from "@/data/packages";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/config/contact";

export default function PackagesPage() {
  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-kerala-700 bg-kerala-50 border border-kerala-200 px-3.5 py-1 rounded-full mb-3 inline-block">
            HOLIDAY ITINERARIES
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-kerala-900 font-serif tracking-tight">
            Kerala Tour Packages
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-light">
            Hand-crafted 3 to 8-day Kerala vacation packages including private chauffeur-driven vehicles, verified stays, authentic backwater cruises, and 24x7 local support.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="space-y-12">
          {packages.map((pkg) => {
            const whatsappText = `Hello, I want to inquire about booking the "${pkg.title}" (${pkg.duration}, starting at ${pkg.priceStartingFrom}).`;
            const whatsappUrl = getWhatsAppLink(siteConfig.whatsappNumber, whatsappText);

            return (
              <div
                key={pkg.id}
                id={pkg.slug}
                className="bg-white rounded-3xl border border-gray-100 shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 scroll-mt-28"
              >
                {/* Image Column */}
                <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full bg-gray-100">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-md text-kerala-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {pkg.theme}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="bg-kerala-950/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1.5 border border-white/20 mb-2">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      {pkg.duration}
                    </span>
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-emerald-300 block tracking-wider">
                        Starting Price
                      </span>
                      <span className="text-2xl font-extrabold text-white">
                        {pkg.priceStartingFrom}
                        <span className="text-xs font-normal text-emerald-100 ml-1">/ person</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 font-serif">
                      {pkg.title}
                    </h2>

                    <div className="mt-2.5 flex items-center gap-1.5 text-xs font-medium text-kerala-800 bg-kerala-50/90 px-3 py-1.5 rounded-xl">
                      <MapPin className="w-3.5 h-3.5 text-kerala-700 shrink-0" />
                      <span>
                        <strong>Route:</strong> {pkg.route}
                      </span>
                    </div>

                    <p className="mt-3.5 text-sm text-gray-600 leading-relaxed">
                      {pkg.shortDescription}
                    </p>

                    {/* Highlights */}
                    <div className="mt-5">
                      <span className="text-xs uppercase font-bold text-gray-400 tracking-wider block mb-2">
                        Package Highlights
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {pkg.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                            <Check className="w-3.5 h-3.5 text-kerala-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Day-by-Day Overview */}
                    <div className="mt-6 pt-5 border-t border-gray-100">
                      <span className="text-xs uppercase font-bold text-gray-400 tracking-wider block mb-3">
                        Day-by-Day Itinerary Overview
                      </span>
                      <div className="space-y-2.5">
                        {pkg.itineraryOverview.map((item) => (
                          <div key={item.day} className="flex items-start gap-2.5 text-xs">
                            <span className="font-bold text-kerala-800 bg-kerala-50 border border-kerala-200 px-2 py-0.5 rounded shrink-0">
                              Day {item.day}
                            </span>
                            <div>
                              <strong className="text-gray-900">{item.title}:</strong>{" "}
                              <span className="text-gray-600">{item.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-gray-500 text-center sm:text-left">
                      *Includes private AC vehicle, hotels, breakfast &amp; driver charges
                    </span>
                    <WhatsAppButton
                      href={whatsappUrl}
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold"
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

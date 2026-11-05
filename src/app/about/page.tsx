import React from "react";
import {
  Compass,
  Sparkles,
  Heart,
  MapPin,
  Hotel,
  Globe,
  IndianRupee,
  Flame,
  Music,
  Waves,
  Car,
  Mountain,
  Phone,
  Languages,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/config/contact";

// Business details — taken from the Fencervilla Tours & Travels flyers.
const keralaPlaces = ["Munnar", "Vattavada", "Kanthalloor", "Vagamon", "Thekkady"];
const allIndiaRoutes = ["Kerala to Jammu & Kashmir", "Gujarat to Nagaland"];
const experiences = [
  { label: "Campfire", icon: Flame },
  { label: "DJ", icon: Music },
  { label: "Swimming pool", icon: Waves },
  { label: "Off road", icon: Car },
  { label: "Trekking", icon: Mountain },
];
const languages = ["Hindi", "English", "Tamil", "Malayalam"];

const telHref = (number: string) => `tel:${number.replace(/[^0-9+]/g, "")}`;

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-kerala-700 bg-kerala-50 border border-kerala-200 px-3.5 py-1 rounded-full mb-3 inline-block">
            ABOUT US
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-kerala-900 font-serif tracking-tight">
            About Fencervilla Tours &amp; Travels
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-light">
            Based in Munnar, we book resorts and hotels across India and plan trips through Kerala&apos;s hill country and beyond.
          </p>
        </div>

        {/* Feature Hero Image */}
        <div className="rounded-3xl overflow-hidden shadow-card mb-16 relative h-80 sm:h-96">
          <img
            src="https://images.unsplash.com/photo-1766671965039-8bc8687390ad?auto=format&fit=crop&w=1600&q=80"
            alt="Misty Western Ghats hills and a lake at sunrise in Kerala"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-kerala-950/80 via-transparent to-transparent flex items-end p-8 text-white">
            <div>
              <span className="text-xs uppercase font-semibold text-gold-300 tracking-wider block">
                UNESCO World Heritage Site
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif">
                The Western Ghats of Kerala
              </h2>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 text-gray-700 leading-relaxed">
          {/* Who we are — Fencervilla Tours & Travels */}
          <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-card">
            <h3 className="text-2xl font-bold text-kerala-900 font-serif mb-4 flex items-center gap-2">
              <Hotel className="w-5 h-5 text-gold-600" />
              <span>Who we are</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Fencervilla Tours &amp; Travels is a travel and stay-booking service with its office in Anachal, Munnar. We book resorts and hotels across India and arrange trips across Kerala and the rest of the country, with cottage and tent stays among the options.
            </p>

            {/* Where we go */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 rounded-2xl bg-kerala-50/60 border border-kerala-100">
                <h4 className="text-base font-bold text-kerala-900 flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-kerala-700" />
                  <span>All Kerala</span>
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {keralaPlaces.map((place) => (
                    <li key={place} className="flex items-center gap-2">
                      <span className="text-kerala-600 font-bold">•</span>
                      <span>{place}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs font-semibold text-kerala-800 flex items-center gap-1">
                  <IndianRupee className="w-3.5 h-3.5" />
                  <span>Prices start from ₹1,500</span>
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-kerala-50/60 border border-kerala-100">
                <h4 className="text-base font-bold text-kerala-900 flex items-center gap-2 mb-2">
                  <Globe className="w-4 h-4 text-kerala-700" />
                  <span>All India</span>
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {allIndiaRoutes.map((route) => (
                    <li key={route} className="flex items-center gap-2">
                      <span className="text-kerala-600 font-bold">•</span>
                      <span>{route}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs font-semibold text-kerala-800 flex items-center gap-1">
                  <IndianRupee className="w-3.5 h-3.5" />
                  <span>Prices start from ₹2,000</span>
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-kerala-50/60 border border-kerala-100">
                <h4 className="text-base font-bold text-kerala-900 flex items-center gap-2 mb-2">
                  <Hotel className="w-4 h-4 text-kerala-700" />
                  <span>Resorts &amp; Hotels</span>
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  All India resorts and hotels booking. Tell us where you want to stay and we will take care of the booking.
                </p>
              </div>
            </div>

            {/* On offer */}
            <div className="mt-6">
              <span className="text-xs uppercase font-bold text-gray-400 tracking-wider block mb-3">
                On offer
              </span>
              <div className="flex flex-wrap gap-2.5">
                {experiences.map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 bg-gold-50 border border-gold-200/70 text-gold-800 text-xs font-semibold px-3.5 py-2 rounded-xl"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="mt-8 rounded-2xl bg-kerala-900 text-white p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3 text-sm">
                <span className="text-xs uppercase tracking-wider font-semibold text-gold-300 block">
                  Talk to {siteConfig.contactPerson ?? "us"}
                </span>
                <a
                  href={telHref(siteConfig.phone)}
                  className="flex items-center gap-2 font-semibold hover:text-gold-300 transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
                {siteConfig.alternatePhone && (
                  <a
                    href={telHref(siteConfig.alternatePhone)}
                    className="flex items-center gap-2 font-semibold hover:text-gold-300 transition-colors"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>{siteConfig.alternatePhone}</span>
                  </a>
                )}
                <p className="flex items-start gap-2 text-emerald-100/90 leading-relaxed">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{siteConfig.address}</span>
                </p>
                <p className="flex items-start gap-2 text-emerald-100/90">
                  <Languages className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{languages.join(", ")}</span>
                </p>
              </div>

              <div className="flex flex-col justify-center gap-3">
                <WhatsAppButton
                  message={WHATSAPP_MESSAGES.general}
                  variant="primary"
                  size="md"
                  fullWidth
                  className="py-3 rounded-xl"
                >
                  Chat on WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </section>

          {/* About Kerala */}
          <div className="pt-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-kerala-900 font-serif tracking-tight">
              About Kerala
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed font-light">
              A slender coastal strip nestled between the Western Ghats and the Arabian Sea, Kerala is celebrated worldwide for its unparalleled natural harmony, rich cultural heritage, and progressive community life.
            </p>
          </div>

          <section className="bg-kerala-50/50 p-8 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-bold text-kerala-900 font-serif mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold-600" />
              <span>Why is Kerala called God&apos;s Own Country?</span>
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-600">
              According to ancient Hindu mythology, Lord Parasurama (the sixth avatar of Vishnu) threw his divine battle axe into the sea, commanding the waters to recede. From the depths of the ocean emerged this extraordinarily fertile, lush green land blessed with 44 rivers, tropical rainforests, and natural serenity. In modern times, Kerala gained worldwide acclaim as National Geographic highlighted it as one of the 50 &quot;Destinations of a Lifetime&quot;.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-3xl bg-white border border-gray-100 shadow-card">
              <h3 className="text-xl font-bold text-gray-900 font-serif mb-3 flex items-center gap-2">
                <Compass className="w-5 h-5 text-kerala-700" />
                <span>Geographic Wonder</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nowhere else on the Indian subcontinent can you travel within 3 to 4 hours from misty 2,600m high-altitude tea mountain peaks to serene emerald backwater canals and golden Arabian Sea beaches.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-gray-100 shadow-card">
              <h3 className="text-xl font-bold text-gray-900 font-serif mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-terracotta-500" />
                <span>Cradle of Ayurveda</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Kerala is the only state in India where Ayurveda is practiced with absolute fidelity to the original 5,000-year-old classical texts. Monsoon season (June to August) is considered the ideal time for bodily rejuvenation.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

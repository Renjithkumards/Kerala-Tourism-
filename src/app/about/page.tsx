import React from "react";
import Link from "next/link";
import { Compass, Sparkles, ShieldCheck, Heart, MapPin, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-kerala-700 bg-kerala-50 border border-kerala-200 px-3.5 py-1 rounded-full mb-3 inline-block">
            GOD&apos;S OWN COUNTRY
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-kerala-900 font-serif tracking-tight">
            About Kerala
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-light">
            A slender coastal strip nestled between the Western Ghats and the Arabian Sea, Kerala is celebrated worldwide for its unparalleled natural harmony, rich cultural heritage, and progressive community life.
          </p>
        </div>

        {/* Feature Hero Image */}
        <div className="rounded-3xl overflow-hidden shadow-card mb-16 relative h-80 sm:h-96">
          <img
            src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1600&q=80"
            alt="Munnar Tea Hills"
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

          <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-card">
            <h3 className="text-2xl font-bold text-kerala-900 font-serif mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Responsible &amp; Sustainable Eco-Tourism</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
              Kerala is an internationally decorated pioneer in Responsible Tourism (RT). The government model ensures that tourism directly benefits local village artisans, coir weavers, organic spice cultivators, and toddy tappers while strictly preserving nature and fragile mangrove ecosystems.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 bg-kerala-800 hover:bg-kerala-700 text-white font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm transition-colors shadow-soft"
              >
                <span>Explore Top Destinations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/packages"
                className="inline-flex items-center gap-2 bg-kerala-50 hover:bg-kerala-100 text-kerala-900 font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm border border-kerala-200 transition-colors"
              >
                <span>View Tour Packages</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

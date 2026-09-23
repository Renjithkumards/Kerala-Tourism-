import React from "react";
import { Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/config/contact";

export const CtaSection: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 bg-kerala-900 text-white overflow-hidden">
      {/* Background Image with optimized dark overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=2200&q=80"
          alt="Munnar Tea Hills Kerala"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-kerala-950 via-kerala-900/95 to-emerald-950/90 z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          <span>START YOUR JOURNEY TODAY</span>
        </div>

        {/* Exact Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-serif max-w-2xl leading-tight">
          Ready to explore Kerala?
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-emerald-100/90 max-w-2xl leading-relaxed font-light">
          Whether you are dreaming of a serene backwater houseboat getaway, a romantic hill station retreat, or a complete family holiday, we are here to help.
        </p>

        {/* WhatsApp & Contact Actions */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.general}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl shadow-lg"
          >
            Plan My Trip on WhatsApp
          </WhatsAppButton>

          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium px-6 py-3.5 rounded-2xl text-sm sm:text-base transition-colors"
          >
            <Phone className="w-4 h-4 text-emerald-300" />
            <span>Call: {siteConfig.phone}</span>
          </a>
        </div>

        <p className="mt-6 text-xs text-emerald-200/70">
          Kerala Tourism 24x7 Official Helpline:{" "}
          <strong className="text-white">{siteConfig.touristHelpline}</strong>
        </p>
      </div>
    </section>
  );
};

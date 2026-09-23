import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center overflow-hidden bg-kerala-950 text-white">
      {/* Background Image with optimized readability gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2200&q=85"
          alt="Alleppey Backwaters Kerala Houseboat"
          className="w-full h-full object-cover object-center"
        />
        {/* Deep emerald and dark overlay for text contrast and premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-kerala-950/90 via-kerala-950/50 to-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center flex flex-col items-center">
        {/* Exact Headline - responsive on 320px+ */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-serif leading-[1.18] drop-shadow-md">
          Discover God&apos;s Own Country
        </h1>

        {/* Exact Subheading */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-lg md:text-xl text-emerald-50/90 max-w-2xl font-light leading-relaxed">
          Explore Kerala&apos;s breathtaking landscapes, unforgettable food, peaceful stays and authentic experiences.
        </p>

        {/* Subtle quick tags */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs text-emerald-100/80 font-medium">
          <span className="flex items-center gap-1.5">
            <span className="text-gold-400">✦</span> Backwaters &amp; Canals
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-gold-400">✦</span> Munnar Tea Mountains
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-gold-400">✦</span> Arabian Sea Beaches
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-gold-400">✦</span> Ayurvedic Wellness
          </span>
        </div>
      </div>
    </section>
  );
};

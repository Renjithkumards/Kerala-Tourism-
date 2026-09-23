import React from "react";
import {
  Compass,
  Utensils,
  Sparkles,
  HeartHandshake,
  Landmark,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: <Compass className="w-6 h-6 text-kerala-700" />,
    title: "Natural Beauty",
    description:
      "Breathtaking misty peaks in Munnar, emerald backwater canals in Alleppey, 44 rivers, and over 580 km of pristine coastline along the Arabian Sea.",
  },
  {
    icon: <Utensils className="w-6 h-6 text-gold-600" />,
    title: "Authentic Cuisine",
    description:
      "Infused with fresh farm-grown black pepper, cardamom, and cold-pressed coconut oil. From 28-dish festive Sadyas to flaky parottas and coastal curries.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
    title: "Diverse Experiences",
    description:
      "Drift on a luxury houseboat in the morning, trek through high-altitude tea valleys at noon, and unwind at an ocean cliff beach resort by evening.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-terracotta-500" />,
    title: "Friendly Hospitality",
    description:
      "Celebrated for 100% literacy, safe communities, dedicated tourist police, and genuine local warmth that makes every traveler feel right at home.",
  },
  {
    icon: <Landmark className="w-6 h-6 text-kerala-800" />,
    title: "Rich Culture",
    description:
      "The authentic birthplace of 5,000-year-old Ayurveda medicine, captivating Kathakali classical dance drama, fiery Theyyam trance rituals, and historic forts.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
    title: "Eco-Friendly Tourism",
    description:
      "A global pioneer in responsible tourism initiatives that support village communities, preserve local ecology, and offer mindful travel experiences.",
  },
];

export const WhyVisitKerala: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-kerala-50/40 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-kerala-700 bg-kerala-100/80 border border-kerala-200 px-3.5 py-1 rounded-full mb-3 inline-block">
            GOD&apos;S OWN COUNTRY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-kerala-900 tracking-tight font-serif">
            Why Explore Kerala?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-light">
            Discover why international explorers and travelers consistently rank Kerala among the world&apos;s greatest must-visit destinations.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-2xl bg-kerala-50 border border-kerala-100 flex items-center justify-center mb-5 shrink-0">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-serif mb-2.5">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

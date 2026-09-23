import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { ExperiencesSection } from "@/components/home/ExperiencesSection";
import { PopularFoodSection } from "@/components/home/PopularFoodSection";
import { RecommendedStays } from "@/components/home/RecommendedStays";
import { TourPackagesSection } from "@/components/home/TourPackagesSection";
import { WhyVisitKerala } from "@/components/home/WhyVisitKerala";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Popular Destinations */}
      <FeaturedDestinations />

      {/* 4. Kerala Experiences */}
      <ExperiencesSection />

      {/* 5. Kerala Food */}
      <PopularFoodSection />

      {/* 6. Recommended Stays */}
      <RecommendedStays />

      {/* 7. Popular Tour Packages */}
      <TourPackagesSection />

      {/* 8. Why Explore Kerala? */}
      <WhyVisitKerala />

      {/* 9. Call to Action */}
      <CtaSection />
    </>
  );
}

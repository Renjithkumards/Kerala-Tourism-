import { SiteConfig } from "@/types";
import { WHATSAPP_NUMBER, getCleanWhatsAppNumber } from "@/config/contact";

export const siteConfig: SiteConfig = {
  name: "Explore Kerala",
  tagline: "Discover God's Own Country",
  phone: "+91 80758 45306",
  alternatePhone: "+91 89217 61681",
  contactPerson: "Jojo Fencer",
  whatsappNumber: getCleanWhatsAppNumber(WHATSAPP_NUMBER),
  email: "trips@explorekerala.travel",
  address: "Fencervilla Tours & Travels, Keechapilly Building (167), Anachal, Munnar, Kerala",
  touristHelpline: "1800-425-4747 (24x7 Toll Free)",
  social: {
    instagram: "https://instagram.com/keralatourism",
    facebook: "https://facebook.com/keralatourismofficial",
    youtube: "https://youtube.com/keralatourism",
    twitter: "https://twitter.com/keralatourism",
  },
};

export const quickStats = [
  { label: "Waterways & Canals", value: "900+ km", sub: "Scenic backwaters & 44 rivers" },
  { label: "Arabian Coastline", value: "580+ km", sub: "Pristine beaches & dramatic cliffs" },
  { label: "UNESCO Ghats", value: "2,695m", sub: "Anamudi peak & mist-clad hills" },
  { label: "Forest & Sanctuary Cover", value: "29%", sub: "Rich wildlife & spice biodiversity" },
];

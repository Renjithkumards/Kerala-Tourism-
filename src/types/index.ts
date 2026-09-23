export type DestinationCategory =
  | 'Hill Stations'
  | 'Backwaters'
  | 'Beaches'
  | 'Wildlife'
  | 'Wildlife & Nature'
  | 'Heritage & Culture'
  | 'Waterfalls';

export type DestinationFilterTag =
  | 'Hill Station'
  | 'Beach'
  | 'Backwaters'
  | 'Wildlife'
  | 'Culture'
  | 'Adventure';

export interface Destination {
  id: string;
  slug: string;
  name: string;
  alternateName?: string;
  tagline: string;
  category: DestinationCategory;
  filterTags?: DestinationFilterTag[];
  district: string;
  image: string;
  heroImage?: string;
  rating: number;
  reviewsCount: number;
  recommendedDuration?: string;
  idealDuration?: string;
  bestTime: string;
  shortDescription?: string;
  description: string;
  bestExperience?: string;
  mainAttractions?: string[];
  thingsToDo?: {
    title: string;
    desc: string;
  }[];
  foodToTry?: string[];
  recommendedStayTypes?: string[];
  suggestedItinerary?: {
    day: number;
    title: string;
    activities: string;
  }[];
  nearbyDestinations?: {
    name: string;
    slug: string;
    distance: string;
  }[];
  highlights: string[];
  featured?: boolean;
  travelTips?: string[];
  howToReach?: {
    air?: string;
    train?: string;
    road?: string;
  };
}

export type FoodCategory = 'Breakfast' | 'Main Course' | 'Seafood' | 'Snacks' | 'Desserts';
export type DietaryType = 'Vegetarian' | 'Non-Vegetarian' | 'Vegan';

export interface FoodItem {
  id: string;
  slug: string;
  name: string;
  malayalamName: string;
  category: FoodCategory;
  dietary: DietaryType;
  description: string;
  keyIngredients: string[];
  mustTryPlace: string;
  spiceLevel: 'Mild' | 'Medium' | 'Spicy';
  image: string;
  featured?: boolean;
}

export type StayCategory =
  | 'Hotels'
  | 'Resorts'
  | 'Homestays'
  | 'Houseboats'
  | 'Beach stays'
  | 'Hill stays'
  | 'Budget stays';

export interface Stay {
  id: string;
  slug: string;
  name: string;
  category: StayCategory;
  location: string;
  district: string;
  priceRange: string;
  rating: number;
  reviewsCount: number;
  amenities: string[];
  image: string;
  description: string;
  featured?: boolean;
  badge?: string;
}

export type PackageTheme = 'Honeymoon' | 'Family' | 'Adventure' | 'Highlights' | 'Complete Tour';

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  duration: string;
  route: string;
  theme: PackageTheme;
  priceStartingFrom: string;
  shortDescription?: string;
  included: string[];
  highlights: string[];
  itineraryOverview: {
    day: number;
    title: string;
    desc: string;
  }[];
  image: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  tag: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  address: string;
  touristHelpline: string;
  social: {
    instagram: string;
    facebook: string;
    youtube: string;
    twitter: string;
  };
}

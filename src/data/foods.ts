import { FoodItem } from "@/types";

export const foods: FoodItem[] = [
  {
    id: "kerala-sadya",
    slug: "kerala-sadya",
    name: "Kerala Sadya",
    malayalamName: "കേരള സദ്യ",
    category: "Main Course",
    dietary: "Vegetarian",
    description: "The crown jewel of Kerala's culinary heritage, Sadya is an elaborate feast served on a fresh plantain leaf. Traditionally featuring 24 to 28 distinct vegetarian dishes eaten in a specific sequence, it harmonizes all six tastes (sweet, sour, salty, bitter, pungent, and astringent).",
    keyIngredients: [
      "Red Matta Rice",
      "Sambar & Rasam",
      "Avial (vegetables in coconut & yogurt)",
      "Thoran (stir-fry with grated coconut)",
      "Olan (ash gourd in coconut milk)",
      "Pachadi & Kichadi",
      "Banana chips, Sharkara Upperi & Pickles",
      "Crispy Pappadam & Ghee",
      "Two kinds of Payasam"
    ],
    mustTryPlace: "Traditional Onam celebrations or iconic vegetarian restaurants in Trivandrum & Thrissur.",
    spiceLevel: "Medium",
    image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "puttu-and-kadala-curry",
    slug: "puttu-and-kadala-curry",
    name: "Puttu and Kadala Curry",
    malayalamName: "പുട്ടും കടലക്കറിയും",
    category: "Breakfast",
    dietary: "Vegan",
    description: "The undisputed everyday champion of Kerala breakfasts. Cylindrical steamed rice cakes layered with freshly grated coconut, served alongside a deeply flavorful, roasted-coconut black chickpea curry infused with shallots, mustard seeds, and curry leaves.",
    keyIngredients: [
      "Coarsely ground roasted rice flour",
      "Freshly grated coconut",
      "Black chickpeas (Kadala)",
      "Roasted coconut and coriander paste",
      "Shallots (Cheriya Ulli)",
      "Mustard seeds and crispy curry leaves"
    ],
    mustTryPlace: "Local roadside 'Thattukada' eateries and traditional breakfast messes across Kerala.",
    spiceLevel: "Medium",
    image: "https://images.unsplash.com/photo-1560260330-727f7f5c0277?auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "malabar-biryani",
    slug: "malabar-biryani",
    name: "Malabar Biryani",
    malayalamName: "മലബാർ ബിരിയാണി",
    category: "Main Course",
    dietary: "Non-Vegetarian",
    description: "Unlike northern long-grain biryanis, Malabar (Thalassery) Biryani uses delicate, fragrant short-grain Khyma/Jeerakasala rice. Cooked in the traditional 'Dum' method sealed with dough, the tender marinated chicken or mutton absorbs subtle Kerala spices, fried cashews, and golden raisins.",
    keyIngredients: [
      "Jeerakasala (Khyma) small-grain rice",
      "Tender country chicken or mutton",
      "Pure Desi Ghee",
      "Caramelized onions (Birista)",
      "Cashews and golden sultanas",
      "Fresh mint, coriander & Malabar garam masala"
    ],
    mustTryPlace: "Historic eateries in Thalassery, Kozhikode beachside restaurants, and Paragon Restaurant in Calicut.",
    spiceLevel: "Medium",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "kerala-parotta",
    slug: "kerala-parotta",
    name: "Kerala Parotta",
    malayalamName: "കേരള പൊറോട്ട",
    category: "Main Course",
    dietary: "Vegetarian",
    description: "Golden, flaky, multi-layered flatbread skillfully kneaded, flipped in the air, coiled, and griddled to perfection. The piping-hot parotta is crushed between the chef's hands right before serving to reveal airy, crispy, tender layers that soak up rich curries.",
    keyIngredients: [
      "Maida (refined flour) or whole wheat",
      "Oil and pinch of sugar/salt",
      "Skilled spiral rolling technique",
      "Served with Beef Roast, Chicken Varutharacha, or Veg Kurma"
    ],
    mustTryPlace: "Night Thattukadas across Kochi, Trivandrum, and Thrissur roundabouts.",
    spiceLevel: "Mild",
    // Photo: "KeralaPorotta.JPG" by Shijaz Abdulla, public domain (Wikimedia Commons). Hosted locally in /public.
    image: "/images/food/kerala-parotta.jpg",
    featured: true
  },
  {
    id: "fish-curry",
    slug: "fish-curry",
    name: "Kerala Fish Curry (Meen Curry)",
    malayalamName: "കേരള മീൻ കറി",
    category: "Seafood",
    dietary: "Non-Vegetarian",
    description: "Cooked in traditional unglazed earthenware pots (Manchatti), this signature red fish curry balances fiery Kashmiri chili, tangy Kodampuli (Malabar gamboge / brindleberry tamarind), crushed ginger, and aromatic coconut oil with curry leaves.",
    keyIngredients: [
      "Fresh Seer fish (Neymeen) or Sardines (Mathi)",
      "Kodampuli (smoked Malabar tamarind)",
      "Red Kashmiri chili powder & turmeric",
      "Fresh ginger, garlic & shallots",
      "Cold-pressed coconut oil & sprigs of curry leaves"
    ],
    mustTryPlace: "Lakeside toddy parlors in Kumarakom and coastal seafood dhabas in Alleppey.",
    spiceLevel: "Spicy",
    image: "https://images.unsplash.com/photo-1620894580123-466ad3a0ca06?auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "karimeen-pollichathu",
    slug: "karimeen-pollichathu",
    name: "Karimeen Pollichathu",
    malayalamName: "കരിമീൻ പൊള്ളിച്ചത്",
    category: "Seafood",
    dietary: "Non-Vegetarian",
    description: "Kerala's official state fish, Pearl Spot (Karimeen), is slathered with a robust, spicy onion-tomato masala, wrapped carefully inside a wilted green banana leaf, and slow-roasted on a griddle. Unwrapping the leaf unleashes an intoxicating burst of fragrant steam.",
    keyIngredients: [
      "Freshwater Pearl Spot fish (Karimeen)",
      "Fresh banana leaves for steaming/roasting",
      "Crushed shallots, ginger, garlic & green chilies",
      "Tomato, vinegar & turmeric paste",
      "Roasted fennel and coriander seeds"
    ],
    mustTryPlace: "Backwater houseboats in Alappuzha, Kumarakom resorts, and Vembanad shoreline shacks.",
    spiceLevel: "Spicy",
    image: "https://images.unsplash.com/photo-1786222084052-fb6f27bfb135?auto=format&fit=crop&w=1000&q=80",
    featured: false
  },
  {
    id: "banana-chips",
    slug: "banana-chips",
    name: "Kerala Banana Chips (Upperi)",
    malayalamName: "നേന്ത്രക്കായ ചിപ്സ്",
    category: "Snacks",
    dietary: "Vegan",
    description: "Golden, razor-thin rounds of mature raw Nendran plantains, flash-fried in pure cold-pressed coconut oil and seasoned with sea salt and turmeric water. Crisp, addictive, and world-famous, it is the quintessential souvenir travelers take home from Kerala.",
    keyIngredients: [
      "Raw Nendran variety plantains",
      "Pure 100% cold-pressed coconut oil",
      "Turmeric and salted brine sprinkle",
      "No artificial preservatives"
    ],
    mustTryPlace: "Fresh oil frying stalls along Calicut Mittayi Theruvu (SM Street) and Broadway in Ernakulam.",
    spiceLevel: "Mild",
    image: "https://images.unsplash.com/photo-1762884601729-0eeeafbdfb8a?auto=format&fit=crop&w=1000&q=80",
    featured: false
  },
  {
    id: "payasam",
    slug: "payasam",
    name: "Palada Payasam",
    malayalamName: "പാലട പായസം",
    category: "Desserts",
    dietary: "Vegetarian",
    description: "A rich, slow-simmered dessert made by reducing whole dairy milk for hours in heavy bronze urlis until it turns an exquisite light pink hue, infused with miniature steamed rice flakes (Ada), fragrant green cardamom, and golden ghee.",
    keyIngredients: [
      "Ada (steamed rice pasta flakes)",
      "Fresh farm whole milk slow-reduced",
      "Sugar and pure cow's ghee",
      "Crushed green cardamom pods",
      "Roasted cashews and golden raisins"
    ],
    mustTryPlace: "Famous temple prasadam in Ambalapuzha, festive caterers in Thrissur and Kottayam.",
    spiceLevel: "Mild",
    image: "https://images.unsplash.com/photo-1777613112969-d7511ddfbe15?auto=format&fit=crop&w=1000&q=80",
    featured: false
  }
];

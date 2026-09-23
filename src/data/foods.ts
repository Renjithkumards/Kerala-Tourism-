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
    image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "appam-and-stew",
    slug: "appam-and-stew",
    name: "Appam and Stew",
    malayalamName: "അപ്പവും ഇഷ്‌ടൂവും",
    category: "Breakfast",
    dietary: "Vegetarian",
    description: "A beloved Syrian Christian breakfast tradition. Appams are delicate bowl-shaped fermented rice and coconut milk pancakes with soft, spongy centres and lacy, crisp edges, paired with a silky, aromatic coconut milk vegetable or chicken stew flavored with whole spices.",
    keyIngredients: [
      "Fermented rice batter with coconut milk",
      "Toddy / Yeast leavening",
      "Potatoes, carrots & green peas",
      "Fresh coconut milk (first & second extract)",
      "Cardamom, cinnamon, cloves & curry leaves",
      "Slit green chilies & ginger"
    ],
    mustTryPlace: "Heritage homestays in Kottayam, Fort Kochi cafes, and local breakfast tea shops across Central Kerala.",
    spiceLevel: "Mild",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80",
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
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80",
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
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=1000&q=80",
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
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1000&q=80",
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
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
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
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=1000&q=80",
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
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80",
    featured: false
  },
  {
    id: "unniyappam",
    slug: "unniyappam",
    name: "Unniyappam",
    malayalamName: "ഉണ്ണിയപ്പം",
    category: "Snacks",
    dietary: "Vegetarian",
    description: "Small, spherical sweet fritters made with ground roasted rice, ripe small bananas (Palayankodan), melted dark jaggery, toasted sesame seeds, and crunchy coconut bits fried in ghee in an appakarai cast iron mold until dark brown and crisp outside, yet moist inside.",
    keyIngredients: [
      "Roasted rice flour & mashed ripe bananas",
      "Organic Marayoor jaggery syrup",
      "Toasted black sesame seeds",
      "Fried small coconut bits (Kothukottu)",
      "Pounded dry ginger (Chukku) & cardamom"
    ],
    mustTryPlace: "Kottarakkara Ganapathy Temple counters and roadside tea stalls across Travancore.",
    spiceLevel: "Mild",
    image: "https://images.unsplash.com/photo-1505253758473-96b3015f21c9?auto=format&fit=crop&w=1000&q=80",
    featured: false
  }
];

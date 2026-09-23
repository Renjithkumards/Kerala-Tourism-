import { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    id: "munnar",
    slug: "munnar",
    name: "Munnar",
    alternateName: "Kashmir of South India",
    tagline: "Rolling tea plantations, misty mountains, and cool hill breezes",
    category: "Hill Stations",
    district: "Idukki",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviewsCount: 3420,
    idealDuration: "3-4 Days",
    bestTime: "September to March",
    highlights: [
      "Endless green tea garden valleys",
      "Eravikulam National Park (Nilgiri Tahr habitat)",
      "Mattupetty Dam & Kundala Lake boating",
      "Anamudi Peak - highest peak in South India",
      "Top Station panoramic viewpoint"
    ],
    bestExperience: "Kolukkumalai sunrise jeep trek and panoramic tea estate trail walks",
    description: "Perched at an elevation of 1,600 metres above sea level, Munnar was the favored summer retreat of the British administration in South India. Today, it mesmerizes travelers with undulating tea plantations, aromatic spice valleys, cascading waterfalls, and cool mountain weather.",
    featured: true,
    travelTips: [
      "Carry light woolens even in summer; winters can drop to 5°C.",
      "Book Eravikulam National Park passes online in advance.",
      "Rent a local jeep for off-road Kolukkumalai sunrise trek."
    ],
    howToReach: {
      air: "Cochin International Airport (COK) - 110 km",
      train: "Aluva (AWY) or Ernakulam Junction (ERS) - 120 km",
      road: "Well connected by scenic ghat roads from Kochi, Madurai, and Coimbatore."
    }
  },
  {
    id: "alleppey",
    slug: "alleppey",
    name: "Alleppey",
    alternateName: "Alappuzha (Venice of the East)",
    tagline: "Serene palm-fringed backwaters, luxury houseboats, and village life",
    category: "Backwaters",
    district: "Alappuzha",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviewsCount: 4180,
    idealDuration: "2-3 Days",
    bestTime: "October to March",
    highlights: [
      "Overnight luxury Kettuvallam houseboat cruise",
      "Cruising the narrow canals of Kuttanad",
      "Historic Alappuzha Beach & 150-year-old Pier",
      "Fresh Karimeen (Pearl Spot) fish meals on boat",
      "Nehru Trophy Snake Boat Race (August)"
    ],
    bestExperience: "Overnight luxury Kettuvallam houseboat cruise drifting through palm-lined canals",
    description: "Lord Curzon famously proclaimed Alleppey as the 'Venice of the East'. Laced with a labyrinth of canals, lagoons, and emerald paddy fields below sea level, drifting on a traditional thatched-roof houseboat here is one of the world's most poetic travel experiences.",
    featured: true,
    travelTips: [
      "Choose government-certified houseboats (Green Palm / Gold Star).",
      "Sunset village canoe rides offer intimate access to narrow canals.",
      "Check meal menus beforehand to customize seafood or vegetarian preferences."
    ],
    howToReach: {
      air: "Cochin International Airport (COK) - 85 km",
      train: "Alappuzha Railway Station (ALLP) - in town",
      road: "Direct NH 66 connectivity from Kochi (1.5 hours) and Trivandrum (3.5 hours)."
    }
  },
  {
    id: "kochi",
    slug: "kochi",
    name: "Kochi",
    alternateName: "Cochin (Queen of the Arabian Sea)",
    tagline: "Historic colonial quarter, iconic Chinese fishing nets, and vibrant art",
    category: "Heritage & Culture",
    district: "Ernakulam",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    reviewsCount: 3890,
    idealDuration: "2-3 Days",
    bestTime: "October to April",
    highlights: [
      "Chinese Fishing Nets at Fort Kochi sunset",
      "Mattancherry Palace (Dutch Palace) murals",
      "Historic Jew Town & Paradesi Synagogue",
      "St. Francis Church (Vasco da Gama's original burial)",
      "Kochi-Muziris Biennale contemporary art exhibits"
    ],
    bestExperience: "Sunset at Fort Kochi Chinese Fishing Nets followed by an evening Kathakali performance",
    description: "An eclectic blend of Portuguese, Dutch, British, and Arab influences, Kochi has been a bustling spice trade hub for over 600 years. Stroll cobblestone lanes lined with cafes, antique boutiques, art galleries, and grand colonial bungalows.",
    featured: true,
    travelTips: [
      "Explore Fort Kochi and Mattancherry on foot or rented bicycles.",
      "Take the public Ro-Ro ferry or Water Metro across the harbor for ₹6-₹20.",
      "Attend an evening Kathakali classical dance performance with makeup demonstration."
    ],
    howToReach: {
      air: "Cochin International Airport (COK) - 35 km from city centre",
      train: "Ernakulam Junction (South) & Ernakulam Town (North) stations",
      road: "Central hub for all Kerala routes with premium buses and highway links."
    }
  },
  {
    id: "wayanad",
    slug: "wayanad",
    name: "Wayanad",
    alternateName: "The Land of Paddy Fields & Waterfalls",
    tagline: "Pristine rain forests, ancient prehistoric caves, and spice plantations",
    category: "Wildlife & Nature",
    district: "Wayanad",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    reviewsCount: 2950,
    idealDuration: "3-4 Days",
    bestTime: "September to May",
    highlights: [
      "Edakkal Caves with Neolithic petroglyphs",
      "Heart-shaped lake on Chembra Peak trek",
      "Banasura Sagar Dam (largest earthen dam in India)",
      "Muthanga Wildlife Sanctuary elephant safaris",
      "Soochipara and Meenmutty Waterfalls"
    ],
    bestExperience: "Trekking to the natural heart-shaped lake at misty Chembra Peak",
    description: "Set amid the lofty Western Ghats, Wayanad is Kerala's untamed green sanctuary. With misty peaks, spice farms yielding organic cardamom and pepper, indigenous tribal heritage, and wild elephant corridors, it is an adventurer's and nature lover's paradise.",
    featured: true,
    travelTips: [
      "Forest trekking permits are required for Chembra Peak; arrive early.",
      "Leech socks are recommended during monsoon and post-monsoon jungle walks.",
      "Stay in an authentic eco-resort or treehouse inside a plantation."
    ],
    howToReach: {
      air: "Calicut International Airport (CCJ) - 85 km",
      train: "Kozhikode Railway Station (CLT) - 75 km",
      road: "Traverse the dramatic Thamarassery Churam 9 hairpin curves from Kozhikode."
    }
  },
  {
    id: "thekkady",
    slug: "thekkady",
    name: "Thekkady",
    alternateName: "Periyar Tiger Reserve",
    tagline: "Dense wilderness, boat safaris on Periyar Lake, and spice walk trails",
    category: "Wildlife & Nature",
    district: "Idukki",
    image: "https://images.unsplash.com/photo-1616843413587-9e3a37f7bbd8?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    reviewsCount: 2640,
    idealDuration: "2 Days",
    bestTime: "September to April",
    highlights: [
      "Periyar Lake boat safari spotting wild elephants",
      "Bamboo rafting & jungle night patrolling",
      "Guided spice garden plantation tours",
      "Kalaripayattu martial arts exhibitions at Kadathanadan",
      "Elephant junction bathing & interactions"
    ],
    bestExperience: "Early morning boat safari on Periyar Lake watching herds of wild elephants",
    description: "Thekkady is the gateway to Periyar National Park, one of India's premier tiger and elephant reserves. Surrounding an artificial lake formed by the Mullaperiyar Dam, the evergreen forests echo with bird calls and the fragrant aroma of cardamom, cinnamon, and clove.",
    featured: true,
    travelTips: [
      "First morning boat safari (7:30 AM) offers the best wildlife sighting odds.",
      "Wear neutral green or khaki clothes during national park excursions.",
      "Pick up vacuum-sealed fresh green cardamom and vanilla pods from local co-ops."
    ],
    howToReach: {
      air: "Madurai Airport (IXM) - 140 km, or Cochin (COK) - 155 km",
      train: "Kottayam Railway Station (KTYM) - 110 km",
      road: "Connected by the picturesque Kottayam-Kumily road (K.K. Road)."
    }
  },
  {
    id: "varkala",
    slug: "varkala",
    name: "Varkala",
    alternateName: "Papanasam Beach",
    tagline: "Dramatic red laterite cliffs, golden sandy shores, and bohemian vibes",
    category: "Beaches",
    district: "Thiruvananthapuram",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    reviewsCount: 3120,
    idealDuration: "2-3 Days",
    bestTime: "November to March",
    highlights: [
      "Strolling the clifftop walkway lined with open-air cafes",
      "Sacred Papanasam Beach holy dips & cleansing springs",
      "2,000-year-old Janardhanaswamy Temple",
      "Surf schools and yoga retreats overlooking the ocean",
      "Spectacular Arabian Sea sunsets from the North Cliff"
    ],
    bestExperience: "Sunset stroll along the dramatic red laterite cliffs overlooking the Arabian Sea",
    description: "Varkala is unique in South India for its towering red laterite cliffs that drop dramatically into the azure Arabian Sea. Known as Papanasam Beach (destroyer of sins), it merges spiritual tranquility, seaside cafes playing world music, and superb coastal relaxation.",
    featured: true,
    travelTips: [
      "The North Cliff path is pedestrian-only and ideal for evenings.",
      "Respect local beach guidelines and take note of sea current flags when swimming.",
      "Sample fresh catch of the day cooked to order with Kerala spices."
    ],
    howToReach: {
      air: "Trivandrum International Airport (TRV) - 45 km",
      train: "Varkala Sivagiri Railway Station (VAK) - 3 km from cliff",
      road: "Easy highway access via NH 66 from Kollam and Trivandrum."
    }
  },
  {
    id: "kovalam",
    slug: "kovalam",
    name: "Kovalam",
    alternateName: "The Grove of Coconut Palms",
    tagline: "Iconic striped lighthouse, crescent beaches, and Ayurvedic sanctuaries",
    category: "Beaches",
    district: "Thiruvananthapuram",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    reviewsCount: 2850,
    idealDuration: "2 Days",
    bestTime: "September to March",
    highlights: [
      "Climbing the 118-ft Vizhinjam Lighthouse",
      "Trio of beaches: Lighthouse, Hawah, and Samudra",
      "Authentic Ayurvedic rejuvenation treatments",
      "Water sports: Catamaran cruising & parasailing",
      "Halcyon Castle (Napier Art heritage)"
    ],
    bestExperience: "Climbing Vizhinjam Lighthouse for sweeping coastal vistas & authentic Ayurvedic massage",
    description: "Kovalam achieved international fame in the 1970s and remains Kerala's most celebrated beach destination. Three adjacent crescent-shaped beaches separated by rocky outcroppings provide gentle shallows ideal for bathing, swimming, and seaside rejuvenation.",
    featured: false,
    travelTips: [
      "Lighthouse observation deck is open 3:00 PM to 5:00 PM for magnificent panoramas.",
      "Opt for traditional Panchakarma massages at reputed NABH-certified centers.",
      "Early mornings are tranquil with local fishermen bringing in their shore nets."
    ],
    howToReach: {
      air: "Trivandrum International Airport (TRV) - 15 km",
      train: "Thiruvananthapuram Central (TVC) - 16 km",
      road: "Direct city buses and taxis ply continuously from Trivandrum capital."
    }
  },
  {
    id: "kumarakom",
    slug: "kumarakom",
    name: "Kumarakom",
    alternateName: "Heart of Vembanad Lake",
    tagline: "Migratory bird sanctuary, emerald canals, and serene luxury resorts",
    category: "Backwaters",
    district: "Kottayam",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviewsCount: 2240,
    idealDuration: "2 Days",
    bestTime: "November to February",
    highlights: [
      "Kumarakom Bird Sanctuary (Siberian storks & egrets)",
      "Vembanad Lake - longest freshwater lake in India",
      "Traditional shikara boat rides at sunrise",
      "Village life experiences: Toddy tapping & coir weaving",
      "World-class lakeside heritage resorts"
    ],
    bestExperience: "Sunrise Shikara canoe cruise through quiet village waterways and bird sanctuary islands",
    description: "A cluster of tiny islands on Vembanad Lake, Kumarakom is a peaceful haven of birdlife, paddy fields, and water lilies. Slower-paced and quieter than Alleppey, it is celebrated for its top-tier heritage resorts, tranquil waters, and birdwatching trails.",
    featured: false,
    travelTips: [
      "Visit the Bird Sanctuary between 6:00 AM and 7:30 AM for active sightings.",
      "A 2-hour morning Shikara boat ride gets you right into village canals.",
      "Try fresh Karimeen fry and sweet coconut water at local waterfront shacks."
    ],
    howToReach: {
      air: "Cochin International Airport (COK) - 78 km",
      train: "Kottayam Railway Station (KTYM) - 14 km",
      road: "Well-maintained state highway connection from Kottayam and Cochin."
    }
  },
  {
    id: "bekal",
    slug: "bekal",
    name: "Bekal",
    alternateName: "Land of Majestic Forts",
    tagline: "Keyhole-shaped coastal fortress overlooking the endless Arabian ocean",
    category: "Heritage & Culture",
    district: "Kasaragod",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    reviewsCount: 1720,
    idealDuration: "2 Days",
    bestTime: "October to March",
    highlights: [
      "Largest and best-preserved fort in Kerala (Bekal Fort)",
      "Observation tower with sweeping ocean bastions",
      "Bekal Beach walkway illuminated at night",
      "Valiyaparamba backwaters cruise nearby",
      "Ananthapura Lake Temple (sacred crocodile temple)"
    ],
    bestExperience: "Walking along the keyhole bastions of Bekal Fort with waves crashing below",
    description: "Standing proud on a rocky cliff overlooking the Arabian Sea, Bekal Fort in north Kerala looks like a giant keyhole rising from the waves. Built by the Keladi Nayakas in 1650 AD, its ramparts and coastal breeze evoke tales of maritime grandeur.",
    featured: false,
    travelTips: [
      "Visit late afternoon (around 4:00 PM) to avoid midday heat and catch golden sunset.",
      "Combine with an excursion to the less-crowded Valiyaparamba backwaters.",
      "Taste north Kerala Malabar specialties in Kasaragod."
    ],
    howToReach: {
      air: "Mangalore International Airport (IXE) - 65 km",
      train: "Kasaragod (KGQ) - 16 km or Kanhangad (KZE) - 12 km",
      road: "Located directly off NH 66 in north Kerala."
    }
  },
  {
    id: "vagamon",
    slug: "vagamon",
    name: "Vagamon",
    alternateName: "Scotland of Asia",
    tagline: "Rolling velvet meadows, aromatic pine forests, and paragliding heights",
    category: "Hill Stations",
    district: "Kottayam & Idukki border",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    reviewsCount: 1540,
    idealDuration: "2 Days",
    bestTime: "August to May",
    highlights: [
      "Vagamon Pine Forest walk under tall canopies",
      "Endless green velvet Kurisumala and Motta Kunnur meadows",
      "International Paragliding Festival host site",
      "Vagamon Lake pedal boating & suspension bridge",
      "Marmala Waterfall off-road jeep drive"
    ],
    bestExperience: "Strolling through the towering pine forest canopies & velvet green meadows",
    description: "Untouched by heavy commercialization, Vagamon is a peaceful mountain sanctuary known for rolling green meadows (Motta Kunnukal), tea gardens, deep valleys, and mist. It provides quiet solitude, trekking trails, and adventure paragliding.",
    featured: false,
    travelTips: [
      "Off-road 4x4 jeeps can be hired at the town center for rugged waterfall trips.",
      "Mornings can be deeply fogged; drive carefully on narrow mountain turns.",
      "Ideal weekend getaway for travelers seeking untouched green landscapes."
    ],
    howToReach: {
      air: "Cochin International Airport (COK) - 95 km",
      train: "Kottayam Railway Station (KTYM) - 64 km",
      road: "Scenic mountain route via Pala and Erattupetta."
    }
  },
  {
    id: "athirappilly",
    slug: "athirappilly",
    name: "Athirappilly",
    alternateName: "The Niagara of India",
    tagline: "Thunderous 80-foot cascades plunging through dense Western Ghat jungles",
    category: "Waterfalls",
    district: "Thrissur",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    reviewsCount: 2980,
    idealDuration: "1-2 Days",
    bestTime: "June to December",
    highlights: [
      "80-foot high, 330-foot wide thundering waterfall",
      "Trek down to the mist-soaked base pool of the falls",
      "Vazhachal Falls & Charpa Falls in close proximity",
      "Sholayar rain forest birdwatching & Malabar Pied Hornbills",
      "Filming location for iconic Indian blockbusters (Bahubali, Dil Se)"
    ],
    bestExperience: "Trekking down to the misty base pool to feel the thunderous roar of the falls",
    description: "Originating in the upper reaches of the Western Ghats from the Chalakudy River, Athirappilly Falls is Kerala's grandest natural spectacle. Surrounded by pristine riparian ecosystems home to endangered hornbills, its sheer roar and water mist leave spectators spellbound.",
    featured: false,
    travelTips: [
      "Monsoon months (July-October) offer maximum water volume and dramatic beauty.",
      "Wear sturdy non-slip footwear for the 15-minute downhill stone trek to the base.",
      "Forest department gates close at 5:00 PM; plan your visit before 3:30 PM."
    ],
    howToReach: {
      air: "Cochin International Airport (COK) - only 40 km (1 hour drive)",
      train: "Chalakudy Railway Station (CKI) - 30 km",
      road: "Smooth 4-lane highway leading into scenic jungle roads."
    }
  },
  {
    id: "kannur",
    slug: "kannur",
    name: "Kannur",
    alternateName: "Cradle of Theyyam & Handlooms",
    tagline: "Sacred night temple rituals, drive-in beach, and historic sea forts",
    category: "Heritage & Culture",
    district: "Kannur",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    reviewsCount: 1610,
    idealDuration: "2-3 Days",
    bestTime: "October to April (Theyyam season)",
    highlights: [
      "Witnessing fiery Theyyam ritual dances in sacred village groves",
      "Muzhappilangad Beach - Asia's longest drive-in beach (4 km)",
      "St. Angelo Fort built by the first Portuguese Viceroy (1505)",
      "Arakkal Museum - only Muslim royal family palace in Kerala",
      "Heritage handloom weavers producing world-class textiles"
    ],
    bestExperience: "Witnessing mystical fiery Theyyam trance dances in sacred village groves",
    description: "Kannur, in northern Malabar, is the spiritual home of Theyyam—an ancient living art form where performers embody deities through fiery dance, intricate body makeup, and towering headdresses. It also boasts Asia's longest drive-in beach and rich colonial fortresses.",
    featured: false,
    travelTips: [
      "Theyyam rituals take place mostly between November and May; check local temple calendars.",
      "Driving your vehicle on the packed sand of Muzhappilangad at sunset is a rare thrill.",
      "Taste authentic Thalassery biryani and Moplah seafood delicacies here."
    ],
    howToReach: {
      air: "Kannur International Airport (CNN) - 25 km",
      train: "Kannur Railway Station (CAN) - major hub on Konkan route",
      road: "Well connected by NH 66 across the northern Malabar coast."
    }
  }
];

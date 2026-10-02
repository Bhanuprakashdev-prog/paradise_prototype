// Paradise Farm — Verified Client Data & Real Asset Mappings

const PARADISE_DATA = {
  brand: {
    name: "Paradise Farm",
    city: "Surat",
    state: "Gujarat",
    tagline: "A Perfect Destination for Memorable Celebrations",
    headlineLine1: "Memorable",
    headlineLine2: "Celebrations",
    description: "Create unforgettable moments at Paradise Farm — a premium destination for weddings, celebrations, events and special occasions in Surat, Gujarat.",
    phone: "+91 74339 46001",
    altPhones: ["+91 99090 19100", "+91 96872 40040"],
    whatsapp: "+91 74339 46001",
    whatsappClean: "917433946001",
    instagram: "@PARADISEFARMSURAT",
    instagramUrl: "https://www.instagram.com/paradisefarmsurat/",
    address: "Opposite Atulya Heights, Navjivan Hotel to Pasodara Road, Sarthana Jakatnaka, Surat, Gujarat 395006",
    mapsShortUrl: "https://g.co/kgs/D2QUKNy",
    mapsEmbedUrl: "https://maps.google.com/maps?q=Paradise%20Farm%20Pasodara%20Sarthana%20Surat%20Gujarat&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },

  heroSlides: [
    {
      id: 1,
      image: "images/paradise farm surat - Google Search_files/unnamed(70).webp",
      alt: "Paradise Farm illuminated lotus canopy and architectural tree pillars",
      caption: "Illuminated Celebration Grounds"
    },
    {
      id: 2,
      image: "images/unnamed (3).webp",
      alt: "Grand celebration lawn with royal palace stage and dancing crowd",
      caption: "Grand Celebrations Under the Stars"
    },
    {
      id: 3,
      image: "images/unnamed.webp",
      alt: "Royal illuminated palace facade wedding stage at night",
      caption: "Regal Palace Architecture"
    },
    {
      id: 4,
      image: "images/unnamed.jpg",
      alt: "Celestial grand entrance walkway with flower chandeliers",
      caption: "Majestic Floral Arrival Walkway"
    }
  ],

  heroFeatures: [
    {
      id: "weddings",
      title: "Weddings",
      subtitle: "Make your big day unforgettable",
      icon: "ring"
    },
    {
      id: "events",
      title: "Events & Parties",
      subtitle: "Perfect for every celebration",
      icon: "sparkles"
    },
    {
      id: "venue",
      title: "Spacious Venue",
      subtitle: "Large capacity & open spaces",
      icon: "building"
    },
    {
      id: "facilities",
      title: "Premium Facilities",
      subtitle: "World-class amenities",
      icon: "star"
    },
    {
      id: "location",
      title: "Prime Location",
      subtitle: "Surat",
      icon: "mapPin"
    }
  ],

  about: {
    label: "ABOUT PARADISE FARM",
    title: "A Venue Where Moments Turn Into Lifelong Memories",
    description: "Paradise Farm is more than a venue — it is a place where celebrations come to life. From elegant weddings and grand receptions to private gatherings and unforgettable events, every space is designed to create memorable experiences.",
    primaryImage: "images/unnamed.webp",
    secondaryImage: "images/paradise farm surat - Google Search_files/unnamed(63).webp",
    accentImage: "images/paradise farm surat - Google Search_files/unnamed(26).jpg",
    stats: [
      { title: "Premium Venue", desc: "Designed for grand celebrations" },
      { title: "Elegant Spaces", desc: "Open-air lawn & covered pavilions" },
      { title: "Grand Celebrations", desc: "Flawless hospitality & ambience" },
      { title: "Exceptional Experience", desc: "Unforgettable memories in Surat" }
    ]
  },

  venues: [
    {
      id: "main-lawn",
      name: "The Imperial Main Lawn",
      category: "Outdoor Grandeur",
      image: "images/paradise farm surat - Google Search_files/unnamed(70).webp",
      description: "An expansive manicured lush green lawn illuminated by bespoke glowing lotus canopies and sculptured light towers for dream celebrations under open skies.",
      featured: true,
      tag: "Main Lawn",
      capacity: "Large Capacity Open Lawn"
    },
    {
      id: "palace-stage",
      name: "The Royal Palace Stage",
      category: "Signature Stage",
      image: "images/unnamed.webp",
      description: "A monumental palace-inspired architectural backdrop featuring traditional Rajasthani jharokhas, majestic domes, and royal night illumination.",
      featured: false,
      tag: "Wedding Setup",
      capacity: "Grand Varmala & Stage"
    },
    {
      id: "entrance-boulevard",
      name: "Celestial Entrance Boulevard",
      category: "Grand Arrival",
      image: "images/paradise farm surat - Google Search_files/unnamed(63).webp",
      description: "A breathtaking royal pathway adorned with crystal chandeliers, hanging wisteria flower cascades, glowing jali lattices, and plush patterned carpeting.",
      featured: false,
      tag: "Entrance Setup",
      capacity: "Royal Welcome Walkway"
    },
    {
      id: "dining-pavilion",
      name: "The Covered Banquet Pavilion",
      category: "Covered Comfort",
      image: "images/paradise farm surat - Google Search_files/unnamed(64).webp",
      description: "Expansive weather-protected banquet hall accented with vibrant traditional ceiling drapery, plush sofa rows, and spacious catering aisles.",
      featured: false,
      tag: "Dining Area",
      capacity: "All-Weather Seating & Dining"
    },
    {
      id: "sculpture-garden",
      name: "The Illuminati Light Garden",
      category: "Lounge & Reception",
      image: "images/unnamed (1).webp",
      description: "Futuristic sculptural light pillars rising high above the green turf, creating an ambient lounge atmosphere for sangeet and evening cocktails.",
      featured: false,
      tag: "Celebration Space",
      capacity: "Evening Celebration Lounge"
    },
    {
      id: "parking-logistics",
      name: "Spacious Dedicated Parking",
      category: "Accessibility & Comfort",
      image: "images/paradise farm surat - Google Search_files/unnamed(26).jpg",
      description: "Generous parking zone and broad access roads ensuring smooth vehicle management, valet coordination, and effortless guest arrival.",
      featured: false,
      tag: "Parking",
      capacity: "Extensive Guest Vehicle Area"
    }
  ],

  events: [
    {
      id: "weddings",
      title: "Weddings & Varmala",
      tagline: "Sacred Unions in Regal Splendor",
      image: "images/paradise farm surat - Google Search_files/unnamed(36).jpg",
      description: "Celebrate your big day in grand grandeur. From divine mandap setups surrounded by royal candelabras to unforgettable Varmala moments against our illuminated palace facade, your wedding becomes a fairytale.",
      highlights: ["Royal palace backdrop", "Custom mandap decor", "Photogenic varmala stage"]
    },
    {
      id: "receptions",
      title: "Grand Receptions",
      tagline: "Celebrations Under the Stars",
      image: "images/unnamed (3).webp",
      description: "Host thousands of your guests with lavish grace. Our open lawns allow seamless circulation, high-energy lighting trusses, large LED broadcast screens, and premium dining zones.",
      highlights: ["Extensive guest capacity", "Intelligent stage lighting", "Grand family welcome"]
    },
    {
      id: "sangeet-garba",
      title: "Sangeet & Garba Nights",
      tagline: "Music, Dance & Vibrant Festivity",
      image: "images/paradise farm surat - Google Search_files/unnamed(24).jpg",
      description: "Surat's heartbeat is dance. Paradise Farm offers an electrified atmosphere with high-fidelity acoustics, spacious dance turf, and royal stage illumination perfect for traditional Garba and modern Sangeet.",
      highlights: ["Wide dance lawn", "Acoustic stage setups", "Festive traditional aura"]
    },
    {
      id: "engagements",
      title: "Engagements & Roka",
      tagline: "Intimate Elegance & Modern Aesthetics",
      image: "images/paradise farm surat - Google Search_files/unnamed(59).webp",
      description: "Bespoke ring ceremonies featuring contemporary floral rings, velvet sofa seating, fairy-lit accents, and personalized stage aesthetics for intimate family gatherings.",
      highlights: ["Curated circular floral stages", "Luxury sofa seating", "Editorial photo backdrops"]
    },
    {
      id: "photo-corners",
      title: "Photo Booths & Selfie Corners",
      tagline: "Instagrammable Memories",
      image: "images/unnamed (2).webp",
      description: "Iconic photo installations including our signature golden Paradise Farm angel wings, shimmer curtain walls, neon monogram arches, and bespoke floral backdrops.",
      highlights: ["Glowing angel wing arch", "Better Together neon decor", "Velvet guest lounges"]
    },
    {
      id: "cultural-sacred",
      title: "Cultural & Corporate Gatherings",
      tagline: "Prestige, Heritage & Flawless Execution",
      image: "images/unnamed (4).webp",
      description: "From traditional Ganesh Vandana welcome entrances with sacred Sanskrit shlokas to executive conferences and corporate celebrations, we provide dignified grandeur.",
      highlights: ["Traditional entrance installations", "Professional event flow", "Spacious covered pavilions"]
    }
  ],

  gallery: [
    {
      id: 1,
      category: "Lighting",
      title: "Illuminated Lotus Canopy",
      image: "images/paradise farm surat - Google Search_files/unnamed(70).webp",
      aspect: "large"
    },
    {
      id: 2,
      category: "Decor",
      title: "Celestial Entrance Floral Tunnel",
      image: "images/paradise farm surat - Google Search_files/unnamed(63).webp",
      aspect: "tall"
    },
    {
      id: 3,
      category: "Venue",
      title: "Majestic Palace Night Facade",
      image: "images/unnamed.webp",
      aspect: "wide"
    },
    {
      id: 4,
      category: "Decor",
      title: "Paradise Farm Golden Wings",
      image: "images/unnamed (2).webp",
      aspect: "tall"
    },
    {
      id: 5,
      category: "Events",
      title: "Grand Celebration Evening",
      image: "images/unnamed (3).webp",
      aspect: "wide"
    },
    {
      id: 6,
      category: "Weddings",
      title: "Royal Stage & Candelabras",
      image: "images/paradise farm surat - Google Search_files/unnamed(36).jpg",
      aspect: "tall"
    },
    {
      id: 7,
      category: "Events",
      title: "Dancing Under the Palace",
      image: "images/paradise farm surat - Google Search_files/unnamed(24).jpg",
      aspect: "wide"
    },
    {
      id: 8,
      category: "Lighting",
      title: "Illuminated Tree Sculptures",
      image: "images/unnamed (1).webp",
      aspect: "tall"
    },
    {
      id: 9,
      category: "Decor",
      title: "'Better Together' Lounge",
      image: "images/paradise farm surat - Google Search_files/unnamed(15).jpg",
      aspect: "medium"
    },
    {
      id: 10,
      category: "Venue",
      title: "Covered Pavilion & Dining",
      image: "images/paradise farm surat - Google Search_files/unnamed(64).webp",
      aspect: "wide"
    },
    {
      id: 11,
      category: "Decor",
      title: "Floral Dining Chandelier View",
      image: "images/paradise farm surat - Google Search_files/unnamed(51).webp",
      aspect: "medium"
    },
    {
      id: 12,
      category: "Weddings",
      title: "Floral Ring Engagement Stage",
      image: "images/paradise farm surat - Google Search_files/unnamed(59).webp",
      aspect: "wide"
    },
    {
      id: 13,
      category: "Decor",
      title: "Sacred Ganesha Welcome Shloka",
      image: "images/unnamed (4).webp",
      aspect: "tall"
    },
    {
      id: 14,
      category: "Lighting",
      title: "Crystal Water Cylinder Fountain",
      image: "images/paradise farm surat - Google Search_files/unnamed(48).jpg",
      aspect: "tall"
    },
    {
      id: 15,
      category: "Venue",
      title: "Sunset Lawn & Arrival Walkway",
      image: "images/paradise farm surat - Google Search_files/unnamed(26).jpg",
      aspect: "tall"
    },
    {
      id: 16,
      category: "Weddings",
      title: "Bridal Car Floral Decoration",
      image: "images/paradise farm surat - Google Search_files/unnamed(34).jpg",
      aspect: "tall"
    },
    {
      id: 17,
      category: "Decor",
      title: "Peacock Floral Velvet Lounge",
      image: "images/paradise farm surat - Google Search_files/unnamed.png",
      aspect: "medium"
    },
    {
      id: 18,
      category: "Lighting",
      title: "Entrance Shimmering Golden Hall",
      image: "images/paradise farm surat - Google Search_files/unnamed(1).jpg",
      aspect: "medium"
    }
  ],

  whyChooseUs: [
    {
      id: "architecture",
      title: "Regal Palace Architecture",
      desc: "A majestic illuminated palace backdrop that bestows an authentic royal essence upon your wedding ceremonies and timeless photographs.",
      icon: "palace"
    },
    {
      id: "lighting",
      title: "Bespoke Light Installations",
      desc: "Architectural light sculptures, glowing neon lotus canopies, and fairy-lit tree columns transforming night celebrations into a magical wonderland.",
      icon: "sparkles"
    },
    {
      id: "spacious",
      title: "Expansive Open Spaces",
      desc: "Sprawling manicured lush green turf offering generous capacity, seamless guest circulation, and open-sky grandeur.",
      icon: "lawn"
    },
    {
      id: "dining",
      title: "Covered Dining Pavilion",
      desc: "All-weather dining pavilion equipped with vibrant traditional ceiling canopies, sofa lounge rows, and dedicated banquet zones.",
      icon: "pavilion"
    },
    {
      id: "location",
      title: "Convenient Surat Location",
      desc: "Easily accessible destination situated opposite Atulya Heights, on the Navjivan Hotel to Pasodara Road near Sarthana Jakatnaka.",
      icon: "location"
    },
    {
      id: "hospitality",
      title: "Dedicated Event Hospitality",
      desc: "Attentive management committed to providing seamless coordination, ample parking, and an exceptional celebration experience.",
      icon: "hospitality"
    }
  ],

  eventTypes: [
    "Wedding Ceremony",
    "Reception & Dinner",
    "Sangeet & Garba Night",
    "Engagement / Ring Ceremony",
    "Pre-Wedding Celebration",
    "Anniversary / Milestone Party",
    "Corporate Event / Annual Meet"
  ]
};

// Export to window
window.PARADISE_DATA = PARADISE_DATA;

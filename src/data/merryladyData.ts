export interface ProductTheme {
  primary: string;
  primaryLight: string;
  accent: string;
  bgTint: string;
  meshGradient: string;
  watermark: string;
}

export interface KitchenGuideStep {
  step: string;
  desc: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'Whip Topping' | 'Pastry Fillings' | 'Creams & Plant-Based';
  subTitle: string;
  tagline: string;
  heroHeadline: string;
  heroDescription: string;
  theme: ProductTheme;
  specs: {
    netto: string;
    storage: string;
    shelfLife: string;
    halal: string;
    texture: string;
    taste: string;
  };
  highlights: string[];
  kitchenGuide: KitchenGuideStep[];
  image: string;
  accentImage: string;
  applications: string[];
}

export interface Recipe {
  id: string;
  title: string;
  category: 'Pastry & Cakes' | 'Dessert & Mochi' | 'Cafe Beverage' | 'Artisan Breads';
  prepTime: string;
  servings: string;
  difficulty: 'Mudah' | 'Menengah' | 'Mahir';
  productUsed: string;
  image: string;
  desc: string;
  ingredients: string[];
  steps: string[];
  tags?: string[];
}

export interface MomentItem {
  id: string;
  title: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitle: string;
  tagline: string;
  moodTag: string;
  storyQuote: string;
  category: 'Family Baking' | 'Cafe at Home' | 'Celebrations' | 'Artisan Pastry' | 'Home Bakery';
  heroImage: string;
  videoBadge?: string;
  primaryColor: string;
  secondaryColor: string;
  bgGradient: string;
  enablerProductId: string;
  enablerProductName: string;
  enablerProductImage: string;
  enablerProductBadge: string;
  featuredRecipeId: string;
  recipeTitle: string;
  prepTime: string;
  vibeTags: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
}

export interface KitchenLabGuide {
  id: string;
  title: string;
  category: 'Anti-Fail Guide' | 'Ingredient Science' | 'Masterclass Video' | 'Temperature Control';
  readTime: string;
  difficulty: 'Dasar' | 'Menengah' | 'Lanjutan';
  summary: string;
  keyTakeaway: string;
  tips: string[];
  image: string;
  relatedProductId?: string;
}

export interface BakingTroubleshooterItem {
  id: string;
  problem: string;
  symptom: string;
  cause: string;
  solution: string;
  recommendedProduct: string;
  proTip: string;
}

export interface BusinessSolution {
  id: string;
  target: string;
  headline: string;
  description: string;
  benefits: string[];
  iconName: string;
  recommendedProducts: string[];
  roiHighlight: string;
}

export interface RoadshowEvent {
  id: string;
  title: string;
  city: string;
  venue: string;
  date: string;
  time: string;
  speaker: string;
  speakerRole: string;
  status: 'Pendaftaran Dibuka' | 'Segera Hadir' | 'Selesai';
  seatsLeft: number;
  image: string;
  topics: string[];
}

export interface ArticleItem {
  id: string;
  title: string;
  category: 'Tren Kuliner' | 'Panduan Usaha' | 'Tips Barista' | 'Liputan Event';
  date: string;
  readTime: string;
  author: string;
  summary: string;
  content: string[];
  image: string;
  featured?: boolean;
}

export interface BranchLocation {
  city: string;
  region: 'Jawa & Bali' | 'Sumatera' | 'Kalimantan' | 'Sulawesi & Indonesia Timur';
  distributorName: string;
  address: string;
  phone: string;
  email: string;
}

/* ==========================================================================
   1. PRODUCTS DATA
   ========================================================================== */

export const PRODUCTS: Product[] = [
  {
    id: "shineroad",
    name: "ShineRoad Whip Topping",
    slug: "merrylady-shineroad-whip-topping",
    category: "Whip Topping",
    subTitle: "Non-Dairy Whip Topping Lembut & Kokoh",
    tagline: "Krim Topping Serbaguna dengan Tekstur Lembut & Kestabilan Maksimal",
    heroHeadline: "Kemurnian Rasa. Stabilitas Sempurna.",
    heroDescription: "Krim topping non-dairy profesional untuk dekorasi kue kelas dunia dan kreasi kafe modern. Formula tanpa lemak trans dengan kestabilan tinggi dan volume kocokan maksimal.",
    theme: {
      primary: "#8A1A7B",
      primaryLight: "#F8E7F5",
      accent: "#FFCD57",
      bgTint: "#FAF2F9",
      meshGradient: "radial-gradient(ellipse at 75% 50%, rgba(138, 26, 123, 0.22) 0%, rgba(255, 205, 87, 0.12) 40%, transparent 75%)",
      watermark: "SHINEROAD"
    },
    specs: {
      netto: "1 kg (1 karton isi 12 pak)",
      storage: "Simpan beku di bawah suhu -18°C",
      shelfLife: "12 bulan dari tanggal produksi",
      halal: "Tersertifikasi Halal MUI & BPJPH",
      texture: "Halus, kokoh, tidak mudah lumer di suhu ruang",
      taste: "Milky vanilla segar, creamy seimbang, tidak greasy"
    },
    highlights: [
      "Teknologi fraksinasi nabati alami bebas lemak trans",
      "Overrun tinggi menghasilkan volume kocokan hingga 3.8x - 4.2x",
      "Sangat stabil untuk piping detail 3D, rosette, & birthday cake",
      "Rasa vanilla susu alami yang ramah selera konsumen Indonesia"
    ],
    kitchenGuide: [
      { step: "Thawing (Pencairan)", desc: "Cairkan dalam chiller (2°C - 7°C) selama 12-24 jam hingga cair homogen sebelum dikocok." },
      { step: "Persiapan Wadah", desc: "Gunakan mangkuk kocok dan beater dingin. Tuang krim maksimal 20-25% dari kapasitas wadah." },
      { step: "Pengocokan", desc: "Kocok dengan kecepatan sedang (medium) 5-7 menit hingga membentuk puncak kokoh yang halus dan mengkilap." }
    ],
    image: "https://merrylady.id/wp-content/uploads/2025/05/Blue-Shineroad-packaging-2-1024x1017.png",
    accentImage: "https://merrylady.id/wp-content/uploads/2025/05/Blue-Shineroad-packaging-2-920x1024.jpg",
    applications: ["Decorated Cakes", "Cupcakes", "Fruit Tart Topping", "Iced Latte Foam", "Dessert Cups", "Mochi Filling"]
  },
  {
    id: "cheese_filling",
    name: "Merrylady Cheese Filling",
    slug: "merrylady-cheese-filling-whip-topping",
    category: "Pastry Fillings",
    subTitle: "Krim Isian Keju Murni Halus & Gurih",
    tagline: "Isian Keju Berkualitas Tinggi Siap Panggang & Dingin",
    heroHeadline: "Keaslian Rasa Keju. Tekstur Halus & Creamy.",
    heroDescription: "Isian keju murni siap pakai tanpa perisa sintetis. Memberikan cita rasa gurih khas keju asli yang meleleh sempurna untuk Basque cheesecake, cheese bread, dan cheese mousse.",
    theme: {
      primary: "#B45309",
      primaryLight: "#FEF3C7",
      accent: "#F59E0B",
      bgTint: "#FFFBEB",
      meshGradient: "radial-gradient(ellipse at 75% 50%, rgba(217, 119, 6, 0.22) 0%, rgba(251, 191, 36, 0.14) 45%, transparent 75%)",
      watermark: "CHEESE FILLING"
    },
    specs: {
      netto: "1 kg (1 karton isi 12 pak)",
      storage: "Simpan beku di bawah suhu -18°C",
      shelfLife: "12 bulan dari tanggal produksi",
      halal: "Tersertifikasi Halal MUI & BPJPH",
      texture: "Lembut, creamy, melt-in-the-mouth saat hangat",
      taste: "Rich cheese gurih alami tanpa rasa artifisial"
    },
    highlights: [
      "100% tanpa perisa dan pewarna sintetis",
      "Bebas bahan pengawet kimiawi",
      "Stabil untuk pemanggangan suhu tinggi (water bath & dry bake)",
      "Bisa diaplikasikan langsung untuk dessert dingin maupun roti panggang"
    ],
    kitchenGuide: [
      { step: "Pencairan", desc: "Cairkan di chiller (2°C - 7°C). Gumpalan awal adalah normal dan akan menyatu sempurna saat diaduk rata." },
      { step: "Pencampuran", desc: "Kocok kecepatan sedang hingga lembut, lanjutkan kecepatan rendah hingga gelembung udara hilang." },
      { step: "Pemanggangan", desc: "Panggang metode water bath pada suhu atas 220°C & bawah 120°C selama 20-25 menit hingga keemasan." }
    ],
    image: "https://merrylady.id/wp-content/uploads/2025/05/Cheese-filling-768x1892.png",
    accentImage: "https://merrylady.id/wp-content/uploads/2025/05/Cheese-Filling-Merrylady-carousel-1-920x1024.jpg",
    applications: ["Basque Cheesecake", "Cheese Bread Lava", "Cheese Mousse", "Tarts & Danish", "Cheese Foam Beverage"]
  },
  {
    id: "susu_beras",
    name: "Merrylady Susu Beras (Rice Milk)",
    slug: "merrylady-susu-beras-rice-milk",
    category: "Creams & Plant-Based",
    subTitle: "Plant-Based Milk Alternative Bebas Laktosa",
    tagline: "Susu Nabati Beras Premium dengan Rasa Manis Alami Enzimatik",
    heroHeadline: "Inovasi Nabati. Bebas Laktosa, Manis Alami.",
    heroDescription: "Terbuat dari beras pilihan dengan teknologi hidrolisis enzimatik khusus. Menghadirkan rasa manis lembut bebas gula tambahan, cocok untuk menu vegan, vegetarian, dan kopi kafe modern.",
    theme: {
      primary: "#047857",
      primaryLight: "#D1FAE5",
      accent: "#10B981",
      bgTint: "#F0FDF4",
      meshGradient: "radial-gradient(ellipse at 75% 50%, rgba(5, 150, 105, 0.20) 0%, rgba(52, 211, 153, 0.12) 40%, transparent 75%)",
      watermark: "RICE MILK"
    },
    specs: {
      netto: "1 kg (1 karton isi 12 pak)",
      storage: "Simpan di suhu sejuk 2 - 25°C (kering & sejuk)",
      shelfLife: "9 bulan dari tanggal produksi",
      halal: "Tersertifikasi Halal MUI & BPJPH",
      texture: "Silky smooth, ringan, non-clumping, mudah di-steam",
      taste: "Manis alami khas beras Asia, bersih tanpa aftertaste pahit"
    },
    highlights: [
      "100% Plant-based bebas laktosa & bebas susu hewani",
      "Proses enzimatik inovatif menghasilkan manis alami tanpa pemanis buatan",
      "Kaya nutrisi dan mudah dicerna untuk gaya hidup sehat",
      "Blending sempurna dengan espresso, matcha, dan teh susu"
    ],
    kitchenGuide: [
      { step: "Penyimpanan", desc: "Kocok sebelum digunakan. Setelah dibuka simpan di chiller dan habiskan dalam 3-5 hari." },
      { step: "Aplikasi Panas", desc: "Dapat di-steam hingga suhu 60°C - 65°C untuk latte art nabati yang konsisten dan mikrofoam halus." },
      { step: "Aplikasi Dingin", desc: "Sangat segar untuk iced milk tea, mango smoothie, chia pudding, dan dessert jelly vegan." }
    ],
    image: "https://merrylady.id/wp-content/uploads/2025/05/Rice-milk-3.png",
    accentImage: "https://merrylady.id/wp-content/uploads/2025/05/Rice-Milk-Carousel-1-920x1024.jpg",
    applications: ["Plant-Based Latte", "Milk Tea Modern", "Smoothie Bowls", "Vegan Puddings", "Healthy Bakery"]
  },
  {
    id: "skibbo",
    name: "Merrylady Skibbo Whip Topping",
    slug: "merrylady-skibbo-whip-topping",
    category: "Whip Topping",
    subTitle: "Krim Kocok Ekonomis & Bervolume Melimpah",
    tagline: "Performa Unggul dengan Nilai Ekonomis Optimal untuk Usaha",
    heroHeadline: "Kestabilan Tinggi. Ringan & Menyegarkan.",
    heroDescription: "Solusi whip topping handal untuk produksi bakery skala menengah dan UMKM. Memiliki rasa susu yang menyegarkan, tidak terasa berminyak di langit-langit mulut, dan sangat mudah digunakan.",
    theme: {
      primary: "#1D4ED8",
      primaryLight: "#DBEAFE",
      accent: "#38BDF8",
      bgTint: "#EFF6FF",
      meshGradient: "radial-gradient(ellipse at 75% 50%, rgba(29, 78, 216, 0.20) 0%, rgba(56, 189, 248, 0.12) 40%, transparent 75%)",
      watermark: "SKIBBO"
    },
    specs: {
      netto: "1 kg (1 karton isi 12 pak)",
      storage: "Simpan beku di bawah suhu -18°C",
      shelfLife: "12 bulan dari tanggal produksi",
      halal: "Tersertifikasi Halal MUI & BPJPH",
      texture: "Ringan, halus, volume kocokan besar (high yield)",
      taste: "Susu segar alami tanpa rasa eneg/greasy"
    },
    highlights: [
      "Rasio ekspansi volume kocokan (yield) sangat tinggi hingga 4x lipat",
      "Tekstur kokoh untuk roll cake, dekorasi harian, dan isian chiffon",
      "Biaya produksi per loyang sangat efisien untuk UMKM",
      "Sangat mudah berpadu dengan pewarna makanan & pasta rasa buah"
    ],
    kitchenGuide: [
      { step: "Thawing", desc: "Cairkan di chiller bersuhu 2°C - 7°C hingga cairan homogen bebas es batu." },
      { step: "Pengocokan", desc: "Kocok 5-8 menit dengan mixer kecepatan medium hingga mencapai konsistensi piping yang kokoh." },
      { step: "Finishing", desc: "Dapat diaplikasikan langsung pada cake dingin atau disimpan dalam piping bag tertutup." }
    ],
    image: "https://merrylady.id/wp-content/uploads/2025/05/Skibbo-packaging-768x1901.png",
    accentImage: "https://merrylady.id/wp-content/uploads/2025/05/Skibbo-Carousel-1-920x1024.jpg",
    applications: ["Towel Roll Cake", "Chiffon Filling", "Pastry Decoration", "Donut Cream Filling", "Dessert Box"]
  },
  {
    id: "tart_filling",
    name: "Merrylady Tart Filling",
    slug: "merrylady-tart-filling",
    category: "Pastry Fillings",
    subTitle: "Ready-to-Use Tart Custard Filling Solution",
    tagline: "Isian Custard Siap Pakai Praktis & Konsisten",
    heroHeadline: "Kemewahan Custard. Praktis & Siap Panggang.",
    heroDescription: "Solusi isian custard tart siap tuang yang dirancang untuk egg tart, Portuguese tart, dan puding panggang. Menghemat waktu dapur profesional dengan hasil rasa dan aroma telur susu yang konsisten.",
    theme: {
      primary: "#C2410C",
      primaryLight: "#FFEDD5",
      accent: "#FB923C",
      bgTint: "#FFF7ED",
      meshGradient: "radial-gradient(ellipse at 75% 50%, rgba(194, 65, 12, 0.20) 0%, rgba(251, 146, 60, 0.12) 40%, transparent 75%)",
      watermark: "TART FILLING"
    },
    specs: {
      netto: "1 kg (1 karton isi 12 pak)",
      storage: "Simpan beku di bawah suhu -18°C",
      shelfLife: "12 bulan dari tanggal produksi",
      halal: "Tersertifikasi Halal MUI & BPJPH",
      texture: "Halus, lembut bagai sutra (silky custard finish)",
      taste: "Custard manis pas, kaya aroma susu dan telur"
    },
    highlights: [
      "Langsung tuang tanpa perlu menakar telur, gula, atau susu satu per satu",
      "Tahan proses pemanggangan suhu tinggi dan pembekuan",
      "Permukaan tart mengkaramelisasi keemasan dengan efek brûlée sempurna",
      "Hasil akhir tidak mengempis, tidak berair, dan tidak pecah"
    ],
    kitchenGuide: [
      { step: "Pencairan", desc: "Cairkan pada chiller suhu 2°C - 7°C. Aduk perlahan hingga tekstur homogen bebas gelembung." },
      { step: "Penuangan", desc: "Tuang ke dalam kulit tart puff pastry sekitar 85-90% penuh." },
      { step: "Pemanggangan", desc: "Panggang pada oven suhu atas 220°C dan bawah 120°C selama 20-25 menit hingga brûlée keemasan." }
    ],
    image: "https://merrylady.id/wp-content/uploads/2025/05/Tart-filling-768x1901.png",
    accentImage: "https://merrylady.id/wp-content/uploads/2025/05/Tart-Filling-Carousel-1-2-920x1024.jpg",
    applications: ["Egg Tart", "Portuguese Custard Tart", "Baked Custard Pudding", "Pie Fillings", "Fruit Custard Cup"]
  },
  {
    id: "multi_cream",
    name: "Merrylady Multi Cream",
    slug: "merrylady-multi-cream",
    category: "Creams & Plant-Based",
    subTitle: "Krim Serbaguna untuk Minuman, Mousse & Dessert",
    tagline: "Krim Multifungsi dengan Peningkatan Aroma Alami",
    heroHeadline: "Multifungsi Dapur. Dari Mousse hingga Mocktail.",
    heroDescription: "Diformulasikan untuk fleksibilitas maksimal: dekorasi kue, isian pastry Barat, campuran gelato/es krim, hingga salt foam topping minuman kekinian dengan tekstur velvet yang memanjakan lidah.",
    theme: {
      primary: "#7E22CE",
      primaryLight: "#F3E8FF",
      accent: "#A855F7",
      bgTint: "#FAF5FF",
      meshGradient: "radial-gradient(ellipse at 75% 50%, rgba(126, 34, 206, 0.20) 0%, rgba(168, 85, 247, 0.12) 40%, transparent 75%)",
      watermark: "MULTI CREAM"
    },
    specs: {
      netto: "1 kg (1 karton isi 12 pak)",
      storage: "Simpan beku di bawah suhu -18°C",
      shelfLife: "12 bulan dari tanggal produksi",
      halal: "Tersertifikasi Halal MUI & BPJPH",
      texture: "Velvety, serbaguna, mudah bercampur bahan lain",
      taste: "Creamy netral kaya rasa yang memperkuat aroma bahan dasar"
    },
    highlights: [
      "Serbaguna untuk aplikasi panas maupun dingin",
      "Peningkatan rasa & aroma bahan dasar (cokelat murni, keju, kopi, buah)",
      "Bisa langsung dikonsumsi, di-froth ringan, atau dikocok kaku",
      "Sangat stabil untuk pembuatan mousse, ganache, dan es krim gelato"
    ],
    kitchenGuide: [
      { step: "Pencairan", desc: "Thawing di chiller hingga cair sempurna tanpa es kristal." },
      { step: "Aplikasi Minuman", desc: "Kocok ringan 1-2 menit untuk menghasilkan salt foam atau cloud cream yang mengapung anggun di atas teh/kopi." },
      { step: "Aplikasi Pastry", desc: "Campurkan langsung ke adonan mousse atau ganache cokelat untuk tekstur mengkilap." }
    ],
    image: "https://merrylady.id/wp-content/uploads/2025/05/Multi-creamer-768x1901.png",
    accentImage: "https://merrylady.id/wp-content/uploads/2025/05/Multi-Cream-Carousel-1-920x1024.jpg",
    applications: ["Western Pastry Fillings", "Beverage Salt Foam", "Chocolate Mousse", "Gelato / Ice Cream Base", "Ganache Glaze"]
  }
];

/* ==========================================================================
   2. MOMENT-CENTRIC EXPERIENCES DATA (HERO & CONTENT HUB)
   ========================================================================== */

export const MOMENTS: MomentItem[] = [
  {
    id: "moment-family-baking",
    title: "Tawa Manis di Dapur Rumah",
    titleLine1: "Tawa Manis",
    titleLine2: "di Dapur Rumah",
    subtitle: "Momen Baking Hangat Bersama Keluarga di Hari Minggu",
    tagline: "Setiap tawa kecil anak dan aroma kue yang mengembang adalah kebahagiaan sejati.",
    moodTag: "#FamilyBakingSunday",
    storyQuote: "Bukan sekadar memanggang bolu, ini tentang mewariskan memori manis yang akan selalu mereka ingat saat dewasa nanti.",
    category: "Family Baking",
    heroImage: "/images/moments/family_baking.jpg",
    videoBadge: "Watch Story • 0:45",
    primaryColor: "#8A1A7B",
    secondaryColor: "#FFCD57",
    bgGradient: "radial-gradient(circle at 70% 30%, rgba(138, 26, 123, 0.22) 0%, rgba(255, 205, 87, 0.15) 50%, rgba(250, 242, 249, 0.95) 100%)",
    enablerProductId: "skibbo",
    enablerProductName: "Merrylady Skibbo Whip Topping",
    enablerProductImage: "https://merrylady.id/wp-content/uploads/2025/05/Skibbo-packaging-768x1901.png",
    enablerProductBadge: "Krim Kocok Ringan & Melimpah",
    featuredRecipeId: "towel-roll-cake",
    recipeTitle: "Matcha Towel Roll Cake",
    prepTime: "35 Menit",
    vibeTags: ["#FamilyBaking", "#WeekendVibes", "#EasyFun", "#NoFail"],
    testimonial: {
      quote: "Bikin roll cake bareng si kecil jadi anti-stres karena krim Skibbo gampang banget ngembang dan nggak cepet meleleh!",
      author: "Nadia Rahmawati",
      role: "Ibu Rumah Tangga & Home Baker",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
    }
  },
  {
    id: "moment-cafe-at-home",
    title: "Kafe Estetik di Sudut Rumah",
    titleLine1: "Kafe Estetik",
    titleLine2: "di Sudut Rumah",
    subtitle: "Sensasi Minuman Kekinian & Cloud Foam ala Barista",
    tagline: "Ciptakan signature drink favoritmu dengan foam lembut selembut awan.",
    moodTag: "#CafeAtHome",
    storyQuote: "Nikmati ketenangan sore dengan segelas Iced Mango Yakult Cloud Foam berlayer cantik di meja favoritmu.",
    category: "Cafe at Home",
    heroImage: "/images/moments/cafe_at_home.jpg",
    videoBadge: "Barista Hack • 0:30",
    primaryColor: "#047857",
    secondaryColor: "#10B981",
    bgGradient: "radial-gradient(circle at 70% 30%, rgba(4, 120, 87, 0.22) 0%, rgba(16, 185, 129, 0.14) 50%, rgba(240, 253, 244, 0.95) 100%)",
    enablerProductId: "susu_beras",
    enablerProductName: "Merrylady Susu Beras & Multi Cream",
    enablerProductImage: "https://merrylady.id/wp-content/uploads/2025/05/Rice-milk-3.png",
    enablerProductBadge: "Plant-Based & Cloud Foam Secret",
    featuredRecipeId: "iced-mango-yakult",
    recipeTitle: "Iced Mango Yakult Cloud Foam",
    prepTime: "10 Menit",
    vibeTags: ["#CafeAtHome", "#PlantBased", "#CloudFoam", "#BaristaStyle"],
    testimonial: {
      quote: "Rasa manis alami susu berasnya pas banget, dipadu foam Multi Cream bikin menu minuman kafe saya langsung jadi best seller.",
      author: "Kevin Santoso",
      role: "Head Barista & Coffee Shop Owner",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
    }
  },
  {
    id: "moment-celebration",
    title: "Momen Spesial, Rasa yang Berkesan",
    titleLine1: "Momen Spesial,",
    titleLine2: "Rasa yang Berkesan",
    subtitle: "Spesial dari ulang tahun hingga momen sederhana",
    tagline: "Kue ulang tahun dan selebrasi indah yang memukau mata dan memanjakan lidah.",
    moodTag: "#SweetCelebration",
    storyQuote: "Di balik setiap lilin yang menyala, ada doa, tawa, dan rasa. Kami hadir untuk membuat setiap selebrasi terasa lebih istimewa.",
    category: "Celebrations",
    heroImage: "/images/moments/celebration.jpg",
    videoBadge: "Cake Decorating • 1:15",
    primaryColor: "#8A1A7B",
    secondaryColor: "#FFCD57",
    bgGradient: "radial-gradient(circle at 70% 30%, rgba(138, 26, 123, 0.25) 0%, rgba(255, 205, 87, 0.16) 50%, rgba(250, 242, 249, 0.95) 100%)",
    enablerProductId: "shineroad",
    enablerProductName: "ShineRoad Whip Topping",
    enablerProductImage: "https://merrylady.id/wp-content/uploads/2025/05/Blue-Shineroad-packaging-2-1024x1017.png",
    enablerProductBadge: "Krim Dekorasi Pilihan Chef",
    featuredRecipeId: "creamy-daifuku-mochi",
    recipeTitle: "Creamy Daifuku Mochi & Celebration Cakes",
    prepTime: "30 Menit",
    vibeTags: ["#CelebrationCake", "#PipingArt", "#ShineRoad", "#JoyfulMoments"],
    testimonial: {
      quote: "Untuk custom birthday cake bertingkat di ruangan ber-AC sedang, ShineRoad nggak pernah bikin was-was. Hasil piping selalu presisi!",
      author: "Chef Jessica Anggraeni",
      role: "Pastry Chef & Cake Boutique Owner",
      avatar: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&auto=format&fit=crop&q=80"
    }
  },
  {
    id: "moment-warm-oven",
    title: "Setiap Pastry Menyimpan Kehangatan Momen",
    titleLine1: "Setiap Pastry Menyimpan",
    titleLine2: "Kehangatan Momen",
    subtitle: "Ciptakan sajian yang menghadirkan rasa kelas dunia.",
    tagline: "Sensasi pastry hangat renyah di luar, lumer dan gurih di dalam.",
    moodTag: "#WarmOvenJoy",
    storyQuote: "Saat aroma pastry memenuhi dapur, yang tercipta bukan hanya hidangan yang lezat, tetapi momen hangat yang selalu ingin diulang.",
    category: "Artisan Pastry",
    heroImage: "/images/moments/warm_oven_artisan.jpg",
    videoBadge: "Oven Magic • 0:50",
    primaryColor: "#B45309",
    secondaryColor: "#F59E0B",
    bgGradient: "radial-gradient(circle at 70% 30%, rgba(180, 83, 9, 0.22) 0%, rgba(245, 158, 11, 0.14) 50%, rgba(255, 251, 235, 0.95) 100%)",
    enablerProductId: "cheese_filling",
    enablerProductName: "Merrylady Cheese & Tart Filling",
    enablerProductImage: "https://merrylady.id/wp-content/uploads/2025/05/Cheese-filling-768x1892.png",
    enablerProductBadge: "Ready-to-Bake Pure Cheese & Custard",
    featuredRecipeId: "classic-egg-tart",
    recipeTitle: "Golden Portuguese Egg Tart",
    prepTime: "25 Menit",
    vibeTags: ["#WarmOven", "#EggTart", "#BasqueCheese", "#FreshBake"],
    testimonial: {
      quote: "Tart Filling Merrylady tinggal tuang langsung ke kulit puff pastry. Waktu persiapan berkurang 60%, rasa custardnya mewah banget.",
      author: "Hendra Wijaya",
      role: "Owner Artisan French Bakery",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=100&auto=format&fit=crop&q=80"
    }
  },
  {
    id: "moment-home-bakery-growth",
    title: "Dari Dapur Kecil Menuju Impian Besar",
    titleLine1: "Dari Dapur Kecil",
    titleLine2: "Menuju Impian Besar",
    subtitle: "Mendukung 10.000+ UMKM & Home Bakery di Indonesia",
    tagline: "Bahan baku handal berstandar internasional untuk bisnis kuliner Anda bertumbuh pesat.",
    moodTag: "#PassionToProfit",
    storyQuote: "Setiap pesanan yang selesai tepat waktu dan pelanggan yang puas adalah bahan bakar mimpi kami untuk terus maju.",
    category: "Home Bakery",
    heroImage: "/images/moments/home_bakery.jpg",
    videoBadge: "UMKM Story • 1:00",
    primaryColor: "#1D4ED8",
    secondaryColor: "#38BDF8",
    bgGradient: "radial-gradient(circle at 70% 30%, rgba(29, 78, 216, 0.20) 0%, rgba(56, 189, 248, 0.12) 50%, rgba(239, 246, 255, 0.95) 100%)",
    enablerProductId: "skibbo",
    enablerProductName: "Merrylady Skibbo & Multi Cream",
    enablerProductImage: "https://merrylady.id/wp-content/uploads/2025/05/Multi-creamer-768x1901.png",
    enablerProductBadge: "Formula Efisiensi Tinggi untuk Usaha",
    featuredRecipeId: "basque-cheese-bread",
    recipeTitle: "Lava Basque Cheese Bread",
    prepTime: "40 Menit",
    vibeTags: ["#HomeBakery", "#UMKMJuara", "#ProfitMargin", "#FoodService"],
    testimonial: {
      quote: "Biaya HPP kue roll cake saya turun 25% sejak pakai Skibbo, tapi tekstur dan rasanya dipuji pelanggan makin lembut!",
      author: "Siti Maryam",
      role: "Founder 'Maryam Sweet Bakery' Tangerang",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
    }
  }
];

/* ==========================================================================
   3. RECIPES DATA
   ========================================================================== */

export const RECIPES: Recipe[] = [
  {
    id: "creamy-daifuku-mochi",
    title: "Creamy Daifuku Mochi",
    category: "Dessert & Mochi",
    prepTime: "30 menit",
    servings: "6-8 pcs",
    difficulty: "Menengah",
    productUsed: "ShineRoad Whip Topping",
    image: "https://merrylady.id/wp-content/uploads/2025/05/Creamy-Daifuku-Mochi1_Pic-768x473.jpg",
    desc: "Mochi lembut kenyal khas Jepang dengan isian whip cream vanilla segar dan potongan buah stroberi manis asam yang seimbang.",
    ingredients: [
      "Tepung ketan putih 120g",
      "Gula pasir 40g",
      "Merrylady ShineRoad Whip Topping 250g (kocok kaku)",
      "Buah stroberi segar secukupnya",
      "Tepung maizena sangrai untuk taburan"
    ],
    steps: [
      "Kukus adonan kulit mochi hingga transparan dan matang merata (kurang lebih 20 menit).",
      "Kocok Merrylady ShineRoad Whip Topping hingga kaku, masukkan ke piping bag.",
      "Gilas adonan kulit mochi di atas taburan maizena sangrai, cetak bulat pipih.",
      "Semprotkan krim kocok, letakkan potongan stroberi, lalu rapatkan dan bulatkan."
    ],
    tags: ["#JapaneseDessert", "#MochiLover", "#Strawberry", "#ShineRoad"]
  },
  {
    id: "dacquoise",
    title: "Artisan Dacquoise Series",
    category: "Pastry & Cakes",
    prepTime: "45 menit",
    servings: "10 pcs",
    difficulty: "Mahir",
    productUsed: "Merrylady Multi Cream",
    image: "https://merrylady.id/wp-content/uploads/2025/05/Dacquoise-Series_Pic-768x425.jpg",
    desc: "Biskuit meringue almond Prancis bertekstur renyah di luar dan lembut kenyal di dalam, dipadukan buttercream krim ringan.",
    ingredients: [
      "Tepung almond 100g",
      "Putih telur 120g",
      "Gula halus 80g",
      "Merrylady Multi Cream 200g",
      "Ekstrak vanila murni 1 sdt"
    ],
    steps: [
      "Kocok putih telur dan gula hingga meringue firm peaks, lipat lembut tepung almond.",
      "Cetak di atas loyang dan panggang pada suhu 175°C selama 15 menit.",
      "Kocok Merrylady Multi Cream, semprotkan di antara dua keping dacquoise."
    ],
    tags: ["#FrenchPastry", "#Dacquoise", "#AlmondMeringue", "#MultiCream"]
  },
  {
    id: "napoleon-mousse",
    title: "Napoleon Mousse Cake",
    category: "Pastry & Cakes",
    prepTime: "60 menit",
    servings: "8 porsi",
    difficulty: "Mahir",
    productUsed: "ShineRoad Whip Topping",
    image: "https://merrylady.id/wp-content/uploads/2025/05/Napoleon-Mousse_Pic.jpg",
    desc: "Harmoni lapisan puff pastry karamel renyah dengan chocolate mousse krim Merrylady yang melt-in-mouth.",
    ingredients: [
      "Lembaran puff pastry panggang karamel",
      "Merrylady ShineRoad Whip Topping 300g",
      "Dark chocolate 150g",
      "Gelatin bubuk 5g"
    ],
    steps: [
      "Panggang lembaran puff pastry dengan taburan gula hingga kecokelatan renyah.",
      "Buat chocolate mousse dengan melarutkan cokelat dan melipat bersama ShineRoad kocok.",
      "Susun berseling pastry dan mousse, dinginkan di kulkas 4 jam sebelum disajikan."
    ],
    tags: ["#LayerCake", "#MousseCake", "#ChocolateLover"]
  },
  {
    id: "iced-mango-yakult",
    title: "Iced Mango Yakult Cloud Foam",
    category: "Cafe Beverage",
    prepTime: "10 menit",
    servings: "1 gelas",
    difficulty: "Mudah",
    productUsed: "Merrylady Susu Beras (Rice Milk)",
    image: "https://merrylady.id/wp-content/uploads/2025/05/Rice-Milk-Carousel-1-920x1024.jpg",
    desc: "Minuman kafe menyegarkan perpaduan puree mangga harum manis, probiotik Yakult, dan cold foam susu beras nabati.",
    ingredients: [
      "Puree mangga manis 60ml",
      "Yakult 2 botol",
      "Merrylady Rice Milk 80ml (dingin)",
      "Es batu secukupnya",
      "Merrylady Multi Cream 30ml (untuk cloud foam)"
    ],
    steps: [
      "Tuang puree mangga ke dasar gelas, isi es batu hingga penuh.",
      "Tuangkan Yakult dan Merrylady Rice Milk dingin perlahan untuk layer visual.",
      "Froth Merrylady Multi Cream hingga berbusa tebal, tuangkan di atas minuman sebagai topping foam."
    ],
    tags: ["#CafeAtHome", "#MangoYakult", "#CloudFoam", "#PlantBased"]
  },
  {
    id: "basque-cheese-bread",
    title: "Lava Basque Cheese Bread",
    category: "Artisan Breads",
    prepTime: "40 menit",
    servings: "6 pcs",
    difficulty: "Menengah",
    productUsed: "Merrylady Cheese Filling",
    image: "https://merrylady.id/wp-content/uploads/2025/05/Cheese-Filling-Carousel-1-920x1024.jpg",
    desc: "Roti brioche mentega lembut dengan isian lava keju gurih creamy Merrylady yang meleleh hangat saat dibelah.",
    ingredients: [
      "Adonan roti brioche siap kembang 6 pcs",
      "Merrylady Cheese Filling 300g",
      "Keju cheddar parut 50g",
      "Olesan kuning telur"
    ],
    steps: [
      "Pipihkan adonan brioche, isi dengan 50g Merrylady Cheese Filling di tengahnya.",
      "Rapatkan dan bulatkan adonan, proofing 45 menit hingga mengembang dua kali lipat.",
      "Olesi kuning telur, taburi keju cheddar, panggang pada suhu 190°C selama 16 menit."
    ],
    tags: ["#ArtisanBread", "#CheeseLover", "#LavaCheese", "#BakingJoy"]
  },
  {
    id: "classic-egg-tart",
    title: "Golden Portuguese Egg Tart",
    category: "Pastry & Cakes",
    prepTime: "25 menit",
    servings: "12 pcs",
    difficulty: "Mudah",
    productUsed: "Merrylady Tart Filling",
    image: "https://merrylady.id/wp-content/uploads/2025/05/Tart-Filling-Carousel-1-2-920x1024.jpg",
    desc: "Egg tart khas Macau berkulit puff pastry renyah berlapis dengan isian custard telur lembut karamel.",
    ingredients: [
      "Kulit tart puff pastry 12 pcs",
      "Merrylady Tart Filling 400g (cairkan)",
      "Sedikit bubuk kayu manis untuk taburan"
    ],
    steps: [
      "Susun kulit tart puff pastry di atas loyang pemanggang.",
      "Tuang Merrylady Tart Filling langsung ke dalam kulit tart sekitar 85% penuh.",
      "Panggang oven suhu atas 220°C & bawah 120°C selama 20-22 menit hingga permukaan melepuh keemasan."
    ],
    tags: ["#EggTart", "#CustardTart", "#QuickBaking", "#PortugueseTart"]
  },
  {
    id: "towel-roll-cake",
    title: "Matcha Towel Roll Cake",
    category: "Pastry & Cakes",
    prepTime: "35 menit",
    servings: "3 rolls",
    difficulty: "Menengah",
    productUsed: "Merrylady Skibbo Whip Topping",
    image: "https://merrylady.id/wp-content/uploads/2025/05/Towel-Roll1_Pic-770x1024.jpeg",
    desc: "Kue gulung handuk viral dengan lapisan crepe matcha tipis lembut diisi krim Skibbo yang kokoh dan berlimpah.",
    ingredients: [
      "Lembaran crepe matcha tipis 9 lembar",
      "Merrylady Skibbo Whip Topping 300g (kocok kaku)",
      "Kacang merah manis (azuki) 80g",
      "Bubuk matcha murni untuk taburan"
    ],
    steps: [
      "Tata 3 lembar crepe berjejer saling menumpuk tepinya memanjang.",
      "Oleskan Merrylady Skibbo Whip Topping kocok merata dan taburi azuki.",
      "Lipat kedua tepi panjang crepe ke arah tengah, lalu gulung perlahan dari satu ujung membentuk roll towel. Dinginkan 2 jam."
    ],
    tags: ["#TowelCake", "#MatchaCrepe", "#Skibbo", "#ViralRecipe"]
  },
  {
    id: "pisang-ijo-mocktail",
    title: "Pisang Ijo Coconut Foam Mocktail",
    category: "Cafe Beverage",
    prepTime: "15 menit",
    servings: "1 gelas",
    difficulty: "Mudah",
    productUsed: "ShineRoad Whip Topping",
    image: "https://merrylady.id/wp-content/uploads/2026/08/image-1-300x300.jpeg",
    desc: "Sentuhan modern minuman tradisional Makassar: sirup pisang ambon, santan pandan, dan foam whip cream vanila lembut di atasnya.",
    ingredients: [
      "Sirup DHT / pisang ambon 40ml",
      "Santan cair pandan 60ml",
      "Es serut halus",
      "Merrylady ShineRoad Whip Topping 50g (kocok ringan)"
    ],
    steps: [
      "Tuang sirup pisang ambon ke dasar gelas tinggi.",
      "Tambahkan es serut halus, lalu tuangkan santan pandan wangi perlahan.",
      "Topping dengan cloud foam ShineRoad kocok dan garnish daun pandan muda."
    ],
    tags: ["#ModernTradisional", "#IndonesianMocktail", "#PisangIjo"]
  }
];

/* ==========================================================================
   4. KITCHEN LAB & BAKING SCIENCE DATA
   ========================================================================== */

export const KITCHEN_LAB_GUIDES: KitchenLabGuide[] = [
  {
    id: "guide-whipping-temp",
    title: "Rahasia Kontrol Suhu: Mengapa Whip Topping Harus Dingin 2°C - 7°C",
    category: "Temperature Control",
    readTime: "4 menit baca",
    difficulty: "Dasar",
    summary: "Memahami struktur emulsi lemak nabati dan peran kristalisasi suhu rendah untuk mencapai volume kocokan maksimal tanpa pecah.",
    keyTakeaway: "Suhu wadah dan krim di atas 10°C mengurangi overrun hingga 40% dan membuat gelembung udara mudah kolaps.",
    tips: [
      "Simpan beater mixer dan mangkuk stainless steel di dalam freezer selama 15 menit sebelum mengocok.",
      "Lakukan thawing perlahan di chiller (bukan microwave atau suhu ruang terbuka) untuk menjaga emulsi stabil.",
      "Kocok bertahap: mulai kecepatan rendah 1 menit, naik ke kecepatan sedang hingga peak, akhiri kecepatan rendah 30 detik untuk membuang udara berlebih."
    ],
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80",
    relatedProductId: "shineroad"
  },
  {
    id: "guide-egg-tart-browning",
    title: "Sains Karamelisasi Custard: Cara Mendapatkan Brûlée Keemasan Sempurna",
    category: "Anti-Fail Guide",
    readTime: "5 menit baca",
    difficulty: "Menengah",
    summary: "Bagaimana rasio gula alami dan pemanasan atas oven menciptakan bercak karamel khas Portuguese Egg Tart tanpa membuat custard kering.",
    keyTakeaway: "Gunakan suhu oven atas tinggi (220°C) dan suhu bawah sedang (120°C) agar kulit pastry renyah dan permukaan mengkaramelisasi sempurna.",
    tips: [
      "Jangan mengisi kulit tart lebih dari 90% karena custard akan sedikit memuai saat dipanggang.",
      "Gunakan api atas oven dengan sirkulasi konveksi jika tersedia.",
      "Biarkan egg tart dingin 10 menit di atas cooling rack agar custard set dan mengkilap sebelum disajikan."
    ],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80",
    relatedProductId: "tart_filling"
  },
  {
    id: "guide-cloud-foam-beverage",
    title: "Teknik Salt Foam & Cloud Cream: Menghasilkan Layer Minuman yang Mengapung Anggun",
    category: "Masterclass Video",
    readTime: "6 menit baca",
    difficulty: "Dasar",
    summary: "Panduan praktis bagi barista dan pencinta kopi kafe untuk menghasilkan lapisan krim gurih manis yang tidak tenggelam ke dasar cangkir.",
    keyTakeaway: "Kocok Multi Cream dengan sedikit susu dingin dan sea salt hingga tekstur seperti melted ice cream sebelum dituangkan perlahan di atas punggung sendok.",
    tips: [
      "Gunakan es batu penuh hingga mendekati bibir gelas sebagai tumpuan alami foam.",
      "Tuangkan foam secara perlahan di atas punggung sendok bar (bar spoon) untuk memecah tekanan.",
      "Taburkan sedikit bubuk matcha, cocoa, atau brown sugar untuk garnish visual."
    ],
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&auto=format&fit=crop&q=80",
    relatedProductId: "multi_cream"
  },
  {
    id: "guide-plant-based-steaming",
    title: "Sains Susu Beras: Mengapa Enzimatik Alami Lebih Ramah Pencernaan & Enak Di-steam",
    category: "Ingredient Science",
    readTime: "5 menit baca",
    difficulty: "Menengah",
    summary: "Proses hidrolisis enzimatik memecah pati beras menjadi glukosa alami yang mudah larut dan menghasilkan tekstur mikrofoam silky.",
    keyTakeaway: "Bebas laktosa dan bebas lemak trans, menjadikannya pilihan ideal bagi konsumen intoleran laktosa dan pelaku gaya hidup sehat.",
    tips: [
      "Steam pada suhu maksimal 65°C agar nutrisi dan rasa manis alaminya tidak rusak.",
      "Sangat cocok dipadukan dengan biji kopi medium roast dengan profil rasa nutty atau fruity.",
      "Kocok karton kemasan sebelum dituang agar sari beras tercampur homogen."
    ],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80",
    relatedProductId: "susu_beras"
  }
];

export const BAKING_TROUBLESHOOTERS: BakingTroubleshooterItem[] = [
  {
    id: "trouble-melt",
    problem: "Krim Kocok Cepat Mencair atau Mengempes di Suhu Ruangan",
    symptom: "Dekorasi piping bunga meleleh setelah 30 menit di display ruangan tanpa pendingin kuat.",
    cause: "Suhu pengocokan awal terlalu hangat (>10°C) atau menggunakan krim dairy biasa yang tidak memiliki titik leleh tinggi.",
    solution: "Gunakan Merrylady ShineRoad Non-Dairy Whip Topping yang memiliki stabilitas suhu ruang superior dan formula fraksinasi nabati kokoh.",
    recommendedProduct: "ShineRoad Whip Topping",
    proTip: "Pastikan krim dicairkan sempurna di kulkas (chiller 2-7°C) minimal 12 jam sebelum dikocok."
  },
  {
    id: "trouble-tart-collapse",
    problem: "Isian Egg Tart Mengempis & Berair Setelah Dipanggang",
    symptom: "Permukaan tart cekung ke dalam dan bagian bawah kulit basah/soggy.",
    cause: "Kandungan air dan telur tidak seimbang atau suhu bawah oven terlalu rendah sehingga uap air terjebak di dasar tart.",
    solution: "Gunakan Merrylady Tart Filling siap pakai yang formulanya telah distabilkan untuk ketahanan panas dan tidak mudah susut.",
    recommendedProduct: "Merrylady Tart Filling",
    proTip: "Panaskan oven terlebih dahulu (preheat 15 menit) dan gunakan suhu atas 220°C & bawah 120°C."
  },
  {
    id: "trouble-cheese-crack",
    problem: "Basque Cheesecake Retak Besar di Tengah",
    symptom: "Permukaan kue terbelah dalam saat dipanggang atau saat proses pendinginan.",
    cause: "Adonan diaduk dengan kecepatan terlalu tinggi sehingga memerangkap terlalu banyak gelembung udara yang memuai saat dipanaskan.",
    solution: "Gunakan Merrylady Cheese Filling yang memiliki tekstur halus homogen tanpa perlu mencampur cream cheese padat dengan mixer berlebih.",
    recommendedProduct: "Merrylady Cheese Filling",
    proTip: "Hentakkan loyang secara perlahan ke atas meja sebelum masuk oven untuk melepas gelembung udara besar."
  },
  {
    id: "trouble-foam-sink",
    problem: "Foam Minuman Kafe Langsung Tenggelam Bercampur Kopi",
    symptom: "Lapisan visual cloud foam tidak terbentuk di atas minuman dingin.",
    cause: "Massa jenis foam terlalu berat karena pengocokan kurang atau es batu di dalam gelas terlalu sedikit.",
    solution: "Kocok Merrylady Multi Cream 1-2 menit hingga membentuk mikro-buih ringan sebelum dituangkan di atas es batu penuh.",
    recommendedProduct: "Merrylady Multi Cream",
    proTip: "Tuangkan foam perlahan menggunakan sendok bar memutar di atas dinding es."
  }
];

/* ==========================================================================
   5. BAKERY BUSINESS & B2B DATA
   ========================================================================== */

export const BUSINESS_SOLUTIONS: BusinessSolution[] = [
  {
    id: "sol-home-bakery",
    target: "Home Bakery & UMKM Mandiri",
    headline: "Hemat Biaya Produksi, Maksimalkan Keuntungan Tanpa Kompromi Kualitas",
    description: "Solusi bahan baku dengan rasio ekspansi kocokan tinggi (yield hingga 4x) yang menurunkan biaya HPP per loyang kue Anda.",
    benefits: [
      "Yield volume kocokan melimpah, 1 karton menghasilkan lebih banyak loyang",
      "Penyimpanan fleksibel dan masa simpan hingga 12 bulan",
      "Dukungan resep viral dan panduan kalkulasi harga jual dari chef Merrylady",
    ],
    iconName: "Store",
    recommendedProducts: ["Skibbo Whip Topping", "Cheese Filling", "Tart Filling"],
    roiHighlight: "Estimasi penghematan biaya bahan baku krim hingga 20% - 30% per bulan"
  },
  {
    id: "sol-cafe-beverage",
    target: "Kafe, Coffee Shop & Modern Tea Bar",
    headline: "Inovasi Menu Signature Kekinian dengan Cloud Foam & Plant-Based Milk",
    description: "Tingkatkan nilai jual menu minuman Anda dengan sensasi cloud foam bertekstur velvet dan latte susu beras bebas laktosa.",
    benefits: [
      "Kemudahan operasional barista: ready-to-froth & ready-to-steam",
      "Konsistensi rasa seragam di setiap cangkir",
      "Mendukung tren menu sehat, vegetarian, dan dairy-free"
    ],
    iconName: "Coffee",
    recommendedProducts: ["Multi Cream", "Susu Beras (Rice Milk)", "ShineRoad Whip Topping"],
    roiHighlight: "Meningkatkan margin keuntungan minuman signature hingga 65% - 75%"
  },
  {
    id: "sol-horeca-chain",
    target: "Hotel, Restoran, Katering & Chain Bakery",
    headline: "Stabilitas Produksi Skala Besar & Rantai Pasok Terjamin Nasional",
    description: "Didukung oleh jaringan rantai pasok PT Sukanda Djaya di lebih dari 30 kota besar dengan jaminan pasokan berstandar ISO 22000.",
    benefits: [
      "Kestabilan formulasi bebas lemak trans untuk sertifikasi hotel bintang 5",
      "Layanan demo in-house dan pendampingan formulasi menu khusus oleh Corporate Chef",
      "Faktur pajak resmi dan fleksibilitas termin pembayaran institusi"
    ],
    iconName: "Building2",
    recommendedProducts: ["ShineRoad Whip Topping", "Cheese Filling", "Tart Filling", "Multi Cream"],
    roiHighlight: "Zero-waste formula: meminimalisir risiko kue rusak dan gagal piping"
  }
];

/* ==========================================================================
   6. ROADSHOW EVENTS & ARTICLES DATA
   ========================================================================== */

export const ROADSHOW_EVENTS: RoadshowEvent[] = [
  {
    id: "event-jakarta-masterclass",
    title: "Merrylady Grand Pastry Masterclass: Seni Piping 3D & Japanese Daifuku",
    city: "Jakarta Barat",
    venue: "Sukanda Djaya Culinary Centre, Kebon Jeruk",
    date: "14 Oktober 2026",
    time: "09:00 - 15:00 WIB",
    speaker: "Chef Jessica Anggraeni & Hi-Road Master Chef",
    speakerRole: "International Pastry Consultant",
    status: "Pendaftaran Dibuka",
    seatsLeft: 8,
    image: "/images/events/workshop_jakarta.jpg",
    topics: ["Teknik Piping Rosette Bertingkat", "Rahasia Daifuku Mochi Lembut Tahan 48 Jam", "Food Costing untuk Usaha Rumahan"]
  },
  {
    id: "event-surabaya-baking",
    title: "Surabaya Bakery Revolution: Eksplorasi Basque Cheese & Tart Custard",
    city: "Surabaya",
    venue: "Grand City Convention Hall, Surabaya",
    date: "28 Oktober 2026",
    time: "10:00 - 16:00 WIB",
    speaker: "Chef Hendra Wijaya",
    speakerRole: "Owner Artisan French Bakery",
    status: "Pendaftaran Dibuka",
    seatsLeft: 15,
    image: "/images/events/workshop_surabaya.jpg",
    topics: ["Aplikasi Cheese Filling Suhu Tinggi", "Teknik Brûlée Egg Tart Renyah", "Live Baking Show & Tasting Session"]
  },
  {
    id: "event-medan-cafe-trends",
    title: "Medan Barista & Dessert Showcase: Plant-Based Latte & Cloud Foam Trends",
    city: "Medan",
    venue: "Santika Premiere Dyandra Hotel",
    date: "12 November 2026",
    time: "13:00 - 17:00 WIB",
    speaker: "Kevin Santoso",
    speakerRole: "Specialty Coffee Roaster & Beverage Developer",
    status: "Segera Hadir",
    seatsLeft: 25,
    image: "/images/events/workshop_medan.jpg",
    topics: ["Susu Beras Steaming Workshop", "Layering Salt Foam Mocktail", "Membangun Menu Signature Kafe Hits"]
  },
  {
    id: "event-bali-hospitality",
    title: "Bali Hospitality Summit: High-Efficiency Pastry for Hotels & Resorts",
    city: "Denpasar, Bali",
    venue: "The Stones Hotel Legian Bali",
    date: "25 November 2026",
    time: "09:30 - 15:30 WITA",
    speaker: "Hi-Road Culinary Technical Team",
    speakerRole: "Asia-Pacific Technical Specialist",
    status: "Segera Hadir",
    seatsLeft: 30,
    image: "/images/events/workshop_bali.jpg",
    topics: ["Zero-Trans Fat Standards for Luxury Hotels", "High-Yield Whip Topping Operations", "Cold-Chain Logistics Integrity"]
  }
];

export const ARTICLES: ArticleItem[] = [
  {
    id: "article-bakery-trends-2026",
    title: "Tren Bakery 2026: Kunci Sukses Tekstur Lembut & Emosional",
    category: "Tren Kuliner",
    date: "18 September 2026",
    readTime: "5 menit baca",
    author: "Tim Riset Kuliner Merrylady",
    summary: "Konsumen masa kini tidak hanya membeli rasa manis, tetapi mencari kenyamanan emosional (comfort food) dan pengalaman estetika yang siap diabadikan di media sosial.",
    content: [
      "Pergeseran tren kuliner pasca 2025 menunjukkan peningkatan signifikan pada menu dessert bertekstur airy, fluffy, dan melt-in-the-mouth seperti daifuku mochi, towel roll cake, dan Basque cheesecake berlelehan lembut.",
      "Konsumen muda (Gen Z & Milenial) lebih mengapresiasi produk dengan klaim kesehatan yang jelas: bebas lemak trans (trans-fat-free), pemanis alami, dan opsi plant-based.",
      "Krim kocok yang stabil namun tidak meninggalkan rasa berminyak di langit-langit mulut menjadi standar emas baru yang dicari oleh para pastry chef modern."
    ],
    image: "https://merrylady.id/wp-content/uploads/2026/08/image-4-300x225.jpeg",
    featured: true
  },
  {
    id: "article-home-bakery-costing",
    title: "Panduan Hitung HPP: Rahasia Usaha Bakery Tetap Cuan",
    category: "Panduan Usaha",
    date: "05 September 2026",
    readTime: "7 menit baca",
    author: "Chef Jessica Anggraeni",
    summary: "Banyak pengusaha bakery rumahan gagal berkembang bukan karena kuenya tidak enak, melainkan salah menghitung rasio yield bahan dan biaya operasional tak terlihat.",
    content: [
      "Kunci efisiensi dalam produksi kue berbahan krim adalah rasio ekspansi (overrun). Krim dengan overrun 3.8x menghasilkan volume dekorasi jauh lebih banyak dibanding krim biasa dengan takaran gram yang sama.",
      "Selalu pisahkan perhitungan biaya bahan baku utama, bahan kemasan (packaging box & ribbon), listrik, serta tenaga kerja per jam.",
      "Gunakan produk yang konsisten agar risiko 'kue gagal' mendekati nol, karena setiap kali memanggang ulang berarti memotong margin laba bersih Anda."
    ],
    image: "https://merrylady.id/wp-content/uploads/2026/07/image-5-300x300.png"
  },
  {
    id: "article-cloud-foam-science",
    title: "Sains Cloud Foam: Rahasia Cold Cream Mengapung Sempurna",
    category: "Tips Barista",
    date: "22 Agustus 2026",
    readTime: "4 menit baca",
    author: "Kevin Santoso",
    summary: "Memahami interaksi tegangan permukaan antara gelembung udara mikro dan viskositas krim serbaguna untuk menghasilkan kreasi mocktail yang fotogenik.",
    content: [
      "Cloud foam bekerja dengan memanfaatkan gelembung udara mikro yang terperangkap dalam jaring lemak emulsi cair.",
      "Kepadatan yang tepat (viskositas medium) memungkinkan cairan krim menahan berat garnish seperti biskuit renyah atau taburan cocoa powder tanpa langsung amblas.",
      "Merrylady Multi Cream diformulasikan khusus dengan emulsifier nabati yang lentur, membuatnya sangat stabil di atas minuman bersuhu dingin maupun bersoda."
    ],
    image: "https://merrylady.id/wp-content/uploads/2026/08/image-1-300x300.jpeg"
  }
];

/* ==========================================================================
   7. BRAND & SUKANDA DJAYA DISTRIBUTION DATA
   ========================================================================== */

export const SCHEMATIC_MESSAGE = {
  taglines: {
    primaryId: "Sempurnakan Momen Spesial",
    primaryEn: "Make Moments Perfectly Special",
    alternateMerry: "Merryahkan Momen Spesial",
    alternateWhip: "Whip Up Special Moments",
    alternateSentuhan: "Sentuhan Sajian Spesial",
  },
  elevatorPitch: {
    en: "Merrylady offers non-dairy & plant-based topping creams and rice milk for various kinds of bakery and beverages. Its preserved texture and balanced taste thanks to zero trans-fat brings consistent servings to your creations. With decades of experience in the FnB Industry for professional grade creations, now it's within your reach.",
    id: "Merrylady menghadirkan krim topping non-dairy & plant-based serta susu beras untuk aneka kreasi bakery dan minuman. Tekstur yang terjaga dan cita rasa seimbang tanpa lemak trans memberikan konsistensi sempurna bagi kreasi Anda. Didukung pengalaman puluhan tahun di industri FnB global, kini kualitas profesional hadir di dapur Anda."
  },
  customerValues: [
    {
      id: "consistent-result",
      title: "Consistent Result",
      subtitle: "Hasil Konsisten & Presisi",
      desc: "Stabilitas tinggi dan toleransi temperatur menjamin hasil kreasi dan dekorasi selalu presisi di setiap porsi.",
      icon: "ShieldCheck"
    },
    {
      id: "flexible-usage",
      title: "Flexible Usage For Bakery & Beverages",
      subtitle: "Aplikasi Fleksibel Bakery & Minuman",
      desc: "Formula multifungsi untuk whipping cake, piping 3D, isian pastry panggang, foam latte, hingga minuman dingin.",
      icon: "Layers"
    },
    {
      id: "professional-grade",
      title: "Professional Grade Creation",
      subtitle: "Kreasi Standar Profesional",
      desc: "Kualitas tata boga kelas dunia yang mudah digunakan oleh home baker pemula hingga chef hotel berbintang.",
      icon: "Sparkles"
    }
  ],
  usps: [
    { label: "Zero Trans Fat", badge: "Bebas Lemak Trans", desc: "Sehat & aman untuk konsumsi harian" },
    { label: "Preserved Texture", badge: "Tekstur Terjaga", desc: "Kokoh, tidak mudah lumer di suhu ruang" },
    { label: "Multi Purpose Product", badge: "Multi Aplikasi", desc: "Kue, pastry, mousse, & beverage" },
    { label: "Non Dairy", badge: "Krim Nabati Murni", desc: "Ringan, halus & tidak meninggalkan rasa eneg" },
    { label: "Plant Based", badge: "Pilihan Nabati", desc: "Ramah vegan & bebas laktosa" },
    { label: "Balanced Taste", badge: "Cita Rasa Seimbang", desc: "Milky vanilla segar pas di lidah" },
    { label: "Experienced In FnB Industry", badge: "25+ Tahun Pengalaman", desc: "Dedikasi manufaktur & riset global" }
  ],
  productCategories: [
    {
      name: "Merrylady Whipping Cream",
      code: "Whipping Cream",
      items: ["ShineRoad Whip Topping", "Skibbo Whip Topping"],
      desc: "Krim kocok berdaya kembang tinggi dengan stabilitas piping maksimal"
    },
    {
      name: "Merrylady Multi Creamer",
      code: "Multi Creamer",
      items: ["Multi Cream", "Cheese Filling", "Tart Custard Filling"],
      desc: "Isian dan krim serbaguna untuk pastry panggang dan foam minuman"
    },
    {
      name: "Merrylady Rice Milk",
      code: "Rice Milk",
      items: ["Susu Beras (Rice Milk)"],
      desc: "Susu nabati hidrolisis enzimatik manis alami bebas laktosa"
    }
  ],
  officialCertifications: [
    { name: "Halal BPJPH & MUI", code: "HALAL", standard: "100% Halal Indonesia" },
    { name: "ISO 9001:2015", code: "ISO 9001", standard: "Quality Management" },
    { name: "HACCP Certified", code: "HACCP", standard: "Food Safety System" },
    { name: "BPOM RI", code: "BPOM", standard: "Izin Edar Resmi Nasional" },
    { name: "BRCGS Global Standard", code: "BRCGS", standard: "Global Food Safety Standard" }
  ]
};

export const BRAND_INFO = {
  name: "Merrylady Indonesia",
  parentCompany: "Shanghai Hi-Road Food Technology Co., Ltd. (Hi-Road Group)",
  parentStock: "Shenzhen Stock Exchange (Stock Code: 300921)",
  establishedYear: 2001,
  presenceIndonesiaYear: 2009,
  flagshipProduct: "ShineRoad Whip Topping",
  story: "Didirikan pada tahun 2001, Shanghai Hi-Road Food Technology adalah pelopor global dalam teknologi fraksinasi minyak nabati murni dan bahan baku bakery profesional. Sejak hadir di Indonesia pada 2009, Merrylady berkomitmen menghadirkan kebahagiaan di setiap dapur keluarga, kafe, dan bakery di Nusantara melalui bahan baku berkualitas tinggi, 100% Halal, dan bebas lemak trans.",
  distributor: {
    name: "PT Sukanda Djaya (Diamond Group)",
    description: "Distributor resmi dan eksklusif skala nasional untuk seluruh lini produk Merrylady di Indonesia. Didukung armada berpendingin (cold-chain) terdepan yang menjaga suhu beku optimal di bawah -18°C dari gudang pusat hingga ke dapur Anda.",
    reach: "Menjangkau lebih dari 30 kota besar di seluruh Nusantara, melayani industri HoReCa, supermarket premium, bakery chain nasional, hingga pelaku UMKM.",
    hotline: "+62 21 8990 8888",
    whatsapp: "+62 822 9773 6038",
    salesHotline: "+62 822 9773 6038",
    email: "customercare@sukandadjaya.com"
  },
  certifications: [
    { title: "Halal Resmi BPJPH & MUI", desc: "Seluruh lini produk Merrylady teruji 100% Halal resmi dan aman bagi konsumen muslim Indonesia." },
    { title: "Non-Hydrogenated Fractionation", desc: "Bebas asam lemak trans berbahaya (trans-fat-free) demi kesehatan dan kebaikan tubuh konsumen." },
    { title: "HACCP & ISO 9001 / 22000 Certified", desc: "Fasilitas manufaktur berteknologi modern dengan standar keamanan pangan internasional kelas dunia." },
    { title: "BRCGS Global Standard Food Safety", desc: "Standar sertifikasi pangan internasional menjamin konsistensi mutu produk ekspor dan domestik." },
    { title: "Ijin Edar BPOM RI Lengkap", desc: "Seluruh kemasan terdaftar resmi di Badan Pengawas Obat dan Makanan Republik Indonesia." }
  ],
  stats: [
    { label: "Dedikasi Manufaktur Global", value: "25+ Tahun" },
    { label: "Dipercaya Pelaku Usaha & Chef", value: "10.000+ Bisnis" },
    { label: "Jaringan Cabang Rantai Pasok", value: "30+ Kota" },
    { label: "Sertifikasi Halal & Standar Mutu", value: "100% Halal" }
  ]
};

export const DISTRIBUTION_BRANCHES: BranchLocation[] = [
  { city: "Jakarta (Pusat & Barat)", region: "Jawa & Bali", distributorName: "PT Sukanda Djaya - Jakarta HQ", address: "Kawasan Industri Pulo Gadung, Jl. Rawa Gelam IV No. 1, Jakarta Timur", phone: "(021) 460-8888", email: "jkt.foodservice@sukandadjaya.com" },
  { city: "Tangerang & Banten", region: "Jawa & Bali", distributorName: "PT Sukanda Djaya - Tangerang", address: "Jl. Industri Raya Blok A3 No. 5, Kawasan Industri Jatake, Tangerang", phone: "(021) 590-2345", email: "tng.branch@sukandadjaya.com" },
  { city: "Bandung", region: "Jawa & Bali", distributorName: "PT Sukanda Djaya - Bandung", address: "Jl. Soekarno Hatta No. 608, Bandung", phone: "(022) 756-1122", email: "bdg.branch@sukandadjaya.com" },
  { city: "Semarang", region: "Jawa & Bali", distributorName: "PT Sukanda Djaya - Semarang", address: "Kawasan Candi Industri Blok XI No. 8, Krapyak, Semarang", phone: "(024) 761-4455", email: "smg.branch@sukandadjaya.com" },
  { city: "Yogyakarta & Solo", region: "Jawa & Bali", distributorName: "PT Sukanda Djaya - Yogyakarta", address: "Jl. Ringroad Utara No. 99, Depok, Sleman, DI Yogyakarta", phone: "(0274) 488-990", email: "jog.branch@sukandadjaya.com" },
  { city: "Surabaya & Malang", region: "Jawa & Bali", distributorName: "PT Sukanda Djaya - Surabaya", address: "Kawasan Industri SIER, Jl. Rungkut Industri III No. 45, Surabaya", phone: "(031) 843-7788", email: "sby.branch@sukandadjaya.com" },
  { city: "Denpasar & Bali", region: "Jawa & Bali", distributorName: "PT Sukanda Djaya - Bali", address: "Jl. By Pass Ngurah Rai No. 888, Sanur, Denpasar, Bali", phone: "(0361) 288-123", email: "bali.branch@sukandadjaya.com" },
  { city: "Medan", region: "Sumatera", distributorName: "PT Sukanda Djaya - Medan", address: "Kawasan Industri Medan (KIM) II, Jl. Pulau Nias No. 12, Medan", phone: "(061) 685-3344", email: "mdn.branch@sukandadjaya.com" },
  { city: "Palembang", region: "Sumatera", distributorName: "PT Sukanda Djaya - Palembang", address: "Jl. Bypass Alang-Alang Lebar KM 12, Palembang", phone: "(0711) 742-556", email: "plm.branch@sukandadjaya.com" },
  { city: "Pekanbaru", region: "Sumatera", distributorName: "PT Sukanda Djaya - Pekanbaru", address: "Jl. Siak II No. 88, Payung Sekaki, Pekanbaru", phone: "(0761) 855-432", email: "pku.branch@sukandadjaya.com" },
  { city: "Balikpapan & Samarinda", region: "Kalimantan", distributorName: "PT Sukanda Djaya - Balikpapan", address: "Jl. MT Haryono No. 102, Balikpapan Selatan", phone: "(0542) 876-900", email: "bpn.branch@sukandadjaya.com" },
  { city: "Pontianak", region: "Kalimantan", distributorName: "PT Sukanda Djaya - Pontianak", address: "Jl. Arteri Supadio No. 77, Sungai Raya, Kubu Raya", phone: "(0561) 723-456", email: "pnk.branch@sukandadjaya.com" },
  { city: "Makassar", region: "Sulawesi & Indonesia Timur", distributorName: "PT Sukanda Djaya - Makassar", address: "Kawasan Industri Makassar (KIMA) VII No. 15, Makassar", phone: "(0411) 512-345", email: "mks.branch@sukandadjaya.com" },
  { city: "Manado", region: "Sulawesi & Indonesia Timur", distributorName: "PT Sukanda Djaya - Manado", address: "Jl. Raya Manado-Bitung KM 14, Minahasa Utara", phone: "(0431) 890-123", email: "mdo.branch@sukandadjaya.com" }
];

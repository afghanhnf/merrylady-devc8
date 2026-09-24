import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Bookmark } from 'lucide-react';
import type { MomentItem, Product, Recipe } from '../data/merryladyData';

interface HeroMomentSliderProps {
  moments: MomentItem[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  onSelectMoment?: (moment: MomentItem) => void;
  onSelectProduct?: (product: Product) => void;
  onSelectRecipe?: (recipe: Recipe) => void;
  products: Product[];
  recipes?: Recipe[];
  lang: 'ID' | 'EN';
}

export const HeroMomentSlider: React.FC<HeroMomentSliderProps> = ({
  moments,
  currentIndex,
  onSelectIndex,
  products,
  lang,
}) => {
  const currentMoment = moments[currentIndex];

  const handlePrev = () => {
    onSelectIndex(currentIndex === 0 ? moments.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    onSelectIndex(currentIndex === moments.length - 1 ? 0 : currentIndex + 1);
  };

  const enablerProduct = products.find((p) => p.id === currentMoment.enablerProductId) || products[0];

  const enMomentDetails: Record<
    string,
    {
      titleLine1: string;
      titleLine2: string;
      subtitle: string;
      storyQuote: string;
      category: string;
      badgeText: string;
      enablerBadge: string;
      testimonialQuote: string;
      authorRole: string;
    }
  > = {
    'moment-family-baking': {
      titleLine1: 'Sweet Laughter',
      titleLine2: 'in the Home Kitchen',
      subtitle: 'Warm Weekend Family Baking Traditions',
      storyQuote: "It's not just about baking a cake, it's about creating sweet memories our children will cherish forever.",
      category: 'Family Baking',
      badgeText: 'Family Baking • Joyful Culinary Moments',
      enablerBadge: 'Light & High-Yield Whipping Cream',
      testimonialQuote: 'Making roll cakes with my kids is worry-free because Skibbo whips up fast and stays firm without melting!',
      authorRole: 'Home Baker & Mother',
    },
    'moment-cafe-at-home': {
      titleLine1: 'Aesthetic Café',
      titleLine2: 'in Your Home Corner',
      subtitle: 'Trending Drinks & Cloud Foam Like a Barista',
      storyQuote: 'Enjoy a peaceful afternoon with a layered Iced Mango Yakult Cloud Foam at your favorite spot.',
      category: 'Cafe at Home',
      badgeText: 'Cafe at Home • Barista Grade Creations',
      enablerBadge: 'Plant-Based & Cloud Foam Secret',
      testimonialQuote: 'The natural sweetness of rice milk paired with velvety Multi Cream foam made our drink an instant best-seller.',
      authorRole: 'Head Barista & Coffee Shop Owner',
    },
    'moment-celebration': {
      titleLine1: 'Unforgettable',
      titleLine2: 'Celebration Glow',
      subtitle: 'Special Moments with Exquisite Taste & Piping Art',
      storyQuote: 'As candles are blown and smiles glow, sharp and stable cream piping frames every cherished moment.',
      category: 'Celebrations',
      badgeText: 'Celebrations • High Stability Piping Art',
      enablerBadge: "Chef's Choice Cake Decorating Cream",
      testimonialQuote: 'For tiered custom birthday cakes, ShineRoad never fails. The piping definition and hold stay razor sharp!',
      authorRole: 'Pastry Chef & Cake Boutique Owner',
    },
    'moment-warm-oven': {
      titleLine1: 'Golden Warmth',
      titleLine2: 'from the Oven',
      subtitle: 'Basque Cheesecakes & Portuguese Custard Tarts',
      storyQuote: 'Watching rich custard bubble and caramelize inside the oven is the pure joy of every baker.',
      category: 'Artisan Pastry',
      badgeText: 'Artisan Pastry • Golden Oven Delights',
      enablerBadge: 'Ready-to-Bake Pure Cheese & Custard',
      testimonialQuote: 'Merrylady Tart Filling pours directly into puff pastry shells. Prep time cut by 60% with luxury custard flavor.',
      authorRole: 'Artisan French Bakery Owner',
    },
    'moment-home-bakery-growth': {
      titleLine1: 'From Home Kitchen',
      titleLine2: 'to Big Culinary Dreams',
      subtitle: 'Empowering 10,000+ Bakeries & Culinary Creators',
      storyQuote: 'Every order completed on time and every happy customer fuels our dream to reach the next milestone.',
      category: 'Home Bakery',
      badgeText: 'Home Bakery • Passion to Profit',
      enablerBadge: 'High Efficiency Formula for Business',
      testimonialQuote: 'My roll cake ingredient cost dropped 25% with Skibbo, while customers praised the softer texture!',
      authorRole: "Founder, Maryam Sweet Bakery",
    },
  };

  const enData = enMomentDetails[currentMoment.id];
  const titleLine1 = lang === 'ID' ? currentMoment.titleLine1 : (enData?.titleLine1 || currentMoment.titleLine1);
  const titleLine2 = lang === 'ID' ? currentMoment.titleLine2 : (enData?.titleLine2 || currentMoment.titleLine2);
  const subtitle = lang === 'ID' ? currentMoment.subtitle : (enData?.subtitle || currentMoment.subtitle);
  const storyQuote = lang === 'ID' ? currentMoment.storyQuote : (enData?.storyQuote || currentMoment.storyQuote);
  const badgeText = lang === 'ID' ? `${currentMoment.category} • Momen Kebahagiaan Kuliner` : (enData?.badgeText || `${currentMoment.category} • Joyful Moments`);
  const enablerBadge = lang === 'ID' ? currentMoment.enablerProductBadge : (enData?.enablerBadge || currentMoment.enablerProductBadge);
  const testimonialQuote = lang === 'ID' ? currentMoment.testimonial.quote : (enData?.testimonialQuote || currentMoment.testimonial.quote);
  const authorRole = lang === 'ID' ? currentMoment.testimonial.role : (enData?.authorRole || currentMoment.testimonial.role);

  return (
    <section id="beranda" className="hero-moment-section">
      {/* Dynamic Ambient Mesh & Arch Layer */}
      <div
        className="hero-moment-ambient-mesh"
        style={{ background: currentMoment.bgGradient }}
      />
      <div className="hero-moment-arch-bg" />

      {/* Floating Left Navigation Arrow Button */}
      <button
        onClick={handlePrev}
        className="hero-slider-nav-btn hero-slider-nav-prev"
        aria-label={lang === 'ID' ? 'Momen Sebelumnya' : 'Previous Moment'}
      >
        <ChevronLeft size={22} strokeWidth={2.4} />
      </button>

      {/* Floating Right Navigation Arrow Button */}
      <button
        onClick={handleNext}
        className="hero-slider-nav-btn hero-slider-nav-next"
        aria-label={lang === 'ID' ? 'Momen Selanjutnya' : 'Next Moment'}
      >
        <ChevronRight size={22} strokeWidth={2.4} />
      </button>

      <div className="container">
        <div className="hero-moment-grid">
          {/* Left: Emotional Storytelling & Copy */}
          <div className="hero-moment-content">
            {/* Category Tag */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span
                className="m3-badge primary"
                style={{
                  backgroundColor: `${currentMoment.primaryColor}18`,
                  color: currentMoment.primaryColor,
                  borderColor: `${currentMoment.primaryColor}30`,
                }}
              >
                {badgeText}
              </span>
            </motion.div>

            {/* Headline & Narrative Transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMoment.id + '-text'}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <h1 className="hero-moment-title">
                  {titleLine1 ? (
                    <>
                      <span className="hero-title-main">{titleLine1}</span>
                      <span className="hero-title-sub">{titleLine2}</span>
                    </>
                  ) : (
                    currentMoment.title
                  )}
                </h1>
                <p className="hero-moment-subtitle" style={{ color: currentMoment.primaryColor, marginTop: '8px' }}>
                  {subtitle}
                </p>

                <div className="hero-moment-quote-box" style={{ marginTop: '16px', borderLeftColor: currentMoment.primaryColor }}>
                  <p className="hero-moment-quote-text">
                    "{storyQuote}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTAs */}
            <div className="hero-moment-ctas">
              <a
                href="#moments"
                className="btn btn-primary"
                style={{ backgroundColor: currentMoment.primaryColor, textDecoration: 'none' }}
              >
                <span>{lang === 'ID' ? 'Coba Resep Ini' : 'Try This Recipe'}</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#moments"
                className="btn btn-outline"
                style={{ textDecoration: 'none' }}
              >
                <Bookmark size={15} />
                <span>{lang === 'ID' ? 'Lihat Ragam Kreasi' : 'Explore Creations'}</span>
              </a>
            </div>

            {/* Testimonial / Baker Voice */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                marginTop: '12px',
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(8px)',
                padding: '12px 18px',
                borderRadius: '16px',
                border: '1px solid rgba(0,0,0,0.06)',
                maxWidth: '520px',
              }}
            >
              <p style={{ fontStyle: 'italic', fontSize: '0.84rem', color: '#4E444E', lineHeight: 1.45 }}>
                "{testimonialQuote}"
              </p>
              <span style={{ fontWeight: 700, fontSize: '0.8rem', color: '#1E1A20' }}>
                — {currentMoment.testimonial.author} ({authorRole})
              </span>
            </div>
          </div>

          {/* Right: Visual Showcase Frame */}
          <div className="hero-moment-stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMoment.id + '-stage'}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="moment-visual-card"
              >
                <img
                  src={currentMoment.heroImage}
                  alt={currentMoment.title}
                  className="moment-visual-img"
                />
                <div className="moment-visual-gradient-overlay" />
              </motion.div>
            </AnimatePresence>

            {/* Floating "The Secret Enabler Behind The Magic" Product Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="moment-enabler-floating-card"
            >
              <img
                src={enablerProduct.image}
                alt={enablerProduct.name}
                className="moment-enabler-thumb"
              />
              <div className="moment-enabler-info">
                <span className="moment-enabler-label" style={{ color: currentMoment.primaryColor }}>
                  {lang === 'ID' ? 'Kunci Rahasia Sukses' : 'Secret Enabler'}
                </span>
                <span className="moment-enabler-title">
                  {enablerProduct.name}
                </span>
                <span className="moment-enabler-desc">
                  {enablerBadge}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


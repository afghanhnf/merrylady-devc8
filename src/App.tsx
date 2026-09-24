import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroMomentSlider } from './components/HeroMomentSlider';
import { SchematicValueStrip } from './components/SchematicValueStrip';
import { MerryMomentsBentoSection } from './components/MerryMomentsBentoSection';
import { KitchenLabSection } from './components/KitchenLabSection';
import { ProductCatalog } from './components/ProductCatalog';
import { BakeryBusinessSection } from './components/BakeryBusinessSection';
import { ArticleRoadshowSection } from './components/ArticleRoadshowSection';
import { BrandTrustSection } from './components/BrandTrustSection';
import { Footer } from './components/Footer';

// Data
import { PRODUCTS, RECIPES, MOMENTS } from './data/merryladyData';

export function App() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState<number>(0);
  const [activeMood, setActiveMood] = useState<string>('all');
  const [lang, setLang] = useState<'ID' | 'EN'>('ID');

  const activeHeroMoment = MOMENTS[currentHeroIndex];

  // Dynamic CSS primary variable based on active moment
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--prod-primary', activeHeroMoment.primaryColor);
    root.style.setProperty('--prod-accent', activeHeroMoment.secondaryColor);
  }, [activeHeroMoment]);

  // Pure Landing Page Navigation (Smooth scrolling on landing page)
  const handleNavigate = (view?: string, targetId?: string) => {
    if (view === 'moments' && targetId) {
      handleSelectMood(targetId);
    }
    const map: Record<string, string> = {
      home: 'beranda',
      moments: 'kreasi-resep',
      products: 'produk',
      'kitchen-lab': 'kitchen-lab',
      business: 'business',
      articles: 'artikel',
      about: 'tentang',
      contact: 'tentang',
    };
    const elId = map[view || ''] || view;
    if (elId) {
      const el = document.getElementById(elId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectMood = (moodId: string) => {
    setActiveMood(moodId);
    if (moodId === 'family') setCurrentHeroIndex(0);
    else if (moodId === 'cafe') setCurrentHeroIndex(1);
    else if (moodId === 'celebration') setCurrentHeroIndex(2);
    else if (moodId === 'artisan') setCurrentHeroIndex(3);
    else if (moodId === 'business') setCurrentHeroIndex(4);
  };

  return (
    <div className="site-wrapper">
      {/* Floating Pill Navigation with Dropdowns (Stays on landing page when clicked) */}
      <Navbar
        currentView="home"
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={() => setLang((prev) => (prev === 'ID' ? 'EN' : 'ID'))}
      />

      {/* Main Landing Page Content (100% Focused, Zero Modals / Popups) */}
      <main>
        {/* 1. Moment-Centric Hero Slider */}
        <HeroMomentSlider
          moments={MOMENTS}
          currentIndex={currentHeroIndex}
          onSelectIndex={setCurrentHeroIndex}
          onSelectMoment={() => {}}
          onSelectProduct={() => {}}
          onSelectRecipe={() => {}}
          products={PRODUCTS}
          recipes={RECIPES}
          lang={lang}
        />

        {/* 1.1 Official Certification Trust Bar & Schematic Values Strip */}
        <SchematicValueStrip lang={lang} />

        {/* 2. Inspirasi Resep & Sajian Istimewa (dengan Filter Suasana Rasa Terintegrasi & 6 Cards Grid) */}
        <MerryMomentsBentoSection
          moments={MOMENTS}
          onSelectMoment={() => {}}
          onSelectRecipe={() => {}}
          recipes={RECIPES}
          activeMood={activeMood}
          onSelectMood={handleSelectMood}
          lang={lang}
        />

        {/* 3. Kitchen Lab Interactive Section (Troubleshooter & Science) */}
        <KitchenLabSection
          onSelectGuide={() => {}}
          lang={lang}
        />

        {/* 4. Products Showcase */}
        <ProductCatalog
          products={PRODUCTS}
          onSelectProduct={() => {}}
          lang={lang}
        />

        {/* 5. Bakery Business & Savings Calculator Portal */}
        <BakeryBusinessSection
          lang={lang}
        />

        {/* 6. Article & Roadshow Events Section */}
        <ArticleRoadshowSection
          lang={lang}
        />

        {/* 7. Brand Trust & Enterprise Client Showcase & CTA */}
        <BrandTrustSection
          lang={lang}
        />
      </main>

      {/* Global Comprehensive Footer */}
      <Footer
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={() => setLang((prev) => (prev === 'ID' ? 'EN' : 'ID'))}
      />
    </div>
  );
}

export default App;

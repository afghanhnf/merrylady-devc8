import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ChevronDown,
  HeartHandshake,
  Coffee,
  Cake,
  Flame,
  Calendar,
  FileText,
  Store,
  Users,
  ArrowRight,
  Menu,
  X,
  Globe,
} from 'lucide-react';
import { PRODUCTS } from '../data/merryladyData';
import type { Product, MomentItem } from '../data/merryladyData';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, targetId?: string) => void;
  onOpenSearch?: () => void;
  onOpenSampleModal?: (preselectedProduct?: Product) => void;
  onSelectProduct?: (product: Product) => void;
  onSelectMoment?: (moment: MomentItem) => void;
  lang: 'ID' | 'EN';
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  lang,
  onToggleLang,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (menuKey: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  const handleLinkClick = (view: string, targetId?: string) => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    onNavigate(view, targetId);
  };

  return (
    <header className="nav-header">
      <div className="container">
        <nav className="nav-pill-wrapper" aria-label="Main Navigation">
          {/* Brand Logo (Acts as Home / Beranda) */}
          <div
            onClick={() => handleLinkClick('home')}
            className="nav-brand"
            role="button"
            tabIndex={0}
            title={lang === 'ID' ? 'Kembali ke Beranda' : 'Return to Home'}
          >
            <img
              src="/logo%20merrylady.png"
              alt="Merrylady Indonesia"
              className="nav-brand-logo"
            />
          </div>

          {/* Desktop Nav Links (Clean text without distracting rainbow icons, no line-wrapping) */}
          <ul className="nav-links">
            {/* 1. Merry Moments */}
            <li
              className="nav-item-dropdown-container"
              onMouseEnter={() => handleMouseEnter('moments')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleLinkClick('moments')}
                className={`nav-link-btn ${currentView === 'moments' ? 'active' : ''}`}
              >
                <span>Merry Moments</span>
                <ChevronDown size={14} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'moments' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="mega-dropdown-panel"
                  >
                    <div className="mega-grid-moments">
                      <div className="mega-section-title">
                        {lang === 'ID' ? 'Momen Pilihan' : 'Curated Moments'}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <div
                          className="mega-item-link"
                          onClick={() => handleLinkClick('moments', 'family')}
                        >
                          <div className="mega-item-icon-wrap">
                            <HeartHandshake size={16} />
                          </div>
                          <div>
                            <div className="mega-item-name">Family Baking</div>
                            <div className="mega-item-desc">
                              {lang === 'ID'
                                ? 'Membuat kenangan hangat bersama anak & keluarga'
                                : 'Warm baking memories with kids & family'}
                            </div>
                          </div>
                        </div>

                        <div
                          className="mega-item-link"
                          onClick={() => handleLinkClick('moments', 'cafe')}
                        >
                          <div className="mega-item-icon-wrap">
                            <Coffee size={16} />
                          </div>
                          <div>
                            <div className="mega-item-name">Café at Home</div>
                            <div className="mega-item-desc">
                              {lang === 'ID'
                                ? 'Minuman estetik & cloud foam barista'
                                : 'Aesthetic beverages & barista cloud foam'}
                            </div>
                          </div>
                        </div>

                        <div
                          className="mega-item-link"
                          onClick={() => handleLinkClick('moments', 'celebration')}
                        >
                          <div className="mega-item-icon-wrap">
                            <Cake size={16} />
                          </div>
                          <div>
                            <div className="mega-item-name">Celebration & Party</div>
                            <div className="mega-item-desc">
                              {lang === 'ID'
                                ? 'Kue ulang tahun dan selebrasi istimewa'
                                : 'Celebration cakes & special party creations'}
                            </div>
                          </div>
                        </div>

                        <div
                          className="mega-item-link"
                          onClick={() => handleLinkClick('moments', 'artisan')}
                        >
                          <div className="mega-item-icon-wrap">
                            <Flame size={16} />
                          </div>
                          <div>
                            <div className="mega-item-name">Warm Oven Joy</div>
                            <div className="mega-item-desc">
                              {lang === 'ID'
                                ? 'Basque cheesecake & custard tart hangat'
                                : 'Basque cheesecake & warm custard tarts'}
                            </div>
                          </div>
                        </div>

                        <div
                          className="mega-item-link"
                          onClick={() => handleLinkClick('moments', 'business')}
                        >
                          <div className="mega-item-icon-wrap">
                            <Store size={16} />
                          </div>
                          <div>
                            <div className="mega-item-name">{lang === 'ID' ? 'Solusi Usaha' : 'Bakery Business'}</div>
                            <div className="mega-item-desc">{lang === 'ID' ? 'Efisiensi HPP & stabilitas produksi kafe/bakery' : 'Cost efficiency & high-yield stability'}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* 2. Produk */}
            <li
              className="nav-item-dropdown-container"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleLinkClick('products')}
                className={`nav-link-btn ${currentView === 'products' ? 'active' : ''}`}
              >
                <span>{lang === 'ID' ? 'Produk' : 'Products'}</span>
                <ChevronDown size={14} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="mega-dropdown-panel"
                  >
                    <div className="mega-section-title">
                      {lang === 'ID' ? 'Lini Produk Profesional Merrylady' : 'Professional Product Line'}
                    </div>
                    <div className="mega-grid-products">
                      {PRODUCTS.map((prod) => {
                        const enProductSubtitles: Record<string, string> = {
                          shineroad: 'Smooth & High-Stability Non-Dairy Whip Topping',
                          cheese_filling: 'Pure, Smooth & Savory Ready-to-Bake Cheese Cream',
                          susu_beras: 'Lactose-Free Enzymatic Plant-Based Rice Milk',
                          skibbo: 'Abundant High-Yield Whipping Cream for Bakeries',
                          tart_filling: 'Silky Ready-to-Bake Custard Filling for Tarts',
                          multi_cream: 'All-Purpose Liquid Cream for Desserts & Cloud Foam',
                        };
                        const subTitleText = lang === 'ID' ? prod.subTitle : (enProductSubtitles[prod.id] || prod.subTitle);

                        return (
                          <div
                            key={prod.id}
                            className="mega-prod-card"
                            onClick={() => {
                              setActiveDropdown(null);
                              handleLinkClick('products');
                            }}
                          >
                            <div className="mega-prod-img-box">
                              <img
                                src={prod.image}
                                alt={prod.name}
                                className="mega-prod-img"
                              />
                            </div>
                            <div className="mega-prod-info">
                              <span className="mega-prod-cat">
                                {prod.category}
                              </span>
                              <div className="mega-prod-name">{prod.name}</div>
                              <div className="mega-prod-desc">
                                {subTitleText}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div
                      style={{
                        marginTop: '12px',
                        paddingTop: '10px',
                        borderTop: '1px solid rgba(0,0,0,0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px',
                      }}
                    >
                      <span style={{ fontSize: '0.76rem', color: '#6E6270' }}>
                        {lang === 'ID'
                          ? '100% Halal MUI & BPJPH • Bebas Lemak Trans • Distribusi Resmi PT Sukanda Djaya'
                          : '100% Halal Certified • Trans-Fat Free • PT Sukanda Djaya Cold-Chain'}
                      </span>
                      <button
                        onClick={() => handleLinkClick('products')}
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color: '#8A1A7B',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <span>{lang === 'ID' ? 'Lihat Semua Produk' : 'View All Products'}</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* 3. Kitchen Lab */}
            <li>
              <button
                onClick={() => handleLinkClick('kitchen-lab')}
                className={`nav-link-btn ${currentView === 'kitchen-lab' ? 'active' : ''}`}
              >
                <span>Kitchen Lab</span>
              </button>
            </li>

            {/* 4. Bakery Business */}
            <li>
              <button
                onClick={() => handleLinkClick('business')}
                className={`nav-link-btn ${currentView === 'business' ? 'active' : ''}`}
              >
                <span>Bakery Business</span>
              </button>
            </li>

            {/* 5. Publikasi (Artikel & Roadshows) */}
            <li
              className="nav-item-dropdown-container"
              onMouseEnter={() => handleMouseEnter('articles')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleLinkClick('articles')}
                className={`nav-link-btn ${currentView === 'articles' ? 'active' : ''}`}
              >
                <span>{lang === 'ID' ? 'Publikasi' : 'Publication'}</span>
                <ChevronDown size={14} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'articles' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="mega-dropdown-panel"
                  >
                    <div className="mega-grid-articles">
                      <div className="mega-section-title">
                        {lang === 'ID' ? 'Publikasi & Agenda' : 'Publications & Agenda'}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        {/* 1. Article */}
                        <div
                          className="mega-item-link"
                          onClick={() => handleLinkClick('articles')}
                        >
                          <div className="mega-item-icon-wrap">
                            <FileText size={16} />
                          </div>
                          <div>
                            <div className="mega-item-name">{lang === 'ID' ? 'Article & Tips' : 'Articles & Tips'}</div>
                            <div className="mega-item-desc">{lang === 'ID' ? 'Kumpulan artikel tren, edukasi bahan, dan inspirasi kreasi' : 'Latest baking trends, ingredient insights & tips'}</div>
                          </div>
                        </div>

                        {/* 2. Event */}
                        <div
                          className="mega-item-link"
                          onClick={() => handleLinkClick('articles', 'roadshow')}
                        >
                          <div className="mega-item-icon-wrap">
                            <Calendar size={16} />
                          </div>
                          <div>
                            <div className="mega-item-name">{lang === 'ID' ? 'Event & Roadshow' : 'Events & Roadshows'}</div>
                            <div className="mega-item-desc">{lang === 'ID' ? 'Jadwal baking demo, workshop chef & masterclass kota Anda' : 'Demo schedules, chef workshops & masterclasses'}</div>
                          </div>
                        </div>

                        {/* 3. Community */}
                        <div
                          className="mega-item-link"
                          onClick={() => handleLinkClick('articles', 'community')}
                        >
                          <div className="mega-item-icon-wrap">
                            <Users size={16} />
                          </div>
                          <div>
                            <div className="mega-item-name">{lang === 'ID' ? 'Community' : 'Community'}</div>
                            <div className="mega-item-desc">{lang === 'ID' ? 'Wadah bertukar kreasi komunitas baker, pastry chef & UMKM' : 'Bakers, pastry chefs & home entrepreneurs network'}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* 6. Tentang Kami */}
            <li>
              <button
                onClick={() => handleLinkClick('about')}
                className={`nav-link-btn ${currentView === 'about' ? 'active' : ''}`}
              >
                {lang === 'ID' ? 'Tentang Kami' : 'About Us'}
              </button>
            </li>
          </ul>

          {/* Nav Right Actions (Clean M3 monochrome icon style, no extra sample button) */}
          <div className="nav-actions">
            {/* Multi-language Toggle (ID / EN) */}
            <button
              onClick={onToggleLang}
              className="lang-switch-btn"
              aria-label="Toggle language"
              title="Ganti Bahasa (ID / EN)"
            >
              <Globe size={14} />
              <span>{lang === 'ID' ? 'ID' : 'EN'}</span>
            </button>

            {/* Search Pill */}
            <button
              onClick={() => {}}
              className="nav-search-trigger"
              aria-label="Cari"
            >
              <Search size={15} strokeWidth={2} />
              <span>{lang === 'ID' ? 'Cari' : 'Search'}</span>
            </button>

            {/* Contact CTA Button */}
            <button
              onClick={() => handleLinkClick('contact')}
              className="btn btn-primary"
              style={{ padding: '8px 18px', fontSize: '0.85rem', fontWeight: 600, whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              {lang === 'ID' ? 'Hubungi Kami' : 'Contact Us'}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Buka Menu Navigasi"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: '#FFFFFF',
              borderBottom: '1.5px solid rgba(138, 26, 123, 0.15)',
              padding: '20px',
              pointerEvents: 'auto',
              boxShadow: '0 12px 36px rgba(0,0,0,0.1)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={() => handleLinkClick('home')}
                className={`nav-link-btn ${currentView === 'home' ? 'active' : ''}`}
                style={{ width: '100%', justifyContent: 'flex-start' }}
              >
                {lang === 'ID' ? 'Beranda' : 'Home'}
              </button>

              <button
                onClick={() => handleLinkClick('moments')}
                className={`nav-link-btn ${currentView === 'moments' ? 'active' : ''}`}
                style={{ width: '100%', justifyContent: 'flex-start' }}
              >
                {lang === 'ID' ? 'Merry Moments (Hub Konten)' : 'Merry Moments (Creation Hub)'}
              </button>

              <button
                onClick={() => handleLinkClick('products')}
                className={`nav-link-btn ${currentView === 'products' ? 'active' : ''}`}
                style={{ width: '100%', justifyContent: 'flex-start' }}
              >
                {lang === 'ID' ? 'Produk & Spesifikasi' : 'Products & Specs'}
              </button>

              <button
                onClick={() => handleLinkClick('kitchen-lab')}
                className={`nav-link-btn ${currentView === 'kitchen-lab' ? 'active' : ''}`}
                style={{ width: '100%', justifyContent: 'flex-start' }}
              >
                {lang === 'ID' ? 'Kitchen Lab (Anti-Gagal & Edukasi)' : 'Kitchen Lab (Zero-Fail Guide)'}
              </button>

              <button
                onClick={() => handleLinkClick('business')}
                className={`nav-link-btn ${currentView === 'business' ? 'active' : ''}`}
                style={{ width: '100%', justifyContent: 'flex-start' }}
              >
                {lang === 'ID' ? 'Bakery Business (UMKM & B2B)' : 'Bakery Business & Solutions'}
              </button>

              <button
                onClick={() => handleLinkClick('articles')}
                className={`nav-link-btn ${currentView === 'articles' ? 'active' : ''}`}
                style={{ width: '100%', justifyContent: 'flex-start' }}
              >
                {lang === 'ID' ? 'Artikel & Jadwal Roadshow' : 'Articles & Roadshows'}
              </button>

              <button
                onClick={() => handleLinkClick('about')}
                className={`nav-link-btn ${currentView === 'about' ? 'active' : ''}`}
                style={{ width: '100%', justifyContent: 'flex-start' }}
              >
                {lang === 'ID' ? 'Tentang Kami & PT Sukanda Djaya' : 'About Us & Distribution'}
              </button>

              <button
                onClick={() => handleLinkClick('contact')}
                className={`nav-link-btn ${currentView === 'contact' ? 'active' : ''}`}
                style={{ width: '100%', justifyContent: 'flex-start' }}
              >
                {lang === 'ID' ? 'Kontak & Cabang 30+ Kota' : 'Contact & 30+ Branches'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

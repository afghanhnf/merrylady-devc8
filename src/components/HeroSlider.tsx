import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Product } from '../data/merryladyData';

interface HeroSliderProps {
  products: Product[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  onViewProductDetail: (product: Product) => void;
  onExploreRecipes: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  products,
  currentIndex,
  onSelectIndex,
  onViewProductDetail,
  onExploreRecipes,
}) => {
  const currentProduct = products[currentIndex];

  const handlePrev = () => {
    onSelectIndex(currentIndex === 0 ? products.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    onSelectIndex(currentIndex === products.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section id="beranda" className="hero-section">
      {/* Creative Background Layers */}
      <div
        className="hero-ambient-mesh"
        style={{ background: currentProduct.theme.meshGradient }}
      />
      <div
        className="hero-concentric-arch"
        style={{ background: currentProduct.theme.bgTint }}
      />
      <div className="hero-concentric-arch-inner" />

      {/* 90° Rotated Typography Watermark */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProduct.id + '-watermark'}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="hero-vertical-watermark"
          style={{
            WebkitTextStroke: `1.5px ${currentProduct.theme.primary}26`,
          }}
        >
          {currentProduct.theme.watermark}
        </motion.div>
      </AnimatePresence>

      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Editorial Typography & Copy */}
          <div className="hero-content">
            {/* Halal & Distribution Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="m3-badge primary">
                100% Halal MUI & BPJPH • Distribusi Resmi PT Sukanda Djaya
              </span>
            </motion.div>

            {/* Headline & Description Animated on Change */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.id + '-text'}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <h1 className="hero-title">
                  {currentProduct.heroHeadline.split('.')[0]}.
                  <span style={{ color: currentProduct.theme.primary }}>
                    {currentProduct.heroHeadline.split('.')[1] || currentProduct.name}
                  </span>
                </h1>

                <p className="hero-desc" style={{ marginTop: '16px' }}>
                  {currentProduct.heroDescription}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Call to Actions */}
            <div className="hero-ctas">
              <button
                onClick={() => onViewProductDetail(currentProduct)}
                className="btn btn-primary"
                style={{ backgroundColor: currentProduct.theme.primary }}
              >
                Lihat Spesifikasi
              </button>
              <button onClick={onExploreRecipes} className="btn btn-outline">
                Inspirasi Kreasi
              </button>
            </div>

            {/* Social Proof Trust Stack */}
            <div className="hero-trust-box">
              <div className="hero-trust-avatars">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=100&auto=format&fit=crop&q=80"
                  alt="Chef Partner"
                  className="trust-avatar"
                />
                <img
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&auto=format&fit=crop&q=80"
                  alt="Pastry Baker"
                  className="trust-avatar"
                />
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Barista"
                  className="trust-avatar"
                />
              </div>
              <div className="trust-text">
                <strong>Dipercaya 10.000+ Pelaku Usaha</strong>
                Pilihan utama hotel, restoran, bakery ternama & kafe di Indonesia
              </div>
            </div>
          </div>

          {/* Right Column: 3D Product Packaging Stage */}
          <div className="hero-product-stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.id + '-pack'}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -30 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                className="hero-pack-img-wrap"
              >
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="hero-pack-img"
                />
              </motion.div>
            </AnimatePresence>

            {/* Floating Slider Navigation Controls */}
            <div className="hero-slider-controls">
              <button
                onClick={handlePrev}
                className="slider-btn"
                aria-label="Produk Sebelumnya"
              >
                <ChevronLeft size={18} strokeWidth={2.4} />
              </button>

              <div className="slider-dots">
                {products.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => onSelectIndex(idx)}
                    className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
                    style={{
                      backgroundColor:
                        idx === currentIndex
                          ? currentProduct.theme.primary
                          : undefined,
                    }}
                    aria-label={`Pilih produk ${p.name}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="slider-btn"
                aria-label="Produk Selanjutnya"
              >
                <ChevronRight size={18} strokeWidth={2.4} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

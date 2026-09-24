import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download } from 'lucide-react';
import { PRODUCTS } from '../../data/merryladyData';
import type { Product } from '../../data/merryladyData';

interface ProductsViewProps {
  onSelectProduct: (product: Product) => void;
  onOpenSampleModal: (product?: Product) => void;
  lang?: 'ID' | 'EN';
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  onSelectProduct,
  onOpenSampleModal,
  lang = 'ID',
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = [
    'Semua',
    'Whip Topping',
    'Pastry Fillings',
    'Creams & Plant-Based',
  ];

  const filteredProducts =
    activeCategory === 'Semua'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="landing-view-wrapper">
      {/* Hero Header */}
      <section className="landing-page-hero">
        <div className="container">
          <span className="m3-badge primary" style={{ marginBottom: '14px' }}>
            Bahan Baku Profesional
          </span>
          <h1 className="landing-page-title">
            {lang === 'ID' ? 'Katalog Produk & Spesifikasi Teknis' : 'Product Catalog & Technical Specs'}
          </h1>
          <p className="landing-page-subtitle">
            {lang === 'ID'
              ? 'Seluruh lini produk Merrylady diproduksi dengan teknologi fraksinasi modern bebas lemak trans, tersertifikasi 100% Halal MUI/BPJPH, dan didistribusikan secara nasional oleh PT Sukanda Djaya.'
              : 'The complete Merrylady product range made with zero trans-fat technology, 100% Halal certified, and distributed nationwide by PT Sukanda Djaya.'}
          </p>

          {/* Category Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '32px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`moment-chip ${activeCategory === cat ? 'active' : 'inactive'}`}
                style={{ fontSize: '0.88rem', padding: '8px 20px' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="products-grid">
            <AnimatePresence>
              {filteredProducts.map((prod) => (
                <motion.div
                  key={prod.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="product-card"
                  onClick={() => onSelectProduct(prod)}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          color: prod.theme.primary,
                          background: prod.theme.primaryLight,
                          padding: '3px 10px',
                          borderRadius: '9999px',
                          textTransform: 'uppercase',
                        }}
                      >
                        {prod.category}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: '#6E6270', fontWeight: 600 }}>
                        {prod.specs.netto}
                      </span>
                    </div>

                    <div className="product-card-img-wrap">
                      {/* Memphis Animation Decorative Layer */}
                      <div className="product-memphis-layer" aria-hidden="true">
                        <div className="memphis-shape memphis-ring" />
                        <div className="memphis-shape memphis-cross">
                          <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
                            <path d="M6.5 0h3v6.5H16v3H9.5V16h-3V9.5H0v-3h6.5z" />
                          </svg>
                        </div>
                        <div className="memphis-shape memphis-squiggle">
                          <svg viewBox="0 0 32 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M2 8c4-6 8-6 12 0s8 6 12 0" />
                          </svg>
                        </div>
                        <div className="memphis-shape memphis-dots">
                          <span className="memphis-dot" />
                          <span className="memphis-dot" />
                          <span className="memphis-dot" />
                          <span className="memphis-dot" />
                        </div>
                        <div className="memphis-shape memphis-sparkle">
                          <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
                            <path d="M8 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
                          </svg>
                        </div>
                      </div>

                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="product-card-img"
                      />
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '6px' }}>
                      {prod.name}
                    </h3>
                    <p style={{ fontSize: '0.84rem', color: '#6E6270', lineHeight: 1.5, marginBottom: '16px' }}>
                      {prod.subTitle}
                    </p>

                    <div style={{ background: '#FAF7FB', borderRadius: '16px', padding: '14px', marginBottom: '20px' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1E1A20', marginBottom: '6px' }}>
                        Aplikasi Utama:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {prod.applications.slice(0, 3).map((app, idx) => (
                          <span
                            key={idx}
                            style={{
                              fontSize: '0.72rem',
                              background: '#FFFFFF',
                              border: '1px solid rgba(0,0,0,0.06)',
                              padding: '2px 8px',
                              borderRadius: '6px',
                              color: '#4E444E',
                            }}
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(prod);
                      }}
                      className="btn btn-outline"
                      style={{ padding: '8px 14px', fontSize: '0.8rem', flexGrow: 1 }}
                    >
                      Detail Spek
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenSampleModal(prod);
                      }}
                      className="btn btn-primary"
                      style={{ padding: '8px 16px', fontSize: '0.8rem', backgroundColor: prod.theme.primary }}
                    >
                      Minta Sampel
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Download Technical Catalog Bar */}
          <div
            style={{
              marginTop: '60px',
              background: 'linear-gradient(135deg, #8A1A7B 0%, #3B0534 100%)',
              color: '#FFFFFF',
              borderRadius: '30px',
              padding: 'clamp(28px, 4vw, 44px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
            }}
          >
            <div>
              <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, display: 'inline-block', marginBottom: '8px' }}>
                TECHNICAL BROCHURE 2026
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '6px' }}>
                Unduh Lembar Spesifikasi Teknis & Brosur Resmi (PDF)
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#F3E8FF', maxWidth: '600px' }}>
                Lengkap dengan sertifikat analisis, tabel nutrisi, panduan penanganan rantai pasok, dan rasio pencampuran adonan.
              </p>
            </div>

            <button
              onClick={() => onOpenSampleModal()}
              className="btn btn-primary"
              style={{ background: '#FFCD57', color: '#1E1A20', fontWeight: 700, padding: '14px 28px' }}
            >
              <Download size={18} />
              <span>Minta Lembar Spek Lengkap</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

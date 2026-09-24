import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Product } from '../data/merryladyData';

interface ProductCatalogProps {
  products: Product[];
  onSelectProduct?: (product: Product) => void;
  lang?: 'ID' | 'EN';
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  onSelectProduct,
  lang = 'ID',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: lang === 'ID' ? 'Semua' : 'All Products', cat: 'Semua' },
    { id: 'whip', label: 'Whip Topping', cat: 'Whip Topping' },
    { id: 'fillings', label: 'Pastry Fillings', cat: 'Pastry Fillings' },
    { id: 'plant-based', label: 'Creams & Plant-Based', cat: 'Creams & Plant-Based' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => {
          const matched = categories.find((c) => c.id === selectedCategory);
          return matched ? p.category === matched.cat : true;
        });

  return (
    <motion.section
      id="produk"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
      className="section-padding"
      style={{ position: 'relative' }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="m3-badge">
            {lang === 'ID' ? 'Katalog Pangan Profesional' : 'Professional Foodservice Line'}
          </span>
          <h2 className="section-title">
            {lang === 'ID' ? 'Produk Unggulan' : 'Featured Products'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ID'
              ? 'Diformulasikan secara presisi untuk memenuhi standar industri tata boga modern, menghadirkan kestabilan superior dan cita rasa yang memikat.'
              : 'Precisely formulated to meet modern culinary standards, delivering superior stability and delightful taste.'}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`filter-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div layout className="products-grid">
          <AnimatePresence>
            {filteredProducts.map((product) => {
              const enProductData: Record<string, { tagline: string; netto: string }> = {
                shineroad: {
                  tagline: 'Versatile Topping Cream with Silky Smooth Texture & Maximum Piping Hold',
                  netto: '1 kg (12 packs / carton)',
                },
                cheese_filling: {
                  tagline: 'Premium Ready-to-Bake Pure Cheese Filling for Pastries & Bread',
                  netto: '1 kg (12 packs / carton)',
                },
                susu_beras: {
                  tagline: 'Premium Plant-Based Rice Milk with Natural Enzymatic Sweetness',
                  netto: '1 Liter (12 packs / carton)',
                },
                skibbo: {
                  tagline: 'High-Expansion Whipped Cream with Superior Yield for Bakery Operations',
                  netto: '1 kg (12 packs / carton)',
                },
                tart_filling: {
                  tagline: 'Silky Ready-to-Bake Custard Filling for Portuguese & Fruit Tarts',
                  netto: '1 kg (12 packs / carton)',
                },
                multi_cream: {
                  tagline: 'All-Purpose Liquid Cream for Velvet Cloud Foam & Pastry Fillings',
                  netto: '1 kg (12 packs / carton)',
                },
              };

              const enProd = enProductData[product.id];
              const taglineText = lang === 'ID' ? product.tagline : (enProd?.tagline || product.tagline);
              const nettoText = lang === 'ID' ? product.specs.netto : (enProd?.netto || product.specs.netto.replace(/1 karton isi 12 pak/i, '12 packs / carton'));

              return (
                <motion.article
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3 }}
                  className="product-card"
                  onClick={() => onSelectProduct?.(product)}
                >
                  <div className="product-card-badge">{product.category}</div>

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
                      src={product.image}
                      alt={product.name}
                      className="product-card-img"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="product-card-title">{product.name}</h3>
                  <p className="product-card-desc">
                    {taglineText}
                  </p>

                  <div className="product-card-footer">
                    <span className="product-spec-pill">{nettoText}</span>
                    <span
                      className="product-card-cta"
                      style={{ color: product.theme.primary }}
                    >
                      {lang === 'ID' ? 'Detail Spesifikasi →' : 'Product Specs →'}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

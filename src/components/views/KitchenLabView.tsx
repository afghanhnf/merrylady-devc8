import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Lightbulb, ArrowRight } from 'lucide-react';
import { KITCHEN_LAB_GUIDES, BAKING_TROUBLESHOOTERS } from '../../data/merryladyData';
import type { KitchenLabGuide, Product } from '../../data/merryladyData';

interface KitchenLabViewProps {
  onSelectGuide: (guide: KitchenLabGuide) => void;
  onSelectProduct?: (product: Product) => void;
  lang?: 'ID' | 'EN';
}

export const KitchenLabView: React.FC<KitchenLabViewProps> = ({
  onSelectGuide,
  lang = 'ID',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Temperature Control', 'Anti-Fail Guide', 'Ingredient Science', 'Masterclass Video'];

  const filteredGuides =
    selectedCategory === 'Semua'
      ? KITCHEN_LAB_GUIDES
      : KITCHEN_LAB_GUIDES.filter((g) => g.category === selectedCategory);

  return (
    <div className="landing-view-wrapper">
      {/* Hero Header */}
      <section className="landing-page-hero">
        <div className="container">
          <span className="m3-badge primary" style={{ marginBottom: '14px' }}>
            <FlaskConical size={14} />
            <span>Merrylady Culinary Science Academy</span>
          </span>
          <h1 className="landing-page-title">
            {lang === 'ID' ? 'Kitchen Lab & Anti-Fail Guide' : 'Kitchen Lab & Anti-Fail Academy'}
          </h1>
          <p className="landing-page-subtitle">
            {lang === 'ID'
              ? 'Pusat riset dan edukasi sains baking. Mempelajari struktur molekul lemak nabati, kontrol suhu emulsi, dan teknik anti-gagal untuk memastikan kue Anda selalu tampil sempurna.'
              : 'The baking research and science education hub. Learn vegetable fat emulsion structure, temperature control, and zero-fail techniques.'}
          </p>

          {/* Filter Chips */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '32px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`moment-chip ${selectedCategory === cat ? 'active' : 'inactive'}`}
                style={{ fontSize: '0.88rem', padding: '8px 20px' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Guides Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {filteredGuides.map((guide) => (
              <motion.div
                key={guide.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  border: '1.5px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 8px 28px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onClick={() => onSelectGuide(guide)}
              >
                <div style={{ position: 'relative', height: '200px' }}>
                  <img src={guide.image} alt={guide.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      background: '#8A1A7B',
                      color: '#FFFFFF',
                      padding: '3px 12px',
                      borderRadius: '9999px',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                    }}
                  >
                    {guide.category}
                  </span>
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '14px',
                      right: '14px',
                      background: 'rgba(0,0,0,0.7)',
                      color: '#FFFFFF',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      fontSize: '0.72rem',
                    }}
                  >
                    ⏱ {guide.readTime}
                  </span>
                </div>

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.18rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.35 }}>
                    {guide.title}
                  </h3>

                  <p style={{ fontSize: '0.86rem', color: '#4E444E', lineHeight: 1.5, marginBottom: '18px' }}>
                    {guide.summary}
                  </p>

                  <div
                    style={{
                      background: '#FAF4FB',
                      borderRadius: '16px',
                      padding: '14px',
                      borderLeft: '3px solid #8A1A7B',
                      marginBottom: '20px',
                      fontSize: '0.82rem',
                    }}
                  >
                    <div style={{ fontWeight: 700, color: '#8A1A7B', marginBottom: '4px' }}>
                      🔑 Intisari Sains:
                    </div>
                    <div style={{ color: '#3A323D', lineHeight: 1.4 }}>
                      {guide.keyTakeaway}
                    </div>
                  </div>

                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    <span style={{ fontSize: '0.8rem', color: '#6E6270' }}>
                      Tingkat: <strong>{guide.difficulty}</strong>
                    </span>
                    <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#8A1A7B', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span>Buka Panduan</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Full Interactive Troubleshooting Master Matrix */}
          <div style={{ marginTop: '80px', background: '#FAF7FB', borderRadius: '36px', padding: 'clamp(32px, 5vw, 60px)', border: '1.5px solid rgba(138,26,123,0.12)' }}>
            <div className="section-header" style={{ marginBottom: '40px' }}>
              <span className="m3-badge primary">Anti-Fail Matrix</span>
              <h2 className="section-title">Solusi Kendala Baking Cepat & Tepat</h2>
              <p className="section-subtitle">
                Temukan akar masalah kegagalan adonan atau krim dan dapatkan formula perbaikan dari tim teknis kuliner Hi-Road & Merrylady.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {BAKING_TROUBLESHOOTERS.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '24px',
                    padding: '24px',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 4px 18px rgba(0,0,0,0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#B45309', fontWeight: 700, fontSize: '0.85rem', marginBottom: '8px' }}>
                      <Lightbulb size={16} />
                      <span>Masalah:</span>
                    </div>
                    <h4 style={{ fontSize: '1.08rem', fontWeight: 800, marginBottom: '12px' }}>
                      {item.problem}
                    </h4>

                    <div style={{ fontSize: '0.82rem', color: '#4E444E', lineHeight: 1.5, marginBottom: '14px' }}>
                      <strong>Penyebab:</strong> {item.cause}
                    </div>

                    <div style={{ background: '#FAF2F9', padding: '12px 14px', borderRadius: '12px', borderLeft: '3px solid #8A1A7B', fontSize: '0.82rem', color: '#1E1A20', lineHeight: 1.5, marginBottom: '14px' }}>
                      <strong>Solusi:</strong> {item.solution}
                    </div>
                  </div>

                  <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(0,0,0,0.06)', fontSize: '0.78rem', color: '#6E6270' }}>
                    💡 <strong>Pro Tip:</strong> {item.proTip}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

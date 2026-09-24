import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, ChevronDown, CheckCircle2, Lightbulb, BookOpen } from 'lucide-react';
import { BAKING_TROUBLESHOOTERS, KITCHEN_LAB_GUIDES } from '../data/merryladyData';
import type { KitchenLabGuide } from '../data/merryladyData';

interface KitchenLabSectionProps {
  onOpenKitchenLabHub?: () => void;
  onSelectGuide?: (guide: KitchenLabGuide) => void;
  lang: 'ID' | 'EN';
}

export const KitchenLabSection: React.FC<KitchenLabSectionProps> = ({
  onSelectGuide,
  lang,
}) => {
  const [activeTroubleId, setActiveTroubleId] = useState<string>(BAKING_TROUBLESHOOTERS[0].id);

  const toggleTrouble = (id: string) => {
    setActiveTroubleId((prev) => (prev === id ? '' : id));
  };

  return (
    <motion.section
      id="kitchen-lab"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF7FB 100%)' }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="m3-badge primary">
            <FlaskConical size={14} />
            <span>Kitchen Lab & Science Academy</span>
          </span>
          <h2 className="section-title">
            {lang === 'ID'
              ? 'Tekstur Yang Sempurna & Anti-Gagal'
              : 'Perfect Texture & Zero-Fail Baking'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ID'
              ? 'Edukasi teknik pastry profesional, kontrol suhu emulsi, dan panduan praktis untuk mengatasi setiap kendala pembuatan kue di dapur Anda.'
              : 'Professional pastry techniques, emulsion temperature control, and practical troubleshooting guides.'}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="kitchen-lab-grid">
          {/* Left Column: Interactive Baking Troubleshooter */}
          <div className="lab-troubleshooter-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <Lightbulb size={22} style={{ color: '#D97706' }} />
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>
                  {lang === 'ID' ? 'Interactive Baking Troubleshooter' : 'Interactive Troubleshooter'}
                </h3>
                <p style={{ fontSize: '0.82rem', color: '#6E6270' }}>
                  {lang === 'ID' ? 'Pilih kendala yang sering Anda temui saat memanggang:' : 'Select common baking challenges:'}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {BAKING_TROUBLESHOOTERS.map((item) => {
                const enTroubleshooters: Record<string, { problem: string; cause: string; solution: string; proTip: string }> = {
                  'trouble-melt': {
                    problem: 'Whipped Cream Melts or Deflates Quickly at Ambient Room Temperature',
                    cause: 'Initial whipping temperature was too warm (>10°C) or using regular dairy cream with a low melting threshold.',
                    solution: 'Use Merrylady ShineRoad Non-Dairy Whip Topping with superior room-temperature stability and firm vegetable fractionation formula.',
                    proTip: 'Ensure the cream is completely thawed in the chiller (2°C - 7°C) for at least 12 hours before whipping.',
                  },
                  'trouble-tart-collapse': {
                    problem: 'Egg Tart Filling Sinks, Deflates, or Becomes Watery After Baking',
                    cause: 'Imbalanced moisture and egg ratio, or oven bottom heat too low causing steam to remain trapped at the base.',
                    solution: 'Use ready-to-bake Merrylady Tart Filling formulated for high heat tolerance without shrinkage or separation.',
                    proTip: 'Preheat oven for 15 mins and bake at 220°C top heat & 120°C bottom heat for the ideal golden caramelization.',
                  },
                  'trouble-cheese-crack': {
                    problem: 'Basque Cheesecake Develops Deep Cracks Across the Center',
                    cause: 'Batter was mixed at high speed, trapping excessive micro-air bubbles that expand violently during baking.',
                    solution: 'Use smooth, homogenous Merrylady Cheese Filling without needing excessive high-speed mixing.',
                    proTip: 'Gently tap the baking pan onto the counter before placing in the oven to release large trapped air bubbles.',
                  },
                  'trouble-foam-sink': {
                    problem: 'Café Beverage Cloud Foam Sinks and Immediately Blends into the Drink',
                    cause: 'Foam density is too heavy due to under-frothing, or insufficient ice cubes acting as a buoyant surface support.',
                    solution: 'Froth Merrylady Multi Cream for 1-2 minutes until creating a light micro-foam texture before pouring over ice.',
                    proTip: 'Gently float foam over the back of a bar spoon along the rim of the glass.',
                  },
                };

                const enTrouble = enTroubleshooters[item.id];
                const problemText = lang === 'ID' ? item.problem : (enTrouble?.problem || item.problem);
                const causeText = lang === 'ID' ? item.cause : (enTrouble?.cause || item.cause);
                const solutionText = lang === 'ID' ? item.solution : (enTrouble?.solution || item.solution);
                const proTipText = lang === 'ID' ? item.proTip : (enTrouble?.proTip || item.proTip);
                const isOpen = activeTroubleId === item.id;

                return (
                  <div
                    key={item.id}
                    className={`trouble-item-accordion ${isOpen ? 'active' : ''}`}
                  >
                    <div
                      className="trouble-header"
                      onClick={() => toggleTrouble(item.id)}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '1.1rem' }}>⚠️</span>
                        <span>{problemText}</span>
                      </div>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease',
                          color: '#8A1A7B',
                        }}
                      />
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="trouble-body"
                        >
                          <div style={{ fontSize: '0.84rem', color: '#4E444E' }}>
                            <strong>{lang === 'ID' ? 'Penyebab Utama:' : 'Root Cause:'}</strong> {causeText}
                          </div>

                          <div className="trouble-solution-box">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: '#8A1A7B', marginBottom: '4px' }}>
                              <CheckCircle2 size={16} />
                              <span>{lang === 'ID' ? 'Solusi Ahli Chef:' : 'Master Chef Solution:'}</span>
                            </div>
                            <p style={{ lineHeight: 1.5 }}>{solutionText}</p>
                          </div>

                          <div style={{ fontSize: '0.8rem', color: '#6E6270', fontStyle: 'italic' }}>
                            💡 <strong>{lang === 'ID' ? 'Tips Pro:' : 'Pro Tip:'}</strong> {proTipText}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Featured Science Guides */}
          <div className="lab-guides-grid">
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '6px' }}>
              {lang === 'ID' ? 'Panduan Sains Terpopuler' : 'Popular Science Guides'}
            </h3>

            {KITCHEN_LAB_GUIDES.slice(0, 3).map((guide) => {
              const enGuides: Record<string, { title: string; category: string; readTime: string; summary: string }> = {
                'guide-whipping-temp': {
                  title: 'Temperature Control Secrets: Why Whip Topping Must Be Chilled at 2°C - 7°C',
                  category: 'Temperature Control',
                  readTime: '4 min read',
                  summary: 'Understanding vegetable fat emulsion structure and low-temperature crystallization to achieve maximum whipped overrun volume.',
                },
                'guide-egg-tart-browning': {
                  title: 'Custard Caramelization Science: How to Achieve the Perfect Golden Brûlée',
                  category: 'Anti-Fail Guide',
                  readTime: '5 min read',
                  summary: 'How natural sugar ratios and top-oven radiant heat create authentic Portuguese egg tart blister spots without drying out the custard.',
                },
                'guide-cloud-foam-beverage': {
                  title: 'Salt Foam & Cloud Cream Techniques: Crafting Elegant Floating Drink Layers',
                  category: 'Masterclass Guide',
                  readTime: '6 min read',
                  summary: 'Practical guide for baristas and coffee lovers to produce savory-sweet velvety foam layers that never sink to the bottom.',
                },
                'guide-plant-based-steaming': {
                  title: 'The Science of Rice Milk: Why Enzymatic Hydrolysis Produces Silky Microfoam',
                  category: 'Ingredient Science',
                  readTime: '5 min read',
                  summary: 'Natural enzymatic hydrolysis breaks rice starches into soluble sweetness that froths into smooth, lactose-free barista microfoam.',
                },
              };

              const enGuide = enGuides[guide.id];
              const titleText = lang === 'ID' ? guide.title : (enGuide?.title || guide.title);
              const categoryText = lang === 'ID' ? guide.category : (enGuide?.category || guide.category);
              const readTimeText = lang === 'ID' ? guide.readTime : (enGuide?.readTime || guide.readTime.replace(/menit baca/i, 'min read'));
              const summaryText = lang === 'ID' ? guide.summary : (enGuide?.summary || guide.summary);

              return (
                <div
                  key={guide.id}
                  className="lab-guide-card"
                  onClick={() => onSelectGuide?.(guide)}
                >
                  <img
                    src={guide.image}
                    alt={titleText}
                    className="lab-guide-thumb"
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span
                        style={{
                          background: '#FAF2F9',
                          color: '#8A1A7B',
                          padding: '2px 8px',
                          borderRadius: '9999px',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                        }}
                      >
                        {categoryText}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: '#8C7F93' }}>
                        ⏱ {readTimeText}
                      </span>
                    </div>
                    <h4 style={{ fontSize: '0.94rem', fontWeight: 700, lineHeight: 1.35, marginBottom: '6px' }}>
                      {titleText}
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: '#6E6270', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {summaryText}
                    </p>
                  </div>
                </div>
              );
            })}

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="btn btn-outline"
              style={{ marginTop: '10px', width: '100%', textDecoration: 'none', justifyContent: 'center' }}
            >
              <BookOpen size={16} />
              <span>{lang === 'ID' ? 'Konsultasi Teknis & Panduan Aplikasi' : 'Technical & Application Guide'}</span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

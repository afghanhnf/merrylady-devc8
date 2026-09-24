import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { MOMENTS, RECIPES } from '../../data/merryladyData';
import type { MomentItem, Recipe } from '../../data/merryladyData';

interface MomentsHubViewProps {
  onSelectMoment: (moment: MomentItem) => void;
  onSelectRecipe: (recipe: Recipe) => void;
  lang: 'ID' | 'EN';
}

export const MomentsHubView: React.FC<MomentsHubViewProps> = ({
  onSelectMoment,
  onSelectRecipe,
  lang,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = [
    'Semua',
    'Family Baking',
    'Cafe at Home',
    'Celebrations',
    'Artisan Pastry',
    'Home Bakery',
  ];

  const filteredMoments =
    selectedCategory === 'Semua'
      ? MOMENTS
      : MOMENTS.filter((m) => m.category === selectedCategory);

  return (
    <div className="landing-view-wrapper">
      {/* Hero Header */}
      <section className="landing-page-hero">
        <div className="container">
          <span className="m3-badge primary" style={{ marginBottom: '14px' }}>
            <span>The Heart of Merrylady</span>
          </span>
          <h1 className="landing-page-title">
            {lang === 'ID' ? 'Merry Moments Content Hub' : 'Merry Moments Content Hub'}
          </h1>
          <p className="landing-page-subtitle">
            {lang === 'ID'
              ? 'Koleksi cerita, resep aplikatif, dan momen manis seputar kehangatan baking keluarga, minuman estetik kafe di rumah, serta selebrasi tak terlupakan.'
              : 'The central hub for lifestyle stories, application recipes, and moments around family baking, cafe drinks, and sweet celebrations.'}
          </p>

          {/* Category Filter Chips */}
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

      {/* Moments Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            <AnimatePresence>
              {filteredMoments.map((moment) => (
                <motion.div
                  key={moment.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '30px',
                    overflow: 'hidden',
                    border: '1.5px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                  }}
                  onClick={() => onSelectMoment(moment)}
                >
                  <div style={{ position: 'relative', height: '240px' }}>
                    <img
                      src={moment.heroImage}
                      alt={moment.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '16px',
                        left: '16px',
                        background: moment.primaryColor,
                        color: '#FFFFFF',
                        padding: '4px 14px',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                      }}
                    >
                      {moment.moodTag}
                    </div>

                    {moment.videoBadge && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '16px',
                          right: '16px',
                          background: 'rgba(0,0,0,0.65)',
                          color: '#FFFFFF',
                          padding: '4px 12px',
                          borderRadius: '9999px',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <Play size={12} fill="#FFFFFF" />
                        <span>{moment.videoBadge}</span>
                      </div>
                    )}
                  </div>

                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      {moment.vibeTags.map((tag, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.72rem',
                            color: '#8A1A7B',
                            background: '#FAF2F9',
                            padding: '2px 8px',
                            borderRadius: '6px',
                            fontWeight: 600,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1E1A20', marginBottom: '8px' }}>
                      {moment.title}
                    </h3>

                    <p style={{ fontSize: '0.88rem', color: '#4E444E', lineHeight: 1.5, marginBottom: '16px' }}>
                      {moment.subtitle}
                    </p>

                    <div
                      style={{
                        background: '#FAF7FB',
                        borderRadius: '16px',
                        padding: '12px 16px',
                        borderLeft: `3px solid ${moment.primaryColor}`,
                        fontSize: '0.8rem',
                        color: '#6E6270',
                        fontStyle: 'italic',
                        marginBottom: '20px',
                      }}
                    >
                      "{moment.storyQuote}"
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: moment.primaryColor }}>
                        Resep: {moment.recipeTitle}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const rec = RECIPES.find((r) => r.id === moment.featuredRecipeId);
                          if (rec) onSelectRecipe(rec);
                        }}
                        className="btn btn-primary"
                        style={{ padding: '6px 14px', fontSize: '0.78rem', backgroundColor: moment.primaryColor }}
                      >
                        <span>Lihat Resep</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Recipe Collections Grid Preview */}
          <div style={{ marginTop: '80px' }}>
            <div className="section-header">
              <span className="m3-badge primary">Koleksi Lengkap</span>
              <h2 className="section-title">Resep Kreasi Merrylady</h2>
              <p className="section-subtitle">
                Eksplorasi langkah-langkah detail pembuatan kue, mochi, dacquoise, dan minuman kafe dari para chef profesional.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {RECIPES.map((recipe) => (
                <div
                  key={recipe.id}
                  onClick={() => onSelectRecipe(recipe)}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 4px 18px rgba(0,0,0,0.03)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ height: '180px', position: 'relative' }}>
                    <img src={recipe.image} alt={recipe.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: 'rgba(0,0,0,0.7)',
                        color: '#FFFFFF',
                        padding: '3px 10px',
                        borderRadius: '9999px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                      }}
                    >
                      {recipe.category}
                    </span>
                  </div>

                  <div style={{ padding: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: '#6E6270', marginBottom: '6px' }}>
                      <span>⏱ {recipe.prepTime}</span>
                      <span>•</span>
                      <span>Tingkat: {recipe.difficulty}</span>
                    </div>

                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px' }}>
                      {recipe.title}
                    </h4>

                    <p style={{ fontSize: '0.8rem', color: '#4E444E', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {recipe.desc}
                    </p>

                    <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem' }}>
                      <span style={{ color: '#8A1A7B', fontWeight: 600 }}>Bahan: {recipe.productUsed}</span>
                      <span style={{ fontWeight: 700, color: '#8A1A7B' }}>Buka Resep →</span>
                    </div>
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

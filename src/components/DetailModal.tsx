import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Product, Recipe, MomentItem, KitchenLabGuide, ArticleItem } from '../data/merryladyData';

interface DetailModalProps {
  product: Product | null;
  recipe: Recipe | null;
  moment: MomentItem | null;
  guide: KitchenLabGuide | null;
  article: ArticleItem | null;
  onClose: () => void;
  onRequestSample?: (product: Product) => void;
  onSelectRecipe?: (recipe: Recipe) => void;
  recipes?: Recipe[];
}

export const DetailModal: React.FC<DetailModalProps> = ({
  product,
  recipe,
  moment,
  guide,
  article,
  onClose,
  onRequestSample,
  onSelectRecipe,
  recipes = [],
}) => {
  if (!product && !recipe && !moment && !guide && !article) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="modal-panel"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Tutup jendela"
          >
            <X size={20} />
          </button>

          {/* 1. Moment Detail View */}
          {moment && (
            <div>
              <div style={{ position: 'relative', height: '280px', borderRadius: '24px', overflow: 'hidden', marginBottom: '24px' }}>
                <img src={moment.heroImage} alt={moment.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(20,10,25,0.85) 100%)', display: 'flex', alignItems: 'flex-end', padding: '24px' }}>
                  <div>
                    <span style={{ background: moment.primaryColor, color: '#FFFFFF', padding: '4px 14px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, display: 'inline-block', marginBottom: '8px' }}>
                      {moment.moodTag}
                    </span>
                    <h2 style={{ color: '#FFFFFF', fontSize: '1.8rem', fontWeight: 800 }}>
                      {moment.title}
                    </h2>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                {moment.vibeTags.map((tag, i) => (
                  <span key={i} style={{ background: '#FAF2F9', color: '#8A1A7B', padding: '3px 10px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 600 }}>
                    {tag}
                  </span>
                ))}
              </div>

              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: moment.primaryColor, marginBottom: '12px' }}>
                {moment.subtitle}
              </h4>

              <p style={{ color: '#4E444E', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '20px' }}>
                {moment.tagline}
              </p>

              <div style={{ background: '#FAF4FB', padding: '16px 20px', borderRadius: '18px', borderLeft: `4px solid ${moment.primaryColor}`, marginBottom: '24px' }}>
                <p style={{ fontStyle: 'italic', color: '#3A323D', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  "{moment.storyQuote}"
                </p>
                <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img src={moment.testimonial.avatar} alt={moment.testimonial.author} style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} />
                  <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>
                    — {moment.testimonial.author} ({moment.testimonial.role})
                  </span>
                </div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1.5px solid rgba(138,26,123,0.15)', borderRadius: '20px', padding: '18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img src={moment.enablerProductImage} alt={moment.enablerProductName} style={{ width: '40px', height: '52px', objectFit: 'contain' }} />
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: moment.primaryColor }}>✨ THE SECRET ENABLER</span>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>{moment.enablerProductName}</div>
                    <div style={{ fontSize: '0.76rem', color: '#6E6270' }}>{moment.enablerProductBadge}</div>
                  </div>
                </div>

                {onSelectRecipe && (
                  <button
                    onClick={() => {
                      const rec = recipes.find((r) => r.id === moment.featuredRecipeId);
                      if (rec) onSelectRecipe(rec);
                    }}
                    className="btn btn-primary"
                    style={{ backgroundColor: moment.primaryColor, padding: '8px 18px', fontSize: '0.84rem' }}
                  >
                    <span>Coba Resep Ini</span>
                    <ArrowRight size={15} />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* 2. Kitchen Lab Guide Detail View */}
          {guide && (
            <div>
              <div style={{ position: 'relative', height: '240px', borderRadius: '24px', overflow: 'hidden', marginBottom: '20px' }}>
                <img src={guide.image} alt={guide.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '16px', left: '16px', background: '#8A1A7B', color: '#FFFFFF', padding: '4px 14px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                  {guide.category} • ⏱ {guide.readTime}
                </span>
              </div>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '12px', lineHeight: 1.35 }}>
                {guide.title}
              </h2>

              <p style={{ color: '#4E444E', lineHeight: 1.6, fontSize: '0.94rem', marginBottom: '20px' }}>
                {guide.summary}
              </p>

              <div style={{ background: '#FAF2F9', padding: '16px 20px', borderRadius: '18px', borderLeft: '4px solid #8A1A7B', marginBottom: '24px' }}>
                <strong style={{ color: '#8A1A7B', display: 'block', marginBottom: '4px' }}>
                  🔑 Intisari Sains (Key Takeaway):
                </strong>
                <p style={{ color: '#1E1A20', fontSize: '0.9rem', lineHeight: 1.55 }}>
                  {guide.keyTakeaway}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '12px' }}>
                  Langkah & Tips Anti-Gagal:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {guide.tips.map((t, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '10px', fontSize: '0.88rem', color: '#3A323D', lineHeight: 1.55 }}>
                      <CheckCircle2 size={18} style={{ color: '#047857', flexShrink: 0, marginTop: '2px' }} />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3. Article Detail View */}
          {article && (
            <div>
              <div style={{ height: '240px', borderRadius: '24px', overflow: 'hidden', marginBottom: '20px' }}>
                <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#8A1A7B', fontWeight: 700, marginBottom: '8px' }}>
                <span>{article.category}</span>
                <span>•</span>
                <Clock size={14} />
                <span>{article.readTime}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, lineHeight: 1.35, marginBottom: '14px' }}>
                {article.title}
              </h2>

              <div style={{ fontSize: '0.84rem', color: '#6E6270', marginBottom: '20px' }}>
                Ditulis oleh: <strong>{article.author}</strong>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.94rem', color: '#374151', lineHeight: 1.75 }}>
                {article.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          {/* 4. Product Detail View */}
          {product && (
            <div>
              <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <div
                  style={{
                    flex: '1 1 240px',
                    background: '#F9F5FA',
                    borderRadius: '24px',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ maxHeight: '280px', objectFit: 'contain' }}
                  />
                </div>

                <div style={{ flex: '2 1 340px' }}>
                  <span className="m3-badge primary" style={{ marginBottom: '10px' }}>
                    {product.category}
                  </span>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px' }}>
                    {product.name}
                  </h2>
                  <p style={{ color: '#4E444E', fontSize: '0.95rem', marginBottom: '18px', lineHeight: 1.6 }}>
                    {product.heroDescription}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
                    <div style={{ background: '#FAF7FB', padding: '10px 14px', borderRadius: '12px' }}>
                      <span style={{ fontSize: '0.72rem', color: '#6E6270', display: 'block' }}>KEMASAN & NETTO</span>
                      <strong style={{ fontSize: '0.88rem' }}>{product.specs.netto}</strong>
                    </div>
                    <div style={{ background: '#FAF7FB', padding: '10px 14px', borderRadius: '12px' }}>
                      <span style={{ fontSize: '0.72rem', color: '#6E6270', display: 'block' }}>PENYIMPANAN</span>
                      <strong style={{ fontSize: '0.88rem' }}>{product.specs.storage}</strong>
                    </div>
                    <div style={{ background: '#FAF7FB', padding: '10px 14px', borderRadius: '12px' }}>
                      <span style={{ fontSize: '0.72rem', color: '#6E6270', display: 'block' }}>MASA SIMPAN</span>
                      <strong style={{ fontSize: '0.88rem' }}>{product.specs.shelfLife}</strong>
                    </div>
                    <div style={{ background: '#FAF7FB', padding: '10px 14px', borderRadius: '12px' }}>
                      <span style={{ fontSize: '0.72rem', color: '#6E6270', display: 'block' }}>SERTIFIKASI</span>
                      <strong style={{ fontSize: '0.88rem', color: '#047857' }}>{product.specs.halal}</strong>
                    </div>
                  </div>

                  {onRequestSample && (
                    <button
                      onClick={() => {
                        onRequestSample(product);
                        onClose();
                      }}
                      className="btn btn-primary"
                      style={{ backgroundColor: product.theme.primary }}
                    >
                      Minta Sampel Uji Coba
                    </button>
                  )}
                </div>
              </div>

              {/* Kitchen Guide & Technique */}
              <div style={{ borderTop: '1px solid #EAE4EF', paddingTop: '24px', marginTop: '16px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '14px' }}>
                  Panduan Pengolahan Dapur (Kitchen Technique)
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {product.kitchenGuide.map((g, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        gap: '14px',
                        background: '#FAF8FB',
                        padding: '14px 18px',
                        borderRadius: '14px',
                        borderLeft: `4px solid ${product.theme.primary}`,
                      }}
                    >
                      <strong style={{ minWidth: '120px', fontSize: '0.9rem', color: '#1E1A20' }}>
                        {g.step}
                      </strong>
                      <p style={{ color: '#4E444E', fontSize: '0.88rem', lineHeight: 1.5 }}>
                        {g.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 5. Recipe Detail View */}
          {recipe && (
            <div>
              <div style={{ position: 'relative', width: '100%', height: '260px', borderRadius: '24px', overflow: 'hidden', marginBottom: '20px' }}>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '20px',
                  }}
                >
                  <div>
                    <span
                      style={{
                        background: 'rgba(255,255,255,0.9)',
                        color: '#1E1A20',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        display: 'inline-block',
                        marginBottom: '6px',
                      }}
                    >
                      {recipe.category}
                    </span>
                    <h2 style={{ color: '#FFFFFF', fontSize: '1.6rem', fontWeight: 800 }}>
                      {recipe.title}
                    </h2>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '12px 0', borderBottom: '1px solid #EAE4EF', marginBottom: '20px', fontSize: '0.86rem', color: '#4E444E' }}>
                <span>⏱ Waktu: <strong>{recipe.prepTime}</strong></span>
                <span>•</span>
                <span>Porsi: <strong>{recipe.servings}</strong></span>
                <span>•</span>
                <span>Tingkat: <strong>{recipe.difficulty}</strong></span>
                <span>•</span>
                <span>Bahan Kunci: <strong>{recipe.productUsed}</strong></span>
              </div>

              {/* Ingredients & Steps */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '12px' }}>
                    Bahan-Bahan:
                  </h3>
                  <ul style={{ listStyle: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', color: '#374151', fontSize: '0.88rem' }}>
                    {recipe.ingredients.map((ing, idx) => (
                      <li key={idx}>{ing}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '12px' }}>
                    Langkah Pembuatan:
                  </h3>
                  <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', color: '#374151', fontSize: '0.88rem' }}>
                    {recipe.steps.map((st, idx) => (
                      <li key={idx} style={{ lineHeight: 1.55 }}>{st}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

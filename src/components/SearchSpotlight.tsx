import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { MOMENTS } from '../data/merryladyData';
import type { Product, Recipe, MomentItem } from '../data/merryladyData';

interface SearchSpotlightProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  recipes: Recipe[];
  onSelectProduct: (product: Product) => void;
  onSelectRecipe: (recipe: Recipe) => void;
  onSelectMoment?: (moment: MomentItem) => void;
}

export const SearchSpotlight: React.FC<SearchSpotlightProps> = ({
  isOpen,
  onClose,
  products,
  recipes,
  onSelectProduct,
  onSelectRecipe,
  onSelectMoment,
}) => {
  const [query, setQuery] = useState('');
  const [activeChip, setActiveChip] = useState('Semua');
  const inputRef = useRef<HTMLInputElement>(null);

  const quickChips = [
    'Semua',
    'Momen',
    'Family Baking',
    'Café at Home',
    'Whip Cream',
    'Keju',
    'Susu Beras',
    'Mochi',
    'Tart Filling',
  ];

  const handleClose = useCallback(() => {
    setQuery('');
    setActiveChip('Semua');
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        handleClose();
      }
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const searchTerms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);

  const filterByChip = (category: string, titleOrName: string, tags: string[] = []) => {
    if (activeChip === 'Semua') return true;
    const chipLower = activeChip.toLowerCase();
    if (chipLower === 'momen') return true;
    if (chipLower === 'whip cream') return titleOrName.toLowerCase().includes('whip') || category.toLowerCase().includes('whip');
    if (chipLower === 'keju') return titleOrName.toLowerCase().includes('cheese') || titleOrName.toLowerCase().includes('keju');
    if (chipLower === 'susu beras') return titleOrName.toLowerCase().includes('beras') || titleOrName.toLowerCase().includes('rice');
    if (chipLower === 'tart filling') return titleOrName.toLowerCase().includes('tart') || category.toLowerCase().includes('filling');
    if (chipLower === 'mochi') return titleOrName.toLowerCase().includes('mochi') || tags.some(t => t.toLowerCase().includes('mochi'));
    if (chipLower === 'family baking') return category.toLowerCase().includes('family') || tags.some(t => t.toLowerCase().includes('family'));
    if (chipLower === 'café at home') return category.toLowerCase().includes('cafe') || tags.some(t => t.toLowerCase().includes('cafe'));
    return (
      category.toLowerCase().includes(chipLower) ||
      titleOrName.toLowerCase().includes(chipLower) ||
      tags.some(t => t.toLowerCase().includes(chipLower))
    );
  };

  const matchesSearch = (fields: (string | undefined)[]) => {
    if (searchTerms.length === 0) return true;
    const combined = fields.filter(Boolean).join(' ').toLowerCase();
    return searchTerms.every(term => combined.includes(term));
  };

  const showMoments = activeChip === 'Semua' || activeChip === 'Momen' || activeChip === 'Family Baking' || activeChip === 'Café at Home';
  const showProducts = activeChip === 'Semua' || activeChip === 'Whip Cream' || activeChip === 'Keju' || activeChip === 'Susu Beras' || activeChip === 'Tart Filling';
  const showRecipes = activeChip === 'Semua' || activeChip === 'Mochi' || activeChip === 'Whip Cream' || activeChip === 'Keju' || activeChip === 'Susu Beras' || activeChip === 'Family Baking' || activeChip === 'Café at Home';

  const matchedMoments = showMoments
    ? MOMENTS.filter((m) => {
        const matchesChip = filterByChip(m.category, m.title, [...m.vibeTags, m.moodTag]);
        const matchesQuery = matchesSearch([m.title, m.subtitle, m.moodTag, m.category, ...m.vibeTags, m.recipeTitle]);
        return matchesChip && matchesQuery;
      })
    : [];

  const matchedProducts = showProducts
    ? products.filter((p) => {
        const matchesChip = filterByChip(p.category, p.name, p.applications);
        const matchesQuery = matchesSearch([p.name, p.category, p.tagline, p.heroHeadline, p.specs.texture, ...p.applications]);
        return matchesChip && matchesQuery;
      })
    : [];

  const matchedRecipes = showRecipes
    ? recipes.filter((r) => {
        const matchesChip = filterByChip(r.category, r.title, r.tags || []);
        const matchesQuery = matchesSearch([r.title, r.category, r.productUsed, r.desc, ...(r.tags || []), ...r.ingredients]);
        return matchesChip && matchesQuery;
      })
    : [];

  return (
    <AnimatePresence>
      <div className="spotlight-backdrop" onClick={handleClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="spotlight-dialog"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Input Header */}
          <div className="spotlight-input-row">
            <Search size={20} color="#8A1A7B" />
            <input
              ref={inputRef}
              type="text"
              className="spotlight-input"
              placeholder="Cari momen, resep, produk, atau tips baking..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (activeChip !== 'Semua') setActiveChip('Semua');
              }}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                style={{ color: '#9CA3AF', padding: '4px' }}
                aria-label="Hapus kata kunci"
              >
                <X size={18} />
              </button>
            )}
            <button onClick={handleClose} className="spotlight-close-btn">
              ESC
            </button>
          </div>

          {/* Quick Filter Chips */}
          <div className="spotlight-chips">
            {quickChips.map((chip) => (
              <button
                key={chip}
                onClick={() => {
                  setActiveChip(chip === activeChip ? 'Semua' : chip);
                  if (chip !== 'Semua') setQuery('');
                }}
                className={`spotlight-chip ${activeChip === chip ? 'active' : ''}`}
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Search Results List */}
          <div className="spotlight-results">
            {/* Moments Section */}
            {matchedMoments.length > 0 && (
              <div style={{ marginBottom: '16px' }}>
                <div
                  style={{
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#8A1A7B',
                    padding: '6px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>Merry Moments ({matchedMoments.length})</span>
                </div>
                {matchedMoments.map((m) => (
                  <div
                    key={m.id}
                    className="spotlight-result-item"
                    onClick={() => {
                      if (onSelectMoment) onSelectMoment(m);
                      onClose();
                    }}
                  >
                    <img
                      src={m.heroImage}
                      alt={m.title}
                      className="spotlight-result-thumb"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="spotlight-result-info">
                      <div className="spotlight-result-title">{m.title}</div>
                      <div className="spotlight-result-sub">{m.subtitle}</div>
                    </div>
                    <span className="spotlight-result-tag" style={{ background: '#FAF2F9', color: '#8A1A7B' }}>
                      {m.moodTag}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Products Section */}
            {matchedProducts.length > 0 && (
              <div style={{ marginBottom: '16px' }}>
                <div
                  style={{
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#8A1A7B',
                    padding: '6px 12px',
                  }}
                >
                  Produk ({matchedProducts.length})
                </div>
                {matchedProducts.map((p) => (
                  <div
                    key={p.id}
                    className="spotlight-result-item"
                    onClick={() => {
                      onSelectProduct(p);
                      onClose();
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="spotlight-result-thumb"
                    />
                    <div className="spotlight-result-info">
                      <div className="spotlight-result-title">{p.name}</div>
                      <div className="spotlight-result-sub">{p.subTitle} • {p.specs.netto}</div>
                    </div>
                    <span className="spotlight-result-tag">{p.category}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Recipes Section */}
            {matchedRecipes.length > 0 && (
              <div>
                <div
                  style={{
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#D97706',
                    padding: '6px 12px',
                  }}
                >
                  Resep & Kreasi ({matchedRecipes.length})
                </div>
                {matchedRecipes.map((r) => (
                  <div
                    key={r.id}
                    className="spotlight-result-item"
                    onClick={() => {
                      onSelectRecipe(r);
                      onClose();
                    }}
                  >
                    <img
                      src={r.image}
                      alt={r.title}
                      className="spotlight-result-thumb"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="spotlight-result-info">
                      <div className="spotlight-result-title">{r.title}</div>
                      <div className="spotlight-result-sub">
                        Menggunakan: {r.productUsed} • ⏱ {r.prepTime}
                      </div>
                    </div>
                    <span className="spotlight-result-tag">{r.category}</span>
                  </div>
                ))}
              </div>
            )}

            {matchedMoments.length === 0 && matchedProducts.length === 0 && matchedRecipes.length === 0 && (
              <div style={{ textAlign: 'center', padding: '40px 20px', color: '#6E6270' }}>
                <p style={{ fontWeight: 600, fontSize: '1.05rem', color: '#1E1A20' }}>
                  Tidak ditemukan hasil untuk "{query || activeChip}"
                </p>
                <p style={{ fontSize: '0.9rem', marginTop: '6px' }}>
                  Coba kata kunci seperti <em>family</em>, <em>cafe</em>, <em>shineroad</em>, <em>keju</em>, atau <em>mochi</em>.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

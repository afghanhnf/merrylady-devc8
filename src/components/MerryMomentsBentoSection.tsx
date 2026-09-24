import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Clock,
  ChefHat,
  Compass,
  Users,
  Coffee,
  Cake,
  Flame,
  Store,
} from 'lucide-react';
import type { MomentItem, Recipe } from '../data/merryladyData';

interface MerryMomentsBentoSectionProps {
  moments: MomentItem[];
  onSelectMoment: (moment: MomentItem) => void;
  onExploreMomentsHub?: () => void;
  onSelectRecipe: (recipe: Recipe) => void;
  recipes: Recipe[];
  activeMood: string;
  onSelectMood: (mood: string) => void;
  lang: 'ID' | 'EN';
}

export const MerryMomentsBentoSection: React.FC<MerryMomentsBentoSectionProps> = ({
  onSelectRecipe,
  recipes,
  activeMood = 'all',
  onSelectMood,
  lang,
}) => {
  const moods = [
    {
      id: 'all',
      label: lang === 'ID' ? 'Semua Momen' : 'All Moments',
      icon: Compass,
    },
    {
      id: 'family',
      label: lang === 'ID' ? 'Family Baking' : 'Family Baking',
      icon: Users,
    },
    {
      id: 'cafe',
      label: lang === 'ID' ? 'Café at Home' : 'Café at Home',
      icon: Coffee,
    },
    {
      id: 'celebration',
      label: lang === 'ID' ? 'Selebrasi & Ultah' : 'Celebrations',
      icon: Cake,
    },
    {
      id: 'artisan',
      label: 'Artisan Pastry',
      icon: Flame,
    },
    {
      id: 'business',
      label: lang === 'ID' ? 'Solusi Usaha' : 'Bakery Business',
      icon: Store,
    },
  ];

  // Helper to filter 6 enticing recipes based on active mood
  const getFilteredRecipes = (): Recipe[] => {
    if (activeMood === 'family') {
      return [
        recipes.find((r) => r.id === 'towel-roll-cake'),
        recipes.find((r) => r.id === 'creamy-daifuku-mochi'),
        recipes.find((r) => r.id === 'classic-egg-tart'),
        recipes.find((r) => r.id === 'dacquoise'),
        recipes.find((r) => r.id === 'napoleon-mousse'),
        recipes.find((r) => r.id === 'basque-cheese-bread'),
      ].filter(Boolean) as Recipe[];
    }
    if (activeMood === 'cafe') {
      return [
        recipes.find((r) => r.id === 'iced-mango-yakult'),
        recipes.find((r) => r.id === 'pisang-ijo-mocktail'),
        recipes.find((r) => r.id === 'dacquoise'),
        recipes.find((r) => r.id === 'creamy-daifuku-mochi'),
        recipes.find((r) => r.id === 'towel-roll-cake'),
        recipes.find((r) => r.id === 'classic-egg-tart'),
      ].filter(Boolean) as Recipe[];
    }
    if (activeMood === 'celebration') {
      return [
        recipes.find((r) => r.id === 'creamy-daifuku-mochi'),
        recipes.find((r) => r.id === 'napoleon-mousse'),
        recipes.find((r) => r.id === 'towel-roll-cake'),
        recipes.find((r) => r.id === 'dacquoise'),
        recipes.find((r) => r.id === 'classic-egg-tart'),
        recipes.find((r) => r.id === 'basque-cheese-bread'),
      ].filter(Boolean) as Recipe[];
    }
    if (activeMood === 'artisan') {
      return [
        recipes.find((r) => r.id === 'classic-egg-tart'),
        recipes.find((r) => r.id === 'basque-cheese-bread'),
        recipes.find((r) => r.id === 'dacquoise'),
        recipes.find((r) => r.id === 'napoleon-mousse'),
        recipes.find((r) => r.id === 'towel-roll-cake'),
        recipes.find((r) => r.id === 'creamy-daifuku-mochi'),
      ].filter(Boolean) as Recipe[];
    }
    if (activeMood === 'business') {
      return [
        recipes.find((r) => r.id === 'towel-roll-cake'),
        recipes.find((r) => r.id === 'classic-egg-tart'),
        recipes.find((r) => r.id === 'basque-cheese-bread'),
        recipes.find((r) => r.id === 'iced-mango-yakult'),
        recipes.find((r) => r.id === 'creamy-daifuku-mochi'),
        recipes.find((r) => r.id === 'pisang-ijo-mocktail'),
      ].filter(Boolean) as Recipe[];
    }
    // Default top 6 signature recipes
    return recipes.slice(0, 6);
  };

  const displayedRecipes = getFilteredRecipes();

  return (
    <motion.section
      id="kreasi-resep"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
      className="section-padding"
      style={{ position: 'relative' }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '28px' }}>
          <span className="m3-badge primary">
            <span>{lang === 'ID' ? 'Inspirasi Kreasi Kuliner' : 'Culinary Recipe Inspiration'}</span>
          </span>
          <h2 className="section-title">
            {lang === 'ID'
              ? 'Inspirasi Kreasi Resep Istimewa Merrylady'
              : 'Signature Recipe & Creation Hub'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ID'
              ? 'Sempurnakan momen spesial Anda dengan aneka olahan kue lembut, dessert cantik, dan minuman kafe bertekstur velvet yang menggugah selera dan mudah dibuat.'
              : 'Elevate your special moments with tender cakes, gorgeous desserts, and velvety barista drinks that are easy to create with zero-fail results.'}
          </p>
        </div>

        {/* Bar Pilih Suasana Rasa Hari Ini (Tepat di Bawah Sub-title) */}
        <div className="curate-bar-card" style={{ marginBottom: '32px' }}>
          <div className="curate-bar-label">
            <div className="curate-bar-icon-wrap">
              <Compass size={18} />
            </div>
            <div className="curate-bar-text">
              <h4>
                {lang === 'ID'
                  ? 'Pilih Suasana Rasa Hari Ini'
                  : 'Curate Your Culinary Mood'}
              </h4>
              <p>
                {lang === 'ID'
                  ? 'Inspirasi kreasi & panduan bahan'
                  : 'Instant recipe & ingredient guide'}
              </p>
            </div>
          </div>

          <div className="curate-chips-list" role="tablist" aria-label="Moment Filter">
            {moods.map((m) => {
              const isActive = activeMood === m.id;
              const Icon = m.icon;
              return (
                <button
                  key={m.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onSelectMood(m.id)}
                  className={`curate-chip-btn ${isActive ? 'active' : ''}`}
                >
                  <Icon size={14} className="curate-chip-icon" strokeWidth={isActive ? 2.2 : 1.8} />
                  <span>{m.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Appetizing Recipe Cards (3x2 Grid) */}
        <motion.div layout className="appetizing-recipes-grid">
          <AnimatePresence mode="popLayout">
            {displayedRecipes.map((recipe, index) => {
              const enRecipesData: Record<string, { desc: string; servings: string; prepTime: string; productUsed?: string }> = {
                'creamy-daifuku-mochi': {
                  desc: 'Soft and chewy Japanese mochi filled with fresh vanilla whipped cream and sweet, tart fresh strawberry slices.',
                  servings: '6-8 pcs',
                  prepTime: '30 mins',
                  productUsed: 'ShineRoad Whip Topping',
                },
                'dacquoise': {
                  desc: 'Classic French almond meringue biscuit with a crisp shell and tender center, layered with light whipped cream.',
                  servings: '10 pcs',
                  prepTime: '45 mins',
                  productUsed: 'Merrylady Multi Cream',
                },
                'napoleon-mousse': {
                  desc: 'Harmonious layers of crispy caramelized puff pastry and melt-in-the-mouth Merrylady chocolate mousse cream.',
                  servings: '8 servings',
                  prepTime: '60 mins',
                  productUsed: 'ShineRoad Whip Topping',
                },
                'iced-mango-yakult': {
                  desc: 'Refreshing specialty café drink combining sweet mango puree, probiotic Yakult, and plant-based rice milk cold foam.',
                  servings: '1 glass',
                  prepTime: '10 mins',
                  productUsed: 'Merrylady Rice Milk',
                },
                'basque-cheese-bread': {
                  desc: 'Soft buttery brioche bun overflowing with warm, savory and creamy melted Merrylady cheese filling.',
                  servings: '6 pcs',
                  prepTime: '40 mins',
                  productUsed: 'Merrylady Cheese Filling',
                },
                'classic-egg-tart': {
                  desc: 'Authentic Portuguese egg tart with flaky, multi-layered puff pastry and a silky caramelized custard filling.',
                  servings: '12 pcs',
                  prepTime: '25 mins',
                  productUsed: 'Merrylady Tart Filling',
                },
                'towel-roll-cake': {
                  desc: 'Viral towel crepe roll cake with tender matcha layers filled with rich, fluffy and stable Skibbo cream.',
                  servings: '3 rolls',
                  prepTime: '35 mins',
                  productUsed: 'Merrylady Skibbo Whip Topping',
                },
                'pisang-ijo-mocktail': {
                  desc: 'Modern twist on a traditional Indonesian cooler: fragrant banana syrup, pandan coconut milk, and velvety whipped cream cloud foam.',
                  servings: '1 glass',
                  prepTime: '15 mins',
                  productUsed: 'ShineRoad Whip Topping',
                },
              };

              const enRecipe = enRecipesData[recipe.id];
              const descText = lang === 'ID' ? recipe.desc : (enRecipe?.desc || recipe.desc);
              const prepTimeText = lang === 'ID' ? recipe.prepTime : (enRecipe?.prepTime || recipe.prepTime.replace(/menit/i, 'mins'));
              const servingsText = lang === 'ID'
                ? recipe.servings
                : (enRecipe?.servings || recipe.servings.replace(/Porsi/i, 'Servings').replace(/Loyang/i, 'Tray').replace(/Gelas/i, 'Glass').replace(/Buah/i, 'Pcs'));
              const productUsedText = lang === 'ID' ? recipe.productUsed : (enRecipe?.productUsed || recipe.productUsed);

              return (
                <motion.article
                  key={recipe.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="appetizing-recipe-card"
                  onClick={() => onSelectRecipe(recipe)}
                >
                  {/* Food Image & Floating Badges */}
                  <div className="appetizing-img-container">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="appetizing-img"
                      loading="lazy"
                    />
                    {/* Category Pill */}
                    <span className="appetizing-badge-category">
                      {recipe.category}
                    </span>

                    {/* Prep Time & Difficulty Pill */}
                    <span className="appetizing-badge-meta">
                      <Clock size={12} />
                      <span>{prepTimeText}</span>
                      <span>•</span>
                      <span>
                        {lang === 'ID'
                          ? recipe.difficulty
                          : recipe.difficulty === 'Mudah'
                          ? 'Easy'
                          : recipe.difficulty === 'Menengah'
                          ? 'Medium'
                          : 'Advanced'}
                      </span>
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="appetizing-body">
                    {/* Enabler Product Pill */}
                    <div className="appetizing-enabler-pill">
                      <span>{productUsedText}</span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="appetizing-title">{recipe.title}</h3>
                    <p className="appetizing-desc">
                      {descText}
                    </p>

                    {/* Footer Action Row */}
                    <div className="appetizing-footer">
                      <div className="appetizing-servings">
                        <ChefHat size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                        <span>{servingsText}</span>
                      </div>

                      <button
                        className="appetizing-cta-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectRecipe(recipe);
                        }}
                      >
                        <span>{lang === 'ID' ? 'Coba Resep' : 'Try Recipe'}</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
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

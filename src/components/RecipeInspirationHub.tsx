import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Recipe } from '../data/merryladyData';

interface RecipeInspirationHubProps {
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
}

export const RecipeInspirationHub: React.FC<RecipeInspirationHubProps> = ({
  recipes,
  onSelectRecipe,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = [
    'Semua',
    'Pastry & Cakes',
    'Dessert & Mochi',
    'Cafe Beverage',
    'Artisan Breads',
  ];

  const filteredRecipes =
    activeCategory === 'Semua'
      ? recipes
      : recipes.filter((r) => r.category === activeCategory);

  return (
    <section id="kreasi" className="recipes-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="m3-badge">Inspirasi Dapur Kreatif</span>
          <h2 className="section-title">Laboratorium Kreasi Merrylady</h2>
          <p className="section-subtitle">
            Kumpulan resep aplikatif yang dikembangkan oleh pastry chef profesional untuk
            memperkaya variasi menu di kafe, toko roti, dan kreasi rumahan Anda.
          </p>
        </div>

        {/* Categories */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-tab-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Recipes Grid */}
        <motion.div layout className="recipes-grid">
          <AnimatePresence>
            {filteredRecipes.map((recipe) => (
              <motion.article
                key={recipe.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="recipe-card"
                onClick={() => onSelectRecipe(recipe)}
              >
                <div className="recipe-img-wrap">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="recipe-img"
                    loading="lazy"
                  />
                  <span className="recipe-category-tag">{recipe.category}</span>
                </div>

                <div className="recipe-body">
                  <div className="recipe-meta-row">
                    <span>⏱ {recipe.prepTime}</span>
                    <span>•</span>
                    <span>Tingkat: {recipe.difficulty}</span>
                    <span>•</span>
                    <span>{recipe.servings}</span>
                  </div>

                  <h3 className="recipe-title">{recipe.title}</h3>
                  <p className="recipe-desc">{recipe.desc}</p>

                  <div className="recipe-product-pill">
                    <span>Bahan Utama: {recipe.productUsed}</span>
                    <span style={{ fontWeight: 700 }}>Resep →</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Store, Coffee, Calculator, ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';
import { BUSINESS_SOLUTIONS } from '../data/merryladyData';

interface BakeryBusinessSectionProps {
  onOpenSampleModal?: () => void;
  onOpenBusinessHub?: () => void;
  lang: 'ID' | 'EN';
}

export const BakeryBusinessSection: React.FC<BakeryBusinessSectionProps> = ({
  lang,
}) => {
  const [monthlyVolume, setMonthlyVolume] = useState<number>(300); // in cartons or portions

  // Dynamic simulation formula
  const estimatedSavings = Math.round(monthlyVolume * 14500); // IDR per unit savings due to high yield
  const extraProfitPercentage = 24;

  const enSolutionsData = [
    {
      id: 'sol-home-bakery',
      target: 'Home Bakeries & Independent Creators',
      description: 'High-expansion whipped yield (up to 4x) reducing cost-of-goods-sold per cake or pastry without compromising texture.',
      benefits: [
        'Abundant whipped yield volume: 1 carton decorates significantly more cakes',
        'Flexible ambient/chilled storage and long shelf life up to 12 months',
        'Trending viral recipes and price-calculation support from Merrylady chefs',
      ],
      roiHighlight: 'Estimated raw material savings up to 20% - 30% monthly',
    },
    {
      id: 'sol-cafe-beverage',
      target: 'Cafés, Coffee Shops & Tea Bars',
      description: 'Elevate signature beverage margins with velvety cloud foam and lactose-free artisanal rice milk lattes.',
      benefits: [
        'Seamless barista workflows: ready-to-froth and steam instantly',
        'Uniform texture and flavor consistency in every single cup',
        'Supports trending health-conscious, vegan, and dairy-free menus',
      ],
      roiHighlight: 'Increases signature drink profit margins up to 65% - 75%',
    },
    {
      id: 'sol-horeca-chain',
      target: 'Hotels, Restaurants, Catering & Chains',
      description: 'Backed by PT Sukanda Djaya nationwide cold-chain network across 30+ cities with ISO 22000 food safety standards.',
      benefits: [
        'Trans-fat-free formulation stability meeting 5-star hospitality standards',
        'In-house masterclass demos and custom menu formulation by Corporate Chefs',
        'Official commercial invoicing with flexible institutional credit terms',
      ],
      roiHighlight: 'Zero-waste formula: virtually eliminates piping breakdown & waste',
    },
  ];

  return (
    <motion.section
      id="business"
      className="section-padding"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
    >
      <div className="container">
        <div className="business-portal-wrapper">
          {/* Header */}
          <div className="section-header" style={{ marginBottom: '32px' }}>
            <span className="m3-badge secondary">
              <Building2 size={14} />
              <span>{lang === 'ID' ? 'Khusus Foodservice & UMKM' : 'Dedicated for Foodservice & Bakeries'}</span>
            </span>
            <h2 className="section-title">
              {lang === 'ID'
                ? 'Solusi Bisnis & Efisiensi Bahan Baku'
                : 'Culinary Business Solutions & Cost Efficiency'}
            </h2>
            <p className="section-subtitle">
              {lang === 'ID'
                ? 'Mendukung lebih dari 10.000+ pelaku usaha bakery rumahan, kafe kekinian, dan jaringan perhotelan di Indonesia dengan formula ber-yield tinggi dan rantai pasok terpercaya.'
                : 'Empowering 10,000+ home bakeries, modern cafés, and hotel chains across Indonesia with high-yield formulas and dependable cold-chain distribution.'}
            </p>
          </div>

          {/* 3 Segment Cards */}
          <div className="business-cards-grid">
            {BUSINESS_SOLUTIONS.map((sol, index) => {
              const enSol = enSolutionsData[index] || sol;
              const targetText = lang === 'ID' ? sol.target : enSol.target;
              const descText = lang === 'ID' ? sol.description : enSol.description;
              const benefitsList = lang === 'ID' ? sol.benefits : enSol.benefits;
              const roiText = lang === 'ID' ? sol.roiHighlight : enSol.roiHighlight;

              return (
                <div key={sol.id} className="business-segment-card">
                  <div>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '16px',
                        background: 'var(--prod-primary-light)',
                        color: 'var(--prod-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '18px',
                      }}
                    >
                      {sol.iconName === 'Store' && <Store size={22} />}
                      {sol.iconName === 'Coffee' && <Coffee size={22} />}
                      {sol.iconName === 'Building2' && <Building2 size={22} />}
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '10px' }}>
                      {targetText}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#4E444E', lineHeight: 1.5, marginBottom: '16px' }}>
                      {descText}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                      {benefitsList.map((b, i) => (
                        <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '0.82rem', color: '#3A323D' }}>
                          <span style={{ color: '#D97706', fontWeight: 700 }}>✓</span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      background: '#FAF7FB',
                      borderRadius: '14px',
                      padding: '12px 16px',
                      borderLeft: '3px solid #D97706',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#78350F',
                    }}
                  >
                    {roiText}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Profit Margin & Savings Simulator */}
          <div className="business-calc-box">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Calculator size={22} style={{ color: '#8A1A7B' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                  {lang === 'ID' ? 'Kalkulator Estimasi Penghematan Usaha' : 'Business Savings Calculator'}
                </h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#4E444E', lineHeight: 1.6, marginBottom: '24px' }}>
                {lang === 'ID'
                  ? 'Krim Merrylady memiliki rasio overrun kocokan hingga 3.8x - 4.2x. Geser slider untuk melihat potensi penghematan biaya bahan baku bakery Anda:'
                  : 'Merrylady topping creams feature up to 4x expansion yield. Slide to calculate your monthly raw material savings:'}
              </p>

              <div className="calc-slider-item">
                <div className="calc-slider-header">
                  <span>{lang === 'ID' ? 'Estimasi Volume Produksi per Bulan' : 'Estimated Monthly Production Volume'}</span>
                  <span style={{ color: '#8A1A7B', fontWeight: 700 }}>
                    {monthlyVolume} {lang === 'ID' ? 'Loyang / Bulan' : 'Cakes / Month'}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="50"
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                  className="calc-range-input"
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '16px' }}>
                <ShieldCheck size={18} style={{ color: '#047857' }} />
                <span style={{ fontSize: '0.82rem', color: '#6E6270' }}>
                  {lang === 'ID'
                    ? 'Bebas Lemak Trans • 100% Halal MUI • Jaminan Stok'
                    : 'Zero Trans Fat • 100% Halal Certified • Guaranteed Stock'}
                </span>
              </div>
            </div>

            {/* Calculated Output Display */}
            <div className="calc-result-card">
              <span style={{ fontSize: '0.8rem', opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {lang === 'ID' ? 'Potensi Efisiensi Biaya per Bulan' : 'Estimated Monthly Cost Savings'}
              </span>
              <div style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', fontWeight: 800, margin: '8px 0' }}>
                Rp {estimatedSavings.toLocaleString('id-ID')}*
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.2)', padding: '4px 14px', borderRadius: '9999px', fontSize: '0.8rem', marginBottom: '18px' }}>
                <TrendingUp size={14} />
                <span>+ {extraProfitPercentage}% {lang === 'ID' ? 'Margin Laba Bersih' : 'Net Profit Margin'}</span>
              </div>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="btn btn-primary"
                style={{
                  background: '#FFCD57',
                  color: '#1E1A20',
                  width: '100%',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  justifyContent: 'center',
                }}
              >
                <span>{lang === 'ID' ? 'Minta Sampel' : 'Request Sample'}</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

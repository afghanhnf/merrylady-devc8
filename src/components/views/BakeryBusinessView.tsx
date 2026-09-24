import React, { useState } from 'react';
import { Building2, Store, Coffee, Calculator, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_SOLUTIONS } from '../../data/merryladyData';
import type { Product } from '../../data/merryladyData';

interface BakeryBusinessViewProps {
  onOpenSampleModal: (product?: Product) => void;
  lang: 'ID' | 'EN';
}

export const BakeryBusinessView: React.FC<BakeryBusinessViewProps> = ({
  onOpenSampleModal,
  lang,
}) => {
  const [monthlyVolume, setMonthlyVolume] = useState<number>(500);

  const estimatedSavings = Math.round(monthlyVolume * 15200);

  return (
    <div className="landing-view-wrapper">
      {/* Hero Header */}
      <section className="landing-page-hero">
        <div className="container">
          <span className="m3-badge secondary" style={{ marginBottom: '14px' }}>
            <Building2 size={14} />
            <span>Foodservice & UMKM Growth Partner</span>
          </span>
          <h1 className="landing-page-title">
            {lang === 'ID' ? 'Bakery Business & B2B Solutions' : 'Bakery Business & B2B Solutions'}
          </h1>
          <p className="landing-page-subtitle">
            {lang === 'ID'
              ? 'Mendampingi pertumbuhan bisnis bakery rumahan, kafe kekinian, dan industri HoReCa nasional dengan pasokan bahan baku stabil, efisiensi biaya, serta dukungan teknis chef langsung.'
              : 'Empowering home bakeries, modern cafes, and national HoReCa with stable raw material supply, cost efficiency, and direct technical chef support.'}
          </p>

          <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenSampleModal()}
              className="btn btn-primary"
              style={{ background: '#8A1A7B', color: '#FFFFFF', padding: '12px 28px' }}
            >
              <span>Minta Sampel Usaha </span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Detailed Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {BUSINESS_SOLUTIONS.map((sol) => (
              <div
                key={sol.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '30px',
                  padding: '32px',
                  border: '1.5px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '18px',
                      background: 'var(--prod-primary-light)',
                      color: 'var(--prod-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    {sol.iconName === 'Store' && <Store size={26} />}
                    {sol.iconName === 'Coffee' && <Coffee size={26} />}
                    {sol.iconName === 'Building2' && <Building2 size={26} />}
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '10px' }}>
                    {sol.target}
                  </h3>
                  <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#8A1A7B', marginBottom: '12px' }}>
                    {sol.headline}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#4E444E', lineHeight: 1.6, marginBottom: '20px' }}>
                    {sol.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                    {sol.benefits.map((b, i) => (
                      <div key={i} style={{ display: 'flex', gap: '10px', fontSize: '0.84rem', color: '#1E1A20' }}>
                        <CheckCircle2 size={16} style={{ color: '#047857', flexShrink: 0, marginTop: '2px' }} />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ background: '#FAF7FB', padding: '14px', borderRadius: '16px', marginBottom: '18px', borderLeft: '3px solid #D97706' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#78350F' }}>
                      {sol.roiHighlight}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenSampleModal()}
                    className="btn btn-outline"
                    style={{ width: '100%', fontSize: '0.84rem' }}
                  >
                    Ajukan Konsultasi Bisnis →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed ROI Calculator */}
          <div className="business-calc-box" style={{ marginTop: '80px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Calculator size={24} style={{ color: '#8A1A7B' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>
                  Kalkulator Margin & Efisiensi Bahan Baku
                </h3>
              </div>
              <p style={{ fontSize: '0.92rem', color: '#4E444E', lineHeight: 1.6, marginBottom: '24px' }}>
                Dengan rasio ekspansi kocokan (yield) hingga 4x lipat dan kestabilan bebas leleh suhu ruang, produk Merrylady terbukti memangkas pemborosan bahan (zero-waste) dan menurunkan HPP per loyang kue.
              </p>

              <div className="calc-slider-item">
                <div className="calc-slider-header">
                  <span>Estimasi Penggunaan Bahan Baku Bulanan:</span>
                  <span style={{ color: '#8A1A7B', fontWeight: 700, fontSize: '1.05rem' }}>
                    {monthlyVolume} Pak / Karton
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="3000"
                  step="50"
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                  className="calc-range-input"
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '18px' }}>
                <ShieldCheck size={20} style={{ color: '#047857' }} />
                <span style={{ fontSize: '0.84rem', color: '#6E6270' }}>
                  Distribusi resmi terpercaya melalui 30+ armada pendingin PT Sukanda Djaya.
                </span>
              </div>
            </div>

            <div className="calc-result-card">
              <span style={{ fontSize: '0.82rem', opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Total Penghematan Biaya per Tahun
              </span>
              <div style={{ fontSize: 'clamp(2rem, 3vw, 2.6rem)', fontWeight: 800, margin: '10px 0' }}>
                Rp {(estimatedSavings * 12).toLocaleString('id-ID')}*
              </div>
              <p style={{ fontSize: '0.82rem', opacity: 0.9, marginBottom: '20px' }}>
                Berdasarkan komparasi rata-rata yield 3.8x Merrylady vs krim konvensional.
              </p>

              <button
                onClick={() => onOpenSampleModal()}
                className="btn btn-primary"
                style={{ background: '#FFCD57', color: '#1E1A20', width: '100%', fontWeight: 700 }}
              >
                Minta Sampel Uji Coba Usaha
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

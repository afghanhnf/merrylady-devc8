import React from 'react';
import { Award, Globe, Truck, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../../data/merryladyData';

interface AboutViewProps {
  onOpenSampleModal?: () => void;
  lang?: 'ID' | 'EN';
}

export const AboutView: React.FC<AboutViewProps> = ({
  lang = 'ID',
}) => {
  return (
    <div className="landing-view-wrapper">
      {/* Hero Header */}
      <section className="landing-page-hero">
        <div className="container">
          <span className="m3-badge primary" style={{ marginBottom: '14px' }}>
            <Award size={14} />
            <span>Kredibilitas Global & Dedikasi Mutu</span>
          </span>
          <h1 className="landing-page-title">
            {lang === 'ID' ? 'Kisah Perjalanan Merrylady & PT Sukanda Djaya' : 'The Merrylady Story & PT Sukanda Djaya'}
          </h1>
          <p className="landing-page-subtitle">
            {lang === 'ID'
              ? 'Menggabungkan kepeloporan sains fraksinasi minyak nabati dari Shanghai Hi-Road Food Technology (sejak 2001) dengan kekuatan distribusi rantai pasok terdepan di Indonesia.'
              : 'Combining global plant-based fractionation technology from Shanghai Hi-Road Food Technology with national cold-chain logistics.'}
          </p>
        </div>
      </section>

      {/* Brand Heritage & Stats */}
      <section className="section-padding">
        <div className="container">
          {/* 4 Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '60px' }}>
            {BRAND_INFO.stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '28px',
                  textAlign: 'center',
                  border: '1.5px solid rgba(138, 26, 123, 0.12)',
                  boxShadow: '0 8px 24px rgba(138, 26, 123, 0.05)',
                }}
              >
                <div style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 800, color: '#8A1A7B', marginBottom: '8px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#4E444E', fontWeight: 600 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* 2-Column Story: Hi-Road & Sukanda Djaya */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '48px', alignItems: 'center', marginBottom: '80px' }}>
            <div>
              <span className="m3-badge primary" style={{ marginBottom: '12px' }}>
                <Globe size={13} />
                <span>Global Manufacturer</span>
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', fontWeight: 800, marginBottom: '16px' }}>
                Shanghai Hi-Road Food Technology Co., Ltd.
              </h2>
              <p style={{ color: '#4E444E', lineHeight: 1.7, fontSize: '0.96rem', marginBottom: '18px' }}>
                Didirikan pada tahun 2001 dan terdaftar resmi di Bursa Saham Shenzhen (Kode Saham: 300921), Hi-Road Group merupakan pelopor riset teknologi fraksinasi minyak nabati tanpa hidrogenasi buatan (bebas asam lemak trans).
              </p>
              <p style={{ color: '#4E444E', lineHeight: 1.7, fontSize: '0.96rem', marginBottom: '24px' }}>
                Dengan fasilitas manufaktur canggih berstandar HACCP dan ISO 22000, Hi-Road memasok bahan baku bakery bermutu tinggi ke berbagai negara di Asia, Timur Tengah, dan Eropa.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '10px', fontSize: '0.9rem', color: '#1E1A20' }}>
                  <CheckCircle2 size={18} style={{ color: '#047857', flexShrink: 0 }} />
                  <span>Formula Non-Hydrogenated bebas lemak trans untuk kesehatan jantung konsumen.</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', fontSize: '0.9rem', color: '#1E1A20' }}>
                  <CheckCircle2 size={18} style={{ color: '#047857', flexShrink: 0 }} />
                  <span>Kestabilan emulsi superior yang dirancang khusus untuk iklim tropis Asia Tenggara.</span>
                </div>
              </div>
            </div>

            <div
              style={{
                background: 'linear-gradient(135deg, #FAF4FB 0%, #FFFFFF 100%)',
                borderRadius: '32px',
                padding: 'clamp(28px, 4vw, 44px)',
                border: '1.5px solid rgba(138,26,123,0.16)',
                boxShadow: '0 12px 36px rgba(138,26,123,0.06)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Truck size={24} style={{ color: '#8A1A7B' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#8A1A7B', textTransform: 'uppercase' }}>
                  DISTRIBUTOR EKSKLUSIF NASIONAL
                </span>
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '14px' }}>
                PT Sukanda Djaya (Diamond Group)
              </h3>
              <p style={{ color: '#4E444E', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '16px' }}>
                {BRAND_INFO.distributor.description}
              </p>
              <p style={{ color: '#6E6270', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '24px' }}>
                {BRAND_INFO.distributor.reach}
              </p>

              <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '18px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1E1A20', marginBottom: '6px' }}>
                  📞 Layanan Pelanggan & Pemesanan Grosir:
                </div>
                <div style={{ fontSize: '0.86rem', color: '#8A1A7B', fontWeight: 700 }}>
                  Hotline: {BRAND_INFO.distributor.hotline}
                </div>
                <div style={{ fontSize: '0.86rem', color: '#047857', fontWeight: 700 }}>
                  WhatsApp: {BRAND_INFO.distributor.whatsapp}
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars of Quality */}
          <div>
            <div className="section-header" style={{ marginBottom: '36px' }}>
              <span className="m3-badge primary">Standar Keamanan Pangan</span>
              <h2 className="section-title">4 Pilar Sertifikasi & Kepercayaan</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              {BRAND_INFO.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '24px',
                    padding: '28px',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 4px 18px rgba(0,0,0,0.03)',
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#FAF2F9', color: '#8A1A7B', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', fontWeight: 800 }}>
                    0{idx + 1}
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>
                    {cert.title}
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: '#4E444E', lineHeight: 1.6 }}>
                    {cert.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

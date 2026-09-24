import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Layers, CheckCircle2, Award, Play } from 'lucide-react';
import { SCHEMATIC_MESSAGE } from '../data/merryladyData';

interface SchematicValueStripProps {
  lang?: 'ID' | 'EN';
}

export const SchematicValueStrip: React.FC<SchematicValueStripProps> = ({ lang = 'ID' }) => {
  return (
    <>
      {/* 1. Official Certifications Trust Bar (Halal, ISO 9001, HACCP, BPOM, BRCGS) */}
      <div className="certifications-trust-bar" id="sertifikasi">
        <div className="container">
          <div className="cert-bar-grid">
            {SCHEMATIC_MESSAGE.officialCertifications.map((cert) => (
              <div key={cert.code} className="cert-badge-item">
                <div className="cert-badge-icon">
                  <Award size={18} />
                </div>
                <div>
                  <div className="cert-badge-text-name">{cert.name}</div>
                  <div className="cert-badge-text-sub">{cert.standard}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Schematic Values & 7 USP Strip */}
      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        className="usp-section-strip"
      >
        <div className="container">
          {/* Section Heading & Elevator Pitch Preview */}
          <div className="section-header" style={{ marginBottom: '36px' }}>
            <span className="m3-badge primary">
              <span>{lang === 'ID' ? 'Standar Keunggulan Pangan' : 'Food Grade Excellence'}</span>
            </span>
            <h2 className="section-title">
              {lang === 'ID' ? 'Nilai Utama & Kualitas Tanpa Kompromi' : 'Core Values & Uncompromising Quality'}
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '780px', lineHeight: 1.65 }}>
              {lang === 'ID' ? (
                <>
                  Merrylady menghadirkan krim topping non-dairy & plant-based serta susu beras untuk aneka kreasi bakery dan minuman. Tekstur yang terjaga dan cita rasa seimbang tanpa lemak trans memberikan konsistensi sempurna bagi kreasi Anda.{' '}
                  <strong className="schematic-pitch-highlight">
                    Didukung pengalaman puluhan tahun di industri FnB global, kini kualitas profesional hadir di dapur Anda.
                  </strong>
                </>
              ) : (
                <>
                  Merrylady offers non-dairy & plant-based topping creams and rice milk for various kinds of bakery and beverages. Its preserved texture and balanced taste thanks to zero trans-fat brings consistent servings to your creations.{' '}
                  <strong className="schematic-pitch-highlight">
                    With decades of experience in the global FnB Industry, professional-grade quality is now in your kitchen.
                  </strong>
                </>
              )}
            </p>
          </div>

          {/* 3 Customer Value Cards */}
          <div className="schematic-values-grid">
            {SCHEMATIC_MESSAGE.customerValues.map((val, idx) => (
              <motion.div
                key={val.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: [0.2, 0, 0, 1] }}
                className="schematic-value-card"
              >
                <div className="schematic-value-number">0{idx + 1}</div>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: '#FAF2F9',
                    color: '#8A1A7B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  {idx === 0 && <ShieldCheck size={22} />}
                  {idx === 1 && <Layers size={22} />}
                  {idx === 2 && <Award size={22} />}
                </div>
                <h3 style={{ fontSize: '1.12rem', fontWeight: 800, color: '#1E1A20', marginBottom: '4px' }}>
                  {lang === 'ID' ? val.subtitle : val.title}
                </h3>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#8A1A7B', marginBottom: '10px' }}>
                  {lang === 'ID' ? val.title : val.subtitle}
                </div>
                <p style={{ fontSize: '0.86rem', color: '#4B4B4B', lineHeight: 1.55 }}>
                  {lang === 'ID'
                    ? val.desc
                    : idx === 0
                    ? 'High stability and temperature tolerance guarantee precise decoration and presentation in every single serving.'
                    : idx === 1
                    ? 'Multipurpose formulation for cake whipping, 3D piping, baked pastry filling, cloud latte foam, and cold drinks.'
                    : 'World-class culinary standard crafted effortlessly from home bakeries to five-star hotel pastry chefs.'}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Section: 7 Keunggulan Header & Video Manifesto Placement */}
          <div style={{ marginTop: '48px' }}>
            <div
              style={{
                textAlign: 'center',
                fontSize: '0.88rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#8A1A7B',
                marginBottom: '16px',
              }}
            >
              <span>{lang === 'ID' ? '7 Keunggulan Utama Produk Merrylady' : '7 Core Merrylady Advantages'}</span>
            </div>

            {/* Clean Video Manifesto Section (Widescreen Placement without Text/Modal) */}
            <div className="video-manifesto-container">
              <div className="video-manifesto-frame">
                <img
                  src="/images/video_manifesto_poster.jpg"
                  alt="Merrylady Video Manifesto"
                  className="video-manifesto-img"
                />
                <div className="video-manifesto-overlay" />

                {/* Center Play Button & Glow */}
                <div className="video-manifesto-play-wrap">
                  <div className="video-manifesto-play-btn">
                    <Play size={32} fill="currentColor" stroke="none" />
                  </div>
                </div>
              </div>

              {/* Compact 7 USP Badges underneath the video */}
              <div className="schematic-usp-pills-row compact">
                {SCHEMATIC_MESSAGE.usps.map((usp, i) => (
                  <span key={i} className="schematic-usp-pill compact">
                    <CheckCircle2 size={13} style={{ color: '#047857', flexShrink: 0 }} />
                    <span>{lang === 'ID' ? usp.badge : usp.label}</span>
                    {lang === 'ID' && (
                      <span style={{ fontSize: '0.68rem', opacity: 0.7, fontWeight: 500 }}>
                        ({usp.label})
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};


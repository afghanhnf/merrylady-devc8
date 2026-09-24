import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, CheckCircle2, MessageCircle, ShieldCheck, Store } from 'lucide-react';

interface BrandTrustSectionProps {
  onOpenSampleModal?: () => void;
  lang?: 'ID' | 'EN';
}

interface ClientPartner {
  id: string;
  name: string;
  category: string;
  outletCount: string;
  highlight: string;
  highlightEn?: string;
  logo: React.ReactNode;
}

const CLIENT_PARTNERS: ClientPartner[] = [
  {
    id: 'holland-bakery',
    name: 'Holland Bakery',
    category: 'Bakery & Cake Leader',
    outletCount: '350+',
    highlight: 'Krim Whipping & Isian Roti Lembut',
    highlightEn: 'Whip Topping & Soft Bun Fillings',
    logo: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 6V26M6 16H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 16L23 9M16 16L9 23M16 16L23 23M16 16L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="16" cy="16" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'fore-coffee',
    name: 'Fore Coffee',
    category: 'Specialty Coffee Chain',
    outletCount: '180+',
    highlight: 'Signature Cloud Foam & Plant-Based',
    highlightEn: 'Signature Cloud Foam & Plant-Based',
    logo: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L9 14H13L7 22H14.5V28H17.5V22H25L19 14H23L16 4Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'tous-les-jours',
    name: 'Tous Les Jours',
    category: 'French-Asian Artisan Bakery',
    outletCount: '60+',
    highlight: 'Krim Dekorasi Cake & Fresh Pastry',
    highlightEn: 'Cake Decorating & Fresh Pastry Cream',
    logo: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="21" r="5.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="23" cy="21" r="5.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 21L14 13H18L23 21M14 13L11.5 9H7M18 13L15.5 21M18 13H24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'mako-bakery',
    name: 'Mako Cake & Bakery',
    category: 'Premium Boutique Bakery',
    outletCount: '90+',
    highlight: 'Custard Tart & Soft Bun Filling',
    highlightEn: 'Custard Tart & Soft Bun Filling',
    logo: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 24V8L16 18L26 8V24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="8" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'jco-donuts',
    name: 'J.CO Donuts & Coffee',
    category: 'Lifestyle Cafe Chain',
    outletCount: '300+',
    highlight: 'Topping Donat & Frappe Cream',
    highlightEn: 'Donut Topping & Frappe Cream',
    logo: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="16" cy="16" r="5.5" fill="currentColor" />
        <path d="M16 3C18.5 8 18.5 8 16 11M29 16C24 18.5 24 18.5 21 16M16 29C13.5 24 13.5 24 16 21M3 16C8 13.5 8 13.5 11 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'kopi-kenangan',
    name: 'Kopi Kenangan',
    category: 'Leading Coffee & Dessert',
    outletCount: '850+',
    highlight: 'Velvet Cloud Foam & Macchiato',
    highlightEn: 'Velvet Cloud Foam & Macchiato',
    logo: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12C8 20.5 12 25.5 16 26.5C20 25.5 24 20.5 24 12H8Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M24 14H27.5C28.8 14 29.5 15.2 29.5 16.5C29.5 17.8 28.8 19 27.5 19H23" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 15C14.8 13.2 12 14 12 16C12 18 16 20.5 16 20.5C16 20.5 20 18 20 16C20 14 17.2 13.2 16 15Z" fill="currentColor" />
        <path d="M13 8.5C13 8.5 13.8 6 16 6C18.2 6 19 8.5 19 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'the-harvest',
    name: 'The Harvest Cakes',
    category: 'European Style Patisserie',
    outletCount: '80+',
    highlight: 'Celebration Cake Piping & Gateau',
    highlightEn: 'Celebration Cake Piping & Gateau',
    logo: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 22H25L27 11L21 15.5L16 8L11 15.5L5 11L7 22Z" fill="currentColor" />
        <circle cx="16" cy="26" r="1.8" fill="currentColor" />
        <circle cx="11" cy="26" r="1.8" fill="currentColor" />
        <circle cx="21" cy="26" r="1.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'dcrepes',
    name: "D'Crepes",
    category: 'Dessert & Crepes Specialist',
    outletCount: '120+',
    highlight: 'Krim Isian Crepes & Topping Manis',
    highlightEn: 'Crepe Fillings & Sweet Toppings',
    logo: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 27L6 10C9.5 6 22.5 6 26 10L16 27Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M11 10L16 20L21 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 8.5Q16 3.5 23 8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'excelso',
    name: 'Excelso Coffee',
    category: 'Fine Coffee & Dining',
    outletCount: '130+',
    highlight: 'Signature Dessert & Blended Cream',
    highlightEn: 'Signature Dessert & Blended Cream',
    logo: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="22" height="22" rx="6" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 16C11 11 21 11 21 16C21 21 11 21 11 16Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 11C13.5 14.5 18.5 17.5 16 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'rotio',
    name: "Roti'O",
    category: 'Fresh Baked Bun Network',
    outletCount: '500+',
    highlight: 'Cheese Filling & Pastry Cream',
    highlightEn: 'Cheese Filling & Pastry Cream',
    logo: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 20C5 12.5 10 7.5 16 7.5C22 7.5 27 12.5 27 20C27 24 22 25 16 25C10 25 5 24 5 20Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 14C12.5 11.5 19.5 11.5 22 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 18.5C14.5 16.5 17.5 16.5 20 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'bakerzin',
    name: 'Bakerzin',
    category: 'Dessert & Patisserie Lounge',
    outletCount: '25+',
    highlight: 'Artisan Mousse & High-End Pastry',
    highlightEn: 'Artisan Mousse & High-End Pastry',
    logo: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 23H23V25.5H9V23Z" fill="currentColor" />
        <path d="M9 23C6 23 5 18 7.5 15.5C5 12 8.5 8 12.5 9.5C14 6.5 18 6.5 19.5 9.5C23.5 8 27 12 24.5 15.5C27 18 26 23 23 23" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'imperial-group',
    name: 'Imperial Kitchen Group',
    category: 'Casual Dining & Sweet Dimsum',
    outletCount: '100+',
    highlight: 'Dessert Cream & Egg Tart Custard',
    highlightEn: 'Dessert Cream & Egg Tart Custard',
    logo: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 22H27" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M7 22C7 14.5 11 10.5 16 10.5C21 10.5 25 14.5 25 22" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16" cy="8.5" r="2" fill="currentColor" />
        <line x1="9" y1="25.5" x2="23" y2="25.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const BrandTrustSection: React.FC<BrandTrustSectionProps> = ({
  lang = 'ID',
}) => {
  return (
    <motion.section
      id="tentang"
      className="trust-section section-padding"
      style={{ background: '#FAF7FB' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="m3-badge primary">
            <span>{lang === 'ID' ? '20+ Tahun Kepercayaan Industri' : '20+ Years Industry Trust'}</span>
          </span>
          <h2 className="section-title">
            {lang === 'ID'
              ? 'Dipercaya Lebih dari 20 Tahun oleh Brand Kuliner Terkemuka'
              : 'Trusted for 20+ Years by Leading Food & Beverage Brands'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ID'
              ? 'Dari jaringan bakery chain nasional, coffee shop modern, hingga artisan patisserie di seluruh Indonesia mengandalkan stabilitas dan konsistensi rasa Merrylady.'
              : 'From national bakery chains to modern specialty coffee shops across Indonesia, top culinary brands rely on Merrylady stability and taste consistency.'}
          </p>
        </div>

        {/* 12 Enterprise Client Brand Logos Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '18px',
            marginBottom: '40px',
          }}
        >
          {CLIENT_PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="client-partner-card"
            >
              {/* Monochrome Vector Logo Mark */}
              <div className="client-partner-logo-box">
                {partner.logo}
              </div>

              {/* Brand Info */}
              <div style={{ minWidth: 0, flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px', marginBottom: '3px' }}>
                  <h4
                    style={{
                      fontSize: '0.96rem',
                      fontWeight: 800,
                      color: '#1E1A20',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {partner.name}
                  </h4>
                </div>

                <p
                  style={{
                    fontSize: '0.74rem',
                    color: '#6E6270',
                    fontWeight: 600,
                    marginBottom: '6px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {partner.category}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'nowrap' }}>
                  <span className="client-partner-pill">
                    {partner.outletCount} {lang === 'ID' ? 'Gerai' : 'Outlets'}
                  </span>
                  <span style={{ fontSize: '0.68rem', color: '#8C7F93', fontWeight: 500, whiteSpace: 'nowrap' }}>
                    • {lang === 'ID' ? 'Mitra 20 Thn' : '20+ Yrs Partner'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics Bar */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(138, 26, 123, 0.06) 0%, rgba(255, 205, 87, 0.12) 100%)',
            border: '1.5px solid rgba(138, 26, 123, 0.15)',
            borderRadius: '24px',
            padding: '24px 32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            alignItems: 'center',
            marginBottom: '48px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#8A1A7B', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Award size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#1E1A20', lineHeight: 1.1 }}>
                {lang === 'ID' ? '20+ Tahun' : '20+ Years'}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#6E6270', marginTop: '2px' }}>
                {lang === 'ID' ? 'Mitra Kuliner Terpercaya' : 'Trusted Culinary Partner'}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#8A1A7B', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Store size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#1E1A20', lineHeight: 1.1 }}>
                {lang === 'ID' ? '10.000+ Gerai' : '10,000+ Outlets'}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#6E6270', marginTop: '2px' }}>
                {lang === 'ID' ? 'Bakery & Cafe Se-Indonesia' : 'Bakeries & Cafés Nationwide'}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#047857', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#1E1A20', lineHeight: 1.1 }}>100% Halal</div>
              <div style={{ fontSize: '0.78rem', color: '#6E6270', marginTop: '2px' }}>
                {lang === 'ID' ? 'MUI & BPJPH Resmi' : 'Official MUI & BPJPH Certified'}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#047857', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <CheckCircle2 size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#1E1A20', lineHeight: 1.1 }}>
                {lang === 'ID' ? '0% Lemak Trans' : '0% Trans Fat'}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#6E6270', marginTop: '2px' }}>
                {lang === 'ID' ? 'Standar Mutu Internasional' : 'Global Food Safety Standards'}
              </div>
            </div>
          </div>
        </div>

        {/* Pre-Footer High-Converting CTA Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #3D0936 0%, #6E1262 50%, #8A1A7B 100%)',
            borderRadius: '32px',
            padding: 'clamp(36px, 5vw, 64px) clamp(24px, 4vw, 56px)',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(138, 26, 123, 0.22)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Subtle Ambient Background Accents */}
          <div
            style={{
              position: 'absolute',
              top: '-40%',
              right: '-10%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 205, 87, 0.18) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-30%',
              left: '-10%',
              width: '350px',
              height: '350px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#FFCD57',
              padding: '6px 18px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 750,
              letterSpacing: '0.03em',
              marginBottom: '18px',
            }}
          >
            <span>{lang === 'ID' ? 'Kemitraan & Uji Coba Produk' : 'Partnership & Free Product Trial'}</span>
          </span>

          <h3
            style={{
              fontSize: 'clamp(1.7rem, 3.2vw, 2.6rem)',
              fontWeight: 900,
              lineHeight: 1.25,
              maxWidth: '820px',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
            }}
          >
            {lang === 'ID'
              ? 'Siap Hadirkan Kualitas Profesional di Rumah dan Usahamu?'
              : 'Ready to Bring Professional Quality & Elevate Your Culinary Business?'}
          </h3>

          <p
            style={{
              fontSize: 'clamp(0.92rem, 1.2vw, 1.05rem)',
              color: 'rgba(255, 255, 255, 0.88)',
              lineHeight: 1.65,
              maxWidth: '700px',
              marginBottom: '32px',
            }}
          >
            {lang === 'ID'
              ? 'Dapatkan sampel produk untuk kitchen Anda, sesi demo privat bersama pastry chef, atau terhubung langsung dengan distributor resmi terdekat.'
              : 'Request free trial samples for your kitchen, private masterclass demo sessions, or connect with our authorized cold-chain distributor.'}
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              marginBottom: '32px',
            }}
          >
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{
                background: '#FFCD57',
                color: '#4A0E43',
                padding: '14px 28px',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '0.94rem',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 24px rgba(255, 205, 87, 0.35)',
                transition: 'all 0.25s ease',
                textDecoration: 'none',
              }}
              className="cta-primary-btn"
            >
              <span>{lang === 'ID' ? 'Ajukan Sampel Sekarang' : 'Request Free Sample Now'}</span>
              <ArrowRight size={17} />
            </a>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(10px)',
                color: '#FFFFFF',
                padding: '14px 26px',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.94rem',
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              className="cta-secondary-btn"
            >
              <MessageCircle size={17} />
              <span>{lang === 'ID' ? 'Layanan Kemitraan & Distribusi' : 'Partnership & Distribution Services'}</span>
            </a>
          </div>

          {/* Official Distribution Note by PT Sukanda Djaya */}
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.24)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              backdropFilter: 'blur(12px)',
              borderRadius: '16px',
              padding: '12px 22px',
              maxWidth: '680px',
              marginBottom: '24px',
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: '0.84rem', color: '#FFF3D4', lineHeight: 1.55, margin: 0 }}>
              {lang === 'ID' ? (
                <>Produk Merrylady Indonesia didistribusikan resmi secara nasional oleh <strong>PT. Sukanda Djaya</strong>.</>
              ) : (
                <>Merrylady Indonesia products are exclusively distributed nationwide by <strong>PT. Sukanda Djaya</strong>.</>
              )}
            </p>
          </div>

          {/* Quick Assurance Badges */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(12px, 2.5vw, 28px)',
              flexWrap: 'wrap',
              fontSize: '0.8rem',
              color: 'rgba(255, 255, 255, 0.82)',
              borderTop: '1px solid rgba(255, 255, 255, 0.14)',
              paddingTop: '20px',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color="#FFCD57" />
              <span>{lang === 'ID' ? 'Respons Cepat 1x24 Jam' : 'Fast 1x24h Response'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color="#FFCD57" />
              <span>{lang === 'ID' ? 'Sampel Uji Coba Usaha' : 'Free Business Sample'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color="#FFCD57" />
              <span>{lang === 'ID' ? 'Dukungan Demo Resep Chef' : 'Chef Recipe & Demo Support'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color="#FFCD57" />
              <span>{lang === 'ID' ? 'Rantai Pasok Resmi' : 'Guaranteed Supply Chain'}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};



import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, targetId?: string) => void;
  onOpenSampleModal?: () => void;
  lang: 'ID' | 'EN';
  onToggleLang: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onToggleLang,
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand Heritage */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <img
                src="/logo%20merrylady.png"
                alt="Merrylady Indonesia Logo"
                style={{ height: '36px', filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p style={{ fontSize: '0.86rem', color: '#B5A8BC', lineHeight: 1.6, marginBottom: '20px' }}>
              {lang === 'ID'
                ? 'Membawa kebahagiaan rasa di setiap momen manis keluarga, kafe, dan bakery Indonesia. Didukung teknologi fraksinasi nabati murni Shanghai Hi-Road Food Technology sejak 2001.'
                : 'Bringing sweet joyful moments to family kitchens, cafés, and bakeries across Indonesia. Powered by Hi-Road Food Technology non-hydrogenated fractionation since 2001.'}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <span style={{ background: '#2D1B33', color: '#FFCD57', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.74rem', fontWeight: 700 }}>
                100% HALAL MUI & BPJPH
              </span>
              <span style={{ background: '#2D1B33', color: '#A7F3D0', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.74rem', fontWeight: 700 }}>
                TRANS-FAT FREE
              </span>
            </div>

            {/* Social Media Icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="footer-social-btn"
                title="Instagram Merrylady"
                aria-label="Instagram"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="footer-social-btn"
                title="Facebook Merrylady"
                aria-label="Facebook"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="footer-social-btn"
                title="TikTok Merrylady"
                aria-label="TikTok"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="footer-social-btn"
                title="LinkedIn Merrylady"
                aria-label="LinkedIn"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Moments & Creations */}
          <div>
            <h4 className="footer-col-title">
              {lang === 'ID' ? 'Momen & Kreasi' : 'Moments & Creations'}
            </h4>
            <ul className="footer-links-list">
              <li>
                <a href="#moments" className="footer-link" style={{ textDecoration: 'none' }}>
                  <span>Merry Moments Hub</span>
                  <ArrowRight size={13} className="footer-link-arrow" />
                </a>
              </li>
              <li>
                <a href="#moments" className="footer-link" style={{ textDecoration: 'none' }}>
                  <span>Family Baking Sunday</span>
                  <ArrowRight size={13} className="footer-link-arrow" />
                </a>
              </li>
              <li>
                <a href="#moments" className="footer-link" style={{ textDecoration: 'none' }}>
                  <span>Café at Home & Barista</span>
                  <ArrowRight size={13} className="footer-link-arrow" />
                </a>
              </li>
              <li>
                <a href="#moments" className="footer-link" style={{ textDecoration: 'none' }}>
                  <span>Celebration & Birthday</span>
                  <ArrowRight size={13} className="footer-link-arrow" />
                </a>
              </li>
              <li>
                <a href="#kitchen-lab" className="footer-link" style={{ textDecoration: 'none' }}>
                  <span>{lang === 'ID' ? 'Kitchen Lab & Anti-Gagal' : 'Kitchen Lab & Zero-Fail Tips'}</span>
                  <ArrowRight size={13} className="footer-link-arrow" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Products & Business */}
          <div>
            <h4 className="footer-col-title">
              {lang === 'ID' ? 'Produk & Usaha' : 'Products & Business'}
            </h4>
            <ul className="footer-links-list">
              <li>
                <a href="#products" className="footer-link" style={{ textDecoration: 'none' }}>
                  <span>ShineRoad Whip Topping</span>
                  <ArrowRight size={13} className="footer-link-arrow" />
                </a>
              </li>
              <li>
                <a href="#products" className="footer-link" style={{ textDecoration: 'none' }}>
                  <span>Skibbo Whip Topping</span>
                  <ArrowRight size={13} className="footer-link-arrow" />
                </a>
              </li>
              <li>
                <a href="#products" className="footer-link" style={{ textDecoration: 'none' }}>
                  <span>Cheese Filling</span>
                  <ArrowRight size={13} className="footer-link-arrow" />
                </a>
              </li>
              <li>
                <a href="#products" className="footer-link" style={{ textDecoration: 'none' }}>
                  <span>Tart Filling</span>
                  <ArrowRight size={13} className="footer-link-arrow" />
                </a>
              </li>
              <li>
                <a href="#products" className="footer-link" style={{ textDecoration: 'none' }}>
                  <span>{lang === 'ID' ? 'Susu Beras & Multi Cream' : 'Rice Milk & Multi Cream'}</span>
                  <ArrowRight size={13} className="footer-link-arrow" />
                </a>
              </li>
              <li>
                <a href="#business" className="footer-link" style={{ textDecoration: 'none' }}>
                  <span>{lang === 'ID' ? 'Solusi Bakery UMKM & B2B' : 'Bakery Solutions & B2B'}</span>
                  <ArrowRight size={13} className="footer-link-arrow" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter E-Book */}
          <div>
            <h4 className="footer-col-title">
              {lang === 'ID' ? 'Dapatkan E-Book Resep' : 'Get Exclusive Recipe E-Book'}
            </h4>
            <p style={{ fontSize: '0.84rem', color: '#B5A8BC', lineHeight: 1.5, marginBottom: '14px' }}>
              {lang === 'ID'
                ? 'Daftarkan email Anda untuk menerima inspirasi resep eksklusif mingguan dan kabar roadshow demo terdekat.'
                : 'Subscribe to receive weekly chef-curated recipes, product guides, and upcoming roadshow invitations.'}
            </p>

            {isSubscribed ? (
              <div style={{ background: '#234433', color: '#A7F3D0', padding: '12px 16px', borderRadius: '12px', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} />
                <span>
                  {lang === 'ID'
                    ? 'Terima kasih! Link unduh E-Book telah dikirim ke email Anda.'
                    : 'Thank you! The E-Book download link has been sent to your email.'}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px', marginBottom: '18px' }}>
                <input
                  type="email"
                  required
                  placeholder={lang === 'ID' ? 'Email Anda...' : 'Enter your email...'}
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  style={{
                    background: '#2A2030',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '9999px',
                    padding: '8px 16px',
                    color: '#FFFFFF',
                    fontSize: '0.84rem',
                    flexGrow: 1,
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ padding: '8px 16px', fontSize: '0.82rem' }}
                >
                  <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            {lang === 'ID'
              ? '© 2001 - 2026 Shanghai Hi-Road Food Technology Co., Ltd. Seluruh hak cipta dilindungi undang-undang.'
              : '© 2001 - 2026 Shanghai Hi-Road Food Technology Co., Ltd. All rights reserved.'}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={onToggleLang}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#B5A8BC',
                fontSize: '0.8rem',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
              }}
            >
              <Globe size={14} />
              <span>{lang === 'ID' ? 'Bahasa: Indonesia (ID)' : 'Language: English (EN)'}</span>
            </button>
            <a href="#tentang" className="footer-link" style={{ textDecoration: 'none' }}>
              {lang === 'ID' ? 'Tentang Kami' : 'About Us'}
            </a>
            <a href="#tentang" className="footer-link" style={{ textDecoration: 'none' }}>
              {lang === 'ID' ? 'Kontak & Cabang' : 'Contact & Branches'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


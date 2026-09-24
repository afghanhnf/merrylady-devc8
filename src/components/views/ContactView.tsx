import React, { useState } from 'react';
import { Send, CheckCircle2, Search } from 'lucide-react';
import { DISTRIBUTION_BRANCHES, BRAND_INFO } from '../../data/merryladyData';

interface ContactViewProps {
  onOpenSampleModal?: () => void;
  lang?: 'ID' | 'EN';
}

export const ContactView: React.FC<ContactViewProps> = ({
  lang = 'ID',
}) => {
  const [searchCity, setSearchCity] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Semua');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    city: '',
    phone: '',
    email: '',
    message: '',
  });

  const regions = ['Semua', 'Jawa & Bali', 'Sumatera', 'Kalimantan', 'Sulawesi & Indonesia Timur'];

  const filteredBranches = DISTRIBUTION_BRANCHES.filter((b) => {
    const matchesRegion = selectedRegion === 'Semua' || b.region === selectedRegion;
    const matchesSearch = b.city.toLowerCase().includes(searchCity.toLowerCase()) || b.address.toLowerCase().includes(searchCity.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="landing-view-wrapper">
      {/* Hero Header */}
      <section className="landing-page-hero">
        <div className="container">
          <span className="m3-badge primary" style={{ marginBottom: '14px' }}>
            Jaringan Nasional 30+ Kota
          </span>
          <h1 className="landing-page-title">
            {lang === 'ID' ? 'Hubungi Kami & Temukan Distributor Terdekat' : 'Contact Us & Find Nearest Distributor'}
          </h1>
          <p className="landing-page-subtitle">
            {lang === 'ID'
              ? 'Seluruh produk Merrylady tersedia di cabang resmi PT Sukanda Djaya di seluruh kota besar Nusantara dengan armada berpendingin suhu beku.'
              : 'All Merrylady products are available across PT Sukanda Djaya branches nationwide with cold-chain transport.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'start', marginBottom: '80px' }}>
            {/* Contact Form */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '32px',
                padding: 'clamp(28px, 4vw, 44px)',
                border: '1.5px solid rgba(138, 26, 123, 0.14)',
                boxShadow: '0 12px 36px rgba(138, 26, 123, 0.06)',
              }}
            >
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>
                Kirim Pertanyaan / Permintaan Informasi
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#6E6270', marginBottom: '24px' }}>
                Tim representatif Merrylady & PT Sukanda Djaya akan merespons dalam waktu 1x24 jam kerja.
              </p>

              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px', background: '#F0FDF4', borderRadius: '20px', border: '1px solid #86EFAC' }}>
                  <CheckCircle2 size={48} style={{ color: '#16A34A', margin: '0 auto 16px auto' }} />
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#14532D', marginBottom: '8px' }}>
                    Pesan Anda Berhasil Terkirim!
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#166534', lineHeight: 1.5 }}>
                    Terima kasih telah menghubungi Merrylady Indonesia. Tim spesialis kami akan segera menghubungi nomor telepon / WhatsApp yang Anda cantumkan.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nama Anda"
                        style={{ width: '100%', background: '#FAF7FB', border: '1px solid rgba(0,0,0,0.1)', padding: '12px 16px', borderRadius: '12px' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                        Nama Usaha / Usaha Bakery
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="Contoh: Sweet Joy Bakery"
                        style={{ width: '100%', background: '#FAF7FB', border: '1px solid rgba(0,0,0,0.1)', padding: '12px 16px', borderRadius: '12px' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                        Nomor WhatsApp / HP *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0812-xxxx-xxxx"
                        style={{ width: '100%', background: '#FAF7FB', border: '1px solid rgba(0,0,0,0.1)', padding: '12px 16px', borderRadius: '12px' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                        Kota / Domisili *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Contoh: Surabaya"
                        style={{ width: '100%', background: '#FAF7FB', border: '1px solid rgba(0,0,0,0.1)', padding: '12px 16px', borderRadius: '12px' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                      Pesan atau Kebutuhan Bahan Baku *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tuliskan pertanyaan seputar produk, harga grosir, atau sampel..."
                      style={{ width: '100%', background: '#FAF7FB', border: '1px solid rgba(0,0,0,0.1)', padding: '12px 16px', borderRadius: '12px', resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ padding: '14px', width: '100%', marginTop: '8px' }}
                  >
                    <Send size={16} />
                    <span>Kirim Pesan Sekarang</span>
                  </button>
                </form>
              )}
            </div>

            {/* Direct WhatsApp Concierge & Hotline Card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div
                style={{
                  background: 'linear-gradient(135deg, #047857 0%, #064E3B 100%)',
                  color: '#FFFFFF',
                  borderRadius: '30px',
                  padding: '32px',
                  boxShadow: '0 12px 36px rgba(4, 120, 87, 0.2)',
                }}
              >
                <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '10px' }}>
                  DIRECT WHATSAPP CONCIERGE
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '10px' }}>
                  Chat Langsung dengan Chef & Spesialis Merrylady
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#D1FAE5', lineHeight: 1.6, marginBottom: '22px' }}>
                  Butuh respons cepat seputar rekomendasi produk, takaran resep, atau pemesanan darurat? Hubungi kami via WhatsApp.
                </p>

                <a
                  href={`https://wa.me/6282297736038?text=Halo%20Merrylady%20Indonesia,%20saya%20ingin%20pemesanan%20produk%20dan%20informasi%20distribusi%20resmi%20PT%20Sukanda%20Djaya`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ background: '#22C55E', color: '#FFFFFF', width: '100%', fontWeight: 700 }}
                >
                  <span>Chat WhatsApp Sales (+62 822 9773 6038)</span>
                </a>
              </div>

              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '26px',
                  padding: '28px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.03)',
                }}
              >
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '14px' }}>
                  Hotline Nasional PT Sukanda Djaya
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4E444E' }}>
                    <span>Telepon: {BRAND_INFO.distributor.hotline}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4E444E' }}>
                    <span>Email: {BRAND_INFO.distributor.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Branch Locator (30+ Cities) */}
          <div style={{ marginTop: '60px' }}>
            <div className="section-header" style={{ marginBottom: '32px' }}>
              <span className="m3-badge primary">Branch Locator</span>
              <h2 className="section-title">Daftar Cabang Distribusi Resmi</h2>
              <p className="section-subtitle">
                Temukan alamat kantor cabang dan nomor kontak PT Sukanda Djaya di kota Anda:
              </p>
            </div>

            {/* Filter and Search Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {regions.map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setSelectedRegion(reg)}
                    className={`moment-chip ${selectedRegion === reg ? 'active' : 'inactive'}`}
                    style={{ fontSize: '0.82rem', padding: '6px 16px' }}
                  >
                    {reg}
                  </button>
                ))}
              </div>

              <div style={{ position: 'relative', minWidth: '260px' }}>
                <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#8C7F93' }} />
                <input
                  type="text"
                  placeholder="Cari kota / alamat..."
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  style={{ width: '100%', padding: '9px 14px 9px 38px', borderRadius: '9999px', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.12)', fontSize: '0.86rem' }}
                />
              </div>
            </div>

            {/* Branch Cards */}
            <div className="branch-locator-grid">
              {filteredBranches.map((branch, i) => (
                <div key={i} className="branch-card">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#8A1A7B', background: '#FAF2F9', padding: '2px 8px', borderRadius: '6px' }}>
                      {branch.region}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.08rem', fontWeight: 800, marginBottom: '6px', color: '#1E1A20' }}>
                    {branch.city}
                  </h4>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4E444E', marginBottom: '6px' }}>
                    {branch.distributorName}
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#6E6270', lineHeight: 1.5, marginBottom: '12px' }}>
                    📍 {branch.address}
                  </p>

                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#8A1A7B' }}>
                    📞 {branch.phone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

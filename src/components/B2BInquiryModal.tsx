import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { PRODUCTS } from '../data/merryladyData';
import type { Product } from '../data/merryladyData';

interface B2BInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: Product | null;
}

export const B2BInquiryModal: React.FC<B2BInquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    preselectedProduct ? preselectedProduct.id : PRODUCTS[0].id
  );
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    city: '',
    businessType: 'Bakery & Cake Shop',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25 }}
          className="modal-content"
          style={{ maxWidth: '620px' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Icon */}
          <button onClick={onClose} className="modal-close-icon" aria-label="Tutup">
            <X size={18} />
          </button>

          {!submitted ? (
            <div>
              <span className="m3-badge primary" style={{ marginBottom: '12px' }}>
                Layanan Khusus HoReCa & Bakery
              </span>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '8px' }}>
                Permintaan Sampel Produk & Konsultasi
              </h2>
              <p style={{ color: '#6E6270', fontSize: '0.92rem', marginBottom: '24px', lineHeight: 1.6 }}>
                Uji coba langsung keunggulan tekstur dan stabilitas krim Merrylady di dapur Anda. Tim teknis aplikasi kami siap membantu penyesuaian resep.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                    Produk yang Ingin Dicoba *
                  </label>
                  <select
                    value={selectedProductId}
                    onChange={(e) => setSelectedProductId(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #E2DCE7',
                      background: '#F9F6FA',
                      fontSize: '0.92rem',
                    }}
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.category})
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Chef / Pemilik Usaha"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1px solid #E2DCE7',
                        background: '#F9F6FA',
                        fontSize: '0.92rem',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                      Nama Usaha / Brand *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Sweet Treats Bakery"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1px solid #E2DCE7',
                        background: '#F9F6FA',
                        fontSize: '0.92rem',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                      Nomor WhatsApp / Telepon *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812-XXXX-XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1px solid #E2DCE7',
                        background: '#F9F6FA',
                        fontSize: '0.92rem',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                      Kota / Wilayah *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Surabaya / Jakarta"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1px solid #E2DCE7',
                        background: '#F9F6FA',
                        fontSize: '0.92rem',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                    Jenis Usaha
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #E2DCE7',
                      background: '#F9F6FA',
                      fontSize: '0.92rem',
                    }}
                  >
                    <option value="Bakery & Cake Shop">Bakery & Toko Kue</option>
                    <option value="Cafe & Coffee Shop">Kafe & Kedai Minuman</option>
                    <option value="Hotel & Restaurant">Hotel / Restoran (HoReCa)</option>
                    <option value="Home Baker / UMKM">Home Baker & UMKM</option>
                    <option value="Distributor Lokal">Distributor Lokal / Reseller</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ marginTop: '12px', width: '100%' }}
                >
                  Kirim Permintaan Sampel
                </button>
              </form>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '24px 12px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: '#D1FAE5',
                  color: '#059669',
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  marginBottom: '16px',
                }}
              >
                ✓
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '10px' }}>
                Permintaan Berhasil Dikirim!
              </h3>
              <p style={{ color: '#4E444E', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Terima kasih <strong>{formData.contactName}</strong> dari <strong>{formData.businessName}</strong>.
                Tim representatif Merrylady bersama perwakilan distribusi <strong>PT Sukanda Djaya</strong> di wilayah <strong>{formData.city}</strong> akan segera menghubungi nomor <strong>{formData.phone}</strong> untuk koordinasi pengiriman sampel uji coba.
              </p>
              <button onClick={handleReset} className="btn btn-outline">
                Kembali ke Katalog
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

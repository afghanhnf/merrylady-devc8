import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Send } from 'lucide-react';
import type { RoadshowEvent } from '../data/merryladyData';

interface EventRSVPModalProps {
  event: RoadshowEvent | null;
  onClose: () => void;
}

export const EventRSVPModal: React.FC<EventRSVPModalProps> = ({ event, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    bakeryName: '',
    role: 'Home Baker',
  });

  if (!event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={handleClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25 }}
          className="modal-panel"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close-btn" onClick={handleClose} aria-label="Tutup">
            <X size={20} />
          </button>

          {isSuccess ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#D1FAE5', color: '#047857', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                <CheckCircle2 size={36} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>
                Pendaftaran Berhasil!
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#4E444E', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 24px auto' }}>
                E-Ticket dan konfirmasi jadwal workshop untuk <strong>{event.title}</strong> telah dikirimkan ke WhatsApp & Email Anda. Sampai jumpa di lokasi acara!
              </p>
              <button onClick={handleClose} className="btn btn-primary" style={{ padding: '10px 24px' }}>
                Tutup Jendela
              </button>
            </div>
          ) : (
            <div>
              <span className="m3-badge primary" style={{ marginBottom: '12px' }}>
                Registrasi Roadshow Demo
              </span>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '8px' }}>
                {event.title}
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.84rem', color: '#8A1A7B', fontWeight: 700, marginBottom: '18px', flexWrap: 'wrap' }}>
                <span>📅 {event.date} • {event.time}</span>
                <span>📍 {event.venue}, {event.city}</span>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '4px' }}>
                    Nama Lengkap Peserta *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nama Lengkap"
                    style={{ width: '100%', background: '#FAF7FB', border: '1px solid rgba(0,0,0,0.1)', padding: '10px 14px', borderRadius: '12px' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '4px' }}>
                      Nomor WhatsApp Aktif *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0812-xxxx-xxxx"
                      style={{ width: '100%', background: '#FAF7FB', border: '1px solid rgba(0,0,0,0.1)', padding: '10px 14px', borderRadius: '12px' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '4px' }}>
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@anda.com"
                      style={{ width: '100%', background: '#FAF7FB', border: '1px solid rgba(0,0,0,0.1)', padding: '10px 14px', borderRadius: '12px' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '4px' }}>
                      Nama Usaha / Usaha Bakery
                    </label>
                    <input
                      type="text"
                      value={formData.bakeryName}
                      onChange={(e) => setFormData({ ...formData, bakeryName: e.target.value })}
                      placeholder="Nama brand Anda"
                      style={{ width: '100%', background: '#FAF7FB', border: '1px solid rgba(0,0,0,0.1)', padding: '10px 14px', borderRadius: '12px' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '4px' }}>
                      Profil Peserta
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      style={{ width: '100%', background: '#FAF7FB', border: '1px solid rgba(0,0,0,0.1)', padding: '10px 14px', borderRadius: '12px' }}
                    >
                      <option value="Home Baker">Home Baker / Rumahan</option>
                      <option value="Bakery Owner">Pemilik Toko Roti</option>
                      <option value="Cafe Owner / Barista">Owner Kafe / Barista</option>
                      <option value="Chef / Horeca">Chef Hotel / Restoran</option>
                      <option value="Hobi Baking">Pencinta Kuliner & Baking</option>
                    </select>
                  </div>
                </div>

                <div style={{ background: '#FAF2F9', padding: '10px 14px', borderRadius: '12px', fontSize: '0.78rem', color: '#8A1A7B', marginTop: '4px' }}>
                  🎟️ <strong>Fasilitas :</strong> Sertifikat kehadiran, sample pack produk Merrylady, booklet resep eksklusif, dan sesi icip-icip live baking.
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '10px', padding: '12px' }}
                >
                  <Send size={15} />
                  <span>Konfirmasi Pendaftaran </span>
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

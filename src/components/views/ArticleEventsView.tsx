import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import { ROADSHOW_EVENTS, ARTICLES } from '../../data/merryladyData';
import type { RoadshowEvent, ArticleItem } from '../../data/merryladyData';

interface ArticleEventsViewProps {
  onSelectEvent: (event: RoadshowEvent) => void;
  onSelectArticle: (article: ArticleItem) => void;
  lang: 'ID' | 'EN';
}

export const ArticleEventsView: React.FC<ArticleEventsViewProps> = ({
  onSelectEvent,
  onSelectArticle,
  lang,
}) => {
  const [activeTab, setActiveTab] = useState<'events' | 'articles'>('events');

  return (
    <div className="landing-view-wrapper">
      {/* Hero Header */}
      <section className="landing-page-hero">
        <div className="container">
          <span className="m3-badge primary" style={{ marginBottom: '14px' }}>
            <Calendar size={14} />
            <span>Roadshow, Tren & Komunitas</span>
          </span>
          <h1 className="landing-page-title">
            {lang === 'ID' ? 'Artikel, Event Roadshow & Komunitas' : 'Articles, Roadshow Events & Community'}
          </h1>
          <p className="landing-page-subtitle">
            {lang === 'ID'
              ? 'Temukan jadwal demo baking keliling kota besar Indonesia, artikel tren dessert dunia, dan inspirasi kreasi dari ribuan chef serta baker komunitas Merrylady.'
              : 'Explore nationwide baking demo roadshows, world dessert trends, and inspiring creations from chefs and community bakers.'}
          </p>

          {/* Toggle Tab */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '32px' }}>
            <button
              onClick={() => setActiveTab('events')}
              className={`moment-chip ${activeTab === 'events' ? 'active' : 'inactive'}`}
              style={{ fontSize: '0.9rem', padding: '10px 24px' }}
            >
              📅 Jadwal Demo Roadshow (4 Kota)
            </button>
            <button
              onClick={() => setActiveTab('articles')}
              className={`moment-chip ${activeTab === 'articles' ? 'active' : 'inactive'}`}
              style={{ fontSize: '0.9rem', padding: '10px 24px' }}
            >
              📰 Artikel & Wawasan Kuliner
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-padding">
        <div className="container">
          {activeTab === 'events' ? (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                {ROADSHOW_EVENTS.map((event) => (
                  <div
                    key={event.id}
                    className="event-card"
                    style={{ borderRadius: '28px', border: '1.5px solid rgba(0,0,0,0.06)' }}
                  >
                    <div className="event-card-img-wrap" style={{ height: '220px' }}>
                      <img src={event.image} alt={event.title} className="event-card-img" />
                      <div className="event-city-badge">
                        <MapPin size={13} style={{ display: 'inline', marginRight: '4px' }} />
                        <span>{event.city}</span>
                      </div>
                      <span
                        style={{
                          position: 'absolute',
                          top: '14px',
                          right: '14px',
                          background: event.status === 'Pendaftaran Dibuka' ? '#047857' : '#B45309',
                          color: '#FFFFFF',
                          padding: '4px 12px',
                          borderRadius: '9999px',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                        }}
                      >
                        {event.status}
                      </span>
                    </div>

                    <div className="event-card-body" style={{ padding: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#8A1A7B', fontWeight: 700, marginBottom: '8px' }}>
                        <Calendar size={15} />
                        <span>{event.date} • {event.time}</span>
                      </div>

                      <h3 style={{ fontSize: '1.18rem', fontWeight: 800, lineHeight: 1.35, marginBottom: '10px' }}>
                        {event.title}
                      </h3>

                      <p style={{ fontSize: '0.84rem', color: '#6E6270', marginBottom: '14px' }}>
                        📍 {event.venue}
                      </p>

                      <div style={{ background: '#FAF7FB', padding: '12px 16px', borderRadius: '14px', marginBottom: '18px' }}>
                        <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#8A1A7B', textTransform: 'uppercase', marginBottom: '4px' }}>
                          Pembicara / Chef:
                        </div>
                        <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#1E1A20' }}>
                          {event.speaker}
                        </div>
                        <div style={{ fontSize: '0.76rem', color: '#6E6270' }}>
                          {event.speakerRole}
                        </div>
                      </div>

                      <div style={{ marginBottom: '20px' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, marginBottom: '6px' }}>Topik Materi:</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          {event.topics.map((t, idx) => (
                            <span key={idx} style={{ fontSize: '0.78rem', color: '#4E444E' }}>
                              • {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: event.seatsLeft <= 10 ? '#DC2626' : '#047857' }}>
                          Sisa {event.seatsLeft} Kursi Tersedia
                        </div>
                        <button
                          onClick={() => onSelectEvent(event)}
                          className="btn btn-primary"
                          style={{ padding: '8px 18px', fontSize: '0.82rem' }}
                        >
                          Daftar Sekarang →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
                {ARTICLES.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => onSelectArticle(article)}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '28px',
                      overflow: 'hidden',
                      border: '1.5px solid rgba(0,0,0,0.06)',
                      boxShadow: '0 6px 24px rgba(0,0,0,0.04)',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div style={{ height: '220px', position: 'relative' }}>
                      <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <span
                        style={{
                          position: 'absolute',
                          top: '14px',
                          left: '14px',
                          background: '#8A1A7B',
                          color: '#FFFFFF',
                          padding: '4px 12px',
                          borderRadius: '9999px',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                        }}
                      >
                        {article.category}
                      </span>
                    </div>

                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#6E6270', marginBottom: '8px' }}>
                        <span>{article.date}</span>
                        <span>•</span>
                        <Clock size={13} />
                        <span>{article.readTime}</span>
                        <span>•</span>
                        <span>Oleh {article.author}</span>
                      </div>

                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, lineHeight: 1.35, marginBottom: '10px' }}>
                        {article.title}
                      </h3>

                      <p style={{ fontSize: '0.88rem', color: '#4E444E', lineHeight: 1.6, marginBottom: '20px' }}>
                        {article.summary}
                      </p>

                      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem', fontWeight: 700, color: '#8A1A7B', paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                        <span>Baca Artikel Lengkap</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

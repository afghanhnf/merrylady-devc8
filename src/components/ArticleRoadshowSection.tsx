import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight, BookOpen, Clock } from 'lucide-react';
import { ROADSHOW_EVENTS, ARTICLES } from '../data/merryladyData';
import type { RoadshowEvent, ArticleItem } from '../data/merryladyData';

interface ArticleRoadshowSectionProps {
  onSelectEvent?: (event: RoadshowEvent) => void;
  onSelectArticle?: (article: ArticleItem) => void;
  onOpenArticlesHub?: () => void;
  lang: 'ID' | 'EN';
}

export const ArticleRoadshowSection: React.FC<ArticleRoadshowSectionProps> = ({
  lang,
}) => {
  const enEvents: Record<string, { title: string; venue: string; city: string; date: string }> = {
    'event-jakarta-masterclass': {
      title: 'Merrylady Grand Pastry Masterclass: 3D Piping Art & Japanese Daifuku',
      venue: 'Sukanda Djaya Culinary Centre, Kebon Jeruk, Jakarta',
      city: 'West Jakarta',
      date: 'Oct 14, 2026 • 09:00 - 15:00',
    },
    'event-surabaya-baking': {
      title: 'Surabaya Bakery Revolution: Basque Cheese & Tart Custard Exploration',
      venue: 'Grand City Convention Hall, Surabaya',
      city: 'Surabaya',
      date: 'Oct 28, 2026 • 10:00 - 16:00',
    },
    'event-medan-cafe-trends': {
      title: 'Medan Barista & Dessert Showcase: Plant-Based Latte & Cloud Foam Trends',
      venue: 'Santika Premiere Dyandra Hotel, Medan',
      city: 'Medan',
      date: 'Nov 12, 2026 • 13:00 - 17:00',
    },
  };

  const enArticles: Record<string, { title: string; category: string; readTime: string; summary: string }> = {
    'article-bakery-trends-2026': {
      title: '2026 Bakery Trends: The Key to Melt-in-Mouth Texture & Emotional Comfort',
      category: 'Culinary Trends',
      readTime: '5 min read',
      summary: "Today's consumers seek emotional comfort food and photogenic aesthetics with clear trans-fat-free and natural sweetness credentials.",
    },
    'article-home-bakery-costing': {
      title: 'Bakery Cost Calculation Guide: Secrets to Maximizing Profit Margins',
      category: 'Business Guide',
      readTime: '7 min read',
      summary: 'Why calculating true whipped expansion overrun and ingredient stability prevents costly baking re-runs and protects net margins.',
    },
    'article-cloud-foam-science': {
      title: 'The Science of Cloud Foam: How to Create the Perfect Floating Cold Cream',
      category: 'Barista Tips',
      readTime: '4 min read',
      summary: 'Understanding micro-bubble surface tension and liquid emulsion viscosity to craft stunning, photogenic café drinks that never sink.',
    },
  };

  return (
    <motion.section
      id="artikel"
      className="section-padding"
      style={{ background: '#FFFFFF' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="m3-badge primary">
            <Calendar size={14} />
            <span>{lang === 'ID' ? 'Event & Komunitas' : 'Event & Community Hub'}</span>
          </span>
          <h2 className="section-title">
            {lang === 'ID'
              ? 'Jadwal Demo Roadshow & Tren Terkini'
              : 'Roadshow Demos & Industry Insights'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ID'
              ? 'Ikuti live baking show, workshop tatap muka bersama master chef, dan perluas wawasan bisnis bakery Anda.'
              : 'Join live baking shows, hands-on masterclasses with renowned pastry chefs, and discover the latest bakery trends.'}
          </p>
        </div>

        {/* Roadshow Events Grid */}
        <div className="roadshow-grid" style={{ marginBottom: '56px' }}>
          {ROADSHOW_EVENTS.slice(0, 3).map((event) => {
            const enData = enEvents[event.id];
            const eventTitle = lang === 'ID' ? event.title : (enData?.title || event.title);
            const eventVenue = lang === 'ID' ? event.venue : (enData?.venue || event.venue);
            const eventCity = lang === 'ID' ? event.city : (enData?.city || event.city);
            const eventDate = lang === 'ID' ? `${event.date} • ${event.time}` : (enData?.date || `${event.date} • ${event.time}`);

            return (
              <div key={event.id} className="event-card">
                <div className="event-card-img-wrap">
                  <img src={event.image} alt={eventTitle} className="event-card-img" />
                  <div className="event-city-badge">
                    <MapPin size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    <span>{eventCity}</span>
                  </div>
                </div>

                <div className="event-card-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#8A1A7B', fontWeight: 700, marginBottom: '6px' }}>
                    <Calendar size={14} />
                    <span>{eventDate}</span>
                  </div>

                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.35, marginBottom: '8px' }}>
                    {eventTitle}
                  </h4>

                  <p style={{ fontSize: '0.8rem', color: '#6E6270', marginBottom: '16px' }}>
                    🏛 {eventVenue}
                  </p>

                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: event.seatsLeft <= 10 ? '#DC2626' : '#047857', fontWeight: 700 }}>
                      <Users size={14} />
                      <span>{lang === 'ID' ? `Sisa ${event.seatsLeft} Kursi` : `${event.seatsLeft} Seats Left`}</span>
                    </div>

                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="btn btn-primary"
                      style={{ padding: '6px 14px', fontSize: '0.78rem', textDecoration: 'none' }}
                    >
                      {lang === 'ID' ? 'Daftar Demo →' : 'Register Demo →'}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Articles Preview */}
        <div style={{ background: '#FAF7FB', borderRadius: '32px', padding: 'clamp(24px, 4vw, 44px)', border: '1px solid rgba(138, 26, 123, 0.12)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span className="m3-badge primary" style={{ marginBottom: '6px' }}>
                <BookOpen size={13} />
                <span>{lang === 'ID' ? 'Wawasan & Tips' : 'Knowledge & Tips'}</span>
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>
                {lang === 'ID' ? 'Artikel & Wawasan Industri' : 'Industry Insights & Articles'}
              </h3>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {ARTICLES.map((article) => {
              const enArt = enArticles[article.id];
              const artTitle = lang === 'ID' ? article.title : (enArt?.title || article.title);
              const artCategory = lang === 'ID' ? article.category : (enArt?.category || article.category);
              const artReadTime = lang === 'ID' ? article.readTime : (enArt?.readTime || article.readTime);
              const artSummary = lang === 'ID' ? article.summary : (enArt?.summary || article.summary);

              return (
                <a
                  key={article.id}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '20px',
                    border: '1px solid rgba(0,0,0,0.06)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '0.74rem', color: '#8A1A7B', fontWeight: 700 }}>
                      <span>{artCategory}</span>
                      <span>•</span>
                      <Clock size={12} />
                      <span>{artReadTime}</span>
                    </div>

                    <h4
                      style={{
                        fontSize: '0.98rem',
                        fontWeight: 700,
                        lineHeight: 1.4,
                        marginBottom: '8px',
                        color: '#1E1A20',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        minHeight: '2.8em',
                      }}
                    >
                      {artTitle}
                    </h4>

                    <p style={{ fontSize: '0.82rem', color: '#6E6270', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {artSummary}
                    </p>
                  </div>

                  <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 700, color: '#8A1A7B' }}>
                    <span>{lang === 'ID' ? 'Baca Wawasan Lengkap' : 'Read Full Article'}</span>
                    <ArrowRight size={13} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

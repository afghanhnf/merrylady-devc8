import React from 'react';
import {
  Compass,
  Users,
  Coffee,
  Cake,
  Flame,
  Store,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface MoodItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface CurateMomentBarProps {
  activeMood: string;
  onSelectMood: (mood: string) => void;
  lang: 'ID' | 'EN';
}

export const CurateMomentBar: React.FC<CurateMomentBarProps> = ({
  activeMood,
  onSelectMood,
  lang,
}) => {
  const moods: MoodItem[] = [
    {
      id: 'all',
      label: lang === 'ID' ? 'Semua Momen' : 'All Moments',
      icon: Compass,
    },
    {
      id: 'family',
      label: lang === 'ID' ? 'Family Baking' : 'Family Baking',
      icon: Users,
    },
    {
      id: 'cafe',
      label: lang === 'ID' ? 'Café at Home' : 'Café at Home',
      icon: Coffee,
    },
    {
      id: 'celebration',
      label: lang === 'ID' ? 'Selebrasi & Ultah' : 'Celebrations',
      icon: Cake,
    },
    {
      id: 'artisan',
      label: 'Artisan Pastry',
      icon: Flame,
    },
    {
      id: 'business',
      label: lang === 'ID' ? 'Solusi Usaha' : 'Bakery Business',
      icon: Store,
    },
  ];

  return (
    <div className="container curate-bar-wrap">
      <div className="curate-bar-card">
        <div className="curate-bar-label">
          <div className="curate-bar-icon-wrap">
            <Compass size={18} />
          </div>
          <div className="curate-bar-text">
            <h4>
              {lang === 'ID'
                ? 'Pilih Suasana Rasa Hari Ini'
                : 'Curate Your Culinary Mood'}
            </h4>
            <p>
              {lang === 'ID'
                ? 'Inspirasi kreasi & panduan bahan'
                : 'Instant recipe & ingredient guide'}
            </p>
          </div>
        </div>

        <div className="curate-chips-list" role="tablist" aria-label="Moment Filter">
          {moods.map((m) => {
            const isActive = activeMood === m.id;
            const Icon = m.icon;
            return (
              <button
                key={m.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectMood(m.id)}
                className={`curate-chip-btn ${isActive ? 'active' : ''}`}
              >
                <Icon size={14} className="curate-chip-icon" strokeWidth={isActive ? 2.2 : 1.8} />
                <span>{m.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};


import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  return (
    <footer className="border-t border-stone-200 bg-[#FBF9F5] text-stone-700 py-10 sm:py-14 transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-10 border-b border-stone-200/80">
          {/* Brand & Mission */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-900 text-amber-300 shrink-0">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="5" y="5" width="14" height="14" rx="2" transform="rotate(45 12 12)" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              </div>
              <span className="font-serif-title text-xl font-bold tracking-tight text-emerald-950">
                {t.brandName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-serif italic mb-3">
              "{t.footer.aboutDesc}"
            </p>
            <p className="text-xs text-stone-500">
              {t.footer.legalNote}
            </p>
          </div>

          {/* Quick Links Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-950 mb-3">
              {t.footer.quickLinks}
            </h4>
            <div className="flex flex-wrap md:flex-col gap-2 text-xs font-medium text-stone-600">
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-emerald-950 transition-colors cursor-pointer text-left"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => onNavigate('learning')}
                className="hover:text-emerald-950 transition-colors cursor-pointer text-left"
              >
                {t.nav.learning}
              </button>
              <button
                onClick={() => onNavigate('map')}
                className="hover:text-emerald-950 transition-colors cursor-pointer text-left"
              >
                {t.nav.map}
              </button>
              <button
                onClick={() => onNavigate('crossword')}
                className="hover:text-emerald-950 transition-colors cursor-pointer text-left"
              >
                {t.nav.crossword}
              </button>
              <button
                onClick={() => onNavigate('sources')}
                className="hover:text-emerald-950 transition-colors cursor-pointer text-left"
              >
                {t.nav.sources}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <div>{t.footer.copyright}</div>
          <div className="text-stone-400 font-mono text-[11px]">
            {({ id: 'Media Pembelajaran Hubungan Bilateral', en: 'Bilateral Relations Learning Resource', ar: 'مورد تعليمي للعلاقات الثنائية', tr: 'İkili İlişkiler Eğitim Kaynağı' } as const)[currentLang]}
          </div>
        </div>
      </div>
    </footer>
  );
};

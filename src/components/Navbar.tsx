import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  activeTab: string;
  onNavigate: (tab: string) => void;
  isRTL: boolean;
}

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'id', label: 'ID', flag: '🇮🇩' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'tr', label: 'TR', flag: '🇹🇷' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  activeTab,
  onNavigate,
  isRTL,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'learning', label: t.nav.learning },
    { id: 'map', label: t.nav.map },
    { id: 'crossword', label: t.nav.crossword },
  ];

  const handleNavClick = (tabId: string) => {
    onNavigate(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200/80 bg-[#FBF9F5]/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand title wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-2.5 text-left text-stone-900 transition-opacity hover:opacity-90 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded-sm"
          aria-label={t.brandName}
        >
          {/* Subtle Islamic octagonal star motif */}
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-900 text-amber-300 shadow-sm shrink-0">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="5" y="5" width="14" height="14" rx="2" transform="rotate(45 12 12)" />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="font-serif-title text-xl font-bold tracking-tight text-emerald-950 sm:text-2xl block">
              {t.brandName}
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-stone-600"
          aria-label={({ id: 'Navigasi utama', en: 'Main navigation', ar: 'التنقل الرئيسي', tr: 'Ana gezinme' } as const)[currentLang]}
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer text-sm ${
                  isActive
                    ? 'text-emerald-900 font-semibold bg-emerald-950/5'
                    : 'hover:text-stone-900 hover:bg-stone-100/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions (Language switcher & User Profile) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Selector */}
          <div className="flex items-center rounded-lg border border-stone-200 bg-white/80 p-0.5 shadow-2xs">
            {LANGUAGES.map((lang) => {
              const active = currentLang === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => onSelectLang(lang.code)}
                  className={`px-2 py-1 text-xs font-semibold rounded transition-all cursor-pointer ${
                    active
                      ? 'bg-emerald-900 text-amber-300 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                  title={lang.label}
                >
                  <span className="hidden sm:inline mr-1">{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-200/60 transition-colors cursor-pointer"
            aria-label={({ id: 'Buka atau tutup menu navigasi', en: 'Toggle navigation menu', ar: 'فتح أو إغلاق قائمة التنقل', tr: 'Gezinme menüsünü aç veya kapat' } as const)[currentLang]}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FBF9F5] px-4 py-3 space-y-1 shadow-lg">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-emerald-900 text-white font-semibold'
                    : 'text-stone-700 hover:bg-stone-100'
                } ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { ArrowRight, Compass, BookOpen, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HomeHeroProps {
  currentLang: Language;
  onStartLearning: () => void;
  onExploreMap: () => void;
  isRTL: boolean;
}

const milestones: Record<Language, { year: string; title: string }[]> = {
  id: [
    { year: 'Abad ke-16', title: 'Aceh–Utsmaniyah' },
    { year: '1950', title: 'Hubungan diplomatik' },
    { year: '1957', title: 'Kedutaan di Jakarta' },
    { year: '2011', title: 'Kemitraan strategis' },
    { year: '2022', title: 'Dewan kerja sama strategis' },
    { year: '2025', title: 'Pertemuan dewan pertama' },
  ],
  en: [
    { year: '16th century', title: 'Aceh–Ottoman ties' },
    { year: '1950', title: 'Diplomatic relations' },
    { year: '1957', title: 'Embassy in Jakarta' },
    { year: '2011', title: 'Strategic partnership' },
    { year: '2022', title: 'Strategic cooperation council' },
    { year: '2025', title: 'First council meeting' },
  ],
  ar: [
    { year: 'القرن 16', title: 'روابط آتشيه والعثمانيين' },
    { year: '1950', title: 'العلاقات الدبلوماسية' },
    { year: '1957', title: 'السفارة في جاكرتا' },
    { year: '2011', title: 'الشراكة الاستراتيجية' },
    { year: '2022', title: 'مجلس التعاون الاستراتيجي' },
    { year: '2025', title: 'الاجتماع الأول للمجلس' },
  ],
  tr: [
    { year: '16. yüzyıl', title: 'Açe–Osmanlı bağları' },
    { year: '1950', title: 'Diplomatik ilişkiler' },
    { year: '1957', title: 'Cakarta Büyükelçiliği' },
    { year: '2011', title: 'Stratejik ortaklık' },
    { year: '2022', title: 'Stratejik iş birliği konseyi' },
    { year: '2025', title: 'Konseyin ilk toplantısı' },
  ],
};

export const HomeHero: React.FC<HomeHeroProps> = ({ currentLang, onStartLearning, onExploreMap, isRTL }) => {
  const t = translations[currentLang];
  const labels = {
    id: { languages: '4 bahasa', modules: '3 materi pembelajaran', timeline: 'Linimasa hubungan bilateral', description: 'Telusuri perkembangan hubungan kedua negara dari akar historis hingga kerja sama masa kini.' },
    en: { languages: '4 languages', modules: '3 learning modules', timeline: 'Bilateral relations timeline', description: 'Trace the relationship between the two countries from historical roots to contemporary cooperation.' },
    ar: { languages: '4 لغات', modules: '3 وحدات تعليمية', timeline: 'الخط الزمني للعلاقات الثنائية', description: 'تتبع تطور العلاقات بين البلدين من الجذور التاريخية إلى التعاون المعاصر.' },
    tr: { languages: '4 dil', modules: '3 eğitim modülü', timeline: 'İkili ilişkiler zaman çizelgesi', description: 'İki ülke arasındaki ilişkilerin tarihî köklerden günümüz iş birliğine uzanan gelişimini izleyin.' },
  }[currentLang];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-stone-200">
      <div className="absolute inset-0 bg-arabesque-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-900/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-amber-600/5 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-900/80 mb-4 tracking-wide uppercase">
          <span>{t.hero.conceptPill}</span><span aria-hidden="true">·</span><span>{labels.languages}</span><span aria-hidden="true">·</span><span>{labels.modules}</span>
        </div>
        <div className="max-w-3xl">
          <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 leading-[1.15] mb-5 text-balance">
            {t.hero.titleMain}<span className="block text-amber-700/90 font-serif italic text-3xl sm:text-4xl lg:text-5xl font-medium mt-1">{t.hero.titleSub}</span>
          </h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl mb-8">{t.hero.subtitle}</p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
            <button onClick={onStartLearning} className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-900 px-6 py-3.5 text-sm font-semibold text-amber-300 shadow-md hover:bg-emerald-800 transition-all cursor-pointer group">
              <span>{t.hero.ctaStart}</span><ArrowRight className={`h-4 w-4 transition-transform ${isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
            </button>
            <button onClick={onExploreMap} className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white/90 px-5 py-3.5 text-sm font-semibold text-stone-800 shadow-2xs hover:bg-stone-50 hover:border-stone-400 transition-all cursor-pointer">
              <Compass className="h-4 w-4 text-emerald-800" /><span>{t.hero.ctaMap}</span>
            </button>
          </div>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white/80 p-5 sm:p-7 shadow-xs backdrop-blur-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-stone-100">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-950"><Sparkles className="h-4 w-4 text-amber-600" /><span>{t.hero.highlightNetwork}</span></div>
            <p className="text-xs text-stone-500">{labels.description}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {milestones[currentLang].map((stage, idx) => <div key={stage.year} className="rounded-xl border border-stone-200/80 bg-[#FBF9F5] p-3 text-stone-800">
              <div className="flex items-center justify-between text-xs text-stone-400 mb-2"><span className="font-mono text-[11px] font-semibold text-emerald-900">0{idx + 1}</span><span>{stage.year}</span></div>
              <h3 className="font-semibold text-sm text-stone-900">{stage.title}</h3>
            </div>)}
          </div>
          <div className="mt-5 flex items-center gap-2 text-xs text-stone-600"><BookOpen className="h-4 w-4 text-emerald-800" />{t.map.subtitle}</div>
        </div>
      </div>
    </section>
  );
};

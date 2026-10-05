import React from 'react';
import { BookOpen, ShieldAlert, Award, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { sourcesData } from '../data/sourcesData';

interface SourcesViewProps {
  currentLang: Language;
}

export const SourcesView: React.FC<SourcesViewProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const groups = sourcesData[currentLang];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-8 pb-4 border-b border-stone-200">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-900 mb-1">
          <BookOpen className="h-4 w-4 text-emerald-800" />
          <span>{({ id: 'Historiografi & Rujukan Akademik', en: 'Historiography & Academic References', ar: 'الكتابة التاريخية والمراجع الأكاديمية', tr: 'Tarih Yazımı ve Akademik Kaynaklar' } as const)[currentLang]}</span>
        </div>
        <h1 className="font-serif-title text-3xl sm:text-4xl font-bold text-emerald-950">
          {t.sources.title}
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
          {t.sources.subtitle}
        </p>
      </div>

      {/* Methodology Statement Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 shadow-xs mb-8 text-xs sm:text-sm text-stone-700 leading-relaxed space-y-2">
        <div className="flex items-center gap-2 font-bold text-emerald-950 font-serif-title text-base">
          <Award className="h-4 w-4 text-amber-600" />
          <span>{({ id: 'Prinsip Keilmiahan & Netralitas Historiografis', en: 'Academic Integrity & Historical Neutrality', ar: 'النزاهة العلمية والحياد التاريخي', tr: 'Bilimsel Dürüstlük ve Tarihsel Tarafsızlık' } as const)[currentLang]}</span>
        </div>
        <p>{t.sources.methodologyNote}</p>
      </div>

      {/* Module Sources Sections */}
      <div className="space-y-8">
        {groups.map((group) => (
          <div
            key={group.moduleId}
            className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs"
          >
            <h2 className="font-serif-title text-2xl font-bold text-emerald-950 mb-3 pb-2 border-b border-stone-100">
              {group.moduleTitle}
            </h2>

            {/* Historical Debate Note */}
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-950 mb-5 leading-relaxed flex items-start gap-2.5">
              <ShieldAlert className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
              <span>{group.historicalNote}</span>
            </div>

            {/* Sources List */}
            <div className="space-y-3.5">
              {group.sources.map((src, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-stone-100 bg-[#FBF9F5] text-xs sm:text-sm text-stone-800"
                >
                  <div className="font-semibold text-stone-900">
                    {src.author} ({src.year}) — <span className="italic font-serif">{src.title}</span>
                  </div>
                  <div className="text-stone-500 text-xs mt-0.5 font-mono">
                    {src.publisher}
                  </div>
                  {src.linkOrNote && (
                    <div className="text-stone-600 text-xs mt-1.5 italic">
                      {src.linkOrNote}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { CheckCircle2, Circle, ArrowLeft, ArrowRight, Lightbulb, UserCheck, MapPin, BookOpen, AlertCircle } from 'lucide-react';
import { Language, MaterialData } from '../types';
import { translations } from '../data/translations';

interface MaterialViewerProps {
  material: MaterialData;
  materialIndex: number;
  totalMaterials: number;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onNext: () => void;
  onPrev: () => void;
  onBackToDashboard: () => void;
  onGoToQuiz: () => void;
  allCompleted: boolean;
  currentLang: Language;
  isRTL: boolean;
}

export const MaterialViewer: React.FC<MaterialViewerProps> = ({
  material,
  materialIndex,
  totalMaterials,
  isCompleted,
  onToggleComplete,
  onNext,
  onPrev,
  onBackToDashboard,
  onGoToQuiz,
  allCompleted,
  currentLang,
  isRTL,
}) => {
  const t = translations[currentLang];
  const [activeTab, setActiveTab] = useState<'content' | 'timeline' | 'figures' | 'regions' | 'references'>('content');

  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Top Navigation Ribbon */}
      <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-stone-200">
        <button
          onClick={onBackToDashboard}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-emerald-950 transition-colors cursor-pointer"
        >
          <ArrowLeft className={`h-3.5 w-3.5 ${isRTL ? 'rotate-180' : ''}`} />
          <span>{t.materials.backToDashboard}</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-medium text-stone-500">
            {t.materials.chapterPrefix} {materialIndex + 1} / {totalMaterials}
          </span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="text-xs text-stone-500">{t.materials.readTime}</span>
        </div>
      </div>

      {/* Editorial Header Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-emerald-950/20 bg-gradient-to-br from-emerald-950 via-stone-900 to-emerald-900 p-7 sm:p-10 text-white shadow-lg mb-8">
        <div className="absolute inset-0 bg-arabesque-pattern-dark opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300/90 mb-3">
            <span>{t.materials.chapterPrefix} 0{material.id}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">{material.era}</span>
          </div>

          <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3 leading-tight">
            {material.title}
          </h1>

          <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-light">
            {material.subtitle}
          </p>
        </div>
      </div>

      {/* Guided Tabs Navigation: Learn -> Explore -> Remember */}
      <div className="flex items-center gap-1 p-1 bg-stone-200/60 rounded-xl mb-8 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('content')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'content'
              ? 'bg-white text-emerald-950 shadow-xs'
              : 'text-stone-600 hover:text-stone-900 hover:bg-white/40'
          }`}
        >
          {({ id: '1. Narasi Sejarah', en: '1. Core Narrative', ar: '1. السرد التاريخي', tr: '1. Ana Anlatı' } as const)[currentLang]}
        </button>

        <button
          onClick={() => setActiveTab('timeline')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'timeline'
              ? 'bg-white text-emerald-950 shadow-xs'
              : 'text-stone-600 hover:text-stone-900 hover:bg-white/40'
          }`}
        >
          {t.materials.timelineHeading}
        </button>

        <button
          onClick={() => setActiveTab('figures')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'figures'
              ? 'bg-white text-emerald-950 shadow-xs'
              : 'text-stone-600 hover:text-stone-900 hover:bg-white/40'
          }`}
        >
          {t.materials.keyFiguresHeading}
        </button>

        <button
          onClick={() => setActiveTab('regions')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'regions'
              ? 'bg-white text-emerald-950 shadow-xs'
              : 'text-stone-600 hover:text-stone-900 hover:bg-white/40'
          }`}
        >
          {t.materials.keyRegionsHeading}
        </button>

        <button
          onClick={() => setActiveTab('references')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'references'
              ? 'bg-white text-emerald-950 shadow-xs'
              : 'text-stone-600 hover:text-stone-900 hover:bg-white/40'
          }`}
        >
          {t.materials.academicSourcesHeading}
        </button>
      </div>

      {/* Intro Hook */}
      <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7 shadow-xs mb-8">
        <p className="text-base sm:text-lg text-stone-800 leading-relaxed italic font-serif">
          "{material.intro}"
        </p>
      </div>

      {/* Tab 1: Core Narrative Content */}
      {activeTab === 'content' && (
        <div className="space-y-8">
          {material.sections.map((section, sIdx) => (
            <div
              key={sIdx}
              className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs"
            >
              <h2 className="font-serif-title text-2xl font-bold text-emerald-950 mb-4 pb-2 border-b border-stone-100">
                {section.title}
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {section.keyHighlight && (
                <div className="mt-5 p-4 rounded-xl bg-emerald-950/5 border border-emerald-900/10 text-xs sm:text-sm font-medium text-emerald-950 flex items-start gap-2.5">
                  <Lightbulb className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{section.keyHighlight}</span>
                </div>
              )}
            </div>
          ))}

          {/* Did You Know? Card */}
          <div className="rounded-2xl border border-amber-200/80 bg-amber-50/50 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center gap-2 mb-4 text-amber-900 font-semibold text-sm">
              <Lightbulb className="h-5 w-5 text-amber-700" />
              <h3 className="font-serif-title text-xl font-bold text-amber-950">
                {t.materials.didYouKnowHeading}
              </h3>
            </div>
            <ul className="space-y-3">
              {material.didYouKnow.map((fact, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-800">
                  <span className="h-5 w-5 rounded-full bg-amber-200/80 text-amber-950 text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    {fIdx + 1}
                  </span>
                  <span className="leading-relaxed">{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Summary Takeaways (Remember) */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-900/5 p-6 sm:p-8 shadow-xs">
            <h3 className="font-serif-title text-2xl font-bold text-emerald-950 mb-4 pb-2 border-b border-emerald-900/10">
              {t.materials.summaryHeading}
            </h3>
            <ul className="space-y-3">
              {material.summaryPoints.map((pt, ptIdx) => (
                <li key={ptIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Tab 2: Chronological Timeline */}
      {activeTab === 'timeline' && (
        <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
          <h2 className="font-serif-title text-2xl font-bold text-emerald-950 mb-6">
            {t.materials.timelineHeading}
          </h2>
          <div className="relative border-l-2 border-emerald-900/20 ml-3 sm:ml-4 space-y-6 sm:space-y-8 pl-6 sm:pl-8">
            {material.timeline.map((evt, eIdx) => (
              <div key={eIdx} className="relative group">
                {/* Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-emerald-900 bg-amber-300 group-hover:scale-125 transition-transform" />
                <span className="font-mono text-xs font-semibold text-emerald-900 bg-emerald-950/5 px-2 py-0.5 rounded">
                  {evt.year}
                </span>
                <h3 className="font-serif-title text-lg font-bold text-stone-900 mt-1 mb-1">
                  {evt.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {evt.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Key Historical Figures */}
      {activeTab === 'figures' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {material.keyFigures.map((fig, fIdx) => (
            <div
              key={fIdx}
              className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2 text-emerald-900">
                  <UserCheck className="h-4 w-4 text-emerald-800" />
                  <span className="text-xs font-semibold text-stone-500">{fig.role}</span>
                </div>
                <h3 className="font-serif-title text-xl font-bold text-emerald-950 mb-2">
                  {fig.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {fig.significance}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 4: Key Regions & Centers */}
      {activeTab === 'regions' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {material.keyRegions.map((reg, rIdx) => (
            <div
              key={rIdx}
              className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-2 text-emerald-900">
                <MapPin className="h-4 w-4 text-emerald-800" />
                <span className="text-xs font-mono text-stone-500">{reg.modernLocation}</span>
              </div>
              <h3 className="font-serif-title text-xl font-bold text-emerald-950 mb-2">
                {reg.name}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {reg.historicalRole}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Tab 5: Academic References */}
      {activeTab === 'references' && (
        <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2 text-emerald-950">
            <BookOpen className="h-5 w-5 text-emerald-800" />
            <h2 className="font-serif-title text-2xl font-bold">
              {t.materials.academicSourcesHeading}
            </h2>
          </div>

          {material.historicalDebateNote && (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed flex items-start gap-2.5">
              <AlertCircle className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold mb-1">
                  {t.materials.historicalDebateTitle}
                </strong>
                <p>{material.historicalDebateNote}</p>
              </div>
            </div>
          )}

          <div className="space-y-4 pt-2">
            {material.academicReferences.map((ref, rfIdx) => (
              <div key={rfIdx} className="p-4 rounded-xl border border-stone-100 bg-[#FBF9F5] text-xs sm:text-sm">
                <div className="font-semibold text-stone-900">
                  {ref.author} ({ref.year}) — <span className="italic font-serif">{ref.title}</span>
                </div>
                <div className="text-stone-500 text-xs mt-0.5">
                  {ref.publisher}
                </div>
                {ref.linkOrNote && (
                  <div className="text-stone-600 text-xs mt-1.5 italic">
                    Catatan: {ref.linkOrNote}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Sticky-like Completion & Navigation Bar */}
      <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Toggle Complete Button */}
        <button
          onClick={onToggleComplete}
          className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            isCompleted
              ? 'bg-emerald-950/10 text-emerald-950 border border-emerald-900/30'
              : 'bg-emerald-900 text-amber-300 hover:bg-emerald-800 shadow-sm'
          }`}
        >
          {isCompleted ? (
            <>
              <CheckCircle2 className="h-4 w-4 text-emerald-700" />
              <span>{t.materials.completedBadge}</span>
            </>
          ) : (
            <>
              <Circle className="h-4 w-4" />
              <span>{t.materials.markAsCompleted}</span>
            </>
          )}
        </button>

        {/* Previous & Next Material Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {materialIndex > 0 && (
            <button
              onClick={onPrev}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors cursor-pointer"
            >
              <ArrowLeft className={`h-3.5 w-3.5 ${isRTL ? 'rotate-180' : ''}`} />
              <span>{t.materials.prevMaterial}</span>
            </button>
          )}

          {materialIndex < totalMaterials - 1 ? (
            <button
              onClick={onNext}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
            >
              <span>{t.materials.nextMaterial}</span>
              <ArrowRight className={`h-3.5 w-3.5 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          ) : (
            allCompleted && (
              <button
                onClick={onGoToQuiz}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-amber-600 text-white text-xs font-semibold hover:bg-amber-700 transition-colors cursor-pointer shadow-sm"
              >
                <span>{t.materials.goToQuizCTA}</span>
                <ArrowRight className={`h-3.5 w-3.5 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            )
          )}
        </div>
      </div>
    </article>
  );
};

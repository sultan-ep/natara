import React from 'react';
import { CheckCircle2, Circle, Lock, Unlock, ArrowRight, BookOpen, Compass, Award } from 'lucide-react';
import { Language, UserProgress } from '../types';
import { translations } from '../data/translations';
import { materialsData } from '../data/materialsData';

interface DashboardProps {
  userProgress: UserProgress;
  currentLang: Language;
  onSelectMaterial: (index: number) => void;
  onStartQuiz: () => void;
  onExploreMap: () => void;
  isRTL: boolean;
}

export const Dashboard: React.FC<DashboardProps> = ({
  userProgress,
  currentLang,
  onSelectMaterial,
  onStartQuiz,
  onExploreMap,
  isRTL,
}) => {
  const t = translations[currentLang];
  const materials = materialsData[currentLang];

  const p = userProgress.progress;
  const completedCount = (p.material1 ? 1 : 0) + (p.material2 ? 1 : 0) + (p.material3 ? 1 : 0);
  const totalCount = 3;
  const percentage = Math.round((completedCount / totalCount) * 100);
  const isAllCompleted = completedCount === totalCount;

  const materialStatusList = [
    { id: 1, completed: p.material1, material: materials[0] },
    { id: 2, completed: p.material2, material: materials[1] },
    { id: 3, completed: p.material3, material: materials[2] },
  ];

  // Find next unread material index or default to 0
  const nextMaterialIndex = !p.material1 ? 0 : !p.material2 ? 1 : !p.material3 ? 2 : 0;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Top Banner Greeting */}
      <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900 uppercase tracking-wider mb-2">
            <span>{t.dashboard.progressTitle}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">{completedCount} {t.dashboard.outOf} {totalCount} {t.dashboard.completed}</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-emerald-950 mb-2">
            {currentLang === 'id' ? 'Mulai perjalanan belajarmu' : currentLang === 'en' ? 'Start your learning journey' : currentLang === 'ar' ? 'ابدأ رحلة التعلم' : 'Öğrenme yolculuğunuza başlayın'}
          </h2>
          <p className="text-sm text-stone-600 max-w-xl">
            {isAllCompleted
              ? (currentLang === 'id'
                  ? 'Selamat! Seluruh materi telah kamu pelajari. Saatnya menguji daya ingatmu di Teka-Teki Silang.'
                  : currentLang === 'en'
                  ? 'Congratulations! You have completed all 3 modules. You can now challenge the Crossword evaluation.'
                  : currentLang === 'ar'
                  ? 'تهانينا! لقد أتممت قراءة كافة المواد الثلاث. حان وقت اختبار معلوماتك في الكلمات المتقاطعة.'
                  : 'Tebrikler! Üç modülün tamamını bitirdiniz. Şimdi bulmacayı çözerek bilginizi sınayabilirsiniz.')
              : (currentLang === 'id'
                  ? 'Lanjutkan mempelajari sejarah hubungan Indonesia–Turki, pendidikan, budaya, dan kerja sama bilateral.'
                  : currentLang === 'en'
                  ? 'Continue exploring Indonesia–Türkiye relations, education, culture, and bilateral cooperation.'
                  : currentLang === 'ar'
                  ? 'تابع استكشاف تاريخ العلاقات الإندونيسية التركية والتعليم والثقافة والتعاون الثنائي.'
                  : 'Endonezya–Türkiye ilişkileri, eğitim, kültür ve ikili iş birliği hakkındaki öğreniminize devam edin.')}
          </p>

        </div>

        {/* Progress Bar & Primary Actions */}
        <div className="md:w-72 shrink-0 space-y-4">
          <div>
            <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
              <span className="text-stone-600">{({ id: 'Pencapaian Belajar', en: 'Learning achievement', ar: 'إنجاز التعلم', tr: 'Öğrenme başarısı' } as const)[currentLang]}</span>
              <span className="font-mono text-emerald-900">{percentage}%</span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-stone-100 overflow-hidden">
              <div
                className="h-full bg-emerald-900 rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {!isAllCompleted ? (
              <button
                onClick={() => onSelectMaterial(nextMaterialIndex)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-900 px-4 py-2.5 text-xs font-semibold text-amber-300 shadow-xs hover:bg-emerald-800 transition-all cursor-pointer"
              >
                <span>{t.dashboard.btnContinue}</span>
                <ArrowRight className={`h-3.5 w-3.5 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            ) : (
              <button
                onClick={onStartQuiz}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-4 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-amber-700 transition-all cursor-pointer animate-pulse"
              >
                <Award className="h-4 w-4" />
                <span>{t.dashboard.btnStartQuiz}</span>
              </button>
            )}

            <div className="flex gap-2">
              <button
                onClick={onExploreMap}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-stone-200 bg-white px-3 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors cursor-pointer"
              >
                <Compass className="h-3.5 w-3.5 text-emerald-800" />
                <span className="truncate">{t.dashboard.btnExploreMap}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Materials Card Grid */}
      <div className="mb-10">
        <h3 className="font-serif-title text-2xl font-bold text-stone-900 mb-4">
          {currentLang === 'id' ? 'Tiga Materi Hubungan Indonesia–Turki' : currentLang === 'en' ? 'Three Indonesia–Türkiye Learning Modules' : currentLang === 'ar' ? 'ثلاث وحدات عن العلاقات الإندونيسية التركية' : 'Üç Endonezya–Türkiye İlişkileri Dersi'}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {materialStatusList.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onSelectMaterial(idx)}
              className="group relative flex flex-col justify-between rounded-2xl border border-stone-200/90 bg-white p-5 sm:p-6 shadow-xs hover:border-emerald-800/40 hover:shadow-md transition-all cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-emerald-900 uppercase tracking-wide">
                    {t.materials.chapterPrefix} 0{item.id}
                  </span>
                  {item.completed ? (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-800">
                      <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                      <span>{t.dashboard.materialStatusCompleted}</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs text-stone-400">
                      <Circle className="h-3.5 w-3.5" />
                      <span>{t.dashboard.materialStatusUnread}</span>
                    </span>
                  )}
                </div>

                <h4 className="font-serif-title text-xl font-bold text-emerald-950 mb-2 group-hover:text-emerald-900 transition-colors">
                  {item.material.title}
                </h4>
                <p className="text-xs text-stone-500 mb-3 font-mono">
                  {item.material.era}
                </p>
                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                  {item.material.subtitle}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-900 group-hover:translate-x-0.5 transition-transform">
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>{({ id: 'Pelajari Materi', en: 'Study this module', ar: 'ادرس هذه الوحدة', tr: 'Dersi incele' } as const)[currentLang]}</span>
                </span>
                <ArrowRight className={`h-3.5 w-3.5 ${isRTL ? 'rotate-180' : ''}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Crossword Evaluation Status Card */}
      <div className={`rounded-2xl border p-6 sm:p-7 shadow-xs transition-all ${
        isAllCompleted
          ? 'bg-amber-50/50 border-amber-300/80 text-amber-950'
          : 'bg-stone-50 border-stone-200 text-stone-600'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${
              isAllCompleted
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-stone-200 text-stone-500'
            }`}>
              {isAllCompleted ? <Unlock className="h-6 w-6" /> : <Lock className="h-6 w-6" />}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-serif-title text-2xl font-bold text-stone-900">
                  {isAllCompleted ? t.dashboard.quizUnlockedTitle : t.dashboard.quizLockedTitle}
                </h4>
                {userProgress.quizCompleted && (
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                    {({ id: 'Skor', en: 'Score', ar: 'النتيجة', tr: 'Puan' } as const)[currentLang]}: {userProgress.quizScore}/100
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xl">
                {isAllCompleted ? t.dashboard.quizUnlockedDesc : t.dashboard.quizLockedDesc}
              </p>
            </div>
          </div>

          <div className="shrink-0">
            {isAllCompleted ? (
              <button
                onClick={onStartQuiz}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-900 px-5 py-3 text-xs sm:text-sm font-semibold text-amber-300 shadow-md hover:bg-emerald-800 transition-all cursor-pointer"
              >
                <span>{t.dashboard.btnStartQuiz}</span>
                <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            ) : (
              <div className="text-xs font-medium text-stone-500 bg-stone-200/70 px-4 py-2 rounded-xl text-center">
                {completedCount}/3 {({ id: 'Materi Selesai', en: 'Modules Completed', ar: 'وحدات مكتملة', tr: 'Ders tamamlandı' } as const)[currentLang]}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

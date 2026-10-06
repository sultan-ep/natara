import React, { useState, useEffect } from 'react';
import { Language, UserProgress } from './types';
import { Navbar } from './components/Navbar';
import { HomeHero } from './components/HomeHero';
import { Dashboard } from './components/Dashboard';
import { MaterialViewer } from './components/MaterialViewer';
import { HistoryMap } from './components/HistoryMap';
import { CrosswordGame } from './components/CrosswordGame';
import { SourcesView } from './components/SourcesView';
import { Footer } from './components/Footer';
import { materialsData } from './data/materialsData';
import { translations } from './data/translations';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('jejak_islam_lang');
    return (saved === 'id' || saved === 'en' || saved === 'ar' || saved === 'tr') ? saved : 'en';
  });
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('jejak_islam_progress');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return { ...parsed, progress: { material1: false, material2: false, material3: false, ...parsed.progress } };
      } catch { /* Use a clean progress state when saved data is invalid. */ }
    }
    return { progress: { material1: false, material2: false, material3: false }, quizScore: null, quizCompleted: false, quizTime: null, completedAt: null };
  });
  const [activeTab, setActiveTab] = useState<string>('home');
  const [currentMaterialIndex, setCurrentMaterialIndex] = useState<number>(0);
  const [isViewingSpecificMaterial, setIsViewingSpecificMaterial] = useState<boolean>(false);
  const isRTL = currentLang === 'ar';

  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    const currentTranslations = translations[currentLang];
    document.title = `${currentTranslations.brandName} | ${currentTranslations.tagline}`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', currentTranslations.siteDescription);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', currentTranslations.brandName);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', currentTranslations.siteDescription);
    localStorage.setItem('jejak_islam_lang', currentLang);
  }, [currentLang, isRTL]);

  const saveProgress = (updated: UserProgress) => {
    setUserProgress(updated);
    localStorage.setItem('jejak_islam_progress', JSON.stringify(updated));
  };
  const handleToggleMaterialComplete = (materialId: number) => {
    const key = `material${materialId}` as 'material1' | 'material2' | 'material3';
    saveProgress({ ...userProgress, progress: { ...userProgress.progress, [key]: !userProgress.progress[key] } });
  };
  const handleSaveQuizResult = (score: number, timeSeconds: number) => {
    saveProgress({ ...userProgress, quizScore: score, quizCompleted: true, quizTime: timeSeconds, completedAt: new Date().toISOString() });
  };
  const allMaterialsCompleted = userProgress.progress.material1 && userProgress.progress.material2 && userProgress.progress.material3;
  const handleStartLearning = () => { setActiveTab('learning'); setIsViewingSpecificMaterial(false); };
  const handleOpenMaterial = (index: number) => {
    setCurrentMaterialIndex(index); setIsViewingSpecificMaterial(true); setActiveTab('learning');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleStartQuiz = () => { setActiveTab('crossword'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'learning') setIsViewingSpecificMaterial(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const currentMaterials = materialsData[currentLang];

  return <div className={`min-h-screen flex flex-col bg-[#FBF9F5] text-stone-900 ${isRTL ? 'text-right' : 'text-left'}`}>
    <Navbar currentLang={currentLang} onSelectLang={setCurrentLang} activeTab={activeTab} onNavigate={handleNavigate} isRTL={isRTL} />
    <main className="flex-1">
      {activeTab === 'home' && <>
        <HomeHero currentLang={currentLang} onStartLearning={handleStartLearning} onExploreMap={() => handleNavigate('map')} isRTL={isRTL} />
        <Dashboard userProgress={userProgress} currentLang={currentLang} onSelectMaterial={handleOpenMaterial} onStartQuiz={handleStartQuiz} onExploreMap={() => handleNavigate('map')} isRTL={isRTL} />
      </>}
      {activeTab === 'learning' && (isViewingSpecificMaterial ? <MaterialViewer
        material={currentMaterials[currentMaterialIndex]} materialIndex={currentMaterialIndex} totalMaterials={currentMaterials.length}
        isCompleted={Boolean(userProgress.progress[`material${currentMaterialIndex + 1}` as 'material1'|'material2'|'material3'])}
        onToggleComplete={() => handleToggleMaterialComplete(currentMaterialIndex + 1)}
        onNext={() => { if (currentMaterialIndex < currentMaterials.length - 1) { setCurrentMaterialIndex(v => v + 1); window.scrollTo({top:0,behavior:'smooth'}); } }}
        onPrev={() => { if (currentMaterialIndex > 0) { setCurrentMaterialIndex(v => v - 1); window.scrollTo({top:0,behavior:'smooth'}); } }}
        onBackToDashboard={() => setIsViewingSpecificMaterial(false)} onGoToQuiz={handleStartQuiz} allCompleted={allMaterialsCompleted} currentLang={currentLang} isRTL={isRTL}
      /> : <Dashboard userProgress={userProgress} currentLang={currentLang} onSelectMaterial={handleOpenMaterial} onStartQuiz={handleStartQuiz} onExploreMap={() => handleNavigate('map')} isRTL={isRTL} />)}
      {activeTab === 'map' && <HistoryMap currentLang={currentLang} isRTL={isRTL} />}
      {activeTab === 'crossword' && <CrosswordGame userProgress={userProgress} onSaveQuizResult={handleSaveQuizResult} onReviewMaterials={() => { setActiveTab('learning'); setIsViewingSpecificMaterial(false); }} currentLang={currentLang} isRTL={isRTL} />}
      {activeTab === 'sources' && <SourcesView currentLang={currentLang} />}
    </main>
    <Footer currentLang={currentLang} onNavigate={handleNavigate} />
  </div>;
}

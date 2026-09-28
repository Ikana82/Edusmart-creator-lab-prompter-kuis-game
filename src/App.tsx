/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GameFormData, GameLanguageOption, Language, TargetAIBuilder, VisualStyle } from './types/generator';
import { Header } from './components/Header';
import { SectionCard } from './components/SectionCard';
import { GameTypesSection } from './components/GameTypesSection';
import { TopicSection } from './components/TopicSection';
import { LearnerGoalsSection } from './components/LearnerGoalsSection';
import { VisualFeaturesSection } from './components/VisualFeaturesSection';
import { InstructionsAISection } from './components/InstructionsAISection';
import { StickyBottomBar } from './components/StickyBottomBar';
import { PromptModal } from './components/PromptModal';
import { PresetModal } from './components/PresetModal';
import { generateEducationalGamePrompt } from './utils/promptGenerator';
import { translations, EDUCATION_CATEGORIES } from './utils/translations';

const DEFAULT_FORM_DATA: GameFormData = {
  gameTypes: ['Drag & Drop', 'Matching / Menjodohkan', 'Balloon Pop'],
  language: 'id',
  topic: 'Gaya Magnet IPAS Kelas 4 SD',
  subTopic: 'Sifat kutub utara & selatan, gaya tarik-menarik dan tolak-menolak, benda magnetis vs non-magnetis',
  educationCategory: 'SD',
  gradeClass: 'Kelas 4',
  educationLevel: 'SD Kelas 4',
  targetAge: '9-10 tahun',
  questionCount: 8,
  learningGoals: ['Memahami', 'Menerapkan', 'Menganalisis'],
  visualStyle: '3D Felt Toys Pastel',
  gameFeatures: ['Progress bar / level', 'Suara & efek', 'Animasi feedback', 'Hint / Petunjuk bantuan', 'Bintang / skor'],
  specialInstructions: '',
  targetAI: 'Google AI Studio',
  brandName: 'EduSmart Creator Lab',
  brandNotes: 'Gunakan identitas EduSmart Creator Lab secara konsisten: cute, pastel, bersih, ramah guru dan anak, dengan branding kecil yang elegan pada halaman pembuka.'
};

export default function App() {
  const [formData, setFormData] = useState<GameFormData>(DEFAULT_FORM_DATA);
  const [currentLang, setCurrentLang] = useState<Language>('id');
  const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);
  const [isPresetModalOpen, setIsPresetModalOpen] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const t = translations[currentLang];

  // Helper to show transient alerts/toasts
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Toggle Language ID <-> EN
  const handleToggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  // Form Resetter
  const handleReset = () => {
    if (window.confirm(t.resetConfirm)) {
      setFormData({
        gameTypes: ['Drag & Drop'],
        language: 'id',
        topic: '',
        subTopic: '',
        educationCategory: 'SD',
        gradeClass: 'Kelas 4',
        educationLevel: 'SD Kelas 4',
        targetAge: '9-10 tahun',
        questionCount: 8,
        learningGoals: ['Memahami'],
        visualStyle: '3D Felt Toys Pastel',
        gameFeatures: ['Progress bar / level', 'Animasi feedback', 'Hint / Petunjuk bantuan', 'Bintang / skor'],
        specialInstructions: '',
        targetAI: 'Google AI Studio',
        brandName: 'EduSmart Creator Lab',
        brandNotes: ''
      });
      showToast(currentLang === 'id' ? 'Formulir berhasil direset' : 'Form has been reset');
    }
  };

  // Toggle Game Mechanics Checkbox
  const handleToggleGameType = (typeId: string) => {
    setFormData((prev) => {
      const exists = prev.gameTypes.includes(typeId);
      if (exists) {
        if (prev.gameTypes.length <= 1) {
          showToast(currentLang === 'id' ? 'Pilih minimal 1 jenis game!' : 'Select at least 1 game type!');
          return prev;
        }
        return { ...prev, gameTypes: prev.gameTypes.filter((t) => t !== typeId) };
      } else {
        return { ...prev, gameTypes: [...prev.gameTypes, typeId] };
      }
    });
  };

  // Category and Grade Class Handler
  const handleCategoryChange = (category: string) => {
    const catObj = EDUCATION_CATEGORIES.find((c) => c.id === category);
    const initialClass = catObj && catObj.classes.length > 0 ? catObj.classes[0].id : 'Kelas 1';
    const initialAge = catObj && catObj.classes.length > 0 ? catObj.classes[0].age : '7-8 tahun';

    setFormData((prev) => ({
      ...prev,
      educationCategory: category,
      gradeClass: initialClass,
      educationLevel: `${category} ${initialClass}`,
      targetAge: initialAge
    }));
  };

  const handleClassChange = (gradeClass: string, estimatedAge?: string) => {
    setFormData((prev) => ({
      ...prev,
      gradeClass,
      educationLevel: `${prev.educationCategory} ${gradeClass}`,
      targetAge: estimatedAge || prev.targetAge
    }));
  };

  // Toggle Learning Goal Checkbox
  const handleToggleLearningGoal = (goalId: string) => {
    setFormData((prev) => {
      const exists = prev.learningGoals.includes(goalId);
      if (exists) {
        if (prev.learningGoals.length <= 1) {
          return prev;
        }
        return { ...prev, learningGoals: prev.learningGoals.filter((g) => g !== goalId) };
      } else {
        return { ...prev, learningGoals: [...prev.learningGoals, goalId] };
      }
    });
  };

  // Toggle Game Feature Checkbox
  const handleToggleFeature = (featureId: string) => {
    setFormData((prev) => {
      const exists = prev.gameFeatures.includes(featureId);
      if (exists) {
        return { ...prev, gameFeatures: prev.gameFeatures.filter((f) => f !== featureId) };
      } else {
        return { ...prev, gameFeatures: [...prev.gameFeatures, featureId] };
      }
    });
  };

  // Calculate completeness score (0 - 100)
  const calculateCompleteness = (): number => {
    let score = 0;
    if (formData.topic.trim()) score += 30;
    if (formData.gameTypes.length > 0) score += 20;
    if (formData.learningGoals.length > 0) score += 15;
    if (formData.visualStyle) score += 15;
    if (formData.gameFeatures.length > 0) score += 10;
    if (formData.targetAge.trim()) score += 10;
    return Math.min(100, score);
  };

  // Generate Prompt Action
  const handleGeneratePrompt = () => {
    if (!formData.topic.trim()) {
      showToast(t.fillTopicAlert);
      const topicInput = document.querySelector('input[placeholder*="Gaya Magnet"]') as HTMLInputElement;
      if (topicInput) {
        topicInput.focus();
        topicInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    const compiledPrompt = generateEducationalGamePrompt(formData);
    setGeneratedPrompt(compiledPrompt);
    setIsPromptModalOpen(true);
  };

  const completeness = calculateCompleteness();

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-slate-800 pb-28">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-2xl shadow-xl border border-slate-700/80 animate-in fade-in slide-in-from-top-3 duration-200">
          {toastMessage}
        </div>
      )}

      {/* Main Container: Mobile-first, centered card layout on desktop */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Top Header & Brand */}
        <Header
          currentLang={currentLang}
          onToggleLang={handleToggleLanguage}
          onOpenPresets={() => setIsPresetModalOpen(true)}
          onReset={handleReset}
        />

        {/* SECTION 1: Jenis Game & Bahasa */}
        <SectionCard
          number="1"
          title={t.section1Title}
          description={t.section1Desc}
          icon="🎮"
          badgeColor="emerald"
        >
          <GameTypesSection
            currentLang={currentLang}
            selectedTypes={formData.gameTypes}
            onToggleType={handleToggleGameType}
            language={formData.language}
            onChangeLanguage={(lang: GameLanguageOption) => setFormData((prev) => ({ ...prev, language: lang }))}
          />
        </SectionCard>

        {/* SECTION 2: Materi / Tema Pembelajaran */}
        <SectionCard
          number="2"
          title={t.section2Title}
          description={t.section2Desc}
          icon="📖"
          badgeColor="amber"
        >
          <TopicSection
            currentLang={currentLang}
            topic={formData.topic}
            onChangeTopic={(topic) => setFormData((prev) => ({ ...prev, topic }))}
            subTopic={formData.subTopic || ''}
            onChangeSubTopic={(subTopic) => setFormData((prev) => ({ ...prev, subTopic }))}
          />
        </SectionCard>

        {/* SECTION 3: Peserta Didik & Tujuan Pembelajaran (sesuai Screenshot 7) */}
        <SectionCard
          number="3"
          title={t.section3Title}
          description={t.section3Desc}
          icon="👧"
          badgeColor="sky"
        >
          <LearnerGoalsSection
            currentLang={currentLang}
            educationCategory={formData.educationCategory}
            onChangeCategory={handleCategoryChange}
            gradeClass={formData.gradeClass}
            onChangeClass={handleClassChange}
            targetAge={formData.targetAge}
            onChangeAge={(targetAge) => setFormData((prev) => ({ ...prev, targetAge }))}
            questionCount={formData.questionCount}
            onChangeQuestionCount={(questionCount) => setFormData((prev) => ({ ...prev, questionCount }))}
            learningGoals={formData.learningGoals}
            onToggleGoal={handleToggleLearningGoal}
          />
        </SectionCard>

        {/* SECTION 4: Gaya Visual & Pengalaman Bermain */}
        <SectionCard
          number="4"
          title={t.section4Title}
          description={t.section4Desc}
          icon="🎨"
          badgeColor="rose"
        >
          <VisualFeaturesSection
            currentLang={currentLang}
            visualStyle={formData.visualStyle}
            onChangeVisualStyle={(visualStyle: VisualStyle) => setFormData((prev) => ({ ...prev, visualStyle }))}
            gameFeatures={formData.gameFeatures}
            onToggleFeature={handleToggleFeature}
          />
        </SectionCard>

        {/* SECTION 5: Instruksi Khusus, Target AI & Brand Creator */}
        <SectionCard
          number="5"
          title={t.section5Title}
          description={t.section5Desc}
          icon="🤖"
          badgeColor="indigo"
        >
          <InstructionsAISection
            currentLang={currentLang}
            instructions={formData.specialInstructions}
            onChangeInstructions={(specialInstructions) => setFormData((prev) => ({ ...prev, specialInstructions }))}
            targetAI={formData.targetAI}
            onChangeTargetAI={(targetAI: TargetAIBuilder) => setFormData((prev) => ({ ...prev, targetAI }))}
            brandName={formData.brandName}
            onChangeBrandName={(brandName) => setFormData((prev) => ({ ...prev, brandName }))}
            brandNotes={formData.brandNotes || ''}
            onChangeBrandNotes={(brandNotes) => setFormData((prev) => ({ ...prev, brandNotes }))}
          />
        </SectionCard>

        {/* Footer info & credits */}
        <footer className="pt-6 pb-12 text-center text-xs text-slate-400 space-y-1">
          <p className="font-semibold text-slate-500">
            AI Educational Game Generator · EduSmart Creator Lab
          </p>
          <p>
            Alat bantu terstruktur untuk guru, kreator kurikulum, dan pengembang EduTech interaktif.
          </p>
        </footer>
      </main>

      {/* Floating / Sticky Bottom Action Bar */}
      <StickyBottomBar
        currentLang={currentLang}
        topic={formData.topic}
        selectedMechanicsCount={formData.gameTypes.length}
        completionScore={completeness}
        onGenerate={handleGeneratePrompt}
      />

      {/* Full-Screen Generated Prompt Modal */}
      <PromptModal
        isOpen={isPromptModalOpen}
        onClose={() => setIsPromptModalOpen(false)}
        promptText={generatedPrompt}
        targetAI={formData.targetAI}
        currentLang={currentLang}
      />

      {/* Preset Templates Modal */}
      <PresetModal
        isOpen={isPresetModalOpen}
        onClose={() => setIsPresetModalOpen(false)}
        onSelectPreset={(presetData) => {
          setFormData(presetData);
          showToast(currentLang === 'id' ? 'Template berhasil dimuat! ✨' : 'Template applied successfully! ✨');
        }}
        currentLang={currentLang}
      />
    </div>
  );
}

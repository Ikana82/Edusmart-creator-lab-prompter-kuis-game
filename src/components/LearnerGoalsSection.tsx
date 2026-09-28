import React, { useState } from 'react';
import { Check, Sparkles, Layers } from 'lucide-react';
import { Language } from '../types/generator';
import { EDUCATION_CATEGORIES, LEARNING_GOALS, translations } from '../utils/translations';

interface LearnerGoalsSectionProps {
  currentLang: Language;
  educationCategory: string;
  onChangeCategory: (category: string) => void;
  gradeClass: string;
  onChangeClass: (gradeClass: string, estimatedAge?: string) => void;
  targetAge: string;
  onChangeAge: (age: string) => void;
  questionCount: number;
  onChangeQuestionCount: (count: number) => void;
  learningGoals: string[];
  onToggleGoal: (goalId: string) => void;
}

export const LearnerGoalsSection: React.FC<LearnerGoalsSectionProps> = ({
  currentLang,
  educationCategory,
  onChangeCategory,
  gradeClass,
  onChangeClass,
  targetAge,
  onChangeAge,
  questionCount,
  onChangeQuestionCount,
  learningGoals,
  onToggleGoal
}) => {
  const t = translations[currentLang];
  const [showDetailedDesc, setShowDetailedDesc] = useState(false);

  const currentCategoryObj = EDUCATION_CATEGORIES.find(
    (c) => c.id === educationCategory
  ) || EDUCATION_CATEGORIES[1]; // default SD

  const handleCategoryChange = (newCatId: string) => {
    onChangeCategory(newCatId);
    const catObj = EDUCATION_CATEGORIES.find((c) => c.id === newCatId);
    if (catObj && catObj.classes.length > 0) {
      const defaultClass = catObj.classes[0];
      onChangeClass(defaultClass.id, defaultClass.age);
    }
  };

  const questionCountOptions = [5, 8, 10, 15, 20];

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* 1. Row: Jenjang & Kelas Dinamis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Jenjang Dropdown */}
        <div className="space-y-1.5">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-600">
            {t.levelLabel}
          </label>
          <div className="relative">
            <select
              value={educationCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full px-4 py-3 text-sm font-semibold bg-white text-slate-800 border-2 border-stone-200 focus:border-[#38B28B] focus:ring-4 focus:ring-emerald-500/10 rounded-2xl outline-none transition-all cursor-pointer shadow-xs"
            >
              {EDUCATION_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
          <p className="text-[11px] text-stone-400 font-medium">
            {currentLang === 'id' ? 'Kategori kurikulum dasar pendidikan' : 'Base educational stage category'}
          </p>
        </div>

        {/* Dynamic Class Options (SD: 1-6, SMP: 7-9, SMA: 10-12, etc.) */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-600">
              {t.classLabel} ({currentCategoryObj.id})
            </label>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
              {gradeClass}
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 pt-0.5">
            {currentCategoryObj.classes.map((cls) => {
              const isSelected = gradeClass === cls.id;
              return (
                <button
                  key={cls.id}
                  type="button"
                  onClick={() => onChangeClass(cls.id, cls.age)}
                  className={`py-2 px-2 text-xs font-extrabold rounded-xl border transition-all active:scale-95 cursor-pointer text-center flex flex-col items-center justify-center min-h-[44px] ${
                    isSelected
                      ? 'bg-[#38B28B] text-white border-[#2A9573] shadow-xs ring-2 ring-emerald-500/20'
                      : 'bg-white text-slate-700 hover:bg-stone-50 border-stone-200'
                  }`}
                  title={`${cls.label} (Usia perkiraan: ${cls.age})`}
                >
                  <span className="leading-tight">{cls.label.replace('Kelas ', 'Kls ')}</span>
                </button>
              );
            })}
          </div>
          <p className="text-[11px] text-stone-400 font-medium">
            {currentLang === 'id' ? 'Klik kelas untuk otomatis menyesuaikan perkiraan usia' : 'Click class to automatically sync estimated age'}
          </p>
        </div>
      </div>

      {/* 2. Row: Usia Anak & Jumlah Soal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Rentang Usia Input */}
        <div className="space-y-1.5">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-600">
            {t.ageLabel}
          </label>
          <input
            type="text"
            value={targetAge}
            onChange={(e) => onChangeAge(e.target.value)}
            placeholder={t.agePlaceholder}
            className="w-full px-4 py-3 text-sm font-semibold bg-white text-slate-800 placeholder:text-stone-400 border-2 border-stone-200 focus:border-[#38B28B] focus:ring-4 focus:ring-emerald-500/10 rounded-2xl outline-none transition-all shadow-xs"
          />
        </div>

        {/* Jumlah Soal Select */}
        <div className="space-y-1.5">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-600">
            {t.questionCountLabel}
          </label>
          <select
            value={questionCount}
            onChange={(e) => onChangeQuestionCount(Number(e.target.value))}
            className="w-full px-4 py-3 text-sm font-semibold bg-white text-slate-800 border-2 border-stone-200 focus:border-[#38B28B] focus:ring-4 focus:ring-emerald-500/10 rounded-2xl outline-none transition-all cursor-pointer shadow-xs"
          >
            {questionCountOptions.map((num) => (
              <option key={num} value={num}>
                {num} Soal
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 3. Tujuan Pembelajaran (Responsive & Non-Truncated) */}
      <div className="pt-3 border-t border-stone-200/80 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-700">
              {t.goalsLabel}
            </label>
            <span className="text-[11px] text-stone-400">
              {currentLang === 'id' 
                ? 'Pilih satu atau beberapa capaian Taksonomi Bloom / Kurikulum Merdeka' 
                : 'Select one or more Bloom taxonomy & pedagogical goals'}
            </span>
          </div>

          {/* Toggle Detail Deskripsi Pedagogis */}
          <button
            type="button"
            onClick={() => setShowDetailedDesc((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-stone-600 bg-stone-100 hover:bg-stone-200/80 border border-stone-200 transition-colors cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5 text-stone-500" />
            <span>
              {showDetailedDesc 
                ? (currentLang === 'id' ? 'Mode Ringkas (Pill)' : 'Compact View')
                : (currentLang === 'id' ? 'Lihat Detail Pedagogis' : 'Show Bloom Details')}
            </span>
          </button>
        </div>

        {/* Responsive Grid: 2 columns on mobile, 2 or 3 columns on tablet/desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
          {LEARNING_GOALS.map((goal) => {
            const isSelected = learningGoals.includes(goal.id);
            const goalLabel = currentLang === 'id' ? goal.label : goal.labelEn;
            const goalDesc = currentLang === 'id' ? goal.descId : goal.descEn;

            return (
              <button
                key={goal.id}
                type="button"
                onClick={() => onToggleGoal(goal.id)}
                className={`w-full flex items-start gap-3 p-3 rounded-2xl sm:rounded-3xl border-2 text-left transition-all active:scale-[0.98] cursor-pointer min-h-[50px] ${
                  isSelected
                    ? 'bg-[#38B28B] text-white border-[#2E9976] shadow-md shadow-emerald-900/5 ring-2 ring-emerald-500/20'
                    : 'bg-white hover:bg-stone-50/90 text-slate-800 border-stone-200 hover:border-stone-300'
                }`}
              >
                {/* Checkbox Icon */}
                <div
                  className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    isSelected
                      ? 'bg-white text-[#38B28B] shadow-xs'
                      : 'border-2 border-stone-300 bg-stone-50'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3.5]" />}
                </div>

                {/* Content: Title & optional description - Fully Responsive without Truncation */}
                <div className="flex-1 min-w-0">
                  <div className={`text-xs sm:text-sm font-extrabold leading-snug break-words ${
                    isSelected ? 'text-white' : 'text-slate-800'
                  }`}>
                    {goalLabel}
                  </div>

                  {showDetailedDesc && goalDesc && (
                    <div className={`text-[11px] mt-1 leading-normal break-words ${
                      isSelected ? 'text-emerald-50/90' : 'text-stone-500'
                    }`}>
                      {goalDesc}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected count info banner */}
        <div className="flex items-center justify-between text-xs text-stone-500 px-1 pt-1">
          <div className="flex items-center gap-1.5 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>
              {learningGoals.length} {currentLang === 'id' ? 'tujuan pedagogis dipilih' : 'learning goals selected'}
            </span>
          </div>
          {learningGoals.length === 0 && (
            <span className="text-amber-600 font-semibold">
              {currentLang === 'id' ? '⚠️ Pilih minimal 1 tujuan' : '⚠️ Select at least 1 goal'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

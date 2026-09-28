import React from 'react';
import { Check } from 'lucide-react';
import { GameLanguageOption, Language } from '../types/generator';
import { GAME_TYPE_OPTIONS, translations } from '../utils/translations';

interface GameTypesSectionProps {
  currentLang: Language;
  selectedTypes: string[];
  onToggleType: (typeId: string) => void;
  language: GameLanguageOption;
  onChangeLanguage: (lang: GameLanguageOption) => void;
}

export const GameTypesSection: React.FC<GameTypesSectionProps> = ({
  currentLang,
  selectedTypes,
  onToggleType,
  language,
  onChangeLanguage
}) => {
  const t = translations[currentLang];

  const langRadios: { id: GameLanguageOption; label: string; desc: string }[] = [
    {
      id: 'id',
      label: currentLang === 'id' ? 'Bahasa Indonesia' : 'Indonesian',
      desc: currentLang === 'id' ? 'Teks & instruksi berbahasa Indonesia' : 'Indonesian language & prompts'
    },
    {
      id: 'en',
      label: 'English',
      desc: currentLang === 'id' ? 'Teks & instruksi dalam bahasa Inggris' : 'English prompts & dialogue'
    },
    {
      id: 'bilingual',
      label: 'Bilingual (ID & EN)',
      desc: currentLang === 'id' ? 'Dua bahasa sekaligus dengan audio/subtitle' : 'Dual language prompts'
    }
  ];

  return (
    <div className="space-y-6">
      {/* 1. Game Mechanics Grid / Pills (sesuai Screenshot 5 & 6) */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
            <span>{t.gameTypesLabel}</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
              {selectedTypes.length} dipilih
            </span>
          </label>
        </div>

        {/* Multi-column grid of game pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {GAME_TYPE_OPTIONS.map((item) => {
            const isSelected = selectedTypes.includes(item.id);

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onToggleType(item.id)}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl border text-left transition-all duration-150 cursor-pointer active:scale-[0.98] ${
                  isSelected
                    ? 'bg-[#EAF6F0] border-[#38B28B] text-slate-900 font-semibold shadow-xs'
                    : 'bg-white hover:bg-stone-50/80 border-stone-200 text-slate-700'
                }`}
              >
                {/* Pill checkbox circle / badge like screenshot */}
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-[#38B28B] text-white shadow-xs'
                      : 'border-2 border-stone-300 bg-stone-50'
                  }`}
                >
                  {isSelected ? (
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                  )}
                </div>

                <div className="min-w-0 flex-1 flex items-center gap-1.5">
                  <span className="text-base shrink-0">{item.icon}</span>
                  <span className="text-xs sm:text-sm font-semibold break-words leading-tight">
                    {item.labelId}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Instructional Language Selection */}
      <div className="pt-2 border-t border-stone-200/70">
        <label className="block text-sm font-bold text-slate-800 mb-2.5">
          {t.languageLabel}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {langRadios.map((item) => {
            const isSelected = language === item.id;
            return (
              <label
                key={item.id}
                className={`flex items-start gap-3 p-3 rounded-2xl border cursor-pointer transition-all active:scale-[0.98] ${
                  isSelected
                    ? 'bg-amber-50/80 border-amber-400 shadow-xs'
                    : 'bg-white hover:bg-stone-50 border-stone-200'
                }`}
              >
                <input
                  type="radio"
                  name="gameLanguage"
                  value={item.id}
                  checked={isSelected}
                  onChange={() => onChangeLanguage(item.id)}
                  className="mt-1 text-amber-600 focus:ring-amber-500 w-4 h-4 border-stone-300"
                />
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm font-bold text-slate-800">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    {item.desc}
                  </div>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

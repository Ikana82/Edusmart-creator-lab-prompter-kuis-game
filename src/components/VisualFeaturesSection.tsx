import React from 'react';
import { Check } from 'lucide-react';
import { Language, VisualStyle } from '../types/generator';
import { GAME_FEATURES, VISUAL_STYLES, translations } from '../utils/translations';

interface VisualFeaturesSectionProps {
  currentLang: Language;
  visualStyle: VisualStyle;
  onChangeVisualStyle: (style: VisualStyle) => void;
  gameFeatures: string[];
  onToggleFeature: (featureId: string) => void;
}

export const VisualFeaturesSection: React.FC<VisualFeaturesSectionProps> = ({
  currentLang,
  visualStyle,
  onChangeVisualStyle,
  gameFeatures,
  onToggleFeature
}) => {
  const t = translations[currentLang];

  return (
    <div className="space-y-6">
      {/* 1. Visual Style Radios */}
      <div>
        <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-600 mb-2.5">
          {t.visualStyleLabel}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {VISUAL_STYLES.map((style) => {
            const isSelected = visualStyle === style.id;
            const label = currentLang === 'id' ? style.labelId : style.labelEn;
            const desc = currentLang === 'id' ? style.descId : style.descEn;

            return (
              <button
                key={style.id}
                type="button"
                onClick={() => onChangeVisualStyle(style.id as VisualStyle)}
                className={`relative text-left p-3 rounded-2xl border transition-all duration-200 cursor-pointer active:scale-[0.98] ${
                  isSelected
                    ? 'bg-[#EAF6F0] border-[#38B28B] shadow-xs'
                    : 'bg-white hover:bg-stone-50 border-stone-200'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-2xl p-1.5 rounded-xl bg-stone-50 border border-stone-200/60 shrink-0">
                    {style.icon}
                  </span>
                  <div className="flex-1 min-w-0 pr-5">
                    <div className="text-xs sm:text-sm font-bold text-slate-800">
                      {label}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-2 leading-tight">
                      {desc}
                    </div>
                  </div>
                </div>

                {/* Radio circle indicator */}
                <div
                  className={`absolute top-3 right-3 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    isSelected ? 'border-[#38B28B]' : 'border-stone-300'
                  }`}
                >
                  {isSelected && <div className="w-2 h-2 rounded-full bg-[#38B28B]" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Game Features Checkboxes (sesuai Screenshot 10 & Hint) */}
      <div className="pt-2 border-t border-stone-200/70">
        <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-600 mb-2.5">
          {t.gameFeaturesLabel}{' '}
          <span className="text-stone-400 font-normal">
            ({gameFeatures.length} dipilih)
          </span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {GAME_FEATURES.map((feat) => {
            const isSelected = gameFeatures.includes(feat.id);

            return (
              <button
                key={feat.id}
                type="button"
                onClick={() => onToggleFeature(feat.id)}
                className={`flex items-center gap-3 px-3.5 py-3 rounded-2xl border text-left transition-all active:scale-[0.98] cursor-pointer ${
                  isSelected
                    ? 'bg-[#EAF6F0] border-[#38B28B] shadow-xs'
                    : 'bg-white hover:bg-stone-50 border-stone-200'
                }`}
              >
                {/* Pill checkbox circle like screenshot 10 */}
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-[#38B28B] text-white shadow-xs'
                      : 'border-2 border-stone-300 bg-stone-50'
                  }`}
                >
                  {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                </div>

                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <span className="text-lg shrink-0">{feat.icon}</span>
                  <span
                    className={`text-xs sm:text-sm font-bold break-words leading-tight ${
                      isSelected ? 'text-slate-900' : 'text-slate-700'
                    }`}
                  >
                    {feat.labelId}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

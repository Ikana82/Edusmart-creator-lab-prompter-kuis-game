import React from 'react';
import { TargetAIBuilder, Language } from '../types/generator';
import { TARGET_AI_BUILDERS, translations } from '../utils/translations';

interface InstructionsAISectionProps {
  currentLang: Language;
  instructions: string;
  onChangeInstructions: (inst: string) => void;
  targetAI: TargetAIBuilder;
  onChangeTargetAI: (ai: TargetAIBuilder) => void;
  brandName: string;
  onChangeBrandName: (brand: string) => void;
  brandNotes: string;
  onChangeBrandNotes: (notes: string) => void;
}

export const InstructionsAISection: React.FC<InstructionsAISectionProps> = ({
  currentLang,
  instructions,
  onChangeInstructions,
  targetAI,
  onChangeTargetAI,
  brandName,
  onChangeBrandName,
  brandNotes,
  onChangeBrandNotes
}) => {
  const t = translations[currentLang];

  return (
    <div className="space-y-6">
      {/* 1. Target AI Builder (sesuai Screenshot 11) */}
      <div>
        <div className="mb-3">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-600">
            {t.targetAILabel}
          </label>
          <p className="text-xs text-slate-500 mt-0.5">
            {t.targetAIDesc}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {TARGET_AI_BUILDERS.map((item) => {
            const isSelected = targetAI === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onChangeTargetAI(item.id as TargetAIBuilder)}
                className={`flex items-center gap-2.5 px-3.5 py-3 rounded-2xl border text-left transition-all active:scale-[0.98] cursor-pointer ${
                  isSelected
                    ? 'bg-[#38B28B] text-white border-[#2A9573] shadow-xs'
                    : 'bg-white hover:bg-stone-50 border-stone-200 text-slate-700'
                }`}
              >
                {/* Radio dot circle like screenshot 11 */}
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                    isSelected ? 'border-white bg-white/20' : 'border-stone-300 bg-stone-50'
                  }`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      isSelected ? 'bg-white' : 'bg-transparent'
                    }`}
                  />
                </div>

                <span className={`text-xs sm:text-sm font-bold break-words leading-tight ${
                  isSelected ? 'text-white' : 'text-slate-800'
                }`}>
                  {item.tag}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Brand atau Creator (sesuai permintaan user & Screenshot 11) */}
      <div className="pt-2 border-t border-stone-200/70 space-y-4">
        <div>
          <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-600 mb-1.5">
            {t.brandLabel}
          </label>
          <input
            type="text"
            value={brandName}
            onChange={(e) => onChangeBrandName(e.target.value)}
            placeholder={t.brandPlaceholder}
            className="w-full px-4 py-3 text-sm font-semibold bg-white text-slate-800 placeholder:text-stone-400 border-2 border-stone-200 focus:border-[#38B28B] focus:ring-4 focus:ring-emerald-500/10 rounded-2xl outline-none transition-all shadow-xs"
          />
        </div>

        <div>
          <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-600 mb-1.5">
            {t.brandNotesLabel}
          </label>
          <textarea
            rows={2}
            value={brandNotes}
            onChange={(e) => onChangeBrandNotes(e.target.value)}
            placeholder={t.brandNotesPlaceholder}
            className="w-full px-4 py-2.5 text-xs sm:text-sm bg-white text-slate-800 placeholder:text-stone-400 border-2 border-stone-200 focus:border-[#38B28B] focus:ring-4 focus:ring-emerald-500/10 rounded-2xl outline-none transition-all resize-y shadow-xs"
          />
        </div>
      </div>

      {/* 3. Manual Custom Instructions */}
      <div className="pt-2 border-t border-stone-200/70">
        <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-600 mb-1.5">
          {t.instructionsLabel}
        </label>
        <textarea
          rows={3}
          value={instructions}
          onChange={(e) => onChangeInstructions(e.target.value)}
          placeholder={t.instructionsPlaceholder}
          className="w-full px-4 py-3 text-xs sm:text-sm bg-white text-slate-800 placeholder:text-stone-400 border-2 border-stone-200 focus:border-[#38B28B] focus:ring-4 focus:ring-emerald-500/10 rounded-2xl outline-none transition-all resize-y shadow-xs"
        />
        <div className="mt-1 flex items-center justify-between text-[11px] text-stone-400">
          <span>{currentLang === 'id' ? 'Opsional: Tambahkan aturan teknis atau instruksi khusus untuk model AI' : 'Optional: Specify any custom guidelines'}</span>
          <span>{instructions.length} karakter</span>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { X, Sparkles, ArrowRight, Check } from 'lucide-react';
import { GameFormData, Language, PresetTemplate } from '../types/generator';
import { PRESET_TEMPLATES } from '../utils/presets';
import { translations } from '../utils/translations';

interface PresetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPreset: (data: GameFormData) => void;
  currentLang: Language;
}

export const PresetModal: React.FC<PresetModalProps> = ({
  isOpen,
  onClose,
  onSelectPreset,
  currentLang
}) => {
  const t = translations[currentLang];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-stone-200 rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50/70">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">📚</span>
            <div>
              <h2 className="text-base font-bold text-slate-800">
                {currentLang === 'id' ? 'Template Game Edukasi Siap Pakai' : 'Ready-to-Play Game Templates'}
              </h2>
              <p className="text-xs text-slate-500">
                {currentLang === 'id' 
                  ? 'Pilih salah satu contoh kurikulum untuk mengisi formulir secara instan.' 
                  : 'Select an educational curriculum preset to auto-fill the form.'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-600 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* List of presets */}
        <div className="p-6 space-y-3 max-h-[70vh] overflow-y-auto">
          {PRESET_TEMPLATES.map((preset) => {
            const title = currentLang === 'id' ? preset.title.id : preset.title.en;
            const desc = currentLang === 'id' ? preset.description.id : preset.description.en;

            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => {
                  onSelectPreset(preset.data);
                  onClose();
                }}
                className="w-full text-left p-4 rounded-2xl border border-stone-200 hover:border-emerald-400 bg-stone-50/40 hover:bg-emerald-50/40 transition-all duration-200 group active:scale-[0.99] cursor-pointer"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl p-2 rounded-xl bg-white shadow-xs border border-stone-200/50">
                      {preset.icon}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-slate-800 group-hover:text-emerald-900 transition-colors">
                        {title}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {desc}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-stone-100 text-slate-600 border border-stone-200">
                          {preset.data.educationLevel}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                          {preset.data.gameTypes.slice(0, 2).join(' + ')}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 border border-amber-200">
                          {preset.data.targetAI}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 w-8 h-8 rounded-xl bg-white group-hover:bg-emerald-500 group-hover:text-white border border-stone-200 group-hover:border-emerald-500 flex items-center justify-center text-slate-400 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            {currentLang === 'id' ? 'Batal' : 'Cancel'}
          </button>
        </div>

      </div>
    </div>
  );
};

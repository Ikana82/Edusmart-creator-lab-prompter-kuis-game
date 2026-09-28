import React from 'react';
import { Sparkles, RotateCcw, BookOpen, Languages } from 'lucide-react';
import { Language } from '../types/generator';
import { translations } from '../utils/translations';

interface HeaderProps {
  currentLang: Language;
  onToggleLang: () => void;
  onOpenPresets: () => void;
  onReset: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onToggleLang,
  onOpenPresets,
  onReset
}) => {
  const t = translations[currentLang];

  return (
    <header className="w-full pt-6 pb-4 space-y-4">
      {/* Brand row & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        {/* Brand identity */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-sm shadow-emerald-200">
            <Sparkles className="w-5 h-5 text-emerald-100" />
          </div>
          <div>
            <div className="text-[11px] font-extrabold tracking-widest text-emerald-800 uppercase font-sans">
              {t.brandSubtitle}
            </div>
            <div className="text-xs font-semibold text-slate-500 tracking-tight">
              {t.brandTag}
            </div>
          </div>
        </div>

        {/* Action controls */}
        <div className="flex items-center gap-2">
          {/* Preset templates button */}
          <button
            type="button"
            onClick={onOpenPresets}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 active:scale-95 border border-emerald-200/80 rounded-xl transition-all shadow-xs"
            title="Load ready-to-use template"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden sm:inline">{t.presetButton}</span>
            <span className="sm:hidden">Template</span>
          </button>

          {/* Reset button */}
          <button
            type="button"
            onClick={onReset}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-600 bg-white hover:bg-slate-100 active:scale-95 border border-slate-200 rounded-xl transition-all shadow-xs"
            title="Reset form"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">{t.resetButton}</span>
          </button>

          {/* Language Switch */}
          <button
            type="button"
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-amber-50 hover:bg-amber-100/80 active:scale-95 border border-amber-200/80 rounded-xl transition-all shadow-xs"
            aria-label="Toggle language"
          >
            <Languages className="w-3.5 h-3.5 text-amber-700" />
            <span>{currentLang === 'id' ? 'ID 🇮🇩' : 'EN 🇬🇧'}</span>
          </button>
        </div>
      </div>

      {/* Hero Title & Description */}
      <div className="bg-gradient-to-br from-emerald-500/10 via-amber-50/50 to-teal-500/10 border border-emerald-200/60 rounded-3xl p-5 sm:p-7 shadow-xs">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold mb-2.5">
            <span>✨</span>
            <span>EduTech Prompt Engineering</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.heroTitle}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.heroDesc}
          </p>
        </div>
      </div>

      {/* Focus Product Information Card (seperti gambar) */}
      <div className="bg-[#EAF6F0] border border-[#BDE5D3] rounded-2xl p-4 sm:p-5 shadow-xs transition-all hover:border-emerald-300">
        <div className="flex items-start gap-3">
          <div className="text-xl sm:text-2xl mt-0.5 select-none shrink-0">🛡️</div>
          <div className="space-y-1">
            <h2 className="text-sm sm:text-base font-bold text-slate-800 tracking-tight">
              {t.focusBannerTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.focusBannerDesc}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

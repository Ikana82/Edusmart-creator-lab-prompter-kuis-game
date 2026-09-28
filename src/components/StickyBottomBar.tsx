import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Language } from '../types/generator';
import { translations } from '../utils/translations';

interface StickyBottomBarProps {
  currentLang: Language;
  topic: string;
  selectedMechanicsCount: number;
  completionScore: number;
  onGenerate: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  currentLang,
  topic,
  selectedMechanicsCount,
  completionScore,
  onGenerate
}) => {
  const t = translations[currentLang];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 pointer-events-none pb-3 pt-2 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto pointer-events-auto">
        <div className="bg-slate-900/90 backdrop-blur-md text-white rounded-2xl sm:rounded-3xl p-3 sm:py-3.5 sm:px-5 shadow-xl border border-slate-700/60 flex items-center justify-between gap-3">
          {/* Left info summary */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t.stickyPromptReady}
              </span>
              <span className="hidden sm:inline text-slate-500 text-xs">·</span>
              <span className="hidden sm:inline text-xs text-slate-300 truncate">
                {topic ? topic : (currentLang === 'id' ? 'Belum ada topik' : 'No topic set')}
              </span>
            </div>
            
            <div className="flex items-center gap-3 mt-0.5 text-xs text-slate-300">
              <span className="font-semibold text-slate-200">
                {selectedMechanicsCount} {t.selectedCount}
              </span>
              <span className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 text-[11px]">{t.completeness}:</span>
                <span className="font-bold text-amber-300">{completionScore}%</span>
                <div className="w-12 h-1.5 rounded-full bg-slate-700 overflow-hidden hidden sm:block">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full transition-all duration-300"
                    style={{ width: `${completionScore}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action button */}
          <button
            type="button"
            onClick={onGenerate}
            className="shrink-0 flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 active:scale-95 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-emerald-900/30 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-emerald-100" />
            <span>{t.stickyGenerate}</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-100 hidden sm:inline" />
          </button>
        </div>
      </div>
    </div>
  );
};

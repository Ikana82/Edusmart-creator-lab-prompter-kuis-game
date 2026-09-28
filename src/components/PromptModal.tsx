import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Download, 
  X, 
  Sparkles, 
  RotateCcw, 
  FileText, 
  Code2, 
  ExternalLink 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TargetAIBuilder, Language } from '../types/generator';
import { translations } from '../utils/translations';

interface PromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  promptText: string;
  targetAI: TargetAIBuilder;
  currentLang: Language;
}

export const PromptModal: React.FC<PromptModalProps> = ({
  isOpen,
  onClose,
  promptText,
  targetAI,
  currentLang
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'formatted' | 'raw'>('formatted');
  const t = translations[currentLang];

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      // Trigger a light celebration confetti
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#10b981', '#f59e0b', '#06b6d4', '#6366f1']
      });
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([promptText], { type: 'text/markdown;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `educational-game-prompt-${Date.now()}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const wordCount = promptText.trim().split(/\s+/).length;
  const charCount = promptText.length;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white border border-stone-200 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="px-5 sm:px-7 py-4 border-b border-stone-200/90 flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r from-emerald-50/60 via-stone-50 to-amber-50/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-slate-800">
                  {t.modalTitle}
                </h2>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {targetAI}
                </span>
              </div>
              <p className="text-xs text-slate-500">
                {t.modalSubtitle}
              </p>
            </div>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-2xl bg-stone-100 hover:bg-stone-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            title="Tutup / Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar & View tabs */}
        <div className="px-5 sm:px-7 py-2.5 bg-stone-50/80 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Tabs */}
          <div className="flex items-center gap-1 p-1 bg-stone-200/70 rounded-xl">
            <button
              type="button"
              onClick={() => setActiveTab('formatted')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeTab === 'formatted'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.formattedView}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('raw')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeTab === 'raw'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>{t.rawView}</span>
            </button>
          </div>

          {/* Prompt stats */}
          <div className="flex items-center gap-3 text-slate-500 font-medium">
            <span>
              <strong className="text-slate-800">{wordCount}</strong> {t.wordCount}
            </span>
            <span>·</span>
            <span>
              <strong className="text-slate-800">{charCount}</strong> {t.promptLength}
            </span>
            <span>·</span>
            <button
              type="button"
              onClick={handleDownload}
              className="flex items-center gap-1 text-slate-700 hover:text-emerald-700 font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>.md</span>
            </button>
          </div>
        </div>

        {/* Content Viewer Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 bg-[#FCFBF9]">
          {activeTab === 'formatted' ? (
            <div className="prose prose-slate max-w-none text-xs sm:text-sm font-sans space-y-4">
              {promptText.split('\n\n').map((block, idx) => {
                // Header level 1
                if (block.startsWith('# ')) {
                  return (
                    <div key={idx} className="pb-2 border-b border-emerald-200">
                      <h1 className="text-lg sm:text-xl font-bold text-emerald-950 font-display">
                        {block.replace('# ', '')}
                      </h1>
                    </div>
                  );
                }
                // Header level 2
                if (block.startsWith('## ')) {
                  return (
                    <div key={idx} className="pt-3 pb-1 border-b border-stone-200">
                      <h2 className="text-sm sm:text-base font-bold text-slate-800 font-display">
                        {block.replace('## ', '')}
                      </h2>
                    </div>
                  );
                }
                // Code block (JSON)
                if (block.includes('```')) {
                  const cleanedCode = block.replace(/```json/g, '').replace(/```/g, '').trim();
                  return (
                    <div key={idx} className="my-3 rounded-2xl bg-slate-900 text-slate-200 p-4 font-mono text-xs overflow-x-auto shadow-inner">
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">
                        JSON Dataset Template
                      </div>
                      <pre className="whitespace-pre">{cleanedCode}</pre>
                    </div>
                  );
                }
                // Horizontal divider
                if (block.trim() === '---') {
                  return <hr key={idx} className="border-stone-200 my-2" />;
                }
                // Lists or paragraphs
                return (
                  <div key={idx} className="text-slate-700 leading-relaxed space-y-1">
                    {block.split('\n').map((line, lIdx) => {
                      if (line.startsWith('- ')) {
                        return (
                          <div key={lIdx} className="flex items-start gap-2 pl-1">
                            <span className="text-emerald-500 font-bold mt-1 text-xs">•</span>
                            <span className="flex-1" dangerouslySetInnerHTML={{
                              __html: line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 font-semibold">$1</strong>')
                            }} />
                          </div>
                        );
                      }
                      if (/^\d+\.\s/.test(line)) {
                        return (
                          <div key={lIdx} className="pl-1">
                            <span dangerouslySetInnerHTML={{
                              __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 font-semibold">$1</strong>')
                            }} />
                          </div>
                        );
                      }
                      return (
                        <p key={lIdx} className="whitespace-pre-wrap" dangerouslySetInnerHTML={{
                          __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 font-semibold">$1</strong>')
                        }} />
                      );
                    })}
                  </div>
                );
              })}
            </div>
          ) : (
            <textarea
              readOnly
              value={promptText}
              className="w-full h-full min-h-[380px] p-4 text-xs font-mono bg-white text-slate-800 border border-stone-200 rounded-2xl outline-none resize-none"
            />
          )}
        </div>

        {/* Modal Bottom Actions Bar */}
        <div className="px-5 sm:px-7 py-3.5 bg-white border-t border-stone-200/90 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-stone-100 hover:bg-stone-200 text-slate-700 text-xs sm:text-sm font-bold transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-slate-500" />
            <span>{t.closeButton}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownload}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 rounded-2xl border border-stone-300 hover:bg-stone-50 text-slate-700 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-slate-500" />
              <span>{t.downloadButton}</span>
            </button>

            {/* Big Primary Copy Button */}
            <button
              type="button"
              onClick={handleCopy}
              className={`flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all cursor-pointer active:scale-95 ${
                copied
                  ? 'bg-emerald-600 text-white shadow-emerald-200'
                  : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-200'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>{t.copiedText}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{t.copyButton}</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

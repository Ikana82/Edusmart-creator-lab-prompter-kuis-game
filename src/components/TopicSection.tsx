import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import { Language } from '../types/generator';
import { POPULAR_TOPICS, translations } from '../utils/translations';

interface TopicSectionProps {
  currentLang: Language;
  topic: string;
  onChangeTopic: (topic: string) => void;
  subTopic: string;
  onChangeSubTopic: (sub: string) => void;
}

export const TopicSection: React.FC<TopicSectionProps> = ({
  currentLang,
  topic,
  onChangeTopic,
  subTopic,
  onChangeSubTopic
}) => {
  const t = translations[currentLang];
  const [topicSearch, setTopicSearch] = useState('');

  const filteredTopics = POPULAR_TOPICS.filter((item) =>
    item.topic.toLowerCase().includes(topicSearch.toLowerCase()) ||
    item.subTopic.toLowerCase().includes(topicSearch.toLowerCase())
  );

  const handleSelectPopular = (item: typeof POPULAR_TOPICS[0]) => {
    onChangeTopic(item.topic);
    if (item.subTopic && !subTopic) {
      onChangeSubTopic(item.subTopic);
    }
  };

  return (
    <div className="space-y-6">
      {/* Popular Topics List (sesuai Screenshot 2, 3, 4) */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <label className="text-xs font-extrabold uppercase tracking-wider text-stone-500">
              {t.popularTopicsLabel}
            </label>
            <p className="text-xs text-slate-500 mt-0.5">
              {t.popularTopicsSub}
            </p>
          </div>

          {/* Quick search filter for popular topics */}
          <div className="relative max-w-xs w-full">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={topicSearch}
              onChange={(e) => setTopicSearch(e.target.value)}
              placeholder="Cari materi..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-stone-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none"
            />
            {topicSearch && (
              <button
                type="button"
                onClick={() => setTopicSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Scrollable / Grid items as in screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-72 overflow-y-auto pr-1 p-1 bg-stone-50/60 rounded-2xl border border-stone-200/80">
          {filteredTopics.map((item) => {
            const isSelected = topic === item.topic;
            return (
              <button
                key={item.topic}
                type="button"
                onClick={() => handleSelectPopular(item)}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-full border text-left transition-all active:scale-[0.98] cursor-pointer ${
                  isSelected
                    ? 'bg-[#40B48F] text-white border-[#339B7A] shadow-xs'
                    : 'bg-white hover:bg-stone-50 text-slate-700 border-stone-200'
                }`}
              >
                {/* Radio circle indicator like screenshot */}
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${
                    isSelected
                      ? 'border-white/80 bg-white/20'
                      : 'border-stone-300 bg-stone-50'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isSelected ? 'bg-white' : 'bg-transparent'
                    }`}
                  />
                </div>

                <span className="text-base shrink-0">{item.icon}</span>
                <span className={`text-xs sm:text-sm font-semibold break-words leading-tight line-clamp-2 ${
                  isSelected ? 'text-white' : 'text-slate-800'
                }`}>
                  {item.topic}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Ketik Materi / Tema Sendiri (sesuai Screenshot 4) */}
      <div className="pt-2 border-t border-stone-200/70 space-y-3">
        <label className="text-xs font-extrabold uppercase tracking-wider text-stone-500">
          {t.customTopicHeader}
        </label>

        <div>
          <div className="relative">
            <input
              type="text"
              value={topic}
              onChange={(e) => onChangeTopic(e.target.value)}
              placeholder={t.topicPlaceholder}
              className="w-full pl-4 pr-10 py-3 text-sm font-semibold bg-white text-slate-900 placeholder:text-stone-400 border border-stone-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-2xl outline-none transition-all shadow-xs"
            />
            {topic && (
              <button
                type="button"
                onClick={() => onChangeTopic('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-stone-200 hover:bg-stone-300 text-slate-600 flex items-center justify-center transition-colors"
                title="Hapus teks"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Subtopic / key concepts input */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5">
            {t.subTopicLabel}
          </label>
          <input
            type="text"
            value={subTopic}
            onChange={(e) => onChangeSubTopic(e.target.value)}
            placeholder={t.subTopicPlaceholder}
            className="w-full px-4 py-2.5 text-xs sm:text-sm bg-white text-slate-800 placeholder:text-stone-400 border border-stone-200/90 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-2xl outline-none transition-all"
          />
        </div>
      </div>
    </div>
  );
};

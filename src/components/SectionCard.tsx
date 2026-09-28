import React from 'react';

interface SectionCardProps {
  number: string;
  title: string;
  description?: string;
  icon?: string;
  badgeColor?: 'emerald' | 'amber' | 'sky' | 'indigo' | 'rose' | 'teal';
  children: React.ReactNode;
}

export const SectionCard: React.FC<SectionCardProps> = ({
  number,
  title,
  description,
  icon,
  badgeColor = 'emerald',
  children
}) => {
  const badgeClasses = {
    emerald: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    amber: 'bg-amber-100 text-amber-800 border-amber-200',
    sky: 'bg-sky-100 text-sky-800 border-sky-200',
    indigo: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    rose: 'bg-rose-100 text-rose-800 border-rose-200',
    teal: 'bg-teal-100 text-teal-800 border-teal-200',
  }[badgeColor];

  return (
    <section className="bg-white border border-stone-200/90 rounded-3xl p-5 sm:p-7 shadow-xs transition-shadow hover:shadow-sm">
      {/* Header of Section */}
      <div className="flex items-start gap-3.5 mb-5 pb-3 border-b border-stone-100">
        <div className={`shrink-0 w-8 h-8 rounded-2xl flex items-center justify-center font-bold text-xs border ${badgeClasses}`}>
          {number}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            {icon && <span className="text-lg leading-none">{icon}</span>}
            <h2 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
              {title}
            </h2>
          </div>
          {description && (
            <p className="mt-0.5 text-xs sm:text-sm text-slate-500 leading-normal">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Body Content */}
      <div className="space-y-5">
        {children}
      </div>
    </section>
  );
};

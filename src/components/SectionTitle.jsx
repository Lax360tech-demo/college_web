import React from 'react';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3.5 ${
          dark 
            ? 'bg-blue-900/60 text-blue-300 border border-blue-700/50' 
            : 'bg-blue-50 text-blue-700 border border-blue-200'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4 ${
        dark ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex items-center gap-1.5 ${centered ? 'justify-center' : 'justify-start'}`}>
        <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
        <span className="w-3 h-1 bg-amber-500 rounded-full"></span>
        <span className="w-1.5 h-1 bg-blue-400 rounded-full"></span>
      </div>
    </div>
  );
}

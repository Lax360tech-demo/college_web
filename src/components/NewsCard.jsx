import React from 'react';
import { Calendar, ChevronRight, ArrowUpRight, Tag } from 'lucide-react';

export default function NewsCard({ news, onReadMore }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1">
      {news.image && (
        <div className="relative h-48 w-full overflow-hidden bg-slate-100">
          <img
            src={news.image}
            alt={news.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-md text-blue-700 shadow-sm flex items-center gap-1">
            <Tag className="w-3 h-3 text-blue-500" />
            <span>{news.category}</span>
          </div>
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Date */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-2.5">
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            <span>{news.date}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-3">
            {news.title}
          </h3>

          {/* Short description */}
          <p className="text-slate-600 text-sm line-clamp-3 mb-4 leading-relaxed">
            {news.excerpt}
          </p>
        </div>

        {/* Action button */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={() => onReadMore && onReadMore(news)}
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 group-hover:translate-x-0.5 transition-all focus:outline-none"
          >
            <span>Read More</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <span className="text-[11px] text-slate-400">Official Bulletin</span>
        </div>
      </div>
    </div>
  );
}

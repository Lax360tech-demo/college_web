import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Lightbox from '../components/Lightbox';
import { galleryItems } from '../data/collegeData';
import { Maximize2, Tag, Filter } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const [items] = useState(() => {
    const saved = localStorage.getItem('lax360_admin_gallery');
    return saved ? JSON.parse(saved) : galleryItems;
  });

  const categories = ['All', 'Campus', 'Events', 'College Functions', 'Sports', 'Academics'];

  const filteredItems = activeCategory === 'All'
    ? items
    : items.filter((item) => item.category === activeCategory);

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-navy-900 via-slate-900 to-navy-900 text-white pt-28 sm:pt-32 pb-12 sm:pb-14 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-3 inline-block">
            Campus Showcase
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Life, Energy & Moments at Apex
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Take a visual tour across our academic blocks, high-tech research centers, annual cultural carnivals, and championship sports moments.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200 cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                
                {/* Category badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-blue-700 shadow">
                  {item.category}
                </div>

                {/* Hover zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-3 rounded-full bg-blue-600 text-white shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>

                {/* Caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-base font-bold line-clamp-1 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            No photos found in this category.
          </div>
        )}
      </div>

      {/* Full-screen Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

    </div>
  );
}

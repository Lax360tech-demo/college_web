import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onPrev, onNext]);

  if (currentIndex === null || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 animate-fade-in select-none"
      onClick={onClose}
    >
      {/* Top bar controls */}
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-10 text-white">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold backdrop-blur-sm">
            {currentImage.category}
          </span>
          <span className="text-xs text-slate-300">
            {currentIndex + 1} of {images.length}
          </span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus:outline-none"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div 
        className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.image}
          alt={currentImage.title}
          className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
        />
        
        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <h3 className="text-base sm:text-lg font-bold text-white mb-1">
            {currentImage.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
            {currentImage.description}
          </p>
        </div>
      </div>

      {/* Prev / Next Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all backdrop-blur-sm focus:outline-none hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all backdrop-blur-sm focus:outline-none hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </>
      )}
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { collegeInfo } from '../data/collegeData';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-18 bg-slate-950">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover pointer-events-none scale-105"
          poster="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80"
        >
          <source src="/videos/campus_promo.mp4?v=2" type="video/mp4" />
          <source src="/videos/College_campus_promotional_video…_1080p_20260917101628.mp4?v=2" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Content (Above Video) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white my-auto animate-fade-in">
        
        {/* College Name */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-5xl mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          {collegeInfo.name}
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          "{collegeInfo.tagline}"
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-center">
          <Link
            to="/courses"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-2xl shadow-black/50 hover:-translate-y-0.5 transition-all duration-200 border border-blue-400/40"
          >
            <BookOpen className="w-5 h-5 text-blue-200" />
            <span>Explore Courses</span>
            <ArrowRight className="w-4 h-4 text-blue-200" />
          </Link>
        </div>

      </div>
    </section>
  );
}

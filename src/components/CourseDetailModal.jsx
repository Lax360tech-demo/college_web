import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Clock, Building2, CheckCircle2, GraduationCap, Briefcase, IndianRupee, ArrowRight } from 'lucide-react';

export default function CourseDetailModal({ course, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-navy-800 via-blue-900 to-indigo-950 text-white p-6 sm:p-8 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30 uppercase tracking-wider mb-2">
            {course.level} Program
          </div>
          <h3 className="text-xl sm:text-2xl font-bold leading-snug">{course.name}</h3>
          <p className="text-sm text-slate-300 mt-1 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{course.department}</span>
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Facts Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <span className="text-xs text-slate-500 font-medium block">Duration</span>
              <span className="text-sm font-bold text-slate-800 flex items-center gap-1.5 mt-0.5">
                <Clock className="w-4 h-4 text-blue-600" />
                {course.duration}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-500 font-medium block">Annual Fee</span>
              <span className="text-sm font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                <IndianRupee className="w-4 h-4 text-emerald-600" />
                {course.feePerYear}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-500 font-medium block">Annual Intake</span>
              <span className="text-sm font-bold text-slate-800 flex items-center gap-1.5 mt-0.5">
                <GraduationCap className="w-4 h-4 text-purple-600" />
                {course.intake} Seats
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Program Overview</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{course.description}</p>
          </div>

          {/* Eligibility */}
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
            <h4 className="text-sm font-bold text-blue-950 uppercase tracking-wider mb-1 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600" /> Eligibility Criteria
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{course.eligibility}</p>
          </div>

          {/* Curriculum Highlights */}
          {course.highlights && (
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2.5">Key Highlights</h4>
              <ul className="space-y-2">
                {course.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Career Pathways */}
          {course.careers && (
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-600" /> Potential Career Pathways
              </h4>
              <div className="flex flex-wrap gap-2">
                {course.careers.map((career, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                    {career}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 rounded-b-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
          <Link
            to="/admissions"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5"
          >
            <span>Apply for this Course</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

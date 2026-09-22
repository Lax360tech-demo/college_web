import React from 'react';
import { Clock, Building2, ChevronRight, GraduationCap } from 'lucide-react';

export default function CourseCard({ course, onViewDetails }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1">
      {/* Top Accent Strip */}
      <div className={`h-1.5 w-full ${
        course.level === 'Undergraduate' ? 'bg-blue-600' : 'bg-amber-500'
      }`} />

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Badges */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className={`px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider ${
              course.level === 'Undergraduate'
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'bg-amber-50 text-amber-700 border border-amber-200'
            }`}>
              {course.level}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {course.duration}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
            {course.name}
          </h3>

          {/* Department */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3 font-medium">
            <Building2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span className="truncate">{course.department}</span>
          </div>

          {/* Short Description */}
          <p className="text-slate-600 text-sm line-clamp-3 mb-4 leading-relaxed">
            {course.description}
          </p>

          {/* Highlights tag list */}
          {course.highlights && (
            <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-100">
              {course.highlights.slice(0, 2).map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Intake: <strong className="text-slate-800">{course.intake} Seats</strong>
          </span>
          <button
            onClick={() => onViewDetails(course)}
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 group-hover:translate-x-0.5 transition-all focus:outline-none"
          >
            <span>View Details</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { BookOpen, Cpu, Home, Trophy, Bus, Coffee, CheckCircle2 } from 'lucide-react';

const iconMap = {
  library: BookOpen,
  laboratories: Cpu,
  hostel: Home,
  sports: Trophy,
  transport: Bus,
  canteen: Coffee,
};

export default function FacilityCard({ facility }) {
  const IconComponent = iconMap[facility.id] || BookOpen;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1">
      {/* Image container */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
        <img
          src={facility.image}
          alt={facility.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        
        {/* Floating Icon badge */}
        <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-white/90 backdrop-blur-md shadow-md text-blue-700">
          <IconComponent className="w-6 h-6" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
            {facility.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-5">
            {facility.description}
          </p>

          {/* Feature checklist */}
          {facility.features && (
            <div className="space-y-2 pt-3 border-t border-slate-100">
              {facility.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

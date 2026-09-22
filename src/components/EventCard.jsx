import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function EventCard({ event, onRegister }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row group hover:-translate-y-0.5">
      {/* Event image */}
      <div className="relative w-full md:w-56 lg:w-64 h-48 md:h-auto overflow-hidden bg-slate-100 shrink-0">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-navy-800/90 backdrop-blur-md text-amber-400 text-xs font-bold shadow-md border border-white/10">
          {event.category}
        </div>
      </div>

      {/* Event details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium mb-2.5">
            <span className="flex items-center gap-1.5 text-blue-600 font-semibold">
              <Calendar className="w-3.5 h-3.5" />
              {event.date}
            </span>
            {event.time && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {event.time}
              </span>
            )}
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
            {event.title}
          </h3>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
            <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <span>{event.venue}</span>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {event.description}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-emerald-600 font-semibold">Open for Registration</span>
          <button
            onClick={() => onRegister && onRegister(event)}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white text-xs font-bold transition-all shadow-sm"
          >
            <span>Register Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

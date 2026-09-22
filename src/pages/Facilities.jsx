import React from 'react';
import SectionTitle from '../components/SectionTitle';
import FacilityCard from '../components/FacilityCard';
import { facilitiesData } from '../data/collegeData';
import { 
  Wifi, 
  ShieldCheck, 
  HeartPulse, 
  SunMedium, 
  Sparkles,
  Building,
  CheckCircle2 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Facilities() {
  const [facilities] = React.useState(() => {
    const saved = localStorage.getItem('lax360_admin_facilities');
    return saved ? JSON.parse(saved) : facilitiesData;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-navy-900 via-slate-900 to-navy-900 text-white pt-28 sm:pt-32 pb-12 sm:pb-14 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-3 inline-block">
            Campus Infrastructure
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            World-Class Facilities for Holistic Growth
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            From high-performance supercomputing hubs and 85,000+ volume digital libraries to residential hostels and Olympic sports arenas, explore our 45-acre smart campus.
          </p>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <SectionTitle
          badge="Infrastructure Spotlight"
          title="State-of-the-Art Living & Learning Spaces"
          subtitle="Engineered to provide unmatched safety, technological access, and comfort for students and faculty."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </div>

      {/* Smart Campus Ecosystem Strip */}
      <section className="mt-20 py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-1">
              Green & Digital Campus
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Campus Amenities & Safety Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center text-center group hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">High-Speed Wi-Fi</h3>
              <p className="text-xs text-slate-600">
                1 Gbps fiber connectivity blanket across academic blocks, labs, and student dormitories.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center text-center group hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">24/7 Security & CCTV</h3>
              <p className="text-xs text-slate-600">
                Biometric checkpoints, 300+ HD surveillance cameras, and dedicated security patrols.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center text-center group hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-700 flex items-center justify-center mb-3">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Health Care Center</h3>
              <p className="text-xs text-slate-600">
                Resident medical officer, 4-bed infirmary, first-aid suites, and round-the-clock ambulance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center text-center group hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                <SunMedium className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Solar Powered Campus</h3>
              <p className="text-xs text-slate-600">
                500 kW rooftop solar energy installation and rainwater harvesting across all facilities.
              </p>
            </div>

          </div>

          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-white font-bold text-sm shadow-md transition-all"
            >
              <span>View Facilities in Campus Gallery &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { 
  placementStats, 
  recruitingCompanies, 
  placementTrainingSteps 
} from '../data/collegeData';
import { 
  Award, 
  Briefcase, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Building2, 
  ChevronRight, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Placements() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-navy-900 via-slate-900 to-navy-900 text-white pt-28 sm:pt-32 pb-12 sm:pb-14 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-semibold uppercase tracking-wider mb-3 inline-block">
            Career Center & Placements
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Empowering Careers with Top Global Enterprises
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Consistently leading employment records with 95% placement assistance, top industry CTC packages, and rigorous technical bootcamps.
          </p>
        </div>
      </div>

      {/* 1. Placement Statistics Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placementStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-4xl font-black text-blue-600 group-hover:text-blue-700 transition-colors">
                    {stat.value}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {stat.detail}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified 2025-26 Season Data</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Placement Overview & Training Methodology */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionTitle
                badge="Career Development Cell"
                title="Structured 4-Year Placement Training Program"
                subtitle="We do not wait until final year. Our Career Development Cell embeds corporate readiness, algorithmic competence, and executive presence right from Year 1."
                centered={false}
              />

              <p className="text-slate-600 text-sm leading-relaxed">
                With a strong network of 12,000+ alumni working in Silicon Valley, Bangalore, Singapore, and Europe, our students receive direct mentorship, live industry problem statements, and real-world mock interview feedback.
              </p>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  Average CTC & Placement Velocity
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  The median annual package reached ₹6.8 LPA this year, with over 150+ students receiving multiple offers across Product Engineering, Cloud Consulting, and FinTech domains.
                </p>
              </div>
            </div>

            {/* Training Steps */}
            <div className="lg:col-span-6 space-y-4">
              {placementTrainingSteps.map((step) => (
                <div 
                  key={step.step}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-navy-900 text-white font-black text-base flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">{step.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Recruiting Companies Grid */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Corporate Network"
            title="Our Elite Recruiting Partners"
            subtitle="Leading global enterprises visit our campus annually to hire graduates for high-impact software, core engineering, and analytical roles."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {recruitingCompanies.map((company, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col items-center justify-center text-center group hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300 min-h-[140px]"
              >
                <div className="h-10 w-24 flex items-center justify-center mb-3">
                  <img
                    src={company.logo}
                    alt={company.name}
                    loading="lazy"
                    className="max-h-8 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {company.name}
                </span>
                <span className="text-[10px] text-slate-500 mt-0.5">
                  {company.category}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-slate-500 mb-4">
              Over 100+ global brands recruit from Apex Institute every year.
            </p>
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/20 transition-all"
            >
              <span>Apply for Admissions & Placements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

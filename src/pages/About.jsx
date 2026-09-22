import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { 
  collegeInfo, 
  principalData, 
  visionMission, 
  heroStats 
} from '../data/collegeData';
import { 
  Target, 
  Eye, 
  Award, 
  CheckCircle2, 
  Quote, 
  GraduationCap, 
  ShieldCheck, 
  Users, 
  BookOpen, 
  History, 
  ArrowRight 
} from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Page Header Banner */}
      <div className="bg-gradient-to-r from-navy-900 via-slate-900 to-navy-900 text-white pt-28 sm:pt-32 pb-12 sm:pb-14 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-3 inline-block">
            About Our Institution
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Shaping Leaders, Pioneers & Visionaries Since 1984
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Welcome to Apex Institute of Technology & Science — an autonomous temple of learning committed to academic rigor, pioneering research, and holistic human values.
          </p>
        </div>
      </div>

      {/* 1. About College (Image + Text Section) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <SectionTitle
                badge="Heritage & Ethos"
                title="Four Decades of Benchmark Technical Education"
                subtitle="Established under the auspices of the Apex Educational Trust, our college has evolved into one of the country's most respected autonomous institutions."
                centered={false}
              />
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Spread across 45 lush, eco-friendly acres in the city's premier tech corridor, Apex Institute of Technology & Science provides an inspiring intellectual ecosystem for over 3,500 students. Our campus seamlessly integrates historical academic traditions with cutting-edge 21st-century technological research centers.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                As an autonomous institution affiliated to the State University and approved by AICTE, we take pride in our dynamic, industry-vetted curriculum. Students gain immersive laboratory experience, patent guidance, interdisciplinary entrepreneurship support, and direct mentorship from global researchers.
              </p>

              {/* Accreditations Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-base font-bold text-blue-900">NAAC 'A++'</div>
                  <div className="text-xs text-slate-500">CGPA 3.82 Benchmark</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-base font-bold text-blue-900">NBA Accredited</div>
                  <div className="text-xs text-slate-500">Tier-1 Washington Accord</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-base font-bold text-blue-900">NIRF Top 50</div>
                  <div className="text-xs text-slate-500">National Engineering Rank</div>
                </div>
              </div>
            </div>

            {/* Right: College Campus Imagery (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
                  alt="Apex Institute Campus Life"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-navy-900 text-white p-6 rounded-2xl shadow-xl border border-slate-800 max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4" /> Autonomous Status
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Conferred autonomous status by University Grants Commission (UGC) for academic autonomy and innovative curriculum design.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Vision & Mission Section (Modern Cards) */}
      <section className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Guiding Principles"
            title="Vision & Mission"
            subtitle="Our foundational compass driving strategic research, compassionate pedagogical practices, and transformative student outcomes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-200/90 relative overflow-hidden flex flex-col justify-between group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-700 text-base leading-relaxed mb-6 font-medium">
                  "{visionMission.vision}"
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                Global Benchmark in Engineering & Technology
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-200/90 relative overflow-hidden flex flex-col justify-between group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/30 mb-6">
                  <Target className="w-8 h-8 text-slate-950" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">Our Mission</h3>
                <ul className="space-y-3">
                  {visionMission.mission.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Outcome-Based Excellence & Moral Character
              </div>
            </div>

          </div>

          {/* Core Values 4-Grid */}
          <div className="mt-12">
            <h4 className="text-center font-bold text-slate-900 uppercase tracking-wider text-xs mb-6">
              Our Core Institutional Values
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {visionMission.coreValues.map((val, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                  <span className="text-xs font-black text-blue-600 uppercase tracking-wider block mb-1">
                    0{idx + 1}. {val.title}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Principal's Message with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-navy-900 to-slate-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              
              {/* Principal Photo (4 cols) */}
              <div className="lg:col-span-4 text-center lg:text-left">
                <div className="relative inline-block mx-auto">
                  <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-4 border-amber-400 shadow-2xl mx-auto">
                    <img
                      src={principalData.image}
                      alt={principalData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <h4 className="text-xl font-bold text-white">{principalData.name}</h4>
                    <p className="text-xs text-amber-400 font-semibold mt-0.5">{principalData.qualification}</p>
                    <p className="text-xs text-slate-400 mt-1">{principalData.designation}</p>
                  </div>
                </div>
              </div>

              {/* Principal Message Content (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-400 border border-white/15 text-xs font-bold uppercase tracking-wider">
                  <Quote className="w-4 h-4" /> Message from the Principal's Desk
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                  "Nurturing intellectual curiosity, research integrity, and global leadership in every aspiring mind."
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {principalData.message}
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  We look forward to welcoming you into our collegiate family and partnering with you on an exhilarating voyage of discovery and professional triumphs.
                </p>

                <div className="pt-4 flex items-center gap-4">
                  <Link
                    to="/admissions"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                  >
                    <span>Join Our Community</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/courses"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 transition-all"
                  >
                    <span>Explore Programs</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

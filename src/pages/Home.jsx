import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import CourseCard from '../components/CourseCard';
import CourseDetailModal from '../components/CourseDetailModal';
import NewsCard from '../components/NewsCard';
import EventCard from '../components/EventCard';
import { 
  coursesData, 
  latestNews, 
  upcomingEvents, 
  collegeInfo,
  placementStats,
  recruitingCompanies
} from '../data/collegeData';
import { 
  Award, 
  ArrowRight, 
  BookOpen, 
  Users, 
  CheckCircle2, 
  Building2, 
  Compass, 
  GraduationCap, 
  Sparkles,
  TrendingUp,
  Globe2
} from 'lucide-react';

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Take top 3 courses for Home preview
  const featuredCourses = coursesData.slice(0, 3);
  // Take top 2 news and top 2 events
  const homeNews = latestNews.slice(0, 2);
  const homeEvents = upcomingEvents.slice(0, 2);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Short About College Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Imagery & Floating Accreditation Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
                  alt="Apex Institute Campus Quad"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">Est. 1984</span>
                  <h3 className="text-xl font-bold mt-1">40+ Decades of Shaping Leaders</h3>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 p-4 sm:p-5 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center gap-4 max-w-xs">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-lg font-extrabold text-slate-900">NAAC 'A++'</div>
                  <div className="text-xs text-slate-500">Highest Category Autonomous Institution</div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Highlights (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <SectionTitle
                badge="About Apex Institute"
                title="A Legacy of Engineering Excellence, Scientific Inquiry & Innovation"
                subtitle="Founded with a noble commitment to democratizing premier technical and multidisciplinary education, Apex Institute has grown into a benchmark autonomous institution recognized nationally for research and employability."
                centered={false}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Autonomous Pedagogy</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Industry-aligned choice-based credit system with practical internships in every curriculum.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Global Dual Degree Tie-ups</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Active academic exchange partnerships with premier universities across Germany, UK, and USA.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    <span>Innovation & Incubation Hub</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Supported startup incubator with seed funding, patent facilitation, and venture mentors.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>Holistic Student Life</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Over 35 active technical clubs, sports squads, cultural arts societies, and NSS wings.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5"
                >
                  <span>Read Full History & Vision</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/facilities"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-sm transition-all"
                >
                  <span>Explore Campus Infrastructure</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Featured Courses Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Academic Offerings"
            title="Future-Ready Undergraduate & Postgraduate Programs"
            subtitle="Designed in consultation with Fortune 500 tech leaders, our accredited engineering and science programs equip students with real-world mastery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onViewDetails={(c) => setSelectedCourse(c)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all hover:-translate-y-0.5"
            >
              <span>View All 10+ Degree Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Placement Milestone Ticker */}
      <section className="py-16 bg-gradient-to-r from-navy-900 via-slate-900 to-navy-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest block mb-2">
              Career Trajectory
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Record-Breaking Placements Year After Year
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              From day one, our dedicated Career Development Cell provides intensive training in algorithms, full-stack tools, and leadership competencies.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {placementStats.map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-1">{stat.value}</div>
                <div className="text-sm font-bold text-white mb-1">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.detail}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              Trusted by 100+ global brands including Google, Microsoft, Amazon, TCS, Infosys, and Cognizant.
            </p>
            <Link
              to="/placements"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 hover:text-amber-200 underline"
            >
              <span>Explore Placement Statistics & Training Cell</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Latest News & Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Campus Life & Happenings"
            title="Latest College News & Upcoming Events"
            subtitle="Stay connected with our bustling campus calendar, student achievements, breakthrough research grants, and international guest symposiums."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* News Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  Latest News & Announcements
                </h3>
                <Link to="/news-events" className="text-xs font-bold text-blue-600 hover:text-blue-800">
                  View All News &rarr;
                </Link>
              </div>

              <div className="space-y-6">
                {homeNews.map((news) => (
                  <NewsCard 
                    key={news.id} 
                    news={news} 
                    onReadMore={() => {
                      // Navigate to news page or handle modal
                      window.location.href = '/news-events';
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Events Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-amber-500" />
                  Upcoming Campus Events
                </h3>
                <Link to="/news-events" className="text-xs font-bold text-blue-600 hover:text-blue-800">
                  View Full Calendar &rarr;
                </Link>
              </div>

              <div className="space-y-6">
                {homeEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onRegister={() => {
                      window.location.href = '/news-events';
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action Banner */}
      <section className="py-16 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-blue-500/30 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="px-3.5 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
            Admissions Open for Academic Year 2026-27
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold max-w-3xl mx-auto mb-4">
            Take the First Step Toward Your Future in Engineering & Innovation
          </h2>
          <p className="text-blue-100 text-base max-w-2xl mx-auto mb-8">
            Apply online today for merit-based counseling, early seat allotment, and generous tuition scholarships.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/admissions"
              className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-xl transition-all hover:-translate-y-0.5"
            >
              Start Online Application
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/30 transition-all"
            >
              Schedule Campus Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <CourseDetailModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
}

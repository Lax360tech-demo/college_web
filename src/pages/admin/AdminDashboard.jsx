import React from 'react';
import { 
  Users, 
  GraduationCap, 
  Briefcase, 
  Calendar,
  Building2,
  Image as ImageIcon,
  Mail, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  ArrowUpRight,
  PlusCircle,
  BellRing
} from 'lucide-react';

export default function AdminDashboard({ 
  stats, 
  admissions, 
  courses, 
  jobApplicants, 
  events = [],
  facilities = [],
  gallery = [],
  onNavigate 
}) {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-slate-800 p-6 sm:p-8 text-white shadow-xl">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                Academic Year 2026–27
              </span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Portal Active
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Lax360 Autonomous Management Hub
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-1 max-w-2xl">
              Welcome back, Administrator. Real-time overview of college admissions, academic curricula, faculty recruitment, campus events, and facilities.
            </p>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <button
              onClick={() => onNavigate('admissions')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-600/20"
            >
              <Users className="w-4 h-4" />
              <span>Review Admissions</span>
            </button>
            <button
              onClick={() => onNavigate('events')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-md shadow-amber-500/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Manage Events</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Card 1: Admissions */}
        <div 
          onClick={() => onNavigate('admissions')}
          className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Users className="w-5 h-5" />
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              <TrendingUp className="w-3 h-3" /> +14.2%
            </span>
          </div>
          <div className="mt-4">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Admissions</p>
            <h3 className="text-2xl font-black text-slate-900 mt-1">{stats.totalAdmissions}</h3>
            <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
              <Clock className="w-3 h-3 text-amber-500" />
              <strong className="text-amber-600 font-semibold">{stats.pendingAdmissions} pending</strong> review
            </p>
          </div>
        </div>

        {/* Card 2: Academic Programs */}
        <div 
          onClick={() => onNavigate('courses')}
          className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-amber-300 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="inline-flex items-center text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
              UG & PG
            </span>
          </div>
          <div className="mt-4">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Active Programs</p>
            <h3 className="text-2xl font-black text-slate-900 mt-1">{courses.length}</h3>
            <p className="text-xs text-slate-500 mt-1">
              96.8% Average Seat Occupancy
            </p>
          </div>
        </div>

        {/* Card 3: Careers & Applicants */}
        <div 
          onClick={() => onNavigate('careers')}
          className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-purple-300 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Briefcase className="w-5 h-5" />
            </div>
            <span className="inline-flex items-center text-xs font-medium text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full font-semibold">
              8 Open Roles
            </span>
          </div>
          <div className="mt-4">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Faculty Applicants</p>
            <h3 className="text-2xl font-black text-slate-900 mt-1">{stats.totalApplicants}</h3>
            <p className="text-xs text-slate-500 mt-1">
              4 interviews scheduled this week
            </p>
          </div>
        </div>

        {/* Card 4: Campus Events */}
        <div 
          onClick={() => onNavigate('events')}
          className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="inline-flex items-center text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">
              {facilities.length} Facilities
            </span>
          </div>
          <div className="mt-4">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Campus Events</p>
            <h3 className="text-2xl font-black text-slate-900 mt-1">{events.length} Active</h3>
            <p className="text-xs text-slate-500 mt-1">
              {gallery.length} Media items in gallery
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid: Enrollment Progress & Recent Applications */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Recent Applications */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Recent Admission Submissions</h2>
              <p className="text-xs text-slate-500">Live feed of student entrance applications for 2026–27</p>
            </div>
            <button
              onClick={() => onNavigate('admissions')}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs font-semibold text-slate-500 uppercase border-y border-slate-100">
                <tr>
                  <th className="py-3 px-3">Applicant</th>
                  <th className="py-3 px-3">Course</th>
                  <th className="py-3 px-3">Qualifying Score</th>
                  <th className="py-3 px-3">Date</th>
                  <th className="py-3 px-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {admissions.slice(0, 5).map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-3">
                      <div className="font-semibold text-slate-900">{item.name}</div>
                      <div className="text-xs text-slate-400">{item.email}</div>
                    </td>
                    <td className="py-3 px-3 text-xs font-medium text-slate-700">
                      {item.course}
                    </td>
                    <td className="py-3 px-3 font-semibold text-slate-900">
                      {item.marks}
                    </td>
                    <td className="py-3 px-3 text-xs text-slate-500">
                      {item.appliedDate}
                    </td>
                    <td className="py-3 px-3 text-right">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                        item.status === 'Approved'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : item.status === 'Interview Scheduled'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : item.status === 'Waitlisted'
                          ? 'bg-purple-50 text-purple-700 border border-purple-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right 1 Col: Department Seat Allotment Status */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Department Seat Fill Rates</h2>
            <p className="text-xs text-slate-500 mb-5">Current enrolled vs intake quota</p>

            <div className="space-y-4">
              {courses.slice(0, 4).map((c) => {
                const pct = Math.round((c.enrolled / c.intake) * 100);
                return (
                  <div key={c.id}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-slate-800">{c.name.split(' ')[1] || c.name}</span>
                      <span className="text-slate-500 font-medium">{c.enrolled}/{c.intake} ({pct}%)</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          pct >= 90 ? 'bg-emerald-500' : pct >= 70 ? 'bg-blue-600' : 'bg-amber-500'
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">Autonomous Accreditation</span>
              <span className="font-bold text-slate-800">NAAC A++ (3.72 CGPA)</span>
            </div>
            <button
              onClick={() => onNavigate('courses')}
              className="w-full mt-3 py-2 text-center rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
            >
              Manage Course Matrix
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

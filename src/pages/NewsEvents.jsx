import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import NewsCard from '../components/NewsCard';
import EventCard from '../components/EventCard';
import { latestNews, upcomingEvents } from '../data/collegeData';
import { 
  Bell, 
  Calendar, 
  Sparkles, 
  X, 
  Tag, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Send 
} from 'lucide-react';

export default function NewsEvents() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedNews, setSelectedNews] = useState(null);
  const [registeringEvent, setRegisteringEvent] = useState(null);
  const [registered, setRegistered] = useState(false);
  const [regForm, setRegForm] = useState({ name: '', email: '', phone: '', attendeeType: 'Student', dpdpConsent: false });

  const [eventsList] = useState(() => {
    const saved = localStorage.getItem('lax360_admin_events');
    return saved ? JSON.parse(saved) : upcomingEvents;
  });

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setRegistered(true);
    setTimeout(() => {
      setRegistered(false);
      setRegisteringEvent(null);
      setRegForm({ name: '', email: '', phone: '', attendeeType: 'Student', dpdpConsent: false });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-navy-900 via-slate-900 to-navy-900 text-white pt-28 sm:pt-32 pb-12 sm:pb-14 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-3 inline-block">
            Happenings & Announcements
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            News, Updates & Campus Events
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Follow the latest research milestones, academic notifications, student victories, and upcoming national cultural and tech symposiums.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-2 flex items-center justify-center max-w-md mx-auto gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            All Updates
          </button>
          <button
            onClick={() => setActiveTab('news')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'news'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            News Articles
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'events'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Events Calendar
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        
        {/* Section 1: Latest News */}
        {(activeTab === 'all' || activeTab === 'news') && (
          <div>
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
              <div>
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Bell className="w-6 h-6 text-blue-600" />
                  Latest Institutional News
                </h2>
                <p className="text-xs text-slate-500 mt-1">Official releases and student research highlights</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestNews.map((news) => (
                <NewsCard
                  key={news.id}
                  news={news}
                  onReadMore={(n) => setSelectedNews(n)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Upcoming Events */}
        {(activeTab === 'all' || activeTab === 'events') && (
          <div>
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
              <div>
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-amber-500" />
                  Upcoming Campus Events & Fests
                </h2>
                <p className="text-xs text-slate-500 mt-1">Register to participate in hackathons, fests, and conferences</p>
              </div>
            </div>

            <div className="space-y-6">
              {eventsList.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onRegister={(ev) => setRegisteringEvent(ev)}
                />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Read More News Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                {selectedNews.category}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {selectedNews.date}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 leading-snug">
              {selectedNews.title}
            </h3>

            {selectedNews.image && (
              <div className="rounded-xl overflow-hidden mb-6 h-64 w-full bg-slate-100">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
              {selectedNews.content || selectedNews.excerpt}
            </p>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedNews(null)}
                className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider"
              >
                Close Bulletin
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Event Registration Modal */}
      {registeringEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setRegisteringEvent(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block">Event Registration</span>
              <h3 className="text-lg font-black text-slate-900 mt-1">{registeringEvent.title}</h3>
              <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-red-500" /> {registeringEvent.venue}
              </p>
            </div>

            {registered ? (
              <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-900">Registration Confirmed!</h4>
                <p className="text-xs text-emerald-700">
                  A verification badge and entry pass has been sent to your email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={regForm.name}
                    onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={regForm.email}
                    onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                    placeholder="you@domain.com"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    required
                    value={regForm.phone}
                    onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Attendee Type</label>
                  <select
                    value={regForm.attendeeType}
                    onChange={(e) => setRegForm({ ...regForm, attendeeType: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500"
                  >
                    <option>Student (Current AITS)</option>
                    <option>External College Student</option>
                    <option>Alumni</option>
                    <option>Faculty / Researcher</option>
                  </select>
                </div>

                {/* DPDP Consent Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2 cursor-pointer select-none group">
                    <input
                      type="checkbox"
                      required
                      checked={regForm.dpdpConsent || false}
                      onChange={(e) => setRegForm((prev) => ({ ...prev, dpdpConsent: e.target.checked }))}
                      className="mt-0.5 w-3.5 h-3.5 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
                    />
                    <span className="text-[11px] text-slate-600 leading-tight group-hover:text-slate-800">
                      I agree to the processing of my personal data as per the{' '}
                      <Link to="/privacy-notice" target="_blank" className="text-blue-600 underline font-medium hover:text-blue-700">
                        Privacy Notice
                      </Link>
                      . <span className="text-red-500">*</span>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  Confirm Free Pass
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cookie, 
  ShieldCheck, 
  Check, 
  X, 
  Sliders, 
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import { initialCookieSettings } from '../data/dpdpData';

export default function CookieConsent() {
  const [preferences, setPreferences] = useState(() => {
    try {
      const saved = localStorage.getItem('lax360_cookie_consent');
      return saved ? JSON.parse(saved) : initialCookieSettings;
    } catch {
      return initialCookieSettings;
    }
  });

  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show banner if preferences haven't been configured yet
    if (!preferences.configured) {
      const timer = setTimeout(() => setShowBanner(true), 800);
      return () => clearTimeout(timer);
    }
  }, [preferences.configured]);

  // Global listener for "Cookie Preferences" footer link
  useEffect(() => {
    const handleOpen = () => setShowModal(true);
    window.addEventListener('openCookiePreferences', handleOpen);
    window.openCookiePreferences = handleOpen;
    return () => {
      window.removeEventListener('openCookiePreferences', handleOpen);
      delete window.openCookiePreferences;
    };
  }, []);

  const saveSettings = (updated) => {
    const finalSettings = {
      ...updated,
      essential: true, // Always true
      configured: true,
      timestamp: new Date().toISOString()
    };
    setPreferences(finalSettings);
    localStorage.setItem('lax360_cookie_consent', JSON.stringify(finalSettings));
    setShowBanner(false);
    setShowModal(false);
  };

  const handleAcceptAll = () => {
    saveSettings({
      essential: true,
      analytics: true,
      marketing: true
    });
  };

  const handleRejectNonEssential = () => {
    saveSettings({
      essential: true,
      analytics: false,
      marketing: false
    });
  };

  const handleSavePreferences = () => {
    saveSettings(preferences);
  };

  return (
    <>
      {/* Floating Cookie Consent Banner */}
      {showBanner && !showModal && (
        <aside 
          aria-label="Cookie and Privacy Consent"
          className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 max-w-7xl mx-auto z-50 animate-slide-up"
        >
          <div className="bg-slate-950/95 backdrop-blur-md text-white p-4 sm:py-3.5 sm:px-5 rounded-2xl shadow-2xl border border-slate-700/80">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
              
              {/* Left Side: Icon & Narrative */}
              <div className="flex items-center gap-3.5 flex-1 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Cookie className="w-4 h-4" />
                </div>

                <div className="text-xs text-slate-300 leading-snug flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <span className="font-bold text-sm text-white tracking-tight">Your Privacy</span>
                    <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30 font-semibold">
                      DPDP 2023
                    </span>
                  </div>
                  <p className="inline text-slate-300 text-xs">
                    We use cookies and similar technologies for analytics, site functionality, and personalized institutional services under the Digital Personal Data Protection Act, 2023.
                  </p>
                  <span className="inline-flex items-center gap-2 ml-2 text-[11px] text-blue-400 font-medium whitespace-nowrap">
                    <Link to="/privacy-notice" className="hover:underline inline-flex items-center gap-0.5">
                      <span>Privacy Notice</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </Link>
                    <span>•</span>
                    <Link to="/privacy-centre" className="hover:underline">
                      <span>Privacy Centre</span>
                    </Link>
                  </span>
                </div>
              </div>

              {/* Right Side: Actions & Close Button */}
              <div className="flex items-center gap-2 shrink-0 justify-end flex-wrap sm:flex-nowrap pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-800/80">
                <button
                  onClick={() => setShowModal(true)}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors whitespace-nowrap"
                >
                  Manage Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-1.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 transition-colors whitespace-nowrap"
                >
                  Accept All
                </button>
                <button
                  onClick={() => setShowBanner(false)}
                  className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
                  aria-label="Dismiss banner"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </aside>
      )}

      {/* Cookie Preferences Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    Cookie Preferences
                  </h3>
                  <p className="text-xs text-slate-500">
                    Digital Personal Data Protection (DPDP) Act, 2023
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                When you browse our academic portal, we store cookies on your browser to collect information regarding usage patterns, system security, and educational inquiries. You may customize your permissions below.
              </p>

              {/* 1. Essential Cookies */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-bold text-slate-900">Essential Cookies</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Always Active
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Required for website navigation, user sessions, form validation, and cybersecurity protection. These cannot be switched off.
                </p>
              </div>

              {/* 2. Analytics Cookies */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900">Analytics Cookies</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
                  </label>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Allows us to count visitors and traffic sources to measure and improve our academic programs catalog and portal performance.
                </p>
              </div>

              {/* 3. Marketing & Personalization Cookies */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900">Marketing & Personalization</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
                  </label>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Used for remarketing, symposium announcements, and tailor-made educational recommendations on third-party platforms.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
              <Link 
                to="/privacy-notice"
                onClick={() => setShowModal(false)}
                className="text-xs text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read Full Privacy Notice →
              </Link>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors"
                >
                  Reject Non-Essential
                </button>
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all"
                >
                  Save Preferences
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

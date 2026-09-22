import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';

import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Admissions from './pages/Admissions';
import Facilities from './pages/Facilities';
import Placements from './pages/Placements';
import Gallery from './pages/Gallery';
import NewsEvents from './pages/NewsEvents';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import PrivacyNotice from './pages/PrivacyNotice';
import PrivacyCentre from './pages/PrivacyCentre';
import TermsConditions from './pages/TermsConditions';
import AdminPanel from './pages/admin/AdminPanel';

export default function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.toLowerCase().startsWith('/admin');

  if (isAdminRoute) {
    return (
      <div className="min-h-screen selection:bg-blue-600 selection:text-white bg-slate-100">
        <Routes>
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/*" element={<AdminPanel />} />
          <Route path="/Admin" element={<AdminPanel />} />
          <Route path="/Admin/*" element={<AdminPanel />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen selection:bg-blue-600 selection:text-white bg-slate-50">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/careers/*" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* DPDP Act 2023 Statutory Routes */}
          <Route path="/privacy-notice" element={<PrivacyNotice />} />
          <Route path="/privacy-policy" element={<PrivacyNotice />} />
          <Route path="/privacy-centre" element={<PrivacyCentre />} />
          <Route path="/privacy-center" element={<PrivacyCentre />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/terms-of-service" element={<TermsConditions />} />

          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/*" element={<AdminPanel />} />
          <Route path="/Admin" element={<AdminPanel />} />
          <Route path="/Admin/*" element={<AdminPanel />} />
          {/* Catch-all route redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}


import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { collegeInfo } from '../data/collegeData';

// Custom crisp SVG icons for social platforms
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer 
      className="bg-sand-100 text-stone-700 border-t border-sand-300 pt-16 pb-8"
      style={{ backgroundColor: '#F6F3EC' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: College Profile & Connect With Us (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Lax360 Logo"
                  className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105 filter drop-shadow-sm"
                />
              </div>
              <div>
                <span className="font-black text-xl tracking-tight text-stone-950 block group-hover:text-blue-700 transition-colors">
                  Lax360
                </span>
                <span className="text-[11px] text-stone-600 tracking-wider uppercase font-semibold">
                  College of Technology & Science
                </span>
              </div>
            </Link>

            <p className="text-sm text-stone-600 leading-relaxed pr-4">
              Autonomous engineering and arts institution accredited by NAAC with 'A++' Grade. Fostering research innovation, ethical leadership, and global technological competence since 1984.
            </p>

            {/* Accreditation Badge */}
            <div className="p-3.5 rounded-xl bg-white/90 border border-[#E0D9C8] shadow-xs flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-amber-600 shrink-0" />
              <div className="text-xs">
                <span className="text-stone-900 font-bold block">NAAC 'A++' (3.82 CGPA)</span>
                <span className="text-stone-500 font-medium">NBA Tier-1 Accredited Programs</span>
              </div>
            </div>

            {/* Connect With Us Section */}
            <div className="pt-2 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-[#E0D9C8] pb-2">
                Connect With Us
              </h3>
              <div className="flex items-center gap-3 pt-0.5">
                <a
                  href={collegeInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-2xl bg-white hover:bg-blue-600 text-stone-700 hover:text-white flex items-center justify-center transition-all duration-200 border border-[#E0D9C8] shadow-xs"
                >
                  <FacebookIcon />
                </a>
                <a
                  href={collegeInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-2xl bg-white hover:bg-pink-600 text-stone-700 hover:text-white flex items-center justify-center transition-all duration-200 border border-[#E0D9C8] shadow-xs"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={collegeInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-2xl bg-white hover:bg-blue-700 text-stone-700 hover:text-white flex items-center justify-center transition-all duration-200 border border-[#E0D9C8] shadow-xs"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href={collegeInfo.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-2xl bg-white hover:bg-red-600 text-stone-700 hover:text-white flex items-center justify-center transition-all duration-200 border border-[#E0D9C8] shadow-xs"
                >
                  <YoutubeIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-[#E0D9C8] pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-stone-600 hover:text-blue-700 transition-colors flex items-center gap-1.5 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-600 hover:text-blue-700 transition-colors flex items-center gap-1.5 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-stone-600 hover:text-blue-700 transition-colors flex items-center gap-1.5 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" /> Courses & Programs
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-stone-600 hover:text-blue-700 transition-colors flex items-center gap-1.5 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" /> Admissions 2026-27
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-stone-600 hover:text-blue-700 transition-colors flex items-center gap-1.5 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" /> Campus Facilities
                </Link>
              </li>
              <li>
                <Link to="/placements" className="text-stone-600 hover:text-blue-700 transition-colors flex items-center gap-1.5 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" /> Placements & Careers
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-stone-600 hover:text-blue-700 transition-colors flex items-center gap-1.5 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" /> Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-stone-600 hover:text-blue-700 transition-colors flex items-center gap-1.5 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" /> Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-600 hover:text-blue-700 transition-colors flex items-center gap-1.5 font-medium">
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-[#E0D9C8] pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              Contact Information
            </h3>
            <div className="space-y-3.5 text-xs sm:text-sm text-stone-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{collegeInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <a href={`tel:${collegeInfo.phone.split('/')[0].trim()}`} className="hover:text-blue-700 transition-colors font-medium">
                  {collegeInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href={`mailto:${collegeInfo.email}`} className="hover:text-blue-700 transition-colors font-medium">
                  {collegeInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-purple-600 shrink-0" />
                <span>{collegeInfo.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip & DPDP Privacy Links */}
        <div className="pt-8 border-t border-[#E5DFD1] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            Copyright © 2026 {collegeInfo.name}. All Rights Reserved.
          </p>
          
          {/* DPDP Legal Links matching specification */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[11px] font-medium text-stone-600">
            <Link to="/privacy-notice" className="hover:text-blue-700 transition-colors">
              Privacy Notice
            </Link>
            <span>•</span>
            <button
              type="button"
              onClick={() => {
                if (window.openCookiePreferences) {
                  window.openCookiePreferences();
                } else {
                  window.dispatchEvent(new CustomEvent('openCookiePreferences'));
                }
              }}
              className="hover:text-blue-700 transition-colors cursor-pointer underline-offset-2 hover:underline focus:outline-none"
            >
              Cookie Preferences
            </button>
            <span>•</span>
            <Link to="/privacy-centre" className="hover:text-blue-700 transition-colors">
              Privacy Centre
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-blue-700 transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <span className="text-stone-400">Mandatory Disclosure</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

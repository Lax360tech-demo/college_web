import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Placements', path: '/placements' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'News & Events', path: '/news-events' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Get current page name for non-home pages
  const getCurrentPageTitle = () => {
    if (isHomePage) return null;
    const path = location.pathname.toLowerCase().replace(/\/+$/, '');
    if (path === '' || path === '/') return null;
    if (path.startsWith('/about')) return 'About Us';
    if (path.startsWith('/courses')) return 'Courses';
    if (path.startsWith('/admissions')) return 'Admissions';
    if (path.startsWith('/facilities')) return 'Facilities';
    if (path.startsWith('/placements')) return 'Placements';
    if (path.startsWith('/gallery')) return 'Gallery';
    if (path.startsWith('/news-events')) return 'News & Events';
    if (path.startsWith('/careers')) return 'Careers';
    if (path.startsWith('/contact')) return 'Contact Us';
    if (path.startsWith('/privacy-notice') || path.startsWith('/privacy-policy')) return 'Privacy Notice';
    if (path.startsWith('/privacy-centre') || path.startsWith('/privacy-center')) return 'Privacy Centre';
    if (path.startsWith('/terms')) return 'Terms & Conditions';
    return null;
  };

  const currentPageTitle = getCurrentPageTitle();

  // Determine navbar styling:
  // When menu is open, or on subpages, or when scrolled: dark navy/slate
  // On home page when not scrolled and menu closed: transparent gradient
  const isDarkNav = mobileMenuOpen || isScrolled || !isHomePage;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-none ${
        isDarkNav
          ? 'bg-slate-900/95 py-2.5 sm:py-3 text-white'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-3.5 text-white'
      }`}
      style={{
        backdropFilter: isDarkNav && !mobileMenuOpen ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isDarkNav && !mobileMenuOpen ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink-0 z-10">
            <div className="relative flex items-center justify-center shrink-0">
              <img
                src="/images/logo.png"
                alt="Lax360 Logo"
                className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105 filter drop-shadow-md"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-black text-lg sm:text-2xl tracking-tight leading-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
                Lax360
              </span>
              <p className={`text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold text-slate-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] mt-0.5 ${!isHomePage ? 'hidden md:block' : 'hidden xs:block'}`}>
                College of Technology & Science
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links (Home page only) */}
          {isHomePage && (
            <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-2.5 2xl:px-3 py-1.5 rounded-lg text-xs 2xl:text-sm font-medium transition-all duration-200 relative whitespace-nowrap ${
                      isActive
                        ? 'text-amber-400 font-bold bg-white/15 shadow-sm'
                        : 'text-white/90 hover:text-white hover:bg-white/10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-2.5 right-2.5 2xl:left-3 2xl:right-3 h-0.5 rounded-full bg-amber-400" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          )}

          {/* Center: Current Page Name Indicator (All pages except Home) */}
          {!isHomePage && currentPageTitle && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 animate-fade-in text-center max-w-[calc(100%-180px)] sm:max-w-[calc(100%-300px)]">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-xs shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                <span className="text-xs sm:text-base md:text-lg font-bold text-amber-300 tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] whitespace-nowrap">
                  {currentPageTitle}
                </span>
              </div>
            </div>
          )}

          {/* Desktop CTA Button & Toggle */}
          <div className="hidden sm:flex items-center gap-3 shrink-0 z-10">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 shadow-md shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Apply Now</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            {/* Menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
              title="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Menu button for small screens */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
              title="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Right-side Full Available Height Navigation Drawer (top-0 to bottom-0) */}
      {mobileMenuOpen && (
        <>
          {/* Fully transparent backdrop: Click outside closes menu while background remains 100% clearly visible */}
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 min-h-screen w-full bg-transparent z-40"
            aria-hidden="true"
          />

          {/* Right-side Navigation Panel occupying full available height from top-0 to bottom-0 */}
          <div 
            id="nav-drawer-panel"
            className="fixed right-0 top-0 bottom-0 z-50 w-80 sm:w-96 max-w-full border-l border-[#E5DFD1] shadow-2xl animate-fade-in text-stone-900 flex flex-col justify-between overflow-hidden"
            style={{ backgroundColor: '#F6F3EC' }}
          >
            {/* Drawer Header aligned with top navbar height */}
            <div className="flex items-center justify-between px-4 sm:px-5 h-[60px] sm:h-[68px] border-b border-[#E5DFD1] shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs uppercase tracking-wider text-stone-500">Navigation</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-stone-600 hover:text-stone-950 hover:bg-stone-200/70 transition-colors focus:outline-none"
                aria-label="Close Navigation Menu"
                title="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable links container */}
            <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `relative flex items-center justify-between py-2.5 px-3.5 rounded-xl text-sm transition-colors ${
                      isActive
                        ? 'text-blue-700 font-semibold bg-blue-50/70 shadow-xs'
                        : 'text-stone-700 hover:text-blue-700 hover:bg-black/5 font-medium'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center">
                        {isActive && (
                          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-5 bg-blue-600 rounded-full" />
                        )}
                        <span className="pl-1.5">{link.name}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-stone-400" />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Admissions Button pinned at bottom */}
            <div className="p-3.5 sm:p-4 border-t border-[#E5DFD1] shrink-0" style={{ backgroundColor: '#F6F3EC' }}>
              <Link
                to="/admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-center shadow-md shadow-amber-500/20 hover:brightness-105 transition-all text-sm"
              >
                <span>Admissions 2026-27 — Apply Online</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

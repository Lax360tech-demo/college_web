import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  Briefcase, 
  Calendar,
  Image as ImageIcon,
  Building2, 
  Bell, 
  Mail, 
  Settings, 
  Menu, 
  X, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Search
} from 'lucide-react';

import { 
  initialAdminStats, 
  initialAdmissions, 
  initialCourses, 
  initialJobApplicants, 
  initialNewsEvents, 
  initialInquiries 
} from '../../data/adminData';

import {
  upcomingEvents,
  galleryItems,
  facilitiesData
} from '../../data/collegeData';

import AdminDashboard from './AdminDashboard';
import AdminAdmissions from './AdminAdmissions';
import AdminCourses from './AdminCourses';
import AdminCareers from './AdminCareers';
import AdminEvents from './AdminEvents';
import AdminGallery from './AdminGallery';
import AdminFacilities from './AdminFacilities';
import AdminNewsEvents from './AdminNewsEvents';
import AdminInquiries from './AdminInquiries';
import AdminSettings from './AdminSettings';

export default function AdminPanel() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Synchronize tab if route subpath provided
  useEffect(() => {
    const subpath = location.pathname.toLowerCase().replace(/^\/admin\/?/, '');
    if (['dashboard', 'admissions', 'courses', 'careers', 'events', 'gallery', 'facilities', 'news', 'inquiries', 'settings'].includes(subpath)) {
      setActiveTab(subpath);
    }
  }, [location.pathname]);

  // Persistent state backed by localStorage
  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem('lax360_admin_stats');
    return saved ? JSON.parse(saved) : initialAdminStats;
  });

  const [admissions, setAdmissions] = useState(() => {
    const saved = localStorage.getItem('lax360_admin_admissions');
    return saved ? JSON.parse(saved) : initialAdmissions;
  });

  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem('lax360_admin_courses');
    return saved ? JSON.parse(saved) : initialCourses;
  });

  const [jobApplicants, setJobApplicants] = useState(() => {
    const saved = localStorage.getItem('lax360_admin_careers');
    return saved ? JSON.parse(saved) : initialJobApplicants;
  });

  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('lax360_admin_events');
    return saved ? JSON.parse(saved) : upcomingEvents;
  });

  const [gallery, setGallery] = useState(() => {
    const saved = localStorage.getItem('lax360_admin_gallery');
    return saved ? JSON.parse(saved) : galleryItems;
  });

  const [facilities, setFacilities] = useState(() => {
    const saved = localStorage.getItem('lax360_admin_facilities');
    return saved ? JSON.parse(saved) : facilitiesData;
  });

  const [newsEvents, setNewsEvents] = useState(() => {
    const saved = localStorage.getItem('lax360_admin_news');
    return saved ? JSON.parse(saved) : initialNewsEvents;
  });

  const [inquiries, setInquiries] = useState(() => {
    const saved = localStorage.getItem('lax360_admin_inquiries');
    return saved ? JSON.parse(saved) : initialInquiries;
  });

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('lax360_admin_admissions', JSON.stringify(admissions));
  }, [admissions]);

  useEffect(() => {
    localStorage.setItem('lax360_admin_courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('lax360_admin_careers', JSON.stringify(jobApplicants));
  }, [jobApplicants]);

  useEffect(() => {
    localStorage.setItem('lax360_admin_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('lax360_admin_gallery', JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem('lax360_admin_facilities', JSON.stringify(facilities));
  }, [facilities]);

  useEffect(() => {
    localStorage.setItem('lax360_admin_news', JSON.stringify(newsEvents));
  }, [newsEvents]);

  useEffect(() => {
    localStorage.setItem('lax360_admin_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  // Actions
  const handleUpdateAdmissionStatus = (id, newStatus) => {
    setAdmissions((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const handleAddCourse = (newCourse) => {
    setCourses((prev) => [newCourse, ...prev]);
  };

  const handleDeleteCourse = (id) => {
    if (window.confirm('Are you sure you want to remove this course?')) {
      setCourses((prev) => prev.filter((c) => c.id !== id));
    }
  };

  const handleToggleCourseStatus = (id) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === id
          ? {
              ...c,
              status: c.status === 'Admissions Open' ? 'Admissions Closed' : 'Admissions Open'
            }
          : c
      )
    );
  };

  const handleUpdateApplicantStatus = (id, status) => {
    setJobApplicants((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status } : app))
    );
  };

  // Events CRUD
  const handleAddEvent = (newEvent) => {
    setEvents((prev) => [newEvent, ...prev]);
  };

  const handleUpdateEvent = (updatedEvent) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === updatedEvent.id ? updatedEvent : e))
    );
  };

  const handleDeleteEvent = (id) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  // Gallery CRUD
  const handleAddGalleryItem = (newItem) => {
    setGallery((prev) => [newItem, ...prev]);
  };

  const handleUpdateGalleryItem = (updatedItem) => {
    setGallery((prev) =>
      prev.map((g) => (g.id === updatedItem.id ? updatedItem : g))
    );
  };

  const handleDeleteGalleryItem = (id) => {
    setGallery((prev) => prev.filter((g) => g.id !== id));
  };

  // Facilities CRUD
  const handleAddFacility = (newFacility) => {
    setFacilities((prev) => [newFacility, ...prev]);
  };

  const handleUpdateFacility = (updatedFacility) => {
    setFacilities((prev) =>
      prev.map((f) => (f.id === updatedFacility.id ? updatedFacility : f))
    );
  };

  const handleDeleteFacility = (id) => {
    setFacilities((prev) => prev.filter((f) => f.id !== id));
  };

  const handleAddNotice = (notice) => {
    setNewsEvents((prev) => [notice, ...prev]);
  };

  const handleDeleteNotice = (id) => {
    setNewsEvents((prev) => prev.filter((n) => n.id !== id));
  };

  const handleToggleFeaturedNotice = (id) => {
    setNewsEvents((prev) =>
      prev.map((n) => (n.id === id ? { ...n, featured: !n.featured } : n))
    );
  };

  const handleUpdateInquiryStatus = (id, status) => {
    setInquiries((prev) =>
      prev.map((inq) => (inq.id === id ? { ...inq, status } : inq))
    );
  };

  const handleResetData = () => {
    localStorage.removeItem('lax360_admin_admissions');
    localStorage.removeItem('lax360_admin_courses');
    localStorage.removeItem('lax360_admin_careers');
    localStorage.removeItem('lax360_admin_events');
    localStorage.removeItem('lax360_admin_gallery');
    localStorage.removeItem('lax360_admin_facilities');
    localStorage.removeItem('lax360_admin_dining');
    localStorage.removeItem('lax360_admin_catering');
    localStorage.removeItem('lax360_admin_news');
    localStorage.removeItem('lax360_admin_inquiries');
    setAdmissions(initialAdmissions);
    setCourses(initialCourses);
    setJobApplicants(initialJobApplicants);
    setEvents(upcomingEvents);
    setGallery(galleryItems);
    setFacilities(facilitiesData);
    setNewsEvents(initialNewsEvents);
    setInquiries(initialInquiries);
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
    { id: 'admissions', label: 'Admissions', icon: Users, badge: admissions.filter(a => a.status === 'Under Review').length },
    { id: 'courses', label: 'Courses Matrix', icon: GraduationCap, badge: courses.length },
    { id: 'careers', label: 'Careers & Faculty', icon: Briefcase, badge: jobApplicants.length },
    { id: 'events', label: 'Events', icon: Calendar, badge: events.length },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon, badge: gallery.length },
    { id: 'facilities', label: 'Facilities', icon: Building2, badge: facilities.length },
    { id: 'news', label: 'News & Notices', icon: Bell, badge: null },
    { id: 'inquiries', label: 'Inquiries Helpdesk', icon: Mail, badge: inquiries.filter(i => i.status === 'New').length },
    { id: 'settings', label: 'Portal Settings', icon: Settings, badge: null },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex text-slate-900 font-sans">
      {/* Mobile Sidebar Backdrop */}
      {mobileSidebarOpen && (
        <div 
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* Fixed Sidebar (Desktop & Mobile Slide-over) */}
      <aside 
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 h-screen bg-slate-950 text-white flex flex-col justify-between border-r border-slate-800 transition-transform duration-300 ease-in-out no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col flex-1 overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {/* Brand Header */}
          <div className="h-16 flex items-center justify-between px-5 border-b border-slate-800/80 shrink-0">
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <img
                src="/images/logo.png"
                alt="Lax360 Logo"
                className="h-8 w-auto object-contain filter drop-shadow"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-lg tracking-tight text-white leading-none">Lax360</span>
                  <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
                    Admin
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 font-medium">Governance Portal</p>
              </div>
            </Link>

            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="p-3 space-y-1 flex-1 overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Management Modules
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>

                  {item.badge !== null && (
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-300'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sidebar Footer: Back to Public Website */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-900/40 shrink-0">
          <Link
            to="/"
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold transition-colors group"
          >
            <div className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span>Back to Public Site</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          </Link>

          <div className="mt-3 flex items-center gap-2.5 px-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
              SA
            </div>
            <div className="text-[11px] leading-tight">
              <p className="font-bold text-white">Super Administrator</p>
              <p className="text-slate-500 text-[10px]">admin@lax360.edu</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area with lg:pl-72 to accommodate fixed sidebar */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-72">
        {/* Top Header Bar */}
        <header className="h-16 bg-white border-b border-slate-200/80 px-4 sm:px-8 flex items-center justify-between gap-4 sticky top-0 z-30 shadow-2xs">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Open Sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
              <Link to="/admin" className="font-semibold text-slate-700 hover:text-blue-600">Admin</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="font-bold text-slate-900 capitalize">{activeTab}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Quick Public Site Link */}
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Website</span>
            </Link>

            {/* Quick Status Pill */}
            <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>System Online</span>
            </div>

            {/* Admin Avatar */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center text-xs font-black shadow-xs">
                SA
              </div>
              <span className="hidden lg:block text-xs font-bold text-slate-800">Admin</span>
            </div>
          </div>
        </header>

        {/* Tab Content Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto max-w-7xl w-full mx-auto">
          {activeTab === 'dashboard' && (
            <AdminDashboard
              stats={stats}
              admissions={admissions}
              courses={courses}
              jobApplicants={jobApplicants}
              events={events}
              gallery={gallery}
              facilities={facilities}
              onNavigate={(tab) => setActiveTab(tab)}
            />
          )}

          {activeTab === 'admissions' && (
            <AdminAdmissions
              admissions={admissions}
              onUpdateStatus={handleUpdateAdmissionStatus}
            />
          )}

          {activeTab === 'courses' && (
            <AdminCourses
              courses={courses}
              onAddCourse={handleAddCourse}
              onDeleteCourse={handleDeleteCourse}
              onToggleStatus={handleToggleCourseStatus}
            />
          )}

          {activeTab === 'careers' && (
            <AdminCareers
              applicants={jobApplicants}
              onUpdateApplicantStatus={handleUpdateApplicantStatus}
            />
          )}

          {activeTab === 'events' && (
            <AdminEvents
              events={events}
              onAddEvent={handleAddEvent}
              onUpdateEvent={handleUpdateEvent}
              onDeleteEvent={handleDeleteEvent}
            />
          )}

          {activeTab === 'gallery' && (
            <AdminGallery
              galleryItems={gallery}
              onAddPhoto={handleAddGalleryItem}
              onUpdatePhoto={handleUpdateGalleryItem}
              onDeletePhoto={handleDeleteGalleryItem}
            />
          )}

          {activeTab === 'facilities' && (
            <AdminFacilities
              facilities={facilities}
              onAddFacility={handleAddFacility}
              onUpdateFacility={handleUpdateFacility}
              onDeleteFacility={handleDeleteFacility}
            />
          )}

          {activeTab === 'news' && (
            <AdminNewsEvents
              newsEvents={newsEvents}
              onAddNotice={handleAddNotice}
              onDeleteNotice={handleDeleteNotice}
              onToggleFeatured={handleToggleFeaturedNotice}
            />
          )}

          {activeTab === 'inquiries' && (
            <AdminInquiries
              inquiries={inquiries}
              onUpdateInquiryStatus={handleUpdateInquiryStatus}
            />
          )}

          {activeTab === 'settings' && (
            <AdminSettings onResetData={handleResetData} />
          )}
        </main>
      </div>
    </div>
  );
}

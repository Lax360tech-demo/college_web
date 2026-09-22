import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { jobOpenings, careerPerks, collegeInfo } from '../data/collegeData';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Send, 
  Search, 
  Filter, 
  UploadCloud, 
  FileText, 
  X, 
  ChevronRight, 
  Sparkles, 
  FlaskConical, 
  Globe2, 
  Building2, 
  HelpCircle,
  Calendar
} from 'lucide-react';

export default function Careers() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Application Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    dpdpConsent: false
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeError, setResumeError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef(null);
  const fileInputRef = useRef(null);

  // Filter categories
  const categories = ['All', 'Teaching & Faculty', 'Research & Labs', 'Administrative & Technical'];

  // Filter job openings
  const filteredJobs = jobOpenings.filter((job) => {
    const matchesCategory = activeCategory === 'All' || job.category === activeCategory;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle Apply Now button click from any job card
  const handleApplyClick = (jobTitle) => {
    setFormData((prev) => ({ ...prev, position: jobTitle }));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Resume File Selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setResumeError('File size exceeds 5MB limit. Please upload a smaller file.');
        setResumeFile(null);
        return;
      }
      // Validate file format
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
        setResumeError('Unsupported file type. Please upload a PDF, DOC, or DOCX file.');
        setResumeFile(null);
        return;
      }
      setResumeError('');
      setResumeFile(file);
    }
  };

  const removeResumeFile = () => {
    setResumeFile(null);
    setResumeError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resumeFile) {
      setResumeError('Please attach your CV or Resume to proceed.');
      return;
    }

    setSubmitting(true);

    // Simulate network submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      message: '',
      dpdpConsent: false
    });
    setResumeFile(null);
    setResumeError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Icon selector helper
  const getPerkIcon = (iconName) => {
    switch (iconName) {
      case 'FlaskConical': return <FlaskConical className="w-6 h-6 text-blue-600" />;
      case 'Award': return <Award className="w-6 h-6 text-amber-600" />;
      case 'Globe2': return <Globe2 className="w-6 h-6 text-emerald-600" />;
      default: return <Sparkles className="w-6 h-6 text-purple-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      
      {/* 1. Page Header Banner (Hero) */}
      <div className="bg-gradient-to-r from-navy-900 via-slate-900 to-navy-900 text-white pt-28 sm:pt-32 pb-12 sm:pb-14 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-3 inline-block">
            Recruitment & Faculty Openings 2026-27
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Shape Tomorrow's Innovators & Pioneers
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Join Lax360 College of Technology & Science — an autonomous NAAC 'A++' benchmark of academic rigor, advanced research, and transformative leadership.
          </p>

          {/* Quick Stat Highlights */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-amber-400 font-extrabold text-xl sm:text-2xl block">₹10 Lakhs</span>
              <span className="text-slate-300 text-xs font-medium">Seed Research Grants</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-amber-400 font-extrabold text-xl sm:text-2xl block">7th Pay</span>
              <span className="text-slate-300 text-xs font-medium">AICTE / UGC Scale</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-amber-400 font-extrabold text-xl sm:text-2xl block">45 Acres</span>
              <span className="text-slate-300 text-xs font-medium">Lush Green Campus</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-amber-400 font-extrabold text-xl sm:text-2xl block">100%</span>
              <span className="text-slate-300 text-xs font-medium">Conference Sponsorship</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Perks & Why Join Us Section */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Culture & Rewards"
            title="Why Build Your Career at Lax360?"
            subtitle="We empower our faculty, researchers, and technical staff with academic autonomy, generous research grants, and benchmark compensation."
            centered={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {careerPerks.map((perk, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {getPerkIcon(perk.icon)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {perk.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Job Openings Listing Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Open Opportunities"
            title="Current Academic & Administrative Openings"
            subtitle="Explore available positions across teaching, advanced research labs, corporate alliances, and campus operations."
            centered={true}
          />

          {/* Filter Tabs & Search Controls */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white shadow-blue-600/20'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by role, dept, skill..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

          {/* Active Results Summary */}
          <div className="mt-4 text-xs text-slate-500 flex items-center justify-between">
            <span>Showing {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''}</span>
            {searchQuery && (
              <span className="text-blue-600 font-medium">
                Filtered by "{searchQuery}"
              </span>
            )}
          </div>

          {/* Job Openings Grid */}
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100">
                        {job.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                        {job.type}
                      </span>
                    </div>

                    {/* Job Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-1">
                      {job.title}
                    </h3>

                    {/* Department */}
                    <p className="text-xs sm:text-sm font-semibold text-slate-600 mb-4 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{job.department}</span>
                    </p>

                    {/* Key Attributes Tags */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 py-3 border-y border-slate-100 text-xs text-slate-600 mb-4 bg-slate-50/70 p-3 rounded-xl">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span className="truncate">{job.location.split(',')[0]}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate">{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                        <Calendar className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                        <span className="truncate">Till {job.deadline.split(',')[0]}</span>
                      </div>
                    </div>

                    {/* Qualification Requirement */}
                    <div className="mb-3 text-xs text-slate-700 bg-amber-50/70 border border-amber-200/70 p-3 rounded-xl">
                      <span className="font-bold text-amber-900 block mb-1 flex items-center gap-1">
                        <GraduationCap className="w-3.5 h-3.5 text-amber-700" />
                        Required Qualification:
                      </span>
                      <p className="text-slate-700 leading-relaxed">
                        {job.qualification}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {job.description}
                    </p>
                  </div>

                  {/* Apply Action */}
                  <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                    <span className="text-[11px] text-slate-400">
                      Posted: {job.postedDate}
                    </span>
                    <button
                      onClick={() => handleApplyClick(job.title)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all"
                    >
                      <span>Apply Now</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 mt-6 p-8">
              <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No Openings Found</h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mt-1 mb-4">
                We couldn't find any job openings matching your current filter criteria. Try resetting your search or submit a general application below.
              </p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="px-4 py-2 text-xs font-bold rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. Application Form Section */}
      <section ref={formRef} id="apply-form" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 mb-2 inline-block">
              Submit Application
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Apply for an Open Position
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto mt-2">
              Fill in your contact information, specify the position you are applying for, attach your updated CV, and our recruitment team will reach out.
            </p>
          </div>

          <div className="p-6 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl relative overflow-hidden">
            
            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 animate-fade-in space-y-4">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900">Application Submitted Successfully!</h3>
                <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your application for <strong>"{formData.position || 'General Faculty Application'}"</strong> along with your CV (<em>{resumeFile ? resumeFile.name : 'Document'}</em>) has been received. Our HR selection committee will review your credentials and contact you shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Dr. Anand Sharma"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="anand.sharma@example.com"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-white"
                    />
                  </div>
                </div>

                {/* Phone & Position Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Position Applied For <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="position"
                      required
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-white"
                    >
                      <option value="">-- Select a Position --</option>
                      {jobOpenings.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                      <option value="General Faculty Application">Other / General Faculty Application</option>
                      <option value="General Technical/Admin Application">Other / Technical & Administrative</option>
                    </select>
                  </div>
                </div>

                {/* Resume Upload File Picker */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Resume / Curriculum Vitae (CV) <span className="text-red-500">*</span>
                  </label>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                    className="hidden"
                    id="resume-upload"
                  />

                  {resumeFile ? (
                    <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800 truncate max-w-xs sm:max-w-md">
                            {resumeFile.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            {(resumeFile.size / 1024).toFixed(1)} KB • Ready for upload
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeResumeFile}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                        title="Remove resume"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <label
                      htmlFor="resume-upload"
                      className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer bg-white hover:bg-blue-50/20 transition-all duration-200 text-center"
                    >
                      <UploadCloud className="w-10 h-10 text-blue-600 mb-2" />
                      <span className="text-sm font-bold text-slate-800 block">
                        Click to upload your Resume or CV
                      </span>
                      <span className="text-xs text-slate-500 mt-0.5">
                        Accepted formats: PDF, DOC, DOCX (Max size: 5 MB)
                      </span>
                    </label>
                  )}

                  {resumeError && (
                    <p className="text-xs text-red-600 font-semibold mt-1.5 flex items-center gap-1">
                      <span>•</span> {resumeError}
                    </p>
                  )}
                </div>

                {/* Message / Cover Note */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Cover Note / Research Interests <span className="text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly highlight your primary domain expertise, teaching philosophy, or published works..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-white"
                  />
                </div>

                {/* DPDP Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none group">
                    <input
                      type="checkbox"
                      name="dpdpConsent"
                      required
                      checked={formData.dpdpConsent || false}
                      onChange={(e) => setFormData((prev) => ({ ...prev, dpdpConsent: e.target.checked }))}
                      className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
                    />
                    <span className="text-xs text-slate-600 leading-relaxed group-hover:text-slate-800">
                      I agree to the processing of my personal data for the purpose described in the{' '}
                      <Link to="/privacy-notice" target="_blank" className="text-blue-600 underline font-medium hover:text-blue-700">
                        Privacy Notice
                      </Link>
                      . <span className="text-red-500">*</span>
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing Application...
                    </span>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-500 pt-1">
                  Apex Institute is an equal opportunity employer. All applicant data is treated with strict confidentiality.
                </p>

              </form>
            )}

          </div>

          {/* HR Recruitment Helpline Card */}
          <div className="mt-8 p-4 rounded-2xl bg-sand-100 border border-sand-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-stone-700">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-stone-900">Have questions regarding faculty hiring?</p>
                <p className="text-stone-600 text-xs">Reach out to our Directorate of Academic Human Resources.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 font-semibold text-xs sm:text-sm">
              <a href="mailto:careers@apexinstitute.edu.in" className="text-blue-700 hover:underline">
                careers@apexinstitute.edu.in
              </a>
              <span className="text-stone-400">•</span>
              <a href="tel:+914428904550" className="text-stone-800 hover:text-blue-700">
                +91 (044) 2890-4550
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

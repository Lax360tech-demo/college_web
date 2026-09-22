import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { coursesData, admissionsFAQ, collegeInfo } from '../data/collegeData';
import { 
  CheckCircle2, 
  FileText, 
  UserCheck, 
  GraduationCap, 
  Send, 
  Sparkles, 
  AlertCircle, 
  HelpCircle, 
  ChevronDown, 
  PhoneCall, 
  Calendar, 
  Clock,
  IndianRupee,
  ShieldCheck,
  X
} from 'lucide-react';

export default function Admissions() {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    phone: '',
    dob: '',
    course: 'B.Tech in Computer Science & Engineering',
    address: '',
    previousQualification: '',
    message: '',
    dpdpConsent: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate frontend instant submission response
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      studentName: '',
      email: '',
      phone: '',
      dob: '',
      course: 'B.Tech in Computer Science & Engineering',
      address: '',
      previousQualification: '',
      message: '',
      dpdpConsent: false
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-navy-900 via-slate-900 to-navy-900 text-white pt-28 sm:pt-32 pb-12 sm:pb-14 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-semibold uppercase tracking-wider mb-3 inline-block">
            Admissions Open 2026-27
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Begin Your Academic Journey at Apex
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Transparent merit-based admissions, generous academic scholarships, and dedicated counseling to help you discover your best pathway.
          </p>
        </div>
      </div>

      {/* 1. 4-Step Application Process */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Simple & Streamlined"
            title="4-Step Admission Journey"
            subtitle="Follow these simple sequential steps to register your candidature for the upcoming academic year."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group hover:border-blue-400 transition-colors">
              <span className="text-4xl font-black text-blue-100 group-hover:text-blue-200 transition-colors absolute top-4 right-4">
                01
              </span>
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-md shadow-blue-500/20">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Submit Online Form</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fill out the candidate registration form below with your academic scores and preferred branch.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group hover:border-blue-400 transition-colors">
              <span className="text-4xl font-black text-blue-100 group-hover:text-blue-200 transition-colors absolute top-4 right-4">
                02
              </span>
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center mb-4 shadow-md shadow-amber-500/20">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Document Verification</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our admissions committee verifies high school / undergraduate marksheets and eligibility criteria.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group hover:border-blue-400 transition-colors">
              <span className="text-4xl font-black text-blue-100 group-hover:text-blue-200 transition-colors absolute top-4 right-4">
                03
              </span>
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-md shadow-emerald-500/20">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Merit & Counseling</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seat allocation based on merit ranking, followed by an in-person or virtual counseling interview.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group hover:border-blue-400 transition-colors">
              <span className="text-4xl font-black text-blue-100 group-hover:text-blue-200 transition-colors absolute top-4 right-4">
                04
              </span>
              <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center mb-4 shadow-md shadow-purple-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Seat Enrollment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Confirm your admission, submit the initial semester fees, and join the orientation boot camp!
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Main Form & Eligibility Section */}
      <section className="py-20" id="apply-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-slate-200">
              <div className="border-b border-slate-100 pb-5 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Online Application Form</span>
                <h2 className="text-2xl font-black text-slate-900 mt-1">Student Admission Application 2026-27</h2>
                <p className="text-xs text-slate-500 mt-1">Please provide accurate personal and academic credentials.</p>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 animate-fade-in space-y-4">
                  <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-900">Application Submitted Successfully!</h3>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.studentName}</strong>! Your application for <strong>{formData.course}</strong> has been received with application reference ID <strong>#AITS-{Math.floor(100000 + Math.random() * 900000)}</strong>.
                  </p>
                  <p className="text-xs text-emerald-700">
                    Our admissions officer will contact you at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Student Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Student Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      required
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="e.g. Aravind Kumar"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-slate-50/50"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="aravind@example.com"
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Date of Birth & Course Select */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="dob"
                        required
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Program of Interest <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-slate-50/50"
                      >
                        {coursesData.map((c) => (
                          <option key={c.id} value={c.name}>
                            {c.name} ({c.level})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Residential Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street, City, State, Postal Code"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-slate-50/50"
                    />
                  </div>

                  {/* Previous Qualification */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Previous Qualification & Percentage/CGPA <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="previousQualification"
                      required
                      value={formData.previousQualification}
                      onChange={handleChange}
                      placeholder="e.g. 12th CBSE 92% OR B.Sc Computer Science 8.8 CGPA"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-slate-50/50"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message / Special Queries (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any questions regarding scholarships, hostel accommodation, or transportation..."
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-slate-50/50"
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
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <span>Processing Application...</span>
                      ) : (
                        <>
                          <span>Submit Application Now</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2">
                      Secure submission • No payment required at this initial registration stage.
                    </p>
                  </div>

                </form>
              )}
            </div>

            {/* Right Column: Eligibility, Fee Structure & Counseling Contacts (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Eligibility Guidelines Box */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md">
                <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  Eligibility Requirements
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                    <strong className="text-blue-950 block mb-0.5">B.Tech / Engineering (UG)</strong>
                    <span>10+2 with Physics, Mathematics, and Chemistry with at least 60% aggregate. Valid state counseling or JEE ranking.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100">
                    <strong className="text-amber-950 block mb-0.5">B.Sc & B.Com (UG)</strong>
                    <span>10+2 Higher Secondary in Science or Commerce stream with minimum 50% aggregate marks.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-100">
                    <strong className="text-purple-950 block mb-0.5">M.Tech / M.Sc / M.Com (PG)</strong>
                    <span>Relevant Bachelor's degree with at least 55% to 60% aggregate. Valid GATE score holders eligible for stipends.</span>
                  </div>
                </div>
              </div>

              {/* Scholarship & Fee Details Box */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md">
                <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <IndianRupee className="w-5 h-5 text-emerald-600" />
                  Fee Structure & Scholarships
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Tuition fees are structured transparently per academic year with installment options. Merit and sports scholarships are awarded every semester:
                </p>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>100% Tuition Waiver:</strong> Top 100 State Rank Holders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>50% Tuition Waiver:</strong> Above 95% in 12th Board Exams</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Sports Concession:</strong> National & State Level Medalists</span>
                  </li>
                </ul>
              </div>

              {/* Direct Admissions Hotline */}
              <div className="bg-gradient-to-br from-navy-900 to-slate-900 text-white p-6 rounded-3xl border border-slate-800 shadow-md">
                <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-2">
                  <PhoneCall className="w-4 h-4" /> Need Admission Assistance?
                </h4>
                <p className="text-xs text-slate-300 mb-3">
                  Our admissions counselors are available Monday through Saturday from 9:00 AM to 5:00 PM.
                </p>
                <div className="text-sm font-extrabold text-white">
                  {collegeInfo.admissionsPhone}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Email: {collegeInfo.admissionsEmail}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. FAQ Accordion */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Clear answers to common questions regarding seats, reservations, documents, and campus tours."
          />

          <div className="space-y-3">
            {admissionsFAQ.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

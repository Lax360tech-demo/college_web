import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { collegeInfo } from '../data/collegeData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  Globe2, 
  Sparkles,
  MessageSquareQuote 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    dpdpConsent: false
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
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
          <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-3 inline-block">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Connect With Our Campus Team
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Have questions regarding admissions, degree programs, campus visits, or corporate placements? We are here to assist you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Campus Location</h4>
              <p className="text-xs text-slate-800 font-semibold mt-1 leading-snug">
                {collegeInfo.address}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Call Us Directly</h4>
              <p className="text-xs text-slate-800 font-semibold mt-1">
                {collegeInfo.phone}
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Admissions: {collegeInfo.admissionsPhone.split('/')[0]}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Official Emails</h4>
              <p className="text-xs text-slate-800 font-semibold mt-1">
                {collegeInfo.email}
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {collegeInfo.admissionsEmail}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Office Working Hours</h4>
              <p className="text-xs text-slate-800 font-semibold mt-1 leading-snug">
                {collegeInfo.workingHours}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Grid: Form & Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-slate-200">
            <div className="border-b border-slate-100 pb-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Send an Enquiry</span>
              <h2 className="text-2xl font-black text-slate-900 mt-1">Write to Us</h2>
              <p className="text-xs text-slate-500 mt-1">Our administrative desk will reply to your query promptly.</p>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 animate-fade-in space-y-4">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900">Message Received Successfully!</h3>
                <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your enquiry regarding "<strong>{formData.subject}</strong>" has been forwarded to the concerned department.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-slate-50/50"
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
                      onChange={handleChange}
                      placeholder="priya@example.com"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Subject / Topic <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Admission Enquiry, Campus Visit, etc."
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Detailed Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your requirements or specific queries in detail..."
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

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <span>Sending Enquiry...</span>
                  ) : (
                    <>
                      <span>Submit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right: Map & Department Directory (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Google Map Section */}
            <div className="bg-white rounded-3xl p-4 shadow-xl border border-slate-200 overflow-hidden">
              <div className="flex items-center justify-between px-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-red-500" /> Campus Location Map
                </span>
                <span className="text-[11px] text-slate-500">Outer Ring Road Corridor</span>
              </div>
              <div className="h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-100 relative">
                <iframe
                  title="College Campus Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.893123891461!2d80.208479!3d12.978684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d8a87b5a5b5%3A0x1b4a53239a0fa0b!2sTechnology%20Park!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Department Directory Quick Reference */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-600" /> Department Desks
              </h3>
              
              <div className="text-xs space-y-2 text-slate-600">
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="font-semibold text-slate-800">Principal's Office</span>
                  <span className="text-blue-600 font-medium">ext. 101 / principal@apexinstitute.edu.in</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="font-semibold text-slate-800">Admissions Counseling</span>
                  <span className="text-blue-600 font-medium">ext. 202 / admissions@apexinstitute.edu.in</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="font-semibold text-slate-800">Placement & Careers</span>
                  <span className="text-blue-600 font-medium">ext. 303 / placements@apexinstitute.edu.in</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="font-semibold text-slate-800">Hostel & Student Welfare</span>
                  <span className="text-blue-600 font-medium">ext. 404 / hostel@apexinstitute.edu.in</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

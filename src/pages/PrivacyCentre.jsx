import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Eye, 
  Edit3, 
  Trash2, 
  UserX, 
  AlertTriangle, 
  CheckCircle2, 
  X, 
  Send, 
  ArrowRight,
  Clock,
  ExternalLink,
  Lock,
  Sliders,
  FileCheck
} from 'lucide-react';
import { initialDpdpRequests } from '../data/dpdpData';

export default function PrivacyCentre() {
  const [activeModal, setActiveModal] = useState(null); // 'view' | 'correct' | 'erasure' | 'withdraw' | 'grievance'
  const [submittedRequest, setSubmittedRequest] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    identifier: '',
    details: '',
    consentWithdrawOptions: {
      marketingEmails: true,
      eventSms: true,
      placementNewsletter: false
    }
  });

  const handleOpenModal = (type) => {
    setActiveModal(type);
    setSubmittedRequest(null);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setSubmittedRequest(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      identifier: '',
      details: '',
      consentWithdrawOptions: {
        marketingEmails: true,
        eventSms: true,
        placementNewsletter: false
      }
    });
  };

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const typeMap = {
      view: 'View My Data',
      correct: 'Correct My Data',
      erasure: 'Request Erasure',
      withdraw: 'Withdraw Consent',
      grievance: 'Privacy Grievance'
    };

    const requestId = `DPDP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const newRequest = {
      id: requestId,
      type: typeMap[activeModal] || 'Data Request',
      name: formData.name || 'Anonymous User',
      email: formData.email,
      phone: formData.phone || 'N/A',
      identifier: formData.identifier || 'Website User',
      details: activeModal === 'withdraw'
        ? `Consent preferences updated: Marketing (${formData.consentWithdrawOptions.marketingEmails ? 'Revoked' : 'Retained'}), Events (${formData.consentWithdrawOptions.eventSms ? 'Revoked' : 'Retained'})`
        : formData.details,
      date: new Date().toISOString().split('T')[0],
      status: 'Pending',
      resolutionNote: null
    };

    // Save to localStorage
    try {
      const existing = localStorage.getItem('lax360_dpdp_requests');
      const list = existing ? JSON.parse(existing) : initialDpdpRequests;
      localStorage.setItem('lax360_dpdp_requests', JSON.stringify([newRequest, ...list]));
    } catch (err) {
      console.error('Failed to save DPDP request to localStorage:', err);
    }

    setTimeout(() => {
      setSubmitting(false);
      setSubmittedRequest(newRequest);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white pt-28 sm:pt-32 pb-14 sm:pb-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider mb-3 inline-flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-blue-400" />
            <span>DPDP Act 2023 Self-Service Portal</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">
            Privacy Centre
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Manage your personal data and privacy requests.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
            <Link to="/privacy-notice" className="hover:text-blue-300 underline flex items-center gap-1">
              <span>View Statutory Privacy Notice</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
            <span>•</span>
            <button
              onClick={() => {
                if (window.openCookiePreferences) window.openCookiePreferences();
              }}
              className="hover:text-blue-300 underline"
            >
              Manage Cookie Preferences
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-6">
        
        {/* Intro Card */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h2 className="text-base font-bold text-slate-900">
              Data Principal Rights under Digital Personal Data Protection Act, 2023
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              As an applicant, student, alumnus, faculty member, or web visitor, you hold full legal rights to access, correct, delete, or withdraw consent regarding personal information handled by Lax360 College. Submit your request below for prompt resolution by our Data Protection Officer within statutory timelines.
            </p>
          </div>
        </div>

        {/* 5 Core Action Cards matching reference document */}
        <div className="space-y-4">
          
          {/* Card 1: View My Data */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  View My Data
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Request information about your data being processed by the college.
                </p>
              </div>
            </div>

            <button
              onClick={() => handleOpenModal('view')}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-blue-600 text-white shadow-xs transition-colors shrink-0"
            >
              [ Request ]
            </button>
          </div>

          {/* Card 2: Correct My Data */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <Edit3 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Correct My Data
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Request correction of inaccurate or incomplete data in our records.
                </p>
              </div>
            </div>

            <button
              onClick={() => handleOpenModal('correct')}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white shadow-xs transition-colors shrink-0"
            >
              [ Request ]
            </button>
          </div>

          {/* Card 3: Request Erasure */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-red-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Trash2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Request Erasure
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Request deletion of your data where applicable by law.
                </p>
              </div>
            </div>

            <button
              onClick={() => handleOpenModal('erasure')}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-red-600 text-white shadow-xs transition-colors shrink-0"
            >
              [ Request ]
            </button>
          </div>

          {/* Card 4: Withdraw Consent */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <UserX className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Withdraw Consent
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Withdraw consent where processing is based on consent.
                </p>
              </div>
            </div>

            <button
              onClick={() => handleOpenModal('withdraw')}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-purple-600 text-white shadow-xs transition-colors shrink-0"
            >
              [ Manage ]
            </button>
          </div>

          {/* Card 5: Privacy Grievance */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-rose-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Privacy Grievance
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Raise a privacy-related complaint with our Data Protection & Grievance Officer.
                </p>
              </div>
            </div>

            <button
              onClick={() => handleOpenModal('grievance')}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-rose-600 text-white shadow-xs transition-colors shrink-0"
            >
              [ Submit Request ]
            </button>
          </div>

        </div>

        {/* DPDP Statutory Guarantee Notice */}
        <div className="p-5 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-500 shrink-0" />
            <span>Statutory Timeline: Grievances and data principal requests are acknowledged within 24 hours and responded to within 30 days under the DPDP Act 2023.</span>
          </div>
          <Link to="/contact" className="font-bold text-blue-600 hover:underline shrink-0">
            Contact DPO
          </Link>
        </div>

      </div>

      {/* Interactive Request Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  {activeModal === 'view' && <Eye className="w-5 h-5" />}
                  {activeModal === 'correct' && <Edit3 className="w-5 h-5" />}
                  {activeModal === 'erasure' && <Trash2 className="w-5 h-5" />}
                  {activeModal === 'withdraw' && <UserX className="w-5 h-5" />}
                  {activeModal === 'grievance' && <AlertTriangle className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    {activeModal === 'view' && 'View My Data (Access Request)'}
                    {activeModal === 'correct' && 'Correct My Data (Rectification)'}
                    {activeModal === 'erasure' && 'Request Data Erasure'}
                    {activeModal === 'withdraw' && 'Manage & Withdraw Consent'}
                    {activeModal === 'grievance' && 'Lodge a Privacy Grievance'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Section {activeModal === 'view' ? '11' : activeModal === 'correct' || activeModal === 'erasure' ? '12' : activeModal === 'withdraw' ? '6' : '13'}, DPDP Act 2023
                  </p>
                </div>
              </div>

              <button
                onClick={handleCloseModal}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            {submittedRequest ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-extrabold text-slate-900">
                  Request Lodged Successfully!
                </h4>
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-1">
                  <p className="text-slate-500">Reference Tracking Number:</p>
                  <p className="font-mono font-black text-sm text-blue-600 tracking-wider">
                    {submittedRequest.id}
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your request has been forwarded to the Data Protection & Grievance Officer. A secure confirmation has been queued for <strong>{submittedRequest.email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitRequest} className="p-6 overflow-y-auto space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Registered Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. student@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Student / Staff / Applicant ID
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ADM-2026-001 or N/A"
                      value={formData.identifier}
                      onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                {/* Specific Options for Withdraw Consent */}
                {activeModal === 'withdraw' ? (
                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-bold text-slate-700">
                      Select Consents You Wish to Revoke:
                    </p>

                    <label className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer text-xs">
                      <input
                        type="checkbox"
                        checked={formData.consentWithdrawOptions.marketingEmails}
                        onChange={(e) => setFormData({
                          ...formData,
                          consentWithdrawOptions: {
                            ...formData.consentWithdrawOptions,
                            marketingEmails: e.target.checked
                          }
                        })}
                        className="mt-0.5 rounded text-blue-600 focus:ring-blue-500"
                      />
                      <div>
                        <span className="font-bold text-slate-900 block">Promotional & Outreach Emails</span>
                        <span className="text-slate-500">Unsubscribe from general admission marketing, campus newsletters, and course circulars.</span>
                      </div>
                    </label>

                    <label className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer text-xs">
                      <input
                        type="checkbox"
                        checked={formData.consentWithdrawOptions.eventSms}
                        onChange={(e) => setFormData({
                          ...formData,
                          consentWithdrawOptions: {
                            ...formData.consentWithdrawOptions,
                            eventSms: e.target.checked
                          }
                        })}
                        className="mt-0.5 rounded text-blue-600 focus:ring-blue-500"
                      />
                      <div>
                        <span className="font-bold text-slate-900 block">SMS & WhatsApp Alerts</span>
                        <span className="text-slate-500">Stop automated SMS invitations to campus hackathons, fests, and cultural announcements.</span>
                      </div>
                    </label>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {activeModal === 'view' && 'Specific Data Records Requested'}
                      {activeModal === 'correct' && 'Details of Inaccuracies and Correct Data'}
                      {activeModal === 'erasure' && 'Reason & Data Sets for Erasure'}
                      {activeModal === 'grievance' && 'Detailed Description of Privacy Grievance'}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder={
                        activeModal === 'view' 
                          ? 'Specify whether you require admissions dossier, marksheets summary, or recruitment history...'
                          : activeModal === 'correct'
                          ? 'Provide the incorrect entry (e.g. incorrect phone or address) and the corrected details...'
                          : activeModal === 'erasure'
                          ? 'State why this data is no longer necessary for your academic engagement...'
                          : 'Provide specifics of the privacy issue, date of occurrence, or concern...'
                      }
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                )}

                {/* Declaration Checkbox */}
                <label className="flex items-start gap-2 cursor-pointer text-[11px] text-slate-600 pt-1">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span>
                    I affirm that I am the Data Principal (or authorized legal guardian) submitting this request under the DPDP Act, 2023.
                  </span>
                </label>

                {/* Footer Buttons */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all flex items-center gap-1.5"
                  >
                    {submitting ? 'Submitting...' : 'Submit Request'}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

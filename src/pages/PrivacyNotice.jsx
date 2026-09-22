import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  UserCheck, 
  AlertCircle, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  ExternalLink,
  Sliders,
  CheckCircle2
} from 'lucide-react';
import { collegeInfo } from '../data/collegeData';

export default function PrivacyNotice() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white pt-28 sm:pt-32 pb-14 sm:pb-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider mb-3.5 inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Statutory Compliance • DPDP Act 2023</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Digital Personal Data Protection Notice
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Privacy Policy & Data Processing Notice issued pursuant to the Digital Personal Data Protection (DPDP) Act, 2023 for students, parents, faculty applicants, alumni, and website visitors.
          </p>
          <div className="mt-4 text-xs text-slate-400">
            <span>Effective Date: September 2026</span> • <span>Version 2.1 (Autonomous Academic Edition)</span>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-200/80 space-y-10">
          
          {/* Executive Summary & Quick Action Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                <Lock className="w-4 h-4 text-blue-600" />
                <span>Exercise Your Data Rights Online</span>
              </h3>
              <p className="text-xs text-slate-600">
                You can view, correct, erase your personal data, manage consents, or lodge a grievance directly at our self-service portal.
              </p>
            </div>
            <Link
              to="/privacy-centre"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all shrink-0"
            >
              <span>Visit Privacy Centre</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Section 1: Introduction & Data Fiduciary */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              1. Identity of the Data Fiduciary
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>Lax360 College of Technology & Science</strong> (hereinafter referred to as the <em>"Institution"</em>, <em>"College"</em>, <em>"we"</em>, or <em>"us"</em>) functions as the <strong>Data Fiduciary</strong> within the meaning of the Digital Personal Data Protection Act, 2023 (DPDP Act). We determine the purpose and means of processing personal data collected through our official portal (<span className="text-blue-600 font-mono">localhost:3000</span> / official domain), student admission gateways, campus intranets, and on-campus facilities.
            </p>
          </section>

          {/* Section 2: Categories of Personal Data Collected */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              2. Categories of Personal Data We Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">A. Prospective Students & Applicants</h4>
                <p className="text-slate-600 leading-relaxed">
                  Full name, date of birth, contact details (email, phone, residential address), qualifying examination scores (10+2 / Diploma / Degree marks), merit certificates, category/quota verification documents, and parent/guardian contact details.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">B. Faculty & Staff Job Applicants</h4>
                <p className="text-slate-600 leading-relaxed">
                  Curriculum Vitae (CV), research publications, educational degrees, previous employment records, reference checks, and interview performance assessments.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">C. General Inquiries & Event Attendees</h4>
                <p className="text-slate-600 leading-relaxed">
                  Name, phone number, email address, institutional affiliation, symposium registration specifics, and inquiry message contents.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">D. Automated Digital Identifiers & Cookies</h4>
                <p className="text-slate-600 leading-relaxed">
                  IP addresses, browser signatures, access timestamps, visited pages, and cookie preferences stored as detailed in our Cookie Consent framework.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Purpose & Lawful Basis of Processing */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              3. Purpose & Lawful Grounds for Processing
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              In accordance with Section 4 and Section 6 of the DPDP Act 2023, personal data is processed solely for lawful purposes on the following bases:
            </p>
            <ul className="space-y-2 text-xs text-slate-600 list-disc list-inside leading-relaxed">
              <li><strong>Explicit & Informed Consent:</strong> Provided when you check the consent checkbox on admission applications, career submissions, event sign-ups, or contact forms.</li>
              <li><strong>Certain Legitimate Uses (Section 7):</strong> Fulfilling statutory requirements prescribed by the All India Council for Technical Education (AICTE), State Higher Education Councils, university affiliations, and mandatory audit disclosures.</li>
              <li><strong>Academic Administration:</strong> Enrollment verification, semester examinations, grade publication, and issuance of government-recognized degree certificates.</li>
              <li><strong>Campus Safety & Security:</strong> Maintaining emergency communications, medical infirmary logs, and campus CCTV surveillance.</li>
            </ul>
          </section>

          {/* Section 4: Data Principal Rights under DPDP Act */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              4. Rights of Data Principals (Your Rights)
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              As a Data Principal under Chapter III of the DPDP Act 2023, you are entitled to the following rights:
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 text-sm block">Right to Access Information (Section 11)</strong>
                  <span className="text-slate-600">The right to obtain a summary of personal data being processed, processing activities undertaken, and identities of any third parties with whom data has been shared.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 text-sm block">Right to Correction & Updating (Section 12)</strong>
                  <span className="text-slate-600">The right to request the correction of inaccurate or misleading data, and completion of incomplete personal information.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 text-sm block">Right to Erasure (Section 12)</strong>
                  <span className="text-slate-600">The right to request deletion of personal data when it is no longer necessary for the purpose for which it was collected, subject to statutory retention obligations under higher education laws.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 text-sm block">Right to Withdraw Consent (Section 6)</strong>
                  <span className="text-slate-600">The right to withdraw previously granted consent at any time as easily as giving consent. Withdrawal does not affect the legality of processing prior to revocation.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 text-sm block">Right to Grievance Redressal (Section 13)</strong>
                  <span className="text-slate-600">The right to have readily available grievance redressal mechanisms with our designated Data Protection Officer.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Data Protection & Grievance Redressal Officer */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              5. Data Protection Officer (DPO) Contact Details
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              If you wish to submit a formal inquiry, exercise your rights, or report a data privacy concern, you may contact our designated officer:
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <UserCheck className="w-4 h-4 text-blue-600" />
                <span>Dr. S. Ramanathan — Data Protection & Privacy Grievance Officer</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600 text-xs">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Email: <a href="mailto:grievance@lax360.edu.in" className="text-blue-600 font-semibold hover:underline">grievance@lax360.edu.in</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Helpline: +91 (044) 2890-4510</span>
                </div>
                <div className="flex items-start gap-2 sm:col-span-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Office: Compliance Wing, Academic Administrative Block, {collegeInfo.address}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Data Retention & Security Measures */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              6. Data Retention & Technical Safeguards
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We implement industry-standard encryption (TLS 1.3 in transit and AES-256 at rest), role-based access control (RBAC), and regular vulnerability audits. Personal data is retained only for the period necessary to fulfill educational, accreditation, and legal requirements, after which it is securely pseudonymized or erased.
            </p>
          </section>

          {/* Footer Quick Links */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <Link to="/privacy-centre" className="font-bold text-blue-600 hover:underline">
                Access Privacy Centre →
              </Link>
              <button
                onClick={() => {
                  if (window.openCookiePreferences) window.openCookiePreferences();
                }}
                className="font-bold text-slate-600 hover:text-slate-900 underline"
              >
                Change Cookie Settings
              </button>
            </div>

            <Link to="/" className="text-slate-500 hover:text-slate-800">
              Return to Homepage
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

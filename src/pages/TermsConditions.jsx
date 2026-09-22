import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ShieldCheck, 
  AlertCircle, 
  ExternalLink,
  GraduationCap,
  Scale
} from 'lucide-react';
import { collegeInfo } from '../data/collegeData';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white pt-28 sm:pt-32 pb-14 sm:pb-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider mb-3.5 inline-flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5 text-blue-400" />
            <span>Institutional Governance</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Terms & Conditions of Portal Use
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Regulations governing access to the digital campus portal, online admissions system, career applications, and informational content of Lax360 College of Technology & Science.
          </p>
        </div>
      </div>

      {/* Main Terms Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-200/80 space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or submitting forms through the official website and admission management portals of Lax360 College of Technology & Science, you agree to comply with and be bound by these Terms & Conditions, our <Link to="/privacy-notice" className="text-blue-600 font-semibold hover:underline">Privacy Notice</Link>, and applicable Indian statutes including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
              2. Accuracy of Admission Information & Applications
            </h2>
            <p>
              Applicants submitting forms for undergraduate, postgraduate, or research programs must verify that all submitted academic transcripts, personal particulars, identity documentation, and caste/quota certificates are authentic. Furnishing false or misleading information will result in immediate disqualification and cancellation of admission without refund.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
              3. Intellectual Property Rights
            </h2>
            <p>
              All institutional logos, course syllabi, lab modules, research publications, photographs, architectural layouts, and promotional graphics displayed on this website are the intellectual property of Lax360 College. Unauthorized reproduction, scraping, or commercial exploitation is strictly prohibited without prior written consent.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
              4. Code of Conduct & Acceptable Use
            </h2>
            <p>
              Users shall not use this website to post defamatory, obscene, or fraudulent remarks; inject malicious software or denial-of-service scripts; or attempt unauthorized entry into the administrative systems.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
              5. Limitation of Liability
            </h2>
            <p>
              While the College endeavors to maintain uninterrupted and accurate web services, course schedules, fee revisions, and counseling cut-offs may change pursuant to university guidelines and statutory notices.
            </p>
          </section>

          <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs">
            <Link to="/privacy-notice" className="text-blue-600 font-bold hover:underline">
              ← Read Privacy Notice
            </Link>
            <Link to="/" className="text-slate-500 hover:text-slate-800">
              Back to Home
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

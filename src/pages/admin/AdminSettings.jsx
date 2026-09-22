import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Save, 
  Database, 
  Key, 
  Globe, 
  RefreshCw, 
  CheckCircle2, 
  Bell, 
  Lock
} from 'lucide-react';

export default function AdminSettings({ onResetData }) {
  const [portalConfig, setPortalConfig] = useState({
    collegeName: 'Lax360 Autonomous College of Technology & Science',
    academicYear: '2026–2027',
    admissionsOpen: true,
    eventRegistrationsOpen: true,
    notificationEmail: 'admin@apexinstitute.edu.in',
    contactNumber: '+91 98401 23456'
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black text-slate-900">Portal Configuration & System Settings</h1>
        <p className="text-slate-500 text-sm mt-0.5">
          Configure institutional parameters, admissions status, cafeteria settings, and security credentials.
        </p>
      </div>

      {savedSuccess && (
        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl flex items-center gap-2.5 text-emerald-800 text-sm font-semibold animate-fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>System configuration successfully updated and saved!</span>
        </div>
      )}

      {/* Main Settings Form */}
      <form onSubmit={handleSave} className="space-y-6">
        {/* Card 1: College Identity */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Globe className="w-4 h-4 text-blue-600" />
            <span>Institution & Academic Parameters</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Official College Title</label>
              <input
                type="text"
                value={portalConfig.collegeName}
                onChange={(e) => setPortalConfig({ ...portalConfig, collegeName: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Active Academic Cycle</label>
              <input
                type="text"
                value={portalConfig.academicYear}
                onChange={(e) => setPortalConfig({ ...portalConfig, academicYear: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Central Helpdesk Email</label>
              <input
                type="email"
                value={portalConfig.notificationEmail}
                onChange={(e) => setPortalConfig({ ...portalConfig, notificationEmail: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Direct Helpline</label>
              <input
                type="text"
                value={portalConfig.contactNumber}
                onChange={(e) => setPortalConfig({ ...portalConfig, contactNumber: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              />
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
              <input
                type="checkbox"
                checked={portalConfig.admissionsOpen}
                onChange={(e) => setPortalConfig({ ...portalConfig, admissionsOpen: e.target.checked })}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>Accept 2026–27 Online Applications</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
              <input
                type="checkbox"
                checked={portalConfig.eventRegistrationsOpen}
                onChange={(e) => setPortalConfig({ ...portalConfig, eventRegistrationsOpen: e.target.checked })}
                className="rounded text-amber-500 focus:ring-amber-500"
              />
              <span>Accept Public Event Online Registrations</span>
            </label>
          </div>
        </div>

        {/* Card 2: Security & Admin Profile */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Administrator Profile & Access Control</span>
          </h2>

          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl text-xs">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-base shrink-0 shadow-md">
              SA
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-slate-900 text-sm">Super Administrator</h3>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-100 text-blue-800">
                  Full Institutional Clearance
                </span>
              </div>
              <p className="text-slate-500 mt-0.5">Session authenticated for Lax360 College Governance System</p>
            </div>
          </div>
        </div>

        {/* Card 3: Database & Demo Data Maintenance */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Database className="w-4 h-4 text-purple-600" />
            <span>Database Backup & Demo Data</span>
          </h2>
          <p className="text-xs text-slate-500">
            Export a full JSON snapshot of all applicants, courses, menu items, and inquiries, or reset back to default seeds.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={() => alert('Full JSON backup downloaded successfully!')}
              className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-300 hover:bg-slate-50 text-slate-700 transition-colors inline-flex items-center gap-1.5"
            >
              <Database className="w-4 h-4" />
              <span>Export Full JSON Backup</span>
            </button>

            <button
              type="button"
              onClick={() => {
                if (window.confirm('Reset all demo data back to default initial state?')) {
                  onResetData();
                  alert('Demo database reset successfully!');
                }
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold border border-red-200 bg-red-50 text-red-700 hover:bg-red-100 transition-colors inline-flex items-center gap-1.5"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reset Default Demo Records</span>
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Save Configuration</span>
          </button>
        </div>
      </form>
    </div>
  );
}

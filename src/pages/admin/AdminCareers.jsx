import React, { useState } from 'react';
import { 
  Briefcase, 
  Search, 
  UserCheck, 
  UserX, 
  Clock, 
  FileText, 
  Mail, 
  Phone, 
  Eye, 
  X,
  Award,
  CheckCircle
} from 'lucide-react';

export default function AdminCareers({ applicants, onUpdateApplicantStatus }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [activeModalApp, setActiveModalApp] = useState(null);

  const statuses = ['All', 'Under Review', 'Shortlisted', 'Interview Scheduled', 'Hired', 'Rejected'];

  const filtered = applicants.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || app.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Careers & Faculty Recruitment</h1>
          <p className="text-slate-500 text-sm mt-0.5">
            Review professor, lecturer, and administrative staff recruitment submissions.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-xl bg-purple-50 text-purple-700 text-xs font-bold border border-purple-200">
            {applicants.length} Total Applicants
          </span>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search applicants by name, role, department..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 text-xs">
          {statuses.map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStatus(st)}
              className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all ${
                selectedStatus === st
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-xs font-semibold text-slate-500 uppercase border-b border-slate-100">
              <tr>
                <th className="py-3.5 px-4">Applicant ID</th>
                <th className="py-3.5 px-4">Candidate</th>
                <th className="py-3.5 px-4">Applied Position</th>
                <th className="py-3.5 px-4">Experience</th>
                <th className="py-3.5 px-4">Applied Date</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-xs font-bold text-purple-700">
                    {item.id}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-slate-900">{item.name}</div>
                    <div className="text-xs text-slate-400">{item.email}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-medium text-slate-800 text-xs">{item.position}</div>
                    <div className="text-[11px] text-slate-400">{item.department}</div>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-700 text-xs">
                    {item.experience}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-500">
                    {item.appliedDate}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${
                      item.status === 'Shortlisted'
                        ? 'bg-purple-50 text-purple-700 border border-purple-200'
                        : item.status === 'Interview Scheduled'
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : item.status === 'Hired'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : item.status === 'Rejected'
                        ? 'bg-red-50 text-red-700 border border-red-200'
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="inline-flex items-center gap-1.5">
                      <button
                        onClick={() => setActiveModalApp(item)}
                        className="p-1.5 rounded-lg text-slate-600 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                        title="View Candidate Dossier"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onUpdateApplicantStatus(item.id, 'Shortlisted')}
                        className="p-1.5 rounded-lg text-purple-600 hover:bg-purple-50 transition-colors"
                        title="Shortlist Candidate"
                      >
                        <Award className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onUpdateApplicantStatus(item.id, 'Interview Scheduled')}
                        className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                        title="Schedule Interview"
                      >
                        <Clock className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onUpdateApplicantStatus(item.id, 'Hired')}
                        className="p-1.5 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
                        title="Mark as Hired"
                      >
                        <UserCheck className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Candidate Modal */}
      {activeModalApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setActiveModalApp(null)}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-lg">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg">{activeModalApp.name}</h3>
                <p className="text-xs font-mono text-purple-600">{activeModalApp.id}</p>
              </div>
            </div>

            <div className="space-y-3 bg-slate-50 p-4 rounded-2xl text-xs text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-400">Position:</span>
                <span className="font-bold text-slate-900 text-right">{activeModalApp.position}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Department:</span>
                <span className="font-semibold text-slate-800">{activeModalApp.department}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Experience:</span>
                <span className="font-semibold text-slate-800">{activeModalApp.experience}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Phone:</span>
                <span className="font-semibold text-slate-800">{activeModalApp.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Email:</span>
                <span className="font-semibold text-slate-800">{activeModalApp.email}</span>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <span className="text-slate-400 block mb-1">Academic / Research Notes:</span>
                <p className="text-slate-800 italic bg-white p-2.5 rounded-xl border border-slate-200/80 leading-relaxed">
                  "{activeModalApp.notes}"
                </p>
              </div>
            </div>

            <div className="mt-5 flex gap-2">
              <button
                onClick={() => {
                  onUpdateApplicantStatus(activeModalApp.id, 'Shortlisted');
                  setActiveModalApp({ ...activeModalApp, status: 'Shortlisted' });
                }}
                className="flex-1 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-colors"
              >
                Shortlist Candidate
              </button>
              <button
                onClick={() => {
                  onUpdateApplicantStatus(activeModalApp.id, 'Interview Scheduled');
                  setActiveModalApp({ ...activeModalApp, status: 'Interview Scheduled' });
                }}
                className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors"
              >
                Schedule Interview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

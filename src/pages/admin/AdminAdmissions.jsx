import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Check, 
  X, 
  Clock, 
  FileText, 
  Download, 
  Eye, 
  CheckCircle2, 
  UserCheck, 
  UserX,
  Phone,
  Mail,
  GraduationCap
} from 'lucide-react';

export default function AdminAdmissions({ admissions, onUpdateStatus }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [activeModalApp, setActiveModalApp] = useState(null);

  const filtered = admissions.filter((item) => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const statuses = ['All', 'Under Review', 'Approved', 'Interview Scheduled', 'Waitlisted', 'Rejected'];

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Student Admissions Management</h1>
          <p className="text-slate-500 text-sm mt-0.5">
            Review, evaluate, and update incoming 2026–27 college application dossiers.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert('Exporting Admissions dataset as CSV...')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 shadow-2xs transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Toolbar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by student name, application #, or course..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
          />
        </div>

        {/* Status Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 text-xs">
          {statuses.map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStatus(st)}
              className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all ${
                selectedStatus === st
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Admissions Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-xs font-semibold text-slate-500 uppercase border-b border-slate-100">
              <tr>
                <th className="py-3.5 px-4">Application ID</th>
                <th className="py-3.5 px-4">Student</th>
                <th className="py-3.5 px-4">Selected Program</th>
                <th className="py-3.5 px-4">Merit Score</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-12 text-center text-slate-400">
                    No admission applications found matching your filters.
                  </td>
                </tr>
              ) : (
                filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-mono text-xs font-bold text-blue-700">
                      {item.id}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-slate-900">{item.name}</div>
                      <div className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                        <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {item.email}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-xs font-medium text-slate-700 max-w-xs">
                      {item.course}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      {item.marks}
                    </td>
                    <td className="py-3.5 px-4 text-xs text-slate-500">
                      <span className="bg-slate-100 px-2 py-0.5 rounded-md font-medium text-slate-700">
                        {item.quota}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'Approved'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : item.status === 'Interview Scheduled'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : item.status === 'Waitlisted'
                          ? 'bg-purple-50 text-purple-700 border border-purple-200'
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
                          className="p-1.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          title="View Full Application"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onUpdateStatus(item.id, 'Approved')}
                          className="p-1.5 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
                          title="Approve Admission"
                        >
                          <UserCheck className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onUpdateStatus(item.id, 'Waitlisted')}
                          className="p-1.5 rounded-lg text-purple-600 hover:bg-purple-50 transition-colors"
                          title="Waitlist Applicant"
                        >
                          <Clock className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onUpdateStatus(item.id, 'Rejected')}
                          className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 transition-colors"
                          title="Reject Application"
                        >
                          <UserX className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Detail View */}
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
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg">{activeModalApp.name}</h3>
                <p className="text-xs font-mono text-blue-600">{activeModalApp.id}</p>
              </div>
            </div>

            <div className="space-y-3 bg-slate-50 p-4 rounded-2xl text-xs text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-400">Chosen Degree:</span>
                <span className="font-bold text-right text-slate-900">{activeModalApp.course}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Merit Percentage / CGPA:</span>
                <span className="font-bold text-emerald-600">{activeModalApp.marks}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Quota Category:</span>
                <span className="font-semibold text-slate-800">{activeModalApp.quota}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Application Date:</span>
                <span className="font-semibold text-slate-800">{activeModalApp.appliedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Contact Phone:</span>
                <span className="font-semibold text-slate-800">{activeModalApp.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Email Address:</span>
                <span className="font-semibold text-slate-800">{activeModalApp.email}</span>
              </div>
            </div>

            {/* Quick Status Buttons inside Modal */}
            <div className="mt-5 flex gap-2">
              <button
                onClick={() => {
                  onUpdateStatus(activeModalApp.id, 'Approved');
                  setActiveModalApp({ ...activeModalApp, status: 'Approved' });
                }}
                className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
              >
                Approve Student
              </button>
              <button
                onClick={() => {
                  onUpdateStatus(activeModalApp.id, 'Interview Scheduled');
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

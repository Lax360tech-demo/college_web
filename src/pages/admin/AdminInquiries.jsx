import React, { useState } from 'react';
import { 
  Mail, 
  Search, 
  CheckCircle2, 
  Clock, 
  Phone, 
  User, 
  MessageSquare, 
  Eye, 
  X,
  Send,
  Shield,
  ShieldCheck,
  AlertCircle,
  FileText,
  UserCheck,
  Filter,
  Check,
  AlertTriangle
} from 'lucide-react';
import { initialDpdpRequests } from '../../data/dpdpData';

export default function AdminInquiries({ inquiries, onUpdateInquiryStatus }) {
  // Main view tab: 'inquiries' or 'dpdp'
  const [activeMainTab, setActiveMainTab] = useState('inquiries');

  // General Inquiries state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [activeInquiry, setActiveInquiry] = useState(null);
  const [replyText, setReplyText] = useState('');

  const statuses = ['All', 'New', 'Responded', 'Resolved'];

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch =
      inq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || inq.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleSendReply = (e) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    onUpdateInquiryStatus(activeInquiry.id, 'Responded');
    alert(`Response sent to ${activeInquiry.email}!`);
    setActiveInquiry(null);
    setReplyText('');
  };

  // DPDP Requests State
  const [dpdpRequests, setDpdpRequests] = useState(() => {
    try {
      const saved = localStorage.getItem('lax360_dpdp_requests');
      return saved ? JSON.parse(saved) : initialDpdpRequests;
    } catch {
      return initialDpdpRequests;
    }
  });
  const [dpdpSearch, setDpdpSearch] = useState('');
  const [dpdpStatusFilter, setDpdpStatusFilter] = useState('All');
  const [dpdpTypeFilter, setDpdpTypeFilter] = useState('All');
  const [activeDpdpRequest, setActiveDpdpRequest] = useState(null);
  const [dpoNote, setDpoNote] = useState('');
  const [targetStatus, setTargetStatus] = useState('');

  const dpdpTypes = [
    'All',
    'View My Data',
    'Correct My Data',
    'Request Erasure',
    'Withdraw Consent',
    'Privacy Grievance'
  ];

  const dpdpStatuses = ['All', 'Pending', 'Under Review', 'Resolved', 'Rejected'];

  const filteredDpdp = dpdpRequests.filter((req) => {
    const term = dpdpSearch.toLowerCase();
    const matchesSearch =
      req.id.toLowerCase().includes(term) ||
      req.name.toLowerCase().includes(term) ||
      req.email.toLowerCase().includes(term) ||
      (req.details && req.details.toLowerCase().includes(term));
    const matchesStatus = dpdpStatusFilter === 'All' || req.status === dpdpStatusFilter;
    const matchesType = dpdpTypeFilter === 'All' || req.type === dpdpTypeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  const handleOpenDpdpReview = (item) => {
    setActiveDpdpRequest(item);
    setTargetStatus(item.status);
    setDpoNote(item.resolutionNote || '');
  };

  const handleSaveDpdpReview = (e) => {
    e.preventDefault();
    if (!activeDpdpRequest) return;

    const updated = dpdpRequests.map((r) =>
      r.id === activeDpdpRequest.id
        ? { ...r, status: targetStatus, resolutionNote: dpoNote }
        : r
    );
    setDpdpRequests(updated);
    try {
      localStorage.setItem('lax360_dpdp_requests', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
    setActiveDpdpRequest(null);
  };

  const handleQuickResolveDpdp = (id) => {
    const updated = dpdpRequests.map((r) =>
      r.id === id ? { ...r, status: 'Resolved', resolutionNote: 'Request verified and resolved by DPO.' } : r
    );
    setDpdpRequests(updated);
    try {
      localStorage.setItem('lax360_dpdp_requests', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
  };

  const pendingDpdpCount = dpdpRequests.filter((r) => r.status === 'Pending').length;

  const getTypeBadgeColor = (type) => {
    switch (type) {
      case 'View My Data':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Correct My Data':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Request Erasure':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'Withdraw Consent':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Privacy Grievance':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'Resolved':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Under Review':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Rejected':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-amber-50 text-amber-700 border-amber-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Main Navigation Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">
            {activeMainTab === 'inquiries' ? 'Campus Inquiries & Helpdesk' : 'DPDP Privacy Governance & Requests'}
          </h1>
          <p className="text-slate-500 text-sm mt-0.5">
            {activeMainTab === 'inquiries'
              ? 'Manage inquiries submitted via public Contact Us portal and admission desk.'
              : 'Review and process Data Principal requests submitted under the Digital Personal Data Protection Act, 2023.'}
          </p>
        </div>

        {/* View Switcher Pills */}
        <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl gap-1 shrink-0 border border-slate-200">
          <button
            onClick={() => setActiveMainTab('inquiries')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeMainTab === 'inquiries'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>General Inquiries</span>
            <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] bg-blue-50 text-blue-700">
              {inquiries.filter((i) => i.status === 'New').length}
            </span>
          </button>

          <button
            onClick={() => setActiveMainTab('dpdp')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeMainTab === 'dpdp'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>DPDP Requests</span>
            {pendingDpdpCount > 0 && (
              <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] bg-amber-500 text-white font-bold animate-pulse">
                {pendingDpdpCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: GENERAL INQUIRIES VIEW */}
      {/* ========================================================================= */}
      {activeMainTab === 'inquiries' && (
        <div className="space-y-6 animate-fade-in">
          {/* Filter and Search */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search inquiries by sender, topic, email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              />
            </div>

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

          {/* Inquiries Table */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-xs font-semibold text-slate-500 uppercase border-b border-slate-100">
                  <tr>
                    <th className="py-3.5 px-4">Ticket ID</th>
                    <th className="py-3.5 px-4">Sender</th>
                    <th className="py-3.5 px-4">Subject / Topic</th>
                    <th className="py-3.5 px-4">Date</th>
                    <th className="py-3.5 px-4">Priority</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredInquiries.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-mono text-xs font-bold text-blue-700">
                        {item.id}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-slate-900">{item.name}</div>
                        <div className="text-xs text-slate-400">{item.phone}</div>
                      </td>
                      <td className="py-3.5 px-4 max-w-sm">
                        <p className="text-xs font-medium text-slate-800 line-clamp-1">{item.subject}</p>
                        <span className="text-[11px] text-slate-400">{item.email}</span>
                      </td>
                      <td className="py-3.5 px-4 text-xs text-slate-500">
                        {item.date}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                          item.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {item.priority}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${
                          item.status === 'Resolved'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : item.status === 'Responded'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <div className="inline-flex items-center gap-1.5">
                          <button
                            onClick={() => setActiveInquiry(item)}
                            className="p-1.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                            title="View & Reply"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => onUpdateInquiryStatus(item.id, 'Resolved')}
                            className="p-1.5 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
                            title="Mark as Resolved"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Inquiry Detail & Reply Modal */}
          {activeInquiry && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
              <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative">
                <button
                  onClick={() => setActiveInquiry(null)}
                  className="absolute right-4 top-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg">{activeInquiry.name}</h3>
                    <p className="text-xs font-mono text-blue-600">{activeInquiry.id} • {activeInquiry.date}</p>
                  </div>
                </div>

                <div className="space-y-2.5 bg-slate-50 p-4 rounded-2xl text-xs text-slate-700 mb-4">
                  <div>
                    <span className="text-slate-400 block mb-0.5">Email & Phone:</span>
                    <span className="font-semibold text-slate-800">{activeInquiry.email} | {activeInquiry.phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Subject & Query:</span>
                    <p className="font-bold text-slate-900 bg-white p-3 rounded-xl border border-slate-200 text-sm leading-relaxed">
                      {activeInquiry.subject}
                    </p>
                  </div>
                </div>

                {/* Quick Reply Form */}
                <form onSubmit={handleSendReply} className="space-y-3">
                  <label className="text-xs font-bold text-slate-700 block">Send Official Email Response</label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Type your official counseling or admissions response..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    className="w-full p-3 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        onUpdateInquiryStatus(activeInquiry.id, 'Resolved');
                        setActiveInquiry(null);
                      }}
                      className="flex-1 py-2 rounded-xl border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50 text-xs transition-colors"
                    >
                      Mark Resolved
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Response</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 2: DPDP PRIVACY REQUESTS & GRIEVANCES VIEW */}
      {/* ========================================================================= */}
      {activeMainTab === 'dpdp' && (
        <div className="space-y-6 animate-fade-in">
          {/* Top Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Total Requests</span>
              <span className="text-2xl font-black text-slate-900 mt-1 block">{dpdpRequests.length}</span>
              <span className="text-[11px] text-slate-500">Under DPDP Act 2023</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-amber-200 bg-amber-50/20 shadow-xs">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">Pending Action</span>
              <span className="text-2xl font-black text-amber-700 mt-1 block">
                {dpdpRequests.filter((r) => r.status === 'Pending').length}
              </span>
              <span className="text-[11px] text-amber-600">Requires DPO review</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-blue-200 bg-blue-50/20 shadow-xs">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">Under Review</span>
              <span className="text-2xl font-black text-blue-700 mt-1 block">
                {dpdpRequests.filter((r) => r.status === 'Under Review').length}
              </span>
              <span className="text-[11px] text-blue-600">Verification in progress</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-emerald-200 bg-emerald-50/20 shadow-xs">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Resolved</span>
              <span className="text-2xl font-black text-emerald-700 mt-1 block">
                {dpdpRequests.filter((r) => r.status === 'Resolved').length}
              </span>
              <span className="text-[11px] text-emerald-600">Compliance confirmed</span>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by ID, name, email, or details..."
                  value={dpdpSearch}
                  onChange={(e) => setDpdpSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 text-xs">
                {dpdpStatuses.map((st) => (
                  <button
                    key={st}
                    onClick={() => setDpdpStatusFilter(st)}
                    className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all ${
                      dpdpStatusFilter === st
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Request Type Sub-filter */}
            <div className="pt-2 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              <span className="text-slate-400 font-bold uppercase text-[10px] whitespace-nowrap">Type:</span>
              {dpdpTypes.map((tp) => (
                <button
                  key={tp}
                  onClick={() => setDpdpTypeFilter(tp)}
                  className={`px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    dpdpTypeFilter === tp
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tp}
                </button>
              ))}
            </div>
          </div>

          {/* Requests Table */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-xs font-semibold text-slate-500 uppercase border-b border-slate-100">
                  <tr>
                    <th className="py-3.5 px-4">Request ID</th>
                    <th className="py-3.5 px-4">Type</th>
                    <th className="py-3.5 px-4">Data Principal</th>
                    <th className="py-3.5 px-4">Submission Details</th>
                    <th className="py-3.5 px-4">Date</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredDpdp.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="py-8 text-center text-slate-400 text-xs">
                        No DPDP requests match the selected filters.
                      </td>
                    </tr>
                  ) : (
                    filteredDpdp.map((req) => (
                      <tr key={req.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3.5 px-4 font-mono text-xs font-bold text-blue-700 whitespace-nowrap">
                          {req.id}
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold border ${getTypeBadgeColor(req.type)}`}>
                            {req.type}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-slate-900">{req.name}</div>
                          <div className="text-xs text-slate-400">{req.email}</div>
                          {req.identifier && (
                            <div className="text-[10px] text-slate-500 font-mono mt-0.5">{req.identifier}</div>
                          )}
                        </td>
                        <td className="py-3.5 px-4 max-w-xs">
                          <p className="text-xs text-slate-700 line-clamp-2 leading-relaxed">
                            {req.details || 'No detailed narrative provided.'}
                          </p>
                          {req.resolutionNote && (
                            <p className="text-[11px] text-emerald-700 font-medium mt-1">
                              Note: {req.resolutionNote}
                            </p>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-xs text-slate-500 whitespace-nowrap">
                          {req.date}
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusBadgeColor(req.status)}`}>
                            {req.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right whitespace-nowrap">
                          <div className="inline-flex items-center gap-1.5">
                            <button
                              onClick={() => handleOpenDpdpReview(req)}
                              className="px-2.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs transition-colors flex items-center gap-1"
                              title="Review and process DPDP request"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>Process</span>
                            </button>
                            {req.status !== 'Resolved' && (
                              <button
                                onClick={() => handleQuickResolveDpdp(req.id)}
                                className="p-1.5 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
                                title="Quick mark as Resolved"
                              >
                                <CheckCircle2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* DPO Review & Resolution Modal */}
          {activeDpdpRequest && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
              <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
                <button
                  onClick={() => setActiveDpdpRequest(null)}
                  className="absolute right-4 top-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-5 border-b border-slate-100 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-500/20">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block">
                      Data Protection Officer (DPO) Review
                    </span>
                    <h3 className="font-black text-slate-900 text-lg sm:text-xl">
                      {activeDpdpRequest.type}
                    </h3>
                    <p className="text-xs font-mono text-slate-500">
                      Ticket #{activeDpdpRequest.id} • Filed on {activeDpdpRequest.date}
                    </p>
                  </div>
                </div>

                {/* Data Principal Info Card */}
                <div className="space-y-3 bg-slate-50 p-4 sm:p-5 rounded-2xl text-xs text-slate-700 mb-5 border border-slate-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <span className="text-slate-400 block mb-0.5 font-bold uppercase text-[10px]">Data Principal Name:</span>
                      <span className="font-bold text-slate-900 text-sm">{activeDpdpRequest.name}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block mb-0.5 font-bold uppercase text-[10px]">Email Address:</span>
                      <span className="font-semibold text-slate-800">{activeDpdpRequest.email}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block mb-0.5 font-bold uppercase text-[10px]">Phone Number:</span>
                      <span className="font-semibold text-slate-800">{activeDpdpRequest.phone || 'Not provided'}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block mb-0.5 font-bold uppercase text-[10px]">Student / Staff ID:</span>
                      <span className="font-mono text-slate-800">{activeDpdpRequest.identifier || 'Website User'}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200/80">
                    <span className="text-slate-400 block mb-1 font-bold uppercase text-[10px]">Request Narrative / Grounds:</span>
                    <p className="bg-white p-3 rounded-xl border border-slate-200 text-slate-800 font-medium leading-relaxed">
                      {activeDpdpRequest.details || 'No detailed grounds specified.'}
                    </p>
                  </div>
                </div>

                {/* DPO Resolution Form */}
                <form onSubmit={handleSaveDpdpReview} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Update Compliance Status <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Pending', 'Under Review', 'Resolved', 'Rejected'].map((st) => (
                        <button
                          key={st}
                          type="button"
                          onClick={() => setTargetStatus(st)}
                          className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                            targetStatus === st
                              ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      DPO Resolution Notes & Audit Remark
                    </label>
                    <textarea
                      rows="3"
                      value={dpoNote}
                      onChange={(e) => setDpoNote(e.target.value)}
                      placeholder="e.g. Identity verified via university registrar; personal email updated in records; notification dispatched to principal."
                      className="w-full p-3 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 bg-slate-50/50"
                    />
                    <p className="text-[11px] text-slate-400 mt-1">
                      This note will be recorded in the audit log under Section 6 of DPDP Act 2023.
                    </p>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveDpdpRequest(null)}
                      className="flex-1 py-2.5 rounded-xl border border-slate-300 font-bold text-slate-700 hover:bg-slate-50 text-xs transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20"
                    >
                      <Check className="w-4 h-4" />
                      <span>Save & Apply Status</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

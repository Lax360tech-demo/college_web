import React, { useState } from 'react';
import { 
  Bell, 
  Calendar, 
  Plus, 
  Trash2, 
  Star, 
  Search, 
  X,
  CheckCircle2,
  FileText
} from 'lucide-react';

export default function AdminNewsEvents({ newsEvents, onAddNotice, onDeleteNotice, onToggleFeatured }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [newNotice, setNewNotice] = useState({
    title: '',
    date: 'Oct 28, 2026',
    category: 'Academic',
    status: 'Published',
    featured: false
  });

  const filtered = newsEvents.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newNotice.title.trim()) return;
    onAddNotice({
      ...newNotice,
      id: `EVT-${Date.now().toString().slice(-4)}`
    });
    setIsModalOpen(false);
    setNewNotice({
      title: '',
      date: 'Oct 28, 2026',
      category: 'Academic',
      status: 'Published',
      featured: false
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Campus News & Notice Board</h1>
          <p className="text-slate-500 text-sm mt-0.5">
            Publish academic bulletins, exam circulars, symposium dates, and announcements.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Post Announcement</span>
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search bulletins and events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          />
        </div>
        <span className="text-xs font-semibold text-slate-500">
          {filtered.length} Announcements
        </span>
      </div>

      {/* Notices List */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs divide-y divide-slate-100">
        {filtered.map((item) => (
          <div key={item.id} className="p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors">
            <div className="flex items-start gap-3">
              <button
                onClick={() => onToggleFeatured(item.id)}
                className={`mt-0.5 p-1.5 rounded-lg transition-colors ${
                  item.featured ? 'text-amber-500 bg-amber-50' : 'text-slate-300 hover:text-slate-500'
                }`}
                title="Toggle Featured on Public Website"
              >
                <Star className="w-4 h-4 fill-current" />
              </button>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {item.date}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{item.title}</h3>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className={`hidden sm:inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${
                item.status === 'Published'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-slate-100 text-slate-600'
              }`}>
                {item.status}
              </span>
              <button
                onClick={() => onDeleteNotice(item.id)}
                className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete Notice"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-black text-slate-900 text-xl mb-1">Post Campus Notice</h3>
            <p className="text-xs text-slate-500 mb-5">Broadcast a notification across the college portal.</p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Notice Headline</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Schedule for End Semester Examinations Nov 2026"
                  value={newNotice.title}
                  onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Category</label>
                  <select
                    value={newNotice.category}
                    onChange={(e) => setNewNotice({ ...newNotice, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200"
                  >
                    <option>Academic</option>
                    <option>Placements</option>
                    <option>Institutional</option>
                    <option>Sports & Cultural</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Event Date</label>
                  <input
                    type="text"
                    value={newNotice.date}
                    onChange={(e) => setNewNotice({ ...newNotice, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="featured-check"
                  checked={newNotice.featured}
                  onChange={(e) => setNewNotice({ ...newNotice, featured: e.target.checked })}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="featured-check" className="font-medium text-slate-700 select-none">
                  Pin to Homepage Spotlight Banner
                </label>
              </div>

              <div className="pt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors shadow-md shadow-blue-600/20"
                >
                  Publish Notice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

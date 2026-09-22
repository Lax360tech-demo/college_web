import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  X, 
  CheckCircle2, 
  Tag, 
  Sparkles,
  ExternalLink,
  Layers
} from 'lucide-react';

export default function AdminEvents({ 
  events = [], 
  onAddEvent, 
  onUpdateEvent, 
  onDeleteEvent 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEventId, setEditingEventId] = useState(null);

  // Form State
  const initialFormState = {
    title: '',
    category: 'Cultural Fest',
    date: '',
    time: '9:00 AM – 5:00 PM',
    venue: '',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    description: '',
    status: 'Upcoming'
  };

  const [formData, setFormData] = useState(initialFormState);

  const categories = [
    'All',
    'Cultural Fest',
    'Hackathon',
    'Academic Conference',
    'Alumni Meet',
    'Workshop',
    'Sports'
  ];

  // Filtered Events
  const filteredEvents = events.filter((evt) => {
    const matchesQuery = 
      (evt.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (evt.venue || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (evt.description || '').toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || evt.category === selectedCategory;

    return matchesQuery && matchesCategory;
  });

  const openAddModal = () => {
    setEditingEventId(null);
    setFormData(initialFormState);
    setIsModalOpen(true);
  };

  const openEditModal = (evt) => {
    setEditingEventId(evt.id);
    setFormData({
      title: evt.title || '',
      category: evt.category || 'Cultural Fest',
      date: evt.date || '',
      time: evt.time || '9:00 AM – 5:00 PM',
      venue: evt.venue || '',
      image: evt.image || 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
      description: evt.description || '',
      status: evt.status || 'Upcoming'
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingEventId(null);
    setFormData(initialFormState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.date.trim()) {
      alert('Please fill in required fields: Event Title and Date.');
      return;
    }

    if (editingEventId) {
      onUpdateEvent({
        ...formData,
        id: editingEventId
      });
    } else {
      onAddEvent({
        ...formData,
        id: `evt-${Date.now()}`
      });
    }

    closeModal();
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      onDeleteEvent(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-slate-900">Campus Events Management</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
              CRUD Enabled
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-0.5">
            Publish, update, schedule, and curate collegiate symposiums, hackathons, and cultural fests.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Event</span>
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Events</p>
          <p className="text-2xl font-black text-slate-900 mt-1">{events.length}</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Upcoming</p>
          <p className="text-2xl font-black text-slate-900 mt-1">
            {events.filter(e => (e.status || 'Upcoming') === 'Upcoming').length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Categories</p>
          <p className="text-2xl font-black text-slate-900 mt-1">
            {new Set(events.map(e => e.category)).size}
          </p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <p className="text-xs font-bold text-purple-600 uppercase tracking-wider">Active Filters</p>
          <p className="text-2xl font-black text-slate-900 mt-1">{filteredEvents.length}</p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex flex-col md:flex-row gap-3 md:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by event title, venue, or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      {filteredEvents.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">No events found</h3>
          <p className="text-slate-500 text-xs mt-1">Try adjusting your search query or filter, or add a new event.</p>
          <button
            onClick={openAddModal}
            className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Add New Event
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <div>
                {/* Event Image Banner */}
                <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={evt.image || 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80'}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/90 backdrop-blur-md text-blue-700 shadow-xs">
                      {evt.category || 'General'}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-xs ${
                      (evt.status || 'Upcoming') === 'Upcoming'
                        ? 'bg-emerald-500 text-white'
                        : (evt.status || 'Upcoming') === 'Ongoing'
                        ? 'bg-amber-500 text-slate-950 font-black'
                        : 'bg-slate-700 text-slate-200'
                    }`}>
                      {evt.status || 'Upcoming'}
                    </span>
                  </div>

                  {/* Title overlay at bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-bold text-sm leading-snug line-clamp-2 drop-shadow-sm">
                      {evt.title}
                    </h3>
                  </div>
                </div>

                {/* Event Details Body */}
                <div className="p-4 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="font-semibold text-slate-800">{evt.date}</span>
                  </div>

                  {evt.time && (
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{evt.time}</span>
                    </div>
                  )}

                  {evt.venue && (
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span className="line-clamp-1">{evt.venue}</span>
                    </div>
                  )}

                  <p className="text-xs text-slate-500 line-clamp-2 mt-2 leading-relaxed">
                    {evt.description || 'No description provided.'}
                  </p>
                </div>
              </div>

              {/* Action Controls Footer */}
              <div className="p-4 pt-2 border-t border-slate-100 flex items-center justify-between gap-2 bg-slate-50/50">
                <span className="text-[10px] font-bold text-slate-400 font-mono uppercase">
                  ID: {evt.id}
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => openEditModal(evt)}
                    className="p-1.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    title="Edit Event"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(evt.id, evt.title)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                    title="Delete Event"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {editingEventId ? 'Edit Campus Event' : 'Add New Campus Event'}
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    {editingEventId ? 'Update event parameters and public visibility' : 'Publish a new symposium, fest, or conference'}
                  </p>
                </div>
              </div>

              <button
                onClick={closeModal}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Event Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. TECH-NOVATION 2026: 36-Hour National Hackathon"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  >
                    <option value="Cultural Fest">Cultural Fest</option>
                    <option value="Hackathon">Hackathon</option>
                    <option value="Academic Conference">Academic Conference</option>
                    <option value="Alumni Meet">Alumni Meet</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Sports">Sports</option>
                    <option value="Institutional">Institutional</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Event Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  >
                    <option value="Upcoming">Upcoming</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. November 14 - 15, 2026"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Timing
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 9:00 AM – 6:00 PM"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Campus Venue
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dr. APJ Abdul Kalam Auditorium"
                  value={formData.venue}
                  onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Cover Image URL
                </label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                />
                {formData.image && (
                  <div className="mt-2 h-24 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Event Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Provide comprehensive details about schedule, eligibility, keynote speakers..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                />
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all"
                >
                  {editingEventId ? 'Update Event' : 'Publish Event'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

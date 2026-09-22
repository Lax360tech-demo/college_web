import React, { useState } from 'react';
import { 
  Building2, 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  X, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Wrench,
  Tag
} from 'lucide-react';

export default function AdminFacilities({
  facilities = [],
  onAddFacility,
  onUpdateFacility,
  onDeleteFacility
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFacilityId, setEditingFacilityId] = useState(null);

  const initialFormState = {
    title: '',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    description: '',
    featuresText: '' // newline or comma separated
  };

  const [formData, setFormData] = useState(initialFormState);

  // Filter facilities
  const filteredFacilities = facilities.filter((fac) => {
    const q = searchQuery.toLowerCase();
    const matchesTitle = (fac.title || '').toLowerCase().includes(q);
    const matchesDesc = (fac.description || '').toLowerCase().includes(q);
    const matchesFeatures = Array.isArray(fac.features) && 
      fac.features.some(f => (f || '').toLowerCase().includes(q));

    return matchesTitle || matchesDesc || matchesFeatures;
  });

  const openAddModal = () => {
    setEditingFacilityId(null);
    setFormData(initialFormState);
    setIsModalOpen(true);
  };

  const openEditModal = (fac) => {
    setEditingFacilityId(fac.id);
    setFormData({
      title: fac.title || '',
      image: fac.image || '',
      description: fac.description || '',
      featuresText: Array.isArray(fac.features) ? fac.features.join('\n') : ''
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingFacilityId(null);
    setFormData(initialFormState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.image.trim()) {
      alert('Please fill in required fields: Facility Title and Image URL.');
      return;
    }

    // Parse features from text (lines or commas)
    const features = formData.featuresText
      .split(/[\n,]+/)
      .map(f => f.trim())
      .filter(f => f.length > 0);

    const facilityPayload = {
      title: formData.title.trim(),
      image: formData.image.trim(),
      description: formData.description.trim(),
      features: features.length > 0 ? features : ['Modern Campus Amenities', '24/7 Access']
    };

    if (editingFacilityId) {
      onUpdateFacility({
        ...facilityPayload,
        id: editingFacilityId
      });
    } else {
      const generatedId = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 20) || `fac-${Date.now()}`;
      onAddFacility({
        ...facilityPayload,
        id: generatedId
      });
    }

    closeModal();
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete facility "${title}"?`)) {
      onDeleteFacility(id);
    }
  };

  // Calculate total feature tags
  const totalFeatures = facilities.reduce((sum, f) => sum + (Array.isArray(f.features) ? f.features.length : 0), 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-slate-900">Campus Facilities & Infrastructure</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
              CRUD Enabled
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-0.5">
            Configure learning hubs, research labs, student hostels, sports grounds, and transit services.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Facility</span>
        </button>
      </div>

      {/* Metric chips */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Facilities</p>
          <p className="text-2xl font-black text-slate-900 mt-1">{facilities.length}</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Highlight Features</p>
          <p className="text-2xl font-black text-slate-900 mt-1">{totalFeatures}</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Active Search View</p>
          <p className="text-2xl font-black text-slate-900 mt-1">{filteredFacilities.length}</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <p className="text-xs font-bold text-purple-600 uppercase tracking-wider">Campus Scope</p>
          <p className="text-sm font-bold text-slate-800 mt-2">45-Acre Smart Campus</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search facilities by name, amenity, or feature tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          />
        </div>
        <span className="text-xs font-semibold text-slate-500">
          Showing {filteredFacilities.length} of {facilities.length}
        </span>
      </div>

      {/* Facility Grid */}
      {filteredFacilities.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">No facilities found</h3>
          <p className="text-slate-500 text-xs mt-1">Try adjusting your search query or add a new campus facility.</p>
          <button
            onClick={openAddModal}
            className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Add New Facility
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <div>
                {/* Facility Image Thumbnail */}
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/10" />

                  {/* Title overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="font-extrabold text-base leading-snug drop-shadow-sm">
                      {fac.title}
                    </h3>
                  </div>
                </div>

                {/* Description and Features */}
                <div className="p-4 space-y-3">
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {fac.description || 'Modern facility offering advanced infrastructure for student academics and life.'}
                  </p>

                  {/* Feature Tags */}
                  {Array.isArray(fac.features) && fac.features.length > 0 && (
                    <div className="pt-2 border-t border-slate-100">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Key Amenities & Specs
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {fac.features.map((feat, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                            <span>{feat}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Controls Footer */}
              <div className="p-4 pt-2 border-t border-slate-100 flex items-center justify-between gap-2 bg-slate-50/50">
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                  ID: #{fac.id}
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => openEditModal(fac)}
                    className="p-1.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    title="Edit Facility"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(fac.id, fac.title)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                    title="Delete Facility"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Facility Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {editingFacilityId ? 'Edit Campus Facility' : 'Add New Campus Facility'}
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    {editingFacilityId ? 'Update facility specifications, images, and highlights' : 'Register a new smart facility on the public portal'}
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
                  Facility Name / Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Central Digital Library & Research Pods"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Image URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://images.unsplash.com/photo-..."
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                />
                {formData.image && (
                  <div className="mt-2 h-32 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                    <img
                      src={formData.image}
                      alt="Facility Preview"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Facility Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Detailed overview of the equipment, capacity, operating hours, and student benefits..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Key Amenities & Features (One per line or comma separated)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g.&#10;RFID-enabled Automated Book Lending&#10;IEEE / ACM Digital Library&#10;Soundproof Research Cubicles"
                  value={formData.featuresText}
                  onChange={(e) => setFormData({ ...formData, featuresText: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                />
                <p className="text-[10px] text-slate-400 mt-1">
                  Enter each highlight amenity on a new line or separated by commas.
                </p>
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
                  {editingFacilityId ? 'Update Facility' : 'Add Facility'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

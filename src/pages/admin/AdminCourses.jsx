import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  BookOpen, 
  Trash2, 
  Edit3, 
  CheckCircle, 
  XCircle, 
  X,
  GraduationCap,
  Users
} from 'lucide-react';

export default function AdminCourses({ courses, onAddCourse, onDeleteCourse, onToggleStatus }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  const [newCourse, setNewCourse] = useState({
    name: '',
    department: 'Engineering & Technology',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: 60,
    enrolled: 0,
    annualFee: '₹1,50,000',
    status: 'Admissions Open'
  });

  const filteredCourses = courses.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newCourse.name.trim()) return;
    onAddCourse({
      ...newCourse,
      id: `CRS-${Date.now().toString().slice(-4)}`
    });
    setIsAddModalOpen(false);
    setNewCourse({
      name: '',
      department: 'Engineering & Technology',
      level: 'Undergraduate',
      duration: '4 Years',
      intake: 60,
      enrolled: 0,
      annualFee: '₹1,50,000',
      status: 'Admissions Open'
    });
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Academic Programs & Curriculum</h1>
          <p className="text-slate-500 text-sm mt-0.5">
            Manage degree courses, seat allocations, tuition fees, and admission status.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md shadow-blue-600/20 transition-all shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Course</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search degree program or department..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
          />
        </div>
        <span className="text-xs font-semibold text-slate-500">
          Showing {filteredCourses.length} Programs
        </span>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCourses.map((course) => {
          const occupancy = Math.round((course.enrolled / course.intake) * 100);
          return (
            <div 
              key={course.id} 
              className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold font-mono">
                    {course.id}
                  </span>
                  <button
                    onClick={() => onToggleStatus(course.id)}
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full cursor-pointer transition-colors ${
                      course.status === 'Admissions Open'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                    title="Click to toggle status"
                  >
                    {course.status}
                  </button>
                </div>

                <h3 className="font-bold text-slate-900 text-base leading-snug">{course.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{course.department}</p>

                <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-100 text-xs">
                  <div>
                    <span className="text-slate-400 block">Level:</span>
                    <span className="font-semibold text-slate-700">{course.level}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Duration:</span>
                    <span className="font-semibold text-slate-700">{course.duration}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Annual Tuition:</span>
                    <span className="font-bold text-slate-900">{course.annualFee}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Enrolled / Intake:</span>
                    <span className="font-bold text-blue-700">{course.enrolled} / {course.intake}</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-3">
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1 font-medium">
                    <span>Seat Occupancy</span>
                    <span>{occupancy}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${occupancy >= 95 ? 'bg-emerald-500' : 'bg-blue-600'}`}
                      style={{ width: `${occupancy}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">AICTE & NBA Accredited</span>
                <button
                  onClick={() => onDeleteCourse(course.id)}
                  className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Remove Course"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Course Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-black text-slate-900 text-xl mb-1">Add Academic Degree Program</h3>
            <p className="text-xs text-slate-500 mb-5">Create a new course offering for the upcoming admissions cycle.</p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Course Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. B.Tech Cyber Security & Forensics"
                  value={newCourse.name}
                  onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Department</label>
                  <select
                    value={newCourse.department}
                    onChange={(e) => setNewCourse({ ...newCourse, department: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none"
                  >
                    <option>Engineering & Technology</option>
                    <option>Sciences & Research</option>
                    <option>Management Studies</option>
                    <option>Humanities & Media</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Degree Level</label>
                  <select
                    value={newCourse.level}
                    onChange={(e) => setNewCourse({ ...newCourse, level: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none"
                  >
                    <option>Undergraduate</option>
                    <option>Postgraduate</option>
                    <option>Doctorate / Ph.D</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Duration</label>
                  <input
                    type="text"
                    value={newCourse.duration}
                    onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Intake Seats</label>
                  <input
                    type="number"
                    value={newCourse.intake}
                    onChange={(e) => setNewCourse({ ...newCourse, intake: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Annual Fee</label>
                  <input
                    type="text"
                    value={newCourse.annualFee}
                    onChange={(e) => setNewCourse({ ...newCourse, annualFee: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200"
                  />
                </div>
              </div>

              <div className="pt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors shadow-md shadow-blue-600/20"
                >
                  Save & Publish Course
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

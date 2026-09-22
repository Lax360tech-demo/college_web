// Initial mock data store for Lax360 College Admin Portal

export const initialAdminStats = {
  totalAdmissions: 1428,
  pendingAdmissions: 42,
  totalCourses: 24,
  activeCareers: 8,
  totalApplicants: 86,
  diningItems: 36,
  dailyDiningOrders: 340,
  unreadInquiries: 18,
  totalPlacements: '95%',
  activeFaculty: 164
};

export const initialAdmissions = [
  {
    id: 'ADM-2026-001',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@gmail.com',
    phone: '+91 98765 43210',
    course: 'B.Tech Computer Science & Engineering',
    category: 'UG',
    marks: '96.4%',
    appliedDate: '2026-09-18',
    status: 'Approved',
    quota: 'Merit Quota'
  },
  {
    id: 'ADM-2026-002',
    name: 'Priya Narayanan',
    email: 'priya.n@outlook.com',
    phone: '+91 98450 11223',
    course: 'B.Tech AI & Data Science',
    category: 'UG',
    marks: '94.8%',
    appliedDate: '2026-09-18',
    status: 'Under Review',
    quota: 'Merit Quota'
  },
  {
    id: 'ADM-2026-003',
    name: 'Rohan Verma',
    email: 'rohan.v99@gmail.com',
    phone: '+91 97112 34567',
    course: 'M.Tech Artificial Intelligence',
    category: 'PG',
    marks: '8.9 CGPA',
    appliedDate: '2026-09-17',
    status: 'Interview Scheduled',
    quota: 'GATE Qualified'
  },
  {
    id: 'ADM-2026-004',
    name: 'Sneha Kulkarni',
    email: 'sneha.k@yahoo.com',
    phone: '+91 99887 66554',
    course: 'B.Tech Biotechnology',
    category: 'UG',
    marks: '91.2%',
    appliedDate: '2026-09-17',
    status: 'Under Review',
    quota: 'Sports Quota'
  },
  {
    id: 'ADM-2026-005',
    name: 'Karthik Raja',
    email: 'karthik.raja@gmail.com',
    phone: '+91 94441 55667',
    course: 'B.Tech Electronics & Comm. Engg.',
    category: 'UG',
    marks: '88.6%',
    appliedDate: '2026-09-16',
    status: 'Waitlisted',
    quota: 'General Quota'
  },
  {
    id: 'ADM-2026-006',
    name: 'Ananya Deshmukh',
    email: 'ananya.d@gmail.com',
    phone: '+91 98220 99887',
    course: 'MBA - Technology Management',
    category: 'PG',
    marks: '92% CAT',
    appliedDate: '2026-09-15',
    status: 'Approved',
    quota: 'Management Quota'
  }
];

export const initialCourses = [
  {
    id: 'CRS-CSE',
    name: 'B.Tech Computer Science & Engineering',
    department: 'Engineering & Technology',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: 180,
    enrolled: 174,
    annualFee: '₹1,65,000',
    status: 'Admissions Open'
  },
  {
    id: 'CRS-AIDS',
    name: 'B.Tech Artificial Intelligence & Data Science',
    department: 'Engineering & Technology',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: 120,
    enrolled: 118,
    annualFee: '₹1,75,000',
    status: 'Admissions Open'
  },
  {
    id: 'CRS-ECE',
    name: 'B.Tech Electronics & Communication Engineering',
    department: 'Engineering & Technology',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: 120,
    enrolled: 95,
    annualFee: '₹1,50,000',
    status: 'Admissions Open'
  },
  {
    id: 'CRS-MECH',
    name: 'B.Tech Mechanical & Robotics Engineering',
    department: 'Engineering & Technology',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: 90,
    enrolled: 72,
    annualFee: '₹1,40,000',
    status: 'Admissions Open'
  },
  {
    id: 'CRS-BT',
    name: 'B.Tech Biotechnology & Bioinformatics',
    department: 'Sciences & Research',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: 60,
    enrolled: 54,
    annualFee: '₹1,45,000',
    status: 'Admissions Open'
  },
  {
    id: 'CRS-MBA',
    name: 'MBA in Technology & Innovation Management',
    department: 'Management Studies',
    level: 'Postgraduate',
    duration: '2 Years',
    intake: 60,
    enrolled: 58,
    annualFee: '₹2,10,000',
    status: 'Admissions Open'
  }
];

export const initialJobApplicants = [
  {
    id: 'APP-101',
    name: 'Dr. Meenakshi Sundaram',
    email: 'm.sundaram@iitb.ac.in',
    phone: '+91 98401 99881',
    position: 'Associate Professor – Artificial Intelligence',
    department: 'Computer Science',
    experience: '8+ Years',
    status: 'Shortlisted',
    appliedDate: '2026-09-18',
    notes: 'Ph.D from IIT Bombay. 14 Scopus citations. Excellent research track record.'
  },
  {
    id: 'APP-102',
    name: 'Venkatesh Rao',
    email: 'v.rao.cloud@gmail.com',
    phone: '+91 97400 33221',
    position: 'Assistant Professor – Cloud & DevOps',
    department: 'Information Technology',
    experience: '5 Years',
    status: 'Under Review',
    appliedDate: '2026-09-17',
    notes: 'M.Tech from NIT Trichy. 3 industry patents in distributed cloud computing.'
  },
  {
    id: 'APP-103',
    name: 'Divya Bharathi',
    email: 'divya.b@corporatehr.org',
    phone: '+91 99620 44556',
    position: 'Senior Placement Officer',
    department: 'Career Development Cell',
    experience: '7 Years',
    status: 'Interview Scheduled',
    appliedDate: '2026-09-16',
    notes: 'Strong industry connections with Tier-1 tech firms in Bangalore & Hyderabad.'
  },
  {
    id: 'APP-104',
    name: 'K. Senthil Kumar',
    email: 'senthil.vlsi@gmail.com',
    phone: '+91 94433 22110',
    position: 'Lab Technical Instructor – Robotics & IoT',
    department: 'Electronics',
    experience: '4 Years',
    status: 'Shortlisted',
    appliedDate: '2026-09-15',
    notes: 'Certified Embedded Systems trainer with hands-on ARM & ROS experience.'
  }
];

// Campus Cafeteria / Restaurant / Dining Menu & Orders Management
export const initialDiningMenu = [
  {
    id: 'DIN-001',
    name: 'Special South Indian Thali',
    category: 'Lunch Specials',
    price: '₹95',
    type: 'Veg',
    calories: '620 kcal',
    location: 'Central Food Court (Block A)',
    available: true,
    rating: 4.8
  },
  {
    id: 'DIN-002',
    name: 'Paneer Butter Masala with 3 Roti',
    category: 'Lunch Specials',
    price: '₹120',
    type: 'Veg',
    calories: '540 kcal',
    location: 'Central Food Court (Block A)',
    available: true,
    rating: 4.9
  },
  {
    id: 'DIN-003',
    name: 'Hyderabadi Chicken Dum Biryani',
    category: 'Chef Specials',
    price: '₹160',
    type: 'Non-Veg',
    calories: '750 kcal',
    location: 'South Campus Canteen (Block C)',
    available: true,
    rating: 4.9
  },
  {
    id: 'DIN-004',
    name: 'Ghee Masala Dosa + Filter Coffee',
    category: 'Breakfast',
    price: '₹65',
    type: 'Veg',
    calories: '380 kcal',
    location: 'All Campus Cafeterias',
    available: true,
    rating: 4.7
  },
  {
    id: 'DIN-005',
    name: 'Grilled Vegetable Club Sandwich',
    category: 'Snacks & Quick Bites',
    price: '₹75',
    type: 'Veg',
    calories: '310 kcal',
    location: 'Tech Park Café (Block B)',
    available: true,
    rating: 4.6
  },
  {
    id: 'DIN-006',
    name: 'Cold Coffee with Ice Cream',
    category: 'Beverages',
    price: '₹55',
    type: 'Veg',
    calories: '220 kcal',
    location: 'Tech Park Café (Block B)',
    available: true,
    rating: 4.8
  }
];

export const initialCateringOrders = [
  {
    id: 'CAT-2026-081',
    event: 'National Robotics Hackathon 2026',
    department: 'CSE Department',
    date: '2026-09-22',
    attendees: 280,
    mealType: 'Buffet Lunch + Evening Snacks',
    status: 'Confirmed',
    totalAmount: '₹39,200'
  },
  {
    id: 'CAT-2026-082',
    event: 'Faculty Academic Council Luncheon',
    department: 'Principal Office',
    date: '2026-09-20',
    attendees: 45,
    mealType: 'Executive VIP Lunch',
    status: 'In Preparation',
    totalAmount: '₹9,450'
  },
  {
    id: 'CAT-2026-083',
    event: 'Alumni Mentorship Weekend',
    department: 'Alumni Association',
    date: '2026-09-26',
    attendees: 150,
    mealType: 'High Tea & Hors d’oeuvres',
    status: 'Pending Approval',
    totalAmount: '₹18,000'
  }
];

export const initialNewsEvents = [
  {
    id: 'EVT-01',
    title: 'NAAC Peer Team Visit for A++ Accreditation Review',
    date: 'Oct 14-16, 2026',
    category: 'Institutional',
    status: 'Published',
    featured: true
  },
  {
    id: 'EVT-02',
    title: 'Campus Placement Day: Google, Microsoft, Amazon & L&T',
    date: 'Nov 02, 2026',
    category: 'Placements',
    status: 'Published',
    featured: true
  },
  {
    id: 'EVT-03',
    title: 'International Conference on Green AI & Robotics 2026',
    date: 'Dec 05, 2026',
    category: 'Academic',
    status: 'Scheduled',
    featured: false
  }
];

export const initialInquiries = [
  {
    id: 'INQ-901',
    name: 'Suresh Kumar (Parent)',
    email: 'suresh.k@gmail.com',
    phone: '+91 98410 77665',
    subject: 'Hostel Accommodation & Fee Structure for B.Tech CSE',
    date: '2026-09-18',
    status: 'New',
    priority: 'High'
  },
  {
    id: 'INQ-902',
    name: 'Deepika Raman',
    email: 'deepika.r@gmail.com',
    phone: '+91 97900 11443',
    subject: 'Lateral Entry eligibility for Diploma holders in Mechanical',
    date: '2026-09-17',
    status: 'Responded',
    priority: 'Medium'
  },
  {
    id: 'INQ-903',
    name: 'Gaurav Jain',
    email: 'gjain@techcorp.in',
    phone: '+91 99200 44882',
    subject: 'Campus Recruitment Drive Slot Request for 2026-27 batch',
    date: '2026-09-16',
    status: 'Resolved',
    priority: 'High'
  }
];

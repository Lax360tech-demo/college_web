// Comprehensive data store for Apex Institute of Technology & Science

export const collegeInfo = {
  name: "LAX360 COLLEGE OF TECHNOLOGY & SCIENCE",
  shortName: "AITS",
  tagline: "Empowering Students Through Knowledge, Innovation & Excellence",
  established: 1984,
  accreditation: "NAAC 'A++' Grade | Autonomous Institution | Approved by AICTE | Affiliated to State University",
  nirfRank: "Ranked #38 across India in NIRF 2025",
  address: "Apex Knowledge Park, Outer Ring Road, Tech Corridor, Metro City - 600100",
  phone: "+91 (044) 2890-4500 / 4501",
  admissionsPhone: "+91 98401 23456 / +91 98401 23457",
  email: "info@apexinstitute.edu.in",
  admissionsEmail: "admissions@apexinstitute.edu.in",
  workingHours: "Monday – Saturday: 8:30 AM – 5:30 PM",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
    twitter: "https://twitter.com"
  }
};

export const heroStats = [
  { value: "40+", label: "Years of Academic Excellence" },
  { value: "95%", label: "Placement Assistance Track Record" },
  { value: "100+", label: "Top Tier Recruiting Partners" },
  { value: "10+ LPA", label: "Highest Placement Package" },
  { value: "12,000+", label: "Active Global Alumni Network" },
  { value: "75+", label: "State-of-the-Art Laboratories" }
];

export const principalData = {
  name: "Dr. R. Sundararajan",
  qualification: "Ph.D. (IIT Madras), Post-Doc (Stanford University), FIE",
  designation: "Principal & Senior Professor",
  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  message: "At Apex Institute of Technology & Science, we foster a transformative learning ecosystem that transcends traditional textbooks. Our focus is on holistic development, cutting-edge interdisciplinary research, ethical leadership, and preparing students for the dynamic technological disruptions of the 21st century. With world-class faculty, accredited programs, and strong corporate alliances, we ensure every student's ambition finds its highest expression."
};

export const visionMission = {
  vision: "To be globally recognized as a premier center of technical education, research, and innovation, producing socially responsible engineers, scientists, and entrepreneurs who pioneer sustainable solutions.",
  mission: [
    "Deliver rigorous, outcome-based education benchmarked against international standards.",
    "Cultivate an innovation-driven environment through advanced research facilities and industry collaboration.",
    "Inculcate high moral and ethical values, environmental consciousness, and leadership qualities.",
    "Empower students from diverse backgrounds with lifelong learning abilities and global employability."
  ],
  coreValues: [
    { title: "Academic Integrity", desc: "Upholding highest moral standards in teaching, learning, and research." },
    { title: "Innovation & Inquiry", desc: "Encouraging out-of-the-box thinking and real-world problem solving." },
    { title: "Inclusivity & Empathy", desc: "Providing equal opportunities and nurturing a supportive campus community." },
    { title: "Social Responsibility", desc: "Commitment to sustainable development and community welfare." }
  ]
};

export const coursesData = [
  // Undergraduate
  {
    id: "btech-cse",
    name: "B.Tech in Computer Science & Engineering",
    level: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    department: "Computer Science & Engineering",
    intake: 180,
    eligibility: "10+2 with Physics, Mathematics, and Chemistry/Computer Science with minimum 60% aggregate.",
    description: "Comprehensive curriculum covering cloud architecture, distributed systems, full-stack software development, cyber security, and machine learning foundations.",
    highlights: ["Accredited by NBA (Tier-1)", "Cisco & AWS Cloud Academy Integration", "Industry Capstone Projects"],
    feePerYear: "₹1,45,000 / Year",
    careers: ["Full-Stack Engineer", "Cloud Solutions Architect", "System Software Developer", "Cybersecurity Analyst"]
  },
  {
    id: "btech-aids",
    name: "B.Tech in Artificial Intelligence & Data Science",
    level: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    department: "AI & Emerging Technologies",
    intake: 120,
    eligibility: "10+2 with Physics, Mathematics, and Chemistry/CS with minimum 65% aggregate.",
    description: "Deep immersion in neural networks, natural language processing, computer vision, big data analytics, and generative AI systems with hands-on GPU labs.",
    highlights: ["Dedicated NVIDIA DGX AI Supercomputing Lab", "Kaggle & Hackathon Mentorship", "Joint Certification with IBM"],
    feePerYear: "₹1,55,000 / Year",
    careers: ["AI Engineer", "Data Scientist", "Machine Learning Researcher", "BI Architect"]
  },
  {
    id: "btech-ece",
    name: "B.Tech in Electronics & Communication Engineering",
    level: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    department: "Electronics & Communication",
    intake: 120,
    eligibility: "10+2 with Physics, Mathematics, and Chemistry with minimum 60% aggregate.",
    description: "Focus on semiconductor design, VLSI, embedded systems, 5G wireless networks, IoT architecture, and digital signal processing.",
    highlights: ["Cadence & Synopsys EDA Suite Labs", "Texas Instruments Innovation Lab", "Robotics & Drone Tech Cell"],
    feePerYear: "₹1,35,000 / Year",
    careers: ["VLSI Design Engineer", "Embedded Firmware Developer", "RF Telecom Specialist", "IoT Systems Architect"]
  },
  {
    id: "btech-mech",
    name: "B.Tech in Mechanical & Automation Engineering",
    level: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    department: "Mechanical Engineering",
    intake: 90,
    eligibility: "10+2 with Physics, Mathematics, and Chemistry with minimum 55% aggregate.",
    description: "Blending classic thermodynamics and mechanics with modern electric vehicles (EV), CAD/CAM 3D printing, smart manufacturing, and industrial robotics.",
    highlights: ["Formula Student SAE Racing Team", "Siemens PLM Center of Excellence", "CNC Machining & 3D Prototyping"],
    feePerYear: "₹1,25,000 / Year",
    careers: ["EV Design Engineer", "Automotive Specialist", "Robotics Automation Engineer", "Thermal Systems Analyst"]
  },
  {
    id: "bsc-cs",
    name: "B.Sc in Computer Science",
    level: "Undergraduate",
    duration: "3 Years (6 Semesters)",
    department: "School of Computing Sciences",
    intake: 60,
    eligibility: "10+2 with Mathematics or Computer Science with minimum 50% aggregate.",
    description: "Foundational and modern computer science education emphasizing web applications, database management, algorithms, and agile programming.",
    highlights: ["Hands-on Full-Stack Bootcamps", "Industry Internship in 5th Semester", "Direct Pathway to MCA/M.Sc"],
    feePerYear: "₹85,000 / Year",
    careers: ["Web Developer", "Database Administrator", "QA Automation Tester", "Junior Software Developer"]
  },
  {
    id: "bcom-fintech",
    name: "B.Com (Honours) with FinTech",
    level: "Undergraduate",
    duration: "3 Years (6 Semesters)",
    department: "School of Commerce & Management",
    intake: 60,
    eligibility: "10+2 Commerce/Science with minimum 55% aggregate.",
    description: "Combines financial accounting, corporate auditing, blockchain in banking, quantitative finance, and digital payment systems.",
    highlights: ["ACCA / CMA Integrated Modules", "Live Stock Trading Simulation Lab", "FinTech Startup Incubation"],
    feePerYear: "₹90,000 / Year",
    careers: ["Financial Analyst", "Investment Banking Associate", "Risk Consultant", "Corporate Accountant"]
  },
  // Postgraduate
  {
    id: "mtech-cse",
    name: "M.Tech in Computer Science & Engineering",
    level: "Postgraduate",
    duration: "2 Years (4 Semesters)",
    department: "Computer Science & Engineering",
    intake: 30,
    eligibility: "B.E/B.Tech in CSE/IT or MCA with minimum 60% aggregate or valid GATE score.",
    description: "Advanced study of distributed algorithms, high-performance computing, quantum computing fundamentals, and security protocols with research dissertation.",
    highlights: ["Funded Research Assistantships", "International Journal Publication Support", "Industry Sponsored Thesis"],
    feePerYear: "₹1,10,000 / Year",
    careers: ["Senior Software Architect", "Principal Research Engineer", "Technical Lead", "Doctoral Scholar"]
  },
  {
    id: "mtech-vlsi",
    name: "M.Tech in VLSI & Embedded Systems",
    level: "Postgraduate",
    duration: "2 Years (4 Semesters)",
    department: "Electronics & Communication",
    intake: 24,
    eligibility: "B.E/B.Tech in ECE/EEE/Instrumentation with minimum 60% aggregate.",
    description: "Specialized ASIC design, FPGA prototyping, low-power SoC architecture, physical design, and verification methodologies.",
    highlights: ["Industry Tape-out Collaboration", "Arm University Program Partner", "100% Core Placement Track"],
    feePerYear: "₹1,15,000 / Year",
    careers: ["SoC Verification Engineer", "ASIC Design Lead", "FPGA Architect", "Firmware Consultant"]
  },
  {
    id: "msc-data-science",
    name: "M.Sc in Applied Data Science",
    level: "Postgraduate",
    duration: "2 Years (4 Semesters)",
    department: "School of Computing Sciences",
    intake: 40,
    eligibility: "B.Sc (CS/Maths/Stats/IT) or BCA with minimum 55% aggregate.",
    description: "Rigorous statistical modeling, predictive analytics, deep learning architectures, time-series forecasting, and big data pipeline engineering.",
    highlights: ["6-Month Mandatory Industry Capstone", "Access to Cloud Compute Credits", "Harvard Business Publishing Cases"],
    feePerYear: "₹95,000 / Year",
    careers: ["Data Science Specialist", "Predictive Modeler", "Analytics Manager", "AI Consultant"]
  },
  {
    id: "mcom",
    name: "M.Com in International Banking & Finance",
    level: "Postgraduate",
    duration: "2 Years (4 Semesters)",
    department: "School of Commerce & Management",
    intake: 40,
    eligibility: "B.Com / BBA / BBM with minimum 50% aggregate.",
    description: "In-depth corporate finance, international trade finance, forex management, tax compliance, and strategic financial management.",
    highlights: ["Bloomberg Terminal Certification", "Auditing Firm Internships", "National Seminar Presentations"],
    feePerYear: "₹75,000 / Year",
    careers: ["Portfolio Manager", "Credit Risk Officer", "Financial Controller", "Forex Analyst"]
  }
];

export const facilitiesData = [
  {
    id: "library",
    title: "Central Digital Library",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    description: "An air-conditioned four-floor knowledge hub housing over 85,000 print volumes, 15,000+ peer-reviewed e-journals (IEEE, Springer, ScienceDirect), and 24/7 digital discussion pods.",
    features: ["RFID-enabled Automated Book Lending", "IEEE / ACM / Springer Digital Library", "Soundproof Research Cubicles", "Kindle & E-reader Lending Station"]
  },
  {
    id: "laboratories",
    title: "High-Tech Advanced Laboratories",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    description: "State-of-the-art domain specific research labs featuring high performance NVIDIA DGX GPU clusters, robotics workstations, Wind Tunnel testing rigs, and IoT smart testbeds.",
    features: ["NVIDIA AI Supercomputing Lab", "Cadence & Synopsys VLSI Suites", "Robotics & Drone Testing Enclosure", "3D Printing & Rapid Prototyping Hub"]
  },
  {
    id: "hostel",
    title: "Modern Residential Hostels",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    description: "Safe, vibrant, and home-like separate living quarters for male and female students with 24/7 security, high-speed Wi-Fi, laundry facilities, study lounges, and hygienic dining.",
    features: ["AC & Non-AC Rooms (Single/Shared)", "24/7 Biometric Access & CCTV Monitoring", "Nutritious Multi-Cuisine Meal Plans", "Indoor Recreation Lounge & Study Pods"]
  },
  {
    id: "sports",
    title: "Olympic Sports & Fitness Arena",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive athletic facilities featuring a 400m synthetic running track, floodlit cricket ground, FIFA-sized football pitch, synthetic tennis courts, and modern indoor gymnasium.",
    features: ["400m Athletic Track & Turf Cricket Ground", "Indoor Badminton & Basketball Complex", "Fully Equipped Strength & Cardio Gym", "Professional Coaches & Inter-College Tournaments"]
  },
  {
    id: "transport",
    title: "Safe & Punctual Transport Fleet",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    description: "A large fleet of 45+ GPS-enabled modern air-conditioned buses covering all major arteries of the metropolitan region with trained drivers and emergency safety systems.",
    features: ["GPS Live Tracking Mobile App for Parents", "Dedicated Routes Across 60+ City Points", "Speed Governors & First-Aid Equipped", "Emergency SOS & Dedicated Route Supervisors"]
  },
  {
    id: "canteen",
    title: "Multi-Cuisine Smart Cafeteria",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=800&q=80",
    description: "Hygienic, spacious dining complex serving wholesome vegetarian and non-vegetarian fare, artisanal coffees, fresh juices, and grab-and-go healthy snacks at student-friendly prices.",
    features: ["FSSAI Grade-A Certified Kitchen", "Nutritionally Balanced Daily Menus", "Contactless Digital Ordering & UPI", "Shaded Open-Air Courtyard Seating"]
  }
];

export const placementStats = [
  { value: "95%", label: "Placement Assistance Track Record", detail: "Consistently achieved across all departments" },
  { value: "100+", label: "Fortune 500 & Top Recruiting Partners", detail: "Annual on-campus placement drives" },
  { value: "500+", label: "Students Placed Each Batch", detail: "Multiple offers received by top performers" },
  { value: "10+ LPA", label: "Highest CTC Package Offered", detail: "Average annual package of ₹6.8 LPA" }
];

export const recruitingCompanies = [
  { name: "Google", category: "Tech Giant", logo: "/images/recruiters/google.svg" },
  { name: "Microsoft", category: "Software & Cloud", logo: "/images/recruiters/microsoft.svg" },
  { name: "Amazon", category: "E-Commerce & AWS", logo: "/images/recruiters/amazon.svg" },
  { name: "TCS", category: "IT & Consulting", logo: "/images/recruiters/tcs.svg" },
  { name: "Infosys", category: "Digital Services", logo: "/images/recruiters/infosys.svg" },
  { name: "Cognizant", category: "Global Technology", logo: "/images/recruiters/cognizant.svg" },
  { name: "Wipro", category: "Engineering Services", logo: "/images/recruiters/wipro.svg" },
  { name: "L&T", category: "Core Engineering", logo: "/images/recruiters/lnt.svg" },
  { name: "Deloitte", category: "Financial & Risk Advisory", logo: "/images/recruiters/deloitte.svg" },
  { name: "Cisco", category: "Networking & Security", logo: "/images/recruiters/cisco.svg" },
  { name: "Accenture", category: "Cloud & Strategy", logo: "/images/recruiters/accenture.svg" },
  { name: "Zoho", category: "SaaS & Cloud Apps", logo: "/images/recruiters/zoho.svg" }
];

export const placementTrainingSteps = [
  { step: "01", title: "Skill Diagnostic & Aptitude", desc: "Quantitative aptitude, logical reasoning, and verbal fluency baseline assessments in 1st & 2nd Year." },
  { step: "02", title: "Full-Stack & Domain Bootcamps", desc: "Intensive coding marathons in Python, Java, DSA, Cloud architecture, and VLSI tools in 3rd Year." },
  { step: "03", title: "Industry Mentorship & Internships", desc: "Mandatory 8-12 week corporate internships and real-world client sponsored capstone projects." },
  { step: "04", title: "Mock Interviews & HR Prep", desc: "One-on-one technical mock interviews conducted by corporate alumni, video resume building, and GD drills." }
];

export const galleryItems = [
  {
    id: 1,
    title: "Modern Academic Quadrangle & Main Clock Tower",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    description: "The sprawling green academic quadrangle featuring iconic architecture and Wi-Fi enabled study courtyards."
  },
  {
    id: 2,
    title: "Students Collaborating at NVIDIA AI Research Center",
    category: "Academics",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    description: "Multidisciplinary student team testing computer vision neural networks on workstation clusters."
  },
  {
    id: 3,
    title: "Annual Cultural Fest 'IGNITE' Concert Night",
    category: "Events",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    description: "Electrifying live music and cultural night witnessed by over 8,000 enthusiastic students."
  },
  {
    id: 4,
    title: "38th Annual Convocation & Graduation Ceremony",
    category: "College Functions",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
    description: "Graduates celebrating the culmination of four glorious years of innovation and learning."
  },
  {
    id: 5,
    title: "Inter-Collegiate Championship Football Finals",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",
    description: "AITS varsity football team lifting the State Championship trophy on the home turf."
  },
  {
    id: 6,
    title: "Central Digital Library Collaborative Reading Hall",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    description: "Spacious naturally illuminated reading halls open around the clock for exam preparations."
  },
  {
    id: 7,
    title: "National Smart India 36-Hour Hackathon Grand Finale",
    category: "Events",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    description: "Over 50 teams competing to solve urgent societal engineering challenges with code and hardware."
  },
  {
    id: 8,
    title: "Faculty Excellence Felicitation & National Seminar",
    category: "College Functions",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    description: "Honoring research faculty recipients of national patent grants and science council awards."
  },
  {
    id: 9,
    title: "State Badminton Indoor Courts & Fitness Zone",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80",
    description: "Wooden-floored indoor stadium accommodating badminton, table tennis, and yoga sessions."
  }
];

export const latestNews = [
  {
    id: "news-1",
    title: "AITS Secures NAAC 'A++' Accreditation with Highest Score in State",
    date: "September 12, 2026",
    category: "Accreditation",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80",
    excerpt: "The National Assessment and Accreditation Council (NAAC) has awarded Apex Institute the prestigious A++ grade with a benchmark CGPA of 3.82.",
    content: "The National Assessment and Accreditation Council (NAAC) peer team commended the institution's robust research output, state-of-the-art incubation facilities, and exceptional placement track record during the five-day comprehensive inspection. This distinction places AITS among the top 1% of autonomous technical universities nationwide."
  },
  {
    id: "news-2",
    title: "Students Win 1st Prize at National Smart India Hackathon 2026",
    date: "August 28, 2026",
    category: "Student Achievement",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    excerpt: "Team 'Apex Innovators' from the Department of AI & DS took home the gold medal and a ₹1,00,000 cash grant for an automated disaster management system.",
    content: "Developed using edge computer vision and autonomous drones, the real-time rescue tracking platform created by 3rd-year undergraduates outshone over 400 national finalists. The Ministry of Electronics & IT has invited the team to pilot the solution in coastal flood-prone districts."
  },
  {
    id: "news-3",
    title: "Strategic MoU Inked with Leading German Tech Consortium",
    date: "August 14, 2026",
    category: "Global Partnership",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    excerpt: "AITS signs bilateral exchange agreement allowing B.Tech and M.Tech students to complete a semester thesis in Munich with full scholarships.",
    content: "The partnership facilitates joint research in electric vehicle battery technologies and embedded semiconductors, along with dual-degree certification pathways for postgraduates."
  },
  {
    id: "news-4",
    title: "Campus Inaugurates Advanced 5G & IoT Open Telecom Lab",
    date: "July 30, 2026",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    excerpt: "Equipped in collaboration with telecommunication majors, the lab provides student access to live millimeter-wave testing benches.",
    content: "The facility enables students to prototype next-generation communication protocols, smart grid monitoring sensors, and autonomous vehicle telemetry."
  }
];

export const upcomingEvents = [
  {
    id: "evt-1",
    title: "IGNITE 2026 - National Inter-College Cultural & Arts Festival",
    date: "October 24 - 26, 2026",
    time: "9:00 AM – 9:00 PM",
    venue: "Main Amphitheatre & Convention Center",
    category: "Cultural Fest",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    description: "South India's premier collegiate festival featuring 40+ competitions, international music concerts, drama showcases, and celebrity guest panels."
  },
  {
    id: "evt-2",
    title: "TECH-NOVATION 2026: 36-Hour National Hackathon & Expo",
    date: "November 14 - 15, 2026",
    time: "Starts at 8:00 AM",
    venue: "Central Digital Computing Complex",
    category: "Hackathon",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    description: "Over 600 coders, designers, and innovators build solutions in Generative AI, Sustainable Energy, and Web3 with prizes worth ₹5 Lakhs."
  },
  {
    id: "evt-3",
    title: "International Conference on Advanced Computing & Robotics (ICACR)",
    date: "December 04 - 05, 2026",
    time: "9:30 AM – 5:00 PM",
    venue: "Dr. APJ Abdul Kalam Auditorium",
    category: "Academic Conference",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
    description: "Keynote addresses by researchers from MIT, IIT, and Google DeepMind. Accepted research papers published in IEEE Xplore."
  },
  {
    id: "evt-4",
    title: "Global Alumni Homecoming & Leadership Summit",
    date: "January 10, 2027",
    time: "10:00 AM – 6:00 PM",
    venue: "Apex Open Lawns & Banquet Hall",
    category: "Alumni Meet",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80",
    description: "Welcoming alumni from around the world to reconnect, mentor current students, and foster venture capital incubation."
  }
];

export const admissionsFAQ = [
  {
    question: "What is the admission procedure for B.Tech programs?",
    answer: "Admissions to B.Tech are conducted based on state engineering counseling criteria as well as institutional merit quota. Candidates must have completed 10+2 with Physics, Mathematics, and Chemistry with at least 60% aggregate marks."
  },
  {
    question: "Are merit scholarships available for outstanding students?",
    answer: "Yes! AITS provides up to 100% tuition fee waiver for state rank holders, sports achievers at national level, and students scoring above 95% in 12th standard examinations. Renewable annually based on minimum CGPA maintenance."
  },
  {
    question: "Is hostel accommodation guaranteed for outstation students?",
    answer: "Yes, dedicated hostel accommodations with comfortable furnished rooms, Wi-Fi, round-the-clock medical assistance, and dining facilities are guaranteed for all first-year outstation applicants."
  },
  {
    question: "Can I apply for multiple courses in the same application?",
    answer: "Yes, you can choose your primary course preference and list up to two alternative departments during the counseling stage without paying an additional registration fee."
  }
];

export const careerPerks = [
  {
    title: "Generous Research Grants",
    desc: "Institutional seed capital up to ₹10 Lakhs for funded research, patent filing support, and state-of-the-art lab infrastructure.",
    icon: "FlaskConical"
  },
  {
    title: "7th Pay Scale & Allowances",
    desc: "Competitive compensation package aligned with UGC / AICTE recommendations including DA, HRA, Medical Insurance, and PF.",
    icon: "Award"
  },
  {
    title: "Global Academic Conclaves",
    desc: "Annual sponsorship for international conferences, sabbatical leaves for Post-Doc fellowships, and collaborative publishing.",
    icon: "Globe2"
  },
  {
    title: "Vibrant Eco-Friendly Campus",
    desc: "45-acre lush green campus with staff quarters, sports facilities, on-campus healthcare, and subsidized childcare.",
    icon: "Sparkles"
  }
];

export const jobOpenings = [
  {
    id: "job-cse-prof",
    title: "Professor / Associate Professor – AI & Data Science",
    department: "Department of Computer Science & Engineering",
    category: "Teaching & Faculty",
    location: "Main Campus, Chennai",
    experience: "8+ Years (Ph.D. Mandatory)",
    type: "Full Time",
    postedDate: "September 12, 2026",
    deadline: "October 15, 2026",
    qualification: "Ph.D. in CSE / AI / Data Science with first class in B.Tech & M.Tech, and minimum 6 SCI/Scopus publications.",
    description: "Lead cutting-edge undergraduate and postgraduate curriculum in Deep Learning, Large Language Models, and Distributed Computing. Guide doctoral scholars, manage departmental research laboratories, and establish corporate MoUs."
  },
  {
    id: "job-ece-asst",
    title: "Assistant Professor – VLSI & Embedded Systems",
    department: "Department of Electronics & Communication",
    category: "Teaching & Faculty",
    location: "Main Campus, Chennai",
    experience: "3–5 Years",
    type: "Full Time",
    postedDate: "September 14, 2026",
    deadline: "October 20, 2026",
    qualification: "M.Tech / M.E. in VLSI / Microelectronics (Ph.D. preferred or pursuing) with strong Cadence / Synopsys EDA tool experience.",
    description: "Teach core semiconductor physics, digital ASIC design, and IoT system prototyping. Mentor student robotics clubs and assist in the development of the high-frequency electronics center."
  },
  {
    id: "job-mech-res",
    title: "Senior Research Scientist – Robotics & Autonomous Systems",
    department: "Center for Advanced Mechatronics & Industry 4.0",
    category: "Research & Labs",
    location: "Main Campus, Chennai",
    experience: "4+ Years Research",
    type: "Full Time",
    postedDate: "September 10, 2026",
    deadline: "October 18, 2026",
    qualification: "Ph.D. or Master's in Robotics / Mechatronics / Automation with demonstrable experience in ROS, SLAM, and industrial manipulators.",
    description: "Head funded research initiatives with defence and industrial partners. Supervise collaborative prototyping in the autonomous drone testing bay and 6-axis robotic arm fabrication lab."
  },
  {
    id: "job-biotech-lab",
    title: "Laboratory Technical Specialist – Genetic Engineering",
    department: "Department of Biotechnology & Biomedical Sciences",
    category: "Administrative & Technical",
    location: "Main Campus, Chennai",
    experience: "2–4 Years",
    type: "Full Time",
    postedDate: "September 08, 2026",
    deadline: "October 25, 2026",
    qualification: "M.Sc. or B.Tech in Biotechnology / Biochemistry with hands-on expertise in HPLC, PCR, Gel Electrophoresis, and cleanroom protocols.",
    description: "Maintain high-precision analytical equipment, oversee lab consumables inventory, ensure stringent biosafety standards (BSL-2), and assist faculty during practical examination sessions."
  },
  {
    id: "job-placement-lead",
    title: "Manager – Corporate Relations & Student Placement",
    department: "Career Development & Corporate Alliances Cell",
    category: "Administrative & Technical",
    location: "Main Campus, Chennai",
    experience: "5–8 Years Corporate / Campus",
    type: "Full Time",
    postedDate: "September 15, 2026",
    deadline: "October 22, 2026",
    qualification: "MBA in HR / Marketing with proven track record of placing 500+ candidates in Fortune 500 tech, consulting, and core engineering firms.",
    description: "Cultivate relationships with global tech giants, lead campus hiring drives, orchestrate leadership conclaves, and curate student technical interview readiness workshops."
  },
  {
    id: "job-digital-lib",
    title: "Digital Resources & Systems Librarian",
    department: "Central Library & Information Center",
    category: "Administrative & Technical",
    location: "Main Campus, Chennai",
    experience: "2–5 Years",
    type: "Full Time",
    postedDate: "September 05, 2026",
    deadline: "October 30, 2026",
    qualification: "M.L.I.Sc. / B.L.I.Sc. with proficiency in Koha, DSpace, IEEE Xplore, ScienceDirect consortium administration, and RFID tracking systems.",
    description: "Manage subscription databases, catalog digital e-books and dissertations, facilitate open-access repository indexing, and conduct student library orientation sessions."
  }
];

// Initial seed and configuration data for DPDP Act 2023 Compliance

export const initialCookieSettings = {
  essential: true, // Always true
  analytics: false,
  marketing: false,
  configured: false,
  timestamp: null
};

export const initialDpdpRequests = [
  {
    id: 'DPDP-2026-001',
    type: 'View My Data',
    name: 'Rohan Verma',
    email: 'rohan.v99@gmail.com',
    phone: '+91 97112 34567',
    identifier: 'M.Tech Application #2026-003',
    details: 'Requesting a summary of academic marks, entrance scores, and interview records retained in college archives.',
    date: '2026-09-18',
    status: 'Resolved',
    resolutionNote: 'Data summary packet sent securely via encrypted email.'
  },
  {
    id: 'DPDP-2026-002',
    type: 'Correct My Data',
    name: 'Priya Narayanan',
    email: 'priya.n@outlook.com',
    phone: '+91 98450 11223',
    identifier: 'UG-AIDS-2026',
    details: 'Correction of communication address and phone number entered during admission registration.',
    date: '2026-09-19',
    status: 'Under Review',
    resolutionNote: 'Awaiting submission of updated address proof.'
  },
  {
    id: 'DPDP-2026-003',
    type: 'Request Erasure',
    name: 'Deepak Chawla',
    email: 'deepak.c@alumni.lax360.edu',
    phone: '+91 98110 55443',
    identifier: 'Alumni 2022 Batch',
    details: 'Requesting deletion of temporary placement drive resume drafts and non-mandatory portal tracking logs.',
    date: '2026-09-20',
    status: 'Pending',
    resolutionNote: null
  },
  {
    id: 'DPDP-2026-004',
    type: 'Privacy Grievance',
    name: 'Sunita Mehra (Parent)',
    email: 'sunita.mehra@gmail.com',
    phone: '+91 99200 88776',
    identifier: 'Parent of B.Tech CSE Student',
    details: 'Inquiry regarding third-party event SMS alerts sent after campus cultural symposium registration.',
    date: '2026-09-21',
    status: 'Under Review',
    resolutionNote: 'Investigating third-party vendor broadcast list.'
  }
];

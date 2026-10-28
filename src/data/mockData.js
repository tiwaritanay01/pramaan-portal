// Mock Data & Regulatory Records for PRAMAAN AICTE Compliance Console

export const CURRENT_OFFICER = {
  id: 'RO-419',
  name: 'Dr. R. Sharma',
  designation: 'Scrutiny Officer • AICTE Western Regional Office (WRO)',
  region: 'Western Region (Maharashtra & Goa)',
  office: 'AICTE Regional Office, Churchgate, Mumbai - 400020',
  dscId: 'IN-CCA-GOV-99420-A1',
  avatar: 'RS',
  assignedCount: 16,
  discrepanciesCount: 2,
  approvedTodayCount: 9,
};

export const CURRENT_COLLEGE = {
  id: '1-9028341',
  name: 'Pune Institute of Technology & Research',
  aisheCode: 'C-41829',
  trustName: 'Shri Shivaji Educational & Technological Trust',
  category: 'Engineering & Technology (UG/PG)',
  address: 'Survey No. 42/1, Near IT Park, Hinjawadi, Pune, Maharashtra 411057',
  principal: 'Dr. R. K. Deshmukh',
  principalEmail: 'principal@pitr-pune.edu.in',
  principalMobile: '+91 98230 48412',
  academicCycle: '2026–27',
  approvalType: 'Annual Extension of Approval (EoA) & Intake Revision',
  submissionDate: '22 Oct 2025',
  portalIP: '103.21.58.12',
  progress: {
    total: 18,
    uploaded: 16,
    validated: 14,
    pendingReview: 2,
    actionNeeded: 2,
    percent: 89,
  },
};

export const WORKQUEUE_APPLICATIONS = [
  {
    id: 'APP-4821',
    collegeId: '1-9028341',
    collegeName: 'Pune Institute of Technology & Research',
    location: 'Pune, Maharashtra',
    region: 'Western (Mumbai)',
    course: 'Engineering & Technology (B.Tech)',
    status: 'needs_check',
    statusLabel: 'Priority Attention Required',
    statusColor: 'crimson',
    assignedAgo: '2h ago',
    problemsCount: 2,
    problemSummary: 'Land Lease Date Mismatch & 60 Extra Seats Claimed beyond master plan.',
    uploadedDocs: 16,
    totalDocs: 18,
    progressPercent: 88,
    intakeRequested: 180,
    intakeApproved: 120,
    canQuickApprove: false,
  },
  {
    id: 'APP-4819',
    collegeId: '1-9034112',
    collegeName: 'Vidya Vikas College of Architecture',
    location: 'Nashik, Maharashtra',
    region: 'Western (Mumbai)',
    course: 'Architecture & Planning (B.Arch)',
    status: 'ready_decision',
    statusLabel: 'All Checks Passed',
    statusColor: 'emerald',
    assignedAgo: '4h ago',
    problemsCount: 0,
    problemSummary: 'All 18 Papers Match Official Records • Ready to Approve',
    uploadedDocs: 18,
    totalDocs: 18,
    progressPercent: 100,
    intakeRequested: 80,
    intakeApproved: 80,
    canQuickApprove: true,
  },
  {
    id: 'APP-4815',
    collegeId: '1-9045129',
    collegeName: 'Sahyadri Institute of Management Studies',
    location: 'Pune, Maharashtra',
    region: 'Western (Mumbai)',
    course: 'Management (MBA / MMS)',
    status: 'waiting_reply',
    statusLabel: 'Waiting for College Reply',
    statusColor: 'amber',
    assignedAgo: '1d ago',
    problemsCount: 1,
    problemSummary: 'Deficiency letter issued regarding Building Completion Certificate. 5 days remaining.',
    uploadedDocs: 17,
    totalDocs: 18,
    progressPercent: 94,
    intakeRequested: 120,
    intakeApproved: 120,
    canQuickApprove: false,
  },
  {
    id: 'APP-4809',
    collegeId: '1-9012894',
    collegeName: 'Marathwada Polytechnic College',
    location: 'Chhatrapati Sambhajinagar, Maharashtra',
    region: 'Western (Mumbai)',
    course: 'Diploma Engineering',
    status: 'needs_check',
    statusLabel: 'Needs Immediate Check',
    statusColor: 'crimson',
    assignedAgo: '5h ago',
    problemsCount: 1,
    problemSummary: 'Fire Safety NOC expired on 14 Aug 2025. Mandatory valid certificate required.',
    uploadedDocs: 15,
    totalDocs: 18,
    progressPercent: 83,
    intakeRequested: 240,
    intakeApproved: 240,
    canQuickApprove: false,
  },
  {
    id: 'APP-4802',
    collegeId: '1-9067341',
    collegeName: 'Kalyan College of Pharmacy',
    location: 'Thane, Maharashtra',
    region: 'Western (Mumbai)',
    course: 'Pharmacy (B.Pharm)',
    status: 'ready_decision',
    statusLabel: 'Ready for Decision',
    statusColor: 'emerald',
    assignedAgo: '6h ago',
    problemsCount: 0,
    problemSummary: 'Pharmacy Council of India (PCI) approval linked and verified. Inspection complete.',
    uploadedDocs: 18,
    totalDocs: 18,
    progressPercent: 100,
    intakeRequested: 100,
    intakeApproved: 100,
    canQuickApprove: true,
  },
];

export const INSTITUTION_DOCUMENTS = [
  {
    id: 'DOC-01',
    category: 'Property & Title',
    name: 'Land Lease Agreement (30-Year Perpetual)',
    fileName: 'Lease_Deed_Final_Copy.pdf',
    fileSize: '4.2 MB',
    uploadedDate: '20 Oct 2025 by Registrar Office',
    status: 'needs_check',
    statusLabel: 'Discrepancy Flagged',
    statusColor: 'crimson',
    subTitle: 'Paper #REG-10492 • Sub-Registrar Haveli No. 3',
    details: 'The end date written on the uploaded lease deed indicates validity up to 31 Dec 2038, but the Maharashtra State IGR land office record shows the underlying encumbrance expires on 14 Aug 2026.',
    comparison: {
      written: '31 Dec 2038 (Changed/Altered)',
      official: '14 Aug 2026 (Expired earlier on government registry)',
      note: 'The end date on the uploaded paper does not match the official government land record.',
    },
    hasAction: true,
    actionText: 'Replace Paper or Submit Clarification',
  },
  {
    id: 'DOC-02',
    category: 'Intake Capacity',
    name: 'Student Seat Permission (University Affiliation)',
    fileName: 'SPPU_Affiliation_2026.pdf',
    fileSize: '2.8 MB',
    uploadedDate: '22 Oct 2025',
    status: 'needs_check',
    statusLabel: 'Discrepancy Flagged',
    statusColor: 'amber',
    subTitle: 'Affiliating University: Savitribai Phule Pune University (SPPU)',
    details: 'College entered 180 seats in the renewal form. However, the official SPPU university record on file confirms an approved intake of 120 seats. 60 extra seats claimed beyond approved quota.',
    comparison: {
      written: '180 Seats Requested by College',
      official: '120 Seats Approved by University',
      note: 'Provide revised university sanction letter if claiming 180 seats.',
    },
    hasAction: true,
    actionText: 'Attach Sanction Letter',
  },
  {
    id: 'DOC-03',
    category: 'Campus Safety',
    name: 'Building & Classroom Safety Certificate (Fire NOC)',
    fileName: 'Fire_Safety_NOC_PMRDA.pdf',
    fileSize: '1.9 MB',
    uploadedDate: '15 Oct 2025',
    status: 'expired',
    statusLabel: 'Needs Re-Upload',
    statusColor: 'crimson',
    subTitle: 'Authority: Pune Metropolitan Region Development Authority',
    details: 'Certificate expired on 14 Aug 2025. Council norms require safety clearance valid through at least June 2026.',
    comparison: {
      written: 'Expired on 14 Aug 2025',
      official: 'Must be valid through at least 30 June 2026',
      note: 'Upload recent renewal inspection receipt or renewed fire clearance.',
    },
    hasAction: true,
    actionText: 'Drop updated Fire Safety PDF',
  },
  {
    id: 'DOC-04',
    category: 'Academic Staff Cadre',
    name: 'Faculty & Teacher List (Format-A)',
    fileName: 'Teaching_Staff_FormatA_Signed.pdf',
    fileSize: '3.1 MB',
    uploadedDate: '19 Oct 2025',
    status: 'verified',
    statusLabel: 'Verified (Compliant)',
    statusColor: 'emerald',
    subTitle: 'AICTE Cadre Ratio Norm: 1:15 • 38 Full-time Teachers listed',
    details: '38 full-time teachers verified. All 38 faculty members have verified Aadhaar numbers and bank payroll records.',
    comparison: {
      written: '38 Full-time Teachers listed',
      official: 'Cadre ratio 1:15 strictly satisfied',
      note: '1 potential overlap detected: Prof. Aniket Joshi PAN recorded at another college. Officer review advised.',
    },
    hasAction: false,
    actionText: 'View Staff Roster',
  },
  {
    id: 'DOC-05',
    category: 'Council Regulatory Fee',
    name: 'Annual Regulatory Processing Fee Receipt',
    fileName: 'SBI_ePay_Challan_9028341.pdf',
    fileSize: '840 KB',
    uploadedDate: '18 Oct 2025',
    status: 'verified',
    statusLabel: 'Paid (Settled)',
    statusColor: 'emerald',
    subTitle: '₹1,50,000 paid via SBI e-Pay • Challan Ref: SBIEP-9028341-2026',
    details: 'Treasury transaction reconciled and credited to AICTE Central Account on 18 Oct 2025 at 14:22 IST.',
    comparison: {
      written: 'Amount: ₹1,50,000 paid',
      official: 'Treasury status: SETTLED & VERIFIED',
      note: 'Digital transaction seal confirmed.',
    },
    hasAction: false,
    actionText: 'Download Receipt',
  },
  {
    id: 'DOC-06',
    category: 'Infrastructure & Area',
    name: 'Master Building Plan & Municipal Occupancy Certificate',
    fileName: 'Municipal_Sanction_Plan_2024.pdf',
    fileSize: '8.4 MB',
    uploadedDate: '14 Oct 2025',
    status: 'verified',
    statusLabel: 'Verified (Compliant)',
    statusColor: 'emerald',
    subTitle: 'Municipal Corporation Sanction: PMC/ZONE-B/8812',
    details: '12,450 sq. meters instructional and administrative built-up area matches approved municipal drawings.',
    comparison: {
      written: '12,450 sq. meters total area',
      official: 'Exceeds minimum requirement of 9,800 sq. meters',
      note: 'Ramp and barrier-free lift accessibility certified.',
    },
    hasAction: false,
    actionText: 'View Floor Plan',
  },
];

export const DISCREPANCY_ITEMS = [
  {
    id: 'DISC-01',
    docId: 'DOC-01',
    severity: 'critical',
    title: 'Land Lease Deed Date Mismatch',
    document: 'Land Lease Agreement',
    paperRef: 'Paper #REG-10492',
    detectedDifference: {
      paperValue: '31 Dec 2038 (Altered/Overwritten)',
      registryValue: '14 Aug 2026 (Encumbrance expired on IGR record)',
    },
    description: 'The expiration date on the scanned deed has been modified to indicate 30-year validity up to 2038. State land registration records at Sub-Registrar Haveli No. 3 indicate lease rights terminate in 2026 without an executed renewal.',
    statutoryRule: 'AICTE Approval Process Handbook (APH) Chapter I, Clause 2.1: Perpetual lease or registered deed must guarantee uninterrupted possession for at least 30 years from inception.',
    suggestedAction: 'Require Sub-Registrar certified deed renewal extension or order physical title verification.',
  },
  {
    id: 'DISC-02',
    docId: 'DOC-02',
    severity: 'warning',
    title: 'Sanctioned Intake Seat Count Mismatch',
    document: 'Student Seat Permission (SPPU Affiliation)',
    paperRef: 'SPPU Letter No. CA/3819/2025',
    detectedDifference: {
      paperValue: '180 Seats Claimed in College Dossier',
      registryValue: '120 Seats Endorsed by University (SPPU)',
    },
    description: 'The college has claimed an intake capacity of 180 seats across Computer Engineering and Artificial Intelligence courses. However, Savitribai Phule Pune University official affiliation letter dated 15-Jun-2025 caps approved intake at 120 seats (60 Computer + 60 AI). The surplus 60 seats lack university concurrence.',
    statutoryRule: 'Regulation 4.3(b): Council approval cannot exceed the sanctioned affiliation strength confirmed by the affiliating state university.',
    suggestedAction: 'Approve with reduced seats (120 only) or give 7 calendar days to produce amended university sanction.',
  },
  {
    id: 'DISC-03',
    docId: 'DOC-04',
    severity: 'warning',
    title: 'Concurrent Faculty Registration Flag',
    document: 'Faculty & Teacher List (Format-A)',
    paperRef: 'Teaching Roster #FAC-2026-A',
    detectedDifference: {
      paperValue: 'Prof. Aniket Joshi (PAN: ABCPJ4912K) listed as Full-Time Professor',
      registryValue: 'Active teaching record found at Sinhgad College of Engineering, Pune',
    },
    description: 'Cross-checking against the AICTE National Faculty Database flagged a duplicate PAN match. Prof. Aniket Joshi is concurrently listed on the active teaching payroll of another affiliated college in the same academic cycle.',
    statutoryRule: 'Regulation 7.1: A full-time faculty member cannot be enrolled on the regular cadre of two institutions simultaneously.',
    suggestedAction: 'Require college to submit Form 16 and resignation/relieving letter from prior institution.',
  },
];

export const STATUTORY_DECISIONS = [
  {
    id: 'deficiency',
    label: 'Send Deficiency Letter (7 Calendar Days)',
    badge: 'Recommended',
    badgeColor: 'blue',
    headline: 'Formal notice directing the Principal to rectify discrepancies',
    description: 'Issues a formal notice directing the college Principal to upload Sub-Registrar certified deed renewal and rectifying university NOC within 7 statutory working days.',
    portalAction: 'Freeze portal window until: 24-Jul-2026 17:00 IST',
    legalReference: 'AICTE Regulations Section 4.2(d) - Opportunity of Being Heard',
    defaultLetter: `OFFICIAL STATUTORY DISPATCH
All India Council for Technical Education (AICTE)
Western Regional Office (WRO), Industrial Assurance Building, Churchgate, Mumbai - 400020

Ref: AICTE/WRO/SCRUTINY/2026/4821-DEF
Date: 28 October 2026
To: The Principal / Chairman,
    Pune Institute of Technology & Research (College ID: 1-9028341)
    Hinjawadi, Pune, Maharashtra 411057

Subject: Deficiency Memo regarding Extension of Approval (EoA) for Academic Year 2026–27.

Sir / Madam,
During the scrutiny of your online application dossier #4821, the following discrepancies were noted:

1. LAND LEASE AGREEMENT: The submitted lease deed reflects validity up to 31-Dec-2038, whereas the official Maharashtra IGR records reflect encumbrance expiring on 14-Aug-2026. Please upload a Sub-Registrar certified deed extension or non-encumbrance certificate.
2. SANCTIONED INTAKE OVERCLAIM: Your institute requested 180 seats, but Savitribai Phule Pune University (SPPU) affiliation records validate an intake of 120 seats only. Please furnish the revised university affiliation sanction letter for the claimed 60 excess seats.
3. CAMPUS SAFETY: Fire Safety NOC expired on 14-Aug-2025. Please submit valid municipal fire clearance.

You are hereby granted seven (7) calendar days up to 04-Nov-2026 (17:00 IST) to rectify the above deficiencies through the institutional portal. Failure to submit compliant documents will result in approval being granted only for validated intake of 120 seats or initiation of show-cause proceedings under Section 10(k) of the AICTE Act.

By Order of the Scrutiny Committee,
Dr. R. Sharma, Scrutiny Officer
AICTE Western Regional Office, Mumbai`,
  },
  {
    id: 'reduced_seats',
    label: 'Approve with Reduced Seats (120 Seats Only)',
    badge: 'Conditional',
    badgeColor: 'amber',
    headline: 'Authorize renewal capped strictly to university approved capacity',
    description: 'Authorizes academic approval strictly capped to 120 seats as validated by University records, truncating the surplus 60 seats under Regulation 4.3(b).',
    portalAction: 'Grants EoA with sanctioned intake: 120 seats (Computer Engg: 60, AI & Data Science: 60)',
    legalReference: 'AICTE Regulation 4.3(b) - Sanctioned Capacity Harmonization',
    defaultLetter: `STATUTORY ORDER FOR CONDITIONAL APPROVAL (REDUCED SEATS)
All India Council for Technical Education (AICTE)
Western Regional Office, Mumbai

Ref: AICTE/WRO/APPROVAL/2026/4821-COND
Date: 28 October 2026

To: Pune Institute of Technology & Research (ID: 1-9028341)

In exercise of powers conferred under AICTE Act 1987, the Council hereby accords Extension of Approval (EoA) for AY 2026–27 with REDUCED INTAKE as under:
- Computer Engineering: 60 Seats
- Artificial Intelligence & Data Science: 60 Seats
Total Approved Intake: 120 Seats (Surplus 60 seats claimed in application stand truncated due to lack of University concurrence).

Condition: Institute must submit renewed Fire Safety NOC within 30 days of this order.

Dr. R. Sharma, Scrutiny Officer
AICTE Western Regional Office`,
  },
  {
    id: 'physical_inspection',
    label: 'Depute Physical Expert Visit Committee (EVC)',
    badge: 'Field Audit',
    badgeColor: 'slate',
    headline: 'Deploy a 3-member physical committee to inspect survey pillars & labs',
    description: 'Orders a surprise 3-member physical scrutiny panel to inspect survey pillars, land demarcation registry, and computing square meters at Pune campus.',
    portalAction: 'Generates EVC mandate notice and assigns 3 verified university professors for on-site visit',
    legalReference: 'AICTE Approval Process Handbook Clause 3.4 - On-Site Verification',
    defaultLetter: `ORDER FOR CONSTITUTION OF EXPERT VISIT COMMITTEE (EVC)
All India Council for Technical Education (AICTE)
Western Regional Office, Mumbai

Ref: AICTE/WRO/EVC/2026/4821-ORD
Date: 28 October 2026

An Expert Visit Committee comprising three (3) external statutory assessors is hereby constituted to conduct physical verification of Pune Institute of Technology & Research (ID: 1-9028341):
1. Physical boundary pillar inspection and land area verification (Survey No. 42/1).
2. Live physical audit of computer laboratories and CAD workstations.
3. Physical verification of full-time faculty roster with original service books.

The committee will submit its geo-tagged digital inspection report within 48 hours of completion.

Dr. R. Sharma, Scrutiny Officer
AICTE Western Regional Office`,
  },
  {
    id: 'reject',
    label: 'Reject Application for AY 2026–27',
    badge: 'Revocation',
    badgeColor: 'crimson',
    headline: 'Summary disapproval due to material discrepancy and statutory breach',
    description: 'Summary disapproval and blacklist recommendation due to statutory non-compliance and material document discrepancy under AICTE Act Sec 10(k).',
    portalAction: 'Issues rejection notice and notifies state admission authority (DTE Maharashtra)',
    legalReference: 'AICTE Act Section 10(k) - Revocation of Institutional Approval',
    defaultLetter: `STATUTORY NOTICE OF DISAPPROVAL / REJECTION
All India Council for Technical Education (AICTE)
Western Regional Office, Mumbai

Ref: AICTE/WRO/REJECT/2026/4821-REJ
Date: 28 October 2026

To: Pune Institute of Technology & Research (ID: 1-9028341)

The application for Extension of Approval (EoA) for Academic Year 2026–27 is hereby REJECTED for the following reasons:
1. Inability to establish clean title and 30-year perpetual lease validity over campus land.
2. Material discrepancies in student seat claims and unverified safety credentials.

The Directorate of Technical Education (DTE), Govt of Maharashtra is instructed to exclude this institution from the Centralized Admission Process (CAP) 2026–27.

Dr. R. Sharma, Scrutiny Officer
AICTE Western Regional Office`,
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Colleges Upload Original Papers',
    role: 'College Desk',
    icon: 'upload_file',
    summary: 'Colleges submit digital scanned copies of land deeds, university affiliations, safety certificates, and staff lists with simple guidance in plain English.',
    details: [
      'Colleges log in with their Permanent Institute ID (PID).',
      'The portal shows clear checklists of what papers are needed and what formats are accepted.',
      'Simple alerts explain any missing files or formatting problems before final submission.',
    ],
  },
  {
    step: '02',
    title: 'Automated Record Cross-Checking',
    role: 'System Checks',
    icon: 'search_check',
    summary: 'The system automatically checks dates, seat counts, and teacher lists against official state land registries and university databases.',
    details: [
      'Checks land lease end dates against state revenue and registration records.',
      'Cross-checks requested student seats against affiliating university sanction letters.',
      'Checks faculty PAN numbers against national databases to ensure teachers are not claimed at two colleges at the same time.',
    ],
  },
  {
    step: '03',
    title: 'Split-Screen Officer Inspection',
    role: 'Officer Desk',
    icon: 'find_in_page',
    summary: 'Government scrutiny officers view the original certificate on one side and the detected differences on the other side with clear evidence diffs.',
    details: [
      'Side-by-side view saves hours of manual flipping through physical binders.',
      'Clear, plain-language highlights show where numbers or dates do not match.',
      'Officers can zoom in, check seals and stamps, and record case notes.',
    ],
  },
  {
    step: '04',
    title: 'Statutory Decision & Digital Signature',
    role: 'Decision Desk',
    icon: 'verified_user',
    summary: 'The officer chooses the appropriate legal order, reviews the automatically generated official notice, and signs it using their government digital signature (DSC).',
    details: [
      'Options include: 7-day deficiency notice, conditional approval with reduced seats, physical committee inspection, or rejection.',
      'Official letterhead dispatch is generated instantly with reference numbers and time stamps.',
      'Legally binding digital seal and QR code ensure complete accountability.',
    ],
  },
];

export const PROCESS_COMPARISON = [
  {
    feature: 'Time per Dossier',
    oldWay: '3 to 5 weeks of manual file handling and physical mailing',
    pramaanWay: 'Under 48 hours with instant discrepancy detection',
  },
  {
    feature: 'Seat Mismatch Detection',
    oldWay: 'Often missed; colleges occasionally admitted 60+ unapproved students',
    pramaanWay: 'Automatically flagged against University records before admission opens',
  },
  {
    feature: 'Duplicate Faculty Tracking',
    oldWay: 'Hard to spot; ghost teachers listed at multiple colleges across states',
    pramaanWay: 'Instant cross-match across all Indian colleges using PAN/Aadhaar seeds',
  },
  {
    feature: 'Discrepancy Communication',
    oldWay: 'Physical courier letters taking days or lost in transit',
    pramaanWay: 'Instant digital deficiency letter with 7-day countdown and email delivery',
  },
  {
    feature: 'Audit Trail & Transparency',
    oldWay: 'Paper notes subject to loss or unauthorized tampering',
    pramaanWay: 'Full digital signature (DSC) records and tamper-evident QR certificates',
  },
];

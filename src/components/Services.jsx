import { useState, useEffect, useRef, Fragment } from 'react'
import './services.css'

function SvgIcon({ type }) {
  const paths = {
    phone: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.99 12 19.79 19.79 0 011.93 3.46 2 2 0 013.91 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />,
    pin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></>,
    list: <><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></>,
    lock: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></>,
    bike: <><circle cx="5.5" cy="17.5" r="3.5" /><circle cx="18.5" cy="17.5" r="3.5" /><path d="M15 6h-4l-2 6h10l-1.5-4.5" /><path d="M15 6l1.5 4.5" /><circle cx="15" cy="4" r="1" /></>,
    bolt: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    syringe: <><path d="M18 2l4 4" /><path d="M2 22l5-5" /><path d="M14 6l-8 8 4 4 8-8-4-4z" /><path d="M9.5 14.5l1 1" /></>,
    users: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></>,
    home: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>,
    snowflake: <><line x1="12" y1="2" x2="12" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></>,
    heart: <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />,
    radio: <><circle cx="12" cy="12" r="2" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></>,
    flask: <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11l-4 5h14l-4-5V3" />,
    headphone: <><path d="M3 18v-6a9 9 0 0118 0v6" /><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" /></>,
    truck: <><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>,
    chart: <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>,
    clipboard: <><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></>,
    mic: <><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></>,
    star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {paths[type] || null}
    </svg>
  )
}

const services = [
  {
    id: '01', name: 'Rider App', nameParts: ['Rider ', 'App'],
    tagline: 'Smart. Connected. Always On-Field.',
    theme: 'dark',
    stats: [
      { value: '2,500', sup: '+', label: 'ACTIVE RIDERS' },
      { value: '120', sup: '+', label: 'CITIES LIVE' },
      { value: '15', sup: 'min', label: 'AVG RESPONSE' },
      { value: '99.9', sup: '%', label: 'UPTIME' },
    ],
    journeyLabel: 'RIDER JOURNEY',
    journey: [
      { label: 'Login', desc: 'Rider logs into the app' },
      { label: 'Task Received', desc: 'Auto-assigned pickup' },
      { label: 'Navigate', desc: 'GPS-based route' },
      { label: 'Pickup', desc: 'Sample collected' },
      { label: 'In Transit', desc: 'Live location tracked' },
      { label: 'Handover', desc: 'Delivered to hub or lab' },
    ],
    reasons: [
      { label: 'GPS-enabled live tracking', desc: 'Visibility on every rider, every minute.' },
      { label: 'Auto task assignment', desc: 'No manual dispatch, no missed pickups.' },
      { label: 'Offline-friendly', desc: 'Works in low-network zones, syncs on reconnect.' },
      { label: 'Integrated handover', desc: 'Digital chain-of-custody confirmation.' },
      { label: 'Real-time updates', desc: 'Clients notified at every stage.' },
    ],
    highlights: [
      { icon: 'phone', label: 'Smart App', desc: 'Built for riders on the move' },
      { icon: 'pin', label: 'Live Tracking', desc: 'GPS location in real time' },
      { icon: 'list', label: 'Task Control', desc: 'Manage all assignments' },
      { icon: 'lock', label: 'Secure Access', desc: 'Role-based authentication' },
    ],
    industries: ['Hospitals', 'Diagnostic Labs', 'Pharma', 'Logistics Partners'],
  },
  {
    id: '02', name: 'Field Executives (Bikers)', nameParts: ['Field Executives ', '(Bikers)'],
    tagline: 'Fast. Reliable. Everywhere in India.',
    theme: 'light',
    stats: [
      { value: '1,350', sup: '+', label: 'TRAINED BIKERS' },
      { value: '120', sup: '+', label: 'CITIES COVERED' },
      { value: '30', sup: 'min', label: 'AVG RESPONSE' },
      { value: '100', sup: '%', label: 'VERIFIED TEAM' },
    ],
    journeyLabel: 'FIELD JOURNEY',
    journey: [
      { label: 'Request', desc: 'Client raises pickup' },
      { label: 'Dispatch', desc: 'Nearest biker assigned' },
      { label: 'Arrival', desc: 'Reach location via GPS' },
      { label: 'Pickup', desc: 'Package or sample collected' },
      { label: 'Transit', desc: 'Live tracking enabled' },
      { label: 'Delivered', desc: 'Drop confirmed digitally' },
    ],
    reasons: [
      { label: '1,350+ vetted bikers', desc: 'Every rider trained on handling protocols.' },
      { label: 'Pan-India coverage', desc: '120+ cities, one dashboard, one SLA.' },
      { label: 'GPS-based nearest dispatch', desc: 'Closest available rider, every time.' },
      { label: 'Same-day pickup & delivery', desc: 'Intra-city under four hours.' },
      { label: 'Live shipment tracking', desc: 'Visibility for sender and recipient.' },
    ],
    highlights: [
      { icon: 'bike', label: 'Fleet of Bikers', desc: 'Territory-based coverage' },
      { icon: 'pin', label: 'GPS Dispatch', desc: 'Nearest rider allocation' },
      { icon: 'bolt', label: 'Fast Response', desc: 'Quick turnaround' },
      { icon: 'shield', label: 'Verified Staff', desc: 'Background-checked team' },
    ],
    industries: ['Hospitals', 'Diagnostic Labs', 'Corporates', 'Pharma'],
  },
  {
    id: '03', name: 'Phlebotomist Services', nameParts: ['Phlebotomist ', 'Services'],
    tagline: 'Certified. Precise. Patient-First.',
    theme: 'dark',
    stats: [
      { value: '1,550', sup: '+', label: 'PHLEBOTOMISTS' },
      { value: '200', sup: '+', label: 'CITIES COVERED' },
      { value: '98', sup: '%', label: 'SAMPLE INTEGRITY' },
      { value: '24', sup: '/7', label: 'AVAILABILITY' },
    ],
    journeyLabel: 'COLLECTION JOURNEY',
    journey: [
      { label: 'Booking', desc: 'Patient schedules appointment' },
      { label: 'Assignment', desc: 'Nearest phlebotomist dispatched' },
      { label: 'Arrival', desc: 'Reaches patient within SLA' },
      { label: 'Collection', desc: 'Blood/urine sample drawn' },
      { label: 'Packaging', desc: 'Temperature-controlled storage' },
      { label: 'Lab Dispatch', desc: 'Sample delivered to lab' },
    ],
    reasons: [
      { label: 'Certified professionals', desc: 'NABL-guideline trained and assessed.' },
      { label: 'Temperature-controlled kits', desc: 'Samples preserved from collection to lab.' },
      { label: 'Minimal patient discomfort', desc: 'Expert technique, every draw.' },
      { label: 'Pan-India coverage', desc: '1,550+ phlebotomists across major cities.' },
      { label: 'Digital chain of custody', desc: 'Tracked, timestamped handovers.' },
    ],
    highlights: [
      { icon: 'syringe', label: 'Sample Collection', desc: 'At home or on-site' },
      { icon: 'snowflake', label: 'Cold Packaging', desc: 'Temperature maintained' },
      { icon: 'clipboard', label: 'NABL Compliant', desc: 'Standard procedures' },
      { icon: 'shield', label: 'Certified Staff', desc: 'Vetted and trained' },
    ],
    industries: ['Hospitals', 'Diagnostic Labs', 'Clinical Research', 'Pharma'],
  },
  {
    id: '04', name: 'Man Power Outsourcing', nameParts: ['Man Power ', 'Outsourcing'],
    tagline: 'Vetted. Skilled. Ready to Deploy.',
    theme: 'light',
    stats: [
      { value: '500', sup: '+', label: 'DEPLOYED STAFF' },
      { value: '48', sup: 'hr', label: 'AVG DEPLOYMENT' },
      { value: '100', sup: '%', label: 'BG VERIFIED' },
      { value: '15', sup: '+', label: 'SPECIALIZATIONS' },
    ],
    journeyLabel: 'STAFFING JOURNEY',
    journey: [
      { label: 'Requirement', desc: 'Client defines role & skills' },
      { label: 'Sourcing', desc: 'We identify candidates' },
      { label: 'Vetting', desc: 'Background & skill check' },
      { label: 'Training', desc: 'Role-specific preparation' },
      { label: 'Deployment', desc: 'Staff placed at client site' },
      { label: 'Monitoring', desc: 'Ongoing performance tracking' },
    ],
    reasons: [
      { label: 'Healthcare-focused talent', desc: 'Candidates from pharma, labs & clinics.' },
      { label: 'Rigorous background checks', desc: 'Every candidate verified before placement.' },
      { label: 'Emergency deployment', desc: 'Staff available on short notice.' },
      { label: 'Flexible contracts', desc: 'Short-term, long-term, or project-based.' },
      { label: 'Post-placement support', desc: 'Ongoing management and feedback.' },
    ],
    highlights: [
      { icon: 'users', label: 'Talent Pool', desc: 'Healthcare-trained staff' },
      { icon: 'shield', label: 'Verified', desc: 'Background-checked team' },
      { icon: 'bolt', label: 'Fast Placement', desc: 'Deploy within 48 hours' },
      { icon: 'star', label: 'Specialized', desc: 'Role-specific training' },
    ],
    industries: ['Hospitals', 'Diagnostic Labs', 'Pharma', 'Clinical Research'],
  },
  {
    id: '05', name: 'Home Collection', nameParts: ['Home ', 'Collection'],
    tagline: 'Doorstep Diagnostics. Lab-Grade Accuracy.',
    theme: 'dark',
    stats: [
      { value: '278', sup: '+', label: 'COLLECTION CENTRES' },
      { value: '150', sup: '+', label: 'CITIES COVERED' },
      { value: '2', sup: 'hr', label: 'RESPONSE TIME' },
      { value: '99', sup: '%', label: 'ON-TIME RATE' },
    ],
    journeyLabel: 'COLLECTION JOURNEY',
    journey: [
      { label: 'Booking', desc: 'Patient books via app or call' },
      { label: 'Assignment', desc: 'Nearest executive assigned' },
      { label: 'Home Visit', desc: 'Executive arrives at home' },
      { label: 'Collection', desc: 'Sample collected safely' },
      { label: 'Dispatch', desc: 'Sent to partner lab' },
      { label: 'Report', desc: 'Result delivered digitally' },
    ],
    reasons: [
      { label: '278+ collection centres', desc: 'Widest doorstep reach in India.' },
      { label: 'Bedridden patient support', desc: 'We come to you, wherever you are.' },
      { label: 'Partner lab accuracy', desc: 'Samples tested at accredited labs.' },
      { label: 'Digital report delivery', desc: 'Reports sent to your phone or email.' },
      { label: 'Strict hygiene protocols', desc: 'PPE-compliant, sterile equipment.' },
    ],
    highlights: [
      { icon: 'home', label: 'Home Visit', desc: 'Doorstep collection' },
      { icon: 'flask', label: 'Lab Partner', desc: 'Accredited analysis' },
      { icon: 'clipboard', label: 'Digital Report', desc: 'Instant result sharing' },
      { icon: 'shield', label: 'Safe & Hygienic', desc: 'PPE-compliant process' },
    ],
    industries: ['Patients', 'Hospitals', 'Diagnostic Labs', 'Corporates'],
  },
  {
    id: '06', name: 'Cold Chain Logistics', nameParts: ['Cold Chain ', 'Logistics'],
    tagline: 'Temperature-Controlled. End-to-End.',
    theme: 'light',
    stats: [
      { value: '35', sup: '+', label: 'AIR ROUTES' },
      { value: '2–8', sup: '°C', label: 'MAINTAINED RANGE' },
      { value: '100', sup: '%', label: 'DATA LOGGED' },
      { value: '24', sup: '/7', label: 'MONITORING' },
    ],
    journeyLabel: 'COLD CHAIN JOURNEY',
    journey: [
      { label: 'Intake', desc: 'Sample received at hub' },
      { label: 'Packaging', desc: 'Pharma-grade cold box' },
      { label: 'Pickup', desc: 'Temperature-verified dispatch' },
      { label: 'Transit', desc: 'Real-time temp monitoring' },
      { label: 'Check-in', desc: 'Midpoint verification' },
      { label: 'Handover', desc: 'Certified cold delivery' },
    ],
    reasons: [
      { label: 'Real-time temp monitoring', desc: 'Data logged every 15 minutes.' },
      { label: 'International standards', desc: 'WHO GDP & IATA P650 certified.' },
      { label: 'Pharma-grade packaging', desc: 'Qualified thermal shippers used.' },
      { label: '35+ air routes', desc: 'Pan-India and international coverage.' },
      { label: 'Audit-ready data logs', desc: 'Full chain-of-custody documentation.' },
    ],
    highlights: [
      { icon: 'snowflake', label: 'Cold Storage', desc: 'Temp maintained in transit' },
      { icon: 'truck', label: 'Fleet Ready', desc: 'Refrigerated vehicles' },
      { icon: 'chart', label: 'Data Logged', desc: 'Every shipment monitored' },
      { icon: 'shield', label: 'Compliant', desc: 'WHO & IATA standards' },
    ],
    industries: ['Pharma', 'Diagnostic Labs', 'Hospitals', 'Clinical Research'],
  },
  {
    id: '07', name: 'Corporate Health', nameParts: ['Corporate ', 'Health'],
    tagline: 'Healthier Teams. Higher Performance.',
    theme: 'dark',
    stats: [
      { value: '200', sup: '+', label: 'CORPORATES SERVED' },
      { value: '20', sup: '%', label: 'PRODUCTIVITY LIFT' },
      { value: '10', sup: '+', label: 'WELLNESS PROGRAMS' },
      { value: '50k', sup: '+', label: 'EMPLOYEES COVERED' },
    ],
    journeyLabel: 'WELLNESS JOURNEY',
    journey: [
      { label: 'Assessment', desc: 'Workforce health audit' },
      { label: 'Planning', desc: 'Custom program designed' },
      { label: 'Scheduling', desc: 'Camps booked at site' },
      { label: 'Execution', desc: 'On-site health drive' },
      { label: 'Reporting', desc: 'Health data analytics' },
      { label: 'Follow-up', desc: 'Ongoing wellness support' },
    ],
    reasons: [
      { label: 'Boosts productivity by 20%', desc: 'Healthy teams work better.' },
      { label: 'Reduces absenteeism', desc: 'Preventive care cuts sick days.' },
      { label: 'CSR-aligned initiatives', desc: 'Strengthens employer brand.' },
      { label: 'Full wellness spectrum', desc: 'Physical, mental, and nutritional care.' },
      { label: 'Data-driven outcomes', desc: 'Analytics to track team health trends.' },
    ],
    highlights: [
      { icon: 'heart', label: 'Wellness Camps', desc: 'On-site health drives' },
      { icon: 'chart', label: 'Analytics', desc: 'Employee health data' },
      { icon: 'users', label: 'Team Coverage', desc: 'Entire workforce' },
      { icon: 'star', label: 'CSR Aligned', desc: 'Corporate responsibility' },
    ],
    industries: ['Corporates', 'Manufacturing', 'IT Companies', 'PSUs'],
  },
  {
    id: '08', name: 'Onsite Radiology Services', nameParts: ['Onsite Radiology ', 'Services'],
    tagline: 'Full Radiology Suite. Zero Infrastructure Headache.',
    theme: 'light',
    stats: [
      { value: '3', sup: '+', label: 'MODALITIES' },
      { value: '24', sup: '/7', label: 'AVAILABILITY' },
      { value: '100', sup: '%', label: 'IT-ENABLED' },
      { value: '50', sup: '+', label: 'PARTNER HOSPITALS' },
    ],
    journeyLabel: 'RADIOLOGY JOURNEY',
    journey: [
      { label: 'Onboarding', desc: 'Equipment installed on-site' },
      { label: 'Staffing', desc: 'Expert team assigned' },
      { label: 'Scheduling', desc: 'Patient queue managed' },
      { label: 'Imaging', desc: 'Scan performed on-site' },
      { label: 'Reporting', desc: 'Radiologist reads image' },
      { label: 'Delivery', desc: 'Report sent to clinician' },
    ],
    reasons: [
      { label: 'Ultrasound, X-ray & CT scan', desc: 'Full suite under one contract.' },
      { label: 'Expert radiologist on-site', desc: 'No need to hire specialists.' },
      { label: '24×7 availability', desc: 'Round-the-clock imaging services.' },
      { label: 'IT-enabled workflows', desc: 'PACS and reporting integrated.' },
      { label: 'Zero capex for hospitals', desc: 'Equipment and staff — all included.' },
    ],
    highlights: [
      { icon: 'radio', label: 'CT / X-Ray', desc: 'Full imaging suite' },
      { icon: 'users', label: 'Expert Team', desc: 'Radiologist included' },
      { icon: 'clipboard', label: 'PACS Reports', desc: 'IT-enabled workflow' },
      { icon: 'shield', label: 'QA Assured', desc: 'Standardized protocols' },
    ],
    industries: ['Hospitals', 'Government Health', 'Clinics', 'Nursing Homes'],
  },
  {
    id: '09', name: 'Lab Technician', nameParts: ['Lab ', 'Technician'],
    tagline: 'Skilled. Certified. Lab-Ready.',
    theme: 'dark',
    stats: [
      { value: '300', sup: '+', label: 'LAB TECHNICIANS' },
      { value: '48', sup: 'hr', label: 'PLACEMENT TIME' },
      { value: '100', sup: '%', label: 'QUALIFIED STAFF' },
      { value: '20', sup: '+', label: 'SPECIALIZATIONS' },
    ],
    journeyLabel: 'PLACEMENT JOURNEY',
    journey: [
      { label: 'Requirement', desc: 'Lab defines skill needs' },
      { label: 'Shortlisting', desc: 'Matching candidates found' },
      { label: 'Assessment', desc: 'Technical skills tested' },
      { label: 'Verification', desc: 'Credentials confirmed' },
      { label: 'Placement', desc: 'Technician deployed' },
      { label: 'Support', desc: 'Ongoing performance review' },
    ],
    reasons: [
      { label: 'Recognized qualifications', desc: 'DMLT, MLT, and B.Sc Med Lab certified.' },
      { label: 'Advanced equipment training', desc: 'Ready for modern lab instruments.' },
      { label: 'Temporary & permanent roles', desc: 'Flexible staffing on your terms.' },
      { label: 'Specialist outsourcing', desc: 'Full lab staffing if needed.' },
      { label: 'No downtime guaranteed', desc: 'Backup staff always on standby.' },
    ],
    highlights: [
      { icon: 'flask', label: 'Lab Ready', desc: 'Instrument-trained staff' },
      { icon: 'clipboard', label: 'Certified', desc: 'DMLT / MLT qualified' },
      { icon: 'bolt', label: 'Fast Deploy', desc: 'Within 48 hours' },
      { icon: 'users', label: 'Flexible', desc: 'Temp or permanent roles' },
    ],
    industries: ['Diagnostic Labs', 'Hospitals', 'Pathology Centres', 'Pharma'],
  },
  {
    id: '10', name: 'Customer Care Setup', nameParts: ['Customer Care ', 'Setup'],
    tagline: 'Multi-Channel. Data-Driven. Always On.',
    theme: 'light',
    stats: [
      { value: '24', sup: '/7', label: 'SUPPORT HOURS' },
      { value: '5', sup: '+', label: 'CHANNELS' },
      { value: '98', sup: '%', label: 'RESOLUTION RATE' },
      { value: '100', sup: '%', label: 'CALL RECORDED' },
    ],
    journeyLabel: 'SETUP JOURNEY',
    journey: [
      { label: 'Audit', desc: 'Current CX gaps assessed' },
      { label: 'Design', desc: 'Custom setup planned' },
      { label: 'Install', desc: 'IT infrastructure deployed' },
      { label: 'Training', desc: 'Agents trained and briefed' },
      { label: 'Launch', desc: 'System goes live' },
      { label: 'Analytics', desc: 'Performance monitored' },
    ],
    reasons: [
      { label: 'Multi-channel communication', desc: 'Voice, email, chat, and WhatsApp.' },
      { label: 'Call recording & analytics', desc: 'Identify gaps and improve CX.' },
      { label: 'Trained CX executives', desc: 'Healthcare-aware support staff.' },
      { label: 'Full setup & commissioning', desc: 'End-to-end installation by us.' },
      { label: 'Scalable infrastructure', desc: 'Grows with your business.' },
    ],
    highlights: [
      { icon: 'headphone', label: 'Multi-Channel', desc: 'Voice, chat, email' },
      { icon: 'mic', label: 'Call Recording', desc: 'Full audit trail' },
      { icon: 'chart', label: 'Analytics', desc: 'CX performance data' },
      { icon: 'users', label: 'Trained Agents', desc: 'Healthcare-ready team' },
    ],
    industries: ['Diagnostic Labs', 'Hospitals', 'Pharma', 'Healthcare Startups'],
  },
]

export const serviceSections = services.map(s => s.name)

function ServiceSection({ service }) {
  return (
    <div className={`sv-sec sv-sec--${service.theme}`}>

      {/* Header */}
      <div className="sv-sec__header">
        <span className="sv-sec__badge">
          · SERVICE {service.id} — {service.name.toUpperCase()}
        </span>
        <h2 className="sv-sec__title">
          {service.nameParts[0]}<em>{service.nameParts[1]}</em>
        </h2>
        <p className="sv-sec__tagline">{service.tagline}</p>
      </div>

      {/* Stats */}
      <div className="sv-sec__stats-rail">
        {service.stats.map((s, i) => (
          <div key={i} className="sv-stat">
            <div className="sv-stat__val">
              {s.value}<sup>{s.sup}</sup>
            </div>
            <div className="sv-stat__label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Journey */}
      <div className="sv-sec__journey">
        <span className="sv-sec__journey-label">{service.journeyLabel}</span>
        <div className="sv-timeline">
          {service.journey.map((step, i) => (
            <div key={i} className={`sv-step ${i < 4 ? 'sv-step--lit' : 'sv-step--dim'}`}>
              <div className="sv-step__node">
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="sv-step__label">{step.label}</div>
              <div className="sv-step__desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom cards */}
      <div className="sv-sec__cards">

        {/* Reasons */}
        <div className="sv-panel">
          <p className="sv-panel__tag">WHY CHOOSE CREDENT</p>
          <h3 className="sv-panel__heading">
            Five reasons to <em>pick us</em>.
          </h3>
          <ol className="sv-reasons">
            {service.reasons.map((r, i) => (
              <li key={i} className="sv-reason">
                <span className="sv-reason__num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div className="sv-reason__label">{r.label}</div>
                  <div className="sv-reason__desc">{r.desc}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Highlights */}
        <div className="sv-panel">
          <p className="sv-panel__tag">SERVICE KEY HIGHLIGHTS</p>
          <h3 className="sv-panel__heading">
            What you get, <em>out of the box</em>.
          </h3>
          <div className="sv-highlights">
            {service.highlights.map((h, i) => (
              <div key={i} className="sv-hl">
                <div className="sv-hl__icon"><SvgIcon type={h.icon} /></div>
                <div className="sv-hl__label">{h.label}</div>
                <div className="sv-hl__desc">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="sv-panel">
          <p className="sv-panel__tag">INDUSTRIES WE SERVE</p>
          <h3 className="sv-panel__heading">
            Where we <em>show up</em>.
          </h3>
          <ul className="sv-industries">
            {service.industries.map((ind, i) => (
              <li key={i} className="sv-industry">
                <span className="sv-industry__num">/ {String(i + 1).padStart(2, '0')}</span>
                <span className="sv-industry__dot">•</span>
                <span>{ind}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default function Services({ initialSection }) {
  const [activeId, setActiveId] = useState(services[0].id)
  const sectionRefs = useRef({})

  useEffect(() => {
    const handleScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.45
      let best = services[0].id
      let bestDist = Infinity
      services.forEach(s => {
        const el = sectionRefs.current[s.id]
        if (!el) return
        const top = el.getBoundingClientRect().top + window.scrollY
        const dist = Math.abs(top - mid)
        if (dist < bestDist) { bestDist = dist; best = s.id }
      })
      setActiveId(best)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!initialSection) return
    const service = services.find(s => s.name === initialSection)
    if (service) setTimeout(() => scrollTo(service.id), 120)
  }, [initialSection])

  const scrollTo = (id) => {
    const el = sectionRefs.current[id]
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 64
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const activeIdx = services.findIndex(s => s.id === activeId)

  return (
    <div className="sv-wrap">

      {/* ── Sidebar ── */}
      <aside className="sv-sidebar">
        <div className="sv-sidebar__logo">
          <div className="sv-sidebar__logo-box">C3</div>
          <div>
            <div className="sv-sidebar__logo-name">Credent</div>
            <div className="sv-sidebar__logo-sub">CONNECT · CARE</div>
          </div>
        </div>

        <div className="sv-sidebar__rule" />
        <p className="sv-sidebar__section-label">ALL SERVICES</p>

        <nav className="sv-sidebar__nav">
          {services.map((s) => (
            <button
              key={s.id}
              className={`sv-nav-btn ${activeId === s.id ? 'sv-nav-btn--active' : ''}`}
              onClick={() => scrollTo(s.id)}
            >
              <span className="sv-nav-btn__num">{s.id}</span>
              <span className="sv-nav-btn__label">{s.name}</span>
              {activeId === s.id && <span className="sv-nav-btn__arrow">›</span>}
            </button>
          ))}
        </nav>

        <div className="sv-sidebar__footer">
          <span>Progress</span>
          <span className="sv-sidebar__prog-val">
            {String(activeIdx + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
          </span>
        </div>
      </aside>

      {/* ── Main content ── */}
      <main className="sv-main">
        {services.map((service, idx) => (
          <Fragment key={service.id}>
            {/* Zero-height sentinel — stays in normal flow, reports true document offset */}
            <div ref={el => { sectionRefs.current[service.id] = el }} style={{ height: 0 }} />
            <div style={{ position: 'sticky', top: '64px', zIndex: idx + 1 }}>
              <ServiceSection service={service} />
            </div>
          </Fragment>
        ))}
      </main>

    </div>
  )
}

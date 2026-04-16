import './ProductsPage.css'

const products = [
  {
    id: 'hrms',
    name: 'C3 HRMS',
    tagline: 'Smart HR toolkit for distributed healthcare workforce management',
    color: '#1a3a6b',
    gradient: 'linear-gradient(135deg, #1a3a6b 0%, #0d2648 100%)',
    features: [
      'Digital employee onboarding & documentation',
      'Geo-fencing & GPS-validated attendance',
      'Auto shift & roster management',
      'Asset allocation & field task tracking',
      'Leave management & regularization workflows',
      'Mobile dashboards for HR and managers',
    ],
    stats: [
      { value: '1900+', label: 'Onboarded' },
      { value: '100%', label: 'Geo-compliance' },
      { value: '30%', label: 'Time saved' },
    ],
  },
  {
    id: 'post',
    name: 'C3 POST',
    tagline: 'Smart courier aggregator for healthcare & e-commerce logistics',
    color: '#00a878',
    gradient: 'linear-gradient(135deg, #00c48c 0%, #007f60 100%)',
    features: [
      '23,000+ pin codes — widest India reach',
      'Cold-chain enabled healthcare delivery',
      'Multi-carrier: Shadowfax, Delhivery, DTDC, eKart',
      'Shopify, WooCommerce, Amazon, Magento integration',
      'Automated NDR — 20% reduction in RTOs',
      'Pay-as-you-go, no subscription or hidden charges',
    ],
    stats: [
      { value: '23K+', label: 'Pincodes' },
      { value: '20%', label: 'RTO reduction' },
      { value: '6+', label: 'Carriers' },
    ],
  },
  {
    id: 'cng',
    name: 'ConnectNGrow',
    tagline: "India's job & training portal for frontline healthcare workers",
    color: '#2563eb',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    features: [
      'Jobs in phlebotomy, nursing, logistics & more',
      'Virtual & physical certified training programs',
      'Structured courses by industry experts',
      'Track applications, certifications & growth',
      'Soft skills & compliance training for field staff',
      'C3-verified employers for trusted job listings',
    ],
    stats: [
      { value: '5', label: 'Role types' },
      { value: 'Pan', label: 'India' },
      { value: 'Cert.', label: 'Programs' },
    ],
  },
  {
    id: 'alltrak',
    name: 'AllTrak',
    tagline: 'Real-time shipment visibility & last-mile tracking for healthcare logistics',
    color: '#b45309',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
    features: [
      'Live GPS tracking for every shipment & rider',
      'Automated ETA updates via SMS & WhatsApp',
      'Digital proof of delivery with photo & OTP',
      'Exception alerts for delays, diversions & SLA breach',
      'Chain-of-custody logs for regulatory compliance',
      'Unified dashboard across all delivery partners',
    ],
    stats: [
      { value: '99.2%', label: 'On-time rate' },
      { value: '15 min', label: 'Avg. alert lag' },
      { value: '500K+', label: 'Trips tracked' },
    ],
  },
  {
    id: 'wellness',
    name: 'C3 Wellness',
    tagline: 'Corporate & community wellness programs powered by Credent\'s field network',
    color: '#0891b2',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0369a1 100%)',
    features: [
      'On-site health camps & preventive screening drives',
      'At-home phlebotomy & sample collection booking',
      'Dedicated wellness coordinator per account',
      'Digital health reports with doctor tele-consultation',
      'Annual health check packages for corporates & schools',
      'COVID, flu & vaccination drive management',
    ],
    stats: [
      { value: '200+', label: 'Corporates' },
      { value: '1.2L+', label: 'Lives covered' },
      { value: '40+', label: 'Tests offered' },
    ],
  },
  {
    id: 'hcjobs',
    name: 'Healthcare Jobs',
    tagline: 'Specialised recruitment platform for India\'s frontline healthcare workforce',
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    features: [
      'Curated listings for phlebotomists, nurses & paramedics',
      'Instant background & certificate verification',
      'AI-powered candidate–job matching engine',
      'Interview scheduling & offer letter automation',
      'Skill-gap assessment before placement',
      'Post-placement support & 90-day retention tracking',
    ],
    stats: [
      { value: '8K+', label: 'Active jobs' },
      { value: '92%', label: 'Placement rate' },
      { value: '30 days', label: 'Avg. hire time' },
    ],
  },
  {
    id: 'retail',
    name: 'C3 Retail',
    tagline: 'Managed collection-centre network for diagnostic labs & retail healthcare',
    color: '#be185d',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #9d174d 100%)',
    features: [
      'Plug-and-play collection centre setup & operations',
      'Standardised SOP training for collection staff',
      'Inventory management for consumables & kits',
      'Integrated LIS connectivity with 20+ lab systems',
      'Patient appointment booking & queue management',
      'Revenue-sharing model — zero upfront investment',
    ],
    stats: [
      { value: '350+', label: 'Centres' },
      { value: '20+', label: 'LIS integrations' },
      { value: '18 states', label: 'Coverage' },
    ],
  },
]

export default function ProductsPage({ onNavigate }) {
  return (
    <div className="ppage">
      {/* Hero header */}
      <div className="ppage__header">
        <span className="ppage__badge">Digital Products</span>
        <h1 className="ppage__title">
          Seven Platforms, <span className="ppage__accent">One Ecosystem</span>
        </h1>
        <p className="ppage__sub">
          Proprietary technology products that power Credent's operations —<br />
          and are available to partner organisations.
        </p>
        <div className="ppage__divider" />
      </div>

      {/* Cards */}
      <div className="ppage__grid">
        {products.map((p) => (
          <div key={p.id} className="pcard">
            {/* Coloured header band */}
            <div className="pcard__head" style={{ background: p.gradient }}>
              <h2 className="pcard__name">{p.name}</h2>
              <p className="pcard__tagline">{p.tagline}</p>
              <div className="pcard__blob" />
            </div>

            {/* Features */}
            <ul className="pcard__features">
              {p.features.map((f) => (
                <li key={f}>
                  <span className="pcard__check" style={{ color: p.color }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="pcard__stats">
              {p.stats.map((s) => (
                <div key={s.label} className="pcard__stat">
                  <span className="pcard__stat-value" style={{ color: p.color }}>{s.value}</span>
                  <span className="pcard__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

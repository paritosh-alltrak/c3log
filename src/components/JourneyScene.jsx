import './JourneyScene.css'

const labPartners = [
  'Dr Lal PathLabs', 'Apollo', 'Max Healthcare',
  'Metropolis Labs', 'Redcliffe', 'Thyrocare',
  'Agilus Diagnostics', 'Suburban Diagnostics', 'Reliance Health',
]

export default function JourneyScene() {
  return (
    <section className="js-section">
      <div className="js-section__header">
        <p className="section-label">The journey we run</p>
        <h2 className="js-section__title">Your sample. Our phlebotomist.</h2>
        <p className="js-section__sub">One journey. One result.</p>
      </div>

      <div className="js-scene">
        {/* ── Sky / background ── */}
        <div className="js-sky" />

        {/* ── Buildings ── */}

        {/* HOME building */}
        <div className="js-building js-building--home">
          <div className="js-building__roof" />
          <div className="js-building__body">
            <div className="js-home-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f8ef7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
                <path d="M9 21V12h6v9"/>
              </svg>
            </div>
          </div>
          <div className="js-building__label">HOME</div>
        </div>

        {/* Mid city buildings */}
        <div className="js-building js-building--b1">
          <div className="js-building__accent-line" />
          <div className="js-building__body">
            <div className="js-windows js-windows--3x4" />
          </div>
        </div>

        <div className="js-building js-building--b2">
          <div className="js-building__accent-line" />
          <div className="js-building__body">
            <div className="js-windows js-windows--2x5" />
          </div>
        </div>

        <div className="js-building js-building--b3">
          <div className="js-building__accent-line" />
          <div className="js-building__body">
            <div className="js-windows js-windows--3x3" />
          </div>
        </div>

        <div className="js-building js-building--b4">
          <div className="js-building__body">
            <div className="js-windows js-windows--2x3" />
          </div>
        </div>

        {/* LAB RECEPTION building */}
        <div className="js-building js-building--lab">
          <div className="js-lab-cross">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#4f8ef7">
              <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/>
              <path d="M12 8v8M8 12h8" stroke="#0a0f1e" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="js-building__body js-lab-body">
            <div className="js-lab-grid">
              {labPartners.map((p) => (
                <div key={p} className="js-lab-chip">{p}</div>
              ))}
            </div>
          </div>
          <div className="js-building__label js-lab-label">LAB RECEPTION</div>
        </div>

        {/* ── Ground ── */}
        <div className="js-ground" />

        {/* ── Animated scooter ── */}
        <div className="js-scooter">
          <svg width="160" height="110" viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">

            {/* ── Scooter body ── */}
            {/* Rear wheel */}
            <circle cx="32" cy="88" r="18" fill="#1a2e4a" stroke="#4f8ef7" strokeWidth="2.5"/>
            <circle cx="32" cy="88" r="9" fill="#0d1529" stroke="#4f8ef7" strokeWidth="1.5"/>
            <circle cx="32" cy="88" r="3" fill="#4f8ef7"/>

            {/* Front wheel */}
            <circle cx="130" cy="88" r="18" fill="#1a2e4a" stroke="#4f8ef7" strokeWidth="2.5"/>
            <circle cx="130" cy="88" r="9" fill="#0d1529" stroke="#4f8ef7" strokeWidth="1.5"/>
            <circle cx="130" cy="88" r="3" fill="#4f8ef7"/>

            {/* Main body */}
            <path d="M30 82 C30 82 34 58 50 54 L98 50 L114 54 L120 68 L124 82 Z" fill="#3a7fd4"/>
            <path d="M50 54 L98 50 L104 62 L54 66 Z" fill="#4f8ef7"/>

            {/* Underbody */}
            <path d="M28 82 L126 82 L124 88 L30 88 Z" fill="#2a5fa0"/>

            {/* Front fork */}
            <path d="M118 58 L128 82" stroke="#2a5fa0" strokeWidth="5" strokeLinecap="round"/>
            <path d="M120 54 L126 66" stroke="#4f8ef7" strokeWidth="2.5" strokeLinecap="round"/>

            {/* Handlebar */}
            <rect x="120" y="46" width="18" height="4" rx="2" fill="#1a2e4a"/>
            <rect x="134" y="42" width="4" height="10" rx="2" fill="#4f8ef7"/>

            {/* Headlight */}
            <ellipse cx="128" cy="65" rx="5" ry="3.5" fill="#ffe066" opacity="0.9"/>

            {/* Front panel */}
            <path d="M112 52 L126 52 L130 70 L108 70 Z" fill="#2a5fa0" stroke="#4f8ef7" strokeWidth="0.8"/>

            {/* Seat */}
            <rect x="72" y="46" width="36" height="8" rx="4" fill="#2de0a5"/>

            {/* Speed lines */}
            <line x1="6" y1="78" x2="20" y2="78" stroke="#4f8ef7" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
            <line x1="2" y1="85" x2="18" y2="85" stroke="#4f8ef7" strokeWidth="1.4" strokeLinecap="round" opacity="0.5"/>
            <line x1="8" y1="71" x2="18" y2="71" stroke="#4f8ef7" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>

            {/* ── Rider ── */}
            {/* Legs */}
            <path d="M76 78 L86 66 L100 70 L92 82 Z" fill="#5a3820"/>
            <path d="M84 78 L96 67 L106 72 L96 82 Z" fill="#5a3820"/>
            {/* Shoes */}
            <ellipse cx="90" cy="82" rx="8" ry="4" fill="#2a0e00"/>
            <ellipse cx="100" cy="81" rx="8" ry="4" fill="#2a0e00"/>

            {/* Torso - yellow shirt */}
            <path d="M64 36 C62 44 60 62 60 70 L90 72 L98 54 L84 32 Z" fill="#f5a623"/>

            {/* Arm to handlebar */}
            <path d="M90 50 L118 56 L120 64 L90 60 Z" fill="#c8834a"/>

            {/* ── Backpack ── */}
            <rect x="38" y="26" width="32" height="40" rx="5" fill="#2a8fa0" stroke="#1a6a7a" strokeWidth="1.2"/>
            {/* Backpack top strap */}
            <path d="M48 26 L54 12 L62 26" stroke="#1a6a7a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            {/* Backpack pocket */}
            <rect x="42" y="48" width="24" height="12" rx="3" fill="#1a7080" stroke="#1a6a7a" strokeWidth="0.8"/>
            {/* Plus symbol */}
            <rect x="51" y="32" width="10" height="3" rx="1.5" fill="#ffffff"/>
            <rect x="54.5" y="28" width="3" height="10" rx="1.5" fill="#ffffff"/>
            {/* c3Logistics text */}
            <text
              x="54"
              y="46"
              textAnchor="middle"
              fontSize="5.5"
              fontWeight="800"
              fontFamily="Inter, Arial, sans-serif"
              fill="#ffffff"
              letterSpacing="0.2"
            >c3Logistics</text>

            {/* Neck */}
            <rect x="74" y="26" width="10" height="10" rx="3" fill="#c8834a"/>

            {/* Helmet */}
            <ellipse cx="79" cy="18" rx="16" ry="14" fill="#1a2e4a"/>
            <ellipse cx="79" cy="24" rx="16" ry="7" fill="#1a2e4a"/>
            {/* Visor */}
            <path d="M65 22 Q79 30 93 22" stroke="#4f8ef7" strokeWidth="2" fill="none"/>
            {/* Helmet shine */}
            <ellipse cx="70" cy="12" rx="5" ry="3.5" fill="rgba(79,142,247,0.3)"/>

            {/* Mask */}
            <rect x="68" y="26" width="18" height="8" rx="3" fill="#2a2a3a"/>
          </svg>
        </div>
      </div>
    </section>
  )
}

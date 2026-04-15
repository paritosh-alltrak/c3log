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
          <img
            src="/rider.png"
            alt="Phlebotomist on scooter"
            width="160"
            height="110"
            className="js-scooter__img"
          />
        </div>
      </div>
    </section>
  )
}

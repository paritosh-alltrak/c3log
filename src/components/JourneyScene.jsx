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
        <p className="section-label">from dorsteps to partner labs</p>
        <h2 className="js-section__title">Your sample. Our phlebotomist.</h2>
        <p className="js-section__sub">One journey. One result.</p>
      </div>

      <div className="js-scene">
        {/* ── Hero background image ── */}
        <img
          src="/journey-hero.png"
          alt=""
          aria-hidden="true"
          className="js-hero-bg"
        />

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

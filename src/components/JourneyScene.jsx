import './JourneyScene.css'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Trusted Professionals',
    desc: 'Experienced phlebotomists committed to your care.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Timely & Reliable',
    desc: 'On-time sample collection and secure handling.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Safe & Secure',
    desc: 'Your sample and data are always protected.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    title: 'Accurate Results',
    desc: 'Partnered with trusted labs for precise outcomes.',
  },
]

export default function JourneyScene() {
  return (
    <section className="js-section">
      <div className="js-scene">
        <img
          src="/phlebo-journey.png"
          alt="Phlebotomy journey — from doorsteps to partner labs"
          className="js-section__img"
        />
        <div className="js-scooter">
          <img
            src="/rider.png"
            alt="Phlebotomist on scooter"
            className="js-scooter__img"
          />
        </div>
      </div>

      <div className="js-features">
        {features.map((f) => (
          <div key={f.title} className="js-feature">
            <div className="js-feature__icon">{f.icon}</div>
            <div>
              <h4 className="js-feature__title">{f.title}</h4>
              <p className="js-feature__desc">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

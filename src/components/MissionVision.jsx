import './MissionVision.css'

export default function MissionVision({ onNavigate }) {
  return (
    <div className="mv-page">

      <div className="mv-intro">

        <h1 className="mv-intro__title">Mission &amp; <span>Vision</span></h1>
        <p className="mv-intro__sub">Driven by purpose. Defined by commitment.</p>

      </div>

      <div className="mv-cards">
        <div className="mv-card mv-card--vision">
          <div className="mv-card__icon">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="24" cy="24" r="3" fill="currentColor" />
              <line x1="24" y1="4" x2="24" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="24" y1="36" x2="24" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="4" y1="24" x2="12" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="36" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="mv-card__label">Vision</div>
          <p>
            By the <strong>year 2025</strong>, we envision to onboard and train a staff of over{' '}
            <strong>5000 individuals</strong> and expand our workspace in more than{' '}
            <strong>350 cities.</strong>
          </p>
          <p>
            We envision Credent Group as a trend setter — not only in the industries we operate in,
            but in every business vertical we aspire to enter. Guided by the same ethics and
            principles, we are committed to emerge as a leader in all newer territories.
          </p>
        </div>

        <div className="mv-card mv-card--mission">
          <div className="mv-card__icon">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 6L28.5 17H40L30.5 23.5L34 34.5L24 28L14 34.5L17.5 23.5L8 17H19.5L24 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="mv-card__label">Mission</div>
          <p>
            As a pioneer in managing customized business processes for Healthcare companies across
            India, our mission is to help them connect with customers and deliver ideas, products,
            logistics, and healthcare services seamlessly.
          </p>
          <p>
            To accomplish this, we are equipped with an excellent resource team of Logistics
            professionals, Phlebotomists, Home Collection Phlebotomists, and Customer Care
            Executives.
          </p>
        </div>
      </div>

    </div>
  )
}

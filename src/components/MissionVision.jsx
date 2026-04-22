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
            India processes a billion diagnostic tests a year. That number will double in a decade — and
            behind every one of those tests is a person who deserves access to the infrastructure that makes
            their result accurate, timely, and trustworthy. Credent is building that infrastructure. Not for the
            metros alone. Not for the patients who already have easy access. For every city, every distance, every
            individual — regardless of where they live or what they can reach on their own.
          </p>
          <p>
            Our vision is to be India's leading healthcare operations platform: the backbone that removes the
            barriers of time, distance, and circumstance from the journey of getting care. Scale without
            compromise. Trust without exception. Technology without complexity. That is the company we are
            building — and we will not stop until the infrastructure is as accessible as the right it exists to serve.
          </p>
        </div>

        <div className="mv-card mv-card--mission">
          <div className="mv-card__icon">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 6L28.5 17H40L30.5 23.5L34 34.5L24 28L14 34.5L17.5 23.5L8 17H19.5L24 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="mv-card__label">Mission</div>
          {/* <h3 className="mv-card__mission-title">To build a healthcare operations powerhouse rooted in India and trusted across the world.</h3> */}
          <p>To build a healthcare operations powerhouse rooted in India and trusted across the world.
            Credent's ambition is building the operational infrastructure and technology ecosystem that will
            serve healthcare and B2B partners across South Asia, the Middle East, and Africa — a network that
            crosses borders, bridges health systems, and carries the same standard of accountability whether the
            sample is moving through Lucknow or Lagos. India has the scale, the talent, and the operational
            knowledge to lead global pre analytics healthcare industry. Credent intends to be the company that
            proves it.
          </p>
        </div>
      </div>

    </div>
  )
}

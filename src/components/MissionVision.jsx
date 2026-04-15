import './MissionVision.css'

export default function MissionVision({ onNavigate }) {
  return (
    <div className="mv-page">
      <div className="mv-hero">
        <div className="mv-hero__inner">
          <nav className="mv-breadcrumb">
            <span className="mv-breadcrumb__link" onClick={() => onNavigate('home')}>Home</span>
            <span className="mv-breadcrumb__sep">›</span>
            <span>About Us</span>
            <span className="mv-breadcrumb__sep">›</span>
            <span>Mission &amp; Vision</span>
          </nav>
          <h1>Mission &amp; Vision</h1>
        </div>
      </div>

      <div className="mv-content">
        <div className="mv-body">
          <div className="mv-text">
            <div className="mv-section">
              <h2 className="mv-section__title">Vision</h2>
              <p>
                By the <strong>year 2025</strong>, we envision to onboard and train a staff of over{' '}
                <strong>5000 individuals</strong> and expand our workspace in more than{' '}
                <strong>350 cities.</strong>
              </p>
              <p>
                Along with that we envision Credent Group as a trend setter in not only in the
                Industries we are operating but also in all the business verticals where we aspire
                to step into. Following the same ethics and business principles, we are committed to
                emerge as a trend setter in all the newer territories.
              </p>
            </div>

            <div className="mv-section">
              <h2 className="mv-section__title">Mission</h2>
              <p>
                As a pioneer in managing customized business process for Healthcare companies around
                India, it&apos;s our mission to aid them to connect customers, to sell ideas, products,
                logistics and healthcare services. In order to accomplish our mission, we are equipped
                with excellent resource team of Logistics, Phlebotomist, Home Collection Phlebotomist
                and Customer Care Executives.
              </p>
            </div>
          </div>

          <div className="mv-graphic">
            <div className="mv-circles">
              <div className="mv-circle mv-circle--vision">
                <span>VISION</span>
              </div>
              <div className="mv-circle mv-circle--mission">
                <span>MISSION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

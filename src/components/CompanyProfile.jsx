import './CompanyProfile.css'

const services = [
  'Home Collection Services',
  'Phlebotomist Services',
  'Healthcare Logistics',
  'Learning & Development',
  'Digital HR (C3HRMS)',
  'Corporate Wellness',
]

export default function CompanyProfile({ onNavigate }) {
  return (
    <div className="cp-page">
      {/* ── Intro section ──────────────────────────── */}
      <section className="cp-intro">
        <div className="cp-intro__inner">

          {/* LEFT — identity card */}
          <div className="cp-card">
            <div className="cp-card__logo-wrap">
              <img src="/image.png" alt="Credent C3" className="cp-card__logo" />
            </div>

            <p className="cp-card__name">CREDENT</p>
            <p className="cp-card__sub">CONNECT N CARE</p>
            <p className="cp-card__tagline">HEALTHCARE · LOGISTICS · TECHNOLOGY</p>

            <div className="cp-card__stats">
              <div className="cp-card__stat">
                <span className="cp-card__stat-val">2012</span>
                <span className="cp-card__stat-lbl">Founded</span>
              </div>
              <div className="cp-card__stat">
                <span className="cp-card__stat-val">452+</span>
                <span className="cp-card__stat-lbl">Cities</span>
              </div>
              <div className="cp-card__stat">
                <span className="cp-card__stat-val">6500+</span>
                <span className="cp-card__stat-lbl">Field Force</span>
              </div>
            </div>

            {/* floating badge */}
            <div className="cp-card__badge">
              <span className="cp-card__badge-val">14+</span>
              <span className="cp-card__badge-lbl">Years of Trust</span>
            </div>
          </div>

          {/* RIGHT — text */}
          <div className="cp-intro__text">
            <span className="cp-intro__pill">Company Introduction</span>

            <h1 className="cp-intro__title">
              A Trusted Name in Healthcare,<br />
              Logistics &amp; Technology
            </h1>

            <p className="cp-intro__body">
              Credent Group was founded in Delhi in 2012 by Karan Sharma — today Founder & Whole-Ɵme
              Director of the Group — with six employees, a head office in the capital, and a convicƟon that India's
              diagnosƟc economy deserved beƩer infrastructure than it had.
              The insight was simple but radical: healthcare logisƟcs was being treated as an aŌerthought. Samples
              moved in general courier bags. Phlebotomists were untrained and untracked. Cold chains broke
              silently and nobody measured the cost. The pre-analyƟcal journey — everything that happens before
              a result is generated — was invisible, unmanaged, and unaccountable.
              Credent was built to change that. Not incrementally. Structurally.
              Twelve years later, the Credent Group operates across 452 ciƟes, employs 6,500+ healthcare
              personnel, and runs the operaƟonal infrastructure that some of India's most trusted diagnosƟc
              chains, hospitals, and pharma brands depend on every day. What began as a logisƟcs company has
              become something the industry didn't have a name for — a dedicated healthcare operations partner.
              End to end. At naƟonal scale.

            </p>

            <p className="cp-intro__body">
              Today the Credent Group comprises three entities:
              Credent Managements & Consultants Pvt. Ltd.
              The consulƟng and management arm — strategy, compliance, and operaƟonal architecture for
              healthcare organisaƟons at scale.
              Credent Connect N Care Ltd.
              The operating company behind C3 — cold chain logistics, home sample collecƟon, corporate health
              services, supply chain management, and the technology that ties it all together.
              Credent Team Pvt. Ltd.
              The talent and workforce engine — training, placement, and management of healthcare-specific
              personnel across India.
              One group. Three companies. One purpose — to run the healthcare infrastructure India deserves.

            </p>

            {/* <div className="cp-services">
              {services.map((s) => (
                <div key={s} className="cp-service-tag">
                  <span className="cp-service-dot" />
                  {s}
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* ── About detail section ───────────────────── */}
      <section className="cp-detail">
        <div className="cp-detail__inner">

          <div className="cp-detail__block">
            <span className="cp-intro__pill">Our Story</span>
            <h2 className="cp-detail__title">Credent Group Of Companies</h2>
            <p>
              C3 Logistics has stepped up as the pioneer to transform the healthcare industry
              with an innovated mindset — offering Logistics Services, Phlebotomist Service,
              Home Collection Services and many more. At Credent, we have the answer to all
              diagnostic needs.
            </p>
            <p>
              With an indomitable aspiration to achieve every possible thing in a wide spectrum
              of industries, Credent Group was founded in <strong>2012</strong> by{' '}
              <strong>Karan Sharma</strong>, CEO of <strong>Credent Group</strong>, along with
              6 more employees. With our Head Office in Delhi and{' '}
              <strong>10 branch offices pan-India</strong>, Credent has established its presence
              in more than <strong>452 cities</strong> with over{' '}
              <strong>6,500+ personnel</strong> on the Credent payroll.
            </p>
            <p>
              Today the Credent Group comprises three companies catering to diverse client needs:
            </p>
            <ul className="cp-companies">
              <li>Credent Managements &amp; Consultants Pvt. Ltd.</li>
              <li>Credent Connect N Care Ltd.</li>
              <li>Credent Team Pvt. Ltd.</li>
            </ul>
            <p>
              Our network is our core strength — 35+ air connectivity routes, 5+ OTC routes,
              6+ vans, ~3,000 field executives with bikes, and ~3,500 phlebotomists covering
              every part of Pan-India as per client demand.
            </p>
          </div>

          {/* Stats grid */}
          {/* <div className="cp-stats">
            <div className="cp-stat">
              <span className="cp-stat__number">452+</span>
              <span className="cp-stat__label">Cities</span>
            </div>
            <div className="cp-stat">
              <span className="cp-stat__number">4,500+</span>
              <span className="cp-stat__label">Personnel</span>
            </div>
            <div className="cp-stat">
              <span className="cp-stat__number">10</span>
              <span className="cp-stat__label">Branch Offices</span>
            </div>
            <div className="cp-stat">
              <span className="cp-stat__number">2012</span>
              <span className="cp-stat__label">Founded</span>
            </div>
          </div> */}

        </div>
      </section>
    </div>
  )
}

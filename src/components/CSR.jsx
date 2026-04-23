import { useState } from 'react'
import './CSR.css'

const pillars = [
  { id: 'naps', label: '01 NAPS' },
  { id: 'nats', label: '02 NATS' },
  { id: 'ev',   label: '03 EV Fleet' },
]

export default function CSR() {
  const [active, setActive] = useState('naps')

  const scrollTo = (id) => {
    setActive(id)
    const el = document.getElementById(`csr-${id}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="csr-page">

      {/* ── Hero ── */}
      <section className="csr-hero">
        <div className="csr-hero__left">
          <span className="csr-hero__eyebrow">— Our Commitment</span>
          <h1 className="csr-hero__heading">
            Healthcare runs on more<br />than logistics. It runs on{' '}
            <em>people</em>.
          </h1>
        </div>
        <div className="csr-hero__right">
          <p className="csr-hero__body">
            At Credent, CSR isn't a department — it's the operating principle
            that shapes how we hire, train, and move. We{' '}
            <a className="csr-hero__link" href="#csr-naps">invest in youth</a>,
            reduce our environmental footprint, and partner with national skill
            programmes to build India's next generation of healthcare professionals.
          </p>
          <p className="csr-hero__sub">
            Our work spans three pillars: partnerships with two Government of India
            skilling schemes — NAPS and NATS — and a pioneering electric fleet that
            shaped our sustainability story across Delhi NCR.
          </p>
        </div>
      </section>

      {/* ── Sticky Pillar Nav ── */}
      <div className="csr-nav">
        <span className="csr-nav__label">CSR PILLARS</span>
        <span className="csr-nav__sep">|</span>
        {pillars.map((p) => (
          <button
            key={p.id}
            className={`csr-nav__pill ${active === p.id ? 'csr-nav__pill--active' : ''}`}
            onClick={() => scrollTo(p.id)}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* ── Pillar 01: NAPS ── */}
      <section id="csr-naps" className="csr-pillar">
        <div className="csr-pillar__header">
          <div className="csr-pillar__number-wrap">
            <span className="csr-pillar__number">01</span>
            <div>
              <h2 className="csr-pillar__title">
                National Apprenticeship<br />Promotion <em>Scheme</em>.
              </h2>
              <p className="csr-pillar__sub">
                Learn while you earn — partnering with Ministry of Skill Development &amp; Entrepreneurship.
              </p>
            </div>
          </div>
          <span className="csr-badge csr-badge--active">ACTIVE · SINCE 2021</span>
        </div>

        <div className="csr-card csr-card--light">
          <div className="csr-card__body">
            <h3 className="csr-card__heading">
              Building skilled India, empowering <em>future careers</em>.
            </h3>
            <p className="csr-card__org">
              Government of India · Ministry of Skill Development &amp; Entrepreneurship
            </p>
            <p className="csr-card__text">
              NAPS is a transformative Government of India initiative focused on creating a{' '}
              <strong>job-ready workforce</strong> through structured apprenticeship training.
              At Credent, we host apprentices across field operations, logistics, and
              phlebotomy — combining real workplace exposure with certified skilling. The scheme
              supports India's vision of <strong>Skill India, Make in India</strong>, and
              nation-wide employment generation.
            </p>
            <a
              className="csr-card__link"
              href="https://www.apprenticeshipindia.gov.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more on the NAPS portal ↗
            </a>
          </div>
          <div className="csr-card__stats">
            <p className="csr-card__stats-label">· OUR NAPS NUMBERS</p>
            <div className="csr-stat-row">
              <span className="csr-stat-row__name">Total Registrations</span>
              <span className="csr-stat-row__value">1,000<sup>+</sup></span>
            </div>
          </div>
        </div>
      </section>

      <div className="csr-divider" />

      {/* ── Pillar 02: NATS ── */}
      <section id="csr-nats" className="csr-pillar">
        <div className="csr-pillar__header">
          <div className="csr-pillar__number-wrap">
            <span className="csr-pillar__number">02</span>
            <div>
              <h2 className="csr-pillar__title">
                National Apprenticeship<br />Training <em>Scheme</em>.
              </h2>
              <p className="csr-pillar__sub">
                Industry experience for students and fresh graduates — under the Apprentices Act, 1961.
              </p>
            </div>
          </div>
          <span className="csr-badge csr-badge--active">ACTIVE · SINCE 2020</span>
        </div>

        <div className="csr-card csr-card--light">
          <div className="csr-card__body">
            <h3 className="csr-card__heading">
              Empowering graduates with <em>real-world experience</em>.
            </h3>
            <p className="csr-card__org">
              Government of India · Board of Apprenticeship Training
            </p>
            <p className="csr-card__text">
              NATS bridges the gap between academic learning and industry needs. Credent
              partners with the Board of Apprenticeship Training to provide{' '}
              <strong>structured on-the-job training</strong> to engineering and diploma graduates
              in healthcare logistics operations. Trainees gain hands-on exposure to cold-chain
              management, sample handling, and last-mile delivery — skills that translate directly
              into employment-ready competencies.
            </p>
            <a
              className="csr-card__link"
              href="https://www.mhrdnats.gov.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more on the NATS portal ↗
            </a>
          </div>
          <div className="csr-card__stats">
            <p className="csr-card__stats-label">· OUR NATS NUMBERS</p>
            <div className="csr-stat-row">
              <span className="csr-stat-row__name">Trainees Enrolled</span>
              <span className="csr-stat-row__value">500<sup>+</sup></span>
            </div>
            <div className="csr-stat-row">
              <span className="csr-stat-row__name">Placement Rate</span>
              <span className="csr-stat-row__value">80<sup>%</sup></span>
            </div>
          </div>
        </div>
      </section>

      <div className="csr-divider" />

      {/* ── Pillar 03: EV Fleet ── */}
      <section id="csr-ev" className="csr-pillar">
        <div className="csr-pillar__header">
          <div className="csr-pillar__number-wrap">
            <span className="csr-pillar__number">03</span>
            <div>
              <h2 className="csr-pillar__title">
                A pioneering <em>EV fleet</em><br />for healthcare logistics.
              </h2>
              <p className="csr-pillar__sub">
                An early sustainability commitment — Delhi NCR's green delivery backbone from 2019 to 2023.
              </p>
            </div>
          </div>
          <span className="csr-badge csr-badge--past">PAST · 2019 – 2023</span>
        </div>

        <div className="csr-card csr-card--dark">
          <div className="csr-card__body">
            <p className="csr-ev__eyebrow">· LEGACY INITIATIVE</p>
            <h3 className="csr-card__heading csr-card__heading--light">
              India's largest EV fleet<br />for <em>diagnostic logistics</em>.
            </h3>
            <p className="csr-card__text csr-card__text--light">
              A milestone chapter in our sustainability journey. What began in 2019 as a
              modest pilot of 10 electric bikes grew into one of Delhi NCR's most recognised
              green-logistics fleets — a 100+ strong electric scooty operation by 2023.
            </p>
          </div>

          <div className="csr-ev__timeline-wrap">
            <p className="csr-ev__tl-label">THE JOURNEY · PILOT TO FLEET</p>
            <div className="csr-ev__timeline">
              <div className="csr-ev__tl-point">
                <span className="csr-ev__tl-value">10<sup>+</sup></span>
                <span className="csr-ev__tl-unit">Bikes</span>
              </div>
              <div className="csr-ev__tl-line">
                <div className="csr-ev__tl-dot csr-ev__tl-dot--start" />
                <div className="csr-ev__tl-track" />
                <div className="csr-ev__tl-dot csr-ev__tl-dot--end" />
              </div>
              <div className="csr-ev__tl-point">
                <span className="csr-ev__tl-value">100<sup>+</sup></span>
                <span className="csr-ev__tl-unit">Scooties</span>
              </div>
            </div>
            <div className="csr-ev__tl-dates">
              <div>
                <span className="csr-ev__tl-year">2019</span>
                <span className="csr-ev__tl-tag">PILOT</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className="csr-ev__tl-year">2023</span>
                <span className="csr-ev__tl-tag">FULL FLEET</span>
              </div>
            </div>
            <div className="csr-ev__geo">
              <span className="csr-ev__geo-dot" />
              Geographical Coverage — <strong>Delhi NCR</strong>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

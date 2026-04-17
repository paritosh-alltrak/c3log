import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Ecosystem.css'

const platforms = [
  {
    id: 'hrms', name: 'C3 HRMS', icon: '🧑‍💼', color: '#1a3a6b',
    desc: 'Smart HR for distributed healthcare workforce',
    features: ['Digital onboarding', 'Geo-fenced attendance', 'Auto shift management', 'Mobile dashboards'],
  },
  {
    id: 'post', name: 'C3 POST', icon: '📦', color: '#00a878',
    desc: 'Healthcare & e-commerce courier aggregator',
    features: ['23K+ pincodes', 'Cold-chain delivery', 'Multi-carrier support', 'Shopify & Amazon integration'],
  },
  {
    id: 'cng', name: 'ConnectNGrow', icon: '🎓', color: '#2563eb',
    desc: 'Jobs & training for frontline health workers',
    features: ['Certified training', 'Job matching', 'Skill tracking', 'Expert-led courses'],
  },
  {
    id: 'alltrak', name: 'AllTrak', icon: '📍', color: '#e97f27',
    desc: 'Real-time field workforce tracking & ops',
    features: ['Live GPS tracking', 'Route optimization', 'Task assignment', 'Performance analytics'],
  },
  {
    id: 'wellness', name: 'C3 Wellness', icon: '🧘', color: '#0891b2',
    desc: 'Corporate health & employee wellness',
    features: ['Health camps', 'Wellness programs', 'Screening drives', 'Digital health reports'],
  },
  {
    id: 'hcjobs', name: 'Healthcare Jobs', icon: '🏥', color: '#7c3aed',
    desc: 'Job portal for healthcare professionals',
    features: ['Verified employers', 'Pan-India listings', 'Quick apply', 'Career growth tracking'],
  },
  {
    id: 'retail', name: 'C3 Retail', icon: '🛒', color: '#e11d48',
    desc: 'E-commerce & retail fulfilment platform',
    features: ['Order management', 'Inventory sync', 'Multi-channel', 'Fast fulfilment'],
  },
]

const ring1 = platforms.slice(0, 4)
const ring2 = platforms.slice(4)

const valueChain = [
  { icon: '🩸', label: 'Sample Collection' },
  { icon: '🧑‍⚕️', label: 'Medical Staffing' },
  { icon: '🚚', label: 'Route & Logistics' },
  { icon: '🧘', label: 'Health & Wellness' },
  { icon: '🧑‍💼', label: 'Smart HR' },
  { icon: '🛒', label: 'Retail Ops' },
  { icon: '🎓', label: 'Training' },
]

const partners = [
  { icon: '🏥', label: 'Hospitals' },
  { icon: '🔬', label: 'Diagnostic Labs' },
  { icon: '💊', label: 'Pharma' },
  { icon: '🧪', label: 'Clinical Research' },
  { icon: '🏢', label: 'Corporates' },
  { icon: '🏛️', label: 'Govt. Facilities' },
]

const stats = [
  { value: '23K+', label: 'Pincodes Covered' },
  { value: '5,000+', label: 'Active Workforce' },
  { value: '99.2%', label: 'Delivery Accuracy' },
  { value: '500K+', label: 'Tasks Completed' },
  { value: '100+', label: 'Enterprise Clients' },
]

function SolarSystem() {
  const [hovered, setHovered] = useState(null)
  const paused = hovered !== null

  return (
    <div className={`eco-solar ${paused ? 'eco-solar--paused' : ''}`}>
      {/* Orbit tracks */}
      <div className="eco-track eco-track--1" />
      <div className="eco-track eco-track--2" />

      {/* Glow behind sun */}
      <div className="eco-sun-glow" />

      {/* Sun */}
      <div className="eco-sun">
        <div className="eco-sun__ring" />
        <img src="/image.png" alt="Credent" className="eco-sun__logo" />
      </div>

      {/* Ring 1 — inner, clockwise */}
      <div className="eco-orbit eco-orbit--1">
        {ring1.map((p, i) => {
          const angle = (i * 360) / ring1.length
          return (
            <div
              key={p.id}
              className="eco-planet-anchor"
              style={{ '--start-angle': `${angle}deg` }}
            >
              <div
                className={`eco-planet ${hovered === p.id ? 'eco-planet--active' : ''}`}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="eco-planet__glow" style={{ background: p.color }} />
                <div className="eco-planet__core" style={{ background: p.color }}>
                  <span>{p.icon}</span>
                </div>
                <span className="eco-planet__name">{p.name}</span>

                <AnimatePresence>
                  {hovered === p.id && (
                    <motion.div
                      className="eco-popup"
                      style={{ borderTop: `3px solid ${p.color}` }}
                      initial={{ opacity: 0, y: 12, scale: 0.92 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="eco-popup__head">
                        <span className="eco-popup__badge" style={{ background: p.color }}>{p.icon}</span>
                        <h4>{p.name}</h4>
                      </div>
                      <p className="eco-popup__desc">{p.desc}</p>
                      <ul className="eco-popup__list">
                        {p.features.map((f, fi) => (
                          <motion.li
                            key={f}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: fi * 0.04, duration: 0.18 }}
                          >
                            <span style={{ color: p.color }}>✓</span> {f}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )
        })}
      </div>

      {/* Ring 2 — outer, counter-clockwise */}
      <div className="eco-orbit eco-orbit--2">
        {ring2.map((p, i) => {
          const angle = (i * 360) / ring2.length
          return (
            <div
              key={p.id}
              className="eco-planet-anchor"
              style={{ '--start-angle': `${angle}deg` }}
            >
              <div
                className={`eco-planet ${hovered === p.id ? 'eco-planet--active' : ''}`}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="eco-planet__glow" style={{ background: p.color }} />
                <div className="eco-planet__core" style={{ background: p.color }}>
                  <span>{p.icon}</span>
                </div>
                <span className="eco-planet__name">{p.name}</span>

                <AnimatePresence>
                  {hovered === p.id && (
                    <motion.div
                      className="eco-popup"
                      style={{ borderTop: `3px solid ${p.color}` }}
                      initial={{ opacity: 0, y: 12, scale: 0.92 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="eco-popup__head">
                        <span className="eco-popup__badge" style={{ background: p.color }}>{p.icon}</span>
                        <h4>{p.name}</h4>
                      </div>
                      <p className="eco-popup__desc">{p.desc}</p>
                      <ul className="eco-popup__list">
                        {p.features.map((f, fi) => (
                          <motion.li
                            key={f}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: fi * 0.04, duration: 0.18 }}
                          >
                            <span style={{ color: p.color }}>✓</span> {f}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Ecosystem({ onNavigate }) {
  return (
    <div className="eco-page">
      {/* HERO */}
      <section className="eco-hero">
        <div className="eco-hero__inner">
          <div className="eco-hero__text">
            <p className="eco-hero__pill">Credent Ecosystem</p>
            <h1>
              Seven Platforms.<br />
              <span className="eco-hero__accent">One Ecosystem.</span>
            </h1>
            <p className="eco-hero__desc">
              Seamlessly connected technology solutions powering healthcare
              logistics and workforce operations.
            </p>
            <div className="eco-hero__btns">
              <button className="eco-btn eco-btn--primary" onClick={() => onNavigate('home')}>
                Book a Demo
              </button>
              <button className="eco-btn eco-btn--ghost" onClick={() => {
                document.querySelector('.eco-products')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                Explore Platforms
              </button>
            </div>
          </div>

          <div className="eco-hero__visual">
            <SolarSystem />
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="eco-products">
        <div className="eco-section__inner">
          <h2 className="eco-section__title">Our Platforms</h2>
          <div className="eco-products__grid">
            {platforms.map((p) => (
              <motion.div
                key={p.id}
                className="eco-pcard"
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(13,38,72,0.12)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="eco-pcard__icon" style={{ background: p.color }}>{p.icon}</div>
                <div className="eco-pcard__body">
                  <h4>{p.name}</h4>
                  <p>{p.desc}</p>
                </div>
                <span className="eco-pcard__arrow">→</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE CHAIN */}
      <section className="eco-chain">
        <div className="eco-section__inner">
          <h2 className="eco-section__title">Built for the Entire Healthcare Value Chain</h2>
          <div className="eco-chain__grid">
            {valueChain.map((v) => (
              <div key={v.label} className="eco-chain__item">
                <div className="eco-chain__icon">{v.icon}</div>
                <span className="eco-chain__label">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="eco-partners">
        <div className="eco-section__inner">
          <h2 className="eco-section__title">Empowering Every Healthcare Partner</h2>
          <div className="eco-partners__grid">
            {partners.map((p) => (
              <div key={p.label} className="eco-partner">
                <div className="eco-partner__icon">{p.icon}</div>
                <span className="eco-partner__label">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="eco-stats">
        <div className="eco-section__inner">
          <div className="eco-stats__grid">
            {stats.map((s) => (
              <div key={s.label} className="eco-stats__item">
                <span className="eco-stats__value">{s.value}</span>
                <span className="eco-stats__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="eco-cta">
        <div className="eco-section__inner">
          <div className="eco-cta__card">
            <div className="eco-cta__text">
              <h2>Let's build the future of healthcare together.</h2>
              <p>Explore our platforms or speak with our experts to discover
                how we can elevate your operations.</p>
            </div>
            <div className="eco-cta__btns">
              <button className="eco-btn eco-btn--white">Talk to Sales</button>
              <button className="eco-btn eco-btn--outline">Book a Demo</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useState } from 'react'
import './Products.css'

const products = [
  {
    name: 'C3Logistics',
    img: '/image.png',
    tagline: 'End-to-end sample logistics',
    desc: 'A comprehensive logistics management platform that handles sample collection, transportation, and delivery with real-time tracking across 200+ cities in India.',
    features: ['Real-time GPS tracking', 'Route optimization', 'Cold-chain monitoring', 'Automated dispatch', 'SLA management'],
  },
  {
    name: 'C3 Wellness',
    img: '/c3wellness.webp',
    tagline: 'Corporate wellness solutions',
    desc: 'Preventive health check-up management for corporates — from scheduling camps to delivering reports, all through a single digital platform.',
    features: ['Health camp management', 'Employee health profiles', 'Automated report delivery', 'Vendor coordination', 'Analytics dashboard'],
  },
  {
    name: 'C3 Post',
    img: '/c3post.webp',
    tagline: 'Report dispatch & delivery',
    desc: 'Digitized report printing, packaging, and last-mile delivery system ensuring patients receive accurate reports on time, every time.',
    features: ['Automated printing queue', 'Smart packaging', 'Last-mile delivery', 'Delivery confirmation', 'Digital report access'],
  },
  {
    name: 'C3 Retail',
    img: '/c3retail.png',
    tagline: 'Retail pharmacy operations',
    desc: 'Retail management solution for pharmacy and diagnostics chains — inventory, billing, compliance, and customer engagement unified.',
    features: ['Inventory management', 'POS & billing', 'Compliance tracking', 'Customer loyalty', 'Multi-store dashboard'],
  },
  {
    name: 'HealthCare Job',
    img: '/healthcarejob.webp',
    tagline: 'Healthcare recruitment platform',
    desc: 'Specialized job portal connecting healthcare professionals with diagnostic labs, hospitals, and clinics across India.',
    features: ['Job matching algorithm', 'Skill verification', 'Interview scheduling', 'Onboarding workflow', 'Performance tracking'],
  },
  {
    name: 'C3 HRMS',
    img: '/c3hrms.png',
    tagline: 'Human resource management',
    desc: 'Complete HR lifecycle management designed for healthcare organizations — attendance, payroll, training, and compliance in one platform.',
    features: ['Attendance & leave', 'Payroll processing', 'Training management', 'Document vault', 'Compliance reports'],
  },
  {
    name: 'Connect N Grow',
    img: '/connectandgrow.webp',
    tagline: 'Partner network platform',
    desc: 'A collaborative platform connecting healthcare partners, vendors, and service providers to grow together within the Credent ecosystem.',
    features: ['Partner onboarding', 'Network analytics', 'Collaboration tools', 'Revenue sharing', 'Growth tracking'],
  },
  {
    name: 'AllTrak',
    img: '/alltrak.png',
    tagline: 'Asset & fleet tracking',
    desc: 'Real-time asset and fleet tracking system for healthcare logistics — monitor vehicles, equipment, and shipments across the supply chain.',
    features: ['Live GPS tracking', 'Fleet management', 'Asset tagging', 'Geofencing alerts', 'Utilization reports'],
  },
]

const CX = 350, CY = 350, SIZE = 700
const orbitDefs = [
  { rx: 280, ry: 120, tilt: -35, angles: [0, 180], productIdx: [0, 1] },
  { rx: 280, ry: 120, tilt:   0, angles: [0, 180], productIdx: [2, 3] },
  { rx: 280, ry: 120, tilt:  35, angles: [0, 180], productIdx: [4, 5] },
  { rx: 280, ry: 120, tilt:  90, angles: [0, 180], productIdx: [6, 7] },
]

function ellipsePoint(rx, ry, tiltDeg, angleDeg) {
  const a = (angleDeg * Math.PI) / 180
  const t = (tiltDeg * Math.PI) / 180
  const ex = rx * Math.cos(a)
  const ey = ry * Math.sin(a)
  return {
    x: CX + ex * Math.cos(t) - ey * Math.sin(t),
    y: CY + ex * Math.sin(t) + ey * Math.cos(t),
  }
}

const cards = []
orbitDefs.forEach((orb) => {
  orb.angles.forEach((angle, i) => {
    const pos = ellipsePoint(orb.rx, orb.ry, orb.tilt, angle)
    cards.push({ ...products[orb.productIdx[i]], idx: orb.productIdx[i], ...pos })
  })
})

function ellipsePerimeter(rx, ry) {
  const h = ((rx - ry) ** 2) / ((rx + ry) ** 2)
  return Math.PI * (rx + ry) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)))
}

export default function Products() {
  const [hovered, setHovered] = useState(null)

  const hoveredProduct = hovered !== null ? products[hovered] : null

  return (
    <section className="products" id="products">
      <div className="products__inner">
        <div className="products__header">
          <p className="section-label">Platform</p>
          <h2 className="products__title">
            Eight Verticals.<br />
            <em>One healthcare operating system.</em>
          </h2>
          <p className="products__desc">
            From sample collection to result delivery — every workflow unified
            under a single, intelligent logistics platform.
          </p>
        </div>

        <div className="products__stage">
          <div className="products__atom">
            <svg
              className="products__svg"
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                {orbitDefs.map((_, i) => (
                  <linearGradient key={i} id={`flow${i}`} gradientUnits="userSpaceOnUse"
                    x1={CX - 280} y1={CY} x2={CX + 280} y2={CY}>
                    <stop offset="0%"  stopColor="#4f8ef7" stopOpacity="0" />
                    <stop offset="30%" stopColor="#4f8ef7" stopOpacity="0.7" />
                    <stop offset="50%" stopColor="#6aadff" stopOpacity="1" />
                    <stop offset="70%" stopColor="#4f8ef7" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#4f8ef7" stopOpacity="0" />
                  </linearGradient>
                ))}
              </defs>

              {orbitDefs.map((orb, i) => {
                const perim = ellipsePerimeter(orb.rx, orb.ry)
                const dashLen = perim * 0.25
                const gapLen = perim - dashLen
                return (
                  <g key={i} transform={`rotate(${orb.tilt} ${CX} ${CY})`}>
                    <ellipse
                      cx={CX} cy={CY} rx={orb.rx} ry={orb.ry}
                      fill="none" stroke="#b8cceb" strokeWidth="2"
                    />
                    <ellipse
                      cx={CX} cy={CY} rx={orb.rx} ry={orb.ry}
                      fill="none"
                      stroke={`url(#flow${i})`}
                      strokeWidth="3.5"
                      strokeDasharray={`${dashLen} ${gapLen}`}
                      strokeLinecap="round"
                      className={`products__flow ${hovered !== null ? 'products__flow--paused' : ''}`}
                      style={{
                        '--perim': perim,
                        '--dur': `${4 + i * 1.5}s`,
                        '--delay': `${i * -1.2}s`,
                      }}
                    />
                  </g>
                )
              })}
            </svg>

            {/* Center hub — shrinks when any logo is hovered */}
            <div className={`products__hub ${hovered !== null ? 'products__hub--shrunk' : ''}`}>
              <img src="/cnclogo.png" alt="Credent ConnectCare" className="products__hub-logo" />
            </div>

            {/* Product logos */}
            {cards.map((c) => (
              <div
                key={c.name}
                className={`products__card ${hovered === c.idx ? 'products__card--active' : ''}`}
                style={{
                  left: `${(c.x / SIZE) * 100}%`,
                  top:  `${(c.y / SIZE) * 100}%`,
                }}
                onMouseEnter={() => setHovered(c.idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <img src={c.img} alt={c.name} className="products__card-img" />

                {/* Tooltip detail card */}
                {hovered === c.idx && hoveredProduct && (
                  <div className="products__tooltip">
                    <div className="products__tooltip-head">
                      <img src={hoveredProduct.img} alt={hoveredProduct.name} className="products__tooltip-logo" />
                      <div>
                        <h4 className="products__tooltip-name">{hoveredProduct.name}</h4>
                        <p className="products__tooltip-tagline">{hoveredProduct.tagline}</p>
                      </div>
                    </div>
                    <p className="products__tooltip-desc">{hoveredProduct.desc}</p>
                    <ul className="products__tooltip-features">
                      {hoveredProduct.features.map((f, i) => (
                        <li key={f} style={{ animationDelay: `${0.06 + i * 0.04}s` }}>
                          <span className="products__tooltip-check">&#10003;</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

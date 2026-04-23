import { useState } from 'react'
import './ProductsPage.css'

const products = [
  {
    id: '01',
    name: 'C3 Retail',
    desc: 'Retail management solution for pharmacy and diagnostics chains — inventory, billing, compliance, and customer engagement unified.',
    color: '#1e6fd9',
  },
  {
    id: '02',
    name: 'C3 Wellness',
    desc: 'Preventive health check-up management for corporates — from scheduling camps to delivering reports, all through a single digital platform.',
    color: '#0a3d8f',
  },
  {
    id: '03',
    name: 'C3 Logistics',
    desc: 'The operating system for pickup, dispatch, cold chain and last-mile delivery across 120+ Indian cities.',
    color: '#4f8ef7',
  },
  {
    id: '04',
    name: 'Connect N Grow',
    desc: 'A collaborative platform connecting healthcare partners, vendors, and service providers to grow together within the Credent ecosystem.',
    color: '#2563eb',
  },
  {
    id: '05',
    name: 'C3 HRMS',
    desc: 'Payroll, attendance, and workforce management tuned for high-volume, multi-site healthcare operations.',
    color: '#0ea5e9',
  },
  {
    id: '06',
    name: 'AllTrak',
    desc: 'Real-time asset and fleet tracking system for healthcare logistics — monitor vehicles, equipment, and shipments across the supply chain.',
    color: '#1d4ed8',
  },
  {
    id: '07',
    name: 'C3 Post',
    desc: 'Digitized report printing, packaging, and last-mile delivery system ensuring patients receive accurate reports on time, every time.',
    color: '#60a5fa',
  },
  {
    id: '08',
    name: 'HealthcareJob',
    desc: 'Specialized job portal connecting healthcare professionals with diagnostic labs, hospitals, and clinics across India.',
    color: '#0369a1',
  },
]

const CX = 400
const CY = 400
const R = 272
const INNER_R = 78
const LABEL_R = R + 48
const STEP = 360 / products.length

function toRad(d) {
  return (d * Math.PI) / 180
}

function slicePath(startDeg, endDeg) {
  const s = toRad(startDeg)
  const e = toRad(endDeg)
  const x1 = CX + R * Math.cos(s)
  const y1 = CY + R * Math.sin(s)
  const x2 = CX + R * Math.cos(e)
  const y2 = CY + R * Math.sin(e)
  return `M ${CX} ${CY} L ${x1} ${y1} A ${R} ${R} 0 0 1 ${x2} ${y2} Z`
}

function labelAnchor(angleDeg) {
  const x = Math.cos(toRad(angleDeg))
  if (x > 0.18) return 'start'
  if (x < -0.18) return 'end'
  return 'middle'
}

export default function ProductsPage() {
  const [hovered, setHovered] = useState(null)
  const hovProd = hovered !== null ? products[hovered] : null

  return (
    <section className="eco" id="products-page">
      {/* Ambient glow */}
      <div
        className="eco__glow"
        style={{
          background: hovProd
            ? `radial-gradient(circle at 50% 56%, ${hovProd.color}18 0%, transparent 60%)`
            : 'none',
        }}
      />

      {/* Header */}
      <div className="eco__header">
        <p className="eco__label">— THE ECOSYSTEM —</p>
        <h2 className="eco__title">
          Eight products.<br />
          One <em style={{ color: hovProd ? hovProd.color : '#1e6fd9' }}>ecosystem.</em>
        </h2>
        <p className="eco__subtitle">
          A connected suite of platforms — from logistics and tracking to wellness
          and hiring — each engineered for Indian healthcare, and wired to talk to one another.
        </p>
      </div>

      {/* Wheel */}
      <div className="eco__stage">
        <div
          className="eco__wheel"
          onMouseLeave={() => setHovered(null)}
        >
          <svg
            className="eco__svg"
            viewBox="0 0 800 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Decorative outer rings */}
            <circle cx={CX} cy={CY} r={R + 58} fill="none" stroke="rgba(13,38,72,0.07)" strokeWidth="1" style={{ pointerEvents: 'none' }} />
            <circle cx={CX} cy={CY} r={R + 32} fill="none" stroke="rgba(13,38,72,0.10)" strokeWidth="1" strokeDasharray="3 10" style={{ pointerEvents: 'none' }} />
            <circle cx={CX} cy={CY} r={R + 8} fill="none" stroke="rgba(13,38,72,0.06)" strokeWidth="1" style={{ pointerEvents: 'none' }} />

            {/* Pie slices */}
            {products.map((p, i) => {
              const start = i * STEP - 90
              const end = start + STEP
              return (
                <path
                  key={p.id}
                  d={slicePath(start, end)}
                  fill={p.color}
                  className="eco__slice"
                  onMouseEnter={() => setHovered(i)}
                />
              )
            })}

            {/* Divider lines — rendered before hover-fill so fill covers them */}
            {products.map((_, i) => {
              const angle = toRad(i * STEP - 90)
              return (
                <line
                  key={i}
                  x1={CX}
                  y1={CY}
                  x2={CX + R * Math.cos(angle)}
                  y2={CY + R * Math.sin(angle)}
                  stroke="rgba(242,247,253,0.9)"
                  strokeWidth="2.5"
                  style={{ pointerEvents: 'none' }}
                />
              )
            })}

            {/* Full-circle overlay on hover — covers divider lines */}
            {hovered !== null && (
              <circle
                cx={CX}
                cy={CY}
                r={R}
                fill={hovProd.color}
                className="eco__hover-fill"
                style={{ pointerEvents: 'none' }}
              />
            )}

            {/* Inner accent ring on hover */}
            {hovered !== null && (
              <circle
                cx={CX}
                cy={CY}
                r={INNER_R + 18}
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1"
                style={{ pointerEvents: 'none' }}
              />
            )}

            {/* Center circle */}
            <circle
              cx={CX}
              cy={CY}
              r={INNER_R}
              fill="#f2f7fd"
              style={{
                opacity: hovered !== null ? 0 : 1,
                transition: 'opacity 0.25s ease',
                pointerEvents: hovered !== null ? 'none' : 'auto',
              }}
              onMouseEnter={() => setHovered(null)}
            />

            {/* Center "C3 ECOSYSTEM" text (default) */}
            {hovered === null && (
              <g style={{ pointerEvents: 'none' }}>
                <text
                  x={CX}
                  y={CY - 6}
                  textAnchor="middle"
                  fill="#0d2648"
                  fontSize="16"
                  fontWeight="700"
                  letterSpacing="3"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  C3
                </text>
                <text
                  x={CX}
                  y={CY + 12}
                  textAnchor="middle"
                  fill="rgba(13,38,72,0.45)"
                  fontSize="7"
                  letterSpacing="3.5"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  ECOSYSTEM
                </text>
              </g>
            )}

            {/* Outer labels (default state) */}
            {hovered === null &&
              products.map((p, i) => {
                const mid = i * STEP - 90 + STEP / 2
                const midRad = toRad(mid)
                const lx = CX + LABEL_R * Math.cos(midRad)
                const ly = CY + LABEL_R * Math.sin(midRad)
                const anchor = labelAnchor(mid)
                const ox = anchor === 'start' ? 10 : anchor === 'end' ? -10 : 0

                return (
                  <g key={p.id} style={{ pointerEvents: 'none' }}>
                    <circle cx={lx} cy={ly} r="2.5" fill={p.color} />
                    <text
                      x={lx + ox}
                      y={ly - 4}
                      textAnchor={anchor}
                      fill="rgba(13,38,72,0.45)"
                      fontSize="6.5"
                      letterSpacing="1.5"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      {p.id}
                    </text>
                    <text
                      x={lx + ox}
                      y={ly + 7}
                      textAnchor={anchor}
                      fill={p.color}
                      fontSize="6.5"
                      fontWeight="600"
                      letterSpacing="1.5"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      {p.name.toUpperCase()}
                    </text>
                  </g>
                )
              })}
          </svg>

          {/* Product info overlay (hover) */}
          {hovered !== null && hovProd && (
            <div className="eco__info">
              <p className="eco__info-num">
                {hovProd.id} / {String(products.length).padStart(2, '0')}
              </p>
              <h3 className="eco__info-name">{hovProd.name}</h3>
              <p className="eco__info-desc">{hovProd.desc}</p>
              <button className="eco__info-btn">EXPLORE →</button>
            </div>
          )}
        </div>
      </div>

      {/* Footer bar */}
      <div className="eco__footer">
        <p className="eco__hint">HOVER A SLICE TO MEET THE PRODUCT</p>
        <div className="eco__legend">
          {products.map((p) => (
            <span key={p.id} className="eco__legend-item">
              <span className="eco__legend-dot" style={{ background: p.color }} />
              {p.name.toUpperCase()}
            </span>
          ))}
        </div>
        <p className="eco__version">V — 2026</p>
      </div>
    </section>
  )
}

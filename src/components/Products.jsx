import './Products.css'

const products = [
  { icon: '🧬', name: 'C3Logistics', desc: '', color: '#4f8ef7' },
  { icon: '💉', name: 'C3 Wellness', desc: '', color: '#c084fc', img: '/c3wellness.webp' },
  { icon: '📡', name: 'C3 Post', desc: '', color: '#34d399', img: '/c3post.webp' },
  { icon: '🏥', name: 'C3 Retail', desc: '', color: '#f472b6', img: '/c3retail.png' },
  { icon: '❄️', name: 'Connect N Grow', desc: '', color: '#60a5fa', img: '/connectandgrow.webp' },
  { icon: '📋', name: 'HealthCare Job', desc: '', color: '#fb923c', img: '/healthcarejob.webp' },
  { icon: '🚀', name: 'AllTrak', desc: '', color: '#facc15' },
  { icon: '🔗', name: 'C3 HRMS', desc: '', color: '#2dd4bf' },
]

const SIZE = 600
const CX = 300, CY = 300, R = 212

// Build node positions + cubic-bezier spiral arm control points
const nodes = products.map((p, i) => {
  const deg = i * 45 - 90
  const rad = (deg * Math.PI) / 180
  const x = CX + R * Math.cos(rad)
  const y = CY + R * Math.sin(rad)

  // Spiral arm: sweep CCW by ~72° at cp1 (near center) and ~38° at cp2 (outer)
  // This produces the curving trailing-arm look of a galaxy
  const cp1Rad = ((deg - 72) * Math.PI) / 180
  const cp1x = CX + 82 * Math.cos(cp1Rad)
  const cp1y = CY + 82 * Math.sin(cp1Rad)

  const cp2Rad = ((deg - 36) * Math.PI) / 180
  const cp2x = CX + 158 * Math.cos(cp2Rad)
  const cp2y = CY + 158 * Math.sin(cp2Rad)

  return { ...p, x, y, cp1x, cp1y, cp2x, cp2y }
})

// 90 stars distributed via golden-angle spiral (avoids obvious patterns)
const STARS = Array.from({ length: 90 }, (_, i) => ({
  cx: (Math.sin(i * 2.399) * 0.47 + 0.5) * SIZE,
  cy: (Math.cos(i * 2.399) * 0.47 + 0.5) * SIZE,
  r: [0.65, 0.9, 1.2, 0.5, 0.8][i % 5],
  cls: `pstar pstar--${i % 4}`,
  style: {
    '--dur': `${2.2 + (i % 7) * 0.55}s`,
    '--del': `${(i % 13) * 0.32}s`,
  },
}))

export default function Products() {
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

        <div className="products__galaxy">
          {/* ── SVG: stars / nebula / rings / spiral arms ── */}
          <svg
            className="products__svg"
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              {/* Galaxy core gradient */}
              <radialGradient id="gCore" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.95" />
                <stop offset="28%" stopColor="#4f8ef7" stopOpacity="0.6" />
                <stop offset="65%" stopColor="#1e3a6e" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#080d1a" stopOpacity="0" />
              </radialGradient>
              {/* Specular shine on core */}
              <radialGradient id="gShine" cx="38%" cy="32%" r="55%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
                <stop offset="55%" stopColor="#a78bfa" stopOpacity="0.18" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
              {/* Soft glow filter for arms */}
              <filter id="fArmGlow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="4" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              {/* Blur filters */}
              <filter id="fBlur12" x="-120%" y="-120%" width="340%" height="340%">
                <feGaussianBlur stdDeviation="12" />
              </filter>
              <filter id="fBlur28" x="-120%" y="-120%" width="340%" height="340%">
                <feGaussianBlur stdDeviation="28" />
              </filter>
              {/* Per-product arm gradients (center → node) */}
              {nodes.map((n, i) => (
                <linearGradient key={i} id={`gA${i}`}
                  gradientUnits="userSpaceOnUse"
                  x1={CX} y1={CY} x2={n.x} y2={n.y}>
                  <stop offset="0%" stopColor={n.color} stopOpacity="0.95" />
                  <stop offset="100%" stopColor={n.color} stopOpacity="0.3" />
                </linearGradient>
              ))}
            </defs>

            {/* ── 1. Star field ── */}
            {STARS.map((s, i) => (
              <circle key={i} cx={s.cx} cy={s.cy} r={s.r}
                fill="white" className={s.cls} style={s.style} />
            ))}

            {/* ── 2. Diffuse galaxy nebula glow ── */}
            <ellipse cx={CX} cy={CY} rx="230" ry="185"
              fill="url(#gCore)" filter="url(#fBlur28)"
              className="gx-nebula" />

            {/* ── 3. Rotating dashed orbital rings ── */}
            <g className="gx-ring gx-ring--1" style={{ transformOrigin: `${CX}px ${CY}px` }}>
              <circle cx={CX} cy={CY} r="80"
                fill="none" stroke="rgba(124,58,237,0.32)"
                strokeWidth="0.8" strokeDasharray="5 9" />
            </g>
            <g className="gx-ring gx-ring--2" style={{ transformOrigin: `${CX}px ${CY}px` }}>
              <circle cx={CX} cy={CY} r="142"
                fill="none" stroke="rgba(79,142,247,0.2)"
                strokeWidth="0.65" strokeDasharray="8 14" />
            </g>
            <g className="gx-ring gx-ring--3" style={{ transformOrigin: `${CX}px ${CY}px` }}>
              <circle cx={CX} cy={CY} r="212"
                fill="none" stroke="rgba(79,142,247,0.12)"
                strokeWidth="0.5" strokeDasharray="4 20" />
            </g>

            {/* ── 4. Arm base — very faint guide line ── */}
            {nodes.map((n, i) => (
              <path key={`ab${i}`}
                d={`M${CX},${CY} C${n.cp1x},${n.cp1y} ${n.cp2x},${n.cp2y} ${n.x},${n.y}`}
                fill="none" stroke={n.color} strokeWidth="0.7" opacity="0.1" />
            ))}

            {/* ── 5. Arm glow layer (blurred backdrop) ── */}
            {nodes.map((n, i) => (
              <path key={`ag${i}`}
                d={`M${CX},${CY} C${n.cp1x},${n.cp1y} ${n.cp2x},${n.cp2y} ${n.x},${n.y}`}
                fill="none" stroke={n.color} strokeWidth="5" opacity="0.07"
                filter="url(#fBlur12)" />
            ))}

            {/* ── 6. Animated particle stream along each arm ── */}
            {nodes.map((n, i) => (
              <path key={`af${i}`}
                d={`M${CX},${CY} C${n.cp1x},${n.cp1y} ${n.cp2x},${n.cp2y} ${n.x},${n.y}`}
                fill="none"
                stroke={`url(#gA${i})`}
                strokeWidth="2"
                strokeLinecap="round"
                filter="url(#fArmGlow)"
                strokeDasharray="55 270"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="325" to="-325"
                  dur={`${1.55 + i * 0.17}s`}
                  repeatCount="indefinite"
                  begin={`${-i * 0.25}s`}
                />
              </path>
            ))}

            {/* ── 7. Second smaller particle on each arm (offset timing) ── */}
            {nodes.map((n, i) => (
              <path key={`af2${i}`}
                d={`M${CX},${CY} C${n.cp1x},${n.cp1y} ${n.cp2x},${n.cp2y} ${n.x},${n.y}`}
                fill="none"
                stroke={n.color}
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeDasharray="22 308"
                opacity="0.55"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="330" to="-330"
                  dur={`${1.55 + i * 0.17}s`}
                  repeatCount="indefinite"
                  begin={`${-i * 0.25 - 0.5}s`}
                />
              </path>
            ))}

            {/* ── 8. Pulsing halo ring around each node ── */}
            {nodes.map((n, i) => (
              <circle key={`nh${i}`}
                cx={n.x} cy={n.y} r="27"
                fill="none" stroke={n.color}
                strokeWidth="0.75" opacity="0.3"
                className="gx-halo"
                style={{
                  transformBox: 'fill-box',
                  transformOrigin: 'center',
                  animationDelay: `${i * 0.28}s`,
                }}
              />
            ))}

            {/* ── 9. Galaxy core glow (inner) ── */}
            <circle cx={CX} cy={CY} r="85"
              fill="url(#gCore)" filter="url(#fBlur12)"
              className="gx-core-glow" style={{ transformBox: 'fill-box', transformOrigin: 'center' }} />

            {/* ── 10. Core specular shine ── */}
            <circle cx={CX} cy={CY} r="36"
              fill="url(#gShine)" opacity="0.9"
              className="gx-core-shine" style={{ transformBox: 'fill-box', transformOrigin: 'center' }} />
          </svg>

          {/* ── HTML: center badge ── */}
          <div className="products__center">
            <div className="products__center-ring products__center-ring--outer" />
            <div className="products__center-ring products__center-ring--inner" />
            <img
              src="/cnclogo.png"
              alt="C3 Credent"
              className="products__center-logo"
            />
          </div>

          {/* ── HTML: product cards ── */}
          {nodes.map((n, i) => (
            <div
              key={n.name}
              className="products__node"
              style={{
                left: `${(n.x / SIZE) * 100}%`,
                top: `${(n.y / SIZE) * 100}%`,
                '--accent': n.color,
                animationDelay: `${i * 0.14}s`,
              }}
            >
              <div className="products__node-card">
                {n.img
                  ? <img src={n.img} alt={n.name} className="products__node-img" />
                  : <span className="products__node-icon">{n.icon}</span>
                }
                <span className="products__node-name">{n.name}</span>
                <span className="products__node-desc">{n.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

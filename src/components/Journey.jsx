import { useState } from 'react'
import './Journey.css'

const slides = [
  {
    num: '01',
    category: 'FIELD OPERATIONS',
    title: 'Sample',
    titleAccent: 'collection.',
    desc: 'Trained phlebotomists dispatched to patient locations — homes, offices, and partner sites — across 632+ cities with real-time scheduling.',
    stats: [
      { value: '632+', label: 'Cities Covered' },
      { value: '2,200+', label: 'Phlebotomists' },
      { value: '6M+', label: 'Home Collections' },
    ],
    visual: (
      <svg viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="journey-slide__svg">
        <circle cx="130" cy="100" r="70" stroke="rgba(30,111,217,0.2)" strokeWidth="1" />
        <circle cx="130" cy="100" r="50" stroke="rgba(30,111,217,0.3)" strokeWidth="1" />
        <circle cx="130" cy="100" r="8" fill="var(--accent)" />
        {[0,60,120,180,240,300].map((deg, i) => {
          const r = 70, rad = (deg * Math.PI) / 180
          const x = 130 + r * Math.cos(rad), y = 100 + r * Math.sin(rad)
          return <circle key={i} cx={x} cy={y} r="5" fill="var(--accent-soft)" opacity="0.8" />
        })}
        <text x="130" y="185" textAnchor="middle" fill="rgba(30,111,217,0.5)" fontSize="9" fontFamily="Inter" letterSpacing="2">LIVE · 47 PHLEBOTOMISTS</text>
      </svg>
    ),
  },
  {
    num: '02',
    category: 'SAMPLE INTEGRITY',
    title: 'Secure',
    titleAccent: 'packaging.',
    desc: 'Bio-safe, tamper-evident packaging engineered for diagnostic integrity. Every box barcoded, every seal verified, every hand-off logged.',
    stats: [
      { value: 'ISO', label: 'Certified' },
      { value: '3-layer', label: 'Bio-Safe' },
      { value: '100%', label: 'Barcoded' },
    ],
    visual: (
      <svg viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="journey-slide__svg">
        <rect x="80" y="60" width="100" height="80" rx="4" stroke="var(--accent)" strokeWidth="1.5" fill="rgba(30,111,217,0.05)" />
        <rect x="80" y="60" width="100" height="20" rx="4" fill="rgba(30,111,217,0.12)" />
        <rect x="95" y="105" width="70" height="18" rx="3" fill="rgba(30,111,217,0.15)" stroke="var(--accent)" strokeWidth="1" />
        <text x="130" y="119" textAnchor="middle" fill="var(--accent)" fontSize="8" fontFamily="Inter" letterSpacing="1">TAMPER-EVIDENT</text>
        {[95,100,105,110,115,120,125,130,135,140,145,150,155].map((x, i) => (
          <line key={i} x1={x} y1="112" x2={x} y2="120" stroke="var(--accent-soft)" strokeWidth={i % 3 === 0 ? 2 : 0.8} opacity="0.6" />
        ))}
        <text x="200" y="72" fill="rgba(30,111,217,0.5)" fontSize="8" fontFamily="Inter">ISO</text>
        <text x="130" y="185" textAnchor="middle" fill="rgba(30,111,217,0.5)" fontSize="9" fontFamily="Inter" letterSpacing="2">BIO-SAFE · TAMPER-EVIDENT</text>
      </svg>
    ),
  },
  {
    num: '03',
    category: 'COLD CHAIN',
    title: 'Temperature',
    titleAccent: 'controlled.',
    desc: 'Samples moved at 2–8°C with unbroken temperature monitoring end-to-end. Every deviation logged, every excursion flagged in real-time.',
    stats: [
      { value: '2–8°C', label: 'Maintained' },
      { value: '39M+', label: 'Samples FY24' },
      { value: '100%', label: 'Monitored' },
    ],
    visual: (
      <svg viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="journey-slide__svg">
        <polyline points="40,140 70,100 100,120 130,80 160,90 190,60 220,70" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
        <polyline points="40,140 70,100 100,120 130,80 160,90 190,60 220,70" stroke="rgba(30,111,217,0.15)" strokeWidth="8" fill="none" />
        {[40,70,100,130,160,190,220].map((x, i) => {
          const ys = [140,100,120,80,90,60,70]
          return <circle key={i} cx={x} cy={ys[i]} r="3.5" fill="var(--accent)" />
        })}
        <line x1="40" y1="50" x2="40" y2="155" stroke="rgba(13,38,72,0.15)" strokeWidth="1" />
        <line x1="40" y1="155" x2="225" y2="155" stroke="rgba(13,38,72,0.15)" strokeWidth="1" />
        <text x="130" y="185" textAnchor="middle" fill="rgba(30,111,217,0.5)" fontSize="9" fontFamily="Inter" letterSpacing="2">TEMPERATURE LOG · LIVE</text>
      </svg>
    ),
  },
  {
    num: '04',
    category: 'LIVE VISIBILITY',
    title: 'Real-time tracking,',
    titleAccent: 'smart fleet.',
    desc: 'Every vehicle, every sample — visible on one dashboard. GPS-linked, geofenced, and routed by an algorithm that re-optimises every ninety seconds.',
    stats: [
      { value: 'Live', label: 'GPS Feed' },
      { value: '90s', label: 'Re-routing' },
      { value: '120+', label: 'Cities' },
    ],
    visual: (
      <svg viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="journey-slide__svg">
        <ellipse cx="130" cy="110" rx="80" ry="55" stroke="rgba(30,111,217,0.25)" strokeWidth="1" fill="rgba(30,111,217,0.04)" />
        <ellipse cx="130" cy="110" rx="55" ry="38" stroke="rgba(30,111,217,0.15)" strokeWidth="1" fill="none" />
        {[
          {cx:90,cy:85,label:'DEL'},{cx:155,cy:78,label:'KOL'},
          {cx:75,cy:118,label:'MUM'},{cx:138,cy:128,label:'BLR'},{cx:168,cy:138,label:'CHE'}
        ].map((d,i)=>(
          <g key={i}>
            <circle cx={d.cx} cy={d.cy} r="5" fill="var(--accent)" opacity="0.85" />
            <text x={d.cx+8} y={d.cy+4} fill="rgba(30,111,217,0.7)" fontSize="8" fontFamily="Inter">{d.label}</text>
          </g>
        ))}
        <text x="158" y="65" fill="rgba(30,111,217,0.5)" fontSize="8" fontFamily="Inter" letterSpacing="1">LIVE · 47 VEHICLES</text>
        <text x="130" y="185" textAnchor="middle" fill="rgba(30,111,217,0.5)" fontSize="9" fontFamily="Inter" letterSpacing="2">FLEET TRACKING · LIVE</text>
      </svg>
    ),
  },
  {
    num: '05',
    category: 'NETWORK & ROUTING',
    title: 'Optimised logistics,',
    titleAccent: 'end-to-end.',
    desc: 'A supply chain that learns. Dynamic dispatch, consolidation hubs, and reverse-logistics loops — all tuned by the same engine that picks your rider.',
    stats: [
      { value: '11', label: 'Decision Inputs' },
      { value: '23%', label: 'Cost Saved' },
      { value: '99.2%', label: 'SLA Met' },
    ],
    visual: (
      <svg viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="journey-slide__svg">
        {[
          [80,60],[185,60],[60,130],[130,105],[200,130],[130,168]
        ].map(([x,y],i,arr)=> arr.slice(i+1).map(([x2,y2],j)=>(
          <line key={`${i}-${j}`} x1={x} y1={y} x2={x2} y2={y2} stroke="rgba(30,111,217,0.12)" strokeWidth="1" />
        )))}
        {[[80,60,'HUB-01'],[185,60,'HUB-02'],[60,130,''],[130,105,'CORE'],[200,130,''],[130,168,'HUB-05']].map(([x,y,label],i)=>(
          <g key={i}>
            <circle cx={x} cy={y} r={label==='CORE'?10:5} fill={label==='CORE'?'var(--accent)':'rgba(30,111,217,0.4)'} />
            {label && <text x={Number(x)+12} y={Number(y)+4} fill="rgba(30,111,217,0.65)" fontSize="8" fontFamily="Inter">{label}</text>}
          </g>
        ))}
        <line x1="80" y1="60" x2="130" y2="105" stroke="var(--accent)" strokeWidth="1.5" />
        <line x1="185" y1="60" x2="130" y2="105" stroke="var(--accent)" strokeWidth="1.5" />
        <line x1="130" y1="105" x2="130" y2="168" stroke="var(--accent)" strokeWidth="1.5" />
        <text x="130" y="192" textAnchor="middle" fill="rgba(30,111,217,0.5)" fontSize="9" fontFamily="Inter" letterSpacing="2">OPTIMAL PATH · 11 INPUTS</text>
      </svg>
    ),
  },
  {
    num: '06',
    category: 'CHAIN OF CUSTODY',
    title: 'Digital',
    titleAccent: 'traceability.',
    desc: 'Real-time tracking dashboard from collection to result delivery. Verified handover protocols with digital chain-of-custody at every step.',
    stats: [
      { value: '100%', label: 'Digital CoC' },
      { value: '36M+', label: 'Samples Tracked' },
      { value: 'Live', label: 'Dashboard' },
    ],
    visual: (
      <svg viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="journey-slide__svg">
        {[40,80,120,160,200].map((x,i)=>(
          <g key={i}>
            <rect x={x-14} y={75} width={28} height={50+i*5} rx="3" fill="rgba(30,111,217,0.12)" stroke="rgba(30,111,217,0.2)" strokeWidth="1" />
            <rect x={x-14} y={75+(50+i*5)-(20+i*8)} width={28} height={20+i*8} rx="3" fill="var(--accent)" opacity="0.5" />
          </g>
        ))}
        <line x1="26" y1="75" x2="214" y2="75" stroke="rgba(13,38,72,0.1)" strokeWidth="1" strokeDasharray="3,3" />
        {[40,80,120,160,200].map((x,i)=>(
          <text key={i} x={x} y="145" textAnchor="middle" fill="rgba(30,111,217,0.5)" fontSize="7" fontFamily="Inter">
            {['COL','PKG','TRN','RCV','RPT'][i]}
          </text>
        ))}
        <text x="130" y="185" textAnchor="middle" fill="rgba(30,111,217,0.5)" fontSize="9" fontFamily="Inter" letterSpacing="2">TRACEABILITY · FULL CHAIN</text>
      </svg>
    ),
  },
]

export default function Journey() {
  const [current, setCurrent] = useState(0)
  const total = slides.length
  const slide = slides[current]

  const prev = () => setCurrent((current - 1 + total) % total)
  const next = () => setCurrent((current + 1) % total)

  return (
    <section className="journey" id="journey">
      <div className="journey__inner">

        <div className="journey__header">
          <div className="journey__header-left">
            <p className="journey__label">Pre-analytical logistics</p>
            <h2 className="journey__title">
              Every point in the<br />
              pre-analytical journey.<br />
              <em>Covered.</em>
            </h2>
          </div>
          <div className="journey__header-right">
            <p className="journey__subtitle">
              Seamless control across the entire pre-analytical
              network — from first call to lab handover.
            </p>
          </div>
        </div>

        <div className="journey__carousel">
          <div className="journey__slide">
            <div className="journey__slide-left">
              <div className="journey__slide-meta">
                <span className="journey__slide-dot" />
                <span className="journey__slide-count">{slide.num} / {String(total).padStart(2,'0')} · STEP</span>
              </div>
              <p className="journey__slide-category">{slide.category}</p>
              <h3 className="journey__slide-title">
                {slide.title}<br />
                <em>{slide.titleAccent}</em>
              </h3>
              <p className="journey__slide-desc">{slide.desc}</p>
              <div className="journey__slide-stats">
                {slide.stats.map((s) => (
                  <div key={s.label} className="journey__stat">
                    <span className="journey__stat-value">{s.value}</span>
                    <span className="journey__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="journey__slide-right">
              {slide.visual}
            </div>
          </div>
        </div>

        <div className="journey__controls">
          <button className="journey__nav" onClick={prev} aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="journey__dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`journey__dot${i === current ? ' journey__dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <span className="journey__counter">{slide.num} / {String(total).padStart(2,'0')}</span>

          <button className="journey__nav" onClick={next} aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}

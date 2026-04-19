import { useEffect, useRef, useState } from 'react'
import './KeyDifferentiators.css'
import './WorkingWithCredent.css'

const bars = [
  { label: 'Confidentiality', pct: 100, color: '#2d7dd2' },
  { label: 'Technology',      pct: 98,  color: '#f0a500' },
  { label: 'Reach',           pct: 95,  color: '#5c5fa6' },
  { label: 'TAT',             pct: 97,  color: '#e05c8a' },
  { label: 'HR',              pct: 93,  color: '#c0396b' },
  { label: 'DATA',            pct: 99,  color: '#6b7280' },
]

const differentiators = [
  {
    label: 'Confidentiality',
    desc: "It's the most crucial factor to Success and Growth. We maintain privacy and confidentiality of everything related to the business interest of our clients.",
  },
  {
    label: 'Technology',
    desc: 'Technology enabled services make us superior. We make use of the top-notch technologies to always remain ahead of time.',
  },
  {
    label: 'Reach',
    desc: 'We have established our PAN India presence with penetration in 451+ cities across India. We are capable of serving every corner of the country.',
  },
  {
    label: 'TAT',
    desc: 'Single Window Service enables us to ascertain the fastest Turn Around Time (TAT).',
  },
  {
    label: 'HR Services',
    desc: 'Through trained and competent manpower, we offer the best HR Services to meet your needs for personnel with industry knowledge.',
  },
  {
    label: 'DATA Bank',
    desc: 'We are enriched by a Rich Data Bank while delivering various Health Care projects.',
  },
]

function AnimatedBar({ label, pct, color, animate }) {
  return (
    <div className="kd-bar-row">
      <div className="kd-bar-track">
        <div
          className="kd-bar-fill"
          style={{
            background: color,
            width: animate ? `${pct}%` : '0%',
          }}
        >
          <span className="kd-bar-label">{label}</span>
        </div>
        <span className="kd-bar-pct">{pct}%</span>
      </div>
    </div>
  )
}

export default function KeyDifferentiators() {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="cp-page kd-page">

      <div className="wwc-intro">
        <h1 className="wwc-intro__title">Our Key <span>Differentiators</span></h1>
        <p className="wwc-intro__sub">
          Our organization is based on a set of core values that enables us to stand apart.
          Strictly adhering to our ethics, we at Credent Group are surging ahead in the path of progress.
        </p>
      </div>

      <div className="wwc-body">
        <div className="kd-split">

          {/* Left — animated bars */}
          <div className="kd-bars" ref={ref}>
            {bars.map((b) => (
              <AnimatedBar key={b.label} {...b} animate={animate} />
            ))}
          </div>

          {/* Right — descriptions */}
          <div className="kd-list">
            {differentiators.map((d) => (
              <div key={d.label} className="kd-item">
                <span className="kd-check">✓</span>
                <p>
                  <strong>{d.label} : </strong>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

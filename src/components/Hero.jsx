import './Hero.css'

const stats = [
  { value: '452+', label: 'Cities Across India' },
  { value: '35+', label: 'Air Routes — Sample Logistics' },
  { value: '2–8°C', label: 'Temperature Precision — Cold Chain' },
  { value: '12 yr', label: 'In Operation — Trusted Nationwide' },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-grid" />
      <div className="hero__glow" />

      <div className="hero__inner">
        <div className="hero__left">
          <div className="hero__badge">Pre-analytical logistics, reimagined</div>

          <h1 className="hero__headline">
            Your sample <br />
            <em>our trusted</em><br />
            network.
          </h1>

          <p className="hero__sub">
            India's most reliable cold-chain logistics network for diagnostics,
            hospitals, and healthcare enterprises.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">Partner with us</a>
            <a href="#products" className="btn btn--ghost">Explore products →</a>
          </div>
        </div>

        <div className="hero__stats">
          {stats.map((s) => (
            <div key={s.value} className="hero__stat">
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

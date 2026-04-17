import './Journey.css'

const points = [
  {
    icon: '🧪',
    title: 'Sample Collection',
    desc: 'Trained phlebotomists dispatched to patient locations across 632+ cities.',
  },
  {
    icon: '📦',
    title: 'Secure Packaging',
    desc: 'Bio-safe, tamper-evident packaging engineered for diagnostic integrity.',
  },
  {
    icon: '❄️',
    title: 'Cold Chain Transport',
    desc: 'Samples moved at 2–8°C with unbroken temperature monitoring end-to-end.',
  },
  {
    icon: '🚚',
    title: 'Last-Mile Delivery',
    desc: 'Air and road routes ensuring nothing stops the sample journey.',
  },
  {
    icon: '🔬',
    title: 'Lab Receipt',
    desc: 'Verified handover protocols with digital chain-of-custody at every step.',
  },
  {
    icon: '📊',
    title: 'Reporting & Traceability',
    desc: 'Real-time tracking dashboard from collection to result delivery.',
  },
]

export default function Journey() {
  return (
    <section className="journey" id="journey">
      <div className="journey__inner">
        <div className="journey__header">
          <p className="section-label">Pre-analytical logistics</p>
          <h2 className="journey__title">
            Every point in the pre-analytical<br />journey. <em>Covered.</em>
          </h2>
          <p className="journey__desc">
            seamless control across the entire pre analytical
            network
          </p>
        </div>

        <div className="journey__grid">
          {points.map((p) => (
            <div key={p.title} className="journey__card">
              <div className="journey__card-icon">{p.icon}</div>
              <h3 className="journey__card-title">{p.title}</h3>
              <p className="journey__card-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

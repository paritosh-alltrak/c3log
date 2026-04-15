import './Infrastructure.css'

const pillars = [
  { num: '01', title: 'Temperature Monitoring', desc: 'IoT-enabled sensors log temperature every 30 seconds across the entire cold chain.' },
  { num: '02', title: 'Real-time Visibility', desc: 'Live GPS tracking of every vehicle and sample bag from pickup to delivery.' },
  { num: '03', title: 'Compliance & Audit', desc: 'NABL-ready documentation, chain-of-custody logs, and automated audit trails.' },
  { num: '04', title: 'Scalable Fleet', desc: 'A network of trained riders and dedicated cold-chain vehicles ready to scale.' },
]

export default function Infrastructure() {
  return (
    <section className="infra" id="about">
      <div className="infra__inner">
        <div className="infra__left">
          <p className="section-label">Our infrastructure</p>
          <h2 className="infra__title">
            From your result begins<br />
            long before the lab.<br />
            <em>The infrastructure that<br />makes that possible —<br />that's us.</em>
          </h2>
          <p className="infra__desc">
            We've spent years building the backbone of diagnostic logistics —
            so labs can focus on science, hospitals on care, and patients on healing.
          </p>
          <a href="#contact" className="btn btn--primary" style={{ display: 'inline-flex', marginTop: 32 }}>
            Learn more →
          </a>
        </div>

        <div className="infra__right">
          {pillars.map((p) => (
            <div key={p.num} className="infra__pillar">
              <span className="infra__pillar-num">{p.num}</span>
              <div>
                <h3 className="infra__pillar-title">{p.title}</h3>
                <p className="infra__pillar-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

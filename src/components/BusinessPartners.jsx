import './BusinessPartners.css'

const partners = [
  'Dr. Lal PathLabs',
  'MAX Healthcare',
  'Apollo Diagnostics',
  'Sterling Accuris',
  'Redcliffe Labs',
  'Lupin Diagnostics',
  'Neuberg',
  'PathCare Diagnostics',
  'Tata 1mg',
  'CORE Diagnostics',
  'Health Avenue',
  'Genestrings',
  'Dr. Dangs Lab',
  'Northstar Pathology',
  'OneCell Diagnostics',
  'BeatO',
  'Suburban Diagnostics',
  'Rivaara Labs',
  'Agilus Diagnostics',
  'Medanta',
  'Pathkind Labs',
  'Metropolis',
  'Aster Labs',
  'Collateral Medical',
  'AMPATH',
  'LifeCell Diagnostics',
  'Oncquest Labs',
  'Reliance Life Sciences',
  'mfine',
  'Paliwal Diagnostics',
]

export default function BusinessPartners() {
  return (
    <section className="bp">
      <div className="bp__inner">
        <div className="bp__header">
          <span className="bp__label">Business Partners</span>
          <h2 className="bp__title">
            Trusted by <span className="bp__title-accent">India's Leading Diagnostics Brands</span>
          </h2>
          <p className="bp__subtitle">
            Our partner network controls 80% of India's organised diagnostics market — the strongest partner portfolio in the sector.
          </p>
          <div className="bp__divider" />
        </div>

        <div className="bp__grid">
          {partners.map((name) => (
            <div key={name} className="bp__chip">
              <span className="bp__chip-dot" />
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

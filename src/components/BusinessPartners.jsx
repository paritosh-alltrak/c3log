import './BusinessPartners.css'

const partners = [
  { name: 'Dr. Lal PathLabs', logo: '/company-logo/lalpath.png' },
  { name: 'MAX Healthcare' },
  { name: 'Apollo Diagnostics', logo: '/company-logo/apollo.png' },
  { name: 'Sterling Accuris' },
  { name: 'Redcliffe Labs', logo: '/company-logo/redcliff.png' },
  { name: 'Lupin Diagnostics', logo: '/company-logo/lupin.png' },
  { name: 'Neuberg', logo: '/company-logo/neuberg.png' },
  { name: 'PathCare Diagnostics' },
  { name: 'Tata 1mg' },
  { name: 'CORE Diagnostics' },
  { name: 'Health Avenue' },
  { name: 'Genestrings' },
  { name: 'Dr. Dangs Lab' },
  { name: 'Northstar Pathology' },
  { name: 'OneCell Diagnostics' },
  { name: 'BeatO' },
  { name: 'Suburban Diagnostics' },
  { name: 'Rivaara Labs' },
  { name: 'Agilus Diagnostics' },
  { name: 'Medanta' },
  { name: 'Pathkind Labs', logo: '/company-logo/pathkind.png' },
  { name: 'Metropolis', logo: '/company-logo/metropolis.png' },
  { name: 'Aster Labs' },
  { name: 'Collateral Medical' },
  { name: 'AMPATH' },
  { name: 'LifeCell Diagnostics' },
  { name: 'Oncquest Labs' },
  { name: 'Reliance Life Sciences' },
  { name: 'Healthians', logo: '/company-logo/healthians.png' },
  { name: 'SRL Diagnostics', logo: '/company-logo/srl.png' },
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
            Our logistics network services with India's premium diagnostics players — the strongest partner portfolio in the sector.
          </p>
          <div className="bp__divider" />
        </div>

        <div className="bp__grid">
          {partners.filter(({ logo }) => logo).map(({ name, logo }) => (
            <div key={name} className="bp__chip">
              <img src={logo} alt={name} className="bp__chip-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

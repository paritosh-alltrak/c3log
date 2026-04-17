import './BusinessPartners.css'

const partners = [
  { name: 'Dr. Lal PathLabs',        logo: '/drlalpath.webp' },
  { name: 'MAX Healthcare',           logo: '/max.webp' },
  { name: 'Apollo Diagnostics',       logo: '/apollo.webp' },
  { name: 'Sterling Accuris' },
  { name: 'Redcliffe Labs',           logo: '/redcliff.webp' },
  { name: 'Lupin Diagnostics',        logo: '/lupin.webp' },
  { name: 'Neuberg',                  logo: '/neuberg.webp' },
  { name: 'PathCare Diagnostics' },
  { name: 'Tata 1mg' },
  { name: 'CORE Diagnostics' },
  { name: 'Health Avenue' },
  { name: 'Genestrings' },
  { name: 'Dr. Dangs Lab',            logo: '/drdangs.webp' },
  { name: 'Northstar Pathology' },
  { name: 'OneCell Diagnostics' },
  { name: 'BeatO' },
  { name: 'Suburban Diagnostics' },
  { name: 'Rivaara Labs' },
  { name: 'Agilus Diagnostics' },
  { name: 'Medanta' },
  { name: 'Pathkind Labs' },
  { name: 'Metropolis',               logo: '/metropolis.webp' },
  { name: 'Aster Labs' },
  { name: 'Collateral Medical' },
  { name: 'AMPATH' },
  { name: 'LifeCell Diagnostics' },
  { name: 'Oncquest Labs',            logo: '/onquest.webp' },
  { name: 'Reliance Life Sciences' },
  { name: 'mfine' },
  { name: 'Paliwal Diagnostics' },
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

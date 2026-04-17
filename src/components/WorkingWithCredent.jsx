import './CompanyProfile.css'
import './WorkingWithCredent.css'

const perks = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Family Atmosphere',
    desc: 'A true family atmosphere where the pleasure of working is communicative — you will be motivated, rewarded and promoted.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Continuous Growth',
    desc: 'We invest in our people and work to ensure everyone has the opportunity to learn new skills and improve the skills they already have.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: 'Competitive Packages',
    desc: 'We offer competitive compensation packages and the reward of professional career opportunities in a dynamic company.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Diverse Opportunities',
    desc: 'A world of opportunities across numerous fields — logistics, operations, IT, management, customer care and more.',
  },
]

export default function WorkingWithCredent({ onNavigate }) {
  return (
    <div className="cp-page wwc-page">

      <div className="wwc-intro">

        <h1 className="wwc-intro__title">Working with <span>Credent</span></h1>
        <p className="wwc-intro__sub">
          We want our company to evolve with its employees — join a team where your skills are valued and your career grows.
        </p>

      </div>

      <div className="wwc-body">

        <div className="wwc-lead">
          <p>
            A world of opportunities awaits you at Credent Group, in numerous fields of expertise.
            Nothing can be achieved without responsible, competent and high-performing people capable
            of working as a team. Our recruitment and selection procedures are designed to attract and
            inspire all people who are competent and looking to develop in a dynamic company.
          </p>
        </div>

        <div className="wwc-perks">
          {perks.map((p, i) => (
            <div key={i} className="wwc-perk">
              <div className="wwc-perk__icon">{p.icon}</div>
              <h3 className="wwc-perk__title">{p.title}</h3>
              <p className="wwc-perk__desc">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="wwc-cta">
          <div className="wwc-cta__text">
            <h2>Ready to join us?</h2>
            <p>Send us your latest resume or browse our current openings.</p>
          </div>
          <div className="wwc-cta__actions">
            <button className="wwc-btn" onClick={() => onNavigate('job-application')}>
              Apply Now
            </button>
            <button className="wwc-btn wwc-btn--outline" onClick={() => onNavigate('current-opening')}>
              View Current Openings
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

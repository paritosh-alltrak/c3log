import './WorkingWithCredent.css'
import './Training.css'

const sections = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Phlebotomist Hiring Tools & Procedure',
    intro: 'Phlebotomy involves puncturing the vein to collect blood samples for medical diagnosis. We train phlebotomists to draw blood samples from patients as well as collect and carry specimens safely to the laboratory.',
    points: [
      'Collection of blood samples from patients.',
      'Patient identification, especially when working in a hospital.',
      'Label vials with patient names and dates.',
      'Best method for drawing blood depending on the specific patient.',
      'Transportation of specimen samples to a nearby laboratory.',
      'Centrifuge blood samples where permitted.',
      'Working with a large number of patients varying in age and health status.',
      'Infection control standards at all times.',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'On Site Training For New Recruits',
    points: [
      'Upgrade the knowledge about new technology and SOPs.',
      'Experienced employee passes down their skills to a new employee.',
      'Soft skills training to resolve client issues efficiently.',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: 'Quarterly Training To Enhance The Skills',
    points: [
      'Training about new technical standards and diagnostic tests.',
      'Training about new NABL guidelines.',
      'Training about basic phlebotomy skills to meet quality standards.',
    ],
  },
]

const stages = [
  'Pre-induction training.',
  'Post-induction training.',
  'On-site training for new recruits.',
  'Quarterly training to enhance the skills.',
  'Questionnaire to harness the knowledge.',
]

export default function Training({ onNavigate }) {
  return (
    <div className="cp-page tr-page">

      <div className="wwc-intro">
        <h1 className="wwc-intro__title">Training &amp; <span>Development</span></h1>
        <p className="wwc-intro__sub">
          Structured programs that equip every phlebotomist and field executive with the skills,
          certifications, and confidence required for world-class pre-analytical healthcare logistics.
        </p>
      </div>

      <div className="wwc-body">

        {/* Lead paragraph */}
        <div className="wwc-lead">
          <p>
            We train 1350+ bikers and 1550+ phlebotomists across India through a structured
            multi-stage program — from pre-induction to quarterly skill enhancement — ensuring every
            field executive meets our quality standards before they reach a patient.
          </p>
        </div>

        {/* Training section cards */}
        {sections.map((sec, i) => (
          <div key={i} className="tr-card">
            <div className="tr-card__header">
              <div className="wwc-perk__icon">{sec.icon}</div>
              <h2 className="tr-card__title">{sec.title}</h2>
            </div>
            {sec.intro && <p className="tr-card__intro">{sec.intro}</p>}
            {sec.points && (
              <ul className="tr-card__list">
                {sec.points.map((pt) => (
                  <li key={pt}>
                    <span className="tr-check">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Stages of Training */}
        <div className="tr-stages-card">
          <div className="tr-stages-card__header">
            <h2>Stages of Training</h2>
          </div>
          <div className="tr-stages-grid">
            {stages.map((stage, i) => (
              <div key={i} className="tr-stage-item">
                <span className="tr-stage-num">0{i + 1}</span>
                <span>{stage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="wwc-cta">
          <div className="wwc-cta__text">
            <h2>Want to train with us?</h2>
            <p>Join 1350+ bikers and 1550+ phlebotomists across India.</p>
          </div>
          <div className="wwc-cta__actions">
            <button className="wwc-btn" onClick={() => onNavigate('home')}>
              Get in touch →
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

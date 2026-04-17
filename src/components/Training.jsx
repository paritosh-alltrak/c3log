import './Training.css'

/* Replace these with real image paths in /public once available. */
const IMG_HIRING = '/training-hiring.jpg'
const IMG_ONSITE = '/training-onsite.jpg'
const IMG_QUARTERLY = '/training-quarterly.jpg'

function Section({ image, alt, reverse, title, intro, points, placeholder }) {
  return (
    <div className={`tr-section ${reverse ? 'tr-section--reverse' : ''}`}>
      <div className="tr-section__media">
        {/* If image exists, use it; otherwise show a themed placeholder */}
        <img
          src={image}
          alt={alt}
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        <div className="tr-section__placeholder" aria-hidden="true">
          <span>{placeholder}</span>
        </div>
      </div>

      <div className="tr-section__body">
        <h2 className="tr-section__title">{title}</h2>
        {intro && <p className="tr-section__intro">{intro}</p>}
        {points && (
          <ul className="tr-section__list">
            {points.map((p) => (
              <li key={p}><span className="tr-check">✓</span>{p}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default function Training({ onNavigate }) {
  return (
    <div className="tr-page">

      {/* HERO */}
      <div className="tr-hero">
        <div className="tr-hero__inner">
          <nav className="tr-breadcrumb">
            <span className="tr-breadcrumb__link" onClick={() => onNavigate('home')}>Home</span>
            <span className="tr-breadcrumb__sep">›</span>
            <span>Training</span>
          </nav>
          <h1>Training &amp; Development</h1>
          <p>
            Structured programs that equip every phlebotomist and field executive with
            the skills, certifications, and confidence required for world-class
            pre-analytical healthcare logistics.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="tr-content">
        <Section
          image={IMG_HIRING}
          alt="Phlebotomist collecting sample"
          placeholder="🩺"
          title="Phlebotomist Hiring Tools & Procedure"
          intro="Phlebotomy involves the process of puncturing the vein to collect blood samples for medical diagnosis. We train the phlebotomists to draw blood samples from patients as well as collect and carry the blood samples safely to the laboratory for medical diagnosis. The phlebotomists can work in all kinds of medical facilities. We train the phlebotomists in all processes and procedures."
          points={[
            'Collection of blood samples from patients.',
            'Patient identification, especially when working in a hospital.',
            'Label vials with patient names and dates.',
            'Best method for drawing blood depending on the specific patient.',
            'Transportation of specimen samples to a nearby laboratory.',
            'Centrifuge blood samples, depending on if this is allowed in the state they are working in.',
            'Working with a large number of patients varying in age and health status.',
            'Infection control standards at all times when working with patients and equipment.',
          ]}
        />

        <Section
          reverse
          image={IMG_ONSITE}
          alt="On-site training session"
          placeholder="🧑‍🏫"
          title="On Site Training For New Recruits"
          points={[
            'Upgrade the knowledge about new technology / SOPs.',
            'It consists of an experienced employee passing down their skills to a new employee.',
            'Soft skills training to sort out the client issues.',
          ]}
        />

        <Section
          image={IMG_QUARTERLY}
          alt="Quarterly skills training"
          placeholder="🎓"
          title="Quarterly Training To Enhance The Skills"
          points={[
            'Training about new technical standards and tests.',
            'Training about new NABL guidelines.',
            'Training about basic phlebotomy skills to meet the quality.',
          ]}
        />

        {/* Stages of Training */}
        <div className="tr-stages">
          <h2 className="tr-section__title">Stages of Training</h2>
          <ol className="tr-stages__list">
            <li><span className="tr-stage__num">01</span>Pre-induction training.</li>
            <li><span className="tr-stage__num">02</span>Post-induction training.</li>
            <li><span className="tr-stage__num">03</span>On-site training for new recruits.</li>
            <li><span className="tr-stage__num">04</span>Quarterly training to enhance the skills.</li>
            <li><span className="tr-stage__num">05</span>Questionnaire to harness the knowledge.</li>
          </ol>
        </div>

        <div className="tr-cta">
          <h3>Want to train with us?</h3>
          <p>Join 1350+ bikers and 1550+ phlebotomists across India.</p>
          <button className="tr-cta__btn" onClick={() => onNavigate('home')}>
            Get in touch →
          </button>
        </div>
      </div>
    </div>
  )
}

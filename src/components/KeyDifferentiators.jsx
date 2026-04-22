import './KeyDifferentiators.css'
import './WorkingWithCredent.css'

const differentiators = [
  {
    num: '01',
    title: 'One window. The fastest TAT in the pre-analytics chain.',
    tagline: 'Accountability split across vendors belongs to nobody.',
    body: 'When a sample moves from home collection to lab reception through a single operational layer — no handoffs, no blame transfer — TAT is a promise, not an estimate.',
  },
  {
    num: '02',
    title: '39 million logistics picks. Zero compromise on temperature.',
    tagline: 'The cold chain India\'s diagnostics industry runs on.',
    body: '39 million+ samples picked in FY24. Every one temperature-controlled, tracked, and GDP-documented. Not the priority ones. Everyone.',
  },
  {
    num: '03',
    title: '36 million samples. One chain of custody.',
    tagline: 'Pre-analytics at a scale no competitor has reached.',
    body: 'In FY24, Credent collected and processed 36 million+ samples — 6 million from patients\' homes. Not a capability claim. An operational fact, twelve years in the making.',
  },
  {
    num: '04',
    title: '2,200 field executives. Built for healthcare, not borrowed from logistics.',
    tagline: 'The largest dedicated healthcare field force in India.',
    body: 'Trained from day one in chain of custody, temperature discipline, and lab reception standards. Not a vendor relationship. A Credent workforce.',
  },
  {
    num: '05',
    title: '452 cities. Including the ones your current partner hasn\'t heard of.',
    tagline: 'Tier 2 and Tier 3 depth no cold chain specialist matches.',
    body: 'Bareilly. Muzaffarpur. Warangal. Hapur. Credent built outward from the start — 452 cities, real infrastructure on the ground. Not a pin on a map. A phlebotomist at the door.',
  },
  {
    num: '06',
    title: '36+ clients. Including the names that set the standard.',
    tagline: 'Not a vendor list. A trust record.',
    body: 'Apollo. Lal Pathlabs. Max Healthcare. Metropolis. Tata 1mg. Chose Credent because the infrastructure worked — and kept working at their scale. 12 years. No client who left because the operations failed.',
  },
]

export default function KeyDifferentiators() {
  return (
    <div className="cp-page kd-page">

      <div className="ov-section">
        <h2 className="ov-section__title">Our <span>Values</span></h2>
        <div className="ov-section__body">
          <p className="ov-section__stat">Pre-analytical errors account for 60–70% of all diagnostic mistakes.</p>
          <p className="ov-section__note">Not errors in the lab. Errors before the sample ever arrives.</p>
          <p className="ov-section__text">
            Credent is the only company in India purpose-built to close that gap — a single operational layer
            covering every point in the pre-analytical journey. End to end. Accountable throughout.
          </p>
          <p className="ov-section__close">
            The gap between what the industry has and what it needs — that is the space Credent was built to fill.
          </p>
        </div>
      </div>

      <div className="wwc-intro">
        <h1 className="wwc-intro__title">Our Key <span>Differentiators</span></h1>
        <p className="wwc-intro__sub">
          The numbers that make the argument. The infrastructure that proves it.
        </p>
      </div>

      <div className="wwc-body">
        <div className="kd-grid">
          {differentiators.map((d) => (
            <div key={d.num} className="kd-card">
              <span className="kd-card__num">{d.num}</span>
              <h3 className="kd-card__title">{d.title}</h3>
              <p className="kd-card__tagline">{d.tagline}</p>
              <p className="kd-card__body">{d.body}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

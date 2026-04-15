import './CompanyProfile.css'
import './WorkingWithCredent.css'

export default function WorkingWithCredent({ onNavigate }) {
  return (
    <div className="cp-page">
      <div className="cp-hero">
        <div className="cp-hero__inner">
          <nav className="cp-breadcrumb">
            <span className="cp-breadcrumb__link" onClick={() => onNavigate('home')}>Home</span>
            <span className="cp-breadcrumb__sep">›</span>
            <span>Career</span>
            <span className="cp-breadcrumb__sep">›</span>
            <span>Working with Credent</span>
          </nav>
          <h1>Working with Credent</h1>
        </div>
      </div>

      <div className="cp-content wwc-content">
        <h2 className="cp-title">Working with Credent</h2>

        <p>
          A world of opportunities awaits you at Credent Group, in numerous fields of expertise.
          We want our company to evolve with its employees. We monitor the quality of our work
          environment, a true family atmosphere, where the pleasure of working is communicative
          and where you will be motivated, rewarded and promoted.
        </p>

        <p className="wwc-highlight">
          Nothing can be achieved without responsible, competent and high-performing people,
          capable of working as a team. At Credent Group, we invest in our people and work to
          ensure that everyone has the opportunity to learn new skills and improve skills they
          already have.
        </p>

        <p className="wwc-highlight">
          Our recruitment and selection procedures are designed to attract and inspire all people
          who are competent.
        </p>

        <p className="wwc-highlight">
          Those who are looking for the opportunity to develop and promote themselves in a dynamic
          company, feel free to send your latest resume. We have achieved competitive compensation
          packages and the reward of professional career opportunities.
        </p>

        <div className="wwc-cta-row">
          <button className="wwc-btn" onClick={() => onNavigate('job-application')}>
            Apply Now
          </button>
          <button className="wwc-btn wwc-btn--outline" onClick={() => onNavigate('current-opening')}>
            View Current Openings
          </button>
        </div>
      </div>
    </div>
  )
}

import './CompanyProfile.css'

export default function CompanyProfile({ onNavigate }) {
  return (
    <div className="cp-page">
      <div className="cp-hero">
        <div className="cp-hero__inner">
          <nav className="cp-breadcrumb">
            <span className="cp-breadcrumb__link" onClick={() => onNavigate('home')}>Home</span>
            <span className="cp-breadcrumb__sep">›</span>
            <span>About Us</span>
            <span className="cp-breadcrumb__sep">›</span>
            <span>Company Profile</span>
          </nav>
          <h1>Company Profile</h1>
        </div>
      </div>

      <div className="cp-content">
        <h2 className="cp-title">Credent Group Of Companies</h2>

        <p>
          C3 logistics has step up as the pioneer to transform the healthcare industry with their
          innovated mindset approach with logistic Services, Phlebotomist Service, Home collection
          Services and many more. At Credent, we have the answer to all diagnostic needs.
        </p>

        <p>
          With an indomitable aspiration to achieve every possible thing in a wide spectrum of
          industries, Credent Group has witnessed its inception in the year <strong>2012</strong> by{' '}
          <strong>Karan Sharma</strong> Who is a Founder and CEO of <strong>Credent Group</strong>{' '}
          along with <strong>6 more employees</strong>. With our Head office in Delhi and{' '}
          <strong>10 branch offices in PAN India</strong>. Credent has been established its dignified
          presence in more than <strong>452 cities</strong> and over{' '}
          <strong>4500+ no's of personnel</strong> currently working under Credent payroll. We are
          advancing with the passage of time crossing newer milestones.
        </p>

        <p>
          Today, the Credent Group consists of the following companies catering to the diverse needs
          of our clients
        </p>

        <ul className="cp-companies">
          <li>CREDENT MANAGEMENTS &amp; CONSULTANTS PVT. LTD.</li>
          <li>CREDENT CONNECT N CARE LTD.</li>
          <li>CREDENT TEAM PVT. LTD.</li>
        </ul>

        <p>
          Our Network is our Core Strength. Credent has been empowered by 35+ Air connectivity,
          05+ OTC route connectivity, 6+ Vans, approx. 2500 field executives with bike's and approx.
          2000 Phlebotomists(Home Collection Phlebotomist and Lab Technician). Credent is ready to
          reach every part in PAN India as per the demand of our clients.
        </p>

        <p>
          We envisage a flourishing future and equip us accordingly with new ideas and new verticals
          to withstand the challenges of time. In the years ahead we have plans to setup Inbound &amp;
          outbound call centre, customer care department, front office support and onsite radiology
          services. We are confident of set new benchmarks in these verticals the way we have
          established remarkable presence in all the verticals we are operating currently.
        </p>

        <div className="cp-stats">
          <div className="cp-stat">
            <span className="cp-stat__number">452+</span>
            <span className="cp-stat__label">Cities</span>
          </div>
          <div className="cp-stat">
            <span className="cp-stat__number">4500+</span>
            <span className="cp-stat__label">Personnel</span>
          </div>
          <div className="cp-stat">
            <span className="cp-stat__number">10</span>
            <span className="cp-stat__label">Branch Offices</span>
          </div>
          <div className="cp-stat">
            <span className="cp-stat__number">2012</span>
            <span className="cp-stat__label">Founded</span>
          </div>
        </div>
      </div>
    </div>
  )
}

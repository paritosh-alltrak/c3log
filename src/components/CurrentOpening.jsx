import './CompanyProfile.css'

export default function CurrentOpening({ onNavigate }) {
  return (
    <div className="cp-page">
      <div className="cp-hero">
        <div className="cp-hero__inner">
          <nav className="cp-breadcrumb">
            <span className="cp-breadcrumb__link" onClick={() => onNavigate('home')}>Home</span>
            <span className="cp-breadcrumb__sep">›</span>
            <span>Career</span>
            <span className="cp-breadcrumb__sep">›</span>
            <span>Current Opening</span>
          </nav>
          <h1>Current Opening</h1>
        </div>
      </div>
      <div className="cp-content" />
    </div>
  )
}

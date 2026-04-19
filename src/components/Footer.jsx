import './Footer.css'

export default function Footer({ onNavigate }) {
  const goHomeAnchor = (hash) => (e) => {
    e.preventDefault()
    if (onNavigate) onNavigate('home')
    setTimeout(() => {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  const goPage = (page, section) => (e) => {
    e.preventDefault()
    if (onNavigate) onNavigate(page, section)
  }

  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Brand Column */}
        <div className="footer__brand">
          <a href="/" className="footer__logo-wrap" onClick={goPage('home')}>
            {/* <img src="/image.png" alt="C3 Logo" className="footer__logo-img" /> */}
            <span className="footer__brand-name">Credent Connect N Care Ltd.</span>
          </a>
          <p className="footer__tagline">
            India's trusted healthcare operations partner. Where care keeps moving.
          </p>
          {/* <div className="footer__socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="footer__social-btn">f</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer__social-btn">in</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="footer__social-btn">tw</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="footer__social-btn">yt</a>
          </div> */}
        </div>

        {/* Services Column */}
        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            <li><a href="#services" onClick={goPage('services', 'Phlebotomist Services')}>Phlebotomist Services</a></li>
            <li><a href="#services" onClick={goPage('services', 'Home Collection')}>Home Collection</a></li>
            <li><a href="#services" onClick={goPage('services', 'Cold Chain Logistics')}>Cold Chain Logistics</a></li>
            <li><a href="#services" onClick={goPage('services', 'Corporate Health')}>Corporate Wellness</a></li>
            <li><a href="#services" onClick={goPage('services', 'Lab Technician')}>Lab Technicians</a></li>
            <li><a href="#services" onClick={goPage('services', 'Onsite Radiology Services')}>Onsite Radiology</a></li>
          </ul>
        </div>

        {/* Products Column */}
        <div className="footer__col">
          <h4>Products</h4>
          <ul>
            <li><a href="#products" onClick={goHomeAnchor('#products')}>C3 HRMS</a></li>
            <li><a href="#products" onClick={goHomeAnchor('#products')}>C3 POST</a></li>
            <li><a href="#products" onClick={goHomeAnchor('#products')}>ConnectNGrow</a></li>
            <li><a href="#products" onClick={goHomeAnchor('#products')}>Alltrak</a></li>
            <li><a href="#products" onClick={goHomeAnchor('#products')}>C3 Retail</a></li>
            <li><a href="#products" onClick={goHomeAnchor('#products')}>HealthCare Jobs</a></li>



          </ul>
        </div>

        {/* Company Column */}
        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li><a href="#about" onClick={goPage('company-profile')}>About Us</a></li>
            <li><a href="#journey" onClick={goHomeAnchor('#journey')}>Our Journey</a></li>
            <li><a href="#achievements" onClick={goHomeAnchor('#achievements')}>Achievements</a></li>
            <li><a href="#careers" onClick={goHomeAnchor('#careers')}>Careers</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li><a href="https://info@c3logistics.co.in" target="_blank" rel="noreferrer"> info@c3logistics.co.in</a></li>
            <li><a href="tel:+919821498692">9971777199</a></li>
            {/* <li><a href="tel:+918448164007">8448 164 007</a></li>
            <li><a href="tel:+919289739690">9289 739 690</a></li> */}
            <li>B-3, Second Floor, Nimri Comm Complex,
              Ashok Vihar Ph-IV, Delhi-110052</li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <p>© 2026 Credent Connect N Care Ltd. All rights reserved.</p>
        <div className="footer__bottom-links">
          <a href="#privacy" onClick={goPage('privacy-policy')}>Privacy Policy</a>
          {/* <a href="#terms" onClick={goPage('terms-of-use')}>Terms of Use</a>
          <a href="#sitemap" onClick={goPage('sitemap')}>Sitemap</a> */}
        </div>
      </div>
    </footer>
  )
}

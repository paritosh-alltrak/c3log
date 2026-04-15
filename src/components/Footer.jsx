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

  const goPage = (page) => (e) => {
    e.preventDefault()
    if (onNavigate) onNavigate(page)
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <a href="/" className="footer__logo" onClick={goPage('home')}>
            <span style={{ color: '#4f8ef7' }}>C3</span>Logistics
          </a>
          <p className="footer__tagline">
            India's most reliable pre-analytical<br />logistics network.
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#journey" onClick={goHomeAnchor('#journey')}>Sample Transport</a></li>
              <li><a href="#journey" onClick={goHomeAnchor('#journey')}>Phlebotomy</a></li>
              <li><a href="#journey" onClick={goHomeAnchor('#journey')}>Cold Chain</a></li>
              <li><a href="#journey" onClick={goHomeAnchor('#journey')}>Lab Integration</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about" onClick={goPage('company-profile')}>About</a></li>
              <li><a href="#coverage" onClick={goHomeAnchor('#coverage')}>Coverage</a></li>
              <li><a href="#products" onClick={goHomeAnchor('#products')}>Products</a></li>
              <li><a href="#contact" onClick={goHomeAnchor('#contact')}>Careers</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@c3log.in">hello@c3log.in</a></li>
              <li><a href="tel:+918045678900">+91 80 4567 8900</a></li>
              <li>Bengaluru, India</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} C3Logistics Healthcare Logistics Pvt. Ltd. All rights reserved.</p>
        <div className="footer__bottom-links">
          <a href="#privacy" onClick={goPage('privacy-policy')}>Privacy Policy</a>
          <a href="#privacy" onClick={goPage('privacy-policy')}>Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <a href="/" className="footer__logo">
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
              <li><a href="#journey">Sample Transport</a></li>
              <li><a href="#journey">Phlebotomy</a></li>
              <li><a href="#journey">Cold Chain</a></li>
              <li><a href="#journey">Lab Integration</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#coverage">Coverage</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Careers</a></li>
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
        <p>© 2024 C3Logistics Healthcare Logistics Pvt. Ltd. All rights reserved.</p>
        <div className="footer__bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

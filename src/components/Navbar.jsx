import { useState } from 'react'
import './Navbar.css'
import { serviceSections } from './Services'

const aboutItems = [
  { label: 'Company Profile', page: 'company-profile' },
  { label: 'Mission & Vision', page: 'mission-vision' },
  { label: 'Our Team', page: 'our-team' },
  { label: 'Privacy And Policy', page: 'privacy-policy' },
]

const careerItems = [
  { label: 'Working with Credent', page: 'working-with-credent' },
  { label: 'Current Opening', page: 'current-opening' },
  { label: 'Job Application', page: 'job-application' },
]

export default function Navbar({ onNavigate, currentPage }) {
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [careerOpen, setCareerOpen] = useState(false)
  const [whyUsOpen, setWhyUsOpen] = useState(false)

  const handleNav = (page, section) => {
    if (onNavigate) onNavigate(page, section)
    setOpen(false)
    setAboutOpen(false)
    setServicesOpen(false)
    setCareerOpen(false)
    setWhyUsOpen(false)
  }

  const handleHomeLink = (hash) => {
    if (onNavigate) onNavigate('home')
    setOpen(false)
    setTimeout(() => {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <nav className="navbar">
      <div className="navbar__inner">

        {/* LEFT: LOGO */}
        <span
          className="navbar__logo"
          onClick={() => handleNav('home')}
          style={{ cursor: 'pointer' }}
        >
          <img src="/image.png" alt="C3 Logistics" className="navbar__logo-img" />
        </span>

        {/* CENTER: NAV LINKS */}
        <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>

          <li
            className={`navbar__dropdown-wrap ${aboutOpen ? 'navbar__dropdown-wrap--open' : ''}`}
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <span className="navbar__dropdown-trigger">
              About Us <span className="navbar__chevron">▾</span>
            </span>

            <ul className="navbar__dropdown">
              <div className="navbar__dropdown-inner">
                {aboutItems.map((item) => (
                  <li key={item.page}>
                    <span
                      className={`navbar__dropdown-item ${currentPage === item.page ? 'navbar__dropdown-item--active' : ''}`}
                      onClick={() => handleNav(item.page)}
                    >
                      {item.label}
                    </span>
                  </li>
                ))}
              </div>
            </ul>
          </li>


          {/* SERVICES DROPDOWN */}
          <li
            className={`navbar__dropdown-wrap ${servicesOpen ? 'navbar__dropdown-wrap--open' : ''}`}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span
              className={`navbar__dropdown-trigger ${currentPage === 'services' ? 'navbar__link--active' : ''}`}
              onClick={() => handleNav('services')}
            >
              Services <span className="navbar__chevron">▾</span>
            </span>

            <ul className="navbar__dropdown">
              <div className="navbar__dropdown-inner">
                {serviceSections.map((label) => (
                  <li key={label}>
                    <span
                      className="navbar__dropdown-item"
                      onClick={() => handleNav('services', label)}
                    >
                      {label}
                    </span>
                  </li>
                ))}
              </div>
            </ul>
          </li>

          {/* WHY US DROPDOWN */}
          <li
            className={`navbar__dropdown-wrap ${whyUsOpen ? 'navbar__dropdown-wrap--open' : ''}`}
            onMouseEnter={() => setWhyUsOpen(true)}
            onMouseLeave={() => setWhyUsOpen(false)}
          >
            <span
              className={`navbar__dropdown-trigger ${['photo-gallery', 'key-differentiators'].includes(currentPage) ? 'navbar__link--active' : ''}`}
            >
              Why Us <span className="navbar__chevron">▾</span>
            </span>
            <ul className="navbar__dropdown">
              <div className="navbar__dropdown-inner">
                <li>
                  <span
                    className={`navbar__dropdown-item ${currentPage === 'photo-gallery' ? 'navbar__dropdown-item--active' : ''}`}
                    onClick={() => handleNav('photo-gallery')}
                  >
                    Photo Gallery
                  </span>
                </li>
                <li>
                  <span
                    className={`navbar__dropdown-item ${currentPage === 'key-differentiators' ? 'navbar__dropdown-item--active' : ''}`}
                    onClick={() => handleNav('key-differentiators')}
                  >
                    Our Key Differentiators
                  </span>
                </li>
              </div>
            </ul>
          </li>

          <li>
            <span
              className={`navbar__link ${currentPage === 'training' ? 'navbar__link--active' : ''}`}
              onClick={() => handleNav('training')}
            >
              Training
            </span>
          </li>


          {/* CAREER DROPDOWN */}
          <li
            className={`navbar__dropdown-wrap ${careerOpen ? 'navbar__dropdown-wrap--open' : ''}`}
            onMouseEnter={() => setCareerOpen(true)}
            onMouseLeave={() => setCareerOpen(false)}
          >
            <span
              className={`navbar__dropdown-trigger ${['working-with-credent', 'current-opening', 'job-application'].includes(currentPage) ? 'navbar__link--active' : ''}`}
            >
              Career <span className="navbar__chevron">▾</span>
            </span>
            <ul className="navbar__dropdown">
              <div className="navbar__dropdown-inner">
                {careerItems.map((item) => (
                  <li key={item.page}>
                    <span
                      className={`navbar__dropdown-item ${currentPage === item.page ? 'navbar__dropdown-item--active' : ''}`}
                      onClick={() => handleNav(item.page)}
                    >
                      {item.label}
                    </span>
                  </li>
                ))}
              </div>
            </ul>
          </li>

          <li>
            <span
              className={`navbar__link ${currentPage === 'products-page' ? 'navbar__link--active' : ''}`}
              onClick={() => handleNav('products-page')}
            >
              Products
            </span>
          </li>

          <li>
            <span
              className={`navbar__link ${currentPage === 'investor' ? 'navbar__link--active' : ''}`}
              onClick={() => handleNav('investor')}
            >
              Investor Relations
            </span>
          </li>

          {/* <li><a href="#" role="button" tabIndex={0} onClick={(e) => { e.preventDefault(); handleHomeLink('#contact'); }}>Contact</a></li> */}
        </ul>

        {/* RIGHT: CTA + mobile menu toggle */}
        <div className="navbar__right">
          <button
            className="navbar__cta"
            onClick={() => handleHomeLink('#contact')}
          >
            Get In Touch →
          </button>
          <button
            className="navbar__hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>

      </div>
    </nav>
  )
}

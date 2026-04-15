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

  const handleNav = (page, section) => {
    if (onNavigate) onNavigate(page, section)
    setOpen(false)
    setAboutOpen(false)
    setServicesOpen(false)
    setCareerOpen(false)
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
          <span className="logo-c3">C3</span>
          <span className="logo-log">Logistics</span>
        </span>

        {/* CENTER: NAV LINKS */}
        <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>


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
            </ul>
          </li>

          <li
            className={`navbar__dropdown-wrap ${aboutOpen ? 'navbar__dropdown-wrap--open' : ''}`}
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <span className="navbar__dropdown-trigger">
              About Us <span className="navbar__chevron">▾</span>
            </span>

            <ul className="navbar__dropdown">
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
            </ul>
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

          <li><a href="#" role="button" tabIndex={0} onClick={(e) => { e.preventDefault(); handleHomeLink('#contact'); }}>Contact</a></li>
        </ul>

        {/* RIGHT (mobile menu toggle) */}
        <button
          className="navbar__hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>

      </div>
    </nav>
  )
}

import { useState } from 'react'
import './Navbar.css'

const aboutItems = [
  { label: 'Company Profile', page: 'company-profile' },
  { label: 'Mission & Vision', page: 'mission-vision' },
  { label: 'Our Team', page: 'our-team' },
  { label: 'Privacy And Policy', page: 'privacy-policy' },
]

export default function Navbar({ onNavigate, currentPage }) {
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  const handleNav = (page) => {
    if (onNavigate) onNavigate(page)
    setOpen(false)
    setAboutOpen(false)
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

        {/* LOGO */}
        <span
          className="navbar__logo"
          onClick={() => handleNav('home')}
          style={{ cursor: 'pointer' }}
        >
          <span className="logo-c3">C3</span>
          <span className="logo-log">Logistics</span>
        </span>

        {/* NAV LINKS */}
        <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>

          <li><a onClick={() => handleHomeLink('#journey')}>Solutions</a></li>
          <li><a onClick={() => handleHomeLink('#coverage')}>Coverage</a></li>
          <li><a onClick={() => handleHomeLink('#products')}>Products</a></li>

          {/* ✅ NEW: SERVICES */}
          <li>
            <span
              className={`navbar__link ${currentPage === 'services' ? 'navbar__link--active' : ''}`}
              onClick={() => handleNav('services')}
            >
              Services
            </span>
          </li>

          {/* ABOUT DROPDOWN */}
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
                    className={`navbar__dropdown-item ${currentPage === item.page
                        ? 'navbar__dropdown-item--active'
                        : ''
                      }`}
                    onClick={() => handleNav(item.page)}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </li>

          <li><a onClick={() => handleHomeLink('#contact')}>Contact</a></li>

        </ul>

        {/* CTA */}
        <button
          className="navbar__cta"
          onClick={() => handleNav('services')}
        >
          Get in touch
        </button>

        {/* MOBILE MENU */}
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
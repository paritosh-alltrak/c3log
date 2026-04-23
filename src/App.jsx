import { useState } from 'react'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import SocialRail from './components/SocialRail'
import JourneyTracker from './components/JourneyTracker'
import Hero from './components/Hero'
import JourneyScene from './components/JourneyScene'
import Journey from './components/Journey'
import Coverage from './components/Coverage'
import Infrastructure from './components/Infrastructure'
import Products from './components/Products'
import StatsBar from './components/StatsBar'
import ClientCarousel from './components/ClientCarousel'
import TrustedBy from './components/TrustedBy'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CompanyProfile from './components/CompanyProfile'
import MissionVision from './components/MissionVision'
import PrivacyPolicy from './components/PrivacyPolicy'
import OurTeam from './components/OurTeam'
import Services from './components/Services'
import ProductsPage from './components/ProductsPage'
import Training from './components/Training'
import BusinessPartners from './components/BusinessPartners'
import WorkingWithCredent from './components/WorkingWithCredent'
import CurrentOpening from './components/CurrentOpening'
import JobApplication from './components/JobApplication'
import PhotoGallery from './components/PhotoGallery'
import KeyDifferentiators from './components/KeyDifferentiators'
import Investor from './components/Investor'
import CSR from './components/CSR'
import './App.css'

export default function App() {
  const [page, setPage] = useState('home')
  const [serviceSection, setServiceSection] = useState(null)

  const navigate = (target, section, scrollToId) => {
    setPage(target)
    if (target === 'services') setServiceSection(section || null)
    if (scrollToId) {
      setTimeout(() => {
        const el = document.getElementById(scrollToId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      <CustomCursor />
      <Navbar onNavigate={navigate} currentPage={page} />
      <SocialRail />

      {page === 'home' && (
        <>
          <JourneyTracker />
          <Hero />
          <JourneyScene />
          <Journey />
          <Coverage />
          <Infrastructure />
          <Products />
          {/* <StatsBar /> */}
          {/* <ClientCarousel /> */}
          <BusinessPartners />
          <TrustedBy />
          <Contact />
        </>
      )}

      {page === 'company-profile' && (
        <CompanyProfile onNavigate={navigate} />
      )}

      {page === 'mission-vision' && (
        <MissionVision onNavigate={navigate} />
      )}

      {page === 'privacy-policy' && (
        <PrivacyPolicy onNavigate={navigate} />
      )}

      {page === 'our-team' && (
        <OurTeam onNavigate={navigate} />
      )}

      {page === 'services' && (
        <Services onNavigate={navigate} initialSection={serviceSection} />
      )}

      {page === 'training' && (
        <Training onNavigate={navigate} />
      )}

      {page === 'working-with-credent' && (
        <WorkingWithCredent onNavigate={navigate} />
      )}

      {page === 'current-opening' && (
        <CurrentOpening onNavigate={navigate} />
      )}

      {page === 'job-application' && (
        <JobApplication onNavigate={navigate} />
      )}

      {page === 'products-page' && (
        <ProductsPage onNavigate={navigate} />
      )}

      {page === 'photo-gallery' && (
        <PhotoGallery onNavigate={navigate} />
      )}

      {page === 'key-differentiators' && (
        <KeyDifferentiators onNavigate={navigate} />
      )}

      {page === 'investor' && (
        <Investor onNavigate={navigate} />
      )}

      {page === 'csr' && (
        <CSR onNavigate={navigate} />
      )}

      <div style={page === 'services' ? { marginLeft: '190px' } : {}}>
        <Footer onNavigate={navigate} />
      </div>

      {/* {page === 'our-team' && (
        <div style={{
          minHeight: '100vh',
          paddingTop: '120px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#a0aec0',
          fontFamily: 'Inter, sans-serif',
          gap: '16px'
        }}>
          <h2 style={{ color: '#fff', fontSize: '1.8rem' }}>Our Team</h2>
          <p style={{ fontSize: '1rem' }}>This page is coming soon.</p>
          <button
            onClick={() => navigate('home')}
            style={{
              marginTop: '8px',
              padding: '10px 24px',
              background: '#4f8ef7',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            ← Back to Home
          </button>
        </div>
      )} */}
    </div>
  )
}

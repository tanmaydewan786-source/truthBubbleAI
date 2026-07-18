import './App.css'
import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import DrawerNav from './components/DrawerNav/DrawerNav.jsx'
import Footer from './components/Footer/Footer.jsx'
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import BrevoBetaForm from './components/BravoBetaForm/BravoBetaForm.jsx'
import CookieConsent from './components/CookieConsent/CookieConsent.jsx'
import PrivacyPage from './pages/PrivacyPage/PrivacyPage.jsx'

function ScrollToLocation() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <div className="app-shell">
      <ScrollToLocation />
      <header className="app-header">
        <div className="desktop-nav">
          <Navbar />
        </div>
        <div className="mobile-nav">
          <DrawerNav />
        </div>
      </header>
      <main id="top" className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/beta" element={<BrevoBetaForm />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}

export default App

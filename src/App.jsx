import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import DrawerNav from './components/DrawerNav/DrawerNav.jsx'
import Footer from './components/Footer/Footer.jsx'
import LandingPage from './pages/LandingPage/LandingPage.jsx'

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="desktop-nav">
          <Navbar />
        </div>
        <div className="mobile-nav">
          <DrawerNav />
        </div>
      </header>
      <main id="top" className="main-content">
        <LandingPage />
      </main>
      <Footer />
    </div>
  )
}

export default App


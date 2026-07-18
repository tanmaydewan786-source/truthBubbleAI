import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <Link className="brand" to="/#top">
          <span className="dot" aria-hidden="true"></span> Truth Bubble
        </Link>
        <nav className="foot-links" aria-label="Footer">
          <Link to="/#how">How it works</Link>
          <Link to="/#trust">Status</Link>
          <Link to="/#matters">Why it matters</Link>
          <Link to="/beta">Join the beta</Link>
          <Link to="/privacy">Privacy &amp; cookies</Link>
        </nav>
        <p className="foot-copy">© 2025 Truth Bubble · Built for everyone, everywhere.</p>
      </div>
    </footer>
  )
}

export default Footer;

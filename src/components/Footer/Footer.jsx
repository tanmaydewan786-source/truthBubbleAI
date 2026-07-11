import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <a className="brand" href="#top">
          <span className="dot" aria-hidden="true"></span> Truth Bubble
        </a>
        <nav className="foot-links" aria-label="Footer">
          <a href="#how">How it works</a>
          <a href="#trust">Status</a>
          <a href="#matters">Why it matters</a>
          <a href="#join">Join the beta</a>
          <a href="#">Privacy</a>
        </nav>
        <p className="foot-copy">© 2025 Truth Bubble · Built for everyone, everywhere.</p>
      </div>
    </footer>
  )
}

export default Footer;

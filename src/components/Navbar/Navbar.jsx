import './Navbar.css'
import tbLogo from '../../assets/Truth Bubble AI logo/1.png'

function Navbar() {
  return (
    <nav className="navbar">
      <a className="brand" href="#top">
        <img src={tbLogo} alt="Truth Bubble logo" className="site-logo" />
        <span>Truth Bubble</span>
      </a>
      <div className="nav-links">
        <a className="link" href="#how">How it works</a>
        <a className="link" href="#trust">Status</a>
        <a className="link" href="#matters">Why it matters</a>
        <a className="btn btn-primary nav-cta" href="#join">Join the beta</a>
      </div>
    </nav>
  )
}

export default Navbar;

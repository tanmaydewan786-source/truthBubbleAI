import './Navbar.css'
import { Link } from 'react-router-dom'
import tbLogo from '../../assets/Truth Bubble AI logo/1.png'

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="brand" to="/#top">
        <img src={tbLogo} alt="Truth Bubble logo" className="site-logo" />
      </Link>
      <div className="nav-links">
        <Link className="link" to="/#how">How it works</Link>
        <Link className="link" to="/#trust">Status</Link>
        <Link className="link" to="/#matters">Why it matters</Link>
        <Link className="btn btn-primary nav-cta" to="/beta">Join the beta</Link>
      </div>
    </nav>
  )
}

export default Navbar;

import { useState } from 'react'
import { Link } from 'react-router-dom'
import './DrawerNav.css'
import tbLogo from '../../assets/Truth Bubble AI logo/1.png'

function DrawerNav() {
  const [open, setOpen] = useState(false)
  const navigation = [
    { label: 'How it works', to: '/#how' },
    { label: 'Status', to: '/#trust' },
    { label: 'Why it matters', to: '/#matters' },
    { label: 'Join the beta', to: '/beta', primary: true },
  ]

  return (
    <div className={`drawer-shell ${open ? 'drawer-open' : ''}`}>
      <div className="navbar drawer-header-bar">
        <Link className="navbar-brand" to="/#top">
          <img src={tbLogo} alt="Truth Bubble logo" className="site-logo" />
        </Link>
        <button className="drawer-toggle" onClick={() => setOpen(true)} aria-label="Open navigation drawer">
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="drawer-overlay" onClick={() => setOpen(false)} />

      <aside className="drawer-panel" aria-hidden={!open}>
        <div className="drawer-panel-header">
          <div className="drawer-title">Navigation</div>
          <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Close navigation drawer">
            ×
          </button>
        </div>
        <nav className="drawer-links">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`drawer-link ${item.primary ? 'drawer-primary' : ''}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  )
}

export default DrawerNav;

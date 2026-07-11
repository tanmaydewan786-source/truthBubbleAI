import { useState } from 'react'
import './DrawerNav.css'
import tbLogo from '../../assets/Truth Bubble AI logo/1.png'

function DrawerNav() {
  const [open, setOpen] = useState(false)
  const navigation = [
    { label: 'How it works', href: '#how' },
    { label: 'Status', href: '#trust' },
    { label: 'Why it matters', href: '#matters' },
    { label: 'Join the beta', href: '#join', primary: true },
  ]

  return (
    <div className={`drawer-shell ${open ? 'drawer-open' : ''}`}>
      <div className="navbar drawer-header-bar">
        <a className="navbar-brand" href="#top">
          <img src={tbLogo} alt="Truth Bubble logo" className="site-logo" />
          <span>Truth Bubble</span>
        </a>
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
            <a
              key={item.href}
              href={item.href}
              className={`drawer-link ${item.primary ? 'drawer-primary' : ''}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  )
}

export default DrawerNav;

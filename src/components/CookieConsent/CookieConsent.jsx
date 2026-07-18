import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './CookieConsent.css'

const CONSENT_KEY = 'truthBubbleCookieConsent'

function readConsent() {
  try {
    return window.localStorage.getItem(CONSENT_KEY)
  } catch {
    return null
  }
}

export default function CookieConsent() {
  const [open, setOpen] = useState(() => readConsent() === null)

  useEffect(() => {
    const openSettings = () => setOpen(true)
    window.addEventListener('truthbubble:open-cookie-settings', openSettings)
    return () => window.removeEventListener('truthbubble:open-cookie-settings', openSettings)
  }, [])

  const saveConsent = (choice) => {
    try {
      window.localStorage.setItem(CONSENT_KEY, choice)
    } catch {
      // The visitor's browser may block local storage; their choice still applies for this visit.
    }

    window.dispatchEvent(new CustomEvent('truthbubble:cookie-consent', { detail: choice }))
    setOpen(false)
  }

  if (!open) return null

  return (
    <div className="cookie-backdrop" role="presentation">
      <section
        className="cookie-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
        aria-describedby="cookie-description"
      >
        <div className="cookie-copy">
          <span className="cookie-eyebrow">Your privacy</span>
          <h2 id="cookie-title">Cookie settings</h2>
          <p id="cookie-description">
            We use essential browser storage to remember your choice. Optional cookies may be used
            for analytics and product improvement only if you accept them.
          </p>
          <Link className="cookie-policy-link" to="/privacy" onClick={() => setOpen(false)}>
            Read our privacy policy
          </Link>
        </div>

        <div className="cookie-actions">
          <button className="cookie-button cookie-button--secondary" type="button" onClick={() => saveConsent('denied')}>
            Decline
          </button>
          <button className="cookie-button cookie-button--primary" type="button" onClick={() => saveConsent('accepted')}>
            Accept All
          </button>
        </div>
      </section>
    </div>
  )
}

import { useEffect, useState } from 'react'
import './CookieConsent.css'
import PrivacyPage from '../../pages/PrivacyPage/PrivacyPage.jsx'

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
  const [privacyOpen, setPrivacyOpen] = useState(false)

  useEffect(() => {
    const openSettings = () => setOpen(true)
    const openPrivacy = () => {
      setOpen(false)
      setPrivacyOpen(true)
    }
    window.addEventListener('truthbubble:open-cookie-settings', openSettings)
    window.addEventListener('truthbubble:open-privacy-policy', openPrivacy)
    return () => {
      window.removeEventListener('truthbubble:open-cookie-settings', openSettings)
      window.removeEventListener('truthbubble:open-privacy-policy', openPrivacy)
    }
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

  const openPrivacyPolicy = () => {
    setOpen(false)
    setPrivacyOpen(true)
  }

  const closePrivacyPolicy = () => {
    setPrivacyOpen(false)
    setOpen(true)
  }

  if (privacyOpen) {
    return <PrivacyPage onClose={closePrivacyPolicy} />
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
          <button className="cookie-policy-link" type="button" onClick={openPrivacyPolicy}>
            Read our privacy policy
          </button>
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

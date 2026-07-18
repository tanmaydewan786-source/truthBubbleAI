import './PrivacyPage.css'

export default function PrivacyPage() {
  const openCookieSettings = () => {
    window.dispatchEvent(new Event('truthbubble:open-cookie-settings'))
  }

  return (
    <article className="privacy-page">
      <header className="privacy-hero">
        <span className="privacy-eyebrow">Privacy</span>
        <h1>Your information should stay yours.</h1>
        <p>
          This page explains how the Truth Bubble website handles information and how you can
          control optional browser storage.
        </p>
      </header>

      <div className="privacy-content">
        <section>
          <h2>Cookie and storage settings</h2>
          <p>
            Essential browser storage remembers whether you accepted or denied optional cookies.
            It is necessary so the consent menu does not appear on every visit.
          </p>
          <p>
            Optional analytics or product-improvement cookies should only be enabled after you
            accept them. Denying optional cookies does not prevent you from using the website.
          </p>
          <button className="privacy-settings-button" type="button" onClick={openCookieSettings}>
            Change cookie settings
          </button>
        </section>

        <section>
          <h2>Beta form information</h2>
          <p>
            When you submit the beta form, the contact details and preferences you provide are
            sent to Brevo for processing and communication about the beta program. Do not submit
            the form if you do not want this information transferred to Brevo.
          </p>
        </section>

        <section>
          <h2>Your choices</h2>
          <p>
            You can deny optional cookies from the consent menu and reopen the menu at any time
            using the button above. Marketing emails should also include an unsubscribe option.
          </p>
        </section>

        <p className="privacy-updated">Last updated: July 18, 2026</p>
      </div>
    </article>
  )
}

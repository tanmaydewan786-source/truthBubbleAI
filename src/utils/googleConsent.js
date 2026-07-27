const GOOGLE_TAG_ID = 'G-135S1YSXZZ'
const GOOGLE_TAG_SCRIPT_ID = 'google-analytics-tag'

function getGtag() {
  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments)
  }

  return window.gtag
}

export function grantGoogleConsent() {
  const gtag = getGtag()

  gtag('consent', 'update', {
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    ad_storage: 'granted',
    analytics_storage: 'granted',
  })

  if (!document.getElementById(GOOGLE_TAG_SCRIPT_ID)) {
    const script = document.createElement('script')
    script.id = GOOGLE_TAG_SCRIPT_ID
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`
    document.head.appendChild(script)
  }

  if (!window.truthBubbleGoogleTagConfigured) {
    gtag('js', new Date())
    gtag('config', GOOGLE_TAG_ID)
    window.truthBubbleGoogleTagConfigured = true
  }
}

export function denyGoogleConsent() {
  getGtag()('consent', 'update', {
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    ad_storage: 'denied',
    analytics_storage: 'denied',
  })
}

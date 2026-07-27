import './LandingPage.css'
import HowItWorks from '../../components/HowItWorks/HowItWorks.jsx'
import Trust from '../../components/Trust/Trust.jsx'
import Matters from '../../components/Matters/Matters.jsx'
import demoVid from '../../assets/truth-bubble-demo.mp4'
import demoPoster from '../../assets/truth-bubble-preview.jpg'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  const verificationFileRef = useRef(null)
  const [verificationQuery, setVerificationQuery] = useState('')

  const scrollToHowItWorks = () => {
    requestAnimationFrame(() => {
      document.getElementById('how')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <div className="landing-page">
      <section className="verification-hero" aria-labelledby="verification-hero-title">
        <div className="verification-orb verification-orb--left" aria-hidden="true" />
        <div className="verification-orb verification-orb--right" aria-hidden="true" />
        <div className="verification-orb-glow" aria-hidden="true" />

        <div className="wrap verification-hero__content">
          <span className="verification-hero__eyebrow">Hero section</span>
          <h1 id="verification-hero-title">
            Building the AI Verification
            <br />
            Layer for the Internet
          </h1>
          <p>
            Truth Bubble AI uses multimodal AI to verify information, understand context,
            and help people make informed decisions across any digital platform.
          </p>

          <div className="verification-box">
            <label className="verification-input">
              <span className="verification-input__icon" aria-hidden="true">⌕</span>
              <input
                type="text"
                value={verificationQuery}
                onChange={(event) => setVerificationQuery(event.target.value)}
                placeholder="Paste text, a URL, or upload a screenshot..."
                aria-label="Text or URL to verify"
                data-cursor-info="Enter content you want to verify"
              />
            </label>

            <div className="verification-actions">
              <input
                ref={verificationFileRef}
                className="verification-file-input"
                type="file"
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files?.[0]
                  if (file) setVerificationQuery(file.name)
                }}
              />
              <button
                className="verification-action verification-action--dark"
                type="button"
                onClick={() => verificationFileRef.current?.click()}
                data-cursor-info="Choose a screenshot to verify"
              >
                <span aria-hidden="true">↥</span> Upload Screenshot
              </button>
              <button
                className="verification-action verification-action--light"
                type="button"
                onClick={() => document.querySelector('.verification-input input')?.focus()}
                data-cursor-info="Paste a link for verification"
              >
                <span aria-hidden="true">↗</span> Paste URL
              </button>
              <button
                className="verification-action verification-action--dark"
                type="button"
                onClick={scrollToHowItWorks}
                data-cursor-info="See how Truth Bubble works"
              >
                Try Demo
              </button>
            </div>
          </div>

          <div className="verification-platforms" aria-label="Supported content sources">
            {['WhatsApp', 'Instagram', 'X', 'YouTube', 'News', 'Browser', 'PDFs', 'Email'].map((platform) => (
              <span key={platform}>
                <b aria-hidden="true">{platform === 'X' ? '𝕏' : platform.slice(0, 1)}</b>
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="problem reveal">
        <div className="wrap">
          <div className="section-head">
            <h2>
              Sharing takes one tap. <span className="q">Checking takes ten.</span>
            </h2>
          </div>
          <p className="lead">
            You can access almost anything instantly. Verifying it is slow, manual, and easy to skip — so most people share first and wonder later.
          </p>
          <div className="prob-grid">
            <div className="prob-item">
              <div className="n">01</div>
              <h3>Forwarded without context</h3>
              <p>
                A message arrives "forwarded many times." There's no source, no date, no way to know where it started.
              </p>
            </div>
            <div className="prob-item">
              <div className="n">02</div>
              <h3>Confident, but unverified</h3>
              <p>
                Headlines and clips are built to be believed at a glance. The claim spreads faster than anyone can check it.
              </p>
            </div>
            <div className="prob-item">
              <div className="n">03</div>
              <h3>Checking means leaving</h3>
              <p>
                Verifying today means new tabs, several searches, and comparing sources yourself. Most people don't.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-media">
        <div className="wrap">
          <div className="video-mock solution-video" role="img" aria-label="App preview video mock">
            <VideoPlayer src={demoVid} poster={demoPoster} />
          </div>
        </div>
      </section>

      <section className="solution reveal">
        <div className="wrap">
          <div className="sol-grid">
            <div>
              <span className="eyebrow">The layer</span>
              <h2>
                Instant context, without leaving what you're reading.
              </h2>
              <p className="lead">
                Tap the floating bubble on any screen. Truth Bubble reads what's in front of you, checks it across credible sources, and hands back a clear read — a trust score, a plain-language verdict, the key signals, and the sources behind them.
              </p>
              <p className="lead" style={{ marginTop: '14px' }}>
                It never tells you what to believe. It shows you the evidence and lets you decide.
              </p>
            </div>

            <div className="mock" role="img" aria-label="Truth Bubble overlay showing a trust score of 82, a 'likely reliable' verdict, supporting signals, and six cited sources over a social feed.">
              <div className="feed">
                <div className="src"><span className="av" /> Global Trends</div>
                <div className="headline">
                  "New income-tax rules are a scam" — viral post shared 12.4k times
                </div>
                <div className="metrics">
                  <span>12.4k likes</span>
                  <span>842 comments</span>
                  <span>2.1k shares</span>
                </div>
              </div>
              <div className="sheet">
                <div className="top">
                  <div className="score-ring" aria-hidden="true">
                    <svg width="46" height="46" viewBox="0 0 46 46">
                      <circle cx="23" cy="23" r="19" fill="none" stroke="#EDEFF2" strokeWidth="4" />
                      <circle cx="23" cy="23" r="19" fill="none" stroke="#2BB673" strokeWidth="4" strokeLinecap="round" strokeDasharray="119.4" strokeDashoffset="21.5" />
                    </svg>
                    <span className="val">82</span>
                  </div>
                  <div className="verdict">
                    Likely reliable
                    <small>Trust score 82 · High confidence</small>
                  </div>
                </div>
                <div className="signals">
                  <div className="row">
                    <span className="tick">✓</span>
                    Supported by multiple credible sources
                  </div>
                  <div className="row">
                    <span className="tick">✓</span>
                    Coverage is recent and balanced
                  </div>
                  <div className="row">
                    <span className="tick">✓</span>
                    No strong signs of manipulation
                  </div>
                </div>
                <div className="foot">
                  6 sources cited · Truth Bubble can make mistakes — check the sources.
                </div>
              </div>
              <div className="float-bubble" aria-hidden="true">TB</div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />

      <Trust />

      <Matters />

      <section id="join" className="final reveal">
        <div className="wrap">
          <div className="bubble-lg" aria-hidden="true" />
          <h2>See clearly. Then share.</h2>
          <p className="lead">Join the waitlist and get early access to Truth Bubble as we open the beta.</p>
          <div className="final-cta">
            <Link to="/beta" className="btn btn-primary" >Join the beta waitlist</Link>
            <a className="btn btn-ghost" href="https://www.kickstarter.com/projects/1575765461/truth-bubble-ai" >Support the mission</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage;


function VideoPlayer({ src, poster }) {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    v.muted = true
    const tryPlay = () => {
      const p = v.play()
      if (p && p.then) {
        p.then(() => setPlaying(true)).catch(() => setPlaying(false))
      }
    }
    tryPlay()
    const resume = () => tryPlay()
    window.addEventListener('pointerdown', resume, { once: true })
    return () => window.removeEventListener('pointerdown', resume)
  }, [])

  return (
    <div className={`video-wrapper ${playing ? 'playing' : ''}`}>
      <video ref={ref} src={src} poster={poster} muted loop playsInline />
    </div>
  )
}

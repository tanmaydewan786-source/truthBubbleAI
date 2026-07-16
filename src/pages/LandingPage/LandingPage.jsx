import './LandingPage.css'
import HowItWorks from '../../components/HowItWorks/HowItWorks.jsx'
import Trust from '../../components/Trust/Trust.jsx'
import Matters from '../../components/Matters/Matters.jsx'
import demoVid from '../../assets/truth-bubble-demo.mp4'
import demoPoster from '../../assets/truth-bubble-preview.jpg'
import { useRef, useEffect, useState } from 'react'

function LandingPage() {
  return (
    <div className="landing-page">
      <section className="hero">
        <div className="orb-field" aria-hidden="true">
          <div className="orb" />
          <div className="orb ring" />
        </div>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="status-pill">
              <span className="live" aria-hidden="true"></span>
              Beta in development · Android first
            </span>
            <h1>
              Verify what you see online in <span className="accent">one tap.</span>
            </h1>
            <p className="hero-sub">
              Truth Bubble is a calm verification layer for your phone. Check the claims, sources and context behind any post — without leaving the app you're reading.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#join">Join the beta waitlist</a>
              <a className="btn btn-ghost" href="#how">See how it works</a>
            </div>
            <p className="hero-meta">Full public rollout targeted for January 2027.</p>
          </div>

          {/* media removed from hero - moved under the Solution section */}
        </div>
      </section>

      <section className="problem reveal">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">The gap</span>
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
            <a className="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSd99LLME_VlFnhm8BIX2EDHyTcWCL_ZPrrr_n_X-C2ItaLhbQ/viewform?usp=publish-editor" >Join the beta waitlist</a>
            <a className="btn btn-ghost" href="https://www.kickstarter.com/projects/1575765461/truth-bubble-ai" >Support the mission</a>
          </div>
          <p className="swap-note">Secondary button is a placeholder slot — point it at Kickstarter or a backer page when ready.</p>
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

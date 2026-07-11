import React from 'react'

export default function Trust() {
  return (
    <section id="trust" className="trust reveal">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Where we are</span>
          <h2>Real, staged, and already moving.</h2>
        </div>
        <p className="lead">
          We'd rather be specific than impressive. Here's exactly where Truth Bubble stands today.
        </p>
        <div className="ledger">
          <div className="row">
            <div className="k">Product status</div>
            <div className="v">
              Beta in development
              <small>Android overlay, on-screen reading, and the verification interface are working today.</small>
            </div>
            <span className="tag now">Working now</span>
          </div>
          <div className="row">
            <div className="k">Beta access</div>
            <div className="v">
              Early access opening soon
              <small>Waitlist members get first access as we widen testing.</small>
            </div>
            <span className="tag soon">Opening soon</span>
          </div>
          <div className="row">
            <div className="k">Deeper analysis</div>
            <div className="v">
              Advanced models & source integrations
              <small>Expanding the sources we check and the depth of each report.</small>
            </div>
            <span className="tag soon">In progress</span>
          </div>
          <div className="row">
            <div className="k">Full rollout</div>
            <div className="v">
              Public launch on Google Play
              <small>Targeted for January 2027, with beta running throughout.</small>
            </div>
            <span className="tag planned">January 2027</span>
          </div>
        </div>
      </div>
    </section>
  )
}

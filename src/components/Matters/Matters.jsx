import React from 'react'
import './Matters.css'

export default function Matters() {
  return (
    <section id="matters" className="matters reveal">
      <div className="wrap">
        <div className="section-card matters-card">
          <div className="section-inner">
            <span className="eyebrow light">Why it matters</span>
            <h2 className="light">Better decisions, made calmly.</h2>
            <p className="lead light">
              We form opinions in seconds. Getting them right shouldn't take minutes. Truth Bubble is built to lower the effort of understanding — quietly, and without pushing a view.
            </p>
            <div className="principles">
              <div className="p">
                <h4 className="light">Neutral by design</h4>
                <p className="muted">We assess claims, sources and context — never people, and never a political side.</p>
              </div>
              <div className="p">
                <h4 className="light">Evidence over verdicts</h4>
                <p className="muted">Every read links to real, resolvable sources. The conclusion is always yours to draw.</p>
              </div>
              <div className="p">
                <h4 className="light">Private by default</h4>
                <p className="muted">We verify content, not you. Reading happens on your terms, with your privacy intact.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import step1Img from '../../assets/Truth Bubble Step 1 - Clean professional business design. Simple horizontal layout with generous white space. Left side_ Realistic iPhone mockup showing Instagram feed with _GLOBAL TRE.jpg'
import step2Img from '../../assets/Truth Bubble Step 2 - Clean professional business design. Simple horizontal layout with generous white space. Left side_ Realistic iPhone mockup showing Instagram feed with _GLOBAL TRE.jpg'
import step3Img from '../../assets/Truth Bubble Step 3 - Clean professional business design. Simple horizontal layout with generous white space. Left side_ Realistic iPhone mockup showing full chat interface. Header _TR.jpg'

export default function HowItWorks() {
  return (
    <section id="how" className="how reveal">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>Three taps from seeing it to understanding it.</h2>
        </div>
        <div className="steps">
          <div className="step">
            <div className="idx">Step 1</div>
            <div className="step-img-wrap">
              <img src={step1Img} alt="Step 1 preview" className="step-img" />
            </div>
            <div className="icn" aria-hidden="true">📱</div>
            <h3>See content anywhere</h3>
            <p>
              A post, a headline, a forwarded message, a video. Whatever's on your screen, in any app.
            </p>
          </div>
          <div className="step">
            <div className="idx">Step 2</div>
            <div className="step-img-wrap">
              <img src={step2Img} alt="Step 2 preview" className="step-img" />
            </div>
            <div className="icn" aria-hidden="true">🟢</div>
            <h3>Tap the bubble</h3>
            <p>
              The floating Truth Bubble reads what's on screen and checks it across credible sources.
            </p>
          </div>
          <div className="step">
            <div className="idx">Step 3</div>
            <div className="step-img-wrap">
              <img src={step3Img} alt="Step 3 preview" className="step-img" />
            </div>
            <div className="icn" aria-hidden="true">✔️</div>
            <h3>Get evidence and decide</h3>
            <p>
              A clear verdict, the signals behind it, and cited sources you can open. You stay in control.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

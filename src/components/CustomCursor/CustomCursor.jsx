import { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, label'

function getCursorInfo(element) {
  const interactiveElement = element.closest(INTERACTIVE_SELECTOR)
  if (!interactiveElement) return ''

  const customInfo = interactiveElement.dataset.cursorInfo
  if (customInfo) return customInfo

  if (interactiveElement.matches('a')) return 'Click to open'
  if (interactiveElement.matches('input, textarea, select')) return 'Click to enter details'

  return 'Click to interact'
}

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const infoRef = useRef(null)
  const [analysisPhase, setAnalysisPhase] = useState(null)
  const analysisOpen = analysisPhase !== null

  useEffect(() => {
    const toggleAnalysis = () => {
      setAnalysisPhase((phase) => (phase ? null : 'scanning'))
    }
    const closeAnalysis = () => setAnalysisPhase(null)
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setAnalysisPhase(null)
    }
    const closeOnOutsideClick = (event) => {
      if (!event.target.closest('.verification-hero__image')) {
        setAnalysisPhase(null)
      }
    }

    window.addEventListener('truthbubble:toggle-cursor-analysis', toggleAnalysis)
    window.addEventListener('truthbubble:close-cursor-analysis', closeAnalysis)
    window.addEventListener('keydown', closeOnEscape)
    window.addEventListener('pointerdown', closeOnOutsideClick)

    return () => {
      window.removeEventListener('truthbubble:toggle-cursor-analysis', toggleAnalysis)
      window.removeEventListener('truthbubble:close-cursor-analysis', closeAnalysis)
      window.removeEventListener('keydown', closeOnEscape)
      window.removeEventListener('pointerdown', closeOnOutsideClick)
    }
  }, [])

  useEffect(() => {
    const nextPhase = {
      scanning: 'reading',
      reading: 'generating',
      generating: 'result',
    }[analysisPhase]

    if (!nextPhase) return undefined

    const timer = window.setTimeout(() => setAnalysisPhase(nextPhase), 1400)
    return () => window.clearTimeout(timer)
  }, [analysisPhase])

  useEffect(() => {
    cursorRef.current?.classList.toggle('custom-cursor--analysis', analysisOpen)
  }, [analysisOpen])

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return undefined

    const app = cursor.closest('.app-shell')

    const moveCursor = (event) => {
      const isInsideApp = app?.contains(event.target)
      const cursorInfo = isInsideApp ? getCursorInfo(event.target) : ''

      cursor.style.setProperty('--cursor-x', `${event.clientX}px`)
      cursor.style.setProperty('--cursor-y', `${event.clientY}px`)
      cursor.classList.toggle('custom-cursor--visible', Boolean(isInsideApp))
      cursor.classList.toggle('custom-cursor--interactive', Boolean(cursorInfo))

      if (infoRef.current && infoRef.current.textContent !== cursorInfo) {
        infoRef.current.textContent = cursorInfo
      }
    }

    const hideCursor = () => cursor.classList.remove('custom-cursor--visible')
    const pressCursor = () => cursor.classList.add('custom-cursor--pressed')
    const releaseCursor = () => cursor.classList.remove('custom-cursor--pressed')

    window.addEventListener('pointermove', moveCursor)
    window.addEventListener('pointerdown', pressCursor)
    window.addEventListener('pointerup', releaseCursor)
    window.addEventListener('blur', hideCursor)
    document.documentElement.addEventListener('mouseleave', hideCursor)

    return () => {
      window.removeEventListener('pointermove', moveCursor)
      window.removeEventListener('pointerdown', pressCursor)
      window.removeEventListener('pointerup', releaseCursor)
      window.removeEventListener('blur', hideCursor)
      document.documentElement.removeEventListener('mouseleave', hideCursor)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      aria-hidden="true"
    >
      <span className="custom-cursor__bubble">TB</span>
      <span ref={infoRef} className="custom-cursor__info" />
      {analysisOpen && analysisPhase !== 'result' && (
        <div className="custom-cursor__analysis-card custom-cursor__analysis-card--loading">
          <span className="custom-cursor__scanner" aria-hidden="true">
            <i />
          </span>
          <strong>
            {analysisPhase === 'scanning' && 'Scanning content...'}
            {analysisPhase === 'reading' && 'Reading data...'}
            {analysisPhase === 'generating' && 'Generating result...'}
          </strong>
          <small>
            {analysisPhase === 'scanning' && 'Checking the image for claims and context'}
            {analysisPhase === 'reading' && 'Comparing details with trusted sources'}
            {analysisPhase === 'generating' && 'Preparing your verification summary'}
          </small>
          <span className="custom-cursor__progress">
            <i className={`custom-cursor__progress-fill custom-cursor__progress-fill--${analysisPhase}`} />
          </span>
        </div>
      )}
      {analysisPhase === 'result' && (
        <div className="custom-cursor__analysis-card">
          <strong>Truth Bubble Analysis</strong>
          <span>Trust Score: <b>92/100</b></span>
          <span>Source Credibility: <b>Verified</b></span>
          <span className="custom-cursor__analysis-status">
            <i>✓</i> Supported by transparent sources
          </span>
          <small>Click the image again to close</small>
        </div>
      )}
    </div>
  )
}

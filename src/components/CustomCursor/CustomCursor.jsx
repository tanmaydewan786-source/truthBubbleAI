import { useEffect, useRef } from 'react'
import './CustomCursor.css'

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, label'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return undefined

    const app = cursor.closest('.app-shell')

    const moveCursor = (event) => {
      const isInsideApp = app?.contains(event.target)

      cursor.style.setProperty('--cursor-x', `${event.clientX}px`)
      cursor.style.setProperty('--cursor-y', `${event.clientY}px`)
      cursor.classList.toggle('custom-cursor--visible', Boolean(isInsideApp))
      cursor.classList.toggle(
        'custom-cursor--interactive',
        Boolean(isInsideApp && event.target.closest(INTERACTIVE_SELECTOR)),
      )
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
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <span className="custom-cursor__ring" />
      <span className="custom-cursor__dot" />
    </div>
  )
}

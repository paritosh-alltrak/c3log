import { useEffect, useRef } from 'react'
import './CustomCursor.css'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div className="custom-cursor" ref={cursorRef}>
      {/*
        Syringe at 45° — needle tip at SVG point (37,37) = the actual cursor hotspot
        Plunger end at top-left. All shapes are stroke-based / transparent fills.
      */}
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

        {/* ── Needle (thin, light) ── */}
        <line x1="27" y1="27" x2="37" y2="37" stroke="#c8dcff" strokeWidth="1" strokeLinecap="round"/>

        {/* ── Needle collar ── */}
        <line x1="23.5" y1="27.5" x2="27.5" y2="23.5" stroke="#4f8ef7" strokeWidth="3" strokeLinecap="butt"/>

        {/* ── Barrel outline — transparent fill, blue stroke ── */}
        {/*  barrel runs from (9,9)→(25,25) along the diagonal, half-width 2px perpendicular  */}
        <path
          d="M7.2,11.8 L22.2,26.8 L26.8,22.2 L11.8,7.2 Z"
          fill="rgba(13,21,41,0.18)"
          stroke="#4f8ef7"
          strokeWidth="0.9"
          strokeLinejoin="round"
        />

        {/* ── Liquid inside barrel (lower half) ── */}
        <path
          d="M7.2,11.8 L15,19.5 L19.5,15 L11.8,7.2 Z"
          fill="rgba(79,142,247,0.32)"
        />

        {/* ── Graduation tick marks ── */}
        <line x1="11.8" y1="18.2" x2="18.2" y2="11.8" stroke="#4f8ef7" strokeWidth="0.8" opacity="0.65"/>
        <line x1="16.8" y1="23.2" x2="23.2" y2="16.8" stroke="#4f8ef7" strokeWidth="0.8" opacity="0.65"/>

        {/* ── Flange (finger grip) at barrel entry ── */}
        <line x1="5" y1="13" x2="13" y2="5" stroke="#4f8ef7" strokeWidth="1.6" strokeLinecap="round"/>

        {/* ── Plunger rod ── */}
        <line x1="2" y1="2" x2="8" y2="8" stroke="#4f8ef7" strokeWidth="1.2" strokeLinecap="round"/>

        {/* ── Plunger thumb press (short perpendicular bar) ── */}
        <line x1="0" y1="4" x2="4" y2="0" stroke="#4f8ef7" strokeWidth="2.5" strokeLinecap="round"/>

      </svg>
    </div>
  )
}

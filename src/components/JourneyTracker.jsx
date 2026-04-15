import { useEffect, useState } from 'react'
import './JourneyTracker.css'

const stops = [
  { label: 'HOME',    position: 0   },
  { label: 'PICKUP',  position: 25  },
  { label: 'TRANSIT', position: 50  },
  { label: 'COLD HUB',position: 75  },
  { label: 'LAB',     position: 100 },
]

const ScooterSVG = () => (
  <img src="/rider.png" alt="scooter" width="140" height="94" style={{ display: 'block' }} />
)

export default function JourneyTracker() {
  const [progress, setProgress] = useState(0) // 0 → 1

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setProgress(maxScroll > 0 ? Math.min(scrolled / maxScroll, 1) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Map 0→1 progress to pixel left position across the full viewport width
  // Scooter SVG is 80px wide; start just off-screen left, end just off-screen right
  const scooterLeft = `calc(${progress * 100}% - ${progress * 140}px)`

  return (
    <div className="jt">
      {/* Stops + line confined to centered inner */}
      <div className="jt__inner">
        <div className="jt__line" />
        {stops.map((stop) => (
          <div
            key={stop.label}
            className="jt__stop"
            style={{ left: `${stop.position}%` }}
          >
            <div className="jt__dot" />
            <span className="jt__label">{stop.label}</span>
          </div>
        ))}
      </div>

      {/* Scooter moves with scroll */}
      <div className="jt__scooter" style={{ left: scooterLeft }}>
        <ScooterSVG />
      </div>
    </div>
  )
}

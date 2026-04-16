/**
 * LogisticsMap — pan-India multi-vehicle network animation.
 * Source: credent-map-story, trimmed to the map card only (no page chrome).
 */

import { useState, useEffect, useRef, useMemo } from 'react'
import {
  motion, useMotionValue, useTransform, animate,
} from 'framer-motion'
import { geoMercator, geoPath } from 'd3-geo'

const GEO_URL =
  'https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson'

const MAP_W = 800
const MAP_H = 900
const C_INK = '#0f172a'

const C = {
  delhi:        [28.6139, 77.2090],
  mumbai:       [19.0760, 72.8777],
  kolkata:      [22.5726, 88.3639],
  chennai:      [13.0827, 80.2707],
  bengaluru:    [12.9716, 77.5946],
  hyderabad:    [17.3850, 78.4867],
  ahmedabad:    [23.0225, 72.5714],
  patna:        [25.5941, 85.1376],
  jaipur:       [26.9124, 75.7873],
  lucknow:      [26.8467, 80.9462],
  bhubaneswar:  [20.2961, 85.8245],
  pune:         [18.5204, 73.8567],
  visakhapatnam:[17.6868, 83.2185],
  nagpur:       [21.1458, 79.0882],
  guwahati:     [26.1445, 91.7362],
  bhopal:       [23.2599, 77.4126],
}

const ROUTES = [
  { id:'fl1', kind:'flight', waypts:['kolkata','mumbai'],         color:'#0891b2', duration:11.5, delay:0.0 },
  { id:'fl2', kind:'flight', waypts:['delhi','bengaluru'],        color:'#6366f1', duration:12.5, delay:2.0 },
  { id:'fl3', kind:'flight', waypts:['guwahati','hyderabad'],     color:'#14b8a6', duration:12.0, delay:4.0 },
  { id:'fl4', kind:'flight', waypts:['ahmedabad','chennai'],      color:'#f59e0b', duration:13.0, delay:1.2 },
]

function buildPathD(pts) {
  if (pts.length < 2) return ''
  const [a, b] = [pts[0], pts[pts.length - 1]]
  const mx = (a[0] + b[0]) / 2
  const my = (a[1] + b[1]) / 2
  const dx = b[0] - a[0], dy = b[1] - a[1]
  const len = Math.hypot(dx, dy) || 1
  const nx = -dy / len, ny = dx / len
  const sign = ny < 0 ? 1 : -1
  const bulge = len * 0.3 * sign
  const cx = mx + nx * bulge
  const cy = my + ny * bulge
  return `M${a[0]} ${a[1]} Q${cx} ${cy} ${b[0]} ${b[1]}`
}

function Vehicle({ route, projection }) {
  const { color, duration, delay, waypts } = route

  const pts = useMemo(
    () => waypts.map(k => projection([C[k][1], C[k][0]])),
    [waypts, projection],
  )
  const flightD = useMemo(() => buildPathD(pts), [pts])

  const pathRef = useRef(null)
  const t = useMotionValue(0)

  useEffect(() => {
    if (!flightD) return
    let stopped = false
    let controls
    const ease = [0.42, 0, 0.58, 1]
    const restDelay = 1600
    let timer
    const runOnce = (initialDelay) => {
      if (stopped) return
      controls = animate(t, 1, {
        duration, delay: initialDelay, ease,
        onComplete: () => {
          if (stopped) return
          timer = setTimeout(() => {
            if (stopped) return
            t.set(0)
            runOnce(0)
          }, restDelay)
        },
      })
    }
    runOnce(delay)
    return () => { stopped = true; controls?.stop(); clearTimeout(timer) }
  }, [flightD, t, duration, delay])

  const sample = (v) => {
    if (!pathRef.current) {
      const p = pts[0] || [0, 0]
      return { x: p[0], y: p[1], angle: 0 }
    }
    const L = pathRef.current.getTotalLength()
    const at = Math.max(0, Math.min(L, v * L))
    const cur = pathRef.current.getPointAtLength(at)
    const nxt = pathRef.current.getPointAtLength(Math.min(L, at + 1.5))
    return {
      x: cur.x, y: cur.y,
      angle: Math.atan2(nxt.y - cur.y, nxt.x - cur.x) * 180 / Math.PI,
    }
  }

  const vX      = useTransform(t, v => sample(v).x)
  const vY      = useTransform(t, v => sample(v).y)
  const vRotate = useTransform(t, v => sample(v).angle)
  const vOp     = useTransform(t, [0, 0.03, 0.97, 1], [0, 1, 1, 0])

  return (
    <g>
      <path ref={pathRef} d={flightD} fill="none" stroke="none" />
      <motion.g style={{ x: vX, y: vY, rotate: vRotate, opacity: vOp }}>
        <FloatWrap><PlaneShape color={color} /></FloatWrap>
      </motion.g>
    </g>
  )
}

function FloatWrap({ children }) {
  const y = useMotionValue(0)
  useEffect(() => {
    const c = animate(y, [-1.4, 1.4, -1.4], { duration: 2.3, repeat: Infinity, ease: 'easeInOut' })
    return () => c.stop()
  }, [y])
  return <motion.g style={{ y }}>{children}</motion.g>
}


function PlaneShape({ color }) {
  return (
    <g>
      <circle r={11} fill={color} opacity={0.18} filter="url(#plane-glow)" />
      <circle r={6}  fill="#ffffff" opacity={0.8} filter="url(#plane-glow)" />
      <g>
        <path
          d="M 12 0 L 6 -1.3 L 1 -1.6 L -1 -6 L -3 -6 L -1.3 -1.6 L -6 -1.3 L -8 -3 L -10 -3 L -9 -0.9 L -10.5 0 L -9 0.9 L -10 3 L -8 3 L -6 1.3 L -1.3 1.6 L -3 6 L -1 6 L 1 1.6 L 6 1.3 Z"
          fill={C_INK} stroke="#ffffff" strokeWidth={0.8} strokeLinejoin="round"
        />
        <ellipse cx={7.5} cy={0} rx={1.8} ry={0.8} fill={color} />
      </g>
    </g>
  )
}


export default function LogisticsMap() {
  const [geo, setGeo] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetch(GEO_URL).then(r => r.json())
      .then(fc => { if (!cancelled) setGeo(fc) })
      .catch(err => console.error('Failed to load India map:', err))
    return () => { cancelled = true }
  }, [])

  const { statePaths, projection, hubs } = useMemo(() => {
    if (!geo) return { statePaths: [], projection: null, hubs: [] }
    const proj = geoMercator().fitExtent(
      [[40, 40], [MAP_W - 40, MAP_H - 40]], geo,
    )
    const pg = geoPath(proj)
    const sps = geo.features.map((f, i) => {
      const name = f.properties?.ST_NM || `s${i}`
      const [cx, cy] = pg.centroid(f)
      return { id: name, name, d: pg(f), cx, cy }
    })
    const used = new Set(ROUTES.flatMap(r => r.waypts))
    const hubs = Array.from(used).map(k => {
      const [x, y] = proj([C[k][1], C[k][0]])
      return { key: k, x, y, name: k.charAt(0).toUpperCase() + k.slice(1) }
    })
    return { statePaths: sps, projection: proj, hubs }
  }, [geo])

  if (!geo || !projection) {
    return (
      <div className="logistics-map__loading">
        <div className="logistics-map__spinner" />
        <span>Loading logistics network…</span>
      </div>
    )
  }

  return (
    <div className="logistics-map">
      <svg
        viewBox={`0 0 ${MAP_W} ${MAP_H}`}
        style={{ width: '100%', height: '100%', display: 'block' }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="state-fill">
            <stop offset="0%"   stopColor="#ffffff" />
            <stop offset="100%" stopColor="#eef4fb" />
          </radialGradient>
          <filter id="plane-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>
        </defs>

        {statePaths.map(s => (
          <path key={s.id} d={s.d}
            fill="url(#state-fill)"
            stroke="rgba(71,105,170,0.45)"
            strokeWidth={0.5}
          />
        ))}

        <g style={{ pointerEvents: 'none' }}>
          {statePaths.map(s => {
            if (!isFinite(s.cx) || !isFinite(s.cy)) return null
            return (
              <text key={`lbl-${s.id}`}
                x={s.cx} y={s.cy}
                textAnchor="middle" dominantBaseline="middle"
                fontFamily="system-ui, -apple-system, Segoe UI, sans-serif"
                fontSize={/Lakshadweep|Puducherry|Chandigarh|Dadra|Daman|Andaman|Delhi|Goa|Sikkim|Tripura/.test(s.name) ? 7 : 8.8}
                fontWeight={500}
                fill="rgba(15,23,42,0.6)"
                stroke="#ffffff" strokeWidth={2.2} strokeOpacity={0.85}
                paintOrder="stroke"
              >
                {s.name}
              </text>
            )
          })}
        </g>

        <g>
          {hubs.map(h => (
            <g key={h.key}>
              <circle cx={h.x} cy={h.y} r={3} fill="#0f172a" />
              <circle cx={h.x} cy={h.y} r={5.5} fill="none"
                stroke="#0f172a" strokeWidth={0.6} opacity={0.4} />
              <text x={h.x + 6} y={h.y + 3}
                fontFamily="system-ui" fontSize={9} fontWeight={700}
                fill={C_INK} stroke="#ffffff" strokeWidth={2.4}
                strokeOpacity={0.9} paintOrder="stroke">
                {h.name}
              </text>
            </g>
          ))}
        </g>

        {ROUTES.map(r => (
          <Vehicle key={r.id} route={r} projection={projection} />
        ))}
      </svg>
    </div>
  )
}

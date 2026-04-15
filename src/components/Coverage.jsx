import './Coverage.css'

/*
  All coordinates use this projection inside viewBox="0 0 520 550":
    x = (longitude - 67.5) * 16
    y = (37 - latitude)  * 18
*/

const cities = [
  { name: 'Delhi',         cx: 155, cy: 151, label: true,  dx:  8, dy: -10 },
  { name: 'Chandigarh',    cx: 149, cy: 114, label: false },
  { name: 'Jaipur',        cx: 133, cy: 183, label: false },
  { name: 'Lucknow',       cx: 216, cy: 185, label: false },
  { name: 'Patna',         cx: 282, cy: 206, label: false },
  { name: 'Kolkata',       cx: 334, cy: 259, label: true,  dx: 10, dy: -8 },
  { name: 'Guwahati',      cx: 387, cy: 196, label: true,  dx:  9, dy: -8 },
  { name: 'Ahmedabad',     cx:  82, cy: 252, label: false },
  { name: 'Surat',         cx:  85, cy: 285, label: false },
  { name: 'Bhopal',        cx: 158, cy: 247, label: false },
  { name: 'Nagpur',        cx: 186, cy: 286, label: false },
  { name: 'Mumbai',        cx:  86, cy: 322, label: true,  dx: -10, dy: -10 },
  { name: 'Pune',          cx: 102, cy: 333, label: false },
  { name: 'Hyderabad',     cx: 176, cy: 352, label: true,  dx:  10, dy: -8 },
  { name: 'Visakhapatnam', cx: 253, cy: 347, label: false },
  { name: 'Bengaluru',     cx: 162, cy: 434, label: true,  dx: -12, dy:  14 },
  { name: 'Chennai',       cx: 205, cy: 431, label: true,  dx:  10, dy: -8 },
  { name: 'Coimbatore',    cx: 175, cy: 452, label: false },
  { name: 'Kochi',         cx: 141, cy: 486, label: true,  dx: -10, dy:  12 },
  { name: 'Madurai',       cx: 192, cy: 462, label: false },
]

export default function Coverage() {
  return (
    <section className="coverage" id="coverage">
      <div className="coverage__inner">

        {/* ── Left text ── */}
        <div className="coverage__text">
          <p className="section-label">Pan-India network</p>
          <h2 className="coverage__title">
            Air. Road. Waterway.<br />
            <span>100 cities.</span><br />
            <em>Nothing stops.</em>
          </h2>
          <p className="coverage__desc">
            Our multi-modal logistics network spans every corner of India.
            Whether it's a metro hospital or a remote diagnostic centre —
            we get the samples there on time, every time.
          </p>

          <div className="coverage__modes">
            {[
              { color: '#4f8ef7', label: 'Air',      icon: '✈' },
              { color: '#f59e0b', label: 'Road',     icon: '🛵' },
              { color: '#2de0a5', label: 'Waterway', icon: '🚢' },
            ].map((m) => (
              <div key={m.label} className="coverage__mode">
                <span style={{ color: m.color, fontSize: '1rem' }}>{m.icon}</span>
                <span className="coverage__mode-label">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="coverage__highlights">
            {[
              { num: '632+', text: 'Cities covered' },
              { num: '100',  text: 'Priority hubs'  },
              { num: '24/7', text: 'Operations'     },
            ].map((h) => (
              <div key={h.num} className="coverage__hl">
                <span className="coverage__hl-num">{h.num}</span>
                <span className="coverage__hl-text">{h.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Map ── */}
        <div className="coverage__map-wrap">
          <svg
            className="india-map-svg"
            viewBox="0 0 520 550"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="glow-soft">
                <feGaussianBlur stdDeviation="3" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="vehicle-glow">
                <feGaussianBlur stdDeviation="2" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <radialGradient id="mapFill" cx="50%" cy="45%" r="55%">
                <stop offset="0%"   stopColor="rgba(79,142,247,0.13)"/>
                <stop offset="100%" stopColor="rgba(79,142,247,0.04)"/>
              </radialGradient>

              {/* ── Hidden motion paths for vehicles ── */}

              {/* Plane 1: Delhi→Kolkata→Chennai→Mumbai→Delhi */}
              <path id="p-plane1" d="
                M 155,151
                Q 270,185 334,259
                Q 295,375 205,431
                Q 130,395  86,322
                Q 100,225 155,151
              "/>
              {/* Plane 2: Delhi→Guwahati→Visakhapatnam→Bengaluru→Delhi */}
              <path id="p-plane2" d="
                M 155,151
                Q 295,155 387,196
                Q 345,295 253,347
                Q 195,405 162,434
                Q 128,310 155,151
              "/>
              {/* Scooter 1: Mumbai→Pune→Hyderabad→Bengaluru */}
              <path id="p-scoot1" d="
                M  86,322
                C  96,330 102,333 102,333
                C 140,342 176,352 176,352
                C 168,395 162,434 162,434
              "/>
              {/* Scooter 2: Delhi→Jaipur→Ahmedabad→Mumbai */}
              <path id="p-scoot2" d="
                M 155,151
                L 133,183
                L  82,252
                L  86,322
              "/>
              {/* Ship: Mumbai→Goa→Kochi (west coast) */}
              <path id="p-ship" d="
                M  86,322
                C  92,352 96,376 101,396
                C 112,432 128,462 141,486
              "/>
            </defs>

            {/* ════════════════════════════
                INDIA MAP OUTLINE
                Clockwise from J&K (NW corner)
                Scale: x=(lon-67.5)*16, y=(37-lat)*18
            ════════════════════════════ */}
            <path
              className="india-outline"
              d="
                M 104,45
                C 122,26 145,17 165,21
                C 180,24 185,44 186,72
                C 187,98 190,122 194,140
                L 200,153
                C 210,161 224,167 240,169
                C 264,175 290,177 316,177
                L 338,175
                C 356,169 374,165 392,167
                L 414,159
                L 455,152
                L 490,159
                L 492,182
                C 476,198 460,216 448,232
                L 432,256
                C 420,260 408,250 400,250
                L 383,257
                L 366,264
                L 349,272
                L 335,283
                C 322,296 310,312 296,329
                L 279,347
                L 262,360
                L 251,370
                L 234,387
                L 217,408
                C 211,421 206,433 202,445
                L 196,459
                L 186,477
                L 174,494
                L 164,511
                L 159,522
                L 150,514
                L 141,500
                C 134,483 127,465 120,447
                C 113,428 107,410 100,392
                C  94,374  89,357  85,339
                L  83,322
                L  80,305
                L  79,286
                C  79,273  81,264  86,258
                C  76,250  62,240  46,230
                L  24,242
                L  16,234
                C  16,220  18,208  26,202
                L  46,196
                C  48,182  48,166  52,154
                L  55,140
                C  62,134  72,132  82,138
                C  86,150  84,166  82,182
                C  80,198  82,210  86,220
                C  80,228  78,240  80,252
                L  82,268
                L  84,285
              "
            />

            {/* ── Route lines (animated dashes) ── */}

            {/* Air routes */}
            <path d="M 155,151 Q 270,185 334,259"  className="route-line route-air" />
            <path d="M 334,259 Q 295,375 205,431"  className="route-line route-air" style={{animationDelay:'0.6s'}}/>
            <path d="M 205,431 Q 130,395  86,322"  className="route-line route-air" style={{animationDelay:'1.2s'}}/>
            <path d="M  86,322 Q 100,225 155,151"  className="route-line route-air" style={{animationDelay:'1.8s'}}/>
            <path d="M 155,151 Q 295,155 387,196"  className="route-line route-air" style={{animationDelay:'0.3s'}}/>
            <path d="M 387,196 Q 340,290 253,347"  className="route-line route-air" style={{animationDelay:'0.9s'}}/>

            {/* Road routes */}
            <path d="M  86,322 C  96,330 102,333 102,333 C 140,342 176,352 176,352 C 168,395 162,434 162,434"
              className="route-line route-road"/>
            <path d="M 155,151 L 133,183 L  82,252 L  86,322"
              className="route-line route-road" style={{animationDelay:'0.8s'}}/>
            <path d="M 155,151 L 216,185 L 282,206 L 334,259"
              className="route-line route-road" style={{animationDelay:'1.5s'}}/>

            {/* Waterway (west coast) */}
            <path d="M 86,322 C 92,352 96,376 101,396 C 112,432 128,462 141,486"
              className="route-line route-water"/>

            {/* ── City dots ── */}
            {cities.map((c) => (
              <g key={c.name} filter="url(#glow-soft)">
                <circle cx={c.cx} cy={c.cy} r="9"  className="city-pulse"/>
                <circle cx={c.cx} cy={c.cy} r="4"  className="city-core"/>
                <circle cx={c.cx} cy={c.cy} r="1.8" fill="#fff" opacity="0.9"/>
                {c.label && (
                  <text x={c.cx + c.dx} y={c.cy + c.dy} className="city-label">
                    {c.name}
                  </text>
                )}
              </g>
            ))}

            {/* ════════════════════════════
                ANIMATED VEHICLES
            ════════════════════════════ */}

            {/* ✈ Plane 1 — blue */}
            <g filter="url(#vehicle-glow)">
              <animateMotion dur="13s" repeatCount="indefinite" rotate="auto">
                <mpath href="#p-plane1"/>
              </animateMotion>
              <g transform="translate(-9,-7)">
                <path d="M9,0 L12,5 L18,5 L18,7 L12,7 L13,12 L15,12 L15,14 L9,12 L3,14 L3,12 L5,12 L6,7 L0,7 L0,5 L6,5 Z"
                  fill="#4f8ef7"/>
              </g>
            </g>

            {/* ✈ Plane 2 — teal */}
            <g filter="url(#vehicle-glow)" opacity="0.9">
              <animateMotion dur="17s" begin="5s" repeatCount="indefinite" rotate="auto">
                <mpath href="#p-plane2"/>
              </animateMotion>
              <g transform="translate(-8,-6)">
                <path d="M8,0 L11,5 L16,5 L16,7 L11,7 L12,12 L14,12 L14,14 L8,12 L2,14 L2,12 L4,12 L5,7 L0,7 L0,5 L5,5 Z"
                  fill="#2de0a5"/>
              </g>
            </g>

            {/* 🛵 Scooter 1 — amber: Mumbai→Hyderabad→Bengaluru */}
            <g filter="url(#vehicle-glow)">
              <animateMotion dur="11s" repeatCount="indefinite" rotate="auto">
                <mpath href="#p-scoot1"/>
              </animateMotion>
              <g transform="translate(-9,-6)">
                <rect x="2" y="2" width="14" height="7" rx="3.5" fill="#f59e0b"/>
                <circle cx="3.5" cy="10" r="2.5" fill="#f59e0b" opacity="0.85"/>
                <circle cx="14.5" cy="10" r="2.5" fill="#f59e0b" opacity="0.85"/>
                <rect x="5.5" y="0.5" width="7" height="2.5" rx="1.2" fill="#fbbf24"/>
              </g>
            </g>

            {/* 🛵 Scooter 2 — amber: Delhi→Ahmedabad→Mumbai */}
            <g filter="url(#vehicle-glow)" opacity="0.85">
              <animateMotion dur="15s" begin="3s" repeatCount="indefinite" rotate="auto">
                <mpath href="#p-scoot2"/>
              </animateMotion>
              <g transform="translate(-9,-6)">
                <rect x="2" y="2" width="14" height="7" rx="3.5" fill="#f59e0b"/>
                <circle cx="3.5" cy="10" r="2.5" fill="#f59e0b" opacity="0.85"/>
                <circle cx="14.5" cy="10" r="2.5" fill="#f59e0b" opacity="0.85"/>
                <rect x="5.5" y="0.5" width="7" height="2.5" rx="1.2" fill="#fbbf24"/>
              </g>
            </g>

            {/* 🚢 Ship — teal: west coast Mumbai→Kochi */}
            <g filter="url(#vehicle-glow)">
              <animateMotion dur="19s" begin="2s" repeatCount="indefinite" rotate="auto">
                <mpath href="#p-ship"/>
              </animateMotion>
              <g transform="translate(-7,-5)">
                <path d="M0,8 L14,8 L12,13 L2,13 Z" fill="#2de0a5" opacity="0.95"/>
                <rect x="5" y="3" width="5" height="5" fill="#2de0a5" opacity="0.7"/>
                <line x1="7.5" y1="0" x2="7.5" y2="3" stroke="#2de0a5" strokeWidth="1.2"/>
                <path d="M7.5,0 L11,2" stroke="#2de0a5" strokeWidth="0.8"/>
              </g>
            </g>

          </svg>
        </div>
      </div>
    </section>
  )
}

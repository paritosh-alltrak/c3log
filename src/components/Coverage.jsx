import './Coverage.css'
import LogisticsMap from './LogisticsMap'

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
          <LogisticsMap />
        </div>

      </div>
    </section>
  )
}

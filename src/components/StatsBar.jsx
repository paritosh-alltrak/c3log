import './StatsBar.css'

const stats = [
  { value: '425', label: 'Lab partners', suffix: '+' },
  { value: '2,200', label: 'Pickup points', suffix: '+' },
  { value: '2–8°C', label: 'Cold chain SLA', suffix: '' },
  { value: '25', label: 'Years of expertise', suffix: ' yr' },
]

export default function StatsBar() {
  return (
    <section className="statsbar">
      <div className="statsbar__inner">
        {stats.map((s, i) => (
          <>
            <div key={s.label} className="statsbar__item">
              <span className="statsbar__value">{s.value}{s.suffix}</span>
              <span className="statsbar__label">{s.label}</span>
            </div>
            {i < stats.length - 1 && <div key={`d${i}`} className="statsbar__divider" />}
          </>
        ))}
      </div>
    </section>
  )
}

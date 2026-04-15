import './ClientCarousel.css'

const clients = [
  { initials: 'MH', name: 'Max Healthcare', type: 'Hospital chain', color: '#1a6fad' },
  { initials: 'ML', name: 'Metropolis Labs', type: 'Diagnostics', color: '#2d5fa6' },
  { initials: 'AD', name: 'Agilus Diagnostics', type: 'Lab network', color: '#1e5fa0' },
  { initials: 'TI', name: 'Tata 1mg', type: 'Health platform', color: '#2563a8' },
  { initials: 'SD', name: 'Suburban Diagnostics', type: 'Lab services', color: '#1a5c9e' },
  { initials: 'RH', name: 'Redcliffe Health', type: 'Diagnostics', color: '#1d60a3' },
  { initials: 'LL', name: 'Lal PathLabs', type: 'Pathology chain', color: '#24589c' },
  { initials: 'TH', name: 'Thyrocare', type: 'Lab network', color: '#1b5ea2' },
  { initials: 'AP', name: 'Apollo Diagnostics', type: 'Hospital chain', color: '#2260aa' },
  { initials: 'VD', name: 'Vijaya Diagnostics', type: 'Lab services', color: '#1c5fa5' },
]

function CarouselCard({ client }) {
  return (
    <div className="cc__card">
      <div className="cc__avatar" style={{ background: client.color }}>
        {client.initials}
      </div>
      <div className="cc__info">
        <span className="cc__name">{client.name}</span>
        <span className="cc__type">{client.type}</span>
      </div>
    </div>
  )
}

export default function ClientCarousel() {
  return (
    <section className="cc">
      <p className="cc__label">TRUSTED BY INDIA'S HEALTHCARE LEADERS</p>
      <div className="cc__track-wrap">
        <div className="cc__track">
          {clients.map((c) => (
            <CarouselCard key={c.name} client={c} />
          ))}
          {/* duplicate for seamless loop */}
          {clients.map((c) => (
            <CarouselCard key={c.name + '_dup'} client={c} />
          ))}
        </div>
      </div>
    </section>
  )
}

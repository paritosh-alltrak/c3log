import './TrustedBy.css'

const logos = [
  'Apollo Diagnostics',
  'Metropolis',
  'Thyrocare',
  'SRL Diagnostics',
  'Redcliffe Labs',
  'Vijaya Diagnostics',
  'Neuberg',
  'Lal PathLabs',
]

const testimonial = {
  quote: "C3log has transformed how we think about pre-analytical logistics. Their cold chain reliability is unmatched across India.",
  author: "Dr. Suresh Nair",
  role: "Head of Operations, Apollo Diagnostics",
}

export default function TrustedBy() {
  return (
    <section className="trusted" id="trusted">
      <div className="trusted__inner">
        <div className="trusted__header">
          <p className="section-label">Partners & clients</p>
          <h2 className="trusted__title">
            Trusted by the teams that<br />
            <em>keep India healthy.</em>
          </h2>
        </div>

        <div className="trusted__logos">
          {logos.map((logo) => (
            <div key={logo} className="trusted__logo-chip">
              {logo}
            </div>
          ))}
        </div>

        <div className="trusted__testimonial">
          <div className="testimonial__quote-mark">"</div>
          <p className="testimonial__text">{testimonial.quote}</p>
          <div className="testimonial__author">
            <div className="testimonial__avatar">
              {testimonial.author[0]}
            </div>
            <div>
              <p className="testimonial__name">{testimonial.author}</p>
              <p className="testimonial__role">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

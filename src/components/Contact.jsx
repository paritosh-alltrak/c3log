import { useState } from 'react'
import './Contact.css'

const interests = [
  'Cold chain',
  'Phlebotomy',
  'C3 Wellness',
  'C3 Post',
  'HealthJob',
  'AllTrak',
  'HRMS',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({
    org: '', industry: '', name: '', email: '', phone: '', designation: '', interests: [],
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const toggleInterest = (item) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(item)
        ? prev.interests.filter((i) => i !== item)
        : [...prev.interests, item],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__left">
          <p className="section-label">Let's talk</p>
          <h2 className="contact__title">
            The right partner for<br />
            healthcare <em>at scale.</em>
          </h2>
          <p className="contact__desc">
            Whether you're a diagnostics lab, hospital chain, or healthcare startup —
            we're built to handle your pre-analytical logistics at any scale.
          </p>

          <div className="contact__info">
            <div className="contact__info-item">
              <span className="contact__info-icon">📍</span>
              <div>
                <p className="contact__info-label">Headquarters</p>
                <p className="contact__info-val">B-3, Second Floor, Nimri Comm Complex,
                  Ashok Vihar Ph-IV, Delhi-110052</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">📧</span>
              <div>
                <p className="contact__info-label">Email</p>
                <p className="contact__info-val">info@c3logistics.co.in</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">📞</span>
              <div>
                <p className="contact__info-label">Phone</p>
                <p className="contact__info-val">+91 9971777199</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__right">
          {sent ? (
            <div className="contact__success">
              <span className="contact__success-icon">✅</span>
              <h3>Thank you!</h3>
              <p>We'll get back to you within 24 hours.</p>
              <button
                type="button"
                className="contact__submit"
                style={{ marginTop: 16 }}
                onClick={() => {
                  setForm({ org: '', industry: '', name: '', email: '', phone: '', designation: '', interests: [] })
                  setSent(false)
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-header">
                <h3>Get in touch</h3>
                <p>Fill in your details and we'll reach out shortly.</p>
              </div>

              <div className="contact__form-body">
                <div className="form-field">
                  <input
                    type="text"
                    name="org"
                    placeholder="Organisation name"
                    value={form.org}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <input
                    type="text"
                    name="industry"
                    placeholder="Industry"
                    value={form.industry}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <input
                    type="text"
                    name="designation"
                    placeholder="Designation"
                    value={form.designation}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact__interests">
                  <p className="contact__interests-label">I'm interested in</p>
                  <div className="contact__chips">
                    {interests.map((item) => (
                      <button
                        key={item}
                        type="button"
                        className={`contact__chip ${form.interests.includes(item) ? 'contact__chip--active' : ''}`}
                        onClick={() => toggleInterest(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <button type="submit" className="contact__submit">
                  Send — we'll be in touch
                </button>

                <p className="contact__disclaimer">No spam. Your data stays with us.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

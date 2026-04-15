import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', org: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

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
                <p className="contact__info-val">Bengaluru, Karnataka, India</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">📧</span>
              <div>
                <p className="contact__info-label">Email</p>
                <p className="contact__info-val">hello@c3log.in</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">📞</span>
              <div>
                <p className="contact__info-label">Phone</p>
                <p className="contact__info-val">+91 80 4567 8900</p>
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
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label>Full name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Dr. Priya Sharma"
                    required
                  />
                </div>
                <div className="form-field">
                  <label>Organisation *</label>
                  <input
                    type="text"
                    name="org"
                    value={form.org}
                    onChange={handleChange}
                    placeholder="Apollo Diagnostics"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="priya@apollo.com"
                    required
                  />
                </div>
                <div className="form-field">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              <div className="form-field">
                <label>How can we help?</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your logistics needs — volume, coverage area, special requirements..."
                />
              </div>
              <button type="submit" className="contact__submit">
                Send message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

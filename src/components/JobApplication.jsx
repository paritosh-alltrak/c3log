import { useState } from 'react'
import './CompanyProfile.css'
import './JobApplication.css'

const countries = [
  'India', 'United States', 'United Kingdom', 'Canada', 'Australia',
  'Germany', 'France', 'UAE', 'Singapore', 'Other',
]

export default function JobApplication({ onNavigate }) {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', address: '',
    city: '', state: '', country: '', pinCode: '',
    experience: '', post: '', cv: null, message: '',
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Your application has been submitted successfully!')
  }

  return (
    <div className="cp-page">
      <div className="cp-hero">
        <div className="cp-hero__inner">
          <nav className="cp-breadcrumb">
            <span className="cp-breadcrumb__link" onClick={() => onNavigate('home')}>Home</span>
            <span className="cp-breadcrumb__sep">›</span>
            <span>Career</span>
            <span className="cp-breadcrumb__sep">›</span>
            <span>Job Application</span>
          </nav>
          <h1>Job Application</h1>
        </div>
      </div>

      <div className="cp-content ja-content">
        <form className="ja-form" onSubmit={handleSubmit}>
          <div className="ja-grid">
            <input
              className="ja-input"
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              className="ja-input"
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
            />
            <input
              className="ja-input"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <input
              className="ja-input"
              type="text"
              name="address"
              placeholder="Address *"
              value={form.address}
              onChange={handleChange}
            />
            <input
              className="ja-input"
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
            />
            <input
              className="ja-input"
              type="text"
              name="state"
              placeholder="State"
              value={form.state}
              onChange={handleChange}
            />
            <select
              className="ja-input ja-select"
              name="country"
              value={form.country}
              onChange={handleChange}
            >
              <option value="">Select Country *</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <input
              className="ja-input"
              type="text"
              name="pinCode"
              placeholder="Pin Code"
              value={form.pinCode}
              onChange={handleChange}
            />
            <input
              className="ja-input"
              type="text"
              name="experience"
              placeholder="Years of Experience"
              value={form.experience}
              onChange={handleChange}
            />
            <input
              className="ja-input"
              type="text"
              name="post"
              placeholder="Applying for Post"
              value={form.post}
              onChange={handleChange}
            />
          </div>

          <div className="ja-cv-row">
            <label className="ja-cv-label">Upload CV</label>
            <div className="ja-cv-box">
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
              />
            </div>
          </div>

          <textarea
            className="ja-input ja-textarea"
            name="message"
            placeholder="Message"
            rows={6}
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" className="ja-submit">SUBMIT NOW</button>
        </form>
      </div>
    </div>
  )
}

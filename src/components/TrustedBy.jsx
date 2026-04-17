import { useState } from 'react'
import './TrustedBy.css'

const testimonials = [
  {
    quote: "C3log has transformed how we think about pre-analytical logistics. Their cold chain reliability is unmatched across India.",
    author: "Dr. Suresh Nair",
    role: "Head of Operations, Apollo Diagnostics",
    videoId: "LXKz51ZUypc",
    videoSi: "qLaV0rWxoofnigG4",
  },
  {
    quote: "Credent launches India's largest Electric Vehicle (EV) Healthcare Delivery Fleet. This is a daring initiative that will surely help the healthcare sector's sustainability efforts.",
    author: "Rajesh Mehta",
    role: "Director, Healthcare Logistics India",
    videoId: "zKEOH5j0L48",
    videoSi: "E_TSimD5-_cbJpLv",
  },
  {
    quote: "New Delhi [India], May 29: Credent, known as C3 Logistics is launching India's largest electric vehicle (EV) healthcare delivery fleet. This is a daring initiative that will surely help the healthcare sector's sustainability efforts.",
    author: "Priya Sharma",
    role: "Editor, MedTech Times",
    videoId: "0_v1O2gAKl4",
    videoSi: "CiG5LM3mUk9osxeC",
  },
]

export default function TrustedBy() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)

  const item = testimonials[active]

  return (
    <section className="trusted" id="trusted">
      <div className="trusted__inner">
        <div className="trusted__header">
          <p className="section-label">Partners &amp; clients</p>
          <h2 className="trusted__title">
            Trusted by the teams that<br />
            <em>keep India healthy.</em>
          </h2>
        </div>

        <div className="testimonial__carousel">
          <div className="trusted__testimonial">
            {/* Video — left */}
            <div className="testimonial__video-wrapper">
              <iframe
                key={item.videoId}
                src={`https://www.youtube.com/embed/${item.videoId}?si=${item.videoSi}`}
                title="YouTube video player"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {/* Content — right */}
            <div className="testimonial__body">
              <div className="testimonial__quote-mark">"</div>
              <p className="testimonial__text">{item.quote}</p>
              <div className="testimonial__author">
                <div className="testimonial__avatar">{item.author[0]}</div>
                <div>
                  <p className="testimonial__name">{item.author}</p>
                  <p className="testimonial__role">{item.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="carousel__controls">
            <button className="carousel__btn" onClick={prev} aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="carousel__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`carousel__dot${i === active ? ' carousel__dot--active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button className="carousel__btn" onClick={next} aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

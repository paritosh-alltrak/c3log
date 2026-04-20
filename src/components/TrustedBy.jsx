import { useState, useEffect, useRef } from 'react'
import './TrustedBy.css'

const testimonials = [
  {
    quote: "New Delhi [India], May 29: Credent, known as C3 Logistics is launching India's largest electric vehicle (EV) healthcare delivery fleet. This is a daring initiative that will surely help the healthcare sector's sustainability efforts.",
    author: "Rajdeep Panvar",
    role: "Editor, MedTech Times",
    videoId: "0_v1O2gAKl4",
    videoSi: "CiG5LM3mUk9osxeC",
  },
  {
    quote: "Credent launches India's largest Electric Vehicle (EV) Healthcare Delivery Fleet. This is a daring initiative that will surely help the healthcare sector's sustainability efforts.",
    author: "Nishant Singhal",
    role: "Board Member & CEO, Healthians",
    logo: "/healthians",
    videoId: "zKEOH5j0L48",
    videoSi: "E_TSimD5-_cbJpLv",
  },
  {
    quote: "New Delhi [India], May 29: Credent, known as C3 Logistics is launching India's largest electric vehicle (EV) healthcare delivery fleet. This is a daring initiative that will surely help the healthcare sector's sustainability efforts.",
    author: "Rajdeep Panvar",
    role: "Editor, MedTech Times",
    videoId: "rOVqH2Qw3tE",
    videoSi: "g8k4thoZLfyQ_Xu",
  },

  {
    quote: "New Delhi [India], May 29: Credent, known as C3 Logistics is launching India's largest electric vehicle (EV) healthcare delivery fleet. This is a daring initiative that will surely help the healthcare sector's sustainability efforts.",
    author: "Rajdeep Panvar",
    role: "Editor, MedTech Times",
    videoId: "TBfJBO5W3Ag",
    videoSi: "YK8souVOSBfQWCZE",
  },
  {
    quote: "New Delhi [India], May 29: Credent, known as C3 Logistics is launching India's largest electric vehicle (EV) healthcare delivery fleet. This is a daring initiative that will surely help the healthcare sector's sustainability efforts.",
    author: "Rajdeep Panvar",
    role: "Editor, MedTech Times",
    videoId: "FuOJqGmMhCg",
    videoSi: "lpdreW0F9b4SHi-R",
  },
  {
    quote: "New Delhi [India], May 29: Credent, known as C3 Logistics is launching India's largest electric vehicle (EV) healthcare delivery fleet. This is a daring initiative that will surely help the healthcare sector's sustainability efforts.",
    author: "Rajdeep Panvar",
    role: "Editor, MedTech Times",
    videoId: "W4QLvhrzZLQ",
    videoSi: "Ixx1TRz86B4rX8CF",
  },
]


const PAIR_COUNT = Math.ceil(testimonials.length / 2)

export default function TrustedBy() {
  const [active, setActive] = useState(0)
  const paused = useRef(false)

  const prev = () => setActive((a) => (a - 1 + PAIR_COUNT) % PAIR_COUNT)
  const next = () => setActive((a) => (a + 1) % PAIR_COUNT)

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setActive((a) => (a + 1) % PAIR_COUNT)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const item = testimonials[active * 2]
  const item2 = testimonials[active * 2 + 1]

  return (
    <section
      className="trusted"
      id="trusted"
      onMouseEnter={() => { paused.current = true }}
      onMouseLeave={() => { paused.current = false }}
    >
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
            {/* <div className="testimonial__body">
              <div className="testimonial__quote-mark">"</div>
              <p className="testimonial__text">{item.quote}</p>
              <div className="testimonial__author">
                <div className="testimonial__avatar">{item.author[0]}</div>
                <div>
                  <p className="testimonial__name">{item.author}</p>
                  <p className="testimonial__role">{item.role}</p>
                </div>
              </div>
            </div> */}
            <div className="testimonial__video-wrapper">
              <iframe
                key={item2.videoId}
                src={`https://www.youtube.com/embed/${item2.videoId}?si=${item2.videoSi}`}
                title="YouTube video player"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
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
              {Array.from({ length: PAIR_COUNT }).map((_, i) => (
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

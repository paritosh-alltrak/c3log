import { useState } from 'react'
import './PhotoGallery.css'

const categories = [
  {
    label: 'Diwali Celebration',
    photos: [
      { src: '/photo-gallery/diwali1.JPG', alt: 'Diwali Celebration 1' },
      { src: '/photo-gallery/diwali2.JPG', alt: 'Diwali Celebration 2' },
      { src: '/photo-gallery/diwali3.JPG', alt: 'Diwali Celebration 3' },
    ],
  },
  {
    label: 'Holi Celebration',
    photos: [
      { src: '/photo-gallery/holi1.JPG', alt: 'Holi Celebration 1' },
      { src: '/photo-gallery/holi2.JPG', alt: 'Holi Celebration 2' },
      { src: '/photo-gallery/holi3.JPG', alt: 'Holi Celebration 3' },
      { src: '/photo-gallery/holi4.JPG', alt: 'Holi Celebration 4' },
    ],
  },
  {
    label: 'Annual Operations',
    photos: [
      { src: '/photo-gallery/aop1.JPG', alt: 'Annual Operations 1' },
    ],
  },
]

export default function PhotoGallery() {
  const [lightbox, setLightbox] = useState(null) // { photos, index }

  const openLightbox = (photos, index) => setLightbox({ photos, index })
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox(lb => ({ ...lb, index: (lb.index - 1 + lb.photos.length) % lb.photos.length }))
  const next = () => setLightbox(lb => ({ ...lb, index: (lb.index + 1) % lb.photos.length }))

  const handleKeyDown = (e) => {
    if (!lightbox) return
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'Escape') closeLightbox()
  }

  return (
    <div className="gallery-page" onKeyDown={handleKeyDown} tabIndex={-1}>
      <div className="gallery-intro">
        <h1 className="gallery-intro__title">Photo <span>Gallery</span></h1>
        <p className="gallery-intro__sub">
          Moments that define our culture — celebrations, milestones, and the people who make C3 Logistics a great place to work.
        </p>
      </div>

      {categories.map((cat) => (
        <div key={cat.label} className="gallery-section">
          <div className="gallery-section__header">
            <h2>{cat.label}</h2>
          </div>
          <div className="gallery-grid">
            {cat.photos.map((photo, i) => (
              <div
                key={i}
                className="gallery-card"
                onClick={() => openLightbox(cat.photos, i)}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <div className="gallery-card__overlay">
                  <span className="gallery-card__zoom">&#x26F6;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {lightbox && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <button className="gallery-lightbox__close" onClick={closeLightbox}>&#x2715;</button>
          <button
            className="gallery-lightbox__arrow gallery-lightbox__arrow--prev"
            onClick={(e) => { e.stopPropagation(); prev() }}
          >&#8249;</button>
          <div className="gallery-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.photos[lightbox.index].src}
              alt={lightbox.photos[lightbox.index].alt}
            />
            <p className="gallery-lightbox__caption">{lightbox.photos[lightbox.index].alt}</p>
          </div>
          <button
            className="gallery-lightbox__arrow gallery-lightbox__arrow--next"
            onClick={(e) => { e.stopPropagation(); next() }}
          >&#8250;</button>
        </div>
      )}
    </div>
  )
}

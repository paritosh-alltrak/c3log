import './SocialRail.css'

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/C3LOGISTICS',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.6-1.5H16.5V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4v2.2H7.5v3h2.6V21h3.4z" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/Credentcold',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M18.244 3H21l-6.52 7.45L22 21h-6.18l-4.83-6.32L5.4 21H2.64l6.98-7.97L2 3h6.34l4.36 5.77L18.244 3z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/c3logistics/?originalSubdomain=in',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M4.5 4.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 10h3v10H3V10zm5 0h2.9v1.4h.04c.4-.75 1.4-1.55 2.86-1.55 3.06 0 3.62 2 3.62 4.65V20h-3v-4.65c0-1.1-.02-2.5-1.52-2.5-1.52 0-1.75 1.2-1.75 2.42V20H8V10z" />
      </svg>
    ),
  },
]

export default function SocialRail() {
  return (
    <div className="social-rail" aria-label="Social media">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="social-rail__icon"
        >
          {s.icon}
        </a>
      ))}
    </div>
  )
}

import { useEffect, useState } from 'react'
import { navLinks } from '../data/content.js'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.bar}`}>
        <a href="#" className={styles.brand} aria-label="Selasar — home">
          <span className={styles.mark} aria-hidden="true">
            <svg viewBox="0 0 32 32" width="28" height="28">
              <defs>
                <linearGradient id="navMark" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--sunset-500)" />
                  <stop offset="100%" stopColor="var(--cyan-500)" />
                </linearGradient>
              </defs>
              <circle cx="16" cy="16" r="14" fill="none" stroke="url(#navMark)" strokeWidth="1.5" />
              <path d="M16 4 A12 12 0 0 1 16 28" stroke="url(#navMark)" strokeWidth="1.5" fill="none" />
              <circle cx="16" cy="16" r="2.4" fill="var(--sunset-500)" />
            </svg>
          </span>
          <span className={styles.wordmark}>Selasar</span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href="#newsletter" className={`${styles.subscribeLink}`}>
            Subscribe
          </a>
          <a href="#newsletter" className={`btn btn-dark ${styles.cta}`}>
            Join the verandah
            <span aria-hidden="true">→</span>
          </a>
          <button
            className={styles.menuToggle}
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`${styles.menuLine} ${open ? styles.open1 : ''}`} />
            <span className={`${styles.menuLine} ${open ? styles.open2 : ''}`} />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#newsletter"
              className={`btn btn-primary ${styles.mobileCta}`}
              onClick={() => setOpen(false)}
            >
              Join the verandah
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

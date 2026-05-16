import { footerLinks, socials, brand } from '../data/content.js'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.lead}>
          <a href="#" className={styles.brand}>
            <span className={styles.mark} aria-hidden="true">
              <svg viewBox="0 0 32 32" width="22" height="22">
                <defs>
                  <linearGradient id="footMark" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--sunset-500)" />
                    <stop offset="100%" stopColor="var(--cyan-500)" />
                  </linearGradient>
                </defs>
                <circle cx="16" cy="16" r="14" fill="none" stroke="url(#footMark)" strokeWidth="1.5" />
                <path d="M16 4 A12 12 0 0 1 16 28" stroke="url(#footMark)" strokeWidth="1.5" fill="none" />
                <circle cx="16" cy="16" r="2.4" fill="var(--sunset-500)" />
              </svg>
            </span>
            <span className={styles.wordmark}>{brand.name}</span>
          </a>

          <p className={styles.origin}>{brand.origin}</p>

          <ul className={styles.socials} aria-label="Social channels">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href}>{s.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <nav className={styles.cols} aria-label="Footer">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className={styles.col}>
              <h4 className={styles.colHead}>{heading}</h4>
              <ul>
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className={styles.fineWrap}>
        <div className={`container ${styles.fine}`}>
          <span>
            © {year} {brand.name}. Brewed with kopi tubruk on the 8th parallel south.
          </span>
          <span className={styles.coords}>
            <span aria-hidden="true">⌖</span>&nbsp;-8.4095°&nbsp;,&nbsp;115.1889°
          </span>
        </div>
      </div>
    </footer>
  )
}

import { heroStats } from '../data/content.js'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.glowOrange} />
        <div className={styles.glowCyan} />
        <svg className={styles.grain} viewBox="0 0 200 200" preserveAspectRatio="none">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Issue No. 014 — May 2026</span>
          <h1 className={styles.headline}>
            A verandah for
            <span className={styles.italic}> ideas</span>,
            <br />
            kitchens,
            <span className={styles.amp}> &amp; </span>
            <span className={styles.italic}>strangers.</span>
          </h1>
          <p className={styles.lede}>
            Selasar is a slow magazine about discovering new cultures, the people you meet
            along the way, the code you write between flights, and the Indonesian recipes you
            inevitably start cooking when you get home.
          </p>

          <div className={styles.ctaRow}>
            <a href="#articles" className="btn btn-primary">
              Read this issue
              <span aria-hidden="true">→</span>
            </a>
            <a href="#features" className={styles.linkCta}>
              <span className={styles.linkDot} />
              Three pillars, one verandah
            </a>
          </div>

          <dl className={styles.stats}>
            {heroStats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <dt className={styles.statValue}>{s.value}</dt>
                <dd className={styles.statLabel}>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.visual}>
          <figure className={`${styles.tile} ${styles.tileMain}`}>
            <img
              src="/images/pasar-beringharjo.png"
              alt="A vendor at Pasar Beringharjo in Yogyakarta stands behind woven baskets of red chilis, turmeric and garlic in warm morning light"
              loading="eager"
            />
            <figcaption className={styles.caption}>
              <span className={styles.captionTag}>Encounters</span>
              <span>Pasar Beringharjo, Yogyakarta</span>
            </figcaption>
          </figure>

          <figure className={`${styles.tile} ${styles.tileSecondary}`}>
            <img
              src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=900&q=80"
              alt="A bowl of dark, glossy beef rendang dusted with fried shallots"
              loading="lazy"
            />
            <figcaption className={styles.caption}>
              <span className={styles.captionTag}>Kitchen</span>
              <span>Rendang — hour three</span>
            </figcaption>
          </figure>

          <figure className={`${styles.tile} ${styles.tileTertiary}`}>
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80"
              alt="A laptop on a wooden table beside a glass of kopi tubruk"
              loading="lazy"
            />
            <figcaption className={styles.caption}>
              <span className={styles.captionTag}>Tech Notes</span>
              <span>The warung commit</span>
            </figcaption>
          </figure>

          <div className={styles.passport} aria-hidden="true">
            <div className={styles.passportRow}>
              <span>Bali</span><span>·</span><span>16.05</span>
            </div>
            <div className={styles.passportRow}>
              <span>Latitude</span><span className={styles.mono}>−8.4095</span>
            </div>
            <div className={styles.passportRow}>
              <span>Reading time</span><span className={styles.mono}>27 min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

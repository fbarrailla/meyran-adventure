import { features } from '../data/content.js'
import styles from './FeatureGrid.module.css'

export default function FeatureGrid() {
  return (
    <section id="features" className={styles.section}>
      <div className="container">
        <header className={styles.head}>
          <span className="eyebrow">Three pillars</span>
          <h2 className={styles.title}>
            One verandah, three conversations
            <span className={styles.titleAccent}>.</span>
          </h2>
          <p className={styles.intro}>
            Selasar is organized like a long evening with friends — talk drifts from the
            people you met at the market, to the side-project that just shipped, to the smell
            of garlic frying in the next room.
          </p>
        </header>

        <ul className={styles.list}>
          {features.map((f, i) => (
            <li key={f.id} className={`${styles.row} ${styles[`accent_${f.accent}`]}`}>
              <div className={styles.media}>
                <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
                <div className={styles.frame}>
                  <img src={f.image} alt="" loading="lazy" />
                </div>
              </div>

              <div className={styles.copy}>
                <span className={styles.eyebrowRow}>
                  <span className={styles.bullet} />
                  {f.eyebrow}
                </span>
                <h3 className={styles.rowTitle}>{f.title}</h3>
                <p className={styles.rowCopy}>{f.copy}</p>

                <ul className={styles.tags}>
                  {f.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <a className={styles.rowCta} href={`#${f.id}`}>
                  <span>{f.cta}</span>
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

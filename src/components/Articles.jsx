import { useState, useMemo } from 'react'
import ArticleCard from './ArticleCard.jsx'
import { articles, articleCategories } from '../data/content.js'
import styles from './Articles.module.css'

export default function Articles() {
  const [active, setActive] = useState('All')

  const featured = articles.find((a) => a.featured) ?? articles[0]
  const rest = articles.filter((a) => a !== featured)

  const filteredRest = useMemo(() => {
    if (active === 'All') return rest
    return rest.filter((a) => a.category.toLowerCase() === active.toLowerCase())
  }, [active, rest])

  const showFeatured = active === 'All' || featured.category.toLowerCase() === active.toLowerCase()

  return (
    <section id="articles" className={styles.section}>
      <div className="container">
        <header className={styles.head}>
          <div className={styles.headCopy}>
            <span className="eyebrow">Field Notes — Issue 014</span>
            <h2 className={styles.title}>
              This week on the
              <span className={styles.italic}> verandah</span>.
            </h2>
          </div>

          <div className={styles.headSide}>
            <p className={styles.headLede}>
              A handful of long reads, two recipe deep-dives, and the tech notes I would have
              wanted to read this week.
            </p>
            <a href="#" className={styles.archiveLink}>
              Read the archive
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </header>

        <div className={styles.filterRow} role="tablist" aria-label="Filter articles">
          {articleCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`${styles.chip} ${active === cat ? styles.chipActive : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {showFeatured && (
            <ArticleCard article={featured} variant="featured" />
          )}

          {filteredRest.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}

          {!showFeatured && filteredRest.length === 0 && (
            <div className={styles.empty}>
              <p>
                Nothing in this corner of the verandah yet — try another category, or
                <a href="#newsletter"> have us send the next ones</a>.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

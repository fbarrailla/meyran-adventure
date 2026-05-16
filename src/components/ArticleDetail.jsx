import { useEffect, useMemo } from 'react'
import { articles } from '../data/content.js'
import ArticleCard from './ArticleCard.jsx'
import styles from './ArticleDetail.module.css'

export default function ArticleDetail({ articleId, onBack }) {
  const article = useMemo(
    () => articles.find((a) => a.id === articleId),
    [articleId]
  )

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [articleId])

  if (!article) {
    return (
      <section className={styles.missing}>
        <div className="container">
          <span className="eyebrow">Lost on the verandah</span>
          <h1 className={styles.missingTitle}>
            We could not find that story.
          </h1>
          <p className={styles.missingCopy}>
            The link may have wandered off — try the archive instead.
          </p>
          <a href="#articles" className="btn btn-dark" onClick={onBack}>
            ← Back to the archive
          </a>
        </div>
      </section>
    )
  }

  const related = articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3)
  const fallbackRelated = articles.filter((a) => a.id !== article.id).slice(0, 3)
  const sidebar = related.length > 0 ? related : fallbackRelated

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <a href="#articles" className={styles.crumbLink} onClick={onBack}>
              ← Field Notes
            </a>
            <span aria-hidden="true" className={styles.crumbDot}>·</span>
            <span className={styles.crumbCategory}>{article.category}</span>
          </nav>

          <h1 className={styles.title}>{article.title}</h1>
          {article.subtitle && (
            <p className={styles.subtitle}>{article.subtitle}</p>
          )}

          <div className={styles.meta}>
            <div className={styles.byline}>
              <span className={styles.avatar} aria-hidden="true">
                {article.author
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)}
              </span>
              <div>
                <div className={styles.authorName}>{article.author}</div>
                <div className={styles.metaLine}>
                  <span>{article.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              className={styles.shareBtn}
              onClick={() => {
                if (navigator.share) {
                  navigator
                    .share({ title: article.title, url: window.location.href })
                    .catch(() => {})
                } else if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href)
                }
              }}
              aria-label="Share article"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
              Share
            </button>
          </div>
        </div>

        <div
          className={`${styles.heroImageWrap} ${
            article.heroLayout === 'poster' ? styles.heroImageWrapPoster : ''
          }`}
        >
          <img
            src={article.image}
            alt=""
            className={`${styles.heroImage} ${
              article.heroLayout === 'poster' ? styles.heroImagePoster : ''
            }`}
          />
          {article.heroLayout !== 'poster' && (
            <div className={styles.heroFade} aria-hidden="true" />
          )}
        </div>
      </header>

      <div className={`container ${styles.layout}`}>
        <div className={styles.prose}>
          {article.body && article.body.length > 0 ? (
            article.body.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={i} className={styles.h2}>
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={i} className={styles.quote}>
                    <p>{block.text}</p>
                    {block.cite && (
                      <cite className={styles.cite}>— {block.cite}</cite>
                    )}
                  </blockquote>
                )
              }
              return (
                <p key={i} className={styles.paragraph}>
                  {block.text}
                </p>
              )
            })
          ) : (
            <p className={styles.paragraph}>{article.excerpt}</p>
          )}

          {article.authorBio && (
            <aside className={styles.authorCard}>
              <div className={styles.authorCardHeader}>
                <span className={styles.avatar} aria-hidden="true">
                  {article.author
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .slice(0, 2)}
                </span>
                <div>
                  <div className={styles.authorCardLabel}>Written by</div>
                  <div className={styles.authorCardName}>{article.author}</div>
                </div>
              </div>
              <p className={styles.authorCardBio}>{article.authorBio}</p>
            </aside>
          )}
        </div>

        <aside className={styles.sidebar} aria-label="More from the verandah">
          <div className={styles.sidebarSticky}>
            <span className="eyebrow">Keep reading</span>
            <h2 className={styles.sidebarTitle}>
              More from the <span className={styles.italic}>verandah</span>
            </h2>
            <ul className={styles.sidebarList}>
              {sidebar.map((a) => (
                <li key={a.id} className={styles.sidebarItem}>
                  <a href={`#/article/${a.id}`} className={styles.sidebarLink}>
                    <span className={styles.sidebarCategory}>{a.category}</span>
                    <span className={styles.sidebarItemTitle}>{a.title}</span>
                    <span className={styles.sidebarMeta}>
                      {a.author} · {a.readTime}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <footer className={styles.endBar}>
        <div className={`container ${styles.endBarInner}`}>
          <a href="#articles" className="btn btn-dark" onClick={onBack}>
            ← Back to the archive
          </a>
          <a href="#newsletter" className="btn btn-primary">
            Get the next issue in your inbox
          </a>
        </div>
      </footer>
    </article>
  )
}

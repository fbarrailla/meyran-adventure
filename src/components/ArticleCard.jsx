import styles from './ArticleCard.module.css'

export default function ArticleCard({ article, variant = 'default' }) {
  const isFeatured = variant === 'featured'
  return (
    <article className={`${styles.card} ${isFeatured ? styles.featured : ''}`}>
      <a href={`#${article.id}`} className={styles.cardLink} aria-label={article.title}>
        <div className={styles.imageWrap}>
          <img src={article.image} alt="" loading="lazy" />
          <span className={styles.category}>{article.category}</span>
          {isFeatured && (
            <span className={styles.featuredBadge}>
              <span className={styles.featuredDot} />
              Featured this week
            </span>
          )}
        </div>

        <div className={styles.body}>
          <h3 className={styles.title}>{article.title}</h3>
          <p className={styles.excerpt}>{article.excerpt}</p>

          <footer className={styles.meta}>
            <span className={styles.author}>{article.author}</span>
            <span className={styles.dot} aria-hidden="true">·</span>
            <span>{article.date}</span>
            <span className={styles.dot} aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </footer>
        </div>
      </a>
    </article>
  )
}

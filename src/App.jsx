import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FeatureGrid from './components/FeatureGrid.jsx'
import Articles from './components/Articles.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'
import ArticleDetail from './components/ArticleDetail.jsx'

function parseArticleId(hash) {
  const match = hash.match(/^#\/article\/([^/?#]+)/)
  return match ? decodeURIComponent(match[1]) : null
}

export default function App() {
  const [articleId, setArticleId] = useState(() => parseArticleId(window.location.hash))

  useEffect(() => {
    const onHashChange = () => setArticleId(parseArticleId(window.location.hash))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const handleBack = (e) => {
    e.preventDefault()
    const target = e.currentTarget.getAttribute('href') || '#articles'
    history.pushState(null, '', target)
    setArticleId(null)
    requestAnimationFrame(() => {
      const id = target.replace(/^#/, '')
      const el = id ? document.getElementById(id) : null
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      else window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }

  return (
    <>
      <a href="#main" className="sr-only-focusable">Skip to content</a>
      <Navbar />
      <main id="main">
        {articleId ? (
          <ArticleDetail articleId={articleId} onBack={handleBack} />
        ) : (
          <>
            <Hero />
            <FeatureGrid />
            <Articles />
            <Newsletter />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

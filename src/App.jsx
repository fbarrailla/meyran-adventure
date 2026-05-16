import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FeatureGrid from './components/FeatureGrid.jsx'
import Articles from './components/Articles.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only-focusable">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <FeatureGrid />
        <Articles />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

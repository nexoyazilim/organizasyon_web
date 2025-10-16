import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Loading from './components/Loading'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Concierge from './pages/Concierge'

function App() {
  const [loading, setLoading] = useState(true)
  const [initialLoad, setInitialLoad] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // İlk yüklemede fontların ve CSS'in tamamen yüklenmesini bekle
    if (initialLoad) {
      Promise.all([
        document.fonts.ready,
        new Promise(resolve => setTimeout(resolve, 500))
      ]).then(() => {
        setLoading(false)
        setInitialLoad(false)
      })
    } else {
      // Sayfa geçişlerinde kısa yükleme
      setLoading(true)
      const timer = setTimeout(() => {
        setLoading(false)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [location.pathname, initialLoad])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="concierge" element={<Concierge />} />
        </Route>
      </Routes>
    </>
  )
}

export default App


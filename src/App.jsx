import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const Home         = lazy(() => import('./pages/Home'))
const About        = lazy(() => import('./pages/About'))
const Services     = lazy(() => import('./pages/Services'))
const ServiceDetail= lazy(() => import('./pages/ServiceDetail'))
const Industries   = lazy(() => import('./pages/Industries'))
const Blog         = lazy(() => import('./pages/Blog'))
const BlogPost     = lazy(() => import('./pages/BlogPost'))
const Careers      = lazy(() => import('./pages/Careers'))
const Contact      = lazy(() => import('./pages/Contact'))

const PageFallback = () => (
  <div className="min-h-screen bg-void flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-cyan/30 border-t-cyan rounded-full animate-spin" />
  </div>
)

function ScrollToTop() {
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-void text-text-primary flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/"                    element={<Home />} />
              <Route path="/about"               element={<About />} />
              <Route path="/services"            element={<Services />} />
              <Route path="/services/:slug"      element={<ServiceDetail />} />
              <Route path="/industries"          element={<Industries />} />
              <Route path="/blog"                element={<Blog />} />
              <Route path="/blog/:slug"          element={<BlogPost />} />
              <Route path="/careers"             element={<Careers />} />
              <Route path="/contact"             element={<Contact />} />
              <Route path="*"                    element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

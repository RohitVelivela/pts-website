import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { useScrollReveal, staggerContainer, fadeUp } from '../hooks/useScrollAnimation'
import SectionLabel from '../components/ui/SectionLabel'
import CTABanner from '../components/sections/home/CTABanner'
import { blogPosts } from '../data/content'
import { images } from '../data/images'

const categories = ['All', 'BIM Services', 'Analysis Services', 'IT Services', 'Plant Engineering', 'Project Management']

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const { ref, animate } = useScrollReveal(0.05)

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ minHeight: '55vh' }}>
        {/* Cover photo */}
        <div className="absolute inset-0">
          <img src={images.coverBlog} alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.84) 0%, rgba(20,20,20,0.76) 50%, rgba(10,10,10,0.82) 100%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 flex items-center" style={{ minHeight: '43vh' }}>
          <div>
            <SectionLabel className="mb-5 inline-flex" style={{ color: '#FFFFFF', background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.35)' }}>Insights</SectionLabel>
            <h1 className="font-display font-bold text-white mt-4 mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Engineering Insights &
              <br /><span style={{ background: 'linear-gradient(135deg, #F59E0B, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Technical Resources</span>
            </h1>
            <p className="font-body text-xl max-w-2xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Expert perspectives from the PTS engineering and IT teams.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '60px' }}>
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#F7F8FA" />
          </svg>
        </div>
      </section>

      {/* Blog listing */}
      <section ref={ref} className="py-24 bg-bg-section">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand text-white shadow-sm'
                    : 'border border-border-light text-text-muted hover:border-brand/30 hover:text-brand bg-bg-card'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={animate}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {filtered.map((post, i) => {
              const accent = i % 3 === 0 ? '#E8231A' : i % 3 === 1 ? '#1B8C3C' : '#F59E0B'
              return (
              <motion.div key={post.id} variants={fadeUp}>
                <Link to={`/blog/${post.slug}`} className="block h-full group">
                  <div className="card p-0 h-full flex flex-col overflow-hidden">
                    {post.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(17,24,39,0.45) 0%, transparent 55%)' }} />
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold font-body text-white" style={{ background: `${accent}E6` }}>
                          {post.category}
                        </span>
                      </div>
                    )}
                    <div className="h-0.5 w-full" style={{ background: accent }} />
                    <div className="p-6 flex flex-col flex-1">
                      <div className="w-0 h-0.5 rounded-full group-hover:w-8 transition-all duration-300 mb-3" style={{ background: accent }} />
                      <h3 className="font-display font-bold text-text-heading text-xl mb-3 leading-snug group-hover:text-brand transition-colors duration-200 flex-1">{post.title}</h3>
                      <p className="text-text-muted font-body text-sm leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-text-muted text-xs font-body mt-auto pt-4 border-t border-border-light">
                        <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                        <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )})}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-text-muted font-body">No articles in this category yet. Check back soon.</div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  )
}

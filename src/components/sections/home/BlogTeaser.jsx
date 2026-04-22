import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { useScrollReveal, staggerContainer, fadeUp } from '../../../hooks/useScrollAnimation'
import SectionLabel from '../../ui/SectionLabel'
import { blogPosts } from '../../../data/content'

const accentColors = ['#E8231A', '#1B8C3C', '#F59E0B']

export default function BlogTeaser() {
  const { ref, animate } = useScrollReveal()

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-bg-page">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={animate}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4"
        >
          <div>
            <motion.div variants={fadeUp} className="mb-3">
              <SectionLabel>Insights</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display font-bold text-text-heading mt-1" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              From the Engineering Desk
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link to="/blog" className="btn-outline whitespace-nowrap">
              All Articles <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={animate}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {blogPosts.map((post, i) => (
            <motion.div key={post.id} variants={fadeUp}>
              <Link to={`/blog/${post.slug}`} className="block h-full group">
                <div className="card h-full flex flex-col overflow-hidden p-0">
                  {/* Blog image */}
                  {post.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(17,24,39,0.5) 0%, transparent 55%)' }} />
                      {/* Category badge on image */}
                      <span
                        className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold font-body"
                        style={{ background: `${accentColors[i]}E6`, color: '#fff' }}
                      >
                        {post.category}
                      </span>
                    </div>
                  )}

                  {/* Colored accent line */}
                  <div className="h-0.5 w-full" style={{ background: accentColors[i] }} />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Title hover accent */}
                    <div className="w-0 h-0.5 rounded-full group-hover:w-8 transition-all duration-300 mb-3" style={{ background: accentColors[i] }} />

                    <h3 className="font-display font-bold text-text-heading text-lg mb-3 leading-snug group-hover:text-brand transition-colors duration-200 flex-1">
                      {post.title}
                    </h3>
                    <p className="text-text-muted font-body text-sm leading-relaxed mb-5 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-light">
                      <div className="flex items-center gap-4 text-text-muted text-xs font-body">
                        <span className="flex items-center gap-1.5"><Calendar size={11} /> {post.date}</span>
                        <span className="flex items-center gap-1.5"><Clock size={11} /> {post.readTime}</span>
                      </div>
                      <ArrowRight size={14} className="text-text-muted group-hover:text-brand transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

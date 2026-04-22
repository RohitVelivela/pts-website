import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useScrollReveal, staggerContainer, fadeUp, fadeLeft } from '../../../hooks/useScrollAnimation'
import SectionLabel from '../../ui/SectionLabel'
import { industries } from '../../../data/industries'
import { industryImages } from '../../../data/images'

export default function IndustriesSection() {
  const { ref, animate } = useScrollReveal(0.05)

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 overflow-hidden"
      style={{ background: '#F7F8FA' }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* ── Header row ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={animate}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <motion.div variants={fadeLeft} className="mb-4">
              <SectionLabel className="border-green/30 text-green/80" style={{ background: 'rgba(27,140,60,0.1)', borderColor: 'rgba(27,140,60,0.3)', color: 'rgba(27,140,60,0.9)' }}>
                Industries We Serve
              </SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeLeft}
              className="font-display font-bold text-text-heading"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}
            >
              Built for the World's Most
              <br />
              <span className="text-grad-brand">Demanding</span> Industrial Sectors
            </motion.h2>
          </div>
          <motion.div variants={fadeLeft} className="lg:text-right">
            <p className="font-body text-base leading-relaxed mb-5 max-w-sm text-text-muted">
              16+ years of sector-specific expertise across the world's most critical industrial environments.
            </p>
            <Link to="/industries" className="inline-flex items-center gap-2 font-display font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:gap-3" style={{ color: '#E8231A' }}>
              View All Industries <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Industry Cards Grid ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={animate}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          {industries.map((ind, i) => {
            const img = industryImages[ind.name]
            return (
              <motion.div
                key={ind.id}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                style={{ height: i === 0 || i === 5 ? '220px' : '180px' }}
              >
                <Link to="/industries" className="block w-full h-full">
                  {/* Background image */}
                  {img ? (
                    <img
                      src={img}
                      alt={ind.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${ind.accentColor}33, #111)` }} />
                  )}

                  {/* Dark overlay */}
                  <div className="absolute inset-0 transition-opacity duration-400"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.15) 100%)' }} />

                  {/* Accent glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: `linear-gradient(to top, ${ind.accentColor}33 0%, transparent 60%)` }} />

                  {/* Accent bottom strip */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-1"
                    style={{ background: ind.accentColor }} />

                  {/* Arrow on hover */}
                  <div className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
                    style={{ background: ind.accentColor }}>
                    <ArrowUpRight size={11} className="text-white" />
                  </div>

                  {/* Industry name */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="font-display font-bold text-white text-sm leading-tight"
                      style={{ textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}>
                      {ind.name}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={animate === 'visible' ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 pt-8"
          style={{ borderTop: '1px solid #E5E9F0' }}
        >
          <div className="flex flex-wrap items-center gap-3">
            {['Oil & Gas', 'Power Plants', 'Pharmaceutical', 'Refineries'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full font-body text-xs"
                style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid #E5E9F0', color: '#6B7280' }}>
                {tag}
              </span>
            ))}
            <span className="font-body text-xs text-text-muted">+6 more sectors</span>
          </div>
          <Link to="/industries" className="btn-primary flex-shrink-0">
            Explore All Industries <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

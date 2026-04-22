import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useScrollReveal, staggerContainer, fadeUp } from '../hooks/useScrollAnimation'
import SectionLabel from '../components/ui/SectionLabel'
import CTABanner from '../components/sections/home/CTABanner'
import { industries } from '../data/industries'
import { industryImages, images } from '../data/images'

export default function Industries() {
  const { ref, animate } = useScrollReveal(0.05)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ minHeight: '55vh' }}>
        {/* Cover photo */}
        <div className="absolute inset-0">
          <img src={images.coverIndustries} alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.84) 0%, rgba(20,20,20,0.76) 55%, rgba(10,10,10,0.82) 100%)' }} />
          {/* Subtle grid */}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 flex items-center" style={{ minHeight: '43vh' }}>
          <div>
            <SectionLabel className="mb-5 inline-flex" style={{ color: '#FFFFFF', background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.35)' }}>Industries</SectionLabel>
            <h1 className="font-display font-bold text-white mt-4 mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Engineering Solutions for
              <br /><span style={{ background: 'linear-gradient(135deg, #F59E0B, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Critical Industries</span>
            </h1>
            <p className="font-body text-xl max-w-2xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
              16+ years of sector-specific expertise across the world's most demanding industrial environments.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '60px' }}>
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#F7F8FA" />
          </svg>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section ref={ref} className="py-24 bg-bg-section">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={animate}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {industries.map((ind, i) => {
              const img = industryImages[ind.name]
              return (
                <motion.div
                  key={ind.id}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer"
                  style={{ height: '340px' }}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  {/* Full-bleed background image */}
                  {img ? (
                    <img
                      src={img}
                      alt={ind.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${ind.accentColor}33, #111827)` }} />
                  )}

                  {/* Gradient overlay — dark at bottom, lighter on hover transition */}
                  <div
                    className="absolute inset-0 transition-all duration-500"
                    style={{ background: 'linear-gradient(to top, rgba(10,12,16,0.92) 0%, rgba(10,12,16,0.55) 50%, rgba(10,12,16,0.25) 100%)' }}
                  />

                  {/* Accent color tint strip at bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
                    style={{ background: `linear-gradient(90deg, ${ind.accentColor}, ${ind.accentColor}99)` }}
                  />

                  {/* Top-left number badge */}
                  <div
                    className="absolute top-5 left-5 w-11 h-11 rounded-xl flex items-center justify-center font-display font-bold text-sm text-white shadow-lg"
                    style={{ background: `${ind.accentColor}CC`, backdropFilter: 'blur(4px)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Content — sits at bottom, slides up on hover */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    {/* Service chips — visible on hover */}
                    <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400">
                      {ind.services.slice(0, 3).map(s => (
                        <span
                          key={s}
                          className="px-3 py-1 rounded-full text-xs font-body font-medium text-white"
                          style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}
                        >
                          {s}
                        </span>
                      ))}
                      {ind.services.length > 3 && (
                        <span className="px-3 py-1 rounded-full text-xs font-body font-medium text-white" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                          +{ind.services.length - 3} more
                        </span>
                      )}
                    </div>

                    <h2
                      className="font-display font-bold text-white mb-2 leading-tight"
                      style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
                    >
                      {ind.name}
                    </h2>
                    <p
                      className="font-body text-sm leading-relaxed mb-4 max-w-md opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400"
                      style={{ color: 'rgba(255,255,255,0.75)', transitionDelay: '50ms' }}
                    >
                      {ind.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 font-display font-bold text-sm uppercase tracking-wider transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:gap-3"
                        style={{ color: ind.accentColor }}
                        onClick={e => e.stopPropagation()}
                      >
                        Get in Touch <ArrowRight size={14} />
                      </Link>

                      {/* Always-visible accent tag */}
                      <span
                        className="px-3 py-1.5 rounded-full text-xs font-display font-bold uppercase tracking-wider text-white group-hover:opacity-0 transition-opacity duration-200"
                        style={{ background: `${ind.accentColor}CC`, backdropFilter: 'blur(6px)' }}
                      >
                        {ind.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

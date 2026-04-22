import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal, staggerContainer, fadeUp } from '../../../hooks/useScrollAnimation'
import SectionLabel from '../../ui/SectionLabel'
import { services } from '../../../data/services'
import { serviceImages } from '../../../data/images'

export default function ServicesGrid() {
  const { ref, animate } = useScrollReveal()
  const [activeSlug, setActiveSlug] = useState(null)

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-bg-page">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" animate={animate} className="text-center mb-16">
          <motion.div variants={fadeUp} className="flex justify-center mb-5">
            <SectionLabel>Our Services</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-display font-bold text-text-heading mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            One Stop Solution for All Your
            <span className="text-grad-brand"> Engineering Needs</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-text-body font-body text-lg max-w-2xl mx-auto">
            From conceptual design to as-built documentation — precision delivered across every discipline.
          </motion.p>
        </motion.div>

        {/* Expanding accordion strip */}
        <motion.div variants={fadeUp} initial="hidden" animate={animate} style={{ paddingLeft: '6rem' }}>
          <div
            className="flex gap-1.5 overflow-hidden rounded-xl"
            style={{ height: 'clamp(320px, 36vw, 440px)' }}
            onMouseLeave={() => setActiveSlug(null)}
          >
            {services.map((s) => {
              const img = serviceImages[s.slug]
              const isActive = activeSlug === s.slug

              return (
                <div
                  key={s.slug}
                  className="relative overflow-hidden flex-shrink-0 cursor-pointer"
                  style={{
                    width: isActive ? 'clamp(300px, 40%, 520px)' : 'clamp(68px, 7vw, 115px)',
                    transition: 'width 0.22s ease-out',
                  }}
                  onMouseEnter={() => setActiveSlug(s.slug)}
                >
                  <Link to={`/services/${s.slug}`} className="block h-full">

                    {/* Background image */}
                    {img ? (
                      <img
                        src={img}
                        alt={s.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{
                          transform: isActive ? 'scale(1.07)' : 'scale(1)',
                          transition: 'transform 0.25s ease-out',
                        }}
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gray-800" />
                    )}

                    {/* Dark vignette overlay when active */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(to right, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)',
                        opacity: isActive ? 1 : 0,
                        transition: 'opacity 0.18s ease',
                      }}
                    />

                    {/* Active info panel */}
                    <div
                      className="absolute bottom-5 left-4"
                      style={{
                        maxWidth: '260px',
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'opacity 0.2s ease 0.08s, transform 0.2s ease 0.08s',
                        pointerEvents: isActive ? 'auto' : 'none',
                      }}
                    >
                      <div
                        className="rounded-xl p-4"
                        style={{
                          background: 'rgba(12,12,12,0.82)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.07)',
                        }}
                      >
                        <h3
                          className="text-white font-display font-bold leading-tight mb-2"
                          style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}
                        >
                          {s.title}
                        </h3>
                        <p
                          className="text-gray-300 font-body leading-snug mb-3"
                          style={{ fontSize: 'clamp(10px, 0.82vw, 12px)' }}
                        >
                          {s.shortDesc}
                        </p>
                        <ul className="space-y-1">
                          {s.subServices?.slice(0, 5).map((sub) => (
                            <li
                              key={sub}
                              className="flex items-center gap-1.5 text-gray-200 font-body"
                              style={{ fontSize: 'clamp(9px, 0.78vw, 11px)' }}
                            >
                              <span style={{ color: '#E8231A', fontSize: '8px' }}>▶</span>
                              {sub}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Label bar — shown when not active */}
                    <div
                      className="absolute bottom-0 left-0 right-0 px-2 py-3 pointer-events-none"
                      style={{
                        background: 'rgba(50,50,50,0.88)',
                        opacity: isActive ? 0 : 1,
                        transition: 'opacity 0.15s ease',
                      }}
                    >
                      <p
                        className="text-white font-body font-semibold text-center leading-tight whitespace-nowrap overflow-hidden text-ellipsis"
                        style={{ fontSize: 'clamp(9px, 0.82vw, 12px)' }}
                      >
                        {s.title}
                      </p>
                    </div>

                  </Link>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div variants={fadeUp} initial="hidden" animate={animate} className="text-center mt-12">
          <Link to="/services" className="btn-outline">
            View All Services <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

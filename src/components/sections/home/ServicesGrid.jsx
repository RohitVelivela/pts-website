import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { useScrollReveal, staggerContainer, fadeUp } from '../../../hooks/useScrollAnimation'
import SectionLabel from '../../ui/SectionLabel'
import { services } from '../../../data/services'
import { serviceImages } from '../../../data/images'

export default function ServicesGrid() {
  const { ref, animate } = useScrollReveal()
  const [activeSlug, setActiveSlug] = useState(null)
  const cardRefs = useRef({})

  const focusCard = (slug) => {
    setActiveSlug(slug)
    cardRefs.current[slug]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }

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
            {' '}
            <span className="text-grad-brand">Engineering Needs</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-text-body font-body text-lg max-w-2xl mx-auto">
            From conceptual design to as-built documentation — precision delivered across every discipline.
          </motion.p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate={animate} className="grid gap-4 lg:hidden">
          {services.map((s) => {
            const img = serviceImages[s.slug]

            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="overflow-hidden rounded-[22px] border border-border-light bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
              >
                <div className="flex min-h-[132px] items-stretch">
                  <div className="relative w-[108px] flex-shrink-0 bg-slate-200">
                    {img ? (
                      <img src={img} alt={s.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                    ) : (
                      <div className="absolute inset-0 bg-slate-300" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/5 to-transparent" />
                  </div>

                  <div className="flex flex-1 items-center justify-between gap-3 p-4">
                    <div className="min-w-0">
                      <div className="mb-2 flex items-center gap-2">
                        <div
                          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl"
                          style={{ background: `${s.color}12`, border: `1px solid ${s.color}24` }}
                        >
                          <s.icon size={18} style={{ color: s.color }} />
                        </div>
                        <h3 className="font-display text-lg font-bold leading-tight text-text-heading">
                          {s.title}
                        </h3>
                      </div>

                      <p className="line-clamp-2 font-body text-sm leading-6 text-text-body">
                        {s.shortDesc}
                      </p>
                    </div>

                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ background: `${s.color}10`, color: s.color }}
                    >
                      <ChevronRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </motion.div>

        {/* Expanding accordion strip */}
        <motion.div variants={fadeUp} initial="hidden" animate={animate} className="hidden lg:block lg:overflow-visible lg:pb-0">
          <div
            className="mx-auto flex w-max gap-1.5 rounded-xl px-4 lg:px-0"
            style={{ height: 'clamp(320px, 36vw, 440px)', touchAction: 'pan-x' }}
          >
            {services.map((s) => {
              const img = serviceImages[s.slug]
              const isActive = activeSlug === s.slug

              return (
                <div
                  key={s.slug}
                  ref={(node) => {
                    cardRefs.current[s.slug] = node
                  }}
                  className="relative snap-center overflow-hidden flex-shrink-0 cursor-pointer"
                  style={{
                    width: isActive ? 'clamp(220px, 58vw, 520px)' : 'clamp(72px, 16vw, 115px)',
                    transition: 'width 0.22s ease-out',
                  }}
                >
                  <Link
                    to={`/services/${s.slug}`}
                    className="block h-full"
                    onMouseEnter={() => focusCard(s.slug)}
                    onFocus={() => focusCard(s.slug)}
                  >

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
                              key={sub.title}
                              className="flex items-center gap-1.5 text-gray-200 font-body"
                              style={{ fontSize: 'clamp(9px, 0.78vw, 11px)' }}
                            >
                              <span style={{ color: '#E8231A', fontSize: '8px' }}>▶</span>
                              {sub.title}
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

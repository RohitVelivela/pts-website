import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ChevronDown, Building2 } from 'lucide-react'
import { useScrollReveal, staggerContainer, fadeUp } from '../hooks/useScrollAnimation'
import CTABanner from '../components/sections/home/CTABanner'
import { services } from '../data/services'
import { serviceImages, images } from '../data/images'

const NUM = ['01', '02', '03', '04', '05', '06', '07', '08', '09']

function SubServiceCard({ sub, color, serviceSlug }) {
  return (
    <Link to={`/services/${serviceSlug}/${sub.slug}`} style={{ textDecoration: 'none' }}>
      <motion.div
        whileHover={{ background: `${color}18`, borderColor: `${color}45`, y: -2 }}
        initial={{ background: `${color}07`, borderColor: `${color}1C` }}
        transition={{ duration: 0.18 }}
        style={{ border: `1px solid ${color}1C`, borderRadius: '12px', padding: '14px', cursor: 'pointer' }}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <CheckCircle2 size={14} style={{ color, flexShrink: 0 }} />
            <span className="font-heading font-bold text-text-heading uppercase tracking-wide" style={{ fontSize: '1rem', letterSpacing: '0.04em' }}>{sub.title}</span>
          </div>
          <ArrowRight size={12} style={{ color, flexShrink: 0, opacity: 0.6 }} />
        </div>
      </motion.div>
    </Link>
  )
}

export default function Services() {
  const [activeTab, setActiveTab] = useState(null)
  const navigate = useNavigate()
  const { ref, animate } = useScrollReveal(0.05)
  const active = services.find(s => s.slug === activeTab)

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '62vh' }}>
        <div className="absolute inset-0">
          <img src={images.heroBg} alt="" className="w-full h-full object-cover" loading="eager" />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(105deg, rgba(6,13,26,0.97) 0%, rgba(6,13,26,0.90) 50%, rgba(6,13,26,0.72) 100%)' }}
          />
        </div>

        <div
          className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 flex items-center"
          style={{ minHeight: '62vh', paddingTop: '7rem', paddingBottom: '5rem' }}
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: '#E8231A' }} />
              <span className="font-body text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.45)' }}>
                What We Do
              </span>
            </div>

            <h1
              className="font-heading font-bold text-white mb-5 uppercase"
              style={{ fontSize: 'clamp(3.4rem, 6.5vw, 6rem)', lineHeight: 0.95, letterSpacing: '0.02em' }}
            >
              End-to-End<br />
              <span style={{ background: 'linear-gradient(135deg,#F59E0B,#FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Engineering Excellence
              </span>
            </h1>

            <p className="font-body text-lg max-w-xl mb-10" style={{ color: 'rgba(255,255,255,0.52)', lineHeight: 1.75 }}>
              Nine service categories. One trusted partner. Complete engineering solutions from concept to commissioning.
            </p>

            <div className="flex flex-wrap gap-10">
              {[['09', 'Service Categories'], ['16+', 'Years Experience'], ['500+', 'Projects Delivered']].map(([val, lbl]) => (
                <div key={lbl}>
                  <p className="font-display font-bold text-white" style={{ fontSize: '2.1rem', lineHeight: 1 }}>{val}</p>
                  <p className="font-body text-xs mt-1.5" style={{ color: 'rgba(255,255,255,0.38)', letterSpacing: '0.07em' }}>{lbl}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '56px' }}>
          <svg viewBox="0 0 1440 56" fill="none" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 56 L0 28 Q360 0 720 28 Q1080 56 1440 28 L1440 56 Z" fill="#EEF3FA" />
          </svg>
        </div>
      </section>

      {/* ── Service Cards ── */}
      <section ref={ref} className="py-12 lg:py-20 bg-bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={animate}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {services.map((s, i) => {
              const img = serviceImages[s.slug]
              const isActive = activeTab === s.slug

              return (
                <motion.div key={s.slug} variants={fadeUp} className="h-full">
                  <div
                    className="h-full flex flex-col cursor-pointer"
                    role="button"
                    tabIndex={0}
                    style={{
                      background: '#fff',
                      borderRadius: '20px',
                      border: isActive ? `2px solid ${s.color}` : '1px solid #E5E9F0',
                      overflow: 'hidden',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.2s',
                    }}
                    onMouseEnter={e => { if (!isActive) { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(0,0,0,0.10)' } }}
                    onMouseLeave={e => { if (!isActive) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' } }}
                    onClick={() => navigate(`/services/${s.slug}`)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        navigate(`/services/${s.slug}`)
                      }
                    }}
                  >
                    {/* Color accent bar */}
                    <div style={{ height: '3px', background: s.color, flexShrink: 0 }} />

                    {/* Image */}
                    {img && (
                      <div style={{ height: '158px', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                        <img src={img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                        <span
                          className="absolute top-3 right-3 font-display font-bold select-none"
                          style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.22)', lineHeight: 1, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                        >
                          {NUM[i]}
                        </span>
                      </div>
                    )}

                    {/* Body */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${s.color}12`, border: `1px solid ${s.color}28` }}
                        >
                          <s.icon size={20} style={{ color: s.color }} />
                        </div>
                        <h3
                          className="font-heading font-bold text-text-heading uppercase tracking-wide"
                          style={{ fontSize: '1.35rem', lineHeight: 1.1, paddingTop: '2px', letterSpacing: '0.04em' }}
                        >
                          {s.title}
                        </h3>
                      </div>

                      <ul className="space-y-1.5 mb-5 flex-1">
                        {s.subServices.slice(0, 3).map(sub => (
                          <li key={sub.title} className="flex items-center gap-2 font-body text-xs" style={{ color: '#4B5563' }}>
                            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                            {sub.title}
                          </li>
                        ))}
                        {s.subServices.length > 3 && (
                          <li className="font-body text-xs pl-3.5 text-text-muted">+{s.subServices.length - 3} more</li>
                        )}
                      </ul>

                      <div className="flex items-center justify-between pt-4 border-t border-border-light">
                        <Link
                          to={`/services/${s.slug}`}
                          className="font-body text-xs font-semibold inline-flex items-center gap-1.5 transition-all duration-200"
                          style={{ color: s.color }}
                          onClick={e => e.stopPropagation()}
                          onMouseEnter={e => { e.currentTarget.style.gap = '8px' }}
                          onMouseLeave={e => { e.currentTarget.style.gap = '6px' }}
                        >
                          Full Details <ArrowRight size={12} />
                        </Link>
                        <button
                          type="button"
                          aria-label={`Toggle ${s.title} quick details`}
                          className="inline-flex items-center justify-center"
                          onClick={(e) => {
                            e.stopPropagation()
                            setActiveTab(isActive ? null : s.slug)
                          }}
                        >
                          <ChevronDown
                            size={16}
                            style={{
                              color: s.color,
                              transition: 'transform 0.3s ease',
                              transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                            }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* ── Expand Panel ── */}
          <AnimatePresence>
            {active && (
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 20 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div style={{ background: '#fff', borderRadius: '22px', border: `1px solid ${active.color}30`, overflow: 'hidden' }}>
                  <div style={{ height: '4px', background: `linear-gradient(90deg, ${active.color}, ${active.color}99)` }} />
                  <div className="p-8 lg:p-10">
                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">

                      {/* Left: overview + sub-services */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ background: `${active.color}12`, border: `1px solid ${active.color}28` }}>
                            <active.icon size={26} style={{ color: active.color }} />
                          </div>
                          <div>
                            <p className="font-body text-xs uppercase tracking-widest text-text-muted mb-0.5">Service Overview</p>
                            <h3 className="font-heading font-bold text-text-heading uppercase tracking-wide" style={{ fontSize: '1.9rem', letterSpacing: '0.04em' }}>{active.title}</h3>
                          </div>
                        </div>

                        <p className="font-body text-text-body leading-relaxed mb-8" style={{ fontSize: '1.02rem', lineHeight: 1.8 }}>
                          {active.description}
                        </p>

                        <p className="font-body text-xs uppercase tracking-widest text-text-muted mb-3">Sub-Services</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {active.subServices.map(sub => (
                            <SubServiceCard key={sub.title} sub={sub} color={active.color} serviceSlug={active.slug} />
                          ))}
                        </div>
                      </div>

                      {/* Right: industries + CTA */}
                      <div className="space-y-6">
                        <div>
                          <p className="font-body text-xs uppercase tracking-widest text-text-muted mb-3 flex items-center gap-1.5">
                            <Building2 size={11} /> Industries Served
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {active.industries.map(ind => (
                              <span
                                key={ind}
                                className="px-2.5 py-1 rounded-md text-xs font-body font-semibold"
                                style={{ background: 'rgba(27,140,60,0.07)', border: '1px solid rgba(27,140,60,0.16)', color: '#1B8C3C' }}
                              >
                                {ind}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div
                          style={{ background: 'linear-gradient(145deg,#0F2040,#1E3A5F)', borderRadius: '16px', padding: '1.25rem', border: '1px solid rgba(232,35,26,0.2)' }}
                        >
                          <div className="brand-line mb-3" />
                          <p className="font-display font-bold text-white text-lg mb-1 leading-snug">Ready to Start?</p>
                          <p className="font-body text-xs mb-4" style={{ color: 'rgba(255,255,255,0.48)' }}>
                            Get the full picture on {active.title}.
                          </p>
                          <Link
                            to={`/services/${active.slug}`}
                            className="btn-primary w-full justify-center"
                            style={{ fontSize: '12px', padding: '10px 16px' }}
                          >
                            Full Service Page <ArrowRight size={13} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

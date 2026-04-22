import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useScrollReveal, staggerContainer, fadeUp } from '../hooks/useScrollAnimation'
import SectionLabel from '../components/ui/SectionLabel'
import CTABanner from '../components/sections/home/CTABanner'
import { services } from '../data/services'
import { serviceImages } from '../data/images'

export default function Services() {
  const [activeTab, setActiveTab] = useState(null)
  const { ref, animate } = useScrollReveal(0.05)
  const active = services.find(s => s.slug === activeTab)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A0A0A 0%, #111827 45%, #0D0D0D 100%)', minHeight: '50vh' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 flex items-center" style={{ minHeight: '38vh' }}>
          <div>
            <SectionLabel className="mb-5 inline-flex">What We Do</SectionLabel>
            <h1 className="font-display font-bold text-white mt-4 mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              End-to-End <span style={{ background: 'linear-gradient(135deg, #F59E0B, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Engineering Excellence</span>
            </h1>
            <p className="font-body text-xl max-w-2xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Nine service categories. One trusted partner. Complete engineering solutions from concept to commissioning.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '60px' }}>
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#F7F8FA" />
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-24 bg-bg-section">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={animate}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s, i) => {
              const img = serviceImages[s.slug]
              return (
                <motion.div key={s.slug} variants={fadeUp}>
                  <div
                    className={`card cursor-pointer overflow-hidden p-0 transition-all duration-200 ${activeTab === s.slug ? 'ring-2 ring-brand' : ''}`}
                    onClick={() => setActiveTab(activeTab === s.slug ? null : s.slug)}
                  >
                    {img && (
                      <div className="relative h-40 overflow-hidden">
                        <img src={img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(17,24,39,0.5) 0%, transparent 60%)' }} />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="font-display font-bold text-text-heading text-xl mb-2">{s.title}</h3>
                      <p className="text-text-muted font-body text-sm mb-4 line-clamp-2">{s.shortDesc}</p>
                      <ul className="space-y-1 mb-5">
                        {s.subServices.slice(0, 3).map(sub => (
                          <li key={sub} className="flex items-center gap-2 text-text-muted text-xs font-body">
                            <div className="w-1 h-1 rounded-full bg-brand/40" />
                            {sub}
                          </li>
                        ))}
                        {s.subServices.length > 3 && (
                          <li className="text-text-muted text-xs font-body pl-3">+{s.subServices.length - 3} more</li>
                        )}
                      </ul>
                      <Link
                        to={`/services/${s.slug}`}
                        className="flex items-center gap-2 text-brand text-sm font-semibold font-body hover:gap-3 transition-all"
                        onClick={e => e.stopPropagation()}
                      >
                        Full Details <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Tab detail panel */}
          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="card p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 rounded-xl" style={{ background: `${active.color}10`, border: `1px solid ${active.color}22` }}>
                          <active.icon size={32} style={{ color: active.color }} />
                        </div>
                        <h3 className="font-display font-bold text-text-heading text-2xl">{active.title}</h3>
                      </div>
                      <p className="text-text-body font-body leading-relaxed mb-6">{active.description}</p>
                      <h4 className="font-display font-bold text-text-heading text-lg mb-3">Sub-Services</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {active.subServices.map(sub => (
                          <div key={sub} className="flex items-center gap-2 text-text-body text-sm font-body">
                            <CheckCircle2 size={14} style={{ color: active.color }} />
                            {sub}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="mb-6">
                        <h4 className="font-display font-bold text-text-heading text-lg mb-3">Tools & Software</h4>
                        <div className="flex flex-wrap gap-2">
                          {active.tools.map(t => (
                            <span key={t} className="px-3 py-1 rounded-full text-xs font-body" style={{ background: 'rgba(232,35,26,0.07)', border: '1px solid rgba(232,35,26,0.18)', color: '#E8231A' }}>{t}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-text-heading text-lg mb-3">Industries</h4>
                        <div className="flex flex-wrap gap-2">
                          {active.industries.map(ind => (
                            <span key={ind} className="px-3 py-1 rounded-full text-xs font-body" style={{ background: 'rgba(27,140,60,0.07)', border: '1px solid rgba(27,140,60,0.18)', color: '#1B8C3C' }}>{ind}</span>
                          ))}
                        </div>
                      </div>
                      <Link to={`/services/${active.slug}`} className="btn-primary mt-6 inline-flex text-xs">
                        Full Service Details <ArrowRight size={14} />
                      </Link>
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

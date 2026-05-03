import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react'
import { services } from '../data/services'
import { serviceImages } from '../data/images'
import CTABanner from '../components/sections/home/CTABanner'

export default function SubServiceDetail() {
  const { slug, subSlug } = useParams()
  const service = services.find(s => s.slug === slug)
  if (!service) return <Navigate to="/services" replace />

  const sub = service.subServices.find(s => s.slug === subSlug)
  if (!sub) return <Navigate to={`/services/${slug}`} replace />

  const heroImg = sub.image || serviceImages[slug]
  const siblings = service.subServices.filter(s => s.slug !== subSlug)

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '64vh' }}>
        <div className="absolute inset-0">
          <img src={heroImg} alt={sub.title} className="w-full h-full object-cover" loading="eager" />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(105deg, rgba(6,13,26,0.3) 0%, rgba(6,13,26,0.2) 50%, rgba(6,13,26,0.1) 100%)' }}
          />
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize: '60px 60px' }}
          />
        </div>

        <div
          className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 flex flex-col justify-center"
          style={{ minHeight: '56vh', paddingTop: '7rem', paddingBottom: '4rem' }}
        >
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-8 flex-wrap"
          >
            <Link
              to="/services"
              className="font-body text-xs transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.35)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
            >
              Services
            </Link>
            <ChevronRight size={12} style={{ color: 'rgba(255,255,255,0.2)' }} />
            <Link
              to={`/services/${slug}`}
              className="font-body text-xs transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.35)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
            >
              {service.title}
            </Link>
            <ChevronRight size={12} style={{ color: 'rgba(255,255,255,0.2)' }} />
            <span className="font-body text-xs font-semibold" style={{ color: service.color }}>{sub.title}</span>
          </motion.div>

          <div style={{ maxWidth: '760px' }}>
            {/* Service badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-body font-semibold tracking-widest uppercase"
                style={{ background: `${service.color}1E`, border: `1px solid ${service.color}55`, color: service.color }}
              >
                <service.icon size={11} /> {service.title}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-bold text-white mb-6 uppercase"
              style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', lineHeight: 0.92, letterSpacing: '0.04em' }}
            >
              {sub.title}
            </motion.h1>

            {/* Accent */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ transformOrigin: 'left' }}
              className="flex items-center gap-2.5"
            >
              <div className="h-px" style={{ width: '56px', background: `linear-gradient(90deg, ${service.color}, transparent)` }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: service.color }} />
            </motion.div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '56px' }}>
          <svg viewBox="0 0 1440 56" fill="none" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 56 L0 28 Q360 0 720 28 Q1080 56 1440 28 L1440 56 Z" fill="#EEF3FA" />
          </svg>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-14 bg-bg-section">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">

            {/* Left column */}
            <div className="space-y-7">

              {/* Back link */}
              <Link
                to={`/services/${slug}`}
                className="inline-flex items-center gap-2 font-body text-sm transition-all duration-200"
                style={{ color: '#9CA3AF' }}
                onMouseEnter={e => { e.currentTarget.style.color = service.color; e.currentTarget.style.gap = '10px' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#9CA3AF'; e.currentTarget.style.gap = '8px' }}
              >
                <ArrowLeft size={14} /> Back to {service.title}
              </Link>

              {/* Description card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  border: '1px solid #E5E9F0',
                  borderLeft: `5px solid ${service.color}`,
                  overflow: 'hidden',
                }}
              >
                <div className="p-8 lg:p-10">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${service.color}12`, border: `1px solid ${service.color}28` }}
                    >
                      <service.icon size={22} style={{ color: service.color }} />
                    </div>
                    <div>
                      <p className="font-body text-xs uppercase tracking-widest text-text-muted mb-3">Overview</p>
                      <p className="font-body text-text-body" style={{ fontSize: '1.08rem', lineHeight: 1.85 }}>
                        {sub.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bullets — What's included */}
              {sub.bullets && sub.bullets.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ background: '#fff', borderRadius: '20px', border: '1px solid #E5E9F0', overflow: 'hidden' }}
                >
                  <div style={{ height: '3px', background: `linear-gradient(90deg, ${service.color}, ${service.color}66)` }} />
                  <div className="p-8 lg:p-10">
                    <h2 className="font-heading font-bold text-text-heading uppercase tracking-wide mb-8" style={{ fontSize: '2rem', letterSpacing: '0.05em' }}>What's Included</h2>
                    <ul className="space-y-5">
                      {sub.bullets.map((bullet, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -16 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="flex items-start gap-4"
                        >
                          <div
                            className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ background: `${service.color}14`, border: `1px solid ${service.color}30` }}
                          >
                            <CheckCircle2 size={13} style={{ color: service.color }} />
                          </div>
                          <span className="font-body text-text-body leading-relaxed" style={{ fontSize: '0.97rem' }}>
                            {bullet}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <aside className="space-y-5 lg:sticky" style={{ top: '5.5rem' }}>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ background: 'linear-gradient(145deg,#0F2040,#1E3A5F)', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(232,35,26,0.22)' }}
              >
                <div className="brand-line mb-4" />
                <h3 className="font-heading font-bold text-white uppercase tracking-wide mb-2 leading-snug" style={{ fontSize: '1.6rem', letterSpacing: '0.04em' }}>Start a Project</h3>
                <p className="font-body text-sm mb-5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.48)' }}>
                  Talk to our {sub.title.toLowerCase()} specialists today.
                </p>
                <Link to="/contact" className="btn-primary w-full justify-center" style={{ fontSize: '12px', padding: '10px 20px' }}>
                  Contact Us <ArrowRight size={13} />
                </Link>
              </motion.div>

              {/* Other sub-services in this service */}
              {siblings.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E5E9F0', overflow: 'hidden' }}
                >
                  <div style={{ height: '3px', background: service.color }} />
                  <div className="p-6">
                    <p className="font-body text-xs uppercase tracking-widest text-text-muted mb-1">Also in</p>
                    <h4 className="font-heading font-bold text-text-heading uppercase tracking-wide mb-5" style={{ fontSize: '1.2rem', letterSpacing: '0.04em' }}>{service.title}</h4>
                    <ul className="space-y-3">
                      {siblings.map(s => (
                        <li key={s.slug}>
                          <Link
                            to={`/services/${slug}/${s.slug}`}
                            className="flex items-center gap-2.5 font-body text-sm transition-all duration-200 group"
                            style={{ color: '#4B5563' }}
                            onMouseEnter={e => e.currentTarget.style.color = service.color}
                            onMouseLeave={e => e.currentTarget.style.color = '#4B5563'}
                          >
                            <ChevronRight size={13} style={{ color: service.color, flexShrink: 0 }} />
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Full service link */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ background: '#fff', borderRadius: '14px', border: '1px solid #E5E9F0', padding: '1.1rem 1.25rem' }}
              >
                <p className="font-body text-xs uppercase tracking-widest text-text-muted mb-2">Full service</p>
                <Link
                  to={`/services/${slug}`}
                  className="font-body text-sm font-semibold inline-flex items-center gap-1.5 transition-all duration-200"
                  style={{ color: '#E8231A' }}
                  onMouseEnter={e => e.currentTarget.style.gap = '8px'}
                  onMouseLeave={e => e.currentTarget.style.gap = '6px'}
                >
                  View all of {service.title} <ArrowRight size={13} />
                </Link>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

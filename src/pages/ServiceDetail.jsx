import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ArrowLeft, Building2 } from 'lucide-react'
import CTABanner from '../components/sections/home/CTABanner'
import { services } from '../data/services'
import { serviceImages } from '../data/images'

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
            <CheckCircle2 size={15} style={{ color, flexShrink: 0 }} />
            <span className="font-heading font-bold text-text-heading uppercase tracking-wide" style={{ fontSize: '1rem', letterSpacing: '0.04em' }}>{sub.title}</span>
          </div>
          <ArrowRight size={12} style={{ color, flexShrink: 0, opacity: 0.6 }} />
        </div>
      </motion.div>
    </Link>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  const img = serviceImages[slug]

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '66vh' }}>
        <div className="absolute inset-0">
          {img && <img src={img} alt={service.title} className="w-full h-full object-cover" />}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(105deg, rgba(6,13,26,0.3) 0%, rgba(6,13,26,0.2) 45%, rgba(6,13,26,0.1) 100%)' }}
          />
        </div>

        <div
          className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 flex items-center"
          style={{ minHeight: '52vh', paddingTop: '7rem', paddingBottom: '4rem' }}
        >
          <div style={{ maxWidth: '780px' }}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-body text-sm mb-8 transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.38)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}
            >
              <ArrowLeft size={14} /> Back to Services
            </Link>

            {/* Badge */}
            <div className="mb-6">
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-body font-semibold tracking-widest uppercase"
                style={{ background: `${service.color}1E`, border: `1px solid ${service.color}55`, color: service.color }}
              >
                <service.icon size={11} /> Engineering Service
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-heading font-bold text-white mb-5 uppercase"
              style={{ fontSize: 'clamp(3.2rem, 6vw, 5.5rem)', lineHeight: 0.95, letterSpacing: '0.04em' }}
            >
              {service.title}
            </h1>

            {/* Accent line only — description moves below */}
            <div className="flex items-center gap-2.5">
              <div className="h-px" style={{ width: '44px', background: service.color }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: service.color }} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '56px' }}>
          <svg viewBox="0 0 1440 56" fill="none" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 56 L0 28 Q360 0 720 28 Q1080 56 1440 28 L1440 56 Z" fill="#EEF3FA" />
          </svg>
        </div>
      </section>

      {/* ── Main Content + Sidebar ── */}
      <section className="py-14 bg-bg-section">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          {/* Description strip — full width, above the grid */}
          <div
            className="mb-10 p-8 lg:p-10"
            style={{ background: '#fff', borderRadius: '20px', border: '1px solid #E5E9F0', borderLeft: `5px solid ${service.color}` }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: `${service.color}12`, border: `1px solid ${service.color}28` }}
              >
                <service.icon size={22} style={{ color: service.color }} />
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-text-muted mb-2">About this service</p>
                <p
                  className="font-body text-text-body"
                  style={{ fontSize: '1.08rem', lineHeight: 1.85, maxWidth: '820px' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">

            {/* Content */}
            <div className="space-y-6">

              {/* Sub-services */}
              <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #E5E9F0', overflow: 'hidden' }}>
                <div style={{ height: '3px', background: service.color }} />
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-7">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${service.color}12`, border: `1px solid ${service.color}28` }}
                    >
                      <service.icon size={22} style={{ color: service.color }} />
                    </div>
                    <div>
                      <p className="font-body text-xs uppercase tracking-widest text-text-muted">What's included</p>
                      <h2 className="font-heading font-bold text-text-heading uppercase tracking-wide" style={{ fontSize: '1.6rem', letterSpacing: '0.04em' }}>Sub-Services</h2>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.subServices.map(sub => (
                      <SubServiceCard key={sub.title} sub={sub} color={service.color} serviceSlug={service.slug} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Tools */}
            </div>

            {/* Sidebar */}
            <aside className="space-y-5 lg:sticky" style={{ top: '5.5rem' }}>

              {/* Industries */}
              <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E5E9F0', overflow: 'hidden' }}>
                <div style={{ height: '3px', background: 'linear-gradient(90deg,#1B8C3C,#22A84A)' }} />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 size={13} style={{ color: '#1B8C3C' }} />
                    <p className="font-body text-xs uppercase tracking-widest text-text-muted">Where we apply it</p>
                  </div>
                  <h3 className="font-display font-bold text-text-heading text-base mb-4 mt-1">Industries Served</h3>
                  <ul className="space-y-2.5">
                    {service.industries.map(ind => (
                      <li key={ind} className="flex items-center gap-2.5 font-body text-sm" style={{ color: '#374151' }}>
                        <CheckCircle2 size={13} style={{ color: '#1B8C3C', flexShrink: 0 }} />
                        {ind}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div
                style={{ background: 'linear-gradient(145deg,#0F2040,#1E3A5F)', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(232,35,26,0.22)' }}
              >
                <div className="brand-line mb-4" />
                <h3 className="font-display font-bold text-white text-xl mb-2 leading-snug">Start a Project</h3>
                <p className="font-body text-sm mb-5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.48)' }}>
                  Talk to our {service.title.toLowerCase()} team today.
                </p>
                <Link to="/contact" className="btn-primary w-full justify-center" style={{ fontSize: '12px', padding: '10px 20px' }}>
                  Contact Us <ArrowRight size={13} />
                </Link>
              </div>

              {/* All services link */}
              <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #E5E9F0', padding: '1.1rem 1.25rem' }}>
                <p className="font-body text-xs uppercase tracking-widest text-text-muted mb-2">Explore more</p>
                <Link
                  to="/services"
                  className="font-body text-sm font-semibold inline-flex items-center gap-1.5 transition-all duration-200"
                  style={{ color: '#E8231A' }}
                  onMouseEnter={e => e.currentTarget.style.gap = '8px'}
                  onMouseLeave={e => e.currentTarget.style.gap = '6px'}
                >
                  View All 9 Services <ArrowRight size={13} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16" style={{ background: '#F8FAFD' }}>
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">

              <div>
                <p className="font-body text-xs uppercase tracking-widest text-text-muted mb-2">Got questions?</p>
                <h2
                  className="font-display font-bold text-text-heading mb-8"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', letterSpacing: '-0.015em' }}
                >
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                  {service.faqs.map((faq, i) => (
                    <div
                      key={i}
                      style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E5E9F0', overflow: 'hidden' }}
                    >
                      <div style={{ height: '3px', background: i % 2 === 0 ? '#E8231A' : '#1B8C3C' }} />
                      <div className="p-6 lg:p-8">
                        <div className="flex items-start gap-3 mb-3">
                          <span
                            className="font-display font-bold text-xl flex-shrink-0 w-6"
                            style={{ color: i % 2 === 0 ? '#E8231A' : '#1B8C3C', lineHeight: 1.3 }}
                          >Q</span>
                          <h3
                            className="font-display font-bold text-text-heading"
                            style={{ fontSize: '1.12rem', lineHeight: 1.4 }}
                          >
                            {faq.q}
                          </h3>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="font-display font-bold text-xl flex-shrink-0 w-6 text-text-muted" style={{ lineHeight: 1.3 }}>A</span>
                          <p className="font-body leading-relaxed" style={{ color: '#374151', lineHeight: 1.8 }}>{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Side promo card */}
              <div className="lg:sticky" style={{ top: '5.5rem' }}>
                <div
                  style={{ background: 'linear-gradient(145deg,#0F2040,#1E3A5F)', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(232,35,26,0.2)' }}
                >
                  <div className="brand-line mb-5" />
                  <h3 className="font-display font-bold text-white text-2xl mb-3 leading-snug">
                    Not finding your answer?
                  </h3>
                  <p className="font-body text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.48)' }}>
                    Our team is available to discuss your specific project requirements in detail.
                  </p>
                  <Link
                    to="/contact"
                    className="btn-primary w-full justify-center"
                    style={{ fontSize: '12px', padding: '11px 20px' }}
                  >
                    Ask Our Team <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  )
}

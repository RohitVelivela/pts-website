import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ArrowLeft, Wrench, Building } from 'lucide-react'
import { staggerContainer, fadeUp, useScrollReveal } from '../hooks/useScrollAnimation'
import SectionLabel from '../components/ui/SectionLabel'
import CTABanner from '../components/sections/home/CTABanner'
import { services } from '../data/services'
import { serviceImages } from '../data/images'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  const img = serviceImages[slug]

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ minHeight: '50vh' }}>
        <div className="absolute inset-0">
          {img && <img src={img} alt={service.title} className="w-full h-full object-cover" />}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.78) 0%, rgba(20,20,20,0.65) 55%, rgba(10,10,10,0.75) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 flex items-center" style={{ minHeight: '38vh' }}>
          <div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-body mb-8 transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
            >
              <ArrowLeft size={16} /> Back to Services
            </Link>
            <div className="mb-6">
              <SectionLabel className="mb-3 inline-flex" style={{ color: '#FFFFFF', background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.35)' }}>Service</SectionLabel>
              <h1 className="font-display font-bold text-white leading-tight mt-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                {service.title}
              </h1>
            </div>
            <p className="font-body text-xl max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{service.description}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '60px' }}>
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#F7F8FA" />
          </svg>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-bg-section">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              <div className="card p-8">
                <h2 className="font-display font-bold text-text-heading text-2xl mb-6 flex items-center gap-3">
                  <CheckCircle2 size={22} style={{ color: service.color }} /> Sub-Services
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.subServices.map(sub => (
                    <div key={sub} className="flex items-center gap-3 p-3 rounded-xl border border-border-light bg-bg-section">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: service.color }} />
                      <span className="text-text-body font-body text-sm">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-8">
                <h2 className="font-display font-bold text-text-heading text-2xl mb-6 flex items-center gap-3">
                  <Wrench size={22} className="text-gold" /> Tools & Software
                </h2>
                <div className="flex flex-wrap gap-3">
                  {service.tools.map(t => (
                    <span key={t} className="px-4 py-2 rounded-xl text-sm font-body font-medium" style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', color: '#D97706' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="font-display font-bold text-text-heading text-xl mb-4 flex items-center gap-3">
                  <Building size={20} className="text-green" /> Industries
                </h3>
                <ul className="space-y-2">
                  {service.industries.map(ind => (
                    <li key={ind} className="flex items-center gap-2 text-text-body text-sm font-body">
                      <CheckCircle2 size={14} className="text-green" /> {ind}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(232,35,26,0.05) 0%, rgba(27,140,60,0.05) 100%)', border: '1px solid rgba(232,35,26,0.15)' }}>
                <h3 className="font-display font-bold text-text-heading text-xl mb-2">Ready to Start?</h3>
                <p className="text-text-muted font-body text-sm mb-4">Get in touch with our {service.title} team today.</p>
                <Link to="/contact" className="btn-primary text-xs inline-flex">
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <CTABanner />
    </>
  )
}

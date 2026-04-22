import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, X, ArrowRight, Users, TrendingUp, Globe, Award, Heart } from 'lucide-react'
import { useScrollReveal, staggerContainer, fadeUp } from '../hooks/useScrollAnimation'
import SectionLabel from '../components/ui/SectionLabel'
import CTABanner from '../components/sections/home/CTABanner'
import { images } from '../data/images'

const benefits = [
  { icon: TrendingUp, title: 'Growth Opportunities', desc: 'Clear career paths, regular skill assessments, and promotion from within.' },
  { icon: Award, title: 'Technical Excellence', desc: 'Work with industry-leading engineers on complex, high-impact projects.' },
  { icon: Heart, title: 'Work-Life Balance', desc: 'Flexible work arrangements and a culture that respects personal time.' },
  { icon: Globe, title: 'Global Projects', desc: 'Exposure to international clients and projects across multiple sectors.' },
  { icon: Users, title: 'Collaborative Culture', desc: 'Open, inclusive teams where every idea is valued and heard.' },
]

const openings = [
  { title: 'Senior Piping Engineer', department: 'Plant Engineering', location: 'Hyderabad', type: 'Full-time', desc: 'Lead piping design and stress analysis activities for Oil & Gas and Petrochemical projects.', req: ['8+ years experience', 'CAESAR II proficiency', 'B.E/B.Tech Mechanical'] },
  { title: 'BIM Coordinator', department: 'BIM Services', location: 'Hyderabad', type: 'Full-time', desc: 'Coordinate BIM workflows and manage Revit model quality for large-scale projects.', req: ['5+ years Revit', 'Navisworks experience', 'B.Arch or B.E Civil'] },
  { title: 'Process Engineer', department: 'Plant Engineering', location: 'Hyderabad', type: 'Full-time', desc: 'Perform process simulations, heat & mass balance, and equipment sizing for chemical plants.', req: ['4+ years experience', 'HYSYS/Aspen Plus', 'B.E Chemical'] },
  { title: 'IT Project Manager', department: 'IT Services', location: 'Hyderabad', type: 'Full-time', desc: 'Manage end-to-end IT implementation projects for engineering enterprise clients.', req: ['6+ years PM experience', 'PMP preferred', 'Engineering/IT background'] },
]

export default function Careers() {
  const [expandedJob, setExpandedJob] = useState(null)
  const [applyJob, setApplyJob] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const { ref, animate } = useScrollReveal(0.05)

  const handleApply = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setApplyJob(null); setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }) }, 2000)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ minHeight: '55vh' }}>
        {/* Cover photo */}
        <div className="absolute inset-0">
          <img src={images.coverCareers} alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.82) 0%, rgba(20,20,20,0.74) 50%, rgba(10,10,10,0.80) 100%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 flex items-center" style={{ minHeight: '43vh' }}>
          <div>
            <SectionLabel className="mb-5 inline-flex" style={{ color: '#FFFFFF', background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.35)' }}>Join Our Team</SectionLabel>
            <h1 className="font-display font-bold text-white mt-4 mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Build the Future of Engineering
              <br /><span style={{ background: 'linear-gradient(135deg, #F59E0B, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>with PTS</span>
            </h1>
            <p className="font-body text-xl max-w-2xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Join a team of innovators solving real-world engineering challenges with precision, integrity, and passion.
            </p>
            {/* Quick stats strip */}
            <div className="flex flex-wrap gap-6 mt-8">
              {['500+ Projects Delivered', '16+ Years of Excellence', 'Hyderabad HQ', 'Global Clients'].map(s => (
                <div key={s} className="flex items-center gap-2 font-body text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '60px' }}>
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-bg-page">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel className="mb-4 inline-flex">Why PTS</SectionLabel>
            <h2 className="font-display font-bold text-text-heading mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Why Engineers <span className="text-grad-brand">Love Working Here</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {benefits.map(b => (
              <div key={b.title} className="card p-6 text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(232,35,26,0.08)', border: '1px solid rgba(232,35,26,0.15)' }}>
                  <b.icon size={22} className="text-brand" />
                </div>
                <h3 className="font-display font-bold text-text-heading text-base mb-2">{b.title}</h3>
                <p className="text-text-muted font-body text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section ref={ref} className="py-24 bg-bg-section">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel className="mb-4 inline-flex">Open Positions</SectionLabel>
            <h2 className="font-display font-bold text-text-heading mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Current <span className="text-grad-brand">Openings</span>
            </h2>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" animate={animate} className="space-y-4">
            {openings.map(job => (
              <motion.div key={job.title} variants={fadeUp}>
                <div className="card overflow-hidden p-0">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => setExpandedJob(expandedJob === job.title ? null : job.title)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <h3 className="font-display font-bold text-text-heading text-lg">{job.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-body" style={{ background: 'rgba(232,35,26,0.08)', border: '1px solid rgba(232,35,26,0.18)', color: '#E8231A' }}>{job.department}</span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-body" style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', color: '#D97706' }}>{job.type}</span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-body bg-bg-section border border-border-light text-text-muted">{job.location}</span>
                      </div>
                    </div>
                    <ChevronDown size={20} className={`text-text-muted transition-transform flex-shrink-0 ml-4 ${expandedJob === job.title ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {expandedJob === job.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-border-light pt-6">
                          <p className="text-text-body font-body mb-4">{job.desc}</p>
                          <h4 className="font-display font-bold text-text-heading mb-2">Requirements</h4>
                          <ul className="space-y-1 mb-6">
                            {job.req.map(r => (
                              <li key={r} className="flex items-center gap-2 text-text-body text-sm font-body">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand" /> {r}
                              </li>
                            ))}
                          </ul>
                          <button onClick={() => setApplyJob(job)} className="btn-primary text-xs">
                            Apply Now <ArrowRight size={14} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Apply Modal */}
      <AnimatePresence>
        {applyJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[400] bg-text-heading/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setApplyJob(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="card p-8 max-w-lg w-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display font-bold text-text-heading text-xl">Apply — {applyJob.title}</h2>
                <button onClick={() => setApplyJob(null)} className="text-text-muted hover:text-text-heading transition-colors">
                  <X size={22} />
                </button>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-green font-display font-bold text-4xl mb-2">✓</div>
                  <p className="text-text-heading font-body">Application submitted! We'll be in touch.</p>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4">
                  {[
                    { key: 'name', label: 'Full Name', type: 'text' },
                    { key: 'email', label: 'Email Address', type: 'email' },
                    { key: 'phone', label: 'Phone Number', type: 'tel' },
                  ].map(f => (
                    <div key={f.key}>
                      <label className="block text-text-body font-body text-sm mb-1.5">{f.label}</label>
                      <input
                        type={f.type}
                        required
                        value={form[f.key]}
                        onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        className="w-full bg-bg-section border border-border-light rounded-xl px-4 py-3 text-text-heading font-body text-sm outline-none focus:border-brand/40 transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-text-body font-body text-sm mb-1.5">Cover Note</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-bg-section border border-border-light rounded-xl px-4 py-3 text-text-heading font-body text-sm outline-none focus:border-brand/40 transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Submit Application <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABanner />
    </>
  )
}

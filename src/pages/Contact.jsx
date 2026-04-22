import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { useScrollReveal, staggerContainer, fadeRight, fadeUp } from '../hooks/useScrollAnimation'
import SectionLabel from '../components/ui/SectionLabel'
import { company } from '../data/content'
import { services } from '../data/services'
import { images } from '../data/images'

const initialForm = { name: '', email: '', phone: '', company_name: '', service: '', message: '' }

function validate(form) {
  const errs = {}
  if (!form.name.trim()) errs.name = 'Name is required'
  if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = 'Valid email required'
  if (!form.message.trim()) errs.message = 'Message is required'
  return errs
}

const inputClass = (hasError) =>
  `w-full rounded-xl px-4 py-3 font-body text-sm text-text-heading outline-none transition-all duration-200 bg-bg-section border ${
    hasError
      ? 'border-red-400 ring-1 ring-red-400/30'
      : 'border-border-light focus:border-brand/40 focus:ring-1 focus:ring-brand/20'
  }`

export default function Contact() {
  const [form, setForm]       = useState(initialForm)
  const [errors, setErrors]   = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { ref, animate }      = useScrollReveal(0.05)

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSuccess(true)
    setForm(initialForm)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ minHeight: '50vh' }}>
        <div className="absolute inset-0">
          <img src={images.office} alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.84) 0%, rgba(20,20,20,0.76) 55%, rgba(10,10,10,0.82) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 flex items-center" style={{ minHeight: '38vh' }}>
          <div>
            <SectionLabel className="mb-5 inline-flex" style={{ color: '#FFFFFF', background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.35)' }}>Contact Us</SectionLabel>
            <h1 className="font-display font-bold text-white mt-4 mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Let's Build Something
              <br /><span style={{ background: 'linear-gradient(135deg, #F59E0B, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Together</span>
            </h1>
            <p className="font-body text-xl max-w-2xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Tell us about your project. Our engineering team will respond within 24 hours.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '60px' }}>
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#F7F8FA" />
          </svg>
        </div>
      </section>

      {/* Body */}
      <section ref={ref} className="py-24 bg-bg-section">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Form — 3 cols */}
            <motion.div variants={staggerContainer} initial="hidden" animate={animate} className="lg:col-span-3">
              <div className="card p-8">
                {success ? (
                  <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-14">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }}>
                      <CheckCircle2 size={56} className="text-green mx-auto mb-5" />
                    </motion.div>
                    <h3 className="font-display font-bold text-text-heading text-2xl mb-2">Message Sent!</h3>
                    <p className="text-text-body font-body mb-6">We'll get back to you within 24 hours.</p>
                    <button onClick={() => setSuccess(false)} className="btn-outline mx-auto">Send Another</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <h2 className="font-display font-bold text-text-heading text-2xl mb-2">Send Us a Message</h2>
                    <p className="text-text-muted font-body text-sm mb-7">Fields marked * are required</p>

                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      {[
                        { key: 'name',         label: 'Full Name *',     type: 'text' },
                        { key: 'email',        label: 'Email Address *', type: 'email' },
                        { key: 'phone',        label: 'Phone Number',    type: 'tel' },
                        { key: 'company_name', label: 'Company',         type: 'text' },
                      ].map(f => (
                        <div key={f.key}>
                          <label className="block text-text-body font-body text-sm mb-1.5">{f.label}</label>
                          <input
                            type={f.type}
                            name={f.key}
                            value={form[f.key]}
                            onChange={handleChange}
                            className={inputClass(!!errors[f.key])}
                          />
                          {errors[f.key] && <p className="text-red-500 text-xs mt-1 font-body">{errors[f.key]}</p>}
                        </div>
                      ))}
                    </div>

                    <div className="mb-5">
                      <label className="block text-text-body font-body text-sm mb-1.5">Service Interested In</label>
                      <select name="service" value={form.service} onChange={handleChange} className={inputClass(false)}>
                        <option value="">Select a service...</option>
                        {services.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                      </select>
                    </div>

                    <div className="mb-7">
                      <label className="block text-text-body font-body text-sm mb-1.5">Message *</label>
                      <textarea
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, requirements, and timeline..."
                        className={inputClass(!!errors.message) + ' resize-none'}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1 font-body">{errors.message}</p>}
                    </div>

                    <button type="submit" disabled={loading} className="btn-blue w-full justify-center disabled:opacity-60">
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <><Send size={15} /> Send Message</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Info sidebar — 2 cols */}
            <motion.div variants={staggerContainer} initial="hidden" animate={animate} className="lg:col-span-2 space-y-5">

              {/* Logo card */}
              <motion.div variants={fadeRight} className="card p-6">
                <img src="/logo.png" alt="PTS" className="h-10 w-auto object-contain mb-4" />
                <p className="text-text-body font-body text-sm leading-relaxed">
                  Pinnacle Technology Services — engineering excellence delivered with integrity, precision, and accountability.
                </p>
              </motion.div>

              {/* Contact details */}
              <motion.div variants={fadeRight} className="card p-6" style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(59,130,246,0.03) 100%)', border: '1px solid rgba(37,99,235,0.12)' }}>
                <h3 className="font-display font-bold text-text-heading text-lg mb-5">Get in Touch</h3>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, label: 'Address', value: 'Hyderabad, Telangana, India', color: '#2563EB', href: null },
                    { icon: Phone,  label: 'Phone',   value: company.phone,  color: '#1B8C3C', href: `tel:${company.phone}` },
                    { icon: Mail,   label: 'Email',   value: company.email,  color: '#F5A623', href: `mailto:${company.email}` },
                  ].map(c => (
                    <div key={c.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${c.color}10`, border: `1px solid ${c.color}18` }}>
                        <c.icon size={15} style={{ color: c.color }} />
                      </div>
                      <div>
                        <p className="text-text-muted font-body text-xs uppercase tracking-wider">{c.label}</p>
                        {c.href
                          ? <a href={c.href} className="text-text-body hover:text-brand font-body text-sm transition-colors mt-0.5 block">{c.value}</a>
                          : <p className="text-text-body font-body text-sm mt-0.5">{c.value}</p>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div variants={fadeRight} className="card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={16} className="text-green" />
                  <h3 className="font-display font-bold text-text-heading text-base">Business Hours</h3>
                </div>
                <p className="text-text-body font-body text-sm mb-3">{company.hours}</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                  <span className="text-green text-xs font-body font-semibold">24/7 Emergency Support Available</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

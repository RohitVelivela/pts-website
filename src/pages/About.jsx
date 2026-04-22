import { motion } from 'framer-motion'
import { CheckCircle2, Target, Eye, Star, Users, Award, Globe, TrendingUp } from 'lucide-react'
import { useScrollReveal, staggerContainer, fadeUp } from '../hooks/useScrollAnimation'
import SectionLabel from '../components/ui/SectionLabel'
import CTABanner from '../components/sections/home/CTABanner'
import { mission, vision, values, timeline, company } from '../data/content'
import { images } from '../data/images'

function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ minHeight: '60vh' }}>
      <div className="absolute inset-0">
        <img src={images.aboutTeam} alt="" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.82) 0%, rgba(20,20,20,0.74) 55%, rgba(10,10,10,0.80) 100%)' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 flex items-center" style={{ minHeight: '45vh' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <SectionLabel className="mb-5 inline-flex" style={{ color: '#FFFFFF', background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.35)' }}>Who We Are</SectionLabel>
          <h1 className="font-display font-bold text-white mt-4 mb-6 leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            16 Years of Precision.
            <br />
            <span style={{ background: 'linear-gradient(135deg, #F59E0B, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Thousands of Projects.</span>
            <br />
            One Promise.
          </h1>
          <p className="font-body text-xl max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            A Hyderabad-based engineering powerhouse trusted by global industry leaders for precision, reliability, and integrity.
          </p>
        </motion.div>
      </div>
      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '60px' }}>
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  )
}

function CompanyStory() {
  const { ref, animate } = useScrollReveal()
  return (
    <section ref={ref} className="py-24 bg-bg-page">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" animate={animate} className="text-center mb-16">
          <motion.div variants={fadeUp} className="flex justify-center mb-4"><SectionLabel>Our Story</SectionLabel></motion.div>
          <motion.h2 variants={fadeUp} className="font-display font-bold text-text-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            From Hyderabad to the <span className="text-grad-green">Global Stage</span>
          </motion.h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block" style={{ background: 'linear-gradient(to bottom, rgba(232,35,26,0.25), rgba(27,140,60,0.15), transparent)' }} />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`flex items-center gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className={`card p-6 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <span className="font-display font-bold text-brand text-4xl block mb-2">{item.year}</span>
                    <h3 className="font-display font-bold text-text-heading text-xl mb-2">{item.title}</h3>
                    <p className="text-text-body font-body text-sm">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden lg:flex w-12 h-12 rounded-full items-center justify-center flex-shrink-0 z-10" style={{ background: 'rgba(232,35,26,0.08)', border: '2px solid rgba(232,35,26,0.3)' }}>
                  <div className="w-3 h-3 rounded-full bg-brand" />
                </div>
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutMVV() {
  const { ref, animate } = useScrollReveal()
  return (
    <section ref={ref} className="py-24 bg-bg-section">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" animate={animate} className="text-center mb-16">
          <motion.div variants={fadeUp} className="flex justify-center mb-4"><SectionLabel>Our Foundation</SectionLabel></motion.div>
          <motion.h2 variants={fadeUp} className="font-display font-bold text-text-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Mission, Vision & <span className="text-grad-brand">Values</span>
          </motion.h2>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" animate={animate} className="grid lg:grid-cols-3 gap-6">
          {/* Mission */}
          <motion.div variants={fadeUp} className="card p-8" style={{ borderTop: '3px solid #E8231A' }}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(232,35,26,0.08)', border: '1px solid rgba(232,35,26,0.15)' }}>
              <Target size={26} className="text-brand" />
            </div>
            <h3 className="font-display font-bold text-2xl text-brand mb-4">Mission</h3>
            <p className="text-text-body font-body text-sm leading-relaxed">{mission}</p>
          </motion.div>

          {/* Vision */}
          <motion.div variants={fadeUp} className="card p-8 lg:scale-105" style={{ borderTop: '3px solid #1B8C3C', boxShadow: '0 8px 40px rgba(27,140,60,0.1)' }}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(27,140,60,0.08)', border: '1px solid rgba(27,140,60,0.18)' }}>
              <Eye size={26} className="text-green" />
            </div>
            <h3 className="font-display font-bold text-2xl text-green mb-4">Vision</h3>
            <p className="text-text-body font-body text-sm leading-relaxed">{vision}</p>
          </motion.div>

          {/* Values */}
          <motion.div variants={fadeUp} className="card p-8" style={{ borderTop: '3px solid #F59E0B' }}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.18)' }}>
              <Star size={26} className="text-gold" />
            </div>
            <h3 className="font-display font-bold text-2xl text-gold mb-4">Values</h3>
            <ul className="space-y-3">
              {values.map(v => (
                <li key={v.title} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="mt-0.5 text-green flex-shrink-0" />
                  <div>
                    <span className="text-text-heading font-semibold font-body text-sm">{v.title}</span>
                    <p className="text-text-muted font-body text-xs mt-0.5">{v.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function AboutGallery() {
  return (
    <section className="py-20 bg-bg-page">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { img: images.engineers, label: 'Engineering Excellence' },
            { img: images.office, label: 'Modern Workspace' },
            { img: images.blueprint, label: 'Precision Design' },
            { img: images.team, label: 'Expert Team' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden group"
              style={{ height: i % 2 === 0 ? '240px' : '200px', marginTop: i % 2 === 0 ? '0' : '40px' }}
            >
              <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(17,24,39,0.65) 0%, transparent 55%)' }} />
              <p className="absolute bottom-3 left-3 text-white font-display font-bold text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlight strip */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Award, label: 'ISO Certified', value: 'Quality Assured' },
            { icon: Globe, label: 'Global Clients', value: '100+ Partners' },
            { icon: TrendingUp, label: 'Projects', value: '500+ Delivered' },
            { icon: Users, label: 'Expert Team', value: 'Multidisciplinary' },
          ].map((item, i) => (
            <div key={i} className="card p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: i % 2 === 0 ? 'rgba(232,35,26,0.08)' : 'rgba(27,140,60,0.08)', border: `1px solid ${i % 2 === 0 ? 'rgba(232,35,26,0.15)' : 'rgba(27,140,60,0.15)'}` }}>
                <item.icon size={20} style={{ color: i % 2 === 0 ? '#E8231A' : '#1B8C3C' }} />
              </div>
              <div>
                <div className="font-display font-bold text-text-heading text-base">{item.value}</div>
                <div className="text-text-muted font-body text-xs">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <AboutGallery />
      <AboutMVV />
      <CTABanner />
    </>
  )
}

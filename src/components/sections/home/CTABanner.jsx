import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, ShieldCheck, Clock, Award } from 'lucide-react'
import { useScrollReveal, staggerContainer, fadeUp } from '../../../hooks/useScrollAnimation'
import { company } from '../../../data/content'

const trust = [
  { icon: ShieldCheck, label: 'ISO Certified' },
  { icon: Clock, label: '24/7 Support' },
  { icon: Award, label: '16+ Years' },
]

export default function CTABanner() {
  const { ref, animate } = useScrollReveal()

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #060D1A 0%, #0F2040 45%, #060D1A 100%)' }}
    >
      {/* Gold glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-48 rounded-full pointer-events-none" style={{ background: 'rgba(245,158,11,0.10)', filter: 'blur(80px)' }} />
      {/* Green glow edge */}
      <div className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none" style={{ background: 'rgba(27,140,60,0.10)', filter: 'blur(60px)' }} />
      {/* Green glow left */}
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full pointer-events-none" style={{ background: 'rgba(27,140,60,0.07)', filter: 'blur(60px)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
        <motion.div variants={staggerContainer} initial="hidden" animate={animate}>

          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-white mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Ready to Optimize Your
            <br />
            <span style={{ background: 'linear-gradient(135deg, #F59E0B, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Engineering Workflow?</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-white/60 font-body text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with PTS — where 16 years of precision engineering meets 24/7 commitment. Let's turn your most complex project into a delivered success.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-3.5 rounded-full font-display font-bold text-sm tracking-wider uppercase transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #F59E0B, #D97706)', color: '#0F2040', boxShadow: '0 4px 18px rgba(245,158,11,0.35)' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(245,158,11,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 18px rgba(245,158,11,0.35)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Start a Conversation <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${company.phone}`}
              className="inline-flex items-center gap-2 px-10 py-3.5 rounded-full font-display font-bold text-sm tracking-wider uppercase border-2 border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all duration-200"
            >
              <Phone size={16} /> Call Us Now
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-8">
            {trust.map(t => (
              <div key={t.label} className="flex items-center gap-2 text-white/40 text-xs font-body uppercase tracking-widest">
                <t.icon size={13} style={{ color: '#F59E0B' }} />
                {t.label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Target, Eye, CheckCircle2 } from 'lucide-react'
import { useScrollReveal, staggerContainer, fadeUp } from '../../../hooks/useScrollAnimation'
import SectionLabel from '../../ui/SectionLabel'
import { mission, vision, values } from '../../../data/content'

export default function MissionVisionValues() {
  const { ref, animate } = useScrollReveal()

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-bg-section">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" animate={animate} className="text-center mb-16">
          <motion.div variants={fadeUp} className="flex justify-center mb-5">
            <SectionLabel>Our Foundation</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-display font-bold text-text-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Driven by Purpose,
            <span className="text-grad-brand"> Guided by Values</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={animate}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Mission */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="card p-8 relative overflow-hidden"
            style={{ borderTop: '3px solid #E8231A' }}
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(232,35,26,0.08)', border: '1px solid rgba(232,35,26,0.15)' }}>
              <Target size={26} className="text-brand" />
            </div>
            <h3 className="font-display font-bold text-2xl text-brand mb-4">Our Mission</h3>
            <p className="text-text-body font-body text-sm leading-relaxed">{mission}</p>
          </motion.div>

          {/* Vision — featured center */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -12 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="card p-8 relative overflow-hidden lg:scale-105"
            style={{ borderTop: '3px solid #1B8C3C', boxShadow: '0 8px 40px rgba(27,140,60,0.12)' }}
          >
            {/* Featured badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1 rounded-full text-xs font-bold font-display tracking-widest uppercase text-white" style={{ background: 'linear-gradient(135deg, #1B8C3C, #156B2E)' }}>
                Our Vision
              </span>
            </div>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 mt-2" style={{ background: 'rgba(27,140,60,0.08)', border: '1px solid rgba(27,140,60,0.2)' }}>
              <Eye size={26} className="text-green" />
            </div>
            <h3 className="font-display font-bold text-2xl text-green mb-4">Our Vision</h3>
            <p className="text-text-body font-body text-sm leading-relaxed">{vision}</p>
          </motion.div>

          {/* Values */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="card p-8 relative overflow-hidden"
            style={{ borderTop: '3px solid #F59E0B' }}
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.18)' }}>
              <span className="text-2xl font-display font-bold text-gold">★</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-gold mb-5">Our Values</h3>
            <ul className="space-y-3">
              {values.map((v) => (
                <li key={v.title} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0 text-green" />
                  <div>
                    <span className="text-text-heading font-semibold font-body text-sm">{v.title}</span>
                    <p className="text-text-muted font-body text-xs mt-0.5 leading-relaxed">{v.desc}</p>
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

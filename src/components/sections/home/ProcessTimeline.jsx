import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '../../ui/SectionLabel'
import { processSteps } from '../../../data/content'

export default function ProcessTimeline() {
  const sectionRef = useRef(null)
  const inView     = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-bg-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-5">
            <SectionLabel>Our Process</SectionLabel>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-text-heading"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            From Brief to Blueprint —
            <span style={{ background: 'linear-gradient(135deg, #1E40AF, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}> How We Deliver</span>
          </motion.h2>
        </div>

        {/* ── TIMELINE ── */}
        <div className="relative">

          {/* ── PROGRESS LINE (auto-animates on section enter) ── */}
          <div className="hidden lg:block absolute" style={{ top: '28px', left: '8.33%', right: '8.33%', height: '4px', background: '#E5E9F0', borderRadius: '999px', zIndex: 0 }}>
            {/* Animated fill */}
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full overflow-visible"
              initial={{ width: '0%' }}
              animate={inView ? { width: '100%' } : { width: '0%' }}
              transition={{ duration: 2.2, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
            >
              <div className="w-full h-full rounded-full" style={{ background: 'linear-gradient(90deg, #1E3A8A, #2563EB, #60A5FA)' }} />
              {/* Glowing moving dot at tip */}
              <motion.div
                className="absolute top-1/2 rounded-full"
                style={{
                  right: 0,
                  width: '14px', height: '14px',
                  background: '#3B82F6',
                  boxShadow: '0 0 12px 5px rgba(59,130,246,0.6)',
                  transform: 'translate(50%, -50%)',
                }}
              />
            </motion.div>

            {/* Static arrowhead at far right */}
            <div className="absolute -right-3 top-1/2 -translate-y-1/2" style={{ width: 0, height: 0, borderTop: '7px solid transparent', borderBottom: '7px solid transparent', borderLeft: '12px solid #3B82F6', opacity: inView ? 1 : 0, transition: 'opacity 0.3s 2.4s' }} />
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center relative z-10"
              >
                {/* Step circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 relative bg-white"
                  style={{
                    border: '2.5px solid rgba(59,130,246,0.45)',
                    boxShadow: '0 0 0 6px rgba(59,130,246,0.08), 0 4px 12px rgba(0,0,0,0.08)',
                  }}
                >
                  <span className="font-display font-bold text-lg" style={{ color: '#2563EB' }}>{step.step}</span>

                  {/* Pulse on active node (scroll-driven feel) */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ border: '2px solid rgba(59,130,246,0.35)' }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  />
                </motion.div>

                {/* Accent dash */}
                <div className="w-6 h-0.5 rounded-full mb-3" style={{ background: '#3B82F6', opacity: 0.5 }} />

                <h3 className="font-display font-bold text-text-heading text-base mb-2 leading-tight">{step.title}</h3>
                <p className="text-text-muted font-body text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

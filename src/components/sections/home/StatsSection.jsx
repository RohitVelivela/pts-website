import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useScrollReveal, staggerContainer, scaleIn } from '../../../hooks/useScrollAnimation'
import { stats } from '../../../data/content'
import { images } from '../../../data/images'

export default function StatsSection() {
  const { ref, inView, animate } = useScrollReveal(0.3)

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" style={{ background: '#0A1628' }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={images.statsBg} alt="" className="w-full h-full object-cover" style={{ opacity: 0.06 }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(6,13,26,0.97) 0%, rgba(15,32,64,0.93) 100%)' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={animate}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="relative py-12 px-8 text-center group cursor-default"
            >
              {/* Top brand line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-brand group-hover:w-full transition-all duration-500" />

              <div className="font-display font-bold leading-none" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', background: 'linear-gradient(135deg, #E8231A, #ff4d45)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {inView ? (
                  <CountUp end={s.value} duration={2.2} suffix={s.suffix} />
                ) : (
                  <span>0{s.suffix}</span>
                )}
              </div>
              <div className="font-body text-sm mt-2 tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

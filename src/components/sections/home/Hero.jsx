import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
}
const item = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}


export default function Hero({ loaded }) {
  const videoRef = useRef(null)

  return (
    <section className="hero-min-h relative overflow-hidden">

      {/* ── FULL-BLEED VIDEO BACKGROUND ── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        tabIndex={-1}
        className="hero-video absolute inset-0 w-full h-full object-cover"
        style={{
          zIndex: 0,
        }}
      >
        <source src="/home page video (1).mp4" type="video/mp4" />
      </video>

      {/* ── LAYERED GRADIENT OVERLAYS ── */}
      {/* Primary: left-to-right dark tint — stronger on mobile for readability */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background: 'linear-gradient(110deg, rgba(6,13,26,0.82) 0%, rgba(6,13,26,0.62) 45%, rgba(6,13,26,0.28) 100%)',
        }}
      />
      {/* Bottom fade to blend into next section */}
      <div
        className="absolute inset-0"
        style={{ zIndex: 1, background: 'linear-gradient(to top, rgba(0,0,0,0.50) 0%, transparent 45%)' }}
      />
      {/* Top fade for navbar blend */}
      <div
        className="absolute inset-0"
        style={{ zIndex: 1, background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 22%)' }}
      />


      {/* ── MAIN CONTENT ── */}
      <div
        className="hero-min-h relative z-10 max-w-7xl mx-auto px-5 lg:px-8 flex flex-col justify-center"
        style={{
          paddingTop:    'clamp(96px, 16vw, 130px)',
          paddingBottom: 'clamp(72px, 12vw, 120px)',
        }}
      >

        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate={loaded ? 'visible' : 'hidden'}
          className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl xl:max-w-3xl"
        >
          {/* Brand logotype */}
          <motion.div variants={item} className="mb-4">
            <div
              className="font-display font-bold leading-none"
              style={{
                fontSize: 'clamp(2.8rem, 10vw, 6rem)',
                color: '#FFFFFF',
                textShadow: '0 2px 24px rgba(0,0,0,0.55)',
              }}
            >
              PINNACLE
            </div>
            <div
              className="font-display font-semibold uppercase mt-1.5"
              style={{
                fontSize: 'clamp(0.62rem, 2.6vw, 0.95rem)',
                color: '#F59E0B',
                letterSpacing: '0.24em',
                textShadow: '0 1px 8px rgba(0,0,0,0.5)',
              }}
            >
              TECHNOLOGY SERVICES
            </div>
            <div
              className="font-body italic mt-1"
              style={{
                fontSize: 'clamp(0.75rem, 2.2vw, 0.85rem)',
                color: 'rgba(255,255,255,0.50)',
                textShadow: '0 1px 6px rgba(0,0,0,0.6)',
              }}
            >
              destiny for reliability
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display font-bold text-white leading-tight mt-5 mb-4"
            style={{
              fontSize: 'clamp(1.7rem, 5.5vw, 3.2rem)',
              textShadow: '0 2px 14px rgba(0,0,0,0.6)',
            }}
          >
            Building Maximum Value
            <br />
            <span style={{ color: '#F59E0B', textShadow: '0 2px 14px rgba(0,0,0,0.4)' }}>for Over 16 Years.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="font-body leading-relaxed mb-8"
            style={{
              fontSize: 'clamp(0.88rem, 2.6vw, 1.1rem)',
              color: 'rgba(255,255,255,0.88)',
              maxWidth: '540px',
              textShadow: '0 1px 8px rgba(0,0,0,0.55)',
            }}
          >
            End-to-end Engineering &amp; IT Services for Oil &amp; Gas, Power Plants, Refineries, and critical industrial sectors — delivered from Hyderabad to the world.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-3 sm:gap-4 mb-10">
            <Link to="/services" className="btn-blue">
              Explore Services <ArrowRight size={15} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-body font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1.5px solid rgba(255,255,255,0.45)',
                color: '#fff',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.22)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'
              }}
            >
              Talk to an Expert
            </Link>
          </motion.div>

        </motion.div>
      </div>

      {/* ── BOTTOM WAVE → white page ── */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '60px', zIndex: 10 }}>
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#F8FAFD" />
        </svg>
      </div>
    </section>
  )
}

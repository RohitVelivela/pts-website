import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, TrendingUp, Layers, Grid3x3, ArrowUpRight } from 'lucide-react'
import SectionLabel from '../../ui/SectionLabel'
import { differentiators } from '../../../data/content'

const icons   = { Clock, TrendingUp, Layers, Grid3x3, ArrowUpRight }
const palette = ['#E8231A', '#1B8C3C', '#F59E0B', '#3B82F6', '#8B5CF6']

export default function WhyPTS() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-bg-page overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-5">
            <SectionLabel>Why Choose PTS</SectionLabel>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-text-heading mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            The Engineering Partner That
            <span className="text-grad-brand"> Delivers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-text-body font-body text-lg max-w-2xl mx-auto"
          >
            Five pillars that set PTS apart — from first brief to final handover.
          </motion.p>
        </div>

        {/* ── Horizontal zig-zag strip ─────────────────────────────────────────
            All 5 cards in ONE row — no blank cells.
            Between each card sits a 52 px connector column with a diagonal arrow
            that alternates ↘ ↗ ↘ ↗ to create the zig-zag reading path.
        ────────────────────────────────────────────────────────────────────── */}
        <div style={{ overflowX: 'auto', paddingBottom: 4 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'stretch',
              height: 360,
              width: '100%',
              minWidth: 680,
            }}
          >
            {differentiators.map((d, i) => {
              const color = palette[i]
              const Icon  = icons[d.icon] || Clock

              return (
                <div key={d.title}>

                  {/* ── Card ── */}
                  <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -5 }}
                    style={{
                      flex: '1 1 0',
                      height: '100%',
                      background: 'white',
                      borderRadius: 16,
                      padding: '22px 16px 20px',
                      borderTop:    `4px solid ${color}`,
                      borderRight:  `1.5px solid ${color}1a`,
                      borderBottom: `1.5px solid ${color}1a`,
                      borderLeft:   `1.5px solid ${color}1a`,
                      boxShadow: '0 4px 22px rgba(0,0,0,0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'box-shadow 0.22s, transform 0.22s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.boxShadow = `0 10px 30px rgba(0,0,0,0.11), 0 0 0 2px ${color}30`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.boxShadow = '0 4px 22px rgba(0,0,0,0.06)'
                    }}
                  >
                    {/* Ghost step number */}
                    <span
                      style={{
                        position: 'absolute',
                        bottom: -6,
                        right: 8,
                        fontSize: 86,
                        fontWeight: 900,
                        lineHeight: 1,
                        color: `${color}0d`,
                        userSelect: 'none',
                        fontFamily: 'inherit',
                        pointerEvents: 'none',
                      }}
                    >
                      {d.number}
                    </span>

                    {/* Icon badge */}
                    <div
                      style={{
                        width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                        background: `${color}12`, border: `1.5px solid ${color}28`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginBottom: 12,
                      }}
                    >
                      <Icon size={18} style={{ color }} />
                    </div>

                    {/* Step label */}
                    <span
                      className="font-display font-bold"
                      style={{ color, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}
                    >
                      {d.number}
                    </span>

                    {/* Title */}
                    <h3
                      className="font-display font-bold"
                      style={{ fontSize: 18, lineHeight: 1.3, marginBottom: 10, color }}
                    >
                      {d.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="font-body"
                      style={{ fontSize: 13, lineHeight: 1.65, color: '#475569' }}
                    >
                      {d.desc}
                    </p>
                  </motion.div>


                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

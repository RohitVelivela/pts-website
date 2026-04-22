import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      className={`card ${className}`}
      whileHover={hover ? { y: -5, boxShadow: '0 12px 30px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.05)', borderColor: 'rgba(232,35,26,0.18)' } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

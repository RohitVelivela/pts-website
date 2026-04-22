import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight, Phone } from 'lucide-react'
import { services } from '../../data/services'

const SG = "'Space Grotesk', sans-serif"

const navLinks = [
  { label: 'Home',       path: '/' },
  { label: 'About',      path: '/about' },
  { label: 'Services',   path: '/services', hasDropdown: true },
  { label: 'Industries', path: '/industries' },
  { label: 'Blog',       path: '/blog' },
  { label: 'Careers',    path: '/careers' },
  { label: 'Contact',    path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdown] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMobileOpen(false); setDropdown(false) }, [location])

  return (
    <>
      <motion.nav
        className="sticky top-0 z-[200] transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.97)' : '#FFFFFF',
          boxShadow: scrolled ? '0 2px 28px rgba(0,0,0,0.10)' : '0 1px 0 #E5E9F0',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between" style={{ height: '80px' }}>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src="/logo.png" alt="Pinnacle Technology Services" className="h-20 w-auto object-contain" />
            </Link>

            {/* ── Desktop Nav ── */}
            <div className="hidden lg:flex items-center gap-1 ml-32">
              {navLinks.map((link) => {
                const isActive = link.hasDropdown
                  ? location.pathname.startsWith('/services')
                  : location.pathname === link.path

                return link.hasDropdown ? (
                  <div key={link.label} className="relative"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <button
                      className="flex items-center gap-1.5 px-5 py-3 rounded-xl transition-all duration-200"
                      style={{
                        fontFamily: SG, fontWeight: 600, fontSize: '16px', letterSpacing: '-0.01em',
                        color: isActive ? '#E8231A' : '#1F2937',
                        background: isActive || dropdownOpen ? 'rgba(232,35,26,0.06)' : 'transparent',
                      }}
                    >
                      {link.label}
                      <ChevronDown size={15} style={{
                        transition: 'transform 0.25s ease',
                        transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        color: dropdownOpen ? '#E8231A' : '#9CA3AF',
                      }} />
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-white rounded-2xl p-5"
                          style={{ border: '1px solid #E5E9F0', boxShadow: '0 20px 60px rgba(0,0,0,0.13), 0 4px 12px rgba(0,0,0,0.06)' }}
                        >
                          {/* Dual-color accent line */}
                          <div className="h-0.5 absolute top-0 left-12 right-12 rounded-full"
                            style={{ background: 'linear-gradient(90deg, transparent, #E8231A 40%, #1B8C3C 60%, transparent)' }} />

                          <p style={{ fontFamily: SG, fontWeight: 500, fontSize: '11px', letterSpacing: '0.14em', color: '#9CA3AF', textTransform: 'uppercase' }} className="mb-3 px-1">
                            Engineering Services
                          </p>

                          <div className="grid grid-cols-3 gap-1.5">
                            {services.map((s) => (
                              <Link key={s.slug} to={`/services/${s.slug}`}
                                className="flex items-start gap-3 p-3 rounded-xl group transition-all duration-200"
                                style={{ border: '1px solid transparent' }}
                                onMouseEnter={e => { e.currentTarget.style.background = `${s.color}08`; e.currentTarget.style.borderColor = `${s.color}22` }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent' }}
                              >
                                <div className="p-2 rounded-lg flex-shrink-0 mt-0.5"
                                  style={{ background: `${s.color}10`, border: `1px solid ${s.color}18` }}>
                                  <s.icon size={13} style={{ color: s.color }} />
                                </div>
                                <div>
                                  <div className="transition-colors duration-150 group-hover:text-brand"
                                    style={{ fontFamily: SG, fontWeight: 600, fontSize: '13.5px', color: '#111827' }}>
                                    {s.title}
                                  </div>
                                  <div className="mt-0.5 line-clamp-1"
                                    style={{ fontFamily: SG, fontSize: '11.5px', color: '#9CA3AF' }}>
                                    {s.shortDesc.split('.')[0]}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>

                          <div className="mt-4 pt-3 flex items-center justify-between" style={{ borderTop: '1px solid #F3F4F6' }}>
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                              <span style={{ fontFamily: SG, fontSize: '12px', color: '#9CA3AF' }}>9 engineering service categories</span>
                            </div>
                            <Link to="/services" className="flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200"
                              style={{ fontFamily: SG, fontWeight: 700, fontSize: '13px', color: '#E8231A' }}>
                              View All Services <ArrowRight size={13} />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="relative px-5 py-3 rounded-xl transition-all duration-200"
                    style={{
                      fontFamily: SG, fontWeight: 600, fontSize: '16px', letterSpacing: '-0.01em',
                      color: isActive ? '#E8231A' : '#1F2937',
                      background: isActive ? 'rgba(232,35,26,0.06)' : 'transparent',
                    }}
                    onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color = '#E8231A'; e.currentTarget.style.background = 'rgba(232,35,26,0.05)' } }}
                    onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = '#1F2937'; e.currentTarget.style.background = 'transparent' } }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-1.5 left-5 right-5 h-0.5 rounded-full"
                        style={{ background: 'linear-gradient(90deg, #E8231A, #ff4d45)' }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Right: phone + CTA */}
            <div className="hidden lg:flex items-center gap-4 ml-auto">
              <a href="tel:+918328245609"
                className="flex items-center gap-2 transition-all duration-200"
                style={{ color: '#6B7280', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = '#E8231A'}
                onMouseLeave={e => e.currentTarget.style.color = '#6B7280'}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(27,140,60,0.09)' }}>
                  <Phone size={13} style={{ color: '#1B8C3C' }} />
                </div>
                <span style={{ fontFamily: SG, fontWeight: 600, fontSize: '14.5px' }}>+91 83282 45609</span>
              </a>
            </div>

            {/* Mobile toggle */}
            <button className="lg:hidden p-2 rounded-lg transition-colors" style={{ color: '#6B7280' }}
              onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[80px] z-[199] bg-white px-4 py-5"
            style={{ borderBottom: '1px solid #E5E9F0', boxShadow: '0 16px 40px rgba(0,0,0,0.1)' }}
          >
            <div className="flex flex-col gap-1 max-w-7xl mx-auto">
              {[...navLinks, { label: 'Contact', path: '/contact' }].map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link key={link.label} to={link.path}
                    className="px-4 py-3.5 rounded-xl transition-all duration-150 flex items-center justify-between"
                    style={{
                      fontFamily: SG, fontWeight: 600, fontSize: '17px', letterSpacing: '-0.01em',
                      color: isActive ? '#E8231A' : '#1F2937',
                      background: isActive ? 'rgba(232,35,26,0.06)' : 'transparent',
                    }}
                  >
                    {link.label}
                    {isActive && <span className="w-2 h-2 rounded-full bg-brand" />}
                  </Link>
                )
              })}
              <div className="mt-3 pt-4" style={{ borderTop: '1px solid #F3F4F6' }}>
                <div className="flex items-center gap-3 mb-4 px-1">
                  <Phone size={13} style={{ color: '#1B8C3C' }} />
                  <span style={{ fontFamily: SG, fontSize: '14px', color: '#6B7280' }}>+91 83282 45609</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight, Clock } from 'lucide-react'
import { company } from '../../data/content'
import { services } from '../../data/services'

const companyLinks = [
  { label: 'About Us',   path: '/about' },
  { label: 'Industries', path: '/industries' },
  { label: 'Blog',       path: '/blog' },
  { label: 'Careers',    path: '/careers' },
  { label: 'Contact',    path: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#ffffff', borderTop: '1px solid #E5E9F0' }}>

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-8">

        {/* Top: Brand + 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12" style={{ borderBottom: '1px solid #E5E9F0' }}>

          {/* Brand — 4 cols */}
          <div className="lg:col-span-4">
            <img src="/logo.png" alt="Pinnacle Technology Services" className="h-20 w-auto object-contain mb-6" />
            <p className="font-body text-sm leading-relaxed mb-6 text-text-muted" style={{ maxWidth: '280px' }}>
              B2B Engineering & IT Services from Hyderabad. 16+ years delivering precision to Oil & Gas, Power Plants, Refineries and more.
            </p>

            {/* Contact items */}
            <div className="space-y-3">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 font-body text-sm transition-colors group text-text-muted hover:text-brand"
              >
                <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(232,35,26,0.08)', border: '1px solid rgba(232,35,26,0.15)' }}>
                  <Mail size={13} style={{ color: '#E8231A' }} />
                </span>
                <span className="truncate">{company.email}</span>
              </a>

              <a
                href={`tel:${company.phone}`}
                className="flex items-center gap-3 font-body text-sm transition-colors text-text-muted hover:text-brand"
              >
                <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(27,140,60,0.08)', border: '1px solid rgba(27,140,60,0.15)' }}>
                  <Phone size={13} style={{ color: '#1B8C3C' }} />
                </span>
                {company.phone}
              </a>

              <div className="flex items-start gap-3 font-body text-sm text-text-muted">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.15)' }}>
                  <MapPin size={13} style={{ color: '#F59E0B' }} />
                </span>
                {company.location}
              </div>
            </div>
          </div>

          {/* Services — 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-text-heading mb-5 uppercase tracking-widest" style={{ fontSize: '13px', letterSpacing: '0.14em' }}>
              Services
            </h4>
            <ul className="space-y-2">
              {services.map(s => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="flex items-center gap-2 font-body text-sm text-text-muted transition-colors hover:text-brand"
                  >
                    <ArrowRight size={10} style={{ color: 'rgba(232,35,26,0.4)', flexShrink: 0 }} />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company — 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-text-heading mb-5 uppercase tracking-widest" style={{ fontSize: '13px', letterSpacing: '0.14em' }}>
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 font-body text-sm text-text-muted transition-colors hover:text-brand"
                  >
                    <ArrowRight size={10} style={{ color: 'rgba(232,35,26,0.4)', flexShrink: 0 }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect — 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-text-heading mb-5 uppercase tracking-widest" style={{ fontSize: '13px', letterSpacing: '0.14em' }}>
              Connect
            </h4>
            <p className="font-body text-sm leading-relaxed mb-5 text-text-muted">
              Ready to start your next engineering project? Let's build something remarkable.
            </p>
            <Link to="/contact" className="btn-blue mb-6 inline-flex" style={{ padding: '10px 22px', fontSize: '12px' }}>
              Get in Touch
            </Link>
            <div className="rounded-xl p-4" style={{ background: '#F7F8FA', border: '1px solid #E5E9F0' }}>
              <div className="flex items-center gap-2 mb-2">
                <Clock size={12} style={{ color: '#1B8C3C' }} />
                <p className="font-body text-xs uppercase tracking-widest text-text-muted">Business Hours</p>
              </div>
              <p className="font-body text-sm mb-3 text-text-body">{company.hours}</p>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                <span className="font-body text-xs font-medium" style={{ color: '#1B8C3C' }}>24/7 Emergency Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-sm text-text-muted">
            © {new Date().getFullYear()} Pinnacle Technology Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-body text-xs uppercase tracking-widest text-text-muted">Est. 1996 · Hyderabad, India</span>
            <span className="w-1 h-1 rounded-full bg-border-light" />
            <span className="font-body text-sm text-text-muted">
              Built with precision in <span style={{ color: '#E8231A' }}>India</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

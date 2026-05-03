import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, BookOpen, ArrowRight, User } from 'lucide-react'
import CTABanner from '../components/sections/home/CTABanner'
import { blogPosts } from '../data/content'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const related   = blogPosts.filter(p => p.slug !== slug).slice(0, 3)
  const toc       = post.content ? post.content.filter(s => s.heading) : []
  const accents   = ['#E8231A', '#1B8C3C', '#F59E0B']

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '72vh' }}>

        {/* Background */}
        <div className="absolute inset-0">
          {post.image
            ? <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            : <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #060D1A 0%, #0F2040 60%, #060D1A 100%)' }} />
          }
          {/* Directional overlay — heavier on the left where text lives */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(105deg, rgba(6,13,26,0.96) 0%, rgba(6,13,26,0.88) 45%, rgba(6,13,26,0.60) 100%)' }}
          />
        </div>

        {/* Content */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 flex items-center"
          style={{ minHeight: '72vh', paddingTop: '7rem', paddingBottom: '5rem' }}
        >
          <div style={{ maxWidth: '760px' }}>

            {/* Back */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-body text-sm mb-8 transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.4)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >
              <ArrowLeft size={14} /> Back to Blog
            </Link>

            {/* Category pill */}
            <div className="mb-6">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs font-body font-semibold tracking-widest uppercase"
                style={{ background: 'rgba(232,35,26,0.16)', border: '1px solid rgba(232,35,26,0.4)', color: '#ff8078' }}
              >
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-display font-bold text-white mb-7"
              style={{ fontSize: 'clamp(2.4rem, 4.8vw, 4rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
            >
              {post.title}
            </h1>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.12)', maxWidth: '48px' }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#E8231A' }} />
              <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.12)', maxWidth: '48px' }} />
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-body text-sm" style={{ color: 'rgba(255,255,255,0.48)' }}>
              <span className="flex items-center gap-2">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: 'linear-gradient(135deg,#E8231A,#C41B13)' }}
                >
                  {post.author.charAt(0)}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.62)' }}>{post.author}</span>
              </span>
              <span className="hidden sm:block w-px h-3" style={{ background: 'rgba(255,255,255,0.2)' }} />
              <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Clean wave — no white gradient fog, just the shape */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '56px' }}>
          <svg viewBox="0 0 1440 56" fill="none" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 56 L0 28 Q360 0 720 28 Q1080 56 1440 28 L1440 56 Z" fill="#EEF3FA" />
          </svg>
        </div>
      </section>

      {/* ── Article + Sidebar ── */}
      <section className="py-8 lg:py-14 bg-bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">

            {/* ── Article body ── */}
            <article style={{ background: '#fff', borderRadius: '20px', border: '1px solid #E5E9F0', overflow: 'hidden' }}>

              {/* Top accent bar */}
              <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #E8231A 0%, #1B8C3C 50%, #F59E0B 100%)' }} />

              <div className="px-5 sm:px-10 py-8 sm:py-12 lg:px-14 lg:py-14">
                {post.content ? (
                  <>
                    {post.content.map((section, i) => (
                      <div key={i} className={i > 0 ? 'mt-12 pt-10' : ''}>

                        {/* Section heading */}
                        {section.heading && (
                          <h2
                            className="font-display font-bold text-text-heading mb-5"
                            style={{ fontSize: 'clamp(1.55rem, 2.4vw, 2rem)', lineHeight: 1.25, letterSpacing: '-0.01em' }}
                          >
                            <span
                              className="inline-block w-1 rounded-sm mr-3 align-middle"
                              style={{ height: '1.1em', background: 'linear-gradient(to bottom,#E8231A,#1B8C3C)', verticalAlign: 'middle' }}
                            />
                            {section.heading}
                          </h2>
                        )}

                        {section.paragraphs.map((para, j) => {
                          const isLead = i === 0 && j === 0 && !section.heading
                          return (
                            <p
                              key={j}
                              className="font-body mb-5"
                              style={{
                                color:      isLead ? '#0F2040' : '#374151',
                                fontSize:   isLead ? '1.18rem' : '1.02rem',
                                fontWeight: isLead ? 500 : 400,
                                lineHeight: isLead ? 1.75 : 1.85,
                              }}
                            >
                              {para}
                            </p>
                          )
                        })}
                      </div>
                    ))}
                  </>
                ) : (
                  <p className="font-body text-text-body text-lg leading-relaxed">{post.excerpt}</p>
                )}

                {/* Article footer */}
                <div className="mt-12 pt-6 border-t border-border-light flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <span className="font-body text-text-muted text-xs uppercase tracking-widest">Filed under</span>
                    <span
                      className="px-3 py-1 rounded-sm text-xs font-semibold font-body uppercase tracking-wider"
                      style={{ background: 'rgba(232,35,26,0.06)', border: '1px solid rgba(232,35,26,0.15)', color: '#E8231A' }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <Link to="/contact" className="btn-primary" style={{ padding: '9px 22px', fontSize: '12px' }}>
                    Work with PTS <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="space-y-5 lg:sticky" style={{ top: '5.5rem' }}>

              {/* Table of contents */}
              {toc.length > 0 && (
                <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E5E9F0', overflow: 'hidden' }}>
                  <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg,#E8231A,#1B8C3C)' }} />
                  <div className="p-6">
                    <h3 className="font-display font-bold text-text-heading text-sm tracking-widest uppercase mb-5 flex items-center gap-2">
                      <BookOpen size={14} style={{ color: '#E8231A' }} />
                      In This Article
                    </h3>
                    <ol className="space-y-2.5">
                      {toc.map((s, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className="font-body text-xs font-bold mt-0.5 flex-shrink-0 w-5 text-right"
                            style={{ color: '#E8231A', fontVariantNumeric: 'tabular-nums' }}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="font-body text-sm text-text-muted leading-snug" style={{ color: '#4B5563' }}>
                            {s.heading}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}

              {/* Author */}
              <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E5E9F0', padding: '1.25rem 1.5rem' }}>
                <p className="font-body text-xs uppercase tracking-widest text-text-muted mb-3">Written by</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg,#E8231A,#C41B13)' }}
                  >
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-body font-semibold text-text-heading text-sm leading-tight">{post.author}</p>
                    <p className="font-body text-text-muted text-xs mt-0.5">Pinnacle Technology Services</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div
                style={{
                  borderRadius: '16px',
                  padding: '1.5rem',
                  background: 'linear-gradient(145deg, #0F2040 0%, #1E3A5F 100%)',
                  border: '1px solid rgba(232,35,26,0.25)',
                }}
              >
                <div className="brand-line mb-4" />
                <h3 className="font-display font-bold text-white text-xl mb-2 leading-snug">
                  Need Engineering Support?
                </h3>
                <p className="font-body text-sm mb-5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Discuss your project with our specialist team.
                </p>
                <Link to="/contact" className="btn-primary w-full justify-center" style={{ fontSize: '12px', padding: '10px 20px' }}>
                  Get in Touch <ArrowRight size={13} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── More from PTS ── */}
      {related.length > 0 && (
        <section className="py-16" style={{ background: '#F8FAFD' }}>
          <div className="max-w-7xl mx-auto px-5 lg:px-8">

            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-text-muted mb-2">Continue reading</p>
                <h2 className="font-display font-bold text-text-heading" style={{ fontSize: 'clamp(1.6rem,2.5vw,2.2rem)' }}>
                  More from PTS
                </h2>
              </div>
              <Link to="/blog" className="btn-secondary" style={{ fontSize: '12px', padding: '8px 20px' }}>
                All Articles <ArrowRight size={12} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rpost, i) => {
                const accent = accents[i % accents.length]
                return (
                  <Link key={rpost.id} to={`/blog/${rpost.slug}`} className="group block">
                    <div
                      style={{ background: '#fff', borderRadius: '18px', border: '1px solid #E5E9F0', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.25s ease, box-shadow 0.25s ease' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)' }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                    >
                      {rpost.image && (
                        <div style={{ height: '172px', overflow: 'hidden', position: 'relative' }}>
                          <img
                            src={rpost.image} alt={rpost.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(6,13,26,0.55) 0%, transparent 55%)' }} />
                        </div>
                      )}
                      <div style={{ height: '3px', background: accent, flexShrink: 0 }} />
                      <div className="p-5 flex flex-col flex-1">
                        <span
                          className="font-body text-xs font-semibold uppercase tracking-wider mb-2"
                          style={{ color: accent }}
                        >
                          {rpost.category}
                        </span>
                        <h3 className="font-display font-bold text-text-heading leading-snug mb-3 flex-1" style={{ fontSize: '1.05rem' }}>
                          {rpost.title}
                        </h3>
                        <p className="font-body text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: '#64748B' }}>
                          {rpost.excerpt}
                        </p>
                        <div
                          className="flex items-center gap-3 pt-3 font-body text-xs"
                          style={{ borderTop: '1px solid #E5E9F0', color: '#94A3B8' }}
                        >
                          <span className="flex items-center gap-1.5"><Calendar size={11} /> {rpost.date}</span>
                          <span className="flex items-center gap-1.5"><Clock size={11} /> {rpost.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  )
}

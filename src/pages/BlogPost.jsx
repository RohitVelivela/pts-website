import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import SectionLabel from '../components/ui/SectionLabel'
import CTABanner from '../components/sections/home/CTABanner'
import { blogPosts } from '../data/content'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A0E0D 0%, #2C1210 45%, #1C160A 100%)', minHeight: '50vh' }}>
        <div className="relative z-10 max-w-3xl mx-auto px-5 lg:px-8 flex items-center" style={{ minHeight: '38vh' }}>
          <div>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-body mb-8 transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold font-body mb-5" style={{ background: 'rgba(27,140,60,0.2)', border: '1px solid rgba(27,140,60,0.4)', color: '#4ade80' }}>
              {post.category}
            </span>
            <h1 className="font-display font-bold text-white mt-3 mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              {post.title}
            </h1>
            <div className="flex items-center gap-4 font-body text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '60px' }}>
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#F7F8FA" />
          </svg>
        </div>
      </section>

      {post.image && (
        <div className="w-full" style={{ height: '380px', overflow: 'hidden' }}>
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}

      <section className="py-16 bg-bg-section">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="card p-10">
            <p className="text-text-body font-body text-lg leading-relaxed mb-6">{post.excerpt}</p>
            <p className="text-text-body font-body leading-relaxed">
              This is a placeholder for the full article content. In a production environment, the full article body would be stored in the data file or fetched from a CMS. The PTS team regularly publishes in-depth technical articles covering engineering best practices, industry trends, and project case studies.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

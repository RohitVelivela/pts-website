export default function SectionLabel({ children, className = '', style = {} }) {
  return (
    <span className={`section-label ${className}`} style={style}>
      <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
      {children}
    </span>
  )
}

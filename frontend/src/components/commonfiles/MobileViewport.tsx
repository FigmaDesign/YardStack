interface MobileViewportProps {
  children: React.ReactNode
  isMobile?: boolean
}

export default function MobileViewport({ children, isMobile = false }: MobileViewportProps) {
  if (isMobile) {
    return (
      <div className="flex flex-col h-full w-full overflow-hidden" style={{ background: '#0d1117' }}>
        {children}
      </div>
    )
  }

  return (
    <div
      className="flex items-center justify-center h-full overflow-auto"
      style={{
        padding: 'clamp(12px, 3vh, 28px)',
        backgroundColor: '#f0f2f5',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          aspectRatio: '9 / 19.5',
          height: 'min(92vh, 900px)',
          flexShrink: 0,
          overflow: 'hidden',
          position: 'relative',
          borderRadius: 12,
          border: '1.5px solid #d1d5db',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
          background: 'white',
          margin: '2px 0',
        }}
      >
        <div style={{ height: '100%', overflow: 'hidden' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

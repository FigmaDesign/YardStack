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
        backgroundColor: '#dde3ed',
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
          borderRadius: 48,
          border: '10px solid #111827',
          boxShadow: '0 32px 80px rgba(0,0,0,0.38), 0 8px 24px rgba(0,0,0,0.18)',
          background: 'white',
          margin: '2px 0',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 126,
            height: 30,
            background: '#111827',
            borderRadius: '0 0 20px 20px',
            zIndex: 50,
          }}
        />
        <div style={{ height: '100%', overflow: 'hidden' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

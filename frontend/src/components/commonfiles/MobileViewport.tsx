interface MobileViewportProps {
  children: React.ReactNode
}

export default function MobileViewport({ children }: MobileViewportProps) {
  return (
    <div className="flex items-center justify-center h-full bg-[#dde3ed] overflow-auto py-6">
      <div
        style={{
          width: 393,
          height: 852,
          borderRadius: 50,
          border: '10px solid #111827',
          flexShrink: 0,
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 32px 80px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.2)',
          background: 'white',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 130,
            height: 32,
            background: '#111827',
            borderRadius: '0 0 22px 22px',
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

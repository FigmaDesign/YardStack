import { useRef, useState, type CSSProperties, type ElementType, type RefObject } from 'react'

export interface PrimaryTabItem {
  key: string
  label: string
  Icon: ElementType
}

interface PrimaryTabBarProps {
  tabs: PrimaryTabItem[]
  active: string
  onChange: (key: string) => void
}

function ShellBackground() {
  return (
    <svg
      viewBox="0 0 1400 128"
      preserveAspectRatio="none"
      aria-hidden
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    >
      <defs>
        <linearGradient id="primaryShellGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#081e4f" />
          <stop offset="100%" stopColor="#020b24" />
        </linearGradient>
      </defs>
      <path d="M0 128 L0 16 Q0 0 16 0 L1384 0 Q1400 0 1400 16 L1400 128 Z" fill="url(#primaryShellGrad)" />
    </svg>
  )
}

function ActiveSwiggyCurve() {
  return (
    <svg
      viewBox="0 0 106 64"
      style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 106,
        height: 64,
        zIndex: -1,
        pointerEvents: 'none',
        filter: 'drop-shadow(0 -2px 8px rgba(37,99,235,0.25))',
      }}
    >
      <defs>
        <linearGradient id="activeTabGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <path
        d="M 0 64 C 10 64 14 56 14 46 L 14 24 C 14 10 26 1 53 1 C 80 1 92 10 92 24 L 92 46 C 92 56 96 64 106 64"
        fill="url(#activeTabGrad)"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="1.5"
      />
    </svg>
  )
}

interface TabCardProps {
  tabKey: string
  label: string
  Icon: ElementType
  isActive: boolean
  idx: number
  onClick: (key: string, el: HTMLButtonElement) => void
}

function TabCard({ tabKey, label, Icon, isActive, idx, onClick }: TabCardProps) {
  const [hovered, setHovered] = useState(false)

  const inactiveBg = hovered ? '#112a63' : 'rgba(10, 29, 71, 0.6)'

  const style: CSSProperties = {
    width: 76,
    height: 64,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    paddingLeft: isActive ? 4 : 8, 
    paddingRight: 4,
    paddingBottom: 6,
    background: isActive ? 'transparent' : inactiveBg,
    borderRadius: isActive ? '0' : '16px 28px 0 0',
    border: 'none',
    borderRight: isActive ? 'none' : '1px solid rgba(255,255,255,0.06)',
    borderTop: isActive ? 'none' : '1px solid rgba(255,255,255,0.03)',
    outline: 'none',
    position: 'relative',
    cursor: 'pointer',
    WebkitTapHighlightColor: 'transparent',
    marginLeft: idx === 0 ? 0 : -14,
    zIndex: isActive ? 50 : 20 - idx,
    transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  }

  return (
    <button
      type="button"
      style={style}
      onClick={e => onClick(tabKey, e.currentTarget)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      aria-current={isActive ? 'page' : undefined}
    >
      {isActive && <ActiveSwiggyCurve />}
      
      <Icon
        size={18}
        strokeWidth={1.5}
        style={{
          color: isActive ? '#ffffff' : '#cbd5e1',
          filter: isActive ? 'drop-shadow(0 0 2px rgba(255,255,255,0.3))' : 'none',
          transition: 'color 200ms, transform 200ms',
          transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
        }}
      />
      <span
        style={{
          fontSize: '0.55rem',
          fontWeight: isActive ? 700 : 500,
          color: isActive ? '#ffffff' : '#94a3b8',
          textAlign: 'center',
          lineHeight: 1.1,
          maxWidth: 64,
          transition: 'color 200ms, transform 200ms',
          transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
        }}
      >
        {label}
      </span>
    </button>
  )
}

interface InnerProps {
  tabs: PrimaryTabItem[]
  active: string
  onTabClick: (key: string, el: HTMLButtonElement) => void
  scrollRef: RefObject<HTMLDivElement | null>
}

function Inner({ tabs, active, onTabClick, scrollRef }: InnerProps) {
  return (
    <div className="shrink-0 relative" style={{ height: 66 }}>
      <ShellBackground />
      <div
        ref={scrollRef}
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          height: '100%',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none' as CSSProperties['msOverflowStyle'],
          paddingLeft: 12,
          paddingRight: 28, 
          gap: 0,
          alignItems: 'flex-end',
        }}
      >
        {tabs.map(({ key, label, Icon }, idx) => {
          return (
            <TabCard
              key={key}
              tabKey={key}
              label={label}
              Icon={Icon}
              isActive={key === active}
              idx={idx}
              onClick={onTabClick}
            />
          )
        })}
      </div>
    </div>
  )
}

export default function PrimaryTabBar({ tabs, active, onChange }: PrimaryTabBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  function handleClick(key: string, el: HTMLButtonElement) {
    onChange(key)
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }

  return <Inner tabs={tabs} active={active} onTabClick={handleClick} scrollRef={scrollRef} />
}
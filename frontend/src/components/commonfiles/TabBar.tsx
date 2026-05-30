import { useRef, type CSSProperties, type ElementType, type RefObject } from 'react'

export interface TabItem {
  key: string
  label: string
  Icon: ElementType
  subTabs?: string[]
}

interface TabBarProps {
  tabs: TabItem[]
  active: string
  activeSubTab: string
  onChange: (key: string) => void
  onSubTabChange: (sub: string) => void
}

// ─── NavigationShellSVG ───────────────────────────────────────────────────────

function NavigationShellSVG() {
  return (
    <svg
      viewBox="0 0 1400 148"
      preserveAspectRatio="none"
      aria-hidden
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    >
      <defs>
        <linearGradient id="tabShellGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#083B8C" />
          <stop offset="100%" stopColor="#022E7D" />
        </linearGradient>
      </defs>
      <path d="M0 148 L0 44 Q0 0 44 0 L1356 0 Q1400 0 1400 44 L1400 148 Z" fill="url(#tabShellGrad)" />
    </svg>
  )
}

// ─── MainNavigationTab ────────────────────────────────────────────────────────

interface MainNavigationTabProps {
  tabKey: string
  label: string
  Icon: ElementType
  isActive: boolean
  showDivider: boolean
  onClick: (key: string, el: HTMLButtonElement) => void
}

function MainNavigationTab({ tabKey, label, Icon, isActive, showDivider, onClick }: MainNavigationTabProps) {
  const style: CSSProperties = {
    width: isActive ? 112 : 96,
    height: 128,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    borderRadius: '22px 22px 8px 8px',
    border: 'none',
    outline: 'none',
    position: 'relative',
    cursor: 'pointer',
    WebkitTapHighlightColor: 'transparent',
    background: isActive
      ? 'linear-gradient(180deg, #34E27A 0%, #167DFF 100%)'
      : '#03327F',
    borderLeft: showDivider ? '1px solid rgba(255,255,255,0.08)' : 'none',
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  }

  return (
    <button
      type="button"
      style={style}
      onClick={e => onClick(tabKey, e.currentTarget)}
      aria-current={isActive ? 'page' : undefined}
    >
      <Icon size={26} style={{ color: 'white', strokeWidth: 1.5 }} />
      <span
        style={{
          fontSize: '0.63rem',
          fontWeight: isActive ? 700 : 500,
          color: isActive ? '#ffffff' : 'rgba(255,255,255,0.9)',
          textAlign: 'center',
          lineHeight: 1.25,
          maxWidth: 88,
        }}
      >
        {label.split(' ').map((word, i, arr) => (
          <span key={i}>
            {word}
            {i < arr.length - 1 && <br />}
          </span>
        ))}
      </span>
      {isActive && (
        <div
          style={{
            position: 'absolute',
            bottom: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 44,
            height: 5,
            borderRadius: 999,
            background: 'linear-gradient(90deg, #34E27A, #4AA3FF)',
          }}
        />
      )}
    </button>
  )
}

// ─── MainNavigation ───────────────────────────────────────────────────────────

interface MainNavigationProps {
  tabs: TabItem[]
  active: string
  onTabClick: (key: string, el: HTMLButtonElement) => void
  scrollRef: RefObject<HTMLDivElement | null>
}

function MainNavigation({ tabs, active, onTabClick, scrollRef }: MainNavigationProps) {
  return (
    <div className="shrink-0 relative" style={{ height: 148 }}>
      <NavigationShellSVG />
      <div
        ref={scrollRef}
        className="relative z-10 flex h-full overflow-x-auto items-end"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 10,
          gap: 0,
        }}
      >
        {tabs.map(({ key, label, Icon }, idx) => {
          const isActive = key === active
          const prevIsActive = idx > 0 && tabs[idx - 1].key === active
          return (
            <MainNavigationTab
              key={key}
              tabKey={key}
              label={label}
              Icon={Icon}
              isActive={isActive}
              showDivider={idx > 0 && !isActive && !prevIsActive}
              onClick={onTabClick}
            />
          )
        })}
      </div>
    </div>
  )
}

// ─── SecondaryNavigationItem ──────────────────────────────────────────────────

interface SecondaryNavigationItemProps {
  label: string
  isActive: boolean
  isLast: boolean
  onSubClick: (sub: string, el: HTMLButtonElement) => void
}

function SecondaryNavigationItem({ label, isActive, isLast, onSubClick }: SecondaryNavigationItemProps) {
  return (
    <button
      type="button"
      onClick={e => onSubClick(label, e.currentTarget)}
      style={{
        height: 96,
        minWidth: 88,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 16px',
        border: 'none',
        background: 'transparent',
        borderRight: !isLast ? '1px solid rgba(26,43,85,0.12)' : 'none',
        position: 'relative',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'transparent',
        transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <span
        style={{
          fontSize: '0.72rem',
          fontWeight: isActive ? 700 : 500,
          color: '#1A2B55',
          textAlign: 'center',
          lineHeight: 1.3,
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
      {isActive && (
        <div
          style={{
            position: 'absolute',
            bottom: 12,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 32,
            height: 3,
            borderRadius: 999,
            background: 'linear-gradient(90deg, #34E27A, #4AA3FF)',
          }}
        />
      )}
    </button>
  )
}

// ─── SecondaryNavigation ──────────────────────────────────────────────────────

interface SecondaryNavigationProps {
  subTabs: string[]
  activeSubTab: string
  onSubClick: (sub: string, el: HTMLButtonElement) => void
  scrollRef: RefObject<HTMLDivElement | null>
}

function SecondaryNavigation({ subTabs, activeSubTab, onSubClick, scrollRef }: SecondaryNavigationProps) {
  if (subTabs.length === 0) return null
  return (
    <div className="shrink-0 px-3 pt-2 pb-3">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          background: '#ffffff',
          borderRadius: 22,
          boxShadow: '0 10px 28px rgba(0,0,0,0.10)',
          height: 96,
          alignItems: 'stretch',
        }}
      >
        {subTabs.map((sub, idx) => (
          <SecondaryNavigationItem
            key={sub}
            label={sub}
            isActive={sub === activeSubTab}
            isLast={idx === subTabs.length - 1}
            onSubClick={onSubClick}
          />
        ))}
      </div>
    </div>
  )
}

// ─── TabBar ───────────────────────────────────────────────────────────────────

export default function TabBar({ tabs, active, activeSubTab, onChange, onSubTabChange }: TabBarProps) {
  const mainRef = useRef<HTMLDivElement>(null)
  const subRef = useRef<HTMLDivElement>(null)

  const activeItem = tabs.find(t => t.key === active)
  const subTabs = activeItem?.subTabs ?? []

  function handleMainClick(key: string, el: HTMLButtonElement) {
    const item = tabs.find(t => t.key === key)
    onChange(key)
    if (item?.subTabs?.length) onSubTabChange(item.subTabs[0])
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }

  function handleSubClick(sub: string, el: HTMLButtonElement) {
    onSubTabChange(sub)
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }

  return (
    <div className="shrink-0" style={{ background: '#041e5c' }}>
      <MainNavigation tabs={tabs} active={active} onTabClick={handleMainClick} scrollRef={mainRef} />
      <SecondaryNavigation
        subTabs={subTabs}
        activeSubTab={activeSubTab}
        onSubClick={handleSubClick}
        scrollRef={subRef}
      />
    </div>
  )
}


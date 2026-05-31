import { useRef, useState, type CSSProperties, type ElementType, type RefObject } from 'react'

export interface SubTabItem {
  label: string
  Icon?: ElementType
}

export interface TabItem {
  key: string
  label: string
  Icon: ElementType
  subTabs?: (string | SubTabItem)[]
}

interface TabBarProps {
  tabs: TabItem[]
  active: string
  activeSubTab: string
  onChange: (key: string) => void
  onSubTabChange: (sub: string) => void
}

function normalizeSubTab(entry: string | SubTabItem): SubTabItem {
  return typeof entry === 'string' ? { label: entry } : entry
}

function NavigationShellSVG() {
  return (
    <svg
      viewBox="0 0 1400 120"
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
      <path d="M0 120 L0 28 Q0 0 28 0 L1372 0 Q1400 0 1400 28 L1400 120 Z" fill="url(#tabShellGrad)" />
    </svg>
  )
}

interface MainNavigationTabProps {
  tabKey: string
  label: string
  Icon: ElementType
  isActive: boolean
  showDivider: boolean
  onClick: (key: string, el: HTMLButtonElement) => void
}

function MainNavigationTab({ tabKey, label, Icon, isActive, showDivider, onClick }: MainNavigationTabProps) {
  const [hovered, setHovered] = useState(false)

  const bgValue = isActive
    ? 'linear-gradient(180deg, #34E27A 0%, #167DFF 100%)'
    : hovered
      ? '#0A459F'
      : '#03327F'

  const style: CSSProperties = {
    width: isActive ? 138 : 128,
    height: 108,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 16,
    borderRadius: '24px 24px 8px 8px',
    border: 'none',
    outline: 'none',
    position: 'relative',
    cursor: 'pointer',
    WebkitTapHighlightColor: 'transparent',
    background: bgValue,
    borderLeft: showDivider ? '1px solid rgba(255,255,255,0.08)' : 'none',
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  }

  return (
    <button
      type="button"
      style={style}
      onClick={e => onClick(tabKey, e.currentTarget)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-current={isActive ? 'page' : undefined}
    >
      <Icon
        size={40}
        strokeWidth={1.5}
        style={{
          color: 'white',
          filter: isActive ? 'drop-shadow(0 0 6px rgba(52,226,122,0.45))' : 'none',
        }}
      />
      <span
        style={{
          fontSize: '0.75rem',
          fontWeight: isActive ? 700 : 400,
          color: isActive ? '#ffffff' : 'rgba(255,255,255,0.9)',
          textAlign: 'center',
          lineHeight: 1.2,
          maxWidth: 110,
        }}
      >
        {label}
      </span>
      {isActive && (
        <div
          style={{
            position: 'absolute',
            bottom: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 40,
            height: 4,
            borderRadius: 999,
            background: 'linear-gradient(90deg, #34E27A, #4AA3FF)',
          }}
        />
      )}
    </button>
  )
}

interface MainNavigationProps {
  tabs: TabItem[]
  active: string
  onTabClick: (key: string, el: HTMLButtonElement) => void
  scrollRef: RefObject<HTMLDivElement | null>
}

function MainNavigation({ tabs, active, onTabClick, scrollRef }: MainNavigationProps) {
  return (
    <div className="shrink-0 relative" style={{ height: 120 }}>
      <NavigationShellSVG />
      <div
        ref={scrollRef}
        className="relative z-10 flex h-full overflow-x-auto"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingLeft: 8,
          paddingRight: 8,
          gap: 0,
          alignItems: 'flex-end',
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

interface SecondaryNavigationItemProps {
  label: string
  Icon?: ElementType
  isActive: boolean
  isFirst: boolean
  onSubClick: (sub: string, el: HTMLButtonElement) => void
}

function SecondaryNavigationItem({ label, Icon, isActive, isFirst, onSubClick }: SecondaryNavigationItemProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      type="button"
      onClick={e => onSubClick(label, e.currentTarget)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1,
        height: '100%',
        minWidth: 88,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        padding: '0 10px 16px',
        border: 'none',
        background: hovered ? 'rgba(3,50,127,0.04)' : 'transparent',
        borderLeft: !isFirst ? '1px solid rgba(26,43,85,0.1)' : 'none',
        position: 'relative',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'transparent',
        transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {Icon && (
        <Icon
          size={28}
          strokeWidth={1.75}
          style={{ color: isActive ? '#0A459F' : '#1A2B55' }}
        />
      )}
      <span
        style={{
          fontSize: '0.75rem',
          fontWeight: isActive ? 700 : 400,
          color: '#1A2B55',
          textAlign: 'center',
          lineHeight: 1.25,
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
      {isActive && (
        <div
          style={{
            position: 'absolute',
            bottom: 8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 36,
            height: 3,
            borderRadius: 999,
            background: 'linear-gradient(90deg, #34E27A, #4AA3FF)',
          }}
        />
      )}
    </button>
  )
}

interface SecondaryNavigationProps {
  subTabs: (string | SubTabItem)[]
  activeSubTab: string
  onSubClick: (sub: string, el: HTMLButtonElement) => void
  scrollRef: RefObject<HTMLDivElement | null>
}

function SecondaryNavigation({ subTabs, activeSubTab, onSubClick, scrollRef }: SecondaryNavigationProps) {
  if (subTabs.length === 0) return null
  return (
    <div className="shrink-0" style={{ padding: '0 12px', marginTop: 16, paddingBottom: 10 }}>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          background: '#ffffff',
          borderRadius: 22,
          boxShadow: '0 8px 24px rgba(0,0,0,0.07)',
          height: 96,
          alignItems: 'stretch',
        }}
      >
        {subTabs.map((entry, idx) => {
          const item = normalizeSubTab(entry)
          return (
            <SecondaryNavigationItem
              key={item.label}
              label={item.label}
              Icon={item.Icon}
              isActive={item.label === activeSubTab}
              isFirst={idx === 0}
              onSubClick={onSubClick}
            />
          )
        })}
      </div>
    </div>
  )
}

export default function TabBar({ tabs, active, activeSubTab, onChange, onSubTabChange }: TabBarProps) {
  const mainRef = useRef<HTMLDivElement>(null)
  const subRef = useRef<HTMLDivElement>(null)

  const activeItem = tabs.find(t => t.key === active)
  const subTabs = activeItem?.subTabs ?? []

  function handleMainClick(key: string, el: HTMLButtonElement) {
    const item = tabs.find(t => t.key === key)
    onChange(key)
    if (item?.subTabs?.length) {
      const first = normalizeSubTab(item.subTabs[0])
      onSubTabChange(first.label)
    }
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

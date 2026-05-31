import { useRef, type ElementType, type RefObject } from 'react'

export interface SubTabItem {
  label: string
  Icon?: ElementType
}

interface SubTabBarProps {
  subTabs: SubTabItem[]
  active: string
  onChange: (label: string) => void
  variant?: 'mobile' | 'desktop'
}

interface ItemProps {
  item: SubTabItem
  isActive: boolean
  isFirst: boolean
  onClick: (label: string, el: HTMLButtonElement) => void
  variant?: 'mobile' | 'desktop'
}

function SubTabItem({ item, isActive, isFirst, onClick, variant = 'mobile' }: ItemProps) {
  const { label, Icon } = item
  const isDesktop = variant === 'desktop'

  return (
    <button
      type="button"
      onClick={e => onClick(label, e.currentTarget)}
      className={`relative flex ${isDesktop ? 'h-full min-w-[120px] flex-row items-center px-4 py-3 gap-2' : 'h-full min-w-[64px] flex-[1_0_auto] flex-col items-center justify-center gap-[5px] pb-2'} cursor-pointer border-none transition-all duration-200 [-webkit-tap-highlight-color:transparent] active:scale-[0.95] active:opacity-80 ${
        !isFirst ? 'border-l border-solid border-gray-100' : ''
      } ${!isActive ? 'hover:bg-[#0f1e3d]/[0.03]' : ''}`}
    >
      {Icon && (
        <Icon
          size={18}
          strokeWidth={1.5}
          className={`transition-colors duration-200 ${
            isActive ? 'text-emerald-500' : 'text-gray-400'
          } ${isDesktop ? 'inline-block' : ''}`}
        />
      )}
      
      <span
        className={`whitespace-nowrap ${isDesktop ? 'text-[1.1rem] leading-[1.1] font-semibold text-[#0a2a6e]' : 'text-center text-[0.55rem] leading-[1.1]'} transition-all duration-200 ${
          isActive ? (isDesktop ? 'text-[#0a2a6e]' : 'font-bold text-[#0a2a6e]') : 'font-medium text-gray-500'
        }`}
      >
        {label}
      </span>

      {isActive && (
        <div className="absolute bottom-[3px] left-1/2 h-[3px] w-5 -translate-x-1/2 rounded-[8px] bg-gradient-to-r from-emerald-500 to-blue-500" />
      )}
    </button>
  )
}

interface InnerProps {
  subTabs: SubTabItem[]
  active: string
  onItemClick: (label: string, el: HTMLButtonElement) => void
  scrollRef: RefObject<HTMLDivElement | null>
  variant?: 'mobile' | 'desktop'
}

function Inner({ subTabs, active, onItemClick, scrollRef, variant = 'mobile' }: InnerProps) {
  if (subTabs.length === 0) return null

  return (
    <div className="w-full shrink-0 overflow-hidden">
      <div
        ref={scrollRef}
        className={`flex w-full items-stretch overflow-x-auto bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${variant === 'desktop' ? 'h-[60px]' : 'h-[50px]'}`}
      >
        {subTabs.map((item, idx) => (
          <SubTabItem
            key={item.label}
            item={item}
            isActive={item.label === active}
            isFirst={idx === 0}
            onClick={onItemClick}
            variant={variant}
          />
        ))}
      </div>
    </div>
  )
}

export default function SubTabBar({ subTabs, active, onChange, variant = 'mobile' }: SubTabBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  function handleClick(label: string, el: HTMLButtonElement) {
    onChange(label)
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }

  return (
    <Inner 
      subTabs={subTabs} 
      active={active} 
      onItemClick={handleClick} 
      scrollRef={scrollRef}
      // @ts-ignore pass variant through props
      {...{ variant }}
    />
  )
}
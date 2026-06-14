import { memo, useRef, useState, useEffect } from 'react'
import TuneIcon from '@mui/icons-material/Tune'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { FILTER_TABS } from './data'

interface PodcastTabsProps {
  active: string
  onChange: (key: string) => void
}

const PodcastTabs = memo(function PodcastTabs({ active, onChange }: PodcastTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1)
    }
  }

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current
      const activeElement = container.querySelector('[data-active="true"]') as HTMLElement
      
      if (activeElement) {
        const scrollLeft = activeElement.offsetLeft - container.clientWidth / 2 + activeElement.clientWidth / 2
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
      }
    }
  }, [active])

  useEffect(() => {
    handleScroll()
    window.addEventListener('resize', handleScroll)
    return () => window.removeEventListener('resize', handleScroll)
  }, [])

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -150 : 150
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative w-full bg-[var(--color-bg-surface)] group/container flex items-center">
      <div 
        className={`absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[var(--color-bg-surface)] from-50% to-transparent pointer-events-none flex items-center justify-start pl-1 transition-opacity duration-300 z-20 ${
          canScrollLeft ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <button
          type="button"
          onClick={() => scrollByAmount('left')}
          className="pointer-events-auto w-7 h-7 rounded-full bg-[var(--color-bg-surface)] shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-[var(--color-border-default)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[#6B21A8] hover:border-[#6B21A8]/30 hover:shadow-md hover:scale-110 transition-all duration-300 active:scale-95 cursor-pointer outline-none"
        >
          <ChevronLeftIcon sx={{ fontSize: 18 }} />
        </button>
      </div>

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex items-center gap-2 px-1 py-1 overflow-x-auto w-full scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative z-10"
      >
        {FILTER_TABS.map((tab) => {
          const isActive = active === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              data-active={isActive}
              onClick={() => onChange(tab.key)}
              className={`shrink-0 px-4 py-1.5 rounded-[8px] text-[11px] md:text-xs font-semibold transition-all duration-300 ease-out active:scale-95 border border-solid cursor-pointer outline-none ${
                isActive
                  ? 'bg-[#6B21A8] text-white border-[#6B21A8] shadow-[0_4px_12px_rgba(107,33,168,0.25)] hover:shadow-[0_6px_16px_rgba(107,33,168,0.35)] -translate-y-[1px]'
                  : 'bg-[var(--color-bg-muted)] text-[var(--color-text-secondary)] border-[var(--color-border-default)] hover:brightness-95 hover:text-[var(--color-text-primary)] hover:shadow-sm hover:-translate-y-[1px]'
              }`}
              style={!isActive && tab.color ? {
                backgroundColor: `${tab.color}15`,
                borderColor: `${tab.color}40`,
                color: tab.color
              } : undefined}
            >
              {tab.label}
            </button>
          )
        })}

        <div className="w-px h-5 bg-[var(--color-border-default)] shrink-0 mx-1" aria-hidden="true" />

        <button
          type="button"
          className="group shrink-0 w-8 h-8 rounded-[8px] border border-solid border-[var(--color-border-default)] flex items-center justify-center bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-muted)] hover:text-[#6B21A8] hover:border-[#6B21A8]/30 transition-all duration-300 active:scale-95 cursor-pointer outline-none hover:-translate-y-[1px] hover:shadow-sm"
          aria-label="Filter options"
        >
          <TuneIcon sx={{ fontSize: 16 }} className="transition-transform duration-300 ease-out group-hover:rotate-90" />
        </button>
      </div>

      <div 
        className={`absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[var(--color-bg-surface)] from-50% to-transparent pointer-events-none flex items-center justify-end pr-1 transition-opacity duration-300 z-20 ${
          canScrollRight ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <button
          type="button"
          onClick={() => scrollByAmount('right')}
          className="pointer-events-auto w-7 h-7 rounded-full bg-[var(--color-bg-surface)] shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-[var(--color-border-default)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[#6B21A8] hover:border-[#6B21A8]/30 hover:shadow-md hover:scale-110 transition-all duration-300 active:scale-95 cursor-pointer outline-none"
        >
          <ChevronRightIcon sx={{ fontSize: 18 }} />
        </button>
      </div>
    </div>
  )
})

export default PodcastTabs;
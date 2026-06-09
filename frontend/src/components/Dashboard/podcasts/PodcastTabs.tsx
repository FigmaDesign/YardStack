import React, { memo, useRef, useState, useEffect } from 'react'
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

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('resize', handleScroll)
    return () => window.removeEventListener('resize', handleScroll)
  }, [])

  return (
    <div className="relative w-full bg-[#FFFFFF]">
      
      {/* Left Scroll Gradient & Arrow */}
      <div 
        className={`absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/90 to-transparent pointer-events-none flex items-center justify-start pl-2 transition-opacity duration-300 z-10 ${
          canScrollLeft ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <button
          type="button"
          onClick={() => scrollByAmount('left')}
          className="pointer-events-auto w-7 h-7 rounded-full bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-[#E5E7EB] flex items-center justify-center text-[#4B5563] hover:text-[#1A1A2E] hover:bg-[#F3F4F6] transition-all active:scale-95 cursor-pointer outline-none"
        >
          <ChevronLeftIcon sx={{ fontSize: 18 }} />
        </button>
      </div>

      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex items-center gap-1.5 px-4 py-2.5 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {FILTER_TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => onChange(tab.key)}
            className={`shrink-0 px-3.5 py-1.5 rounded-[8px] text-[13px] font-semibold transition-all duration-200 active:scale-95 border-none cursor-pointer outline-none ${
              active === tab.key
                ? 'bg-[#6B21A8] text-[#FFFFFF] shadow-[0_2px_12px_rgba(107,33,168,0.3)]'
                : 'bg-[#F3F4F6] text-[#4B5563] hover:bg-[#E5E7EB] hover:text-[#1A1A2E]'
            }`}
          >
            {tab.label}
          </button>
        ))}

        <div className="w-px h-5 bg-[#E5E7EB] shrink-0 mx-1" aria-hidden="true" />

        <button
          type="button"
          className="shrink-0 w-9 h-9 rounded-[8px] flex items-center justify-center bg-[#F3F4F6] text-[#4B5563] hover:bg-[#E5E7EB] hover:text-[#1A1A2E] transition-all duration-200 active:scale-95 border-none cursor-pointer outline-none"
          aria-label="Filter options"
        >
          <TuneIcon sx={{ fontSize: 18 }} />
        </button>
      </div>

      <div 
        className={`absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FFFFFF] via-[#FFFFFF]/90 to-transparent pointer-events-none flex items-center justify-end pr-2 transition-opacity duration-300 z-10 ${
          canScrollRight ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <button
          type="button"
          onClick={() => scrollByAmount('right')}
          className="pointer-events-auto w-7 h-7 rounded-full bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-[#E5E7EB] flex items-center justify-center text-[#4B5563] hover:text-[#1A1A2E] hover:bg-[#F3F4F6] transition-all active:scale-95 cursor-pointer outline-none"
        >
          <ChevronRightIcon sx={{ fontSize: 18 }} />
        </button>
      </div>
      
    </div>
  )
})

export default PodcastTabs
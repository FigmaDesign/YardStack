import { useState, useCallback, memo } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import CloseIcon from '@mui/icons-material/Close'
import VerifiedIcon from '@mui/icons-material/Verified'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import ActivityTabs from './ActivityTabs'
import { ACTIVITY_ITEMS, type ActivityItem } from './data'

interface ActivityCardProps {
  item: ActivityItem
}

const ActivityCard = memo(function ActivityCard({ item }: ActivityCardProps) {
  return (
    <div 
      className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-5 mb-4 rounded-2xl mx-4 transition-all duration-300 shadow-sm hover:shadow-md border border-[#E5E7EB] hover:border-[var(--color-brand-magenta)]/30"
      style={{ backgroundColor: item.cardBg || '#FFFFFF' }}
    >
      {/* Left Section: Logo & Details */}
      <div className="flex items-center gap-4 w-full md:w-auto overflow-hidden">
        {item.logoImg ? (
          <img 
            src={item.logoImg} 
            alt={item.company} 
            className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-sm shrink-0" 
          />
        ) : (
          <div 
            className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shrink-0 shadow-sm"
            style={{ backgroundColor: item.logoBg, color: item.logoColor }}
          >
            <span 
              className="text-center font-bold text-[11px] md:text-xs leading-tight whitespace-pre-wrap tracking-wide" 
              style={{ color: item.logoColor }}
            >
              {item.logoText}
            </span>
          </div>
        )}
        
        <div className="flex flex-col min-w-0 pr-2">
          <div className="flex items-center gap-1.5">
            <span className="text-[13px] md:text-sm font-bold text-[var(--color-text-primary)] truncate">
              {item.company}
            </span>
            {item.verified && <VerifiedIcon sx={{ fontSize: 16 }} className="text-[#3B82F6] shrink-0" />}
          </div>
          <h3 className="text-[15px] md:text-base font-extrabold text-[var(--color-text-primary)] mt-0.5 leading-tight truncate">
            {item.title}
          </h3>
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-2">
            <span 
              className="px-2.5 py-1 rounded-md text-[10px] md:text-[11px] font-bold tracking-wide uppercase shrink-0"
              style={{ backgroundColor: item.tagBg, color: item.tagColor }}
            >
              {item.tag}
            </span>
            <span className="text-[12px] md:text-[13px] font-medium text-[var(--color-text-secondary)] truncate">
              {item.detail}
            </span>
          </div>
        </div>
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-2 md:gap-6 shrink-0 mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-[var(--color-border-default)] md:pl-6">
        
        {/* Secondary Actions (Save & Hide) */}
        <div className="flex items-center gap-4 md:gap-6">
          <button className="group flex flex-col items-center gap-1 text-[var(--color-text-secondary)] hover:text-[var(--color-brand-purple)] transition-colors focus:outline-none">
            <BookmarkBorderIcon sx={{ fontSize: 22 }} className="group-active:scale-90 transition-transform" />
            <span className="text-[10px] font-semibold">Save</span>
          </button>
          <button className="group flex flex-col items-center gap-1 text-[var(--color-text-secondary)] hover:text-red-500 transition-colors focus:outline-none">
            <div className="w-[22px] h-[22px] rounded-full border-2 border-current flex items-center justify-center group-active:scale-90 transition-transform">
              <CloseIcon sx={{ fontSize: 14 }} strokeWidth={2} />
            </div>
            <span className="text-[10px] font-semibold whitespace-nowrap">Ignore</span>
          </button>
        </div>

        {/* Primary Action (View) */}
        <button className="flex items-center gap-1 px-4 py-2 ml-2 md:ml-0 rounded-full text-[var(--color-brand-magenta)] font-bold text-[13px] transition-all hover:bg-[var(--color-brand-magenta)]/10 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-magenta)]/40">
          View <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
        </button>
        
      </div>
    </div>
  )
})

export default function ActivityBoard() {
  const [activeFilter, setActiveFilter] = useState('all')

  const handleFilterChange = useCallback((key: string) => {
    setActiveFilter(key)
  }, [])

  return (
    <div className="flex-1 w-full h-full overflow-y-auto scroll-smooth bg-[#F3F4F6] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="sticky top-0 z-20 bg-[#F3F4F6]/95 backdrop-blur-md pb-2 pt-1">
        <ActivityTabs active={activeFilter} onChange={handleFilterChange} />
      </div>
      <div className="max-w-4xl mx-auto w-full pt-2 pb-8">
        {ACTIVITY_ITEMS.map((item) => (
          <ActivityCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
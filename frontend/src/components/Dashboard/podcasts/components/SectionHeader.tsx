import { ChevronRight } from 'lucide-react'

interface SectionHeaderProps {
  title: string
  onViewAll?: () => void
}

export default function SectionHeader({ title, onViewAll }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 font-['Outfit',sans-serif]">
      <h3 className="text-[18px] sm:text-[22px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1f1633] to-[#422082] tracking-tight drop-shadow-sm leading-tight">
        {title}
      </h3>
      
      {onViewAll && (
        <button
          type="button"
          onClick={onViewAll}
          aria-label={`View all ${title}`}
          className="group flex items-center gap-1 px-3 py-1.5 rounded-[8px] text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.04em] text-[#6a5fc1] hover:text-[#422082] hover:bg-[#6a5fc1]/10 active:scale-[0.96] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6a5fc1]/50 cursor-pointer"
        >
          View all
          <ChevronRight 
            size={16} 
            strokeWidth={2.5} 
            className="group-hover:translate-x-1 transition-transform duration-300" 
            aria-hidden="true" 
          />
        </button>
      )}
    </div>
  )
}
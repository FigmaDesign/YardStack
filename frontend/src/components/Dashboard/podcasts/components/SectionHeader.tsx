import { memo } from 'react'
import { ChevronRight } from 'lucide-react'

interface SectionHeaderProps {
  title: string
  onViewAll?: () => void
}

export default memo(function SectionHeader({ title, onViewAll }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3">
      <h3 className="text-[0.95rem] sm:text-[1.05rem] font-extrabold text-[#0f172a] tracking-tight">
        {title}
      </h3>
      {onViewAll && (
        <button
          type="button"
          onClick={onViewAll}
          className="flex items-center gap-0.5 text-[0.7rem] sm:text-[0.75rem] font-semibold text-emerald-600 hover:text-emerald-700 transition-colors bg-transparent border-none cursor-pointer group"
        >
          View all
          <ChevronRight size={14} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true" />
        </button>
      )}
    </div>
  )
})
import { Search } from 'lucide-react'

interface PageHeaderProps {
  title: string
  subtitle: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6 font-['Outfit',sans-serif]">
      <div className="min-w-0 pr-4 space-y-1.5">
        <h1 className="text-[24px] sm:text-[32px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1f1633] to-[#422082] tracking-tight leading-[1.15] drop-shadow-sm">
          {title}
        </h1>
        <p className="text-[13px] sm:text-[15px] text-[#79628c] font-medium truncate tracking-wide">
          {subtitle}
        </p>
      </div>
      
      <button
        type="button"
        aria-label="Search and filter"
        className="group flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-[10px] bg-white border border-[#cfcfdb] hover:border-[#6a5fc1]/40 hover:bg-gradient-to-b hover:from-white hover:to-[#f9fafb] shadow-sm hover:shadow-[0_6px_20px_rgba(106,95,193,0.12)] active:scale-[0.96] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6a5fc1]/50 hover:-translate-y-0.5 cursor-pointer"
      >
        <div className="relative">
          <Search 
            size={16} 
            strokeWidth={2.5} 
            className="text-[#79628c] group-hover:text-[#6a5fc1] transition-colors duration-300 relative z-10" 
            aria-hidden="true" 
          />
          <div 
            className="absolute inset-0 bg-[#6a5fc1] blur-[6px] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full" 
            aria-hidden="true"
          />
        </div>
        <span className="text-[12px] font-bold text-[#1f1633] group-hover:text-[#422082] transition-colors duration-300 hidden sm:inline uppercase tracking-[0.04em]">
          Filter
        </span>
      </button>
    </div>
  )
}
import { Play, MoreVertical } from 'lucide-react'

interface Episode {
  id: string
  title: string
  speaker: string
  role: string
  duration: string
  thumbnailColor: string
  thumbnailLabel: string
}

interface EpisodeCardProps {
  episode: Episode
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <article className="group flex items-center justify-between p-2.5 sm:p-3.5 gap-3 sm:gap-4 bg-gradient-to-b from-white to-[#f9fafb] rounded-[14px] border border-[#cfcfdb] hover:border-[#6a5fc1]/30 shadow-sm hover:shadow-[0_8px_24px_rgba(106,95,193,0.12)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 cursor-pointer w-full font-['Outfit',sans-serif] motion-reduce:transition-none motion-reduce:transform-none">
      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
        <div
          className="relative overflow-hidden shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-[10px] flex items-center justify-center p-1 sm:p-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
          style={{ backgroundColor: episode.thumbnailColor }}
        >
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
          
          <span className="relative z-10 text-[8px] sm:text-[10px] font-extrabold text-white leading-tight text-center whitespace-pre-wrap uppercase tracking-[0.04em] transition-opacity duration-300 group-hover:opacity-0 drop-shadow-sm motion-reduce:transition-none">
            {episode.thumbnailLabel}
          </span>
          
          <div className="absolute inset-0 bg-[#422082]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[3px] motion-reduce:transition-none z-20">
            <Play size={18} fill="currentColor" className="text-white sm:w-8 sm:h-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]" aria-hidden="true" />
          </div>
        </div>

        <div className="flex-1 min-w-0 flex flex-col justify-center py-0.5">
          <h3 className="text-[14px] sm:text-[16px] font-extrabold text-[#1f1633] leading-snug truncate transition-colors duration-300 group-hover:text-[#422082] motion-reduce:transition-none">
            {episode.title}
          </h3>
          <p className="text-[12px] sm:text-[13px] text-[#79628c] font-medium mt-0.5 sm:mt-1 truncate tracking-wide">
            <span className="text-[#1f1633] font-bold">{episode.speaker}</span>
            <span className="mx-1.5 text-[#cfcfdb]">•</span>
            {episode.role}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 shrink-0 pl-1 sm:pl-2">
        <span className="hidden sm:block text-[12px] sm:text-[13px] font-bold text-[#79628c] tabular-nums shrink-0 tracking-wide">
          {episode.duration}
        </span>

        <button
          type="button"
          aria-label="More options"
          className="shrink-0 flex items-center justify-center p-1.5 rounded-[8px] text-[#79628c] hover:bg-[#6a5fc1]/10 hover:text-[#422082] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6a5fc1]/50 motion-reduce:transition-none"
        >
          <MoreVertical size={16} className="sm:w-5 sm:h-5" aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}
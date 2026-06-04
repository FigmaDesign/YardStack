import { memo } from 'react'
import { Play, MoreVertical, Mic2 } from 'lucide-react'
import type { Episode } from './data'

interface EpisodeCardProps {
  episode: Episode
}

export default memo(function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <article className="flex items-center justify-between px-3 sm:px-2 py-2 sm:py-1.5 border-b border-slate-100/80 hover:bg-slate-50/50 transition-colors duration-200 group">
      
      {/* Column 1: Info (Thumbnail + Text) */}
      <div className="flex items-center gap-2 sm:gap-2 min-w-0 pr-2 sm:pr-1.5">
        <div
          className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-md shrink-0 flex flex-col items-center justify-center relative overflow-hidden shadow-sm"
          style={{ backgroundColor: episode.thumbnailColor }}
        >
          <span className="text-[0.38rem] sm:text-[0.45rem] font-extrabold text-white leading-tight text-center tracking-wider px-1">
            {episode.thumbnailLabel}
          </span>
          {episode.thumbnailSubLabel && (
            <span className="text-[0.31rem] sm:text-[0.35rem] font-bold text-white/80 leading-tight text-center tracking-wide mt-0.5">
              {episode.thumbnailSubLabel}
            </span>
          )}
          <Mic2
            size={7}
            className="absolute bottom-1 right-1 text-white/40 sm:hidden block"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>

        <div className="min-w-0">
          <h3 className="text-[0.6rem] sm:text-[0.8rem] font-bold text-[#0f172a] leading-snug sm:leading-tight line-clamp-2">
            {episode.title}
          </h3>
          <p className="text-[0.5rem] sm:text-[0.65rem] text-slate-500 mt-0.5 truncate">
            {episode.speaker}
            <span className="mx-1 text-slate-300">•</span>
            <span className="text-slate-400">{episode.role}</span>
          </p>
        </div>
      </div>

      {/* Column 2: Actions */}
      <div className="flex items-center gap-1 sm:gap-0.5 shrink-0">
        <button
          type="button"
          aria-label={`Play ${episode.title}`}
          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-emerald-500 flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-white active:scale-90 transition-all duration-200"
        >
          <Play size={8} className="ml-0.5 sm:w-3 sm:h-3" fill="currentColor" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="More options"
          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
        >
          <MoreVertical size={10} className="sm:w-3.5 sm:h-3.5" aria-hidden="true" />
        </button>
      </div>
      
    </article>
  )
})
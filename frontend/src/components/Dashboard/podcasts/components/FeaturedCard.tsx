import { memo } from 'react'
import { Play, Star, TrendingUp } from 'lucide-react'

interface FeaturedCardProps {
  badge: string
  badgeVariant?: 'star' | 'trending'
  title: string
  subtitle?: string
  speaker: string
  role: string
  duration: string
  plays: string
  extraContent?: React.ReactNode
}

export default memo(function FeaturedCard({
  badge,
  badgeVariant = 'star',
  title,
  subtitle,
  speaker,
  role,
  duration,
  plays,
  extraContent,
}: FeaturedCardProps) {
  const BadgeIcon = badgeVariant === 'trending' ? TrendingUp : Star

  return (
    <div className="relative w-full rounded-lg overflow-hidden min-h-[180px] sm:min-h-[220px]">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e42] via-[#0f2a52] to-[#1a3a6b]" />
        
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 800 300" preserveAspectRatio="xMaxYMax slice" className="absolute right-0 bottom-0 w-[70%] h-full">
            <defs>
              <linearGradient id="skylineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M400 300 L400 120 L420 120 L420 80 L440 80 L440 120 L460 120 L460 60 L470 50 L480 60 L480 120 L500 120 L500 100 L520 100 L520 140 L540 140 L540 90 L550 85 L560 90 L560 140 L580 140 L580 110 L600 110 L600 70 L610 65 L620 70 L620 110 L640 110 L640 130 L660 130 L660 100 L680 100 L680 150 L700 150 L700 120 L720 120 L720 160 L740 160 L740 130 L760 130 L760 170 L780 170 L780 140 L800 140 L800 300 Z"
              fill="url(#skylineGrad)" />
          </svg>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-[40%] opacity-15">
          <svg viewBox="0 0 400 100" preserveAspectRatio="none" className="w-full h-full">
            <polyline points="0,80 40,70 80,75 120,50 160,55 200,30 240,40 280,20 320,35 360,15 400,25"
              fill="none" stroke="#10b981" strokeWidth="2" />
            <polyline points="0,90 40,85 80,88 120,70 160,75 200,55 240,65 280,45 320,60 360,40 400,50"
              fill="none" stroke="#60a5fa" strokeWidth="1.5" opacity="0.6" />
          </svg>
        </div>
        
        <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col justify-between p-4 sm:p-5 h-full min-h-[180px] sm:min-h-[220px]">
        <div className="flex">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-wider bg-emerald-500/90 text-white backdrop-blur-sm shadow-sm shadow-emerald-500/20">
            <BadgeIcon size={12} strokeWidth={2.5} aria-hidden="true" />
            {badge}
          </span>
        </div>

        <div className="mt-auto space-y-2.5">
          <div>
            <h2 className="text-[1.25rem] sm:text-[1.4rem] font-extrabold text-white leading-tight tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-[0.8rem] text-white/70 mt-1 leading-snug max-w-[320px]">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-[0.6rem] font-bold text-white shadow-sm">
              {speaker.split(' ').map(w => w[0]).join('')}
            </div>
            <div>
              <p className="text-[0.75rem] font-semibold text-white leading-none">{speaker}</p>
              <p className="text-[0.65rem] text-white/60 mt-0.5">{role}</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              aria-label="Play episode"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md shadow-black/20 hover:scale-105 active:scale-95 transition-transform"
            >
              <Play size={14} fill="#0f172a" stroke="#0f172a" className="ml-0.5" aria-hidden="true" />
            </button>
            <span className="text-[0.75rem] font-semibold text-white">{duration}</span>
            <span className="text-white/40 text-[0.75rem]">•</span>
            <span className="text-[0.75rem] font-medium text-white/70">{plays}</span>
          </div>

          {extraContent}
        </div>
      </div>
    </div>
  )
})
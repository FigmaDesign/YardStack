import React from 'react'
import { Play, Star, TrendingUp, Clock } from 'lucide-react'
import podcastBg from '../Images/Podcast_bg.png'

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

export default function FeaturedCard({
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
    <div 
      className="group relative w-full rounded-[20px] overflow-hidden min-h-[240px] sm:min-h-[300px] shadow-[0_8px_32px_rgba(21,15,35,0.6)] hover:shadow-[0_16px_48px_rgba(106,95,193,0.25)] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer focus-within:ring-2 focus-within:ring-[#c2ef4e]/60 focus-within:outline-none font-['Outfit',sans-serif] border border-white/5 hover:border-white/10 bg-[#150f23]"
      tabIndex={0}
    >
      {/* Dynamic Background Image */}
      <img
        src={podcastBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
      />
      
      {/* Layered Premium Gradients for Depth */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#150f23]/70 via-[#1f1633]/50 to-[#150f23] pointer-events-none transition-opacity duration-500"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-tr from-[#422082]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] pointer-events-none rounded-[20px]" 
        aria-hidden="true" 
      />

      <div className="relative z-10 flex flex-col justify-between p-6 sm:p-8 h-full min-h-[240px] sm:min-h-[300px]">
        {/* Glowing Badge */}
        <div className="flex">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-[10px] font-extrabold uppercase tracking-[0.03em] bg-[#c2ef4e] text-[#150f23] shadow-[0_4px_16px_rgba(194,239,78,0.25)] transition-transform duration-300 group-hover:-translate-y-0.5">
            <BadgeIcon size={14} strokeWidth={2.5} aria-hidden="true" />
            {badge}
          </span>
        </div>

        {/* Content Area */}
        <div className="mt-auto space-y-5">
          <div className="space-y-1.5">
            <h2 className="text-[24px] sm:text-[32px] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#cfcfdb] leading-[1.15] tracking-tight drop-shadow-md">
              {title}
            </h2>
            {subtitle && (
              <p className="text-[14px] sm:text-[15px] text-[#bdb8c0] leading-snug max-w-[90%] font-medium drop-shadow-sm">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3.5">
            {/* Gradient Avatar */}
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#422082] to-[#6a5fc1] border border-white/10 flex items-center justify-center text-[14px] font-bold text-white shadow-[0_4px_12px_rgba(66,32,130,0.4)]">
              {speaker.split(' ').map(w => w[0]).join('')}
            </div>
            <div className="flex flex-col">
              <p className="text-[14px] font-bold text-white leading-tight tracking-wide drop-shadow-sm">{speaker}</p>
              <p className="text-[12px] font-medium text-[#79628c] mt-0.5">{role}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            {/* Glassmorphic Play Button transitioning to Brand Color */}
            <button
              type="button"
              aria-label="Play episode"
              className="relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-[#c2ef4e] group-hover:border-[#c2ef4e] flex items-center justify-center shadow-[0_8px_24px_rgba(21,15,35,0.5)] group-hover:shadow-[0_0_24px_rgba(194,239,78,0.4)] active:scale-95 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c2ef4e]/60 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500" aria-hidden="true" />
              <Play 
                size={20} 
                className="ml-1 text-white group-hover:text-[#150f23] transition-colors duration-500 relative z-10" 
                fill="currentColor" 
                aria-hidden="true" 
              />
            </button>
            
            <div className="flex items-center gap-2.5 bg-[#1f1633]/40 backdrop-blur-sm py-1.5 px-3 rounded-[8px] border border-white/5">
              <Clock size={14} className="text-[#6a5fc1]" strokeWidth={2.5} aria-hidden="true" />
              <span className="text-[13px] font-bold text-white tracking-wide">{duration}</span>
              <span className="text-[#79628c] text-[10px]">•</span>
              <span className="text-[13px] font-medium text-[#bdb8c0]">{plays}</span>
            </div>
          </div>

          {extraContent && (
            <div className="pt-3 border-t border-white/10 mt-4">
              {extraContent}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
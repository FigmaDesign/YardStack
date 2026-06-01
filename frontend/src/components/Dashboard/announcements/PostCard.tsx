import { useState, memo } from 'react'
import { ClipboardList, Briefcase, Handshake, MapPin, Bookmark, ArrowRight, BadgeCheck } from 'lucide-react'
import type { Post, PostType } from './data'

const TYPE_CONFIG: Record<PostType, { label: string; Icon: React.ElementType; badgeClass: string; textClass: string }> = {
  requirement: {
    label: 'REQUIREMENT',
    Icon: ClipboardList,
    badgeClass: 'bg-green-50 border-green-200 text-green-700',
    textClass: 'text-green-700',
  },
  jobPost: {
    label: 'JOB POST',
    Icon: Briefcase,
    badgeClass: 'bg-blue-50 border-blue-200 text-blue-700',
    textClass: 'text-blue-700',
  },
  vendorRequirement: {
    label: 'VENDOR REQUIREMENT',
    Icon: Handshake,
    badgeClass: 'bg-amber-50 border-amber-200 text-amber-700',
    textClass: 'text-amber-700',
  },
}

interface PostCardProps {
  post: Post
}

const PostCard = memo(function PostCard({ post }: PostCardProps) {
  const [saved, setSaved] = useState(post.saved)
  const cfg = TYPE_CONFIG[post.type]

  return (
    <article className="flex items-start gap-4 px-5 py-4 border-b border-[#eef0f3] bg-white hover:bg-[#f9fafb] transition-colors duration-100 group">
      {/* Type badge */}
      <div
        className={`shrink-0 flex flex-col items-center justify-center rounded-lg w-14 h-14 gap-1 border ${cfg.badgeClass}`}
        aria-hidden="true"
      >
        <cfg.Icon size={20} strokeWidth={1.8} />
        <span className={`text-[0.45rem] font-bold tracking-wide leading-none text-center px-1 ${cfg.textClass}`}>
          {cfg.label}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-[0.88rem] font-bold text-[#0f1e3d] leading-snug truncate group-hover:text-[#16a34a] transition-colors duration-100">
          {post.title}
        </h3>

        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-[0.75rem] font-semibold text-[#374151] truncate">{post.company}</span>
          {post.verified && (
            <BadgeCheck size={13} className="text-[#16a34a] shrink-0" aria-label="Verified" />
          )}
        </div>

        <p className="text-[0.73rem] text-[#6b7280] mt-1 leading-relaxed line-clamp-1">{post.description}</p>

        <div className="flex flex-wrap items-center gap-1.5 mt-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-0.5 rounded-full text-[0.65rem] font-semibold bg-[#f1f5f9] text-[#475569] border border-[#e2e8f0]"
            >
              {tag}
            </span>
          ))}
          {post.location && (
            <span className="inline-flex items-center gap-0.5 text-[0.65rem] text-[#9199a8]">
              <MapPin size={10} aria-hidden="true" />
              {post.location}
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="shrink-0 flex flex-col items-end justify-between gap-3 self-stretch">
        <span className="text-[0.68rem] text-[#9199a8] whitespace-nowrap">{post.timeAgo}</span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSaved((s) => !s)}
            aria-label={saved ? 'Remove bookmark' : 'Bookmark this post'}
            className={[
              'w-7 h-7 rounded-md border flex items-center justify-center transition-colors duration-150',
              saved
                ? 'bg-[#f0fdf4] border-[#bbf7d0] text-[#16a34a]'
                : 'bg-white border-[#eef0f3] text-[#9199a8] hover:text-[#374151] hover:border-[#d1d5db]',
            ].join(' ')}
          >
            <Bookmark size={12} fill={saved ? 'currentColor' : 'none'} />
          </button>

          <button
            aria-label={`View details for ${post.title}`}
            className="flex items-center gap-1 px-3 py-1.5 rounded-md border border-[#eef0f3] bg-white text-[0.72rem] font-semibold text-[#374151] hover:bg-[#16a34a] hover:text-white hover:border-[#16a34a] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a]"
          >
            View Details
            <ArrowRight size={11} aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  )
})

export default PostCard

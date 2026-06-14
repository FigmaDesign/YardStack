import { useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { COURSES, LEARN_TABS } from './data'

export default function Learn() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredCourses = activeFilter === 'all'
    ? COURSES
    : COURSES.filter(c => c.difficulty.toLowerCase() === activeFilter) // Just a mock filter logic

  return (
    <div className="flex-1 w-full h-full overflow-y-auto bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="w-full pt-1 pb-2">
        <section className="px-3 md:px-5 max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <h1 className="text-[16px] font-extrabold text-[var(--color-text-primary)]">All Courses</h1>
              <button className="text-[10px] font-bold text-[var(--color-brand-purple)] hover:text-[var(--color-brand-purple-mid)] transition-colors">
                View all
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-b border-gray-100 mb-4">
            {LEARN_TABS.map((tab) => {
              const isActive = activeFilter === tab.key
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`flex items-center justify-center px-3 py-1.5 rounded-[8px] text-[9px] font-bold whitespace-nowrap transition-colors shadow-sm ${
                    isActive 
                      ? 'bg-[var(--color-brand-purple)] text-white border border-transparent' 
                      : 'bg-white border border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Course List */}
          <div className="flex flex-col gap-3">
            {filteredCourses.map((course) => {
              // Color-coding difficulty using brand colors to avoid green
              const badgeColors = {
                Beginner: 'bg-[var(--color-accent-teal)]/10 text-[var(--color-accent-teal)] border-[var(--color-accent-teal)]/20',
                Intermediate: 'bg-[var(--color-brand-magenta)]/10 text-[var(--color-brand-magenta)] border-[var(--color-brand-magenta)]/20',
                Advanced: 'bg-[var(--color-brand-purple)]/10 text-[var(--color-brand-purple)] border-[var(--color-brand-purple)]/20'
              }

              return (
                <div 
                  key={course.id}
                  className="flex items-stretch gap-3 p-2 bg-white border border-[var(--color-border-default)] rounded-xl hover:border-[var(--color-brand-magenta)]/30 transition-colors shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
                >
                  {/* Left: Image */}
                  <div className="relative w-[110px] h-[75px] sm:w-[140px] sm:h-[95px] rounded-lg overflow-hidden shrink-0 shadow-sm">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1 left-1 bg-black/70 backdrop-blur-sm text-white text-[7px] font-bold px-1.5 py-0.5 rounded flex items-center shadow-sm">
                      {course.lessons} Lessons
                    </div>
                  </div>

                  {/* Right: Details */}
                  <div className="flex-1 min-w-0 flex flex-col py-0.5 relative">
                    <button className="absolute top-0 right-0 text-[var(--color-text-secondary)] hover:text-[var(--color-brand-magenta)] transition-colors p-0.5 rounded-full hover:bg-[var(--color-brand-magenta)]/5">
                      <BookmarkBorderIcon sx={{ fontSize: 14 }} />
                    </button>

                    <div className="pr-6">
                      {course.isFeatured && (
                        <div className="text-[7px] font-extrabold text-[var(--color-brand-purple)] uppercase tracking-wider mb-0.5">
                          FEATURED
                        </div>
                      )}
                      <h3 className="font-bold text-[var(--color-text-primary)] text-[11px] leading-tight line-clamp-1 mb-0.5">
                        {course.title}
                      </h3>
                      <p className="text-[8px] text-[var(--color-text-secondary)] leading-snug line-clamp-2 pr-2">
                        {course.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-2 flex items-end justify-between w-full">
                      {/* Progress */}
                      <div className="flex flex-col gap-1 w-24">
                        <span className="text-[7px] font-bold text-[var(--color-brand-purple)]">
                          {course.progress}% Complete
                        </span>
                        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[var(--color-brand-purple)] rounded-full transition-all duration-500 ease-out" 
                            style={{ width: `${course.progress}%` }} 
                          />
                        </div>
                      </div>

                      {/* Meta (Duration & Difficulty) */}
                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <div className="flex items-center text-[var(--color-text-secondary)] text-[8px] font-medium">
                          <AccessTimeIcon sx={{ fontSize: 10 }} className="mr-0.5 opacity-70" />
                          {course.duration}
                        </div>
                        <div className={`px-2 py-0.5 rounded-[4px] text-[7px] font-bold border ${badgeColors[course.difficulty]}`}>
                          {course.difficulty}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}

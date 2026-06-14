import { useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { COURSES, LEARN_TABS } from './data'

const BADGE_COLORS = {
  Beginner: 'bg-[var(--color-accent-teal)]/10 text-[var(--color-accent-teal)] border-[var(--color-accent-teal)]/20',
  Intermediate: 'bg-[var(--color-brand-magenta)]/10 text-[var(--color-brand-magenta)] border-[var(--color-brand-magenta)]/20',
  Advanced: 'bg-[var(--color-brand-purple)]/10 text-[var(--color-brand-purple)] border-[var(--color-brand-purple)]/20'
}

export default function Learn() {
  const [activeFilter, setActiveFilter] = useState('all')
  const filteredCourses = activeFilter === 'all'
    ? COURSES
    : COURSES.filter(c => c.category === activeFilter)

  return (
    <div className="flex-1 w-full h-full overflow-y-auto bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="w-full">
        <section className="px-2 md:px-4 max-w-3xl mx-auto">
          
          <div className="flex gap-1 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] mb-2 mt-1">
            {LEARN_TABS.map((tab) => {
              const isActive = activeFilter === tab.key
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`flex items-center justify-center px-2 py-1 rounded-[6px] text-[9px] font-bold whitespace-nowrap transition-colors shadow-sm ${
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

          <div className="flex flex-col gap-1.5">
            {filteredCourses.map((course) => (
              <div 
                key={course.id}
                className="flex items-stretch gap-2 p-1.5 bg-white border border-[var(--color-border-default)] rounded-xl hover:border-[var(--color-brand-magenta)]/30 transition-colors shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
              >
                <div className="relative w-[100px] h-[65px] sm:w-[130px] sm:h-[85px] rounded-lg overflow-hidden shrink-0 shadow-sm">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 left-1 bg-black/70 backdrop-blur-sm text-white text-[7px] font-bold px-1.5 py-0.5 rounded flex items-center shadow-sm">
                    {course.lessons} Lessons
                  </div>
                </div>

                <div className="flex-1 min-w-0 flex flex-col relative">
                  <button className="absolute -top-0.5 -right-0.5 text-[var(--color-text-secondary)] hover:text-[var(--color-brand-magenta)] transition-colors p-0.5 rounded-full hover:bg-[var(--color-brand-magenta)]/5">
                    <BookmarkBorderIcon sx={{ fontSize: 14 }} />
                  </button>

                  <div className="pr-5">
                    {course.isFeatured && (
                      <div className="text-[7px] font-extrabold text-[var(--color-brand-purple)] uppercase tracking-wider mb-0.5">
                        FEATURED
                      </div>
                    )}
                    <h3 className="font-bold text-[var(--color-text-primary)] text-[11px] leading-tight line-clamp-1 mb-0">
                      {course.title}
                    </h3>
                  </div>

                  <div className="mt-auto pt-1 flex items-end justify-between w-full">
                    <div className="flex flex-col gap-0.5 w-24">
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

                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <div className="flex items-center text-[var(--color-text-secondary)] text-[8px] font-medium">
                        <AccessTimeIcon sx={{ fontSize: 10 }} className="mr-0.5 opacity-70" />
                        {course.duration}
                      </div>
                      <div className={`px-2 py-0.5 rounded-[4px] text-[7px] font-bold border ${BADGE_COLORS[course.difficulty]}`}>
                        {course.difficulty}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
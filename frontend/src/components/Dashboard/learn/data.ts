export interface LearnTab {
  key: string
  label: string
}

export const LEARN_TABS: LearnTab[] = [
  { key: 'all', label: 'All' },
  { key: 'real-estate', label: 'Real Estate' },
  { key: 'construction', label: 'Construction' },
  { key: 'business', label: 'Business' },
  { key: 'marketing', label: 'Marketing' },
  { key: 'finance', label: 'Finance' },
]

export interface Course {
  id: string
  title: string
  description: string
  lessons: number
  duration: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  progress: number
  image: string
  isFeatured?: boolean
}

export const COURSES: Course[] = [
  {
    id: 'c-1',
    title: 'Real Estate Fundamentals',
    description: 'Learn the basics of real estate, property types, and market dynamics.',
    lessons: 12,
    duration: '3h 45m',
    difficulty: 'Intermediate',
    progress: 75,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80',
    isFeatured: true,
  },
  {
    id: 'c-2',
    title: 'Construction Management Essentials',
    description: 'Master planning, scheduling, budgeting and managing construction projects.',
    lessons: 15,
    duration: '4h 20m',
    difficulty: 'Intermediate',
    progress: 40,
    image: 'https://images.unsplash.com/photo-1541888087525-074699d7486f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'c-3',
    title: 'Building Design & Planning',
    description: 'Understand architectural planning, space optimization and design principles.',
    lessons: 10,
    duration: '2h 30m',
    difficulty: 'Beginner',
    progress: 20,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'c-4',
    title: 'Real Estate Investment Strategies',
    description: 'Explore investment options, risk analysis and maximizing ROI.',
    lessons: 14,
    duration: '3h 15m',
    difficulty: 'Advanced',
    progress: 60,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'c-5',
    title: 'Sales & Negotiation Skills',
    description: 'Improve your communication, negotiation and closing skills in real estate.',
    lessons: 8,
    duration: '2h 10m',
    difficulty: 'Beginner',
    progress: 30,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=400&q=80',
  }
]

export default {} as const

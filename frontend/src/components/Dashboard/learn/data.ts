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
  { key: 'technology', label: 'Technology' },
  { key: 'design', label: 'Design' },
]

export interface Course {
  id: string
  title: string
  description: string
  category: string
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
    category: 'real-estate',
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
    category: 'construction',
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
    category: 'design',
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
    category: 'real-estate',
    lessons: 14,
    duration: '3h 15m',
    difficulty: 'Advanced',
    progress: 60,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'c-5',
    title: 'Sales & Negotiation Skills',
    description: 'Improve your communication, negotiation and closing skills in business.',
    category: 'business',
    lessons: 8,
    duration: '2h 10m',
    difficulty: 'Beginner',
    progress: 30,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'c-6',
    title: 'Digital Marketing for Property',
    description: 'Leverage social media, SEO, and paid ads to generate highly qualified leads.',
    category: 'marketing',
    lessons: 18,
    duration: '5h 00m',
    difficulty: 'Intermediate',
    progress: 10,
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=400&q=80',
    isFeatured: true,
  },
  {
    id: 'c-7',
    title: 'Property Valuation & Finance',
    description: 'Learn how to accurately value properties and secure funding for developments.',
    category: 'finance',
    lessons: 22,
    duration: '6h 15m',
    difficulty: 'Advanced',
    progress: 0,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'c-8',
    title: 'Smart Home Technology Trends',
    description: 'Discover the latest IoT devices and automation systems for modern properties.',
    category: 'technology',
    lessons: 6,
    duration: '1h 45m',
    difficulty: 'Beginner',
    progress: 100,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'c-9',
    title: 'Corporate Finance Basics',
    description: 'A comprehensive guide to financial statements, accounting, and corporate modeling.',
    category: 'finance',
    lessons: 11,
    duration: '4h 00m',
    difficulty: 'Intermediate',
    progress: 50,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'c-10',
    title: 'Commercial Construction Regulations',
    description: 'Navigate zoning laws, building codes, and safety standards for commercial builds.',
    category: 'construction',
    lessons: 9,
    duration: '2h 50m',
    difficulty: 'Advanced',
    progress: 5,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356f27?auto=format&fit=crop&w=400&q=80',
  }
]
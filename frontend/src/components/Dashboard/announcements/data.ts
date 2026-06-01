export type PostType = 'requirement' | 'jobPost' | 'vendorRequirement'

export const ANNOUNCEMENT_TABS = [
  'All Posts',
  'Builder Requirements',
  'Job Posts',
  'Vendor Requirements',
  'Updates',
] as const

export type AnnouncementTab = (typeof ANNOUNCEMENT_TABS)[number]

export const TAB_POST_TYPE_MAP: Record<AnnouncementTab, PostType | null> = {
  'All Posts': null,
  'Builder Requirements': 'requirement',
  'Job Posts': 'jobPost',
  'Vendor Requirements': 'vendorRequirement',
  'Updates': null,
}

export interface Post {
  id: number
  type: PostType
  title: string
  company: string
  verified: boolean
  description: string
  tags: string[]
  location?: string
  timeAgo: string
  saved: boolean
}

export const POSTS: Post[] = [
  {
    id: 1,
    type: 'requirement',
    title: 'Looking for RCC Work – 10 Floor Residential Project',
    company: 'Omkar Constructions',
    verified: true,
    description: 'Structural work for residential project in Hyderabad.',
    tags: ['RCC', 'Residential', '10 Floors+'],
    location: 'Hyderabad',
    timeAgo: '2h ago',
    saved: false,
  },
  {
    id: 2,
    type: 'jobPost',
    title: 'Project Manager – Civil Construction',
    company: 'Pragati Builders',
    verified: true,
    description: 'We are hiring an experienced Project Manager for ongoing residential projects.',
    tags: ['Full Time', 'Hyderabad', '5+ Yrs Exp'],
    timeAgo: '4h ago',
    saved: false,
  },
  {
    id: 3,
    type: 'vendorRequirement',
    title: 'Looking for Tiles Supplier – Premium Quality',
    company: 'Sree Balaji Developers',
    verified: true,
    description: 'Require premium quality tiles for our upcoming villa project.',
    tags: ['Tiles', 'Supply', 'Bulk Order'],
    location: 'Hyderabad',
    timeAgo: '6h ago',
    saved: false,
  },
  {
    id: 4,
    type: 'jobPost',
    title: 'Site Engineer – Civil',
    company: 'Urban Infratech',
    verified: true,
    description: 'Looking for Site Engineer with good knowledge in execution and billing.',
    tags: ['Full Time', 'Hyderabad', '2-4 Yrs Exp'],
    timeAgo: '8h ago',
    saved: false,
  },
  {
    id: 5,
    type: 'requirement',
    title: 'Interior Work – 3BHK Apartments',
    company: 'Vasavi Infra Projects',
    verified: true,
    description: 'Interior work requirement for 50 units of 3BHK apartments.',
    tags: ['Interiors', 'Residential', '50 Units'],
    location: 'Hyderabad',
    timeAgo: '10h ago',
    saved: false,
  },
  {
    id: 6,
    type: 'vendorRequirement',
    title: 'Steel & TMT Bars Required – Bulk',
    company: 'Greenfield Constructions',
    verified: false,
    description: 'Require TMT steel bars in bulk for ongoing high-rise project.',
    tags: ['Steel', 'TMT', 'Bulk Order'],
    location: 'Hyderabad',
    timeAgo: '12h ago',
    saved: false,
  },
  {
    id: 7,
    type: 'jobPost',
    title: 'AutoCAD Draftsman – Immediate Joining',
    company: 'Apex Design Studio',
    verified: true,
    description: 'Looking for an experienced AutoCAD draftsman for architectural drawings.',
    tags: ['Full Time', 'Hyderabad', '1-3 Yrs Exp'],
    timeAgo: '1d ago',
    saved: false,
  },
  {
    id: 8,
    type: 'requirement',
    title: 'Waterproofing Work – Basement & Terrace',
    company: 'Milestone Infracon',
    verified: true,
    description: 'Waterproofing work needed for basement and terrace of a G+4 residential building.',
    tags: ['Waterproofing', 'Residential', 'G+4'],
    location: 'Hyderabad',
    timeAgo: '1d ago',
    saved: false,
  },
  {
    id: 9,
    type: 'vendorRequirement',
    title: 'Cement Supply – OPC 53 Grade',
    company: 'Shree Ram Developers',
    verified: false,
    description: 'Need regular cement supply for township project – minimum 500 bags/week.',
    tags: ['Cement', 'OPC 53', 'Township'],
    location: 'Hyderabad',
    timeAgo: '2d ago',
    saved: false,
  },
  {
    id: 10,
    type: 'jobPost',
    title: 'Quantity Surveyor – Infrastructure Projects',
    company: 'NCC Limited',
    verified: true,
    description: 'Hiring a Quantity Surveyor with experience in infrastructure and road projects.',
    tags: ['Full Time', 'Hyderabad', '3-6 Yrs Exp'],
    timeAgo: '2d ago',
    saved: false,
  },
]

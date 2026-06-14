export interface DirectoryTab {
  key: string
  label: string
}

export const DIRECTORY_TABS: DirectoryTab[] = [
  { key: 'all', label: 'All' },
  { key: 'builders', label: 'Builders' },
  { key: 'developers', label: 'Developers' },
  { key: 'contractors', label: 'Contractors' },
  { key: 'agents', label: 'Agents' },
  { key: 'offices', label: 'Offices' },
]

export interface Builder {
  id: string
  name: string
  category: string
  location: string
  verified?: boolean
  logoBg: string
  logoColor: string
  logoText: string
  isFeatured?: boolean
  isRecentlyJoined?: boolean
}

export const BUILDERS: Builder[] = [
  {
    id: 'b-1',
    name: 'Srikara Constructions',
    category: 'Residential - Commercial',
    location: 'Hyderabad',
    verified: true,
    logoBg: '#133E2B',
    logoColor: '#F59E0B',
    logoText: 'SRIKARA',
    isFeatured: true,
  },
  {
    id: 'b-2',
    name: 'Vaishnavi Builders',
    category: 'Residential - Villas',
    location: 'Hyderabad',
    verified: true,
    logoBg: '#1E293B',
    logoColor: '#F59E0B',
    logoText: 'V',
    isFeatured: true,
  },
  {
    id: 'b-3',
    name: 'Prime Builders',
    category: 'Commercial - Infra',
    location: 'Hyderabad',
    verified: true,
    logoBg: '#F8FAFC',
    logoColor: '#3B82F6',
    logoText: 'PRIME',
    isFeatured: true,
  },
  {
    id: 'b-4',
    name: 'Alpha Builders',
    category: 'Residential - Commercial',
    location: 'Hyderabad',
    logoBg: '#0F766E',
    logoColor: '#FFFFFF',
    logoText: 'A',
    isRecentlyJoined: true,
  },
  {
    id: 'b-5',
    name: 'Sumadhura Developers',
    category: 'Residential - Villas',
    location: 'Bangalore',
    verified: true,
    logoBg: '#1E3A8A',
    logoColor: '#FBBF24',
    logoText: 'SD',
    isRecentlyJoined: true,
  },
  {
    id: 'b-6',
    name: 'Fortune Infra',
    category: 'Commercial - Industrial',
    location: 'Hyderabad',
    logoBg: '#FFFBEB',
    logoColor: '#F97316',
    logoText: 'F',
    isRecentlyJoined: true,
  },
  {
    id: 'b-7',
    name: 'Prestige Group',
    category: 'Premium Residential - Commercial',
    location: 'Bangalore',
    verified: true,
    logoBg: '#000000',
    logoColor: '#EAB308',
    logoText: 'PRESTIGE',
    isFeatured: true,
  },
  {
    id: 'b-8',
    name: 'DLF Limited',
    category: 'Commercial - Townships',
    location: 'Gurgaon',
    verified: true,
    logoBg: '#1D4ED8',
    logoColor: '#FFFFFF',
    logoText: 'DLF',
    isFeatured: true,
  },
  {
    id: 'b-9',
    name: 'Lodha Group',
    category: 'Luxury Residential',
    location: 'Mumbai',
    verified: true,
    logoBg: '#7F1D1D',
    logoColor: '#FCA5A5',
    logoText: 'LODHA',
    isFeatured: true,
  },
  {
    id: 'b-10',
    name: 'Godrej Properties',
    category: 'Residential - Mixed Use',
    location: 'Mumbai',
    verified: true,
    logoBg: '#166534',
    logoColor: '#FFFFFF',
    logoText: 'GODREJ',
  },
  {
    id: 'b-11',
    name: 'Aparna Constructions',
    category: 'Residential - Gated Communities',
    location: 'Hyderabad',
    verified: true,
    logoBg: '#831843',
    logoColor: '#FBCFE8',
    logoText: 'APARNA',
    isFeatured: true,
  },
  {
    id: 'b-12',
    name: 'Casagrand',
    category: 'Residential - Apartments',
    location: 'Chennai',
    logoBg: '#4C1D95',
    logoColor: '#EDE9FE',
    logoText: 'CG',
    isRecentlyJoined: true,
  },
  {
    id: 'b-13',
    name: 'Sobha Developers',
    category: 'Luxury Villas - Apartments',
    location: 'Bangalore',
    verified: true,
    logoBg: '#B45309',
    logoColor: '#FEF3C7',
    logoText: 'SOBHA',
    isFeatured: true,
  },
  {
    id: 'b-14',
    name: 'Kolte-Patil',
    category: 'Residential - Townships',
    location: 'Pune',
    logoBg: '#3F6212',
    logoColor: '#ECFCCB',
    logoText: 'KP',
    isRecentlyJoined: true,
  },
  {
    id: 'b-15',
    name: 'Brigade Group',
    category: 'Commercial - Residential',
    location: 'Bangalore',
    verified: true,
    logoBg: '#312E81',
    logoColor: '#E0E7FF',
    logoText: 'BRIGADE',
  }
]

export default {} as const
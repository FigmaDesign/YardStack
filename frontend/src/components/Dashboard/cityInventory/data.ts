export interface CityInventoryTab {
  key: string
  label: string
}

export const CITY_INVENTORY_TABS: CityInventoryTab[] = [
  { key: 'overview', label: 'Overview' },
  { key: 'properties', label: 'Properties' },
  { key: 'stats', label: 'Stats' },
]

export interface Property {
  id: string
  name: string
  location: string
  type: string
  area: string
  status: string
  statusDetail: string
  price: string
  pricePerSqft: string
  image: string
  isFeatured?: boolean
  statusColor: 'brand' | 'warning'
}

export const PROPERTIES: Property[] = [
  {
    id: 'p-1',
    name: 'Prestige Beverly Hills',
    location: 'Gachibowli, Hyderabad',
    type: '3 BHK Apartment',
    area: '1860 sq.ft',
    status: 'Ready to Move',
    statusDetail: 'OC Received',
    price: '₹ 1.25 Cr',
    pricePerSqft: '₹ 6,720 / sq.ft',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
    isFeatured: true,
    statusColor: 'brand'
  },
  {
    id: 'p-2',
    name: 'My Home Avatar',
    location: 'Tellapur, Hyderabad',
    type: '2 BHK Apartment',
    area: '1295 sq.ft',
    status: 'Under Construction',
    statusDetail: 'Poss. Dec 2025',
    price: '₹ 85 L',
    pricePerSqft: '₹ 6,560 / sq.ft',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=400&q=80',
    statusColor: 'warning'
  },
  {
    id: 'p-3',
    name: 'Aparna Zenon',
    location: 'Nallagandla, Hyderabad',
    type: '3 BHK Apartment',
    area: '1680 sq.ft',
    status: 'Under Construction',
    statusDetail: 'Poss. Jun 2026',
    price: '₹ 1.10 Cr',
    pricePerSqft: '₹ 6,550 / sq.ft',
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=400&q=80',
    statusColor: 'warning'
  },
  {
    id: 'p-4',
    name: 'Hallmark 5A County',
    location: 'Kokapet, Hyderabad',
    type: '4 BHK Villa',
    area: '3200 sq.ft',
    status: 'Ready to Move',
    statusDetail: 'OC Received',
    price: '₹ 2.40 Cr',
    pricePerSqft: '₹ 7,500 / sq.ft',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80',
    statusColor: 'brand'
  }
]

export default {} as const

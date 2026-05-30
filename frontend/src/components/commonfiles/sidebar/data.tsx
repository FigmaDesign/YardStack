import type React from 'react'
import {
  LayoutDashboard,
  Building2,
  Users,
  UserCheck,
  BarChart3,
  TrendingUp,
  CreditCard,
  CalendarDays,
  MapPin,
  Phone,
  Megaphone,
  FileBarChart,
  Settings,
} from 'lucide-react'

export type NavKey =
  | 'dashboard'
  | 'properties'
  | 'customers'
  | 'agents'
  | 'analytics'
  | 'revenue'
  | 'payments'
  | 'bookings'
  | 'sitevisits'
  | 'crm'
  | 'marketing'
  | 'reports'
  | 'settings'

export interface NavItem {
  key: NavKey
  label: string
  Icon: React.ElementType
  hasArrow?: boolean
  subTabs?: string[]
}

export const NAV_ITEMS: NavItem[] = [
  { key: 'dashboard',  label: 'Dashboard',      Icon: LayoutDashboard, subTabs: ['Overview', 'Insights', 'Trends'] },
  { key: 'properties', label: 'Properties',      Icon: Building2, hasArrow: true, subTabs: ['All Properties', 'Residential', 'Commercial', 'Villa', 'Plots'] },
  { key: 'customers',  label: 'Customers',       Icon: Users, hasArrow: true, subTabs: ['All Customers', 'Buyers', 'Sellers', 'Investors'] },
  { key: 'agents',     label: 'Agents',          Icon: UserCheck, subTabs: ['All Agents', 'Active', 'Pending'] },
  { key: 'analytics',  label: 'Sales Analytics', Icon: BarChart3, subTabs: ['Performance', 'Funnel', 'Conversion', 'Revenue Split'] },
  { key: 'revenue',    label: 'Revenue',         Icon: TrendingUp, subTabs: ['Summary', 'Monthly', 'Projections'] },
  { key: 'payments',   label: 'Payments',        Icon: CreditCard, subTabs: ['Received', 'Pending', 'Overdue'] },
  { key: 'bookings',   label: 'Bookings',        Icon: CalendarDays, subTabs: ['Upcoming', 'Completed', 'Cancelled'] },
  { key: 'sitevisits', label: 'Site Visits',     Icon: MapPin, subTabs: ['Scheduled', 'Completed', 'Missed'] },
  { key: 'crm',        label: 'CRM',             Icon: Phone, subTabs: ['Pipeline', 'Follow-ups', 'Contacts'] },
  { key: 'marketing',  label: 'Marketing',       Icon: Megaphone, subTabs: ['Campaigns', 'Leads', 'Social'] },
  { key: 'reports',    label: 'Reports',         Icon: FileBarChart, subTabs: ['Weekly', 'Monthly', 'Custom'] },
  { key: 'settings',   label: 'Settings',        Icon: Settings, hasArrow: true, subTabs: ['General', 'Security', 'Notifications', 'Billing'] },
]

import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ApartmentIcon from '@mui/icons-material/Apartment'
import PeopleIcon from '@mui/icons-material/People'
import PersonIcon from '@mui/icons-material/Person'
import BarChartIcon from '@mui/icons-material/BarChart'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import EventNoteIcon from '@mui/icons-material/EventNote'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import CampaignIcon from '@mui/icons-material/Campaign'
import AssessmentIcon from '@mui/icons-material/Assessment'
import SettingsIcon from '@mui/icons-material/Settings'

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
}

export const NAV_ITEMS: NavItem[] = [
  { key: 'dashboard',  label: 'Dashboard',      Icon: DashboardIcon },
  { key: 'properties', label: 'Properties',      Icon: ApartmentIcon, hasArrow: true },
  { key: 'customers',  label: 'Customers',       Icon: PeopleIcon, hasArrow: true },
  { key: 'agents',     label: 'Agents',          Icon: PersonIcon },
  { key: 'analytics',  label: 'Sales Analytics', Icon: BarChartIcon },
  { key: 'revenue',    label: 'Revenue',         Icon: CurrencyRupeeIcon },
  { key: 'payments',   label: 'Payments',        Icon: CreditCardIcon },
  { key: 'bookings',   label: 'Bookings',        Icon: EventNoteIcon },
  { key: 'sitevisits', label: 'Site Visits',     Icon: LocationOnIcon },
  { key: 'crm',        label: 'CRM',             Icon: ConnectWithoutContactIcon },
  { key: 'marketing',  label: 'Marketing',       Icon: CampaignIcon },
  { key: 'reports',    label: 'Reports',         Icon: AssessmentIcon },
  { key: 'settings',   label: 'Settings',        Icon: SettingsIcon, hasArrow: true },
]

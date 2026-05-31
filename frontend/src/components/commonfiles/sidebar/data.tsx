import type React from 'react'
import {
  Megaphone,
  Mic2,
  BookOpen,
  Film,
  Landmark,
  LayoutGrid,
  CalendarDays,
  BarChart3,
  Settings,
  Home,
  Users,
  PlusSquare,
  SlidersHorizontal,
  Bookmark,
} from 'lucide-react'

export const COMMON_SUBTABS = [
  { label: 'Home',   Icon: Home },
  { label: 'Leads',  Icon: Users },
  { label: 'Post',   Icon: PlusSquare },
  { label: 'Manage', Icon: SlidersHorizontal },
  { label: 'Saved',  Icon: Bookmark },
]

export type NavKey =
  | 'announcements'
  | 'podcasts'
  | 'learn'
  | 'videoVault'
  | 'cityInventory'
  | 'showcase'
  | 'events'
  | 'analytics'
  | 'settings'

export interface SubTabItem {
  label: string
  Icon: React.ElementType
}

export interface NavItem {
  key: NavKey
  label: string
  Icon: React.ElementType
  hasArrow?: boolean
  subTabs?: SubTabItem[]
}

export const NAV_ITEMS: NavItem[] = [
  { key: 'announcements', label: 'Announcement Board', Icon: Megaphone,   subTabs: COMMON_SUBTABS },
  { key: 'podcasts',      label: 'Podcasts',           Icon: Mic2,        subTabs: COMMON_SUBTABS },
  { key: 'learn',         label: 'Learn',              Icon: BookOpen,    subTabs: COMMON_SUBTABS },
  { key: 'videoVault',    label: 'Video Vault',        Icon: Film,        subTabs: COMMON_SUBTABS },
  { key: 'cityInventory', label: 'City Inventory',     Icon: Landmark,    subTabs: COMMON_SUBTABS },
  { key: 'showcase',      label: 'Showcase',           Icon: LayoutGrid,  subTabs: COMMON_SUBTABS },
  { key: 'events',        label: 'Events',             Icon: CalendarDays,subTabs: COMMON_SUBTABS },
  { key: 'analytics',     label: 'Analytics',          Icon: BarChart3,   subTabs: COMMON_SUBTABS },
  { key: 'settings',      label: 'Settings',           Icon: Settings,    hasArrow: true, subTabs: COMMON_SUBTABS },
]

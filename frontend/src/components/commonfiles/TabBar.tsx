import { useCallback, useMemo, type ElementType } from 'react'
import PrimaryTabBar, { type PrimaryTabItem } from './TabBar/PrimaryTabBar'
import SubTabBar, { type SubTabItem } from './TabBar/SubTabBar'

export type { PrimaryTabItem, SubTabItem }

export interface TabItem {
  key: string
  label: string
  Icon: ElementType
  subTabs?: SubTabItem[]
}

interface TabBarProps {
  tabs: TabItem[]
  active: string
  activeSubTab: string
  onChange: (key: string) => void
  onSubTabChange: (sub: string) => void
}

export default function TabBar({
  tabs,
  active,
  activeSubTab,
  onChange,
  onSubTabChange,
}: TabBarProps) {
  const activeItem = useMemo(() => tabs.find((t) => t.key === active), [tabs, active])
  const subTabs = useMemo(() => activeItem?.subTabs ?? [], [activeItem])

  const handleMainChange = useCallback(
    (key: string) => {
      onChange(key)
      const item = tabs.find((t) => t.key === key)
      if (item?.subTabs?.length) {
        onSubTabChange(item.subTabs[0].label)
      }
    },
    [tabs, onChange, onSubTabChange]
  )

  return (
    <nav 
      aria-label="Section Navigation" 
      className="flex flex-col w-full shrink-0 bg-[#041e5c]"
    >
      <PrimaryTabBar
        tabs={tabs}
        active={active}
        onChange={handleMainChange}
      />
      <SubTabBar
        subTabs={subTabs}
        active={activeSubTab}
        onChange={onSubTabChange}
      />
    </nav>
  )
}
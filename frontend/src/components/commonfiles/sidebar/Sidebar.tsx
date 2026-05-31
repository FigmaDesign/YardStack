import { useState } from 'react'
import { ChevronLeft, Crown } from 'lucide-react'
import { NAV_ITEMS, type NavKey } from './data'
import YardLogo from '../Images/YardStackLogowithouttext.png'

interface SidebarProps {
  active?: NavKey
  onNavigate?: (k: NavKey) => void
}

export default function Sidebar({ active = 'dashboard', onNavigate }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <aside 
      className={`flex flex-col shrink-0 h-full bg-[#040f24] text-white transition-all duration-400 ease-in-out relative z-50 shadow-[4px_0_24px_rgba(0,0,0,0.2)] ${
        isCollapsed ? 'w-[72px]' : 'w-[240px]'
      }`}
    >
      <div className="flex flex-col items-center pt-8 pb-6 px-4 overflow-hidden shrink-0">
        <img
          src={YardLogo}
          alt="Yard logo"
          className={`object-contain transition-all duration-400 ${isCollapsed ? 'w-8 h-8' : 'w-11 h-11'}`}
        />
        <div 
          className={`flex flex-col items-center overflow-hidden whitespace-nowrap transition-all duration-400 ${
            isCollapsed ? 'h-0 opacity-0 mt-0' : 'h-[36px] opacity-100 mt-2.5'
          }`}
        >
          <p className="text-[1.3rem] font-serif tracking-[0.05em] leading-none text-white">YARD</p>
          <p className="text-[0.5rem] font-medium tracking-[0.18em] text-white/80 uppercase mt-1.5">
            Real Estate Intelligence
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-4 flex flex-col">
        <div 
          className={`px-6 mb-3 overflow-hidden transition-all duration-400 ${
            isCollapsed ? 'opacity-0 h-0 hidden' : 'opacity-100 h-auto block'
          }`}
        >
          <p className="text-[0.65rem] font-bold tracking-[0.15em] text-white/60 uppercase">
            Navigation
          </p>
        </div>

        <ul className="space-y-1 px-4 flex-1">
          {NAV_ITEMS.map(({ key, label, Icon }) => {
            const isActive = key === active
            return (
              <li key={key} className="relative group">
                <button
                  onClick={() => onNavigate?.(key)}
                  className={`w-full flex items-center ${isCollapsed ? 'justify-center px-0' : 'justify-start px-3'} py-2.5 rounded-lg text-[0.85rem] transition-all duration-300 ${
                    isActive
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                  aria-label={label}
                >
                  <Icon size={isCollapsed ? 20 : 18} style={{ strokeWidth: isActive ? 2 : 1.8 }} className="shrink-0 transition-all duration-300" />
                  
                  <div className={`flex items-center overflow-hidden whitespace-nowrap transition-all duration-400 ${
                    isCollapsed ? 'w-0 opacity-0 ml-0' : 'flex-1 opacity-100 ml-3.5'
                  }`}>
                    <span>{label}</span>
                  </div>
                </button>
                
                {isCollapsed && (
                  <div
                    role="tooltip"
                    className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3.5 py-2 bg-[#0d1b33] text-white text-[0.75rem] font-medium tracking-wide whitespace-nowrap rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus:opacity-100 group-focus:visible group-focus-within:opacity-100 group-focus-within:visible translate-x-2 group-hover:translate-x-0 transition-all duration-300 z-[100] shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-white/10 flex items-center"
                  >
                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#0d1b33] rotate-45 border-l border-b border-white/10" />
                    <span className="block">{label}</span>
                  </div>
                )}
              </li>
            )
          })}
        </ul>

        <div 
          className={`relative mx-4 mt-8 mb-4 border border-white/15 rounded-[14px] transition-all duration-300 overflow-visible flex flex-col items-center justify-center bg-[#07152b] ${
            isCollapsed 
              ? 'p-2.5 hover:bg-white/5 cursor-pointer' 
              : 'p-4'
          }`}
          title={isCollapsed ? "Premium Platform" : undefined}
        >
          <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-40 pointer-events-none">
            <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0 15 Q 25 30, 50 15 T 100 15 L 100 30 L 0 30 Z" fill="url(#wave-grad)"/>
              <path d="M0 20 Q 30 5, 60 20 T 100 20 L 100 30 L 0 30 Z" fill="url(#wave-grad)" opacity="0.5"/>
              <defs>
                <linearGradient id="wave-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4ade80" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#4ade80" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className={`flex justify-center relative z-10 transition-all duration-300 ${isCollapsed ? '' : 'mb-2'}`}>
            <Crown size={isCollapsed ? 22 : 24} style={{ color: '#4ade80', strokeWidth: 2 }} />
          </div>
          
          <div className={`text-center transition-all duration-300 relative z-10 flex flex-col items-center w-full ${
            isCollapsed ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100 mt-1'
          }`}>
            <p className="text-[0.65rem] font-bold tracking-[0.15em] text-[#4ade80] uppercase w-full">
              Premium Platform
            </p>
            <p className="text-[0.65rem] text-white/90 mt-1.5 leading-[1.3] font-medium w-full">
              Built for visionaries.<br />Designed for excellence.
            </p>
          </div>
        </div>
      </div>

      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-start gap-3 px-6'} py-4.5 text-[0.8rem] font-medium text-white/60 hover:text-white transition-colors border-t border-white/10 bg-[#030b1c] hover:bg-[#040d21] shrink-0`}
        title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
      >
        <ChevronLeft 
          size={16} 
          className={`transition-transform duration-500 ease-in-out ${isCollapsed ? 'rotate-180' : ''}`} 
          style={{ strokeWidth: 2 }} 
        />
        <span className={`overflow-hidden whitespace-nowrap transition-all duration-400 ${
          isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'
        }`}>
          Collapse
        </span>
      </button>
    </aside>
  )
}
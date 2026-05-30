import React, { useState, useRef, useEffect, useId } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export interface DropdownOption {
  value: string
  label: string
}

interface DropdownProps {
  options: DropdownOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  leftIcon?: React.ReactNode
  size?: 'sm' | 'md'
  className?: string
  id?: string
}

export default function Dropdown({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  leftIcon,
  size = 'md',
  className = '',
  id,
}: DropdownProps) {
  const [open, setOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)
  const uid = useId()
  const listId = `${uid}-list`
  const selected = options.find(o => o.value === value)
  const isSm = size === 'sm'

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  useEffect(() => {
    if (open) {
      setFocusedIndex(options.findIndex(o => o.value === value))
    }
  }, [open, options, value])

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault()
        setOpen(true)
      }
      return
    }
    if (e.key === 'Escape') { setOpen(false); return }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setFocusedIndex(i => Math.min(i + 1, options.length - 1))
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setFocusedIndex(i => Math.max(i - 1, 0))
    }
    if (e.key === 'Enter') {
      e.preventDefault()
      if (focusedIndex >= 0) {
        onChange(options[focusedIndex].value)
        setOpen(false)
      }
    }
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        id={id}
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listId}
        onClick={() => setOpen(v => !v)}
        onKeyDown={handleKeyDown}
        className={`flex items-center gap-1.5 bg-white border rounded-lg cursor-pointer outline-none transition-all w-full
          ${open ? 'border-[#16a34a] ring-2 ring-[#16a34a]/15' : 'border-[#e0e3eb] hover:border-[#16a34a]'}
          ${isSm ? 'px-2 py-[7px] text-[0.75rem]' : 'px-3 py-[8px] text-[0.8rem]'}
          font-semibold text-[#1a1a2e]`}
      >
        {leftIcon && <span className="text-[#9ca3af] shrink-0">{leftIcon}</span>}
        <span className="flex-1 text-left truncate min-w-0">
          {selected
            ? selected.label
            : <span className="text-[#b0b5c0] font-normal">{placeholder}</span>}
        </span>
        <ExpandMoreIcon
          sx={{ fontSize: isSm ? 14 : 16, color: '#9ca3af' }}
          className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <ul
          id={listId}
          role="listbox"
          className="absolute z-50 mt-1.5 w-full min-w-[110px] bg-white border border-[#e0e3eb] rounded-xl shadow-lg overflow-hidden py-1"
        >
          {options.map((opt, i) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === value}
              onClick={() => { onChange(opt.value); setOpen(false) }}
              onMouseEnter={() => setFocusedIndex(i)}
              className={`px-3 py-2 text-[0.8rem] cursor-pointer transition-colors select-none
                ${opt.value === value ? 'bg-[#f0fdf4] text-[#15803d] font-semibold' : 'text-[#374151]'}
                ${focusedIndex === i && opt.value !== value ? 'bg-[#f9fafb]' : ''}
              `}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

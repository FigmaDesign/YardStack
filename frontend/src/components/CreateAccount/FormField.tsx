import type { ReactNode } from 'react'

interface FormFieldProps {
  label: string
  id: string
  type?: string
  placeholder: string
  value: string
  onChange: (v: string) => void
  icon: ReactNode
  rightIcon?: ReactNode
  error?: string
  required?: boolean
  isMobile?: boolean
}

export default function FormField({
  label, id, type = 'text', placeholder, value, onChange,
  icon, rightIcon, error, required, isMobile
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={`block font-semibold text-[#1a1a2e] mb-1 ${isMobile ? 'text-[0.7rem]' : 'text-[0.78rem]'}`}>
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <div className={`flex items-center border bg-white transition-all ${error ? 'border-red-400 ring-1 ring-red-100' : 'border-[#e0e3eb] focus-within:border-[#16a34a] focus-within:ring-1 focus-within:ring-[#16a34a]/20'} rounded-[8px]`}>
        <span className={`text-[#b0b5c0] shrink-0 ${isMobile ? 'pl-3' : 'pl-3.5'}`}>{icon}</span>
        <input
          id={id} type={type} value={value} onChange={e => onChange(e.target.value)}
          placeholder={placeholder} required={required}
          className={`flex-1 text-[#1a1a2e] placeholder-[#b0b5c0] bg-transparent outline-none ${isMobile ? 'px-2.5 py-2 text-[0.75rem]' : 'px-3 py-2 text-[0.85rem]'}`}
        />
        {rightIcon && <span className={`shrink-0 ${isMobile ? 'pr-3' : 'pr-3.5'}`}>{rightIcon}</span>}
      </div>
      {error && <p className="text-red-500 text-[0.72rem] mt-1">{error}</p>}
    </div>
  )
}
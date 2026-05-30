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
}

export default function FormField({
  label, id, type = 'text', placeholder, value, onChange,
  icon, rightIcon, error, required,
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.78rem] font-semibold text-[#1a1a2e] mb-1.5">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <div className={`flex items-center rounded-[10px] border bg-white transition-all ${error ? 'border-red-400 ring-2 ring-red-100' : 'border-[#e0e3eb] focus-within:border-[#16a34a] focus-within:ring-2 focus-within:ring-[#16a34a]/12'}`}>
        <span className="pl-3.5 text-[#b0b5c0] shrink-0">{icon}</span>
        <input
          id={id}
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="flex-1 px-3 py-2.5 text-[0.85rem] text-[#1a1a2e] placeholder-[#b0b5c0] bg-transparent outline-none"
        />
        {rightIcon && <span className="pr-3.5 shrink-0">{rightIcon}</span>}
      </div>
      {error && <p className="text-red-500 text-[0.72rem] mt-1">{error}</p>}
    </div>
  )
}

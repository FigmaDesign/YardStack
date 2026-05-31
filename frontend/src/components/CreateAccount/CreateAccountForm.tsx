import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined'
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import Dropdown from '../commonfiles/Dropdown'
import FormField from './FormField'
import { ROLE_OPTIONS, SOCIAL } from './constants'

export interface CreateAccountFormProps {
  name: string
  setName: (v: string) => void
  email: string
  setEmail: (v: string) => void
  phone: string
  setPhone: (v: string) => void
  phoneCode: string
  setPhoneCode: (v: string) => void
  company: string
  setCompany: (v: string) => void
  role: string
  setRole: (v: string) => void
  password: string
  setPassword: (v: string) => void
  confirmPassword: string
  setConfirmPassword: (v: string) => void
  showPwd: boolean
  setShowPwd: (v: boolean) => void
  showConfirm: boolean
  setShowConfirm: (v: boolean) => void
  agreed: boolean
  setAgreed: (v: boolean) => void
  errors: Record<string, string>
  onSubmit: (e: React.FormEvent) => void
  onLoginClick?: () => void
  twoColumn?: boolean
  showLoginLink?: boolean
}

export default function CreateAccountForm(props: CreateAccountFormProps) {
  const {
    name, setName, email, setEmail, phone, setPhone,
    company, setCompany, role, setRole, password, setPassword,
    confirmPassword, setConfirmPassword, showPwd, setShowPwd,
    showConfirm, setShowConfirm, agreed, setAgreed, errors, onSubmit, onLoginClick,
    twoColumn = false, showLoginLink = true,
  } = props

  const phoneField = (
    <div className="group">
      <label className="block text-[0.78rem] font-semibold text-[#1a1a2e] mb-1.5 transition-colors group-focus-within:text-[#16a34a]">
        Phone Number<span className="text-red-500 ml-0.5">*</span>
      </label>
      <div className="flex items-center rounded-[10px] border border-[#e0e3eb] bg-white group-hover:border-gray-300 focus-within:!border-[#16a34a] focus-within:ring-2 focus-within:ring-[#16a34a]/12 transition-all duration-300 shadow-sm focus-within:shadow-md">
        <span className="pl-3.5 text-[#b0b5c0] shrink-0 group-focus-within:text-[#16a34a] transition-colors"><PhoneOutlinedIcon sx={{ fontSize: 18 }} /></span>
        <input
          id="ca-phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)}
          placeholder="Enter phone number"
          className="flex-1 px-3 py-2 text-[0.85rem] text-[#1a1a2e] placeholder-[#b0b5c0] bg-transparent outline-none"
        />
      </div>
      {errors.phone && <p className="text-red-500 text-[0.72rem] mt-1">{errors.phone}</p>}
    </div>
  )

  const roleField = (
    <div className="group">
      <label className="block text-[0.78rem] font-semibold text-[#1a1a2e] mb-1.5 transition-colors group-focus-within:text-[#16a34a]">
        Role<span className="text-red-500 ml-0.5">*</span>
      </label>
      <div className="shadow-sm group-hover:shadow transition-shadow duration-300 rounded-[10px]">
        <Dropdown
          options={ROLE_OPTIONS}
          value={role}
          onChange={setRole}
          placeholder="Select your role"
          leftIcon={<BadgeOutlinedIcon sx={{ fontSize: 16 }} />}
          id="ca-role"
        />
      </div>
      {errors.role && <p className="text-red-500 text-[0.72rem] mt-1">{errors.role}</p>}
    </div>
  )

  const companyField = (
    <FormField
      label="Company / Organization" id="ca-company" placeholder="Enter your company name"
      value={company} onChange={setCompany}
      icon={<BusinessOutlinedIcon sx={{ fontSize: 18 }} />}
    />
  )

  const passwordField = (
    <FormField
      label="Password" id="ca-password" type={showPwd ? 'text' : 'password'}
      placeholder="Create a strong password"
      value={password} onChange={setPassword}
      icon={<LockOutlinedIcon sx={{ fontSize: 18 }} />}
      rightIcon={
        <button type="button" onClick={() => setShowPwd(!showPwd)} className="text-[#b0b5c0] hover:text-[#4ade80] transition-colors duration-300">
          {showPwd ? <VisibilityOutlinedIcon sx={{ fontSize: 17 }} /> : <VisibilityOffOutlinedIcon sx={{ fontSize: 17 }} />}
        </button>
      }
      error={errors.password} required
    />
  )

  const confirmPasswordField = (
    <FormField
      label="Confirm Password" id="ca-confirm" type={showConfirm ? 'text' : 'password'}
      placeholder="Confirm your password"
      value={confirmPassword} onChange={setConfirmPassword}
      icon={<LockOutlinedIcon sx={{ fontSize: 18 }} />}
      rightIcon={
        <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="text-[#b0b5c0] hover:text-[#4ade80] transition-colors duration-300">
          {showConfirm ? <VisibilityOutlinedIcon sx={{ fontSize: 17 }} /> : <VisibilityOffOutlinedIcon sx={{ fontSize: 17 }} />}
        </button>
      }
      error={errors.confirmPassword} required
    />
  )

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      {twoColumn ? (
        <>
          <FormField
            label="Full Name" id="ca-name" placeholder="Enter your full name"
            value={name} onChange={setName}
            icon={<PersonOutlinedIcon sx={{ fontSize: 18 }} />}
            error={errors.name} required
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="Work Email" id="ca-email" type="email" placeholder="Enter your work email"
              value={email} onChange={setEmail}
              icon={<EmailOutlinedIcon sx={{ fontSize: 18 }} />}
              error={errors.email} required
            />
            {phoneField}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {companyField}
            {roleField}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {passwordField}
            {confirmPasswordField}
          </div>
        </>
      ) : (
        <>
          <FormField
            label="Full Name" id="ca-name" placeholder="Enter your full name"
            value={name} onChange={setName}
            icon={<PersonOutlinedIcon sx={{ fontSize: 18 }} />}
            error={errors.name} required
          />
          <FormField
            label="Work Email" id="ca-email" type="email" placeholder="Enter your work email"
            value={email} onChange={setEmail}
            icon={<EmailOutlinedIcon sx={{ fontSize: 18 }} />}
            error={errors.email} required
          />
          {phoneField}
          {companyField}
          {roleField}
          {passwordField}
          {confirmPasswordField}
        </>
      )}

      <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-2.5 flex items-center justify-between gap-3 mt-2 shadow-[0_2px_10px_rgba(22,163,74,0.05)] hover:shadow-[0_4px_15px_rgba(22,163,74,0.1)] transition-all duration-300">
        <div className="flex items-start gap-2.5">
          <SecurityOutlinedIcon sx={{ fontSize: 18, color: '#16a34a', flexShrink: 0, marginTop: '1px' }} />
          <div>
            <p className="text-[0.75rem] font-bold text-[#14532d]">Your security is our priority</p>
            <p className="text-[0.72rem] text-[#166534] leading-relaxed mt-0.5">
              We use advanced encryption and security protocols to protect your data.
            </p>
          </div>
        </div>
        <TaskAltIcon className="animate-[pulse_3s_ease-in-out_infinite]" sx={{ fontSize: 26, color: '#16a34a', flexShrink: 0 }} />
      </div>

      <label className="flex items-start gap-2.5 cursor-pointer group">
        <input
          type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)}
          className="w-4 h-4 mt-0.5 rounded accent-[#16a34a] shrink-0 transition-transform group-hover:scale-110"
        />
        <span className="text-[0.75rem] text-[#374151] leading-relaxed">
          I agree to the{' '}
          <button type="button" className="text-[#16a34a] font-semibold hover:text-[#15803d] hover:underline transition-colors">Terms of Service</button>
          {' '}and{' '}
          <button type="button" className="text-[#16a34a] font-semibold hover:text-[#15803d] hover:underline transition-colors">Privacy Policy</button>
        </span>
      </label>
      {errors.agreed && <p className="text-red-500 text-[0.72rem] -mt-2">{errors.agreed}</p>}

      <button
        type="submit"
        className="w-full flex items-center justify-center px-5 py-2.5 rounded-xl font-bold text-[0.95rem] text-white bg-linear-to-r from-[#1d4ed8] via-[#1a7e5a] to-[#16a34a] hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(22,163,74,0.25)] hover:shadow-[0_6px_20px_rgba(22,163,74,0.4)] transition-all duration-300 mt-2"
      >
        <span>Create Account</span>
      </button>

      <div className="flex items-center gap-3 my-2">
        <div className="flex-1 h-px bg-linear-to-r from-transparent to-[#e5e7eb]" />
        <span className="text-[0.63rem] font-semibold text-[#9ca3af] tracking-[0.14em] uppercase">Or sign up with</span>
        <div className="flex-1 h-px bg-linear-to-l from-transparent to-[#e5e7eb]" />
      </div>

      <div className="grid grid-cols-3 gap-3">
        {SOCIAL.map(({ label, logo }) => (
          <button key={label} type="button" className="flex items-center justify-center gap-2 py-2 border border-[#e0e3eb] rounded-xl text-[0.8rem] font-semibold text-[#374151] bg-white hover:bg-gray-50 hover:-translate-y-0.5 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300">
            <img src={logo} alt={label} className="w-4 h-4 object-contain transition-transform duration-300 group-hover:scale-110" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {showLoginLink && (
        <p className="text-center text-[0.82rem] text-[#6b7280] pt-2">
          Already have an account?{' '}
          <button type="button" onClick={onLoginClick} className="text-[#16a34a] font-bold hover:underline transition-all">Login here</button>
        </p>
      )}
    </form>
  )
}
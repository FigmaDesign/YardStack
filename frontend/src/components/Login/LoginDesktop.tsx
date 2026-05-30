import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SecurityIcon from '@mui/icons-material/Security'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import LanguageIcon from '@mui/icons-material/Language'
import Sidebar from '../commonfiles/sidebar/Sidebar'
import Dropdown from '../commonfiles/Dropdown'
import type { DropdownOption } from '../commonfiles/Dropdown'
import { SOCIAL } from './constants'

const LANG_OPTIONS: DropdownOption[] = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'Hindi' },
  { value: 'mr', label: 'Marathi' },
]

interface LoginDesktopProps {
  email: string
  setEmail: (v: string) => void
  password: string
  setPassword: (v: string) => void
  showPwd: boolean
  setShowPwd: (v: boolean) => void
  remember: boolean
  setRemember: (v: boolean) => void
  language: string
  setLanguage: (v: string) => void
  onSubmit: (e: React.FormEvent) => void
  onCreateAccountClick?: () => void
}

export default function LoginDesktop({
  email, setEmail, password, setPassword,
  showPwd, setShowPwd, remember, setRemember,
  language, setLanguage,
  onSubmit, onCreateAccountClick,
}: LoginDesktopProps) {
  return (
    <div className="h-full flex overflow-hidden">
      <Sidebar active="dashboard" />

      <div
        className="flex-1 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/src/components/commonfiles/Images/Login&create/Desktop2.png')" }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#050f20]/80 via-[#071428]/50 to-transparent" />
        <div className="relative z-10 flex flex-col justify-between h-full px-10 py-10 max-w-[500px]">
          <div className="mt-4">
            <p className="text-[#4ade80] text-[0.82rem] font-semibold tracking-wider uppercase">Welcome Back</p>
            <div className="w-10 h-0.5 bg-[#4ade80] mt-2 mb-5" />
            <h1 className="text-white text-[2.5rem] font-extrabold leading-[1.15] tracking-tight">
              India's Most Intelligent<br />Real Estate Platform
            </h1>
            <p className="text-white/75 text-[0.95rem] mt-4 leading-relaxed">
              Real-time insights. Smarter decisions.<br />Billionaire-grade experience.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-4 flex items-start gap-3.5 max-w-[390px]">
            <div className="bg-[#16a34a] rounded-xl p-2.5 shrink-0">
              <SecurityIcon sx={{ fontSize: 24, color: 'white' }} />
            </div>
            <div>
              <p className="text-white font-bold text-[0.95rem]">Enterprise Grade Security</p>
              <p className="text-white/70 text-[0.78rem] mt-0.5 leading-relaxed">
                Your data is protected with bank-level encryption and advanced security protocols.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[440px] shrink-0 bg-white flex flex-col shadow-[-6px_0_28px_rgba(0,0,0,0.09)]">
        <div className="flex justify-end px-7 pt-5 pb-2 shrink-0">
          <Dropdown
            options={LANG_OPTIONS}
            value={language}
            onChange={setLanguage}
            leftIcon={<LanguageIcon sx={{ fontSize: 15 }} />}
            size="sm"
            className="w-32"
          />
        </div>

        <div className="flex-1 overflow-y-auto px-7 pt-1 pb-4">
          <div className="mb-4 -mx-7 -mt-1">
            <img
              src="/src/components/commonfiles/Images/Login&create/toploginheader.png"
              alt="Yard skyline"
              className="w-full object-cover"
            />
          </div>
          <h2 className="text-[1.5rem] font-extrabold text-[#0f1e3d] leading-tight">
            Login to <span className="text-[#16a34a]">Yard</span>
          </h2>
          <p className="text-[0.8rem] text-[#6b7280] mt-1 mb-5">Enter your credentials to continue</p>

          <form onSubmit={onSubmit} className="space-y-4" noValidate>
            <div>
              <label className="block text-[0.78rem] font-semibold text-[#1a1a2e] mb-1.5">Email Address</label>
              <div className="flex items-center rounded-xl border border-[#e0e3eb] focus-within:border-[#16a34a] focus-within:ring-2 focus-within:ring-[#16a34a]/12 transition-all">
                <span className="pl-3.5 text-[#b0b5c0] shrink-0"><EmailOutlinedIcon sx={{ fontSize: 18 }} /></span>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                  placeholder="Enter your email address"
                  className="flex-1 px-3 py-2.5 text-[0.85rem] text-[#1a1a2e] placeholder-[#b0b5c0] bg-transparent outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-[0.78rem] font-semibold text-[#1a1a2e] mb-1.5">Password</label>
              <div className="flex items-center rounded-xl border border-[#e0e3eb] focus-within:border-[#16a34a] focus-within:ring-2 focus-within:ring-[#16a34a]/12 transition-all">
                <span className="pl-3.5 text-[#b0b5c0] shrink-0"><LockOutlinedIcon sx={{ fontSize: 18 }} /></span>
                <input type={showPwd ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required
                  placeholder="Enter your password"
                  className="flex-1 px-3 py-2.5 text-[0.85rem] text-[#1a1a2e] placeholder-[#b0b5c0] bg-transparent outline-none" />
                <button type="button" onClick={() => setShowPwd(!showPwd)} className="pr-3.5 text-[#b0b5c0] hover:text-[#6b7280] shrink-0 transition-colors">
                  {showPwd ? <VisibilityOutlinedIcon sx={{ fontSize: 17 }} /> : <VisibilityOffOutlinedIcon sx={{ fontSize: 17 }} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer text-[0.8rem] text-[#374151]">
                <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} className="w-4 h-4 rounded accent-[#16a34a]" />
                Remember me
              </label>
              <button type="button" className="text-[0.8rem] font-semibold text-[#16a34a] hover:underline">Forgot Password?</button>
            </div>

            <button type="submit" className="w-full flex items-center justify-between px-5 py-3 rounded-xl font-bold text-[0.95rem] text-white bg-[#16a34a] hover:bg-[#15803d] transition-colors shadow-md">
              <span className="flex-1 text-center">Login</span>
              <ArrowForwardIcon sx={{ fontSize: 20 }} />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-[#e5e7eb]" />
              <span className="text-[0.63rem] font-semibold text-[#9ca3af] tracking-[0.14em] uppercase">Or continue with</span>
              <div className="flex-1 h-px bg-[#e5e7eb]" />
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {SOCIAL.map(({ label, logo }) => (
                <button key={label} type="button" className="flex items-center justify-center gap-2 py-2.5 border border-[#e0e3eb] rounded-xl text-[0.8rem] font-semibold text-[#374151] hover:bg-gray-50 transition-colors shadow-sm">
                  <img src={logo} alt={label} className="w-4 h-4 object-contain" />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <p className="text-center text-[0.82rem] text-[#374151] pt-1">
              New to Yard?{' '}
              <button type="button" onClick={onCreateAccountClick} className="text-[#16a34a] font-bold hover:underline inline-flex items-center gap-0.5">
                Request Access <ArrowForwardIcon sx={{ fontSize: 14 }} />
              </button>
            </p>
          </form>
        </div>

        <div className="shrink-0 border-t border-[#f0f2f5] bg-white py-3 px-6 flex items-center justify-around">
          {[
            { Icon: VerifiedUserOutlinedIcon, label: 'Bank-Level\nSecurity' },
            { Icon: AccessTimeOutlinedIcon,   label: '99.9%\nUptime' },
            { Icon: StarBorderOutlinedIcon,   label: 'Trusted by Top\nDevelopers' },
          ].map(({ Icon, label }, i) => (
            <React.Fragment key={label}>
              {i > 0 && <div className="w-px h-7 bg-[#e5e7eb]" />}
              <div className="flex flex-col items-center gap-1 text-center px-3">
                <Icon sx={{ fontSize: 19, color: '#16a34a' }} />
                <p className="text-[0.57rem] text-[#6b7280] font-medium leading-tight whitespace-pre-line">{label}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

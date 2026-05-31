import React, { useId } from 'react'
import desktopBg from '../commonfiles/Images/Login&create/Desktop2.png'
import topHeader from '../commonfiles/Images/Login&create/toploginheader.png'
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
  const emailId = useId()
  const passwordId = useId()
  const rememberId = useId()

  return (
    <main className="h-screen w-full flex overflow-hidden bg-[#050f20]">
      <Sidebar active="announcements" />

      <section
        aria-label="Welcome Information"
        className="flex-1 relative bg-cover bg-center bg-no-repeat ys-slide-in-left motion-reduce:transform-none motion-reduce:transition-none motion-reduce:animate-none"
        style={{ backgroundImage: `url(${desktopBg})` }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#050f20]/90 via-[#071428]/60 to-transparent" />
        
        <div className="relative z-10 flex flex-col justify-between h-full px-10 py-10 max-w-[500px]">
          <div className="mt-2">
            <p className="text-[#4ade80] text-[0.82rem] font-semibold tracking-wider uppercase drop-shadow-sm">
              Welcome Back
            </p>
            <div aria-hidden="true" className="w-10 h-0.5 bg-[#4ade80] mt-2 mb-5 shadow-[0_2px_8px_rgba(74,222,128,0.5)]" />
            <h1 className="text-white text-[2.5rem] font-extrabold leading-[1.15] tracking-tight drop-shadow-lg">
              India's Most Intelligent<br />Real Estate Platform
            </h1>
            <p className="text-white/90 text-[0.95rem] mt-4 leading-relaxed drop-shadow-md">
              Real-time insights. Smarter decisions.<br />Billionaire-grade experience.
            </p>
          </div>
          
          <div 
            className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-4 mb-20 flex items-start gap-3.5 max-w-[390px] shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:bg-white/15 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-500 group motion-reduce:transition-none"
            role="complementary"
            aria-label="Security Feature Highlight"
          >
            <div aria-hidden="true" className="bg-[#16a34a] rounded-xl p-2.5 shrink-0 shadow-[0_4px_12px_rgba(22,163,74,0.4)] group-hover:scale-110 group-hover:bg-[#15803d] transition-all duration-300 motion-reduce:transform-none motion-reduce:transition-none">
              <SecurityIcon sx={{ fontSize: 24, color: 'white' }} />
            </div>
            <div>
              <p className="text-white font-bold text-[0.95rem] group-hover:text-[#4ade80] transition-colors duration-300 motion-reduce:transition-none">
                Enterprise Grade Security
              </p>
              <p className="text-white/80 text-[0.78rem] mt-0.5 leading-relaxed">
                Your data is protected with bank-level encryption and advanced security protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section 
        aria-label="Login Form Area"
        className="w-[480px] shrink-0 bg-white flex flex-col shadow-[-12px_0_40px_rgba(0,0,0,0.12)] z-10 ys-slide-in-right motion-reduce:transform-none motion-reduce:animate-none"
      >
        <header className="flex justify-end pt-6 px-8 pb-1 shrink-0">
          <Dropdown
            id="login-desktop-language"
            options={LANG_OPTIONS}
            value={language}
            onChange={setLanguage}
            leftIcon={<LanguageIcon sx={{ fontSize: 15 }} aria-hidden="true" />}
            size="sm"
            className="w-32"
          />
        </header>

        <div className="flex-1 px-9 flex flex-col justify-center pb-2 overflow-y-auto">
          <div className="mb-5 -mx-9 -mt-8">
            <img
              src={topHeader}
              alt=""
              aria-hidden="true"
              className="w-full h-28 object-cover border-b border-gray-100 pointer-events-none"
            />
          </div>
          
          <h2 className="text-[1.65rem] font-extrabold text-[#0f1e3d] leading-tight">
            Login to <span className="text-[#15803d]">Yard</span>
          </h2>
          
          <form 
            onSubmit={onSubmit} 
            className="space-y-3.5 ys-fade-in-up mt-5 motion-reduce:transform-none motion-reduce:animate-none motion-reduce:opacity-100" 
            style={{ animationDelay: '80ms' }} 
            noValidate
          >
            <div className="group">
              <label htmlFor={emailId} className="block text-[0.78rem] font-semibold text-[#1a1a2e] mb-1.5 transition-colors duration-300 group-focus-within:text-[#15803d]">
                Email Address
              </label>
              <div className="flex items-center rounded-[10px] border border-[#e0e3eb] bg-white group-hover:border-gray-400 focus-within:!border-[#16a34a] focus-within:ring-2 focus-within:ring-[#16a34a]/12 transition-all duration-300 shadow-sm focus-within:shadow-md motion-reduce:transition-none">
                <span aria-hidden="true" className="pl-3.5 text-gray-500 shrink-0 group-focus-within:text-[#15803d] transition-colors duration-300">
                  <EmailOutlinedIcon sx={{ fontSize: 18 }} />
                </span>
                <input 
                  id={emailId}
                  type="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  required
                  autoComplete="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-3 py-2 text-[0.85rem] text-[#1a1a2e] placeholder-gray-500 bg-transparent outline-none w-full" 
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor={passwordId} className="block text-[0.78rem] font-semibold text-[#1a1a2e] mb-1.5 transition-colors duration-300 group-focus-within:text-[#15803d]">
                Password
              </label>
              <div className="flex items-center rounded-[10px] border border-[#e0e3eb] bg-white group-hover:border-gray-400 focus-within:!border-[#16a34a] focus-within:ring-2 focus-within:ring-[#16a34a]/12 transition-all duration-300 shadow-sm focus-within:shadow-md motion-reduce:transition-none">
                <span aria-hidden="true" className="pl-3.5 text-gray-500 shrink-0 group-focus-within:text-[#15803d] transition-colors duration-300">
                  <LockOutlinedIcon sx={{ fontSize: 18 }} />
                </span>
                <input 
                  id={passwordId}
                  type={showPwd ? 'text' : 'password'} 
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                  required
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="flex-1 px-3 py-2 text-[0.85rem] text-[#1a1a2e] placeholder-gray-500 bg-transparent outline-none w-full" 
                />
                <button 
                  type="button" 
                  onClick={() => setShowPwd(!showPwd)} 
                  aria-label={showPwd ? "Hide password" : "Show password"}
                  aria-pressed={showPwd}
                  className="mr-2 p-1.5 text-gray-500 hover:text-[#15803d] shrink-0 rounded-[6px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] transition-colors duration-300 motion-reduce:transition-none"
                >
                  {showPwd ? <VisibilityOutlinedIcon sx={{ fontSize: 17 }} aria-hidden="true" /> : <VisibilityOffOutlinedIcon sx={{ fontSize: 17 }} aria-hidden="true" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label htmlFor={rememberId} className="flex items-center gap-2 cursor-pointer text-[0.8rem] text-[#374151] group">
                <input 
                  id={rememberId}
                  type="checkbox" 
                  checked={remember} 
                  onChange={e => setRemember(e.target.checked)} 
                  className="w-4 h-4 rounded-[4px] accent-[#16a34a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] focus-visible:ring-offset-1 transition-transform group-hover:scale-110 motion-reduce:transform-none" 
                />
                Remember me
              </label>
              <button 
                type="button" 
                className="text-[0.8rem] font-semibold text-[#15803d] hover:text-[#14532d] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] rounded-[2px] transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            <button 
              type="submit" 
              className="w-1/2 mx-auto flex items-center justify-center gap-2 px-5 py-2.5 mt-1 rounded-[8px] font-bold text-[0.95rem] text-white bg-gradient-to-r from-[#1d4ed8] via-[#1a7e5a] to-[#16a34a] hover:-translate-y-0.5 active:scale-[0.97] active:opacity-90 shadow-[0_4px_14px_rgba(22,163,74,0.25)] hover:shadow-[0_6px_20px_rgba(22,163,74,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] focus-visible:ring-offset-2 transition-all duration-200 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <span>Login</span>
            </button>

            <div className="flex items-center gap-3 my-2 pt-1" aria-hidden="true">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#e5e7eb]" />
              <span className="text-[0.63rem] font-semibold text-gray-500 tracking-[0.14em] uppercase">
                Or continue with
              </span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#e5e7eb]" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {SOCIAL.map(({ label, logo }) => (
                <button 
                  key={label} 
                  type="button" 
                  aria-label={`Log in with ${label}`}
                  className="flex items-center justify-center gap-2 py-2 border border-[#e0e3eb] rounded-xl text-[0.8rem] font-semibold text-[#374151] bg-white hover:bg-gray-50 hover:-translate-y-0.5 active:scale-[0.96] hover:border-gray-300 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] transition-all duration-200 group motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <img src={logo} alt="" aria-hidden="true" className="w-4 h-4 object-contain transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none" />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <p className="text-center text-[0.82rem] text-[#374151] pt-3">
              New to Yard?{' '}
              <button 
                type="button" 
                onClick={onCreateAccountClick} 
                className="text-[#15803d] font-bold hover:text-[#14532d] hover:underline inline-flex items-center gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] rounded-[2px] transition-all"
              >
                Request Access <ArrowForwardIcon sx={{ fontSize: 14 }} className="ml-0.5" aria-hidden="true" />
              </button>
            </p>
          </form>
        </div>

        <div className="shrink-0 border-t border-[#f0f2f5] bg-gray-50/50 py-3 px-6 flex items-center justify-around">
          {[
            { Icon: VerifiedUserOutlinedIcon, label: 'Bank-Level\nSecurity' },
            { Icon: AccessTimeOutlinedIcon,   label: '99.9%\nUptime' },
            { Icon: StarBorderOutlinedIcon,   label: 'Trusted by Top\nDevelopers' },
          ].map(({ Icon, label }, i) => (
            <React.Fragment key={label}>
              {i > 0 && <div aria-hidden="true" className="w-px h-7 bg-[#e5e7eb]" />}
              <div className="flex flex-col items-center gap-1 text-center px-3 group">
                <Icon sx={{ fontSize: 19 }} className="text-[#16a34a] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#15803d] motion-reduce:transform-none motion-reduce:transition-none" aria-hidden="true" />
                <p className="text-[0.57rem] text-gray-500 font-medium leading-tight whitespace-pre-line group-hover:text-gray-700 transition-colors">
                  {label}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  )
}
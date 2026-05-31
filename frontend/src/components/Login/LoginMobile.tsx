import React, { useId } from 'react'
import mobileBg from '../commonfiles/Images/Login&create/mobile.png'
import YardLogo from '../commonfiles/Images/YardStackLogowithouttext.png'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import ApartmentIcon from '@mui/icons-material/Apartment'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import { SOCIAL } from './constants'

interface LoginMobileProps {
  email: string
  setEmail: (v: string) => void
  password: string
  setPassword: (v: string) => void
  showPwd: boolean
  setShowPwd: (v: boolean) => void
  remember: boolean
  setRemember: (v: boolean) => void
  onSubmit: (e: React.FormEvent) => void
  onCreateAccountClick?: () => void
}

export default function LoginMobile({
  email, setEmail, password, setPassword,
  showPwd, setShowPwd, remember, setRemember,
  onSubmit, onCreateAccountClick,
}: LoginMobileProps) {
  const emailId = useId()
  const passwordId = useId()
  const rememberId = useId()

  return (
    <main className="h-[100dvh] w-full bg-[#f4f6f9] flex flex-col font-['Outfit',sans-serif] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <header
        className="relative shrink-0 pb-12 ys-fade-in-down motion-reduce:animate-none motion-reduce:transform-none motion-reduce:opacity-100"
        style={{
          backgroundImage: `url(${mobileBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-[#050f20]/90 via-[#071428]/70 to-[#0d1a35]/95" />
        
        <div className="relative z-10 px-5 pt-10">
          <div className="flex items-center gap-3 mb-6">
            <img src={YardLogo} alt="Yard Logo" aria-hidden="true" className="w-10 h-10 object-contain drop-shadow-md" />
            <div>
              <p className="text-white font-extrabold text-[1.3rem] tracking-[0.15em] leading-none drop-shadow-sm">
                YARD
              </p>
              <p className="text-[#4ade80] font-semibold text-[0.55rem] tracking-[0.22em] uppercase mt-1 drop-shadow-sm">
                Real Estate Intelligence
              </p>
            </div>
          </div>

          <h1 className="text-white text-[1.6rem] font-extrabold leading-tight drop-shadow-lg mt-2">
            Welcome <span className="text-[#4ade80]">Back</span>
          </h1>
          <p className="text-white/90 text-[0.75rem] mt-2 leading-relaxed max-w-[280px] drop-shadow-md">
            Sign in to access powerful insights and manage your real estate intelligence.
          </p>
        </div>
      </header>

      <section 
        aria-label="Login Form Section"
        className="relative z-20 -mt-6 pb-15 ys-scale-in motion-reduce:animate-none motion-reduce:transform-none motion-reduce:opacity-100" 
        style={{ animationDelay: '80ms' }}
      >
        <div className="bg-white rounded-[8px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100">
          <form onSubmit={onSubmit} className="space-y-3.5" noValidate>
            <div className="group">
              <label htmlFor={emailId} className="block text-[0.7rem] font-semibold text-[#1a1a2e] mb-1 transition-colors duration-300 group-focus-within:text-[#15803d]">
                Work Email
              </label>
              <div className="flex items-center rounded-[8px] border border-[#e0e3eb] bg-white group-hover:border-gray-400 focus-within:!border-[#16a34a] focus-within:ring-1 focus-within:ring-[#16a34a]/20 transition-all duration-300 motion-reduce:transition-none">
                <span aria-hidden="true" className="pl-3 text-gray-500 shrink-0 group-focus-within:text-[#15803d] transition-colors duration-300">
                  <EmailOutlinedIcon sx={{ fontSize: 16 }} />
                </span>
                <input 
                  id={emailId}
                  type="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  required
                  autoComplete="email"
                  placeholder="Enter your work email"
                  className="flex-1 px-2.5 py-2 text-[0.75rem] text-[#1a1a2e] placeholder-gray-500 bg-transparent outline-none w-full" 
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor={passwordId} className="block text-[0.7rem] font-semibold text-[#1a1a2e] mb-1 transition-colors duration-300 group-focus-within:text-[#15803d]">
                Password
              </label>
              <div className="flex items-center rounded-[8px] border border-[#e0e3eb] bg-white group-hover:border-gray-400 focus-within:!border-[#16a34a] focus-within:ring-1 focus-within:ring-[#16a34a]/20 transition-all duration-300 motion-reduce:transition-none">
                <span aria-hidden="true" className="pl-3 text-gray-500 shrink-0 group-focus-within:text-[#15803d] transition-colors duration-300">
                  <LockOutlinedIcon sx={{ fontSize: 16 }} />
                </span>
                <input 
                  id={passwordId}
                  type={showPwd ? 'text' : 'password'} 
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                  required
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="flex-1 px-2.5 py-2 text-[0.75rem] text-[#1a1a2e] placeholder-gray-500 bg-transparent outline-none w-full" 
                />
                <button 
                  type="button" 
                  onClick={() => setShowPwd(!showPwd)} 
                  aria-label={showPwd ? "Hide password" : "Show password"}
                  aria-pressed={showPwd}
                  className="pr-3 text-gray-500 hover:text-[#15803d] shrink-0 focus-visible:outline-none focus-visible:text-[#15803d] transition-colors duration-300 motion-reduce:transition-none"
                >
                  {showPwd ? <VisibilityOutlinedIcon sx={{ fontSize: 16 }} aria-hidden="true" /> : <VisibilityOffOutlinedIcon sx={{ fontSize: 16 }} aria-hidden="true" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label htmlFor={rememberId} className="flex items-center gap-2 cursor-pointer text-[0.72rem] text-[#374151] group/check">
                <input 
                  id={rememberId}
                  type="checkbox" 
                  checked={remember} 
                  onChange={e => setRemember(e.target.checked)} 
                  className="w-3.5 h-3.5 rounded-[3px] accent-[#16a34a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] focus-visible:ring-offset-1 transition-transform group-hover/check:scale-110 motion-reduce:transform-none" 
                />
                Remember me
              </label>
              <button 
                type="button" 
                className="text-[0.72rem] font-semibold text-[#15803d] hover:text-[#14532d] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] rounded-[2px] transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            <button 
              type="submit" 
              className="w-3/4 mx-auto flex items-center justify-center h-10 rounded-[8px] font-bold text-[0.95rem] text-white bg-gradient-to-r from-[#1d4ed8] via-[#1a7e5a] to-[#16a34a] hover:opacity-90 active:scale-[0.97] active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] focus-visible:ring-offset-2 transition-all duration-200 shadow-md motion-reduce:transform-none motion-reduce:transition-none"
            >
              <span>Login</span>
            </button>

            <div className="flex items-center gap-3 my-4" aria-hidden="true">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#e5e7eb]" />
              <span className="font-semibold text-gray-500 tracking-[0.14em] uppercase text-[0.6rem]">
                Or sign in with
              </span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#e5e7eb]" />
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {SOCIAL.map(({ label, logo }) => (
                <button 
                  key={label} 
                  type="button" 
                  aria-label={`Sign in with ${label}`}
                  className="flex items-center justify-center gap-2 border border-[#e0e3eb] font-semibold text-[#374151] bg-white hover:bg-gray-50 hover:-translate-y-0.5 active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] transition-all duration-200 py-2 rounded-[8px] text-[0.75rem] motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <img src={logo} alt="" aria-hidden="true" className="object-contain w-3.5 h-3.5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <p className="text-center text-gray-600 text-[0.75rem] pt-3">
              Don't have an account?{' '}
              <button 
                type="button" 
                onClick={onCreateAccountClick} 
                className="text-[#15803d] font-bold hover:text-[#14532d] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] rounded-[2px] transition-all"
              >
                Create Account
              </button>
            </p>
          </form>

          <div 
            className="flex items-center justify-around mt-5 pt-4 border-t border-[#f0f2f5]"
            role="complementary"
            aria-label="Platform Features"
          >
            {[
              { Icon: VerifiedUserOutlinedIcon, label: 'Bank-Level\nSecurity' },
              { Icon: ApartmentIcon,            label: 'Enterprise\nGrade Platform' },
              { Icon: StarBorderOutlinedIcon,   label: 'Trusted by Top\nDevelopers' },
            ].map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1 text-center group">
                <Icon sx={{ fontSize: 18 }} className="text-[#16a34a] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#15803d] motion-reduce:transform-none motion-reduce:transition-none" aria-hidden="true" />
                <p className="text-[0.55rem] text-gray-500 font-medium leading-tight whitespace-pre-line group-hover:text-gray-700 transition-colors">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
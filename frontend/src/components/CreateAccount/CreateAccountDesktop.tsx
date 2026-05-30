import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import BarChartIcon from '@mui/icons-material/BarChart'
import GroupsIcon from '@mui/icons-material/Groups'
import LanguageIcon from '@mui/icons-material/Language'
import Sidebar from '../commonfiles/sidebar/Sidebar'
import Dropdown from '../commonfiles/Dropdown'
import CreateAccountForm, { type CreateAccountFormProps } from './CreateAccountForm'
import { STATS_DESKTOP } from './constants'

interface CreateAccountDesktopProps extends CreateAccountFormProps {
  language: string
  setLanguage: (v: string) => void
}

const LANG_OPTIONS = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'Hindi' },
  { value: 'mr', label: 'Marathi' },
]

const FEATURES = [
  { Icon: VerifiedUserOutlinedIcon, title: 'Secure & Trusted',       desc: 'Enterprise-grade security for your data' },
  { Icon: BarChartIcon,             title: 'Smart & Powerful',        desc: 'Advanced analytics for smarter decisions' },
  { Icon: GroupsIcon,               title: 'Built for Professionals', desc: 'Designed for agents, developers & teams' },
]

export default function CreateAccountDesktop({ language, setLanguage, onLoginClick, ...formProps }: CreateAccountDesktopProps) {
  return (
    <div className="h-full flex overflow-hidden">
      <Sidebar active="dashboard" />

      <div
        className="flex-1 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/src/components/commonfiles/Images/Login&create/Desktop1.png')" }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#050f20]/75 via-[#071428]/55 to-transparent" />
        <div className="relative z-10 flex flex-col justify-between h-full px-10 py-10 max-w-[520px]">
          <div className="mt-4">
            <p className="text-[#4ade80] text-[0.82rem] font-semibold tracking-wider uppercase">Create Your Account</p>
            <div className="w-10 h-0.5 bg-[#4ade80] mt-2 mb-5" />
            <h1 className="text-white text-[2.1rem] font-extrabold leading-[1.15] tracking-tight">
              Join India's Most Intelligent<br />Real Estate Platform <span className="text-[#4ade80]">Yard</span>
            </h1>
            <p className="text-white/75 text-[0.9rem] mt-4 leading-relaxed">
              Get started and unlock the power of<br />data-driven real estate intelligence.
            </p>
            <div className="mt-7 space-y-3.5">
              {FEATURES.map(({ Icon, title, desc }) => (
                <div key={title} className="flex items-center gap-3">
                  <div className="bg-[#16a34a] rounded-lg p-2 shrink-0">
                    <Icon sx={{ fontSize: 18, color: 'white' }} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-[0.85rem]">{title}</p>
                    <p className="text-white/65 text-[0.73rem]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl p-5">
            <div className="flex items-center divide-x divide-white/20">
              {STATS_DESKTOP.map(({ value, label }) => (
                <div key={label} className="flex-1 text-center px-3 first:pl-0 last:pr-0">
                  <p className="text-white font-extrabold text-[1.2rem]">{value}</p>
                  <p className="text-white/65 text-[0.7rem] mt-0.5">{label}</p>
                </div>
              ))}
            </div>
            <p className="text-white/75 text-[0.8rem] text-center mt-4 border-t border-white/15 pt-3">
              Already have an account?{' '}
              <button type="button" onClick={onLoginClick} className="text-[#4ade80] font-bold hover:underline">Login here</button>
            </p>
          </div>
        </div>
      </div>

      <div className="w-[500px] shrink-0 bg-white flex flex-col shadow-[-6px_0_28px_rgba(0,0,0,0.09)]">
        <div className="flex justify-end px-7 pt-5 pb-2 shrink-0">
          <Dropdown
            options={LANG_OPTIONS}
            value={language}
            onChange={setLanguage}
            leftIcon={<LanguageIcon sx={{ fontSize: 15 }} />}
            size="sm"
            className="w-36"
          />
        </div>

        <div className="flex-1 overflow-y-auto px-7 pt-2 pb-6">
          <h2 className="text-[1.4rem] font-extrabold text-[#0f1e3d] leading-tight mb-1">
            Create Account
          </h2>
          <p className="text-[0.8rem] text-[#6b7280] mb-4">Fill in the details to get started with Yard</p>
          <CreateAccountForm {...formProps} onLoginClick={onLoginClick} twoColumn showLoginLink={false} />
        </div>
      </div>
    </div>
  )
}

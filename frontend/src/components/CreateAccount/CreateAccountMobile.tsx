import CreateAccountForm, { type CreateAccountFormProps } from './CreateAccountForm'
import { STATS_MOBILE } from './constants'

export default function CreateAccountMobile(props: CreateAccountFormProps) {
  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div
        className="relative shrink-0"
        style={{
          height: '42%',
          backgroundImage: "url('/src/components/commonfiles/Images/Login&create/mobile.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-[#050f20]/60 via-[#071428]/45 to-[#0a1a30]/20" />
        <div className="relative z-10 h-full flex flex-col px-5 pt-5 pb-4">
          <div className="flex items-center gap-2.5">
            <img src="/src/components/commonfiles/Images/YardStackLogowithouttext.png" alt="Yard" className="w-10 h-10 object-contain" />
            <div>
              <p className="text-white font-extrabold text-[1.15rem] tracking-widest leading-none">YARD</p>
              <p className="text-white/55 text-[0.48rem] tracking-[0.22em] uppercase mt-0.5">REAL ESTATE INTELLIGENCE</p>
            </div>
          </div>
          <div className="mt-auto">
            <h2 className="text-white text-[1.7rem] font-extrabold leading-tight">
              Welcome to <span className="text-[#4ade80]">Yard</span>
            </h2>
            <p className="text-white/80 text-[0.78rem] mt-1.5 leading-relaxed max-w-[270px]">
              Create your account and unlock the power of intelligent real estate insights.
            </p>
            <div className="grid grid-cols-4 gap-2 mt-4">
              {STATS_MOBILE.map(({ Icon, value, label }) => (
                <div key={label} className="bg-white/12 backdrop-blur-sm rounded-xl p-3 flex flex-col items-center text-center border border-white/15">
                  <Icon sx={{ fontSize: 22, color: '#4ade80' }} />
                  <p className="text-white font-extrabold text-[0.82rem] mt-1.5 leading-none">{value}</p>
                  <p className="text-white/65 text-[0.55rem] leading-tight mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-white rounded-t-[28px] -mt-5 relative z-10 shadow-[0_-8px_32px_rgba(0,0,0,0.18)]">
        <div className="px-5 pt-5 pb-6">
          <div className="w-10 h-1 bg-[#e5e7eb] rounded-full mx-auto mb-4" />
          <h2 className="text-[1.3rem] font-extrabold text-[#0f1e3d]">
            Create Your Account
          </h2>
          <p className="text-[0.78rem] text-[#6b7280] mt-0.5 mb-4">Fill in the details to get started</p>
          <CreateAccountForm {...props} />
        </div>
      </div>
    </div>
  )
}

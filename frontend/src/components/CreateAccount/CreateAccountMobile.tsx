import CreateAccountForm, { type CreateAccountFormProps } from './CreateAccountForm'

export default function CreateAccountMobile(props: CreateAccountFormProps) {
  return (
    <div className="relative h-[100dvh] w-full bg-[#050f20] overflow-hidden">
      {/* FIXED BACKGROUND HEADER */}
      {/* This stays pinned to the back. Logo and Welcome text remain fully visible */}
      <div
        className="absolute top-0 left-0 w-full h-[70vh] z-0"
        style={{
          backgroundImage: "url('/src/components/commonfiles/Images/Login&create/mobile.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-[#050f20]/95 via-[#071428]/80 to-[#0d1a35]/95" />
        <div className="relative z-10 px-7 pt-14 pb-10">
          <div className="flex items-center gap-3 mb-6">
            <img src="/src/components/commonfiles/Images/YardStackLogowithouttext.png" alt="Yard" className="w-12 h-12 object-contain drop-shadow-md" />
            <div>
              <p className="text-white font-extrabold text-[1.4rem] tracking-[0.15em] leading-none drop-shadow-sm">YARD</p>
              <p className="text-[#4ade80] font-semibold text-[0.6rem] tracking-[0.22em] uppercase mt-1.5 drop-shadow-sm">Real Estate Intelligence</p>
            </div>
          </div>

          <h2 className="text-white text-[2rem] font-extrabold leading-[1.1] drop-shadow-xl mt-2">
            Welcome to <span className="text-[#4ade80]">Yard</span>
          </h2>
        </div>
      </div>

      {/* SCROLLABLE FOREGROUND OVERLAY */}
      {/* This layer handles the scrolling. It overlays the background entirely */}
      <div className="relative z-10 h-[100dvh] w-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth">
        
        {/* SPACER */}
        {/* Pushes the form down so only the top ~40% of the popup is visible initially */}
        <div className="h-[55dvh] w-full shrink-0" /> 
        
        {/* BOTTOM SHEET (Form Container) */}
        {/* When the user scrolls, this slides up over the background */}
        <div className="bg-white rounded-t-[36px] shadow-[0_-16px_50px_rgba(0,0,0,0.35)] min-h-[85dvh] flex flex-col relative z-20">
          
          {/* Sticky Drag Handle Header - Stays at the top of the screen when scrolled up */}
          <div className="sticky top-0 bg-white z-30 pt-5 pb-4 rounded-t-[36px]">
            <div className="w-14 h-1.5 bg-gray-200/80 rounded-full mx-auto" />
          </div>
          
          {/* Form Content - Safe bottom padding (pb-12) ensures nothing cuts off at the bottom */}
          <div className="px-7 pb-12">
            <CreateAccountForm {...props} showLoginLink={true} />
          </div>
          
        </div>
      </div>
    </div>
  )
}
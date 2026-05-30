import { useState } from 'react'
import Header from './components/Header/Header'
import type { Page, ViewMode } from './components/Header/Header'
import Login from './components/Login/Login'
import CreateAccount from './components/CreateAccount/CreateAccount'
import MobileViewport from './components/commonfiles/MobileViewport'

export default function App() {
  const [activePage, setActivePage] = useState<Page>('dashboard')
  const [viewMode, setViewMode] = useState<ViewMode>('desktop')

  const isAuthPage = activePage === 'login' || activePage === 'createAccount'

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header always visible for easy page switching */}
      <Header
        activePage={activePage}
        onNavigate={setActivePage}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      <main className="flex-1 overflow-hidden">
        {activePage === 'login' && (
          viewMode === 'mobile' ? (
            <MobileViewport>
              <Login
                viewMode={viewMode}
                onLogin={() => setActivePage('dashboard')}
                onCreateAccountClick={() => setActivePage('createAccount')}
              />
            </MobileViewport>
          ) : (
            <Login
              viewMode={viewMode}
              onLogin={() => setActivePage('dashboard')}
              onCreateAccountClick={() => setActivePage('createAccount')}
            />
          )
        )}

        {activePage === 'createAccount' && (
          viewMode === 'mobile' ? (
            <MobileViewport>
              <CreateAccount
                viewMode={viewMode}
                onCreateAccount={() => setActivePage('dashboard')}
                onLoginClick={() => setActivePage('login')}
              />
            </MobileViewport>
          ) : (
            <CreateAccount
              viewMode={viewMode}
              onCreateAccount={() => setActivePage('dashboard')}
              onLoginClick={() => setActivePage('login')}
            />
          )
        )}

        {!isAuthPage && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#9199a8]">Current Page</p>
              <h1 className="text-4xl font-extrabold text-[#14532d] capitalize tracking-tight">{activePage}</h1>
              <p className="text-sm text-[#6b7280]">
                View mode: <span className="font-bold text-[#16a34a]">{viewMode}</span>
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

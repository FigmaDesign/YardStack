import { useState } from 'react'
import Header from './components/Header/Header'
import type { Page, ViewMode } from './components/Header/Header'
import Login from './components/Login/Login'
import CreateAccount from './components/CreateAccount/CreateAccount'
import './App.css'

export default function App() {
  const [activePage, setActivePage] = useState<Page>('dashboard')
  const [viewMode, setViewMode] = useState<ViewMode>('desktop')

  return (
    <div className="ys-app flex flex-col min-h-screen">
      <Header
        activePage={activePage}
        onNavigate={setActivePage}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      <main className="flex-1 flex flex-col items-center pt-16">
        {activePage === 'login' && (
          <div className="w-full">
            <Login onLogin={(e, p) => console.log('login', e, p)} />
          </div>
        )}

        {activePage === 'createAccount' && (
          <div className="w-full">
            <CreateAccount onCreateAccount={(n, e, p) => console.log('create', n, e)} />
          </div>
        )}

        {activePage !== 'login' && activePage !== 'createAccount' && (
          <div className="text-center space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#9199a8]">Current Page</p>
            <h1 className="text-4xl font-extrabold text-[#14532d] capitalize tracking-tight">{activePage}</h1>
            <p className="text-sm text-[#6b7280]">
              View mode: <span className="font-bold text-[#16a34a]">{viewMode}</span>
            </p>
          </div>
        )}
      </main>
    </div>
  )
}

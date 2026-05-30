import React, { useState } from 'react'
import LoginDesktop from './LoginDesktop'
import LoginMobile from './LoginMobile'

type ViewMode = 'desktop' | 'mobile'

interface LoginProps {
  viewMode?: ViewMode
  onLogin?: (email: string, password: string) => void
  onCreateAccountClick?: () => void
}

export default function Login({ viewMode = 'desktop', onLogin, onCreateAccountClick }: LoginProps) {
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [showPwd,  setShowPwd]  = useState(false)
  const [remember, setRemember] = useState(false)
  const [language, setLanguage] = useState('en')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onLogin?.(email, password)
  }

  if (viewMode === 'mobile') {
    return (
      <LoginMobile
        email={email} setEmail={setEmail}
        password={password} setPassword={setPassword}
        showPwd={showPwd} setShowPwd={setShowPwd}
        remember={remember} setRemember={setRemember}
        onSubmit={handleSubmit}
        onCreateAccountClick={onCreateAccountClick}
      />
    )
  }

  return (
    <LoginDesktop
      email={email} setEmail={setEmail}
      password={password} setPassword={setPassword}
      showPwd={showPwd} setShowPwd={setShowPwd}
      remember={remember} setRemember={setRemember}
      language={language} setLanguage={setLanguage}
      onSubmit={handleSubmit}
      onCreateAccountClick={onCreateAccountClick}
    />
  )
}

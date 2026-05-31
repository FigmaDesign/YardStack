import { useState, useCallback, type FormEvent } from 'react'
import LoginDesktop from './LoginDesktop'
import LoginMobile from './LoginMobile'

export type ViewMode = 'desktop' | 'mobile'

export interface LoginProps {
  viewMode?: ViewMode
  onLogin?: (email: string, password: string) => void
  onCreateAccountClick?: () => void
}

export default function Login({ 
  viewMode = 'desktop', 
  onLogin, 
  onCreateAccountClick 
}: LoginProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPwd, setShowPwd] = useState(false)
  const [remember, setRemember] = useState(false)
  const [language, setLanguage] = useState('en')

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      onLogin?.(email, password)
    },
    [onLogin, email, password]
  )

  const formProps = {
    email,
    setEmail,
    password,
    setPassword,
    showPwd,
    setShowPwd,
    remember,
    setRemember,
    onSubmit: handleSubmit,
    onCreateAccountClick,
  }

  if (viewMode === 'mobile') {
    return <LoginMobile {...formProps} />
  }

  return (
    <LoginDesktop
      {...formProps}
      language={language}
      setLanguage={setLanguage}
    />
  )
}
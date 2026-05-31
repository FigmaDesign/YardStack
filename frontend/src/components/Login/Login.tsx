import { useState, useCallback, type FormEvent } from 'react'
import LoginDesktop from './LoginDesktop'
import LoginMobile from './LoginMobile'

export type ViewMode = 'desktop' | 'mobile'

export interface LoginProps {
  viewMode?: ViewMode
  onLogin?: (email: string, password: string) => void
  onLoginWithPhone?: (phone: string, otp: string) => void
  onCreateAccountClick?: () => void
}

export default function Login({ 
  viewMode = 'desktop', 
  onLogin,
  onLoginWithPhone,
  onCreateAccountClick 
}: LoginProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPwd, setShowPwd] = useState(false)
  const [remember, setRemember] = useState(false)
  const [language, setLanguage] = useState('en')
  const [loginMode, setLoginMode] = useState<'email' | 'phone'>('email')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      if (loginMode === 'phone') {
        onLoginWithPhone?.(phone, otp)
      } else {
        onLogin?.(email, password)
      }
    },
    [onLogin, onLoginWithPhone, loginMode, email, password, phone, otp]
  )

  const handleSendOtp = useCallback(() => {
    if (phone.trim().length >= 10) setOtpSent(true)
  }, [phone])

  const formProps = {
    email,
    setEmail,
    password,
    setPassword,
    showPwd,
    setShowPwd,
    remember,
    setRemember,
    loginMode,
    setLoginMode,
    phone,
    setPhone,
    otp,
    setOtp,
    otpSent,
    onSendOtp: handleSendOtp,
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
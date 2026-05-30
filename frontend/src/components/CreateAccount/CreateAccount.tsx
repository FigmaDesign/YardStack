import React, { useState } from 'react'
import CreateAccountMobile from './CreateAccountMobile'
import CreateAccountDesktop from './CreateAccountDesktop'

type ViewMode = 'desktop' | 'mobile'

interface CreateAccountProps {
  viewMode?: ViewMode
  onCreateAccount?: (name: string, email: string, password: string) => void
  onLoginClick?: () => void
}

export default function CreateAccount({ viewMode = 'desktop', onCreateAccount, onLoginClick }: CreateAccountProps) {
  const [name,            setName]            = useState('')
  const [email,           setEmail]           = useState('')
  const [phone,           setPhone]           = useState('')
  const [phoneCode,       setPhoneCode]       = useState('+91')
  const [company,         setCompany]         = useState('')
  const [role,            setRole]            = useState('')
  const [password,        setPassword]        = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPwd,         setShowPwd]         = useState(false)
  const [showConfirm,     setShowConfirm]     = useState(false)
  const [agreed,          setAgreed]          = useState(false)
  const [errors,          setErrors]          = useState<Record<string, string>>({})
  const [language,        setLanguage]        = useState('en')

  function validate(): boolean {
    const next: Record<string, string> = {}
    if (!name.trim())                              next.name = 'Full name is required'
    if (!email.trim())                             next.email = 'Email is required'
    if (password.length < 8)                       next.password = 'Password must be at least 8 characters'
    if (password !== confirmPassword)              next.confirmPassword = 'Passwords do not match'
    if (!role)                                     next.role = 'Please select a role'
    if (!agreed)                                   next.agreed = 'You must accept the terms'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (validate()) onCreateAccount?.(name, email, password)
  }

  const formProps = {
    name, setName, email, setEmail, phone, setPhone, phoneCode, setPhoneCode,
    company, setCompany, role, setRole, password, setPassword,
    confirmPassword, setConfirmPassword, showPwd, setShowPwd,
    showConfirm, setShowConfirm, agreed, setAgreed, errors,
    onSubmit: handleSubmit, onLoginClick,
  }

  if (viewMode === 'mobile') {
    return <CreateAccountMobile {...formProps} />
  }

  return <CreateAccountDesktop {...formProps} language={language} setLanguage={setLanguage} />
}

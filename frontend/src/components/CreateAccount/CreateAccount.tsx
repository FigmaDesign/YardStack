import { useState } from 'react'
import './createAccount.css'

interface CreateAccountProps {
  onCreateAccount?: (name: string, email: string, password: string) => void
}

export default function CreateAccount({ onCreateAccount }: CreateAccountProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (password !== confirmPassword) return
    onCreateAccount?.(name, email, password)
  }

  return (
    <div className="ys-ca-wrapper">
      <div className="ys-ca-card">
        <div className="ys-ca-brand">
          <div className="ys-ca-logo">Y</div>
          <p className="ys-ca-title">
            Yard<span>Stack</span>
          </p>
        </div>

        <h2 className="ys-ca-heading">Create your account</h2>

        <form className="ys-ca-form" onSubmit={handleSubmit}>
          <div className="ys-form-group">
            <label htmlFor="ca-name">Full Name</label>
            <input
              id="ca-name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="ys-form-group">
            <label htmlFor="ca-email">Email</label>
            <input
              id="ca-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="ys-form-group">
            <label htmlFor="ca-password">Password</label>
            <input
              id="ca-password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="ys-form-group">
            <label htmlFor="ca-confirm">Confirm Password</label>
            <input
              id="ca-confirm"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {confirmPassword && password !== confirmPassword && (
              <span className="ys-ca-error">Passwords do not match</span>
            )}
          </div>

          <button type="submit" className="ys-ca-btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

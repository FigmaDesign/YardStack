import { useState } from 'react'
import './login.css'

interface LoginProps {
  onLogin?: (email: string, password: string) => void
}

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onLogin?.(email, password)
  }

  return (
    <div className="ys-login-wrapper">
      <div className="ys-login-card">
        <div className="ys-login-brand">
          <div className="ys-login-logo">Y</div>
          <p className="ys-login-title">
            Yard<span>Stack</span>
          </p>
        </div>

        <h2 className="ys-login-heading">Sign in to your account</h2>

        <form className="ys-login-form" onSubmit={handleSubmit}>
          <div className="ys-form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="ys-form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="ys-login-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

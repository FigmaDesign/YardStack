// Re-export shared types used across components

export type Page = 'dashboard' | 'forms' | 'login' | 'createAccount'
export type ViewMode = 'desktop' | 'mobile'

export interface User {
  id: string
  name: string
  email: string
}

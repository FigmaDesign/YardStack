export type Page = 'dashboard'| 'login' | 'createAccount'
export type ViewMode = 'desktop' | 'mobile'

export interface User {
  id: string
  name: string
  email: string
}
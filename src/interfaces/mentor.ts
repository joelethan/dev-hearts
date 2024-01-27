import type { User } from './user'

export interface Mentor extends Omit<User, 'professional'> {
  description?: string
  category: string
  linkedin: string
  company?: {
    name: string
    logo: string
  }
}

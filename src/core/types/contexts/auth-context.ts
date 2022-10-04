import { ReactNode } from 'react'

export type AuthContextProps = {
  accessToken?: string
  saveAccessToken: (accessToken: string) => void
  getCurrentAccount: <T>() => T | undefined
}

export type AuthProviderProps = {
  getCurrentAccount: <T>() => T | undefined
  children: ReactNode
}

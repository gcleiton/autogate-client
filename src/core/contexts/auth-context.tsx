import React, { createContext } from 'react'
import { useAccessToken } from '@core/hooks'

import { AuthContextProps, AuthProviderProps } from '../types'

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({
  getCurrentAccount,
  children
}: AuthProviderProps) => {
  const { accessToken, saveAccessToken } = useAccessToken()
  // const getAccessToken = () => {
  //   const accessToken = Cache.get({
  //     key: 'accessToken'
  //   })
  //   return accessToken
  // }

  // const [accessToken, setAccessToken] = useState<string>(getAccessToken())

  // const saveAccessToken = (accessToken: string) => {
  //   Cache.set({
  //     key: 'accessToken',
  //     value: accessToken
  //   })
  //   setAccessToken(accessToken)
  // }

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        saveAccessToken,
        getCurrentAccount
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

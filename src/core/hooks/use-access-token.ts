import { useState } from 'react'
import { Cache } from '@core/adapters'

export const useAccessToken = () => {
  const getAccessToken = () => {
    const accessToken = Cache.get({
      key: 'accessToken'
    })
    return accessToken
  }

  const [accessToken, setAccessToken] = useState(getAccessToken())

  const saveAccessToken = (accessToken: string) => {
    Cache.set({
      key: 'accessToken',
      value: accessToken
    })
    setAccessToken(accessToken)
  }

  return {
    saveAccessToken,
    accessToken
  }
}

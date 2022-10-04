import { Cryptography, Cache } from '@core/adapters'

export const getCurrentAccount = <T>(): T | undefined => {
  const accessToken = Cache.get({ key: 'accessToken' })
  if (accessToken) {
    const decodedToken = Cryptography.decodeToken({ token: accessToken })

    const dateNow = new Date()
    const expirationToken = decodedToken.exp * 1000

    if (expirationToken < dateNow.getTime()) {
      Cache.remove({ key: 'accessToken' })
      return
    }

    return decodedToken as T
  }
}

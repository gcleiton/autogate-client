import { Cache } from '@core/adapters'
import { env } from './env'
import { ApiConfig } from '@core/types'

export const setupAutoGateApiClient = (): ApiConfig => {
  const accessToken = Cache.get({ key: 'accessToken' })

  return {
    baseUrl: env.apis.autogate.baseUrl,
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }
}

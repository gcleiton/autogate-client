import { HttpClient } from '@core/adapters'
import { setupAutoGateApiClient } from '@main/configs'
import { NotFoundError, UnexpectedError } from '@core/errors'
import { Administrator } from '@core/models'
import { HttpStatusCode } from '@core/types'

export const loadById = async (id: string): Promise<Administrator> => {
  const response = await HttpClient.of(setupAutoGateApiClient()).request({
    method: 'GET',
    url: `/administrators/${id}`
  })

  switch (response.statusCode) {
    case HttpStatusCode.Ok:
      return response.body
    case HttpStatusCode.NotFound:
      throw new NotFoundError()
    default:
      throw new UnexpectedError()
  }
}

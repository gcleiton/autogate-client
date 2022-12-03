import { HttpClient } from '@core/adapters'
import { setupAutoGateApiClient } from '@main/configs'
import { NotFoundError, UnexpectedError } from '@core/errors'
import { HttpStatusCode } from '@core/types'

export const remove = async (id: string): Promise<void> => {
  const response = await HttpClient.of(setupAutoGateApiClient()).request({
    method: 'DELETE',
    url: `/administrators/${id}`
  })

  switch (response.statusCode) {
    case HttpStatusCode.NoContent:
      return
    case HttpStatusCode.NotFound:
      throw new NotFoundError()
    default:
      throw new UnexpectedError()
  }
}

import { HttpClient } from '@core/adapters'
import { setupAutoGateApiClient } from '@main/configs'
import { NotFoundError, UnexpectedError } from '@core/errors'
import { AdministratorRequest } from '@core/models'
import { HttpStatusCode } from '@core/types'
import { ValidationError } from 'yup'

export const update = async (request: AdministratorRequest): Promise<void> => {
  const response = await HttpClient.of(
    setupAutoGateApiClient()
  ).request<AdministratorRequest>({
    method: 'PUT',
    url: `/administrators/${request.id}`,
    body: request
  })

  switch (response.statusCode) {
    case HttpStatusCode.Created:
      return
    case HttpStatusCode.NotFound:
      throw new NotFoundError()
    case HttpStatusCode.UnprocessableEntity:
      throw new ValidationError(response.body.errors)
    default:
      throw new UnexpectedError()
  }
}

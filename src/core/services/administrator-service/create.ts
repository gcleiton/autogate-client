import { HttpClient } from '@core/adapters'
import { setupAutoGateApiClient } from '@main/configs'
import { UnexpectedError } from '@core/errors'
import { AdministratorRequest } from '@core/models'
import { HttpStatusCode } from '@core/types'
import { ValidationError } from 'yup'

export const create = async (request: AdministratorRequest): Promise<void> => {
  const response = await HttpClient.of(
    setupAutoGateApiClient()
  ).request<AdministratorRequest>({
    method: 'POST',
    url: '/administrators',
    body: request
  })

  switch (response.statusCode) {
    case HttpStatusCode.Created:
      return
    case HttpStatusCode.UnprocessableEntity:
      throw new ValidationError(response.body.errors)
    default:
      throw new UnexpectedError()
  }
}

import { HttpClient } from '@core/adapters'
import { setupAutoGateApiClient } from '@main/configs'
import { InvalidCredentialsError, UnexpectedError } from '@core/errors'
import { LoginFormInput, LoginRequest } from '@core/models'
import { HttpStatusCode } from '@core/types'
import { ValidationError } from 'yup'

export const login = async (input: LoginFormInput): Promise<string> => {
  const response = await HttpClient.of(
    setupAutoGateApiClient()
  ).request<LoginRequest>({
    method: 'POST',
    url: '/auth/login',
    body: {
      email: input.email,
      password: input.senha
    }
  })

  switch (response.statusCode) {
    case HttpStatusCode.Ok:
      return response.body.accessToken
    case HttpStatusCode.Unauthorized:
      throw new InvalidCredentialsError()
    case HttpStatusCode.UnprocessableEntity:
      throw new ValidationError(response.body.errors)
    default:
      throw new UnexpectedError()
  }
}

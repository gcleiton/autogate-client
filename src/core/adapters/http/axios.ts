import axios, { AxiosError, AxiosResponse } from 'axios'

import { ApiConfig, HttpClientInput, HttpClientOutput } from '../../types'

interface HttpClient {
  request: <TRequest, TResponse>(
    input: HttpClientInput<TRequest>
  ) => Promise<HttpClientOutput<TResponse>>
}

class AxiosHttpClient implements HttpClient {
  private readonly apiConfig: ApiConfig

  private constructor(apiConfig: ApiConfig) {
    this.apiConfig = apiConfig
  }

  static of(apiConfig: ApiConfig): AxiosHttpClient {
    return new AxiosHttpClient(apiConfig)
  }

  async request<TRequest = any, TResponse = any>(
    input: HttpClientInput<TRequest>
  ): Promise<HttpClientOutput<TResponse>> {
    let response: AxiosResponse

    try {
      response = await axios.request({
        url: `${this.apiConfig.baseUrl}${input.url}`,
        method: input.method,
        data: input.body,
        headers: { ...this.apiConfig.headers, ...input.headers },
        params: input.params,
        responseType: input.responseType ? input.responseType : 'json'
      })
    } catch (error) {
      response = (error as AxiosError).response as AxiosResponse
    }

    return {
      statusCode: response.status,
      body: response.data,
      headers: response.headers
    }
  }
}

export default AxiosHttpClient

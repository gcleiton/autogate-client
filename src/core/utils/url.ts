import queryString from 'query-string'

export const parseToRequest = (params: any) => {
  const queryUrl = new URLSearchParams(params).toString()
  return queryString.parse(queryUrl, { arrayFormat: 'comma' })
}

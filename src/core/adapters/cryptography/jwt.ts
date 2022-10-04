import jwt_decode from 'jwt-decode'

import { DecodeToken } from '../../types'

export const decodeToken: DecodeToken = ({ token }) => {
  const decodedToken = jwt_decode(token)
  return decodedToken
}

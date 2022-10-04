import React, { ReactElement } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { Account } from '@core/models'
import { useAuth } from '@core/hooks'

type Props = {
  element: ReactElement
}

const ProtectedRoute: React.FC<Props> = ({ element }) => {
  const location = useLocation()
  const { getCurrentAccount } = useAuth()

  const currentAccount = getCurrentAccount<Account>()

  console.log(currentAccount)

  if (currentAccount === undefined) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return element
}

export default ProtectedRoute

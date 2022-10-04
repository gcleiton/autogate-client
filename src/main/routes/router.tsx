import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LoginPage } from '@modules/authentication'
import { ProtectedRoute } from '@main/proxies'
import { useAuth } from '@core/hooks'
import { Account } from '@core/models'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute element={<ProtectedPageTemp />} />}
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

const ProtectedPageTemp: React.FC = () => {
  const { getCurrentAccount } = useAuth()
  const [account, setAccount] = useState<Account>()

  useEffect(() => {
    setAccount(getCurrentAccount())
  }, [])

  return (
    <>
      <h1>Logado com sucesso!</h1>
      <div>
        <strong>Nome: </strong>
        {account?.name}
      </div>
      <div>
        <strong>Email: </strong>
        {account?.email}
      </div>
    </>
  )
}

export default Router

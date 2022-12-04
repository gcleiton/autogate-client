import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LoginPage } from '@modules/authentication'
import { MainLayout } from '@presentation/components'
import { HomePage } from '@modules/home'
import { TransitoPage } from '@modules/transito'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="transito" element={<TransitoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router

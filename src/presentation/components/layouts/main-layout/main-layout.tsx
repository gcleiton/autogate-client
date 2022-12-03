import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../layouts'
import Footer from '../footer/footer'
import * as S from './main-layout.styles'

const MainLayout: React.FC = () => {
  return (
    <>
      <S.Container>
        <S.MainWrapper>
          <Outlet />
          <Footer />
        </S.MainWrapper>
      </S.Container>
      <Sidebar />
    </>
  )
}

export default MainLayout

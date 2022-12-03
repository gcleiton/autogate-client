import React from 'react'
import { SidebarHeader } from './components'
import * as S from './sidebar.styles'

const Sidebar: React.FC = () => {
  return (
    <S.Container>
      <SidebarHeader />
    </S.Container>
  )
}

export default Sidebar

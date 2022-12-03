import { Brand } from '@presentation/components/general'
import React from 'react'
import * as S from './sidebar-header.styles'

const SidebarHeader: React.FC = () => {
  return (
    <S.Container>
      <Brand />
    </S.Container>
  )
}

export default SidebarHeader

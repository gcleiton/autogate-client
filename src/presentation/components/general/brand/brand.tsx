import React from 'react'
import { Logo } from '@presentation/assets'
import * as S from './brand.styles'

const Brand: React.FC = () => {
  return (
    <S.Container>
      <Logo />
      <h1>AutoGate</h1>
    </S.Container>
  )
}

export default Brand

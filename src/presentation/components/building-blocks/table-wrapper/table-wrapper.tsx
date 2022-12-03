import React, { ReactNode } from 'react'

import * as S from './table-wrapper.styles'

type Props = {
  children: ReactNode
}

const TableWrapper: React.FC<Props> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default TableWrapper

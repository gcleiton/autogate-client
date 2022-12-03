import React from 'react'
import { Spinner } from 'react-bootstrap'
import * as S from './table-loading.styles'

const TableNoData: React.FC = () => {
  return (
    <S.Container>
      <Spinner animation="border" style={{ width: '3rem', height: '3rem' }} />
    </S.Container>
  )
}

export default TableNoData

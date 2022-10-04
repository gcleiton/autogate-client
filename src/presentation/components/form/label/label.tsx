import React from 'react'
import { Form } from 'react-bootstrap'
import { LabelProps } from '../../../types'
import * as S from './label.styles'

const Label: React.FC<LabelProps> = ({ children, ...rest }) => {
  return (
    <S.LabelWrapper>
      <Form.Label {...rest}>{children}</Form.Label>
    </S.LabelWrapper>
  )
}

export default Label

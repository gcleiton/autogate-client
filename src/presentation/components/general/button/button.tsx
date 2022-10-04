import React from 'react'
import { Button as BsButton, Spinner } from 'react-bootstrap'
import { ButtonProps } from '../../types'
import * as S from './button.styles'

const Button: React.FC<ButtonProps> = ({
  isFull = false,
  isLoading = false,
  children,
  ...rest
}) => {
  return (
    <S.ButtonWrapper isFull={isFull}>
      <BsButton {...rest}>
        {isLoading ? (
          <Spinner variant="light" size="sm" animation="border" />
        ) : (
          <span>{children}</span>
        )}
      </BsButton>
    </S.ButtonWrapper>
  )
}

export default Button

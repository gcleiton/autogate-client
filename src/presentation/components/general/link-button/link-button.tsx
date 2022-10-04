import React from 'react'
import { LinkButtonProps } from '../../../types'

import * as S from './link-button.styles'

const LinkButton: React.FC<LinkButtonProps> = ({
  disabled = false,
  children,
  ...rest
}) => {
  return (
    <S.LinkButtonWrapper disabled={disabled} {...rest}>
      {children}
    </S.LinkButtonWrapper>
  )
}

export default LinkButton

import React, { HTMLAttributes, ReactNode } from 'react'
import * as S from './section.styles'

type Props = HTMLAttributes<HTMLDivElement> & {
  title: string
  isRequired?: boolean
  actions?: ReactNode[]
}

const Section: React.FC<Props> = ({
  title,
  isRequired,
  actions,
  children,
  ...rest
}) => {
  return (
    <>
      <S.Container {...rest}>
        <S.Title>{title}</S.Title>
        {actions && <S.Actions>{actions.map((action) => action)}</S.Actions>}
      </S.Container>

      {children}
    </>
  )
}

export default Section

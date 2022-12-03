import React, { ReactNode } from 'react'
import { IconType } from 'react-icons'
import * as S from './page-header.styles'

type Props = {
  title: string
  description: string
  icon: IconType
  actions: ReactNode[]
}

const PageHeader: React.FC<Props> = ({
  title,
  description,
  icon: Icon,
  actions
}) => {
  return (
    <S.Container>
      <S.IconWrapper>
        <Icon />
      </S.IconWrapper>

      <S.HeadingWrapper>
        <S.Title>{title}</S.Title>

        <S.Description>{description}</S.Description>
      </S.HeadingWrapper>

      <S.ButtonGroup>
        {actions && (
          <>
            {actions.map((action, index) => (
              <span key={index}>{action}</span>
            ))}
          </>
        )}
      </S.ButtonGroup>
    </S.Container>
  )
}

export default PageHeader

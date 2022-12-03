import React, { ReactNode } from 'react'
import { Section } from '../../data'

import * as S from './panel.styles'

type Props = {
  title?: string
  actions?: ReactNode[]
  children: ReactNode
}

const Panel: React.FC<Props> = ({ title, actions = [], children }) => {
  return (
    <S.Container>
      {title && (
        <S.Header>
          <Section title={title} />
          {actions.length > 0 && (
            <S.Actions>{actions.map((action) => action)}</S.Actions>
          )}
        </S.Header>
      )}
      <S.Content>{children}</S.Content>
    </S.Container>
  )
}

export default Panel

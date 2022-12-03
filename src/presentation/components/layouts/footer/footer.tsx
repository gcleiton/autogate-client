import { LinkButton } from '@presentation/components/general'
import React, { memo } from 'react'

import * as S from './footer.styles'

const Footer: React.FC = () => {
  return (
    <S.Container>
      <p>
        Developed with <span>&hearts;</span> by{' '}
        <a href="https://github.com/gcleiton">
          <LinkButton>Gabriel Cleiton</LinkButton>
        </a>
      </p>
    </S.Container>
  )
}

export default memo(Footer)

import React from 'react'
import { InfoPanelProps } from '@presentation/components/types'
import { Panel } from '../../layouts'
import * as S from './info-panel.styles'

const InfoPanel: React.FC<InfoPanelProps> = ({ icon: Icon, label, value }) => {
  return (
    <Panel>
      <S.Content>
        <S.IconWrapper>
          <Icon />
        </S.IconWrapper>
        <S.Value>{value}</S.Value>
        <S.Label>{label}</S.Label>
      </S.Content>
    </Panel>
  )
}

export default InfoPanel

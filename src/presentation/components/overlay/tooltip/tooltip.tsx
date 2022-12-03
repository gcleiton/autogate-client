import React, { ReactElement } from 'react'
import { OverlayTrigger, TooltipProps as BsTooltipProps } from 'react-bootstrap'
import { OverlayInjectedProps } from 'react-bootstrap/esm/Overlay'

import * as S from './tooltip.styles'

type Props = BsTooltipProps & {
  title?: string
  children: ReactElement
}

const Tooltip: React.FC<Props> = ({ title, children, ...rest }) => {
  const renderTooltip = (props: OverlayInjectedProps) => {
    return title ? (
      <S.TooltipWrapper {...props}>{title}</S.TooltipWrapper>
    ) : (
      <></>
    )
  }

  return (
    <OverlayTrigger {...rest} overlay={renderTooltip}>
      <span>{children}</span>
    </OverlayTrigger>
  )
}

export default Tooltip

import React, { ReactElement } from 'react'
import { TooltipProps } from 'react-bootstrap'
import { Tooltip } from '../../overlay'

export type Props = {
  tooltip?: string
  tooltipConfig?: Omit<TooltipProps, 'title' | 'children'>
  children: ReactElement | string
}

const TooltipWrapper: React.FC<Props> = ({
  tooltip,
  tooltipConfig,
  children
}) => {
  return (
    <Tooltip title={tooltip} {...tooltipConfig}>
      <span>{children}</span>
    </Tooltip>
  )
}

export default TooltipWrapper

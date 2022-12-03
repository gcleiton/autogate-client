import React, { ReactElement, ReactNode } from 'react'
import { TooltipWrapper } from '../../building-blocks'
import Button from '../button/button'
import { ButtonProps as BsButtonProps, TooltipProps } from 'react-bootstrap'
import * as S from './icon-button.styles'
import { IconType } from 'react-icons'

type ButtonProps = BsButtonProps & {
  isLoading?: boolean
  isFull?: boolean
  leftIcon?: IconType
  children?: ReactNode
}

type TooltipWrapperProps = {
  tooltip?: string
  tooltipConfig?: Omit<TooltipProps, 'title' | 'children'>
  children: ReactElement | string
}

export type Props = Omit<ButtonProps, 'children' | 'isFull'> &
  Omit<TooltipWrapperProps, 'children'> & {
    icon: IconType
  }

const IconButton: React.FC<Props> = ({
  icon: Icon,
  tooltip,
  tooltipConfig,
  ...rest
}) => {
  return (
    <TooltipWrapper tooltip={tooltip} tooltipConfig={tooltipConfig}>
      <S.ButtonWrapper>
        <Button {...rest}>
          <Icon />
        </Button>
      </S.ButtonWrapper>
    </TooltipWrapper>
  )
}

export default IconButton

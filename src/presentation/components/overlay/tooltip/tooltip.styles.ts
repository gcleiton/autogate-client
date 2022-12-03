import styled, { css } from 'styled-components'
import { Tooltip } from 'react-bootstrap'

export const TooltipWrapper = styled(Tooltip)`
  ${({ theme }) => css`
    &.tooltip {
      &.show {
        opacity: 1;
      }

      .tooltip-inner {
        background-color: ${theme.colors.gray};
        color: ${theme.colors.white};
        box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
      }

      &.bs-tooltip-end .tooltip-arrow:before {
        border-right-color: ${theme.colors.gray} !important;
      }

      &.bs-tooltip-start .tooltip-arrow:before {
        border-left-color: ${theme.colors.gray} !important;
      }

      &.bs-tooltip-bottom .tooltip-arrow:before {
        border-bottom-color: ${theme.colors.gray} !important;
      }

      &.bs-tooltip-top .tooltip-arrow:before {
        border-top-color: ${theme.colors.gray} !important;
      }
    }
  `}
`

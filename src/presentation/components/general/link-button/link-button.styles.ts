import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

type LinkButtonWrapperProps = {
  disabled: boolean
}

export const LinkButtonWrapper = styled(Link)<LinkButtonWrapperProps>`
  ${({ theme, disabled }) => css`
    position: relative;
    color: ${theme.colors.primary} !important;
    font-size: 0.9rem;
    font-weight: ${theme.font.normal};
    text-decoration: none;

    ${disabled &&
    css`
      pointer-events: none;
      cursor: not-allowed;
      opacity: ${theme.opacities.medium};
    `}

    &::before {
      position: absolute;
      left: 0;
      bottom: 0;
      content: '';
      width: 0;
      height: 2px;
      background-color: ${theme.colors.primary};
      transition: width 0.25s ease 0s;
    }

    &:hover {
      &::before {
        width: 100%;
      }
    }
  `}
`

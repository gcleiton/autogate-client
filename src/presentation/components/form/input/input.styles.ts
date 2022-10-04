import { rgba } from 'polished'
import styled, { css } from 'styled-components'

type InputWrapperProps = {
  isInvalid: boolean
  isDisabled: boolean
}

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme, isInvalid, isDisabled }) => css`
    position: relative;
    padding: 0 !important;
    border: 2px solid ${theme.colors.background};
    border-radius: 0.3rem;
    transition: color 0.3s ease 0s, border-color 0.3s ease 0s,
      background-color 0.3s ease 0s;

    ${isDisabled &&
    css`
      border: 2px solid ${rgba(theme.colors.gray, 0.25)};
    `}

    ${isInvalid &&
    css`
      border: 2px solid ${rgba(theme.colors.danger, 0.25)};
    `}

    input, textarea {
      color: ${theme.colors.textPrimary} !important;
      padding-left: '0.75rem';
      background-color: ${isDisabled
        ? theme.colors.backgroundSecondary
        : theme.colors.background} !important;
      border: none;
      cursor: text;

      ${isDisabled &&
      css`
        cursor: not-allowed;
      `}

      &.form-control.is-invalid {
        background: none;
        background-color: ${theme.colors.background};
        border-color: ${theme.colors.gray};
        padding-right: 0.75em;
      }

      &::placeholder {
        color: ${rgba(theme.colors.textPrimary, 0.75)};
      }
    }

    &:focus-within {
      box-shadow: none;
      border: 2px solid
        ${isInvalid ? theme.colors.danger : theme.colors.primary};
      border-radius: 0.3rem;

      input,
      textarea {
        &:focus {
          box-shadow: none;
          border: none;
          background-color: ${theme.colors.background};
        }
      }

      svg {
        color: ${isInvalid ? theme.colors.danger : theme.colors.primary};
      }
    }
  `}
`

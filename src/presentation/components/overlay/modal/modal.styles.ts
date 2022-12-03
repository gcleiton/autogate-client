import { rgba } from 'polished'
import { Modal } from 'react-bootstrap'
import styled, { css } from 'styled-components'

export const ModalWrapper = styled(Modal)`
  ${({ theme }) => css`
    .modal-content {
      border: 0 none;
    }

    .modal-header {
      background-color: ${theme.colors.backgroundSecondary};
      padding: 1.5rem 1.5rem 0rem 1.5rem;
      border-bottom: none;
      border-top-right-radius: 6px;
      border-top-left-radius: 6px;

      .modal-title {
        display: flex;
        align-items: center;
        color: ${theme.colors.primary};
        font-weight: ${theme.font.bold};
        font-size: ${theme.font.sizes.large};

        svg {
          color: ${theme.colors.primary};
          margin-right: 0.625rem;
          font-size: ${theme.font.sizes.large};
        }
      }

      .btn-close {
        background-size: 0.65rem;

        &:hover {
          background-color: ${rgba(theme.colors.gray, 0.25)};
          border-radius: 50%;
        }

        &:focus {
          box-shadow: none;
        }
      }
    }

    .modal-body {
      color: ${theme.colors.textPrimary};
      background-color: ${theme.colors.backgroundSecondary};
      padding: 1.5rem;
      max-height: 75vh;
      overflow-y: auto;
    }

    .modal-footer {
      text-align: right;
      background-color: ${theme.colors.backgroundSecondary};
      padding: 0rem 1.5rem 1.5rem 1.5rem;
      border-top: none;
      border-bottom-right-radius: 6px;
      border-bottom-left-radius: 6px;

      & > * {
        margin: 0 0 0 0.85rem;
      }
    }
  `}
`

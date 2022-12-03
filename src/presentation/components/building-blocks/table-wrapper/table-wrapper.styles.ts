import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .rdt_Table {
      border: transparent;
      border-top: 0.1rem solid ${theme.colors.primary};
      border-radius: 0.28571429rem;
      background-color: transparent;
    }

    .rdt_TableHeadRow {
      background-color: ${theme.colors.background};
      font-weight: 600;
      min-height: 60px;
      font-size: 0.925rem;
      color: ${theme.colors.textPrimary};
      border-bottom: none;
    }

    .rdt_TableRow {
      font-size: 0.875rem;
      color: ${theme.colors.textPrimary};
      background-color: ${rgba(theme.colors.background, 0.5)};
      padding: 0.75rem 0 0.75rem 0;
      border-bottom: none;

      &:nth-child(odd) {
        background-color: ${theme.colors.backgroundSecondary};
      }

      &:hover {
        background-color: ${rgba(theme.colors.primary, 0.2)};
      }
    }

    .rdt_TableCell {
      * + * {
        margin-left: 0.25rem;
      }
    }

    .rdt_Pagination {
      background-color: transparent;

      * {
        color: ${theme.colors.textPrimary};

        button {
          fill: ${rgba(theme.colors.textPrimary, 0.8)};
        }

        &:disabled {
          fill: ${rgba(theme.colors.textPrimary, 0.2)};
        }
      }
    }
  `}
`

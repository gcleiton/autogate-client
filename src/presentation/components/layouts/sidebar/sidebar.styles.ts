import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 16.875rem;
    padding: 0 1.2rem;
    background-color: ${theme.colors.primary};
    z-index: ${theme.indexes.high};
    overflow-y: auto !important;
    overflow-x: hidden;
    transition: ${theme.transitions.default};
  `}
`

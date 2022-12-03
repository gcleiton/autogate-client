import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: calc(100% - 16.875rem);
    float: right;
  `}
`

export const MainWrapper = styled.div`
  margin: 1.25rem 1.25rem;
`

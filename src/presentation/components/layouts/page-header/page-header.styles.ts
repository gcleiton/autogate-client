import styled from 'styled-components'
import { mediaQuery } from '@presentation/styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.25rem;

  ${mediaQuery.greaterThan('mobile')`
    flex-direction: row;
  `}
`

export const IconWrapper = styled.div`
  display: none;

  ${mediaQuery.greaterThan('mobile')`
    display: flex;
    color: ${(props) => props.theme.colors.primary};
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-right: 1.2rem;
    background-color: ${(props) => props.theme.colors.backgroundSecondary};
    border-radius: 0.25rem;
    width: 60px;
    height: 60px;

    * {
      margin: 0 auto;
    }
  `}
`

export const HeadingWrapper = styled.div`
  ${mediaQuery.greaterThan('mobile')`
    display: flex;
    flex-direction: column;
    text-align: initial;
  `}
`

export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.5rem;

  ${mediaQuery.greaterThan('mobile')`
    margin-bottom: 0.3rem;
  `}
`

export const Description = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textPrimary};
  opacity: 0.9;
  margin-bottom: 0;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;

  ${mediaQuery.greaterThan('mobile')`
    margin-top: 0;
    margin-left: auto;
  `}
`

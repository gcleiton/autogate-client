import { rgba } from 'polished'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { media } from '@presentation/styles'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: ${theme.colors.primary};
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    z-index: ${theme.indexes.high};

    background-color: ${theme.colors.background};

    ${media.greaterThan('mobile')`
    /* Begin: centraliza horizontalmente e verticalmente */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* End: centraliza horizontalmente e verticalmente */
    width: 30rem;
    padding: 2rem 3rem;
    border-radius: 5px;
    background-color: ${rgba(theme.colors.background, 0.8)};
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border: 1px solid rgba(255, 255, 255, 0.18);
    `}
  `}
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.35rem;
  margin-bottom: 1rem;

  span {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
  }
`

export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 0.75rem;
`

export const SubTitle = styled.h3`
  font-size: 1rem;
  color: ${(props) => rgba(props.theme.colors.textPrimary, 0.75)};
  margin-bottom: 1rem;
`

export const ForgotPassword = styled(Link)`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${(props) => rgba(props.theme.colors.primary, 0.9)};
  float: right;
`

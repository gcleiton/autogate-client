import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  svg {
    size: 1.2rem;
    fill: white;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 600;

    margin-left: 0.4rem;
    color: ${(props) => props.theme.colors.background} !important;
  }
`

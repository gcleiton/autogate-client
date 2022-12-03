import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  text-align: center;
  padding: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
`

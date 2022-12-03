import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  padding: 1.5rem;
  text-align: center;
  color: ${(props) => props.theme.colors.textPrimary};
  width: 100%;
`

import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  box-shadow: 0 5px 5px -5px rgb(0 0 0 / 10%);
  border: 0;
  margin-bottom: 1.25rem;
  border-radius: 0;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.4rem;
  padding: 1rem 1rem 0 1rem;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: ${(props) => props.theme.font.sizes.medium};
  font-weight: ${(props) => props.theme.font.bold};
`

export const Title = styled.div``

export const Actions = styled.div`
  display: inline-flex;
  float: right;

  & * + * {
    margin-left: 0.5rem;
  }
`

export const Content = styled.div`
  padding: 0.5rem 1rem;
`

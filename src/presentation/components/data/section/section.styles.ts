import { rgba } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid
    ${(props) => rgba(props.theme.colors.textPrimary, 0.25)};
  margin-bottom: 1rem;
`

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: ${(props) => props.theme.font.sizes.xlarge};
  font-weight: 500;
  margin: 0.6rem 0;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`

import styled from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.footer`
  border-top: 1px solid ${(props) => rgba(props.theme.colors.textPrimary, 0.4)};
  justify-content: space-between;
  align-items: center;
  word-wrap: break-word;
  width: 100%;

  padding: 0.75rem 1.5rem;

  p {
    float: right;

    span {
      font-size: 1.25rem;
      color: red;
    }
  }
`

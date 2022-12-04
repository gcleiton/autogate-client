import { rgba } from 'polished'
import styled from 'styled-components'

export const DriverPicture = styled.div`
  border: 1px solid ${(props) => rgba(props.theme.colors.textPrimary, 0.125)};
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.colors.background};
  height: 531px;
  width: 100%;
  margin: 0 auto;
  position: relative;
`

export const Picture = styled.img`
  object-fit: cover;
  border-radius: 0.25rem;
`

export const DefaultPictureWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;

  svg {
    fill: ${(props) => rgba(props.theme.colors.primary, 0.5)};
  }
`

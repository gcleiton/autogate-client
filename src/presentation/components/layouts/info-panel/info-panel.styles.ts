import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 1rem 0;
`

export const IconWrapper = styled.div`
  margin: 0 auto !important;
  display: flex;
  color: ${(props) => props.theme.colors.primary};
  font-size: 2rem;
  align-items: center;
  margin-right: 1.2rem;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 2rem;
  width: 70px;
  height: 70px;

  * {
    margin: 0 auto;
  }
`

export const Value = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  display: block;
  line-height: 1;
  margin: 1rem auto;
  opacity: 0.9;
`

export const Label = styled.div`
  margin: -0.5rem 0px 0px;
  display: block;
  opacity: 0.6;
  font-size: 1.1rem;
`

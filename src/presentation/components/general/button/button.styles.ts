import styled from 'styled-components'

type ButtonWrapperProps = {
  isFull?: boolean
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.375rem 1.25rem;
    border: 2px solid transparent;
    border-radius: 6px;
    width: ${(props) => (props.isFull ? '100%' : 'inherit')};

    &.btn-sm {
      padding: 0.25rem 0.75rem;
      font-size: 0.75rem;
    }

    &.btn-lg {
      padding: 0.5rem 1.75rem;
      font-size: 1rem;
    }

    .spinner-border {
      vertical-align: sub !important;
    }

    &:active,
    &:focus,
    &.active,
    &:active:focus {
      background-image: none;
      outline: 0;
      box-shadow: none;
    }

    & * + * {
      margin-left: 0.5rem;
    }
  }
`

import React, { forwardRef } from 'react'
import { FormControl, Form } from 'react-bootstrap'
import { Label } from '../../form'
import { InputProps } from '../../types'
import * as S from './text-input.styles'

const TextInput: React.FC<InputProps> = forwardRef(
  ({ label, error, className, ...rest }, ref) => {
    const isInvalid = error !== undefined

    return (
      <div>
        {label && <Label>{label}</Label>}
        <S.InputWrapper
          isInvalid={isInvalid}
          isDisabled={rest.disabled === true}
          className={className}
        >
          <FormControl
            ref={ref}
            isInvalid={isInvalid}
            className={`form-control ${isInvalid ? 'is-invalid' : ''}`}
            {...rest}
          />
        </S.InputWrapper>
        {isInvalid && <Form.Text className="text-danger">{error}</Form.Text>}
      </div>
    )
  }
)

export default TextInput

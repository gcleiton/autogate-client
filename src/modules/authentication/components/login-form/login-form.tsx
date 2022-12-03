import React from 'react'
import { Form, Row } from 'react-bootstrap'
import { TextInput, LinkButton } from '@presentation/components'
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form'
import { LoginFormInput } from '@core/models'

type Props = {
  formId: string
  onSubmit: SubmitHandler<LoginFormInput>
}

const LoginForm: React.FC<Props> = ({ formId, onSubmit }) => {
  const { control, formState, handleSubmit } = useFormContext<LoginFormInput>()

  return (
    <Form id={formId} onSubmit={handleSubmit(onSubmit)} className="mb-3">
      <Row className="mb-3">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextInput
              label="E-mail"
              placeholder="Digite seu e-mail"
              error={formState.errors.email?.message}
              {...field}
            />
          )}
        />
      </Row>
      <Row className="mb-2">
        <Controller
          name="senha"
          control={control}
          render={({ field }) => (
            <TextInput
              type="password"
              label="Senha"
              placeholder="Digite sua senha"
              error={formState.errors.senha?.message}
              {...field}
            />
          )}
        />
      </Row>

      <LinkButton to="" className="float-end">
        Esqueceu a senha?
      </LinkButton>
    </Form>
  )
}

export default LoginForm

import { AdministratorFormInput } from '@core/models'
import { TextInput } from '@presentation/components'
import React from 'react'
import { Form, Row } from 'react-bootstrap'
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form'

type Props = {
  formId: string
  onSubmit: SubmitHandler<AdministratorFormInput>
}

const AdministratorForm: React.FC<Props> = ({ formId, onSubmit }) => {
  const { handleSubmit, formState, control } =
    useFormContext<AdministratorFormInput>()

  return (
    <Form onSubmit={handleSubmit(onSubmit)} id={'create-administrator'}>
      <Row className="mb-3">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextInput
              label="Nome"
              error={formState.errors.name?.message}
              {...field}
            />
          )}
        ></Controller>
      </Row>
      <Row>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextInput
              label="E-mail"
              type="email"
              error={formState.errors.email?.message}
              {...field}
            />
          )}
        />
      </Row>
    </Form>
  )
}

export default AdministratorForm

import { useErrors } from '@core/hooks'
import { Administrator, AdministratorFormInput } from '@core/models'
import { administratorValidationSchema } from '@core/validators'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAdministrator, useEditAdministrator } from '../../hooks'
import { Button, MessageList, Modal } from '@presentation/components'
import React, { useEffect } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { FaPencilAlt } from 'react-icons/fa'
import AdministratorForm from '../administrator-form/administrator-form'
import { Alert } from '@core/adapters'
import { ValidationError } from '@core/errors'

type Props = {
  isOpen: boolean
  onHide: () => void
  administrator?: Administrator
}

const EditAdministratorModal: React.FC<Props> = ({
  isOpen,
  onHide,
  administrator
}) => {
  const form = useForm<AdministratorFormInput>({
    resolver: yupResolver(administratorValidationSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: ''
    }
  })
  const { errors, setErrors, addError, clearErrors } = useErrors()

  const { data } = useAdministrator(administrator?.id)
  const { mutate, isLoading } = useEditAdministrator()

  useEffect(() => {
    if (data) {
      form.reset(data)
    }
  }, [data])

  const onSubmit: SubmitHandler<AdministratorFormInput> = (input) => {
    if (administrator) {
      mutate(
        {
          id: administrator.id,
          ...input
        },
        { onSuccess, onError }
      )
    }
  }

  const onSuccess = () => {
    form.reset()
    onHide()
    clearErrors()
    Alert.callSuccess({
      title: 'Administrador Atualizado'
    })
  }

  const onError = (error: unknown) => {
    if (error instanceof ValidationError) {
      setErrors(error.errors)
    } else {
      addError((error as Error).message)
    }
  }

  const submitButton = (
    <Button
      type="submit"
      form="create-administrator"
      disabled={!form.formState.isValid}
      isLoading={isLoading}
    >
      Salvar
    </Button>
  )

  return (
    <Modal
      title="Edição de Administrador"
      icon={FaPencilAlt}
      isOpen={isOpen}
      onHide={onHide}
      actions={[submitButton]}
    >
      {errors.length > 0 && (
        <MessageList
          variant="danger"
          items={errors}
          className="mb-3"
          onClose={clearErrors}
        />
      )}
      <FormProvider {...form}>
        <AdministratorForm formId="create-administrator" onSubmit={onSubmit} />
      </FormProvider>
    </Modal>
  )
}

export default EditAdministratorModal

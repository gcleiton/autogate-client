import { useErrors, useModal } from '@core/hooks'
import { AdministratorFormInput } from '@core/models'
import { administratorValidationSchema } from '@core/validators'
import { yupResolver } from '@hookform/resolvers/yup'
import { useCreateAdministrator } from '../../hooks'
import { Button, MessageList, Modal } from '@presentation/components'
import React from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { FaPlus } from 'react-icons/fa'
import { AdministratorForm } from '../../components'
import { Alert } from '@core/adapters'
import { ValidationError } from '@core/errors'

const CreateAdministratorModal: React.FC = () => {
  const form = useForm<AdministratorFormInput>({
    resolver: yupResolver(administratorValidationSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: ''
    }
  })
  const { mutate, isLoading } = useCreateAdministrator()
  const [isOpen, openModal, closeModal] = useModal()
  const { errors, setErrors, addError, clearErrors } = useErrors()

  const onSubmit: SubmitHandler<AdministratorFormInput> = (input) => {
    mutate(input, { onSuccess, onError })
  }

  const onSuccess = () => {
    form.reset()
    closeModal()
    clearErrors()
    Alert.callSuccess({
      title: 'Administrador Cadastrado'
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
    <>
      <Button onClick={openModal}>Cadastrar</Button>
      <Modal
        title="Cadastro de Administrador"
        icon={FaPlus}
        isOpen={isOpen}
        actions={[submitButton]}
        onHide={closeModal}
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
          <AdministratorForm
            formId="create-administrator"
            onSubmit={onSubmit}
          />
        </FormProvider>
      </Modal>
    </>
  )
}

export default CreateAdministratorModal

import React, { useEffect } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'

import { LoginFormInput, loginValidationSchema } from '@core/models'
import { ValidationError } from '@core/errors'
import { AuthenticationService } from '@core/services'
import { useAuth, useErrors } from '@core/hooks'
import { Button, MessageList } from '@presentation/components'
import { Logo } from '@presentation/assets'

import { BackgroundParticles, LoginForm } from '../../components'
import * as S from './login-page.styles'

const LoginPage: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const form = useForm<LoginFormInput>({
    resolver: yupResolver(loginValidationSchema),
    mode: 'onChange'
  })
  const { getCurrentAccount, saveAccessToken } = useAuth()
  const { errors, setErrors, clearErrors } = useErrors()

  useEffect(() => {
    if (getCurrentAccount()) {
      navigate('/')
    }
    form.setFocus('email')
  }, [])

  const onError = (error: Error) => {
    form.setValue('senha', '')
    form.setFocus('senha')

    if (error instanceof ValidationError) {
      setErrors(error.errors)
    } else {
      setErrors([error.message])
    }
  }

  const onSuccess = (accessToken: string) => {
    saveAccessToken(accessToken)
    navigate(location.state.from.pathname)
  }

  const onSubmit: SubmitHandler<LoginFormInput> = async (input) => {
    try {
      const accessToken = await AuthenticationService.login(input)
      onSuccess(accessToken)
    } catch (error) {
      onError(error as Error)
    }
  }

  return (
    <S.Container>
      <BackgroundParticles />
      <S.Card>
        <S.Header>
          <Logo /> <span>AutoGate</span>
        </S.Header>
        <S.Title>Bem vindo de volta</S.Title>
        <S.SubTitle>Por favor, entre em sua conta</S.SubTitle>
        {errors.length > 0 && (
          <MessageList
            variant="danger"
            items={errors}
            onClose={clearErrors}
            className="mb-3"
          />
        )}
        <FormProvider {...form}>
          <LoginForm formId="login-form" onSubmit={onSubmit} />
        </FormProvider>
        <Button
          type="submit"
          form="login-form"
          // disabled={!form.formState.isDirty || !form.formState.isValid}
          isLoading={form.formState.isSubmitting}
          isFull
        >
          Entrar
        </Button>
      </S.Card>
    </S.Container>
  )
}

export default LoginPage

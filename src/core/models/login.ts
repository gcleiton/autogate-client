import * as yup from 'yup'

export type LoginRequest = {
  email: string
  password: string
}

export type LoginFormInput = {
  email: string
  senha: string
}

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('O e-mail é obrigatório'),
  senha: yup.string().required('A senha é obrigatória')
})

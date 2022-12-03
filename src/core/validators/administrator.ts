import * as yup from 'yup'

export const administratorValidationSchema = yup.object({
  name: yup
    .string()
    .required('O campo é obrigatório')
    .max(80, 'O campo atingiu o limite máximo de 80 caracteres'),
  email: yup
    .string()
    .required('O campo é obrigatório')
    .max(80, 'O campo atingiu o limite máximo de 80 caracteres')
    .email('Insira um e-mail válido')
})

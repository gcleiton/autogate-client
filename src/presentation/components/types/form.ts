import { InputHTMLAttributes, ReactNode } from 'react'
import { FormControlProps, FormLabelProps } from 'react-bootstrap'

export type InputProps = FormControlProps &
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    error?: string
  }

export type LabelProps = FormLabelProps & { children: ReactNode }

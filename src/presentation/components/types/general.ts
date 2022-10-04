import { ReactNode } from 'react'
import { ButtonProps as BsButtonProps } from 'react-bootstrap'
import { LinkProps } from 'react-router-dom'

export type ButtonProps = BsButtonProps & {
  isLoading?: boolean
  isFull?: boolean
  children: ReactNode
}

export type LinkButtonProps = LinkProps & {
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children?: ReactNode
}

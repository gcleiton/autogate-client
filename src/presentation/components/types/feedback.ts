import { ReactNode } from 'react'
import { AlertProps } from 'react-bootstrap'

export type MessageProps = AlertProps & {
  title?: string
  children: ReactNode
}

export type MessageListProps = Omit<MessageProps, 'children'> & {
  items: string[]
}

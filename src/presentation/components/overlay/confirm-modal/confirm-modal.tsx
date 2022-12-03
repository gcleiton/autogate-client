import { Button } from '../../general'
import { Modal } from '../../overlay'
import { ModalProps as BsModalProps } from 'react-bootstrap'
import { IconType } from 'react-icons'
import React, { ReactNode } from 'react'

type ModalProps = Omit<BsModalProps, 'show'> & {
  isOpen?: boolean
  icon?: IconType
  title?: string
  actions?: ReactNode[]
  size?: 'sm' | 'lg'
  children?: ReactNode
}

export type Props = Omit<ModalProps, 'actions' | 'size' | 'children'> & {
  message: string
  isLoading?: boolean
  onConfirm: () => void
}

const ConfirmModal: React.FC<Props> = ({
  message,
  isLoading,
  onConfirm,
  ...rest
}) => {
  const confirmButton = (
    <Button variant="primary" isLoading={isLoading} onClick={onConfirm}>
      Confirmar
    </Button>
  )

  const defaultConfigs: ModalProps = {
    actions: [confirmButton]
  }

  return (
    <Modal {...defaultConfigs} {...rest}>
      <p>{message}</p>
    </Modal>
  )
}

export default ConfirmModal

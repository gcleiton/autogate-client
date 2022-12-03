import React, { ReactNode } from 'react'
import { Modal as BsModal, ModalProps as BsModalProps } from 'react-bootstrap'
import { IconType } from 'react-icons'

import { Button } from '../../general'

import * as S from './modal.styles'

type Props = Omit<BsModalProps, 'show'> & {
  isOpen?: boolean
  icon?: IconType
  title?: string
  actions?: ReactNode[]
  size?: 'sm' | 'lg'
  children?: ReactNode
}

const Modal: React.FC<Props> = ({
  isOpen = false,
  icon: Icon,
  title,
  actions,
  children,
  ...rest
}) => {
  return (
    <S.ModalWrapper show={isOpen} backdrop="static" centered {...rest}>
      <BsModal.Header closeButton>
        <BsModal.Title>
          {Icon && <Icon />} {title}
        </BsModal.Title>
      </BsModal.Header>

      <BsModal.Body>{children}</BsModal.Body>

      <BsModal.Footer>
        <Button variant="danger" onClick={rest.onHide}>
          Fechar
        </Button>
        {actions?.map((action) => action)}
      </BsModal.Footer>
    </S.ModalWrapper>
  )
}

export default Modal

import React, { useEffect, useState } from 'react'
import { Variant } from 'react-bootstrap/esm/types'
import { Message } from '@presentation/components'
import { TransitStatus } from '../../models'
import * as S from './message-status.styles'

type Props = {
  status: TransitStatus
  message?: string
}

const MessageStatus: React.FC<Props> = ({ status, message }) => {
  const [variant, setVariant] = useState<Variant>()
  const [title, setTitle] = useState<string>()

  useEffect(() => {
    switch (status) {
      case TransitStatus.Authorized:
        setVariant('success')
        setTitle('Trânsito Autorizado!')
        break
      case TransitStatus.Unauthorized:
        setVariant('danger')
        setTitle('Trânsito Não Autorizado!')
        break
      case TransitStatus.Wait:
        setVariant('warning')
        setTitle('Nenhum Trânsito Registrado!')
        break
    }
  }, [status])

  return (
    <Message variant={variant}>
      <S.Content>
        <S.Title>{title}</S.Title>
        {message && <S.Message>{message}</S.Message>}
      </S.Content>
    </Message>
  )
}

export default MessageStatus

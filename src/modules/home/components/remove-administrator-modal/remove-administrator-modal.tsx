import { Administrator } from '@core/models'
import { useRemoveAdministrator } from '../../hooks'
import { ConfirmModal } from '@presentation/components'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { Alert } from '@core/adapters'

type Props = {
  isOpen: boolean
  onHide: () => void
  administrator?: Administrator
}

const RemoveAdministratorModal: React.FC<Props> = ({
  isOpen,
  onHide,
  administrator
}) => {
  const { mutate, isLoading } = useRemoveAdministrator()

  const onConfirm = () => {
    if (administrator?.id) {
      mutate(administrator.id, { onSuccess, onError })
    }
  }

  const onSuccess = () => {
    onHide()
    Alert.callSuccess({ title: 'Administrador Removido' })
  }

  const onError = (error: unknown) => {
    onHide()
    Alert.callError({
      title: (error as Error).name,
      description: (error as Error).message
    })
  }

  return (
    <ConfirmModal
      title="Remoção de Administrador"
      message={`Tem certeza de que deseja remover o administrator ${administrator?.name}`}
      icon={FaTrash}
      isOpen={isOpen}
      onHide={onHide}
      onConfirm={onConfirm}
      isLoading={isLoading}
    />
  )
}

export default RemoveAdministratorModal

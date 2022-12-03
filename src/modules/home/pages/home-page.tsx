import { useModal, usePagination } from '@core/hooks'
import { Administrator } from '@core/models'
import {
  IconButton,
  PageHeader,
  Panel,
  RemoteTable
} from '@presentation/components'
import React, { useEffect, useState } from 'react'
import { TableColumn } from 'react-data-table-component'
import { FaPen, FaTrash, FaUser } from 'react-icons/fa'
import {
  CreateAdministratorModal,
  EditAdministratorModal,
  RemoveAdministratorModal
} from '../components'

const HomePage: React.FC = () => {
  const { data, fetchData, totalItems } = usePagination({
    path: '/administrators'
  })
  const [isEditModalOpen, openEditModal, closeEditModal] = useModal()
  const [isRemoveModalOpen, openRemoveModal, closeRemoveModal] = useModal()
  const [selectedAdministrator, setSelectAdministrator] =
    useState<Administrator>()

  useEffect(() => {
    // eslint-disable-next-line no-void
    void fetchData()
  }, [])

  const handleEdit = (administrator: Administrator) => {
    setSelectAdministrator(administrator)
    openEditModal()
  }

  const handleRemove = (administrator: Administrator) => {
    setSelectAdministrator(administrator)
    openRemoveModal()
  }

  const columns: Array<TableColumn<Administrator>> = [
    {
      name: 'Nome',
      selector: (administrator) => administrator.name,
      sortable: true,
      center: true
    },
    {
      name: 'Email',
      selector: (administrator) => administrator.email,
      center: true
    },
    {
      name: 'Ações',
      cell: (administrator) => (
        <>
          <IconButton
            icon={FaPen}
            variant="warning"
            onClick={() => handleEdit(administrator)}
          />
          <IconButton
            icon={FaTrash}
            variant="danger"
            onClick={() => handleRemove(administrator)}
          />
        </>
      ),
      center: true
    }
  ]

  return (
    <>
      <PageHeader
        title="Administradores"
        description="Página de gerenciamento dos administradores do sistema."
        icon={FaUser}
        actions={[<CreateAdministratorModal />]}
      />
      <Panel>
        <RemoteTable
          columns={columns}
          data={data}
          fetchData={fetchData}
          totalItems={totalItems}
        />
      </Panel>
      <RemoveAdministratorModal
        isOpen={isRemoveModalOpen}
        onHide={closeRemoveModal}
        administrator={selectedAdministrator}
      />
      <EditAdministratorModal
        isOpen={isEditModalOpen}
        onHide={closeEditModal}
        administrator={selectedAdministrator}
      />
    </>
  )
}

export default HomePage

import React, { useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import {
  TableWrapper,
  TableNoData,
  TableLoading
} from '@presentation/components'
import { RemoteTableProps } from '@presentation/components/types'

const RemoteTable: React.FC<RemoteTableProps> = ({
  fetchData,
  totalItems,
  isLoading,
  striped = true,
  pagination = true,
  paginationPerPage = 10,
  ...rest
}) => {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = async (page: number) => {
    // eslint-disable-next-line no-void
    void fetchData({ options: { page } })
    setCurrentPage(page)
  }

  const handleSortChange = async (
    selectedColumn: TableColumn<unknown>,
    direction: string
  ) => {
    // fetchData({
    //   page: currentPage,
    //   perPage: paginationPerPage,
    //   sortBy: selectedColumn.name?.toString().toLowerCase(),
    //   sortDir: direction
    // })
  }

  return (
    <TableWrapper>
      <DataTable
        striped
        pagination={pagination}
        paginationServer={true}
        paginationTotalRows={totalItems}
        paginationPerPage={paginationPerPage}
        paginationDefaultPage={currentPage}
        onChangePage={handlePageChange}
        paginationComponentOptions={{
          noRowsPerPage: true,
          rangeSeparatorText: 'de'
        }}
        sortServer={true}
        onSort={handleSortChange}
        noDataComponent={<TableNoData />}
        progressComponent={<TableLoading />}
        progressPending={isLoading}
        paginationRowsPerPageOptions={undefined}
        {...rest}
      />
    </TableWrapper>
  )
}

export default RemoteTable

import { PaginationFunction } from '@core/types'
import {
  TableWrapper,
  TableNoData,
  TableLoading
} from '@presentation/components'
import React, { useState } from 'react'
import DataTable, {
  TableColumn,
  TableProps as ReactDataTableProps
} from 'react-data-table-component'

type TableProps = ReactDataTableProps<any>

type Props = TableProps & {
  fetchData: PaginationFunction
  totalItems: number
  isLoading?: boolean
}

const RemoteTable: React.FC<Props> = ({
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

import React from 'react'
import DataTable from 'react-data-table-component'
import {
  TableLoading,
  TableNoData,
  TableWrapper
} from '@presentation/components/building-blocks'
import { TableProps } from '@presentation/components/types'

const Table: React.FC<TableProps> = ({
  striped = true,
  pagination = true,
  paginationPerPage = 20,
  ...rest
}) => {
  return (
    <TableWrapper>
      <DataTable
        striped
        pagination={pagination}
        paginationPerPage={paginationPerPage}
        paginationComponentOptions={{
          noRowsPerPage: true,
          rangeSeparatorText: 'de'
        }}
        noDataComponent={<TableNoData />}
        progressComponent={<TableLoading />}
        {...rest}
      />
    </TableWrapper>
  )
}

export default Table

import { TableProps as ReactDataTableProps } from 'react-data-table-component'
import { PaginationFunction } from '@core/types'

export type TableProps = ReactDataTableProps<any>

export type RemoteTableProps = TableProps & {
  fetchData: PaginationFunction
  totalItems: number
  isLoading?: boolean
}

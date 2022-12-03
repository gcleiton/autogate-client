type Input = {
  path: string
  options?: {
    page?: number
    perPage?: number
    sortBy?: string
    sortDir?: string
  }
  queries?: Object
}

export type PaginationProps = Omit<Input, 'path'>
export type PaginationFunction = (input?: PaginationProps) => Promise<void>

type Output = {
  data: any[]
  isFetching: boolean
  totalItems: number
  fetchData: PaginationFunction
}

export type UsePagination = (input: Input) => Output

import { useCallback, useState } from 'react'

import { HttpClient } from '@core/adapters'
import { HttpStatusCode, PaginationProps, UsePagination } from '@core/types'
import { setupAutoGateApiClient } from '@main/configs'
import { UrlUtils } from '@core/utils'

export const usePagination: UsePagination = ({ path, options, queries }) => {
  const [data, setData] = useState<any[]>([])
  const [isFetching, setIsFetching] = useState(true)
  const [totalItems, setTotalItems] = useState(0)

  const getInitialParams = () => {
    return {
      ...options,
      perPage: options?.perPage ?? 10,
      ...queries
    }
  }

  const mapParamsToRequest = (params: any) => {
    const { sortBy, sortDir, perPage, ...rest } = params

    const mergedParams = Object.assign(
      {},
      {
        per_page: perPage ?? 20,
        sort_by: sortBy,
        sort_dir: sortDir
      },
      queries,
      { ...rest }
    )

    return UrlUtils.parseToRequest(mergedParams)
  }

  const handleRequest = async (params: any) => {
    setIsFetching(true)

    const response = await HttpClient.of(setupAutoGateApiClient()).request({
      url: `${path}`,
      method: 'GET',
      params: mapParamsToRequest(params)
    })

    switch (response.statusCode) {
      case HttpStatusCode.Ok:
        setData(response.body.items)
        setTotalItems(response.body.pagination.total)
        break

      default:
      // Alert.call({
      //   type: 'error',
      //   title: 'Falha ao Carregar Dados',
      //   description:
      //     'Tente novamente mais tarde. Caso o problema persista, contate alguém do suporte técnico.'
      // })
    }

    setIsFetching(false)
  }

  const fetchData = useCallback(async (input?: PaginationProps) => {
    console.log(input)
    const params = Object.assign(
      {},
      getInitialParams(),
      options,
      queries,
      input?.options,
      input?.queries
    )

    await handleRequest(params)
  }, [])

  return {
    data,
    isFetching,
    totalItems,
    fetchData
  }
}

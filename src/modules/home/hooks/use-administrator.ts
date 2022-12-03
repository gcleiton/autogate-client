import { useQuery } from '@tanstack/react-query'
import { AdministratorService } from '@core/services'

export const useAdministrator = (id?: string) => {
  return useQuery(
    ['/administrators', id],
    async () => id && (await AdministratorService.loadById(id)),
    {
      enabled: !!id
    }
  )
}

import { AdministratorService } from '@core/services'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useRemoveAdministrator = () => {
  const queryClient = useQueryClient()

  return useMutation(AdministratorService.remove, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['/administrators'])
    }
  })
}

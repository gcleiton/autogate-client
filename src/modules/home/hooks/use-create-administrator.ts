import { AdministratorService } from '@core/services'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateAdministrator = () => {
  const queryClient = useQueryClient()

  return useMutation(AdministratorService.create, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['/administrators'])
    }
  })
}

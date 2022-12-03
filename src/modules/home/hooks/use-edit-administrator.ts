import { AdministratorService } from '@core/services'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useEditAdministrator = () => {
  const queryClient = useQueryClient()

  return useMutation(AdministratorService.update, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['/administrators'])
    }
  })
}

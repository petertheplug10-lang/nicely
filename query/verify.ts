import { useMutation } from '@tanstack/react-query'
import { fetcher } from '@/utils/fetcher'

export const useVerify = () => {
  return useMutation({
    mutationFn: (encrypted_code: string) =>
      fetcher(`/api/access-reward/${encrypted_code}`, {
      }),
  })
}
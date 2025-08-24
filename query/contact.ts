import { useMutation, useQuery } from '@tanstack/react-query'
import { fetcher } from '@/utils/fetcher'

type Contact = {
  firstname: string
  lastname: string
  email: string
  message: string
}

export const useContact = () => {
  return useMutation({
    mutationFn: (data: Contact) =>
      fetcher(`/api/messages`, {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  })
}
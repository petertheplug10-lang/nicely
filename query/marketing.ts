import { queryOptions } from '@tanstack/react-query'
import { fetcher } from '@/utils/fetcher'

export const marketingOptions = queryOptions({
  queryKey: ['marketing'],
  queryFn: async () => {
    try {
      const response = await fetcher('/api/marketing')
      return response
    } catch (error) {
      return {
        data: {
          imgUrl: null
        }
      }
    }
  },
})
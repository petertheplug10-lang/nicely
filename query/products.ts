import { queryOptions } from '@tanstack/react-query'
import { fetcher } from '@/utils/fetcher'

export const featuredProductsOptions = queryOptions({
  queryKey: ['featuredProducts'],
  queryFn: async () => {
    const response = await fetcher('/api/products?featured=true&page_size=6')
    return response
  },
})

export const productsOptions = queryOptions({
  queryKey: ['products'],
  queryFn: async () => {
    const response = await fetcher('/api/products?page_size=999')
    return response
  },
})

export const productOptions = (id: string) => queryOptions({
  queryKey: ['product', id],
  queryFn: async () => {
    const response = await fetcher(`/api/products/${id}`)
    return response
  },
})


export const verifyOptions = (id: string) => queryOptions({
  queryKey: ['verify'],
  queryFn: async () => {
    try {
      const response = await fetcher(`/api/access-reward/${id}`)
      return response
    } catch (error) {
      return {
          status: 'error',
          error: error
      }
    }
    
  },
})

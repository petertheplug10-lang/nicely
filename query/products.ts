import { queryOptions } from '@tanstack/react-query'
import { fetcher } from '@/utils/fetcher'

export const featuredProductsOptions = queryOptions({
  queryKey: ['featuredProducts'],
  queryFn: async () => {
    const response = await fetcher('/api/products?featured=true')
    return response
  },
})

export const productsOptions = queryOptions({
  queryKey: ['products'],
  queryFn: async () => {
    const response = await fetcher('/api/products')
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
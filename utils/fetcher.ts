const isServer = typeof window === 'undefined'

const API_URL = isServer ? process.env.NEXT_PUBLIC_API_URL : '/api/proxy'

export const fetcher = async (url: string, options: RequestInit = {}) => {
  const res = await fetch(`${API_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
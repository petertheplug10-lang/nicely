import { verifyOptions } from "@/query/products";
import { getQueryClient } from "@/app/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function ProductLayout({ children, params }: { children: React.ReactNode, params: { id: string } }) {
  const queryClient = getQueryClient()
  const { id } = await params;
  void queryClient.prefetchQuery(verifyOptions(id as string)) 
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  )
}
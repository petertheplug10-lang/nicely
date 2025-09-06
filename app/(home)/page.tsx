import Classic from "@/components/home/classic";
import Contact from "@/components/home/contact";
import Verification from "@/components/home/verification";
import WhatIsNicozy from "@/components/home/nicozy/whatIsNicozy";
import { getQueryClient } from "@/app/get-query-client";
import { featuredProductsOptions } from "@/query/products";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { marketingOptions } from "@/query/marketing";


export default function Home() {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(featuredProductsOptions)
  void queryClient.prefetchQuery(marketingOptions)  
  return (
    <div className="w-full">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div className="h-[500px]" />
        <WhatIsNicozy />
        <Classic />
        <Verification />
        <Contact />
      </HydrationBoundary>
    </div>
  );
}

export const dynamic = 'force-dynamic'
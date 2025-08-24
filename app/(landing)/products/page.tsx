import { getQueryClient } from "@/app/get-query-client";
import ProductsList from "@/components/productsList";
import { productsOptions } from "@/query/products";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(productsOptions)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
    <div className="min-h-screen bg-black text-white">
      {/* Top Header */}
      <div className="flex items-center justify-center gap-4 py-8">
        <Image src="/img/star-yellow.png" alt="star" width={20} height={20} />
        <h1 className="text-2xl text-center font-semibold text-[#F5E7D4] uppercase">
          SERIES 1 : CLASSIC
        </h1>
        <Image src="/img/star-yellow.png" alt="star" width={20} height={20} />
      </div>

      <div className="flex max-w-[1000px] px-6 md:flex-row flex-col mx-auto">
        {/* Left Navigation Sidebar */}
        <div className="md:w-30 border-gray-700 px-6 md:px-0">
          <h2 className="hidden md:block text-sm font-medium text-[rgba(248,233,214,0.5)] mb-3">SERIES</h2>
          <nav className="space-y-3 flex items-start justify-between md:flex-col text-sm">
            <Link 
              href="/products" 
              className="text-[#F5E7D4] font-bold border-b-2 border-[#F5E7D4] pb-1"
            >
              classic
            </Link>
            <Link 
              href="/products/flavors" 
              className="text-amber-300 hidden hover:text-white transition-colors"
            >
              Flavours
            </Link>
            <Link 
              href="/products/special-editions" 
              className="text-amber-300 hidden hover:text-white transition-colors"
            >
              Special editions
            </Link>
          </nav>
        </div>

        {/* Main Product Display Area */}
        <div className="flex-1 p-6">
            <ProductsList />
        </div>
      </div>
    </div>
    </HydrationBoundary>
  );
} 
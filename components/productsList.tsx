'use client'
import { productsOptions } from "@/query/products";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default function ProductsList() {
  const { data: { data: {products} } } = useSuspenseQuery(productsOptions)
  console.log("products", products)
  const renderProducts = products.map((product: any) => ({
    id: product.id,
    price: product.price,
    productType: product.subtitle,
    baseFlavor: product.name,
    image: product.cover_image,
    nicotine: product.weight,
  }))
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {renderProducts.map((product: any) => (
              <Link href={`/products/${product.id}`} key={product.id} className="bg-black border border-[#F5E7D4] rounded-lg p-3">
                {/* Top Section */}
                <div className="mb-4">
                  <img className="w-full md:h-[140px] object-cover" src={product.image} alt={product.flavor} />
                </div>
                {/* Bottom Section */}
                <div className="space-y-1">
                  <p className="text-lg text-[#F8C994] font-semibold">{product.baseFlavor}</p>
                  <div className="flex items-center text-[#F5E7D4] justify-between gap-2">
                    <p className="w-16 text-sm ">{product.productType}</p>
                   <p className="text-sm"><span className="md:text-3xl">{product.nicotine}</span> mg</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
  )
}

'use client'
import Image from "next/image";
import Link from "next/link";
import { useSuspenseQuery } from "@tanstack/react-query";
import { featuredProductsOptions } from "@/query/products";

export default function Classic() {
  const { data: { data: {products} } } = useSuspenseQuery(featuredProductsOptions)
  console.log(products)
  const data = products.map((product: any) => ({
    id: product.id,
    price: product.price,
    flavor: product.subtitle,
    label: product.name,
    image: product.cover_image,
    nicotine: product.weight,
  }))
  
  return (
    <div className="px-4">
    <div className="mt-[60px] bg-black w-[1000px] max-w-full mx-auto md:px-6 text-[#f8e9d6] md:border border-[#f8e9d6] rounded-xl py-10">
      <div className="flex items-center justify-center gap-4">
        <Image src="/img/star-yellow.png" alt="logo" width={20} height={20} />
        <span className="md:font-black font-semibold lg:text-5xl text-2xl text-[#F8C994] md:text-[#f8e9d6] uppercase">series 1:classic</span>
        <Image src="/img/star-yellow.png" alt="logo" width={20} height={20} />
      </div>
      <ul className="flex items-center flex-wrap justify-between gap-4 mt-10">
        {data.map((item: any) => (
          <li key={item.id} className="rounded-lg border border-[#f8e9d6] w-full p-4 max-w-[47%] md:max-w-[20%] lg:max-w-[30%]">
            <img className="w-full md:h-[140px] object-cover" src={item.image} alt={item.flavor} />
            <div className="flex justify-between gap-2 mt-4">
              <div>
                <h3 className="uppercase text-sm lg:text-2xl font-semibold text-[#F8C994]">{item.flavor}</h3>
                <p className="text-xs lg:text-base uppercase">{item.label}</p>
              </div>
              <p className="text-xs lg:text-base font-semibold md:font-black"><span className="text-3xl lg:text-5xl mr-1">{item.nicotine}</span>mg</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex items-center md:justify-center mt-10">
        <Link href="/products" className="uppercase block w-[80%] text-center md:w-auto mx-auto md:mx-0 bg-[#EAAA63] md:bg-transparent text-black md:text-[#f8e9d6] px-4 py-2 font-semibold md:font-black lg:text-2xl text-lg">learn more</Link>
      </div>
    </div>
    </div>
  )
}
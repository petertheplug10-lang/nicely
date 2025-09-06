'use client'
import Back from "@/components/back";
import { productOptions } from "@/query/products";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// 使用步骤数据
const usageSteps = [
  {
    id: 1,
    title: "ONE",
    subtitle: "Open the pack",
    description: "Peel off the side label completely, then slide the top lid to open your NICOZY pack."
  },
  {
    id: 2,
    title: "TWO",
    subtitle: "Place the Pouch",
    description: "Take out one pouch and place it between your upper lip and gum. Each pouch delivers nicotine steadily for up to 30 minutes or more."
  },
  {
    id: 3,
    title: "THREE",
    subtitle: "Dispose Responsibly",
    description: "After use, throw the pouch away properly. Keep used and unused pouches out of reach of children and pets."
  }
];

export default function ProductDetail() {
  const params = useParams();
  const id = params?.id as string;
  const { data: { data: product } } = useSuspenseQuery(productOptions(id))
  console.log("product", product)
  return (
    <div className="min-h-screen bg-black text-white px-4 pb-8 md:pt-15 pt-8">
      <div className="w-[993px] max-w-full mx-auto">
        <div className="flex flex-wrap lg:gap-13 gap-6">
          {/* Left Side - Product Visual */}
          <Back>POUCH SERIES</Back>
          <div className="flex justify-center w-full md:w-auto">
            <div className="bg-[#222222] w-full px-4 md:w-[300px] lg:w-[380px] h-[380px] rounded-lg flex justify-center items-center">
              <Swiper modules={[Pagination]} pagination={true} slidesPerView={1}>
                {
                  product.images.map(({url, id}: {url: string, id: string}) => (
                    <SwiperSlide key={id}>
                      <img src={url} alt={product.name} width={334} height={200} className="w-full h-full object-cover" />
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>

          {/* Right Side - Product Information */}
          <div className="flex-1">
            <nav className="text-sm text-left mb-2 hidden md:block">
              <Link href="/" className="text-white hover:text-gray-300">
                Home page
              </Link>
              <span className="mx-2 text-gray-400">{'>'}</span>
              <span className="text-gray-400">POUCH SERIES</span>
            </nav>
            <h1 className="text-[#F5E7D4] text-4xl font-semibold">
              {product.name}
            </h1>

            {/* Key Details */}
            <div className="flex gap-12 items-center mt-6">
              <div className="flex flex-col gap-1">
                <span className="text-white text-sm">Number of pouches</span>
                <span className="text-[#F5E7D4] text-xl font-semibold">{product.number_of_pouches}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white text-sm">Nicotine/pouch</span>
                <span className="text-[#F5E7D4] text-xl font-semibold">{product.weight}</span>
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-[rgba(255,255,255,0.3)] mt-9 mb-8"></div>

            {/* Description */}
            <div>
              <h3 className="text-[#EAAA63] font-semibold text-lg mb-3">Description</h3>
              <p className="text-white text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>

        {/* How to Use Section */}
        <div className="mt-[100px]">
          <Image src={'/img/title/how-to-use.svg'} className="mb-6 mx-auto" alt="how to use" width={190} height={43} />

          <div className ="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 border border-[#F5E7D4] rounded-lg p-6">
            {usageSteps.map((step) => (
              <div key={step.id} className="bg-[#373737] rounded-lg lg:p-6 p-3">
                <div className="text-center mb-4">
                  <h3 className="text-[#F5E7D4] font-bold flex items-center justify-center gap-5 text-lg mb-2">
                    <Image src={`/img/star-yellow.png`} alt={step.title} width={14} height={14} />
                    {step.title}
                    <Image src={`/img/star-yellow.png`} alt={step.title} width={14} height={14} />
                  </h3>
                </div>
                <div className="bg-[#111111] rounded-lg text-center p-3 h-30">
                  <h4 className="text-[#EAAA63] font-semibold text-base mb-2">
                    {step.subtitle}
                  </h4>
                  <p className="text-white text-xs leading-4">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 

export const dynamic = 'force-dynamic'
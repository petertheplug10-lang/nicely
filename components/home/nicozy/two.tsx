import ScrollItem from "@/components/scrollItem";
import Image from "next/image";

export default function Two() { 
  return (
    <ScrollItem start="top 70%" className="flex-1 p-4 bg-[#3f3f3f] rounded">
      <div className="flex items-center justify-between gap-2">
        <Image src="/img/star-blue.png" alt="logo" width={20} height={20} />
        <span className="font-black lg:text-5xl text-4xl text-[#f8e9d6]">TWO</span>
        <Image src="/img/star-blue.png" alt="logo" width={20} height={20} />
      </div>
      <p className="text-xs lg:text-base h-20 mt-4 text-[#f8e9d6] text-center uppercase">
        discreet, smoke-free, and designed for on-the-go use, our pouches deliver a clean and satisfying experience.
      </p>
      <div className="flex-1 flex items-end justify-start relative mt-20 h-[150px] bg-black rounded">
        <img className="absolute w-5 h-5 top-2 left-2" src="/img/spades.png" alt="heart" />
        <img className="absolute w-5 h-5 bottom-2 right-2" src="/img/spades.png" alt="heart" />
        <img className="md:w-[95%] w-[70%] relative z-10" src="/img/icon-8.png" alt="icon" />
        <img className="absolute left-8 -top-12 w-8 -rotate-30" src="/img/icon-7.png" alt="icon" />
        <img className="absolute right-15 -top-6 w-8 rotate-12" src="/img/icon-7.png" alt="icon" />
        <img className="absolute right-4 z-10 top-9 w-8" src="/img/icon-7.png" alt="icon" />
        <img className="absolute right-8 z-10 -top-15 w-10" src="/img/icon-12.png" alt="icon" />
      </div>
    </ScrollItem>
  )
}
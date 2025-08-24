import Image from "next/image";
import ScrollItem from "@/components/scrollItem";

export default function One() {
  return (
    <ScrollItem start="top 90%" className="flex-1 p-4 bg-[#3f3f3f] rounded">
      <div className="flex items-center justify-between gap-2">
        <Image src="/img/star-yellow.png" alt="logo" width={20} height={20} />
        <span className="font-black lg:text-5xl text-4xl text-[#f8e9d6]">ONE</span>
        <Image src="/img/star-yellow.png" alt="logo" width={20} height={20} />
      </div>
      <p className="text-xs lg:text-base h-20 mt-4 text-[#f8e9d6] text-center uppercase">
        nicozy is a bold new nicotine pouch brand that brings a modern twist to your nicotine routine.
      </p>
      <div className="flex-1 flex items-center justify-center relative mt-20 h-[150px] bg-black rounded">
        <img className="absolute w-5 h-5 top-2 left-2" src="/img/heart.png" alt="heart" />
        <img className="absolute w-5 h-5 bottom-2 right-2" src="/img/heart.png" alt="heart" />
        <img className="w-[80%]" src="/img/icon3.png" alt="icon" />
        <img className="absolute -right-8 -top-8 w-[70px]" src="/img/icon-6.png" alt="icon" />
        <img className="absolute left-6 -top-20 w-25" src="/img/icon-13.png" alt="icon" />
      </div>
    </ScrollItem>
  )
}
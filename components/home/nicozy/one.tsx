import Image from "next/image";
import ScrollItem from "@/components/scrollItem";

export default function One() {
  return (
    <ScrollItem start="top 90%" className="flex-1 p-4 bg-[#3f3f3f] rounded">
      <div className="flex items-center md:justify-between justify-center gap-6">
        <Image src="/img/star-yellow.png" alt="logo" width={20} height={20} />
        <span className="md:font-black font-semibold lg:text-5xl text-4xl text-[#F8C994] md:text-[#f8e9d6]">ONE</span>
        <Image src="/img/star-yellow.png" alt="logo" width={20} height={20} />
      </div>
      <p className="lg:text-base text-lg h-30 mt-4 md:px-0 px-10 text-white md:text-[#f8e9d6] text-center capitalize md:uppercase">
      Nicozy represents an innovative nicotine pouch brand, offering a contemporary approach to nicotine consumption.
      </p>
      <div className="flex-1 flex items-center justify-center relative mt-20 md:h-[150px] h-[200px] bg-black rounded">
        <img className="absolute md:size-5 size-7 top-2 left-2" src="/img/heart.png" alt="heart" />
        <img className="absolute md:size-5 size-7 bottom-2 right-2" src="/img/heart.png" alt="heart" />
        <img className="md:w-[80%] w-[70%]" src="/img/icon3.png" alt="icon" />
        <img className="absolute md:-right-8 -right-4 -top-8 md:w-[70px] w-[100px]" src="/img/icon-6.png" alt="icon" />
        <img className="absolute hidden md:block left-6 -top-20 w-25" src="/img/icon-13.png" alt="icon" />
      </div>
    </ScrollItem>
  )
}
import Image from "next/image";
import ScrollItem from "@/components/scrollItem";

export default function Three({ onShow }: { onShow: () => void }) {   
  return (
    <ScrollItem start="top 50%" className="flex-1 p-4 bg-[#3f3f3f] rounded hidden md:block" onComplete={onShow}>
      <div className="flex items-center justify-between gap-2">
        <Image src="/img/star-red.png" alt="logo" width={20} height={20} />
        <span className="font-black lg:text-5xl text-4xl text-[#f8e9d6]">THREE</span>
        <Image src="/img/star-red.png" alt="logo" width={20} height={20} />
      </div>
      <p className="text-xs lg:text-base h-30 mt-4 text-[#f8e9d6] text-center uppercase">
      Nicozy elevates the nicotine experience, presenting it as a stylish and impactful moment through its sleek, square tins and bold flavor profiles.
      </p>
      <div className="flex-1 relative mt-20 h-[150px] bg-black rounded">
        <img className="absolute w-5 h-5 top-2 left-2" src="/img/cherry.png" alt="heart" />
        <img className="absolute w-5 h-5 bottom-2 right-2" src="/img/cherry.png" alt="heart" />
        <img className="absolute left-3 md:-top-20 -top-10 w-30" src="/img/icon-9.png" alt="icon" />
        <img className="absolute -right-3 top-0 w-30" src="/img/icon-10.png" alt="icon" />
        <img className="absolute -left-5 z-10 -bottom-2 w-30" src="/img/icon-11.png" alt="icon" />
      </div>
    </ScrollItem>
  )
}
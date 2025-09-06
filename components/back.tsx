"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Back({children}: {children: React.ReactNode}) {
  const router = useRouter();
  return (
    <div className="flex w-full items-center gap-2 relative text-white md:hidden">
      <div onClick={() => router.back()} className="absolute left-0 top-0">
        <Image src="/img/arrow-left.png" alt="back" width={20} height={20} />
      </div>
      <div className="text-sm font-bold w-full text-center">{children}</div>
    </div>
  )
}
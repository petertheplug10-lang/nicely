'use client'
import { useState, useEffect } from "react";
import Html5QrcodePlugin from "./scan";
import { useVerify } from "@/query/verify";
import { useRouter } from "next/navigation";

export default function Verification() {
  const { mutateAsync: verify, isPending } = useVerify()
  const [isScanning, setIsScanning] = useState(false);
  const router = useRouter();

  const handleScan = () => {
    setIsScanning(true);
  }

  const handleScanSuccess = (decodedText: string) => {
    setIsScanning(false);
    location.href = decodedText;
  }
  
  const handleScanError = (error: any) => {
    console.error(error);
  }

  useEffect(() => {
    if (isScanning) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    }
  }, [isScanning]);


  return (
    <div className="bg-black px-4">
      <div className="mt-[60px] lg:mt-[120px] w-[1000px] max-w-full mx-auto text-[#f8e9d6]">
      <img className="w-[90%] mx-auto" src="/img/verification.png" alt="verification" />
      <div className="flex w-full overflow-hidden h-11 lg:h-16 rounded-full bg-[#2c2a29] items-center mt-10 lg:mt-20">
        <div className="flex-1 flex text-xs lg:text-base items-center uppercase w-auto px-4 lg:px-16 text-[#f8e9d6] lg:font-black h-full bg-transparent border-none outline-none">scan the code with your phone</div>
        <button disabled={isPending} onClick={handleScan} className="uppercase flex-shrink-0 lg:font-black font-semibold lg:text-2xl text-base h-full lg:px-6 px-5 bg-[#f8e9d6] rounded-full text-[#2c2a29] cursor-pointer">{isPending ? "verifying..." : "verify"}</button>
      </div>
      {
        isScanning && (
            <div className="fixed flex items-center justify-center top-0 left-0 w-screen h-screen bg-black z-50">
              <Html5QrcodePlugin qrCodeSuccessCallback={handleScanSuccess} qrCodeErrorCallback={handleScanError} />
            </div>
        )
      }
      
      <div className="flex items-start gap-4 md:gap-8 mt-10">
        <div className="flex flex-1 mt-2 flex-col gap-8">
          <p className="uppercase font-thin md:font-bold lg:text-3xl text-sm">All Nicozy products are equipped with a unique QR code on their packaging to ensure authenticity verification.</p>
          <p className="uppercase font-thin md:font-bold lg:text-3xl text-sm">Each code is designed for a single scan, thereby guaranteeing the authenticity and integrity of the purchased product.</p>
          <img className="lg:w-[200px] w-[60px]" src="/img/icon-6.png" alt="qr-code" />
        </div>
        <img className="md:w-[40%] w-[30%]" src="/img/scan.png" alt="qr-code" />
      </div>
    </div>
    </div>
  )
}
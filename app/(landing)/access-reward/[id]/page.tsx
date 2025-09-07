'use client'
import { verifyOptions } from "@/query/products";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


export default function ProductDetail() {
  const params = useParams();
  const id = params?.id as string;
  const { data } = useSuspenseQuery(verifyOptions(id+'/'))
  console.log("data", data)
  const result = data?.status === 'success' && !data?.isUsed
  return (
    <div className="min-h-screen bg-black text-white px-4 pb-8 md:pt-15 pt-8">
      {/* Main Title */}
      <div className="max-w-4xl gap-3 mx-auto flex justify-center items-end">
        <Image src="/img/star-blue.png" alt="verify-result" width={24} height={24} />
        <Image src="/img/title/verify-product.svg" alt="verify-result" width={417} height={52} className="relative" />
        <Image src="/img/star-blue.png" className="self-start" alt="verify-result" width={24} height={24} />
      </div>

      {/* Product Images Section */}
      <Image src="/img/product-verify.svg" className="mx-auto" alt="verify-result" width={512} height={320} />

      {/* Verification Result Card */}
      <div className="max-w-2xl mx-auto -mt-30">
        <div className="bg-[#373737] rounded-sm md:px-9 px-4 py-6 pt-[120px]">
          {/* Verification Icon */}
          {result ? (
            <Image src="/img/success.svg" alt="verify-result" width={120} height={120} className="mx-auto" />
          ) : (
            <Image src="/img/fail.svg" alt="verify-result" width={120} height={120} className="mx-auto" />
          )}

          <div className="bg-[#111111] px-3 pb-5 pt-20 -mt-15">

            {/* Primary Message */}
            <div className="text-center mb-4">
              <h2 className={`text-xl font-bold ${result ? "text-[#EAAA63]" : "text-[#F1292D]"} mb-8`}>
                {result ? "YOUR PRODUCT IS GENUINE" : "Verification Unsuccessful"}
              </h2>
              <p className="text-base uppercase text-left font-bold text-white">
                {result ? "THIS IS AN OFFICIAL NICOZY PRODUCT. YOU'RE GOOD TO GO." : "This product could not be verified."}
              </p>
            </div>

            {/* Separator */}
            <div className="border-t border-[#EAAA63] my-6"></div>

            {/* Detailed Explanation */}
            {result && (
              <div className="text-center space-y-3">
                <p className="text-sm md:text-base text-white leading-relaxed">
                  THANK YOU FOR VERIFYING. THE QR CODE HAS BEEN SUCCESSFULLY AUTHENTICATED AND YOUR PRODUCT IS CONFIRMED AS A GENUINE NICOZY NICOTINE POUCH.
                </p>
                <p className="text-sm md:text-base text-white leading-relaxed">
                  ENJOY OUR PREMIUM QUALITY WITH CONFIDENCE.
                </p>
              </div>
            )}
            {
              !result && (
                <div className="text-center space-y-3">
                  <p className="text-sm md:text-base text-white leading-relaxed">
                    The QR code you scanned is either invalid or has already been used.
                  </p>
                  <p className="text-sm md:text-base text-white leading-relaxed">
                    This may indicate that the product is not an official NICOZY item. For your safety and product experience, we strongly recommend using only verified products from our authorized channels.
                  </p>
                  <p className="text-sm md:text-base text-white leading-relaxed">
                    If you believe this is a mistake, please contact our support team with a photo of the product and the code label.
                  </p>
                </div>
              )
            }
          </div>
          <Link
            href="/" 
            className="bg-[#EAAA63] uppercase mt-6 flex justify-center items-center w-full text-center hover:bg-[#EAAA63] text-[#111111] font-bold py-4 px-12 rounded-md transition-colors duration-200"
          >
            {result ? "OK" : "Contact Us"}
          </Link>
        </div>
      </div>
    </div>
  );
} 

export const dynamic = 'force-dynamic'
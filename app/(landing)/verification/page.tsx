import Image from "next/image";
import Link from "next/link";

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 pb-8 pt-15">
      {/* Breadcrumb Navigation */}
      <div className="w-[1034px] max-w-full mx-auto mb-8">
        <nav className="text-xs flex items-center">
          <Link href="/" className="text-white hover:text-gray-300">
            Home page
          </Link>
          <span className="mx-2">{'>'}</span>
          <span className="font-bold uppercase">Verification</span>
        </nav>
      </div>

      {/* Main Title */}
      <div className="max-w-4xl md:pl-[178px] mx-auto flex justify-center items-center mb-10">
        <Image src="/img/title/verify-product.svg" alt="verify-product" width={417} height={52} className="hidden md:block" />
        <Image src="/img/title/verify-product.svg" alt="verify-product" width={314} height={52} className="md:hidden block" />
      </div>

      <div className="flex justify-center items-start gap-6">
        <div className="hidden md:block relative">
          <Image src="/img/warning-swallow.svg" alt="shipping-policy" width={178} height={337} />
          <Image src="/img/bule-arrow.svg" alt="shipping-policy" width={50} height={40} className="absolute top-1/2 -right-3" />
        </div>
        <div className="w-[832px] max-w-full space-y-8">
          <div className="flex justify-between gap-4 md:hidden">
            <Image src="/img/warning-swallow.svg" alt="shipping-policy" width={160} height={494} />
            <Image src="/img/long-arrow.svg" className="mt-8" alt="shipping-policy" width={38} height={4} />
            <Image src="/img/verification-scan.svg" alt="shipping-policy" width={170} height={494} />
          </div>
          <div className="relative bg-[#373737] px-3 py-3.5 pt-0 rounded-xl">
            <Image src="/img/important.svg" alt="shipping-policy" width={54} height={46} className=" absolute -top-8 -right-7 hidden lg:block" />
            <div className="flex items-center justify-center gap-4 h-13">
              <Image src="/img/star-yellow.png" alt="star" width={14} height={14} />
              <h2 className="text-lg font-semibold text-[#F8C994]">ONE</h2>
              <Image src="/img/star-yellow.png" alt="star" width={14} height={14} />
            </div>
            <div className="bg-[#111111] rounded-xl py-6">
              <div className="text-base font-semibold text-center mb-3 text-[#EAAA63]">Scan the QR Code on the Bottom of Your NICOZY Package</div>
              <p className="text-xs leading-relaxed text-center max-w-[624px] mx-auto text-white">
                To verify your product’s authenticity, please scan the QR code located on the bottom of the packaging using your mobile device.
                <br />Each code is uniquely assigned and can only be verified once.
              </p>
            </div>
          </div>

          <div className="relative bg-[#373737] px-3 py-3.5 pt-0 rounded-xl">
            <div>
              <Image src="/img/why.svg" alt="shipping-policy" width={80} height={97} className="absolute top-1 left-3" />
            </div>
            <div className="flex items-center justify-center gap-4 h-13">
              <Image src="/img/star-yellow.png" alt="star" width={14} height={14} />
              <h2 className="text-lg font-semibold text-[#F8C994]">TWO</h2>
              <Image src="/img/star-yellow.png" alt="star" width={14} height={14} />
            </div>
            <div className="bg-[#111111] rounded-xl py-6">
              <div className="text-base font-semibold text-center mb-3 text-[#EAAA63]">Why Verification Matters</div>
              <p className="text-xs leading-relaxed text-center max-w-[624px] mx-auto text-white">
                Confirm your product is an official NICOZY item.<br />
                Protect yourself from counterfeits.<br />
                Enjoy peace of mind with every use.
              </p>
            </div>
          </div>

          <div className="relative bg-[#373737] px-3 py-3.5 pt-0 rounded-xl">
            <div className="flex items-center justify-center gap-4 h-13">
              <Image src="/img/star-yellow.png" alt="star" width={14} height={14} />
              <h2 className="text-lg font-semibold text-[#F8C994]">THREE</h2>
              <Image src="/img/star-yellow.png" alt="star" width={14} height={14} />
            </div>
            <div className="bg-[#111111] flex flex-col gap-4 md:flex-row items-center rounded-xl justify-around py-6">
              <div className="flex-1 max-w-[300px]">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Image src="/img/success.svg" alt="verification" width={24} height={24} />
                  <span className="text-base font-semibold text-[#EAAA63]">Successful Verification</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <Image src="/img/check.svg" alt="verification" width={12} height={12} />
                  <span className="font-semibold text-white">You will receive a message confirming your NICOZY product is authentic.
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <Image src="/img/check.svg" alt="verification" width={12} height={12} />
                  <span className="font-semibold text-white">
                    The product is safe and ready to enjoy
                  </span>
                </div>
              </div>
              <div className="flex-1 max-w-[300px]">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Image src="/img/fail.svg" alt="verification" width={24} height={24} />
                  <span className="text-base font-semibold text-[#EAAA63]">Failed Verification</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <Image src="/img/error.svg" alt="verification" width={12} height={12} />
                  <span className="font-semibold text-white">The code has been previously scanned, or is invalid.
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <Image src="/img/error.svg" alt="verification" width={12} height={12} />
                  <span className="font-semibold text-white">
                    The product may not be genuine.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
import Image from "next/image";
import Link from "next/link";
import Back from "@/components/back";

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-black text-white px-4 pb-8 md:pt-15 pt-8">
      {/* Breadcrumb Navigation */}
      <div className="max-w-4xl mx-auto mb-8">
        <Back>SHIPPING POLICY</Back>
        <nav className="text-xs items-center hidden md:flex">
          <Link href="/" className="text-white hover:text-gray-300">
            Home page
          </Link>
          <span className="mx-2">{'>'}</span>
          <span className="font-bold">SHIPPING POLICY</span>
        </nav>
      </div>

      {/* Main Title */}
      <div className="max-w-4xl mx-auto flex justify-center items-center mb-10">
          <Image src="/img/title/shipping-policy.svg" alt="shipping-policy" width={417} height={52} className="hidden md:block" />
          <Image src="/img/title/shipping-policy.svg" alt="shipping-policy" width={297} height={52} className="md:hidden block" />
      </div>

      {/* Policy Sections */}
      <div className="w-[832px] max-w-full mx-auto space-y-8">
        {/* Shipping Range */}
        <div className="relative">
          <div className="bg-[#EAAA63] absolute md:top-0 -top-4 md:-left-2 left-[50%] md:translate-x-0 translate-x-[-50%] text-[#F8E9D6] md:rotate-[-10deg] text-base px-4 py-2 font-semibold rounded-xs">
            Shipping Range
          </div>
          <div className="border-[12px] bg-[#111111] border-[#373737] rounded-xl py-6">
            <p className="text-xs leading-relaxed text-center max-w-[624px] mx-auto text-white">
            We currently provide delivery services to [Please fill in specific regions here, e.g., Mainland China, the contiguous United States, etc.].<br/>
Additional shipping fees or extended delivery times may apply to some remote areas (such as mountainous regions, islands, etc.). For details, please refer to the order checkout page.
            </p>
          </div>
        </div>

        {/* Shipping Methods */}
        <div className="relative">
          <div className="bg-[#EAAA63] absolute md:top-0 -top-4 md:-left-2 left-[50%] md:translate-x-0 translate-x-[-50%] text-[#F8E9D6] md:rotate-[-10deg] text-base px-4 py-2 font-semibold rounded-xs">
            Shipping Methods
          </div>
          <div className="border-[12px] bg-[#111111] border-[#373737] rounded-xl py-6">
            <p className="text-xs leading-relaxed text-center max-w-[624px] mx-auto text-white">
            [Please fill in the logistics method here, e.g., SF Express, Yuantong Express, USPS, etc.] by default.<br/>
If you have special delivery requirements (such as specifying a courier company, expedited delivery, etc.), please contact customer service to inquire about related fees and feasibility.
            </p>
          </div>
        </div>

        {/* Delivery Time */}
        <div className="relative">
          <div className="bg-[#EAAA63] absolute md:top-0 -top-4 md:-left-2 left-[50%] md:translate-x-0 translate-x-[-50%] text-[#F8E9D6] md:rotate-[-10deg] text-base px-4 py-2 font-semibold rounded-xs">
            Delivery Time
          </div>
          <div className="border-[12px] bg-[#111111] border-[#373737] rounded-xl py-6">
            <p className="text-xs leading-relaxed text-center max-w-[624px] mx-auto text-white">
            [Please fill in the logistics method here, e.g., SF Express, Yuantong Express, USPS, etc.] by default.<br/>
If you have special delivery requirements (such as specifying a courier company, expedited delivery, etc.), please contact customer service to inquire about related fees and feasibility.
            </p>
          </div>
        </div>

        {/* Shipping Fees */}
        <div className="relative">
          <div className="bg-[#EAAA63] absolute md:top-0 -top-4 md:-left-2 left-[50%] md:translate-x-0 translate-x-[-50%] text-[#F8E9D6] md:rotate-[-10deg] text-base px-4 py-2 font-semibold rounded-xs">
            Shipping Fees
          </div>
          <div className="border-[12px] bg-[#111111] border-[#373737] rounded-xl py-6">
            <p className="text-xs leading-relaxed text-center max-w-[624px] mx-auto text-white">
            Orders with a total amount of [Please fill in the amount here, e.g., ¥199/$50] or more are eligible for free shipping.<br/>
For orders below the above amount, a basic shipping fee of [Please fill in the fee here, e.g., ¥10/$5] will be charged. The specific fee is subject to the order checkout page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
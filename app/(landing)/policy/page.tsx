import Image from "next/image";
import Link from "next/link";

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-black text-white px-4 pb-8 pt-15">
      {/* Breadcrumb Navigation */}
      <div className="max-w-4xl mx-auto mb-8">
        <nav className="text-xs flex items-center">
          <Link href="/" className="text-white hover:text-gray-300">
            Home page
          </Link>
          <span className="mx-2">{'>'}</span>
          <span className="font-bold">POLICY</span>
        </nav>
      </div>

      {/* Main Title */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Image src="/img/title/policy.svg" alt="policy" width={232} height={52} />
        </div>
      </div>

      {/* Policy Sections */}
      <div className="w-[818px] max-w-full mx-auto space-y-5">
        {/* Section One */}
        <div className="border border-[#F5E7D4] rounded-xl p-4 md:pt-[9px] md:pr-5 md:pl-4 md:pb-5 ">
          <div className="flex items-center justify-start gap-4 mb-3 pb-3 border-b border-[rgba(245,231,212,0.2)]">
            <Image src="/img/star-yellow.png" alt="star" width={14} height={14} />
            <h2 className="text-lg font-semibold text-[#F8C994]">ONE</h2>
            <Image src="/img/star-yellow.png" alt="star" width={14} height={14} />
          </div>
          <h3 className="text-[#EAAA63] text-base font-semibold mb-3 text-left">
            Scope of Application
          </h3>
          <p className="text-white text-xs">
            This policy applies to all users who purchase or use NICOZY nicotine pouch products, as well as individuals or institutions participating in NICOZY brand-related activities. By using the products or participating in activities, all users are deemed to have read and agreed to the terms of this policy.
          </p>
        </div>

        {/* Section Two */}
        <div className="border border-[#F5E7D4] rounded-xl p-4 md:pt-[9px] md:pr-5 md:pl-4 md:pb-5 ">
          <div className="flex items-center justify-start gap-4 mb-3 pb-3 border-b border-[rgba(245,231,212,0.2)]">
            <Image src="/img/star-yellow.png" alt="star" width={14} height={14} />
            <h2 className="text-lg font-semibold text-[#F8C994]">TWO</h2>
            <Image src="/img/star-yellow.png" alt="star" width={14} height={14} />
          </div>
          <h3 className="text-[#EAAA63] text-base font-semibold mb-3 text-left">
            Product Usage Guidelines
          </h3>
          <ul className="space-y-1 list-disc pl-3 text-white text-xs">
            <li>
              Age Restriction: NICOZY products contain nicotine and are only sold to legally adult populations
              (the specific age is subject to local laws and regulations, e.g., 18 years old
              and above in Mainland China). Purchasers must ensure they are adults and undertake
              not to transfer or provide the products to minors.
            </li>
            <li>
              Usage Tips: Nicotine is addictive; non-smokers should not use the products. Special groups
              such as pregnant women, lactating women, and heart disease patients should avoid use.
              Follow the packaging instructions during use and avoid long-term excessive use.
            </li>
            <li>
              Storage Requirements: Store the products in a cool and dry place, away from high temperatures and open flames.
              Unused and used pouches must be kept out of the reach of children and pets to prevent
              accidental ingestion.
            </li>
          </ul>
        </div>

        {/* Section Three */}
        <div className="border border-[#F5E7D4] rounded-xl p-4 md:pt-[9px] md:pr-5 md:pl-4 md:pb-5 ">
          <div className="flex items-center justify-start gap-4 mb-3 pb-3 border-b border-[rgba(245,231,212,0.2)]">
            <Image src="/img/star-yellow.png" alt="star" width={14} height={14} />
            <h2 className="text-lg font-semibold text-[#F8C994]">THREE</h2>
            <Image src="/img/star-yellow.png" alt="star" width={14} height={14} />
          </div>
          <h3 className="text-[#EAAA63] text-base font-semibold mb-3 text-left">
            Intellectual Property and Brand Protection
          </h3>
          <ul className="space-y-1 list-disc pl-3 text-white text-xs">
            <li>
              The NICOZY brand name, trademarks, packaging designs, QR code verification system,
              and other related elements are exclusive intellectual property of the brand owner
              and are protected by law.
            </li>
            <li>
              Any unit or individual is prohibited from using NICOZY brand logos, imitating
              product packaging, or the verification system without authorization. Legal liability
              will be pursued upon discovery.
            </li>
            <li>
              Users are encouraged to purchase products through official channels and actively
              verify authenticity (see "Authenticity Verification Policy" for details) to jointly
              resist counterfeit and shoddy products.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 
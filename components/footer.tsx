import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#1e1e1e] pt-8 pb-10 text-[#f8e9d6]">
      <div className="w-[1000px] relative max-w-full gap-10 flex flex-wrap justify-between px-6 mx-auto">
        <div className="md:flex-[1.5] w-full md:w-auto flex-shrink-0">
          <img className="w-[200px] md:mb-2 mb-4 mx-auto md:mx-0" src="/img/footer-logo.png" alt="logo" />
          <img className="w-[100px] md:w-[60px] md:mb-1 mb-4 mx-auto md:mx-0" src="/img/footer-new.png" alt="logo" />
          <p className="md:text-[10px] font-thin md:font-normal md:leading-3">NICOZY IS PREMIUM SMOKELESS TOBACCO, OFFERING A DISCREET AND SMOKE-FREE WAY TO ENJOY NICOTINE.SIMPLY PLACE A POUCH COMFORTABLY BETWEEN YOUR GUM AND LIP FOR A SATISFYING EXPERIENCE-ANYTIME ANYWHERE. EXPLORE A RANGE OF REFRESHING FLAVORS AND NICOTINE STRENGTHS DESIGNED FOR ADULT TOBACCO USERS SEEKING A CLEANER ALTERNATIVE. NICOZY DELIVERS SATISFACTION WITHOUT THE SMOKE.</p>
          <p className="text-xs mt-2 text-center md:text-left">© 2025 NICOZY</p>
        </div>
        <div className="flex-1">
          <h3 className="uppercase font-black text-base mb-4">MENU</h3>
          <ul className="font-bold">
            <li>
              <Link className="text-xs lg:text-sm uppercase" href="/">Home</Link>
            </li>
            <li>
              <Link className="text-xs lg:text-sm uppercase" href="/">what is nicozy</Link>
            </li>
            <li>
              <Link className="text-xs lg:text-sm uppercase" href="/">pouch series</Link>
            </li>
            <li>
              <Link className="text-xs lg:text-sm uppercase" href="/">Product Verification</Link>
            </li>
            <li>
              <Link className="text-xs lg:text-sm uppercase" href="/">Contact Us</Link> 
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="uppercase font-black text-base mb-4">HELP</h3>
          <ul className="font-bold">
            <li>
              <Link className="text-xs lg:text-sm uppercase" href="/shipping-policy">Shipping Policy</Link>
            </li>
            <li>
              <Link className="text-xs lg:text-sm uppercase" href="/policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <img className="absolute bottom-4 right-0 w-[100px]" src="/img/icon-6.png" alt="logo" />
      </div>
    </div>
  )
}
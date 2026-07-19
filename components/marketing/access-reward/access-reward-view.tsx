"use client";
import { useRewardCheck } from "@/lib/api/hooks/use-reward-check";
import Image from "next/image";
import Link from "next/link";

type AccessRewardViewProps = {
  /** Route param; reserved for future API-backed verification. */
  verificationId: string;
};

const COPY = {
  success: {
    title: "Your Product Is Genuine",
    subtitle: "This is an official NICOZY product. You're good to go.",
    paragraphs: [
      "Thank you for verifying. The QR code has been successfully authenticated and your product is confirmed as a genuine NICOZY nicotine pouch.",
      "Enjoy our premium quality with confidence.",
    ],
    cta: { label: "OK", href: "/" },
    cardBg: "bg-[#87bccb]",
  },
  failure: {
    title: "Verification Unsuccessful",
    subtitle: "This product could not be verified.",
    paragraphs: [
      "The QR code you scanned is either invalid or has already been used.",
      "This may indicate that the product is not an official NICOZY item. For your safety and product experience, we strongly recommend using only verified products from our authorized channels.",
      "If you believe this is a mistake, please contact our support team with a photo of the product and the code label.",
    ],
    cta: { label: "Contact us", href: "/service" },
    cardBg: "bg-[#df696e]",
  },
} as const;

function ShieldSuccessIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="100" viewBox="0 0 88 100" fill="none">
      <path d="M43.8818 4.63379C45.4986 4.63379 47.0738 5.13105 48.3945 6.05469L48.6553 6.24512L48.6846 6.26758L48.7139 6.29199C52.6813 9.58012 57.097 12.2859 61.8271 14.3291C66.4081 15.7884 71.0825 16.9345 75.8184 17.7588L76.7715 17.9209L76.8359 17.9316L76.8994 17.9463C78.5438 18.337 80.0225 19.2375 81.125 20.5186C82.2275 21.7996 82.8976 23.3958 83.0391 25.0801L83.167 26.6045L82.8906 26.6816C82.8946 26.7899 82.9002 26.9038 82.9043 27.0234C82.9456 28.2165 82.9921 29.9746 83.0117 32.248C83.0509 36.7952 82.984 43.4059 82.5625 51.6836L82.5596 51.7471L82.5518 51.8105C80.822 66.1855 74.5304 77.2776 67.0273 84.7852C59.581 92.2359 50.7839 96.2979 43.9463 96.2979C40.3833 96.2978 36.1783 94.796 31.9854 92.3887C27.7516 89.9579 23.3547 86.5035 19.373 82.3623C11.4519 74.1237 4.91504 62.8864 4.91504 51.2441C4.91504 45.1709 4.95672 38.6884 4.99902 33.7256C5.02018 31.2439 5.04175 29.1413 5.05762 27.6592C5.06555 26.9181 5.07252 26.3315 5.07715 25.9307C5.07946 25.7306 5.08079 25.5767 5.08203 25.4727C5.08265 25.4208 5.08366 25.381 5.08398 25.3545V25.3008L5.08496 25.2881C5.13045 23.5531 5.76873 21.8862 6.89355 20.5645C8.01843 19.2426 9.5621 18.3459 11.2676 18.0234L11.3496 18.0078L11.4336 17.999C16.3659 17.5231 21.1936 16.2781 25.7402 14.3076L25.8203 14.2725L25.9043 14.2451C30.7933 12.6569 35.2537 9.969 38.9424 6.38867L39.0215 6.3125L39.1094 6.24512C40.4808 5.19983 42.1574 4.63384 43.8818 4.63379ZM65.7764 37.7676C65.4989 37.678 65.2019 37.6661 64.918 37.7324C64.6335 37.7989 64.3724 37.9417 64.1631 38.1455L40.8506 61.1943L39.4785 62.5508L38.1797 61.125L26.4131 48.2158L26.3857 48.1846C26.1909 47.9611 25.9391 47.7949 25.6572 47.7031C25.3779 47.6123 25.0795 47.5981 24.793 47.6621C24.4996 47.7412 24.2308 47.8934 24.0117 48.1045C23.7852 48.3229 23.6201 48.5973 23.5322 48.8994L23.5283 48.9092L23.5254 48.9199C23.4272 49.2442 23.4127 49.5885 23.4834 49.9199C23.5536 50.2485 23.7057 50.5539 23.9248 50.8086L38.1143 66.2412L38.6006 66.6738C38.8831 66.8371 39.21 66.9098 39.5361 66.876C39.8945 66.8388 40.2287 66.6776 40.4814 66.4209L40.4912 66.4102L40.502 66.4004L66.3955 40.8789L66.7314 40.5469C66.8074 40.415 66.8692 40.2749 66.9131 40.1279C67.0089 39.8069 67.0214 39.4668 66.9492 39.1396L66.9463 39.127C66.801 38.4471 66.3398 37.9539 65.7764 37.7676Z" fill="#26CA52" stroke="white" stroke-width="3.7037" />
    </svg>
  );
}

function ShieldWarningIcon({ className }: { className?: string }) {
  return (
    <svg width="88" height="100" viewBox="0 0 88 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M43.8818 4.63281C45.4986 4.63281 47.0738 5.13007 48.3945 6.05371L48.6553 6.24414L48.6846 6.2666L48.7139 6.29102C52.681 9.57895 57.0963 12.285 61.8262 14.3281C66.4074 15.7876 71.0822 16.9335 75.8184 17.7578L76.7715 17.9199L76.8359 17.9307L76.8994 17.9453C78.5438 18.3361 80.0225 19.2365 81.125 20.5176C82.2275 21.7986 82.8976 23.3949 83.0391 25.0791L83.167 26.6035L82.8906 26.6807C82.8946 26.7889 82.9002 26.9028 82.9043 27.0225C82.9456 28.2156 82.9921 29.9736 83.0117 32.2471C83.0509 36.7942 82.984 43.405 82.5625 51.6826L82.5596 51.7461L82.5518 51.8096C80.822 66.1846 74.5304 77.2767 67.0273 84.7842C59.581 92.2349 50.7839 96.2969 43.9463 96.2969C40.3833 96.2969 36.1783 94.7951 31.9854 92.3877C27.7516 89.9569 23.3547 86.5025 19.373 82.3613C11.4519 74.1227 4.91504 62.8854 4.91504 51.2432C4.91504 45.17 4.95672 38.6874 4.99902 33.7246C5.02018 31.2429 5.04175 29.1403 5.05762 27.6582C5.06555 26.9171 5.07252 26.3305 5.07715 25.9297C5.07946 25.7296 5.08079 25.5757 5.08203 25.4717C5.08265 25.4198 5.08366 25.3801 5.08398 25.3535V25.2998L5.08496 25.2871C5.13045 23.5521 5.76873 21.8853 6.89355 20.5635C8.01843 19.2416 9.5621 18.3449 11.2676 18.0225L11.3496 18.0068L11.4336 17.998C16.3659 17.5222 21.1936 16.2771 25.7402 14.3066L25.8203 14.2715L25.9043 14.2441C30.7933 12.6559 35.2537 9.96802 38.9424 6.3877L39.0215 6.31152L39.1094 6.24414C40.4808 5.19886 42.1574 4.63287 43.8818 4.63281Z" fill="#E25F38" stroke="white" stroke-width="3.7037" />
      <path d="M41.8425 58.5999C41.9557 59.2175 42.2819 59.7759 42.7643 60.1778C43.2466 60.5798 43.8546 60.7999 44.4825 60.7999C45.1104 60.7999 45.7184 60.5798 46.2008 60.1778C46.6831 59.7759 47.0093 59.2175 47.1225 58.5999L48.8825 34.4C48.8801 33.2338 48.4157 32.1161 47.5911 31.2914C46.7664 30.4668 45.6487 30.0024 44.4825 30C43.8713 30.0151 43.2695 30.1539 42.7135 30.4081C42.1574 30.6623 41.6587 31.0266 41.2475 31.479C40.8362 31.9314 40.5209 32.4625 40.3207 33.0402C40.1205 33.6178 40.0395 34.2301 40.0825 34.84L41.8425 58.5999ZM44.4825 65.1999C43.6123 65.1999 42.7616 65.458 42.038 65.9414C41.3144 66.4249 40.7505 67.1121 40.4175 67.9161C40.0844 68.7201 39.9973 69.6048 40.1671 70.4583C40.3368 71.3118 40.7559 72.0958 41.3713 72.7111C41.9866 73.3265 42.7706 73.7456 43.6241 73.9153C44.4776 74.0851 45.3623 73.998 46.1663 73.6649C46.9703 73.3319 47.6575 72.768 48.141 72.0444C48.6244 71.3208 48.8825 70.4701 48.8825 69.5999C48.918 69.0128 48.8285 68.4249 48.6199 67.875C48.4113 67.3251 48.0884 66.8257 47.6726 66.4098C47.2567 65.994 46.7573 65.6711 46.2074 65.4625C45.6575 65.2539 45.0696 65.1644 44.4825 65.1999Z" fill="white" />
    </svg>
  );
}

export function AccessRewardView({ verificationId }: AccessRewardViewProps) {
  const { data } = useRewardCheck(verificationId);
  const notUsed = data?.status === 'success' && !data?.isUsed;
  const variant = notUsed ? "success" : "failure";
  const copy = COPY[variant];
  return (
    <main
      className="relative overflow-x-hidden bg-[#fafafa] pb-16 pt-8 sm:pb-24 sm:pt-12 lg:pt-16"
      data-verification-id={verificationId}
    >
      <div
        className="pointer-events-none absolute left-[-20%] top-[18%] size-[min(500px,90vw)] rounded-full bg-[rgba(223,105,110,0.1)] blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-0 top-0 size-[min(600px,120vw)] rounded-full bg-[rgba(135,188,203,0.1)] blur-[120px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[480px] flex-col px-6 sm:max-w-lg sm:px-8">
        <h1 className="font-unbounded text-center text-[28px] font-normal leading-10 tracking-[-0.9px] text-[#171717] sm:text-[32px] sm:leading-[40px]">
          Verify Your Product
        </h1>

        <div className="relative mx-auto my-6 w-full">
          <div className="aspect-[276/155] w-full">
            <Image
              src="/images/verify/verify-product.svg"
              alt="Nicozy product packaging"
              fill
              className="object-cover object-[50%_45%]"
              sizes="320px"
              priority
            />
          </div>
        </div>

        <div className="relative z-10 -mt-10 flex flex-col items-center sm:-mt-12">
          <div
            className="relative z-20 flex size-[88px] shrink-0 items-center justify-center drop-shadow-md sm:size-[100px]"
            aria-hidden
          >
            {variant === "success" ? (
              <ShieldSuccessIcon className="size-[88px] sm:size-[100px]" />
            ) : (
              <ShieldWarningIcon className="h-[100px] w-[88px] sm:h-[112px] sm:w-[96px]" />
            )}
          </div>

          <section
            className={`relative -mt-11 w-full overflow-hidden rounded-[40px] px-6 pb-8 pt-14 shadow-[0_12px_40px_rgba(0,0,0,0.08)] sm:-mt-12 sm:px-8 sm:pb-10 sm:pt-16 ${copy.cardBg}`}
            aria-labelledby="access-reward-result-heading"
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-16 overflow-hidden rounded-t-[40px] opacity-[0.14]"
              aria-hidden
            >
              <div
                className="absolute inset-0 bg-[repeating-linear-gradient(105deg,rgba(255,255,255,0.9)_0,rgba(255,255,255,0.9)_1px,transparent_1px,transparent_10px)]"
                style={{ maskImage: "linear-gradient(to bottom, black, transparent)" }}
              />
            </div>
            <div className="pointer-events-none absolute -bottom-16 right-[-20%] size-64 rounded-full bg-[rgba(255,255,255,0.2)] blur-[64px]" aria-hidden />

            <div className="relative text-center text-white">
              <h2
                id="access-reward-result-heading"
                className="font-unbounded text-[20px] font-normal leading-8 tracking-[-0.6px] sm:text-[22px] sm:leading-8"
              >
                {copy.title}
              </h2>
              <p className="mt-3 text-[18px] font-bold leading-[29px] text-[rgba(255,255,255,0.95)]">
                {copy.subtitle}
              </p>

              <div className="mx-auto my-6 h-px max-w-[300px] bg-[rgba(255,255,255,0.45)]" aria-hidden />

              <div className="space-y-4 text-center text-[12px] font-light uppercase leading-relaxed tracking-wide text-white sm:text-[12px]">
                {copy.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Link
                  href={copy.cta.href}
                  className="flex h-12 w-full max-w-[258px] items-center justify-center rounded-[80px] bg-white font-unbounded text-[12px] font-normal uppercase tracking-[1.2px] text-black transition hover:bg-neutral-100"
                >
                  {copy.cta.label}
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

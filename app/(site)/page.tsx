import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { HomeCommunity } from "@/components/marketing/home/home-community";
import { HomeContact } from "@/components/marketing/home/home-contact";
import { HomeFeatures } from "@/components/marketing/home/home-features";
import { HomeHero } from "@/components/marketing/home/home-hero";
import { HomeMarquee } from "@/components/marketing/home/home-marquee";
import { HomeProductGallery } from "@/components/marketing/home/home-product-gallery";
import { HomeScrollReveal } from "@/components/marketing/home/home-scroll-reveal";
import { HomeVerify } from "@/components/marketing/home/home-verify";
import { getQueryClient } from "@/app/get-query-client";
import { bannerQueryOptions, tiktokVideosQueryOptions } from "@/lib/api/query-options";

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(bannerQueryOptions("home"));
  await queryClient.prefetchQuery(tiktokVideosQueryOptions(6));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <HomeHero />
        <HomeMarquee />
        <HomeScrollReveal>
          <HomeProductGallery />
          <div data-home-reveal>
            <HomeFeatures />
          </div>
          <div data-home-reveal>
            <HomeVerify />
          </div>
          <div data-home-reveal>
            <HomeCommunity />
          </div>
          <div data-home-reveal>
            <HomeContact />
          </div>
        </HomeScrollReveal>
      </main>
    </HydrationBoundary>
  );
}

import {
  AccessRewardView,
} from "@/components/marketing/access-reward/access-reward-view";
import { rewardQueryOptions } from "@/lib/api/query-options";
import { getQueryClient } from "@/app/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};


/**
 * QR / access verification result (Figma: success 112:2, failure 112:271).
 *
 * When a backend is connected, replace `resolveVariant` with the API response for `id`.
 * For now: `?status=failure` (or `failed`, `error`, `unsuccessful`) or `?error=1` shows the failure UI;
 * otherwise the success UI is shown.
 */
export default async function AccessRewardPage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(rewardQueryOptions(id));
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AccessRewardView verificationId={id} />
    </HydrationBoundary>
  );
}

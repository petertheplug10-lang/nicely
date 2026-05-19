import type { Metadata } from "next";
import { ShopsGatewayView } from "@/components/marketing/shops/shops-gateway-view";

export const metadata: Metadata = {
  title: "Shops",
  description:
    "Open the Nicozy shop for your region. Online ordering is available in the US and Canada.",
};

export default function ShopsPage() {
  return <ShopsGatewayView />;
}

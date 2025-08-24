import HeaderNormal from "@/components/headerNormal";

export default function OthersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderNormal />
      <main>{children}</main>
    </>
  );
}
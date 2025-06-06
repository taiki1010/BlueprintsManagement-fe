import BlueprintMenu from "@/components/ReadOnly/BlueprintMenu/BlueprintMenu";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "図面閲覧ページ",
  description: "図面を閲覧するページです。",
};

const ManagementLayout = async({
  children, params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{id: string}>
}>) => {
  const {id} = await params;
  return (
    <div className="flex h-screen">
      <main className="flex-1 h-screen">{children}</main>
      <BlueprintMenu siteId={id}/>
    </div>
  )
}

export default ManagementLayout
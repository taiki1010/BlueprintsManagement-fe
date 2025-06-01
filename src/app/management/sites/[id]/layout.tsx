
import BlueprintMenu from "@/components/BlueprintMenu/BlueprintMenu";

const ManagementLayout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ id: string, blueprintId?: string}>
}>) => {
  const { id, blueprintId } = await params;
  return (
    <div className="flex h-full">
      <div className="h-screen flex-1">{children}</div>
      <BlueprintMenu siteId={id} isSiteDetailPage={!blueprintId} />
    </div>
  )
}

export default ManagementLayout

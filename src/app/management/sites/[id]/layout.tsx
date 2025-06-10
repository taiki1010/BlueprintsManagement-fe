import BlueprintMenu from "@/components/Management/BlueprintMenu/BlueprintMenu";

const ManagementLayout = async ({
  children, params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ id: string }>
}>) => {
  const {id} = await params;
  
  return (
    <div className="flex h-full">
      <div className="h-screen flex-1">{children}</div>
      <BlueprintMenu siteId={id} />
    </div>
  )
}

export default ManagementLayout

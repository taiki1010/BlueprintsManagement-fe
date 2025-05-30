"use client";

import BlueprintMenu from "@/components/BlueprintMenu/BlueprintMenu";

const ManagementLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-full">
      <div className="h-screen flex-1">{children}</div>
      <BlueprintMenu />
    </div>
  )
}

export default ManagementLayout

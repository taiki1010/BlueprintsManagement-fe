"use client";

import SideMenu from "@/components/SideMenu/SideMenu";
import SiteInfoProvider from "@/context/SiteInfoContext";

const ManagementLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SiteInfoProvider>
    <div className="flex h-screen">
      <SideMenu />
      <main className="flex-1 h-screen">{children}</main>
    </div>
    </SiteInfoProvider>
    
  )
}

export default ManagementLayout
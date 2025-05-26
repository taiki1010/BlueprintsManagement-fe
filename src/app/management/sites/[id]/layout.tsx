"use client";

import SiteInfo from "@/components/Site/SiteInfo/SiteInfo";
import SiteIdProvider from "@/context/SiteIdContext";

const ManagementLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SiteIdProvider>
      <div className="flex h-full">
        <div className="flex-1 px-10 py-10">
          <SiteInfo />
        </div>
        <div className="h-screen">{children}</div>
      </div>
    </SiteIdProvider>
    
    
  )
}

export default ManagementLayout
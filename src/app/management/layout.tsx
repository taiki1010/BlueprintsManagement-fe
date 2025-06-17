import SideMenu from "@/components/Management/SideMenu/SideMenu";

const ManagementLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-screen">
      <SideMenu />
      <main className="flex-1 h-screen">{children}</main>
    </div>
  )
}

export default ManagementLayout

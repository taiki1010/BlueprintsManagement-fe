"use client";

import CatchErrorComponent from "@/components/Error/CatchErrorComponent";
import SiteInfo from "@/components/Site/SiteInfo/SiteInfo";
import SiteIdProvider from "@/context/SiteIdContext";
import { ErrorBoundary } from "react-error-boundary";



const ManagementLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SiteIdProvider>
      <ErrorBoundary fallbackRender={CatchErrorComponent}>
        <div className="flex h-full">
          <div className="flex-1 px-10 py-10">
            <SiteInfo />
          </div>
          <div className="h-screen">{children}</div>
        </div>
      </ErrorBoundary>
    </SiteIdProvider>
  )
}

export default ManagementLayout

// const CatchErrorComponent = ({error, resetErrorBoundary}: {error: string}) => {
//   useEffect(() => {
//     resetErrorBoundary();
//   }, [])
//   return (
//     <div role="alert" className="px-10 py-10">
//       <p className="text-2xl text-red-500 font-bold mb-4">エラーが発生しました: {error}</p>
//       <Link href="/management/" className="text-2xl text-blue-500 underline">トップページに戻る</Link>
//     </div>
//   );
// }